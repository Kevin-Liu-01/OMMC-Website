import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Profile from "../Components/Profile";
import React, { useState } from "react";

const currentMembers = [
  {
    id: 1,
    name: "Alexander Wang",
    href: "#",
    imageSrc: "/staff/alexander.png",
    imageAlt: "Alexander Wang",
    role: "CEO",
    bio: "Alexander is currently a junior at Millburn High School. He is a 2-time IMO Gold Medalist in 2023 and 2024. He won a gold medal at RMM 2023 and APMO 2024. He is a 2-time USAMO Gold Medalist and obtained a perfect score in 2023. He attended the prestigious MOP program from 2022-2024. He attended the MIT PRIMES-USA math research program in 2024. In his spare time, he enjoys playing sports, especially tennis.",
  },
  {
    id: 2,
    name: "Charles Zhang",
    href: "#",
    imageSrc: "/staff/charles.jpeg",
    imageAlt: "Charles Zhang",
    role: "Head of Logistics",
    bio: "Charles is a junior in Southern California, and is the Head of Logistics for OMMC.  He is a 4-time Math Olympiad qualifier, and has scored 11 on the AIME 4 years in a row.  He is a researcher under the MIT PRIMES-USA program, and an attendee of Ross Indiana 2023 and SPARC 2024.  In his free time, he likes to play difficult 2017-2018 indie games, such as Hollow Knight, Celeste, and Cuphead.",
  },
  {
    id: 3,
    name: "Mahith Gottipati",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Mahith Gottipati",
    role: "Head of Content Creation",
    bio: 'Mahith is a junior from Texas. He has qualified for the AIME three times and has placed well in several other contests. Apart from mathematics, he enjoys physics, coding, and playing table tennis and chess. You can find him on chess.com under the handle "rocketsrimsg," where he plays (a little too much) puzzle rush. ',
  },
  {
    id: 4,
    name: "Sagarika Yagnyeshwaran",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Sagarika Yagnyeshwaran",
    role: "Head of Outreach",
    bio: "Sagarika is a high school junior in Manalapan High School's Science and Engineering Program. She is OMMC's Head of Outreach and makes flyers, posters, and other social media content. She is a math tutor and is predominantly interested in statistics. In her free time, she plays piano and has won various international competition for it, including the chance to perform at Carnegie hall. A few of her interests include finance, politics, music, and reading. Sagarika is always open to trying new things and meeting all kinds of people!",
  },
  {
    id: 5,
    name: "Pranshu Suyal",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Pranshu Suyal",
    role: "CTO",
    bio: "Pranshu is a senior at High Technology High School, NJ and is the CTO for OMMC. He is an avid engineer fluent in the latest web frameworks, including React, TypeScript, and Next, as well as general-purpose languages like Python, Java, and C++. He enjoys working on startup ideas and is also an AIME qualifier.",
  },
  {
    id: 6,
    name: "Tanishq Pauskar",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Tanishq Pauskar",
    role: "Head of Content Revision",
    bio: "Tanishq Pauskar is a junior who enjoys solving and writing math problems. He is particularly fond of the subject combinatorics. Over the past few months, Tanishq has worked to test solve the OMMC exam. He has qualified for the USAJMO 3 times, becoming a USAJMO winner in 2022. In his spare time, he enjoy writing math problems and playing board games such as chess and connect 4.",
  },
  {
    id: 7,
    name: "Aprameya Tripathy",
    href: "#",
    imageSrc: "/staff/aprameya.jpg",
    imageAlt: "Aprameya Tripathy",
    role: "Head of Content Revision",
    bio: "Aprameya Tripathy is a high school senior who works as the head of content revision at OMMC. He has attended MOP twice and is a USAMO gold medalist. In his free time, you can find him baking various confections, writing geometry problems, and teaching math to others.",
  },
  {
    id: 8,
    name: "Ritwin Narra",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Ritwin Narra",
    role: "Content Creation",
    bio: "Ritwin is currently a junior in California and a Test Solver for OMMC. Ritwin has qualified for USACO camp and has qualified for the AIME since 7th grade, and his math accomplishments include a 72 on USAMTS and a 24 on BAMO (one point under Honorable Mention). In school, he teaches both programming and math. Apart from math, he loves coding: he's a USACO Platinum participant and reached Codeforces Master. Also, he likes cubing, especially the Square-1, and aims for a sub-20 3x3 average.",
  },
  {
    id: 9,
    name: "Catherine Ji",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Catherine Ji",
    role: "Outreach",
    bio: "Catherine is a high school sophmore from Georgia. She is on OMMC’s outreach team, and is passionate about designing social media content and engaging with the math community. She loves mathematical problem solving, and is especially fond of geometry. Outside of math, she is also an archer and a singer. She has won prizes at multiple international vocal competitions and has performed at Carnegie Hall. In her free time, she enjoys baking, curating music, and reading Agatha Christie.",
  },
  {
    id: 10,
    name: "Isaac Chen",
    href: "#",
    imageSrc: "/staff/isaac.png",
    imageAlt: "Isaac Chen",
    role: "Content Contributor",
    bio: "Isaac Chen is a senior at Princeton Day School in Princeton, NJ, who works as a content contributor for OMMC. He has contributed original problems to OMMC and helped organize the 2024 Rutgers Exposition in Problem Solving (REPS). Isaac is a 2023 USAJMO Top Winner, 2024 USAMO Silver Medalist, and attended MOP 2023. He also proudly captains the nationally renowned Lehigh Valley Math Team. Last summer, Isaac attended Research Science Institute (RSI) 2024 and conducted research in discrete geometry. He loves spreading his passion for problem solving through other outlets, including as a host of The Curious Cube, the official American Mathematics Competitions (AMC) student podcast sponsored by the Mathematical Association of America (MAA). Outside of math, Isaac enjoys hanging out with friends, playing and watching basketball, high-quality writing, learning to cook, and speedcubing.",
  },
  {
    id: 11,
    name: "Andrew Lin",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Andrew Lin",
    role: "Content Contributor",
    bio: "Andrew Lin is a senior from New Jersey who officially writes problems for OMMC. He has qualified for MOP three times and is a USAMO gold medalist. In addition, he has achieved top-ten finishes at HMMT and ARML, and is part of the Lehigh Valley Fire team. He goes by bluelinfish on AoPS and Discord. Outside of math, he spends too much of his time playing card games.",
  },
  {
    id: 11,
    name: "Vinay Singamsetty",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Vinay Singamsetty",
    role: "Website Developer",
    bio: "Vinay is a junior in California. He is a developer for OMMC and contributed greatly to the testing portal and website. He is an avid developer and is skilled at developing web applications focused on responsive design, positive UX/UI, SEO and more. He is fluent in React/Next, Vue/Nuxt, JS/HTML/CSS, Sass and general purpose languages like Node JS, Python, C++, C, C#, Java, and more. He's good at developing algorithms and vital coding concepts such as control flow, program structure, versioning, debugging, and formatting. He is also a math enthusiast, achieving honor roll on AMC 8 previously and is currently working on honing his math skills.    ",
  },
  {
    id: 12,
    name: "Vikram Sarkar",
    href: "#",
    imageSrc: "/staff/vikram.jpg",
    imageAlt: "Vikram Sarkar",
    role: "Content Contributor",
    bio: "Vikram Sarkar is a test solver for the OMMC team and is currently a junior. His achievements include qualifying for the USA Junior Math Olympiad (USAJMO) three times and qualifying for the prestigious Math Olympiad Program (MOP) in 2024. Outside of math, he likes playing video games, listening to music, and coding.",
  },
  {
    id: 13,
    name: "Calvin Wang",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Calvin Wang",
    role: "Content Contributor",
    bio: "Calvin is a sophomore in Virginia who has participated in various math competitions such as AIME and MATHCOUNTS. He made AIME since 6th grade, got a perfect score in AMC8 in 6th grade, was the runner up in MATHCOUNTS Nationals in 8th grade, and has been actively doing many math competitions. Calvin enjoys many forms of math, and wants others to enjoy them, too. He is an active member on Discord(going by jatloe) and AoPS(going by cj13609517288). In his free time, Calvin enjoys playing and making puzzles, playing games, and wasting time on Discord.",
  },
  {
    id: 14,
    name: "Chris Bao",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Chris Bao",
    role: "Problem Committee",
    bio: "Chris Bao is a junior at the Davidson Academy of Nevada. He has qualified for the USAJMO three times and the USAMO in 2023. He has also participated in MOP 2022 and MOP 2023. Besides math, Chris also plays chess, piano, and works on coding a chess engine in his free time.",
  },
  {
    id: 15,
    name: "Bryan Guo",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Bryan Guo",
    role: "Content Contributor",
    bio: "Bryan Guo is a problem contributor for the OMMC team and is currently in a sophomore. He has achieved Distinguished Honor Roll on the AMC 10 several times, and qualified for the 2022 USAJMO. He is a two-time USAMTS silver medalist and has participated in the A2 team for SD ARML. In the 2022 AMC cycle, he achieved a perfect score on the AMC 10. Apart from math, he enjoys playing tennis and talking on Discord.",
  },
  {
    id: 16,
    name: "Rohan Bodke",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Rohan Bodke",
    role: "Content Contributor",
    bio: "Rohan is a junior in California who works for OMMC as a content contributor. He attended MOP and started math contests in 2018, when he was in sixth grade. Since then, he has qualified for the AIME three times, and the USAJMO twice, winning it in 2022. He was also part of California's MATHCOUNTS team in 2021, and was sixteenth place at nationals. In addition to math, he likes to play chess and other board games, both with his friends and online. He also enjoys doing extremely weird things no one else would do, such as reading WP:UA. He was a top 20 player in the now-defunct mobile game _Big Bang Racing_.",
  },
  {
    id: 16,
    name: "Sargam Mondal",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Sargam Mondal",
    role: "Content Contributor",
    bio: "Sargam is a senior at the Edison Academy Magnet School. She is an avid competitor in math competitions, having placed 1st, 2nd, and 3rd at ARML in 2023, 2022, and 2024 respectively. Additionally, she is a two-time PUMaC Division A Individual Finalist, placed in the top 50 at HMMT February subject tests, and ranked in the top 10 at Girls in Math at Yale. She is also a participant in the MIT PRIMES-USA program. Outside of math competitions, she is very interested in algebraic geometry.",
  },
  {
    id: 17,
    name: "Andrew Brahms",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Andrew Brahms",
    role: "Content Contributor",
    bio: "Andrew is a senior from New Jersey. He is a researcher under the MIT PRIMES-USA Program and USAJMO Honorable Mention. He has qualified for the AIME five times and made Distinguished Honor Roll for the AMC 10. Outside of math, Andrew enjoys swimming and bicycling. ",
  },
  {
    id: 18,
    name: "Daniel Jeelani",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Daniel Jeelani",
    role: "Content Contributor",
    bio: "Daniel is a Senior at Gulf Asian English School in UAE, he has been studying for Physics and Math Olympiads since Junior Year, he mostly works at non-profit organizations and strives to improve them with my help. currently he is the CEO/Founder of Online Integration Bee, CHRO at Futracode, Outreach Officer at Finward, Fundraising Director at STEMIVERSE and finally Web Content Manager at ViSTEM; an organization with 1,600+ students aiming to educate high school students in the field of stem and computer science. ",
  },
  {
    id: 19,
    name: "Yuyang Zhang",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Yuyang Zhang",
    role: "Content Contributor",
    bio: "Yuyang Zhang is a senior in Vermont. He has achieved Distinguished Honor Roll on the AMC 10 in his freshman and sophomore year, and qualified for the 2022 USAJMO. He is currently the captain of his high school math team that has won 5 years consecutively in his state. Besides math, he also really enjoy playing tennis in his free time. ",
  },
  {
    id: 20,
    name: "Rohan Garg",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Rohan Garg",
    role: "Content Contributor",
    bio: "Rohan is a junior in the Bay Area. He has qualified for AIME 4 times, USAJMO once, and USAMO once, getting a Bronze medal. He got a perfect score on the AMC 10 and a 13 on AIME. He is a researcher under the MIT PRIMES-USA program. Apart from math, he does competitive programming and is a Platinum contestant and a Master on codeforces. ",
  },
  {
    id: 21,
    name: "Jennifer Hu",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Jennifer Hu",
    role: "Content Contributor",
    bio: "Jennifer is a high school junior from Indiana. Jennifer is a 2-time AIME Qualifier and a MPfG Qualifier, and she also attended the G2 Math Program in 2024. She tutors various math topics to middle-high school students, and especially enjoys geometry. Jennifer also enjoys studying chemistry, crocheting, and listening to music in her spare time. ",
  },
  {
    id: 22,
    name: "Culver Kwan",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Culver Kwan",
    role: "Content Contributor",
    bio: "Culver is a junior at Diocesan Boys' School in Hong Kong. He enjoys both mathematics and programming, and participates in olympiads for both of them. He participated in IMO 2023, 2024 and got bronze and silver medals respectively, and got a silver medal at IOI 2024. His peak rank on Codeforces is Grandmaster. He has also done research on graph theory in the summer leading up to his sophomore year. He likes writing both math problems and informatics problems, and has set a number of quality problems in both. ",
  },
  {
    id: 23,
    name: "Jiya Dani",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Jiya Dani",
    role: "Content Contributor",
    bio: "Jiya is a junior in Texas and is a problem writer and test solver for OMMC. She is also an Athemath teacher, and attended MOP 2024, Ross 2023, and is currently doing mathematics research through the MIT PRIMES-USA program. In her free time, she enjoys tinkering with electronics and playing or listening to calm guitar music.",
  },
  {
    id: 24,
    name: "Tarun Rapaka",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Tarun Rapaka",
    role: "Content Contributor",
    bio: "Tarun is a sophomore from The Woodlands, Texas. In 2024 he qualified for the USAJMO and got Honors, 2 points shy of the MOP cutoff. He is also a 3-time AIME qualifier, a 2023 AMC 10 perfect scorer, a 2-time ARML Team High Scorer, and a USAMTS Silver medalist. He was an attendee of Canada/USA Mathcamp 2024. In his spare time, he likes to work on hard Olympiad geometry problems. His hobbies include piano, rock climbing, and speed cubing.",
  },
  {
    id: 25,
    name: "Casi",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Casi",
    role: "Content Contributor",
    bio: "Casi is a 10th grader from Oregon. She qualified for USAJMO for the first time last year. She really enjoys solving math problems, especially number theory. In her spare time, she likes to solve math puzzles, play the piano, and exercise.",
  },
  {
    id: 26,
    name: "Akshaj Arora",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Akshaj Arora",
    role: "Content Contributor",
    bio: "Akshaj is freshman at Northview High School in Georgia. His math achievements include USAJMO Honors, 3x MATHCOUNTS Nationals, and Distinguished Honor Roll in AMC-10. Apart from Math, he loves programming and knows JavaScript, Typescript, Python, and C++. He also plays Clarinet and video games in his free time.",
  },
  {
    id: 27,
    name: "Eric Guo",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Eric Guo",
    role: "Content Contributor",
    bio: "Eric is a freshman from High Technology High School in New Jersey. He has qualified for AIME since 7th grade and has achieved other distinctions such as AMC10, 8 DHR and is the 2023 JHMMC winner. His favorite math subject is algebra, followed by geometry. Besides math he enjoys tennis, coding, physics, current events, and chatting on Discord with friends. He is also a big geography fan and qualified for Geography Bee Nationals in 2023. You can find him on AOPS as eg4334 or on Discord as eric4334.",
  },

  {
    id: 28,
    name: "Vihaan Gupta",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Vihaan Gupta",
    role: "Content Contributor",
    bio: "Vihaan is a current freshman who qualified for USA(J)MO for the first time last year. He participated on the SFBA/NorCal A1 team in ARML, and he enjoys participating in various competitions (as well as writing a few).",
  },
  {
    id: 29,
    name: "Sanjay",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Sanjay",
    role: "Content Contributor",
    bio: "Sanjay is an 8th grader in Florida. He has worked with several math competitions in the past, such as AMC, AIME, and MathCounts. He also enjoys coding, especially USACO problems. He has experience in C++, Java, Javascript, HTML, and Python. Other than that, he likes to play basketball, play table tennis, and swim. He is aiming for a sub 25 second 50 freestyle. Also, he has won the Duos Cash Cup on Fortnite a total of 3 times, with all of them being consecutive. This year, he wants to make USACO Gold, make AIME and USAJMO, and make the ARML B or A team for Florida.",
  },
];

const pastMembers = [
  {
    id: 1,
    name: "Evan Chang",
    href: "#",
    imageSrc: "/staff/evan.png",
    imageAlt: "Evan Chang",
    bio: "Evan Chang is an incoming freshman at MIT and was the previous CEO for OMMC. In 2023, he was a USAMO Gold Medalist and placed 12th out of all students nationwide.  He was a MOP camper in 2022 and 2023 and is a SPARC camper in 2023. He is an intern for LIVE by Po Shen Loh. Evan also currently studies piano and music composition.",
  },
  {
    id: 2,
    name: "Ishaan Akula",
    href: "#",
    imageSrc: "/staff/ishaan.png",
    imageAlt: "Ishaan Akula",
    bio: "Ishaan is an incoming freshman at Stanford University. He cofounded OMMC with Evan Chang in September of 2020, and worked as a director for OMMC and handled the partnership and impact aspect of the competition, including work with sponsors, partners, and donors. He was awarded Honorable Mention for Environmental Science in the Jersey Shore Science Fair. He won 1st place at the state-wide regional bee, qualifying for the National Scripps Spelling Bee. He specializes in UI/UX design and mobile app development using Flutter programming. Furthermore, he is actively involved in the Performing Arts, demonstrating leadership and acting skills in school musicals and performing with his a cappella group, 'Tech-appella.'",
  },
  {
    id: 3,
    name: "Bill Fei",
    href: "#",
    imageSrc: "/staff/bill.png",
    imageAlt: "Bill Fei",
    bio: "Bill Fei is an incoming freshman at Columbia University. He was an assistant director for OMMC and a Coca-Cola Scholarship Seminfinalist. He participates in competitive programming and competition math. He is a USACO Gold Medalist, a three-time AIME qualifier, and has achieved Distinguished Honor Roll on the AMC 10. He won first place in the ICTM math competition in Indiana, and coaches his school’s MATHCOUNTS team. Besides math, he does many other things in his spare time. He enjoys playing the viola and has been in the Indiana All-State Orchestra 2 years in a row and was the sectional principle of the viola section for both his years in the Indiana Junior All-State Orchestra. He also studies piano and has won awards at the Indiana State Fair piano competition. In addition, he enjoys being on his school’s debate team. He was on his school’s state Public Forum debate roster, and placed 5th at his district’s Congressional Debate. In his free time, he enjoys procrastinating and sleeping.",
  },
  {
    id: 4,
    name: "Kevin Liu",
    href: "#",
    imageSrc: "/staff/kevin.png",
    imageAlt: "Kevin Liu",
    bio: "Kevin is an incoming freshman at Princeton University. He attended the Governor's School of Engineering and Technology in New Jersey and is currently an SWE intern at Bloomberg LP. He cofounded OMMC with Evan Chang in September of 2020, and currently works as the Chief Technology Officer for OMMC, handling the online aspect of the competition, including the official OMMC Website, Test Portal, and OMMC Atlas. He uses the latest frontend/backend languages and technologies including Next13, Typescript, React, and Tailwind. He also enjoys participating in college hackathons like PennApps at the University of Pennsylvania.",
  },
  {
    id: 5,
    name: "Advika Vuppala",
    href: "#",
    imageSrc: "/staff/advika.jpeg",
    imageAlt: "Advika Vuppala",
    bio: "Advika Vuppala is an incoming freshman at Carnegie Mellon University. She worked on Marketing and Social Media for OMMC last year, and also helped with content creation for the website. This year, she helped with Outreach and Social Media. Advika served as Marketing and Outreach director for cypHER, and has a lot of experience with managing professional social media accounts. In her free time, she loves playing lacrosse, baking, hiking, and biking.",
  },
  {
    id: 6,
    name: "Ananya Vuppala",
    href: "#",
    imageSrc: "/staff/ananya.jpeg",
    imageAlt: "Ananya Vuppala",
    bio: "Ananya is an incoming freshman at Yale University. She was on OMMC's social media and outreach team, and helped out with making flyers and exploring social media design. She's a math tutor for students in elementary and middle school, and loves working with students to be able to work on their strengths and weaknesses and be part of their learning experience. A few of her hobbies include playing lacrosse, designing content, hiking, exploring finance, and many more. Ananya loves meeting new people and trying new things!",
  },
  {
    id: 7,
    name: "Vivian Loh",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Vivian Loh",
    bio: "Vivian Loh is an incoming freshman at Caltech who worked as a content contributor for OMMC. She is a 2-time EGMO gold medalist (in 2022 and 2023) and is a 3-time MOP qualifier.",
  },
  {
    id: 8,
    name: "Srinivas Arun",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Srinivas Arun",
    bio: "Srinivas Arun is an incoming freshman at MIT. He was a testsolver for OMMC. Srinivas has attended RSI and received a bronze medal on USAMO 2022, qualifying for MOP. He has participated in math competitions since 6th grade, qualifying for the AIME four times and the USA(J)MO three times. He has also qualified for MathCounts Nationals, representing Colorado, and he was the 3rd place individual at ARML 2021. Outside of math, he enjoys competitive programming, biking, and teaching.",
  },
  {
    id: 9,
    name: "Sheldon Tan",
    href: "#",
    imageSrc: "/staff/sheldon.png",
    imageAlt: "Sheldon Tan",
    bio: "Sheldon Tan graduated from Monte Vista High School in Danville, California. He qualified for the USAJMO in 2022 and spent the last two summers at the Ross Math Program. Besides math, he enjoys playing the piano, writing, hiking, and Frisbee.",
  },
  {
    id: 10,
    name: "Neal Yan",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Neal Yan",
    bio: "Neal is a geometry addict hailing from Wisconsin, serving as a problem writer / testsolver / marketer for OMMC. He has attended MOP and is also the chief math officer of the regional organization known as Youth EUCLID Association. In math contests, he's made USA(J)MO since 8th grade, and has achieved multiple individual top fives at collegiate math tournaments like BMT, SMT, and JHMT. During most of the day, he enjoys solving and attempting to write olympiad problems, grinding OTIS, spamming / calling friends on Discord, listening to electronic songs, and blogging on AoPS under the username 'crazyeyemoody907'.",
  },
];

export default function Staff(props) {
  const [activeTab, setActiveTab] = useState("current");

  return (
    <div
      className={
        (props.dark ? "dark " : "") +
        "min-h-screen bg-slate-100 dark:bg-gray-900 duration-150"
      }
    >
      <Navbar page="staff" dark={props.dark} setDark={props.setDark} />
      <Banner />
      <header className="drop-shadow-lg duration-150 bg-white dark:bg-[#182133]">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-slate-100">
            Staff
          </h1>
          <div className="flex rounded-lg overflow-hidden border border-red-800 dark:border-white">
            <button
              className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                activeTab === "current"
                  ? "bg-red-800 text-white dark:bg-white dark:text-red-800"
                  : "bg-white text-red-800 hover:bg-red-100 dark:bg-[#182133] dark:text-white dark:hover:bg-gray-800"
              }`}
              onClick={() => setActiveTab("current")}
            >
              Current
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                activeTab === "past"
                  ? "bg-red-800 text-white dark:bg-white dark:text-red-800"
                  : "bg-white text-red-800 hover:bg-red-100 dark:bg-[#182133] dark:text-white dark:hover:bg-gray-800"
              }`}
              onClick={() => setActiveTab("past")}
            >
              Former
            </button>
          </div>
        </div>
      </header>
      <div className="w-full mx-auto max-w-7xl px-4 md:px-10 pt-10">
        <div className="mt-6 grid grid-cols-1 md:gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {(activeTab === "current" ? currentMembers : pastMembers).map(
            (member) => (
              <Profile key={member.id} member={member} />
            )
          )}
        </div>
      </div>
    </div>
  );
}
