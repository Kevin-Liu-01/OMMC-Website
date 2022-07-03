import React, { useState, useEffect } from "react";
// This will require to npm install axios
import axios from "axios";
import { Link } from "react-router-dom";
import Constants from "../config.js";
import Fuse from "fuse.js";

let Latex = require("react-latex");

const Record = (props) => {
  const [showAnswer, setShowAnswer] = useState(true);
  return (
    <tr className="headerRow">
      <td className="questionColumn">
        <Link to={"/view/" + props.record._id}>
          <div className="questionInternal">
            <Latex>{props.record.question_name}</Latex>
          </div>
        </Link>
      </td>
      <td className="solutionColumn">
        {showAnswer === true && (
          <div style={{ textAlign: "center" }}>
            <button
              className="viewQuestion"
              onClick={() => setShowAnswer(false)}
            >
              View Solution
            </button>
          </div>
        )}
        {showAnswer === false && (
          <div className="solutionInternal">
            <Latex>{props.record.question_position}</Latex>
          </div>
        )}
      </td>
      <td className="tableColumnElement">
        <Link to={"/view/" + props.record._id}>
          <div className="tableLinkElement">{props.record.question_level}</div>
        </Link>
      </td>
      <td className="tableColumnElement">
        <Link to={"/view/" + props.record._id}>
          <div className="tableLinkElement">{props.record.question_topic}</div>
        </Link>
      </td>
      <td className="tableColumnElement">
        <Link to={"/view/" + props.record._id}>
          <div className="tableLinkElement">{props.record.question_comp}</div>
        </Link>
      </td>

      <td style={{ textAlign: "center" }}>
        <Link to={"/view/" + props.record._id}> Click to Expand</Link>
        {/* |
        <a
          href="/"
          onClick={() => {
            props.deleteRecord(props.record._id);
          }}
        >
          Delete
        </a> */}
      </td>
    </tr>
  );
};

const RecordList = (props) => {
  // This is the constructor that shall store our data retrieved from the database
  const [questions, setQuestions] = useState([]);
  const [difficultyFilter, setDifficultyFilter] = useState("");
  const [topicFilter, setTopicFilter] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const searchData = () => {
    if (searchInput === "") {
      axios
        .get(`${Constants.SERVER_HOST}/record/`)
        .then((response) => {
          console.log(
            `/record/ returned response from: ${Constants.SERVER_HOST}/record/`
          );
          setQuestions(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      return;
    }
    const fuse = new Fuse(questions, {
      keys: ["question_name"],
    });
    const result = fuse.search(searchInput);

    const matches = [];
    if (!result.length) {
      axios
        .get(`${Constants.SERVER_HOST}/record/`)
        .then((response) => {
          console.log(
            `/record/ returned response from: ${Constants.SERVER_HOST}/record/`
          );
          setQuestions(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      result.forEach(({ item }) => {
        matches.push(item);
      });
      setQuestions(matches);
    }
  };
  // This method will get the data from the database.
  useEffect(() => {
    axios
      .get(`${Constants.SERVER_HOST}/record/`)
      .then((response) => {
        console.log(
          `/record/ returned response from: ${Constants.SERVER_HOST}/record/`
        );
        setQuestions(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [difficultyFilter]);

  // This method will delete a record based on the method
  async function deleteRecord(id) {
    // axios.delete(`${Constants.SERVER_HOST}/${id}`).then((response) => {
    //   console.log(response.data);
    // });

    axios.post(`${Constants.SERVER_HOST}/delete/${id}`).then((response) => {
      console.log(response.data);
    });

    console.log("Deleterecord is called");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setQuestions(questions.filter((el) => el._id !== id));
  }

  // This method will map out the users on the table
  function recordList() {
    return questions.map((currentrecord) => {
      return (
        <Record
          record={currentrecord}
          deleteRecord={deleteRecord}
          key={currentrecord._id}
        />
      );
    });
  }

  function difficultyFilterSet() {
    return questions
      .filter(
        (el) =>
          (difficultyFilter === "" || el.question_level === difficultyFilter) &&
          (topicFilter === "" || el.question_topic === topicFilter)
      )

      .map((currentrecord) => {
        return (
          <Record
            record={currentrecord}
            deleteRecord={deleteRecord}
            key={currentrecord._id}
          />
        );
      });
  }

  function topicFilterSet() {
    return questions
      .filter(
        (el) =>
          (topicFilter === "" || el.question_topic === topicFilter) &&
          (difficultyFilter === "" || el.question_level === difficultyFilter)
      )

      .map((currentrecord) => {
        return (
          <Record
            record={currentrecord}
            deleteRecord={deleteRecord}
            key={currentrecord._id}
          />
        );
      });
  }

  function allFilterSet() {
    return questions
      .filter(
        (el) =>
          el.question_topic === topicFilter &&
          el.question_level === difficultyFilter
      )

      .map((currentrecord) => {
        return (
          <Record
            record={currentrecord}
            deleteRecord={deleteRecord}
            key={currentrecord._id}
          />
        );
      });
  }

  function onDropSubmit(e) {
    setDifficultyFilter(e.target.value);
  }

  function onTopicDropSubmit(e) {
    setTopicFilter(e.target.value);
  }

  function DifficultyDropdown() {
    return (
      <select
        className="dropDown"
        value={difficultyFilter}
        onChange={onDropSubmit}
      >
        <option value=""> Difficulty </option>
        <option value="Elementary">Elementary</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>
    );
  }

  function TopicDropdown() {
    return (
      <select
        className="dropDown"
        value={topicFilter}
        onChange={onTopicDropSubmit}
      >
        <option value=""> Topic </option>
        <option value="Geometry">Geometry</option>
        <option value="Number Theory">Number Theory</option>
        <option value="Algebra">Algebra</option>
        <option value="Combinatorics">Combinatorics</option>
      </select>
    );
  }

  function showListDiff() {
    switch (difficultyFilter) {
      default: {
        return recordList();
      }
      case "":
        return recordList();
      case "Elementary":
        return difficultyFilterSet();
      case "Intermediate":
        return difficultyFilterSet();
      case "Advanced":
        return difficultyFilterSet();
    }
  }

  function showListTopic() {
    switch (topicFilter) {
      default: {
        return recordList();
      }
      case "":
        return recordList();
      case "Geometry":
        return topicFilterSet();
      case "Number Theory":
        return topicFilterSet();
      case "Algebra":
        return topicFilterSet();
      case "Combinatorics":
        return topicFilterSet();
    }
  }

  function filterBody() {
    if (difficultyFilter === "") {
      return showListTopic();
    }
    if (topicFilter === "") {
      return showListDiff();
    } else {
      return allFilterSet();
    }
  }

  function listBody() {
    return (
      <div>
        <head>
          <link
            href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;400&display=swap"
            rel="stylesheet"
          />
        </head>
        <table
          className="table table-hover"
          id="questionTable"
          style={{ marginTop: 20 }}
        >
          <thead className="tableHead">
            <tr className="headerRow">
              <th className="questionRow">Question</th>
              <th className="solutionRow">Solution</th>
              <th className="dropDowns">
                <div align="center">
                  <DifficultyDropdown />
                </div>
              </th>
              <th className="dropDowns">
                <div align="center">
                  <TopicDropdown />
                </div>
              </th>
              <th className="dropDowns">Year</th>
              <th className="dropDowns">Action</th>
            </tr>
          </thead>
          <tbody className="tableBody">
            {filterBody()}
            {questions.length === 0 && (
              <div style={{ height: "100%" }}>
                <div className="errorTitle">Error Code 01</div>
                <div className="serverError">
                  Due to a server error, questions were not able to be
                  retreived. Contact the server admin through OMMC Discord to
                  resolve the issue.
                </div>
              </div>
            )}
          </tbody>
        </table>
      </div>
    );
  }

  // This following section will display the table with the records of individuals.
  return (
    <div className="RecordListContent">
      <div align="center">
        <div className="AtlasDatabaseHeader">Atlas Database</div>
      </div>
      <div className="ListContent">
        <div className="searchBackground">
          <div classname="SearchContent">
            <div className="heroIcon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                id="search"
              >
                <path
                  id="search"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <form className="heroForm">
              <input
                className="SearchInput"
                type="search"
                onChange={(e) => {
                  setSearchInput(e.target.value);
                  searchData();
                }}
                onKeyDown={(e) => {
                  setSearchInput(e.target.value);
                  searchData();
                }}
                value={searchInput}
                placeholder="Search for a specific question from the database"
              />
            </form>
          </div>
        </div>
        <div style={{ backgroundColor: "white" }}>{listBody()}</div>
      </div>
    </div>
  );
};

export default RecordList;
