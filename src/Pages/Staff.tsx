import Navbar from "../Reusable-Elements/Navbar";
import Banner from "../Reusable-Elements/Banner";
import React from "react";

const members = [
  {
    id: 1,
    name: "Evan Chang",
    href: "#",
    imageSrc:
      "https://media.discordapp.net/attachments/760189295067004962/974655089920856074/unknown.png?width=584&height=789",
    imageAlt: "Evan Chang",
    role: "Director",
    bio: "Evan Chang is a sophomore at High Technology High School in Lincroft, New Jersey. He cofounded OMMC with Ishaan Akula in September of 2020. He works as a Director as well as the Head of Content Creation for OMMC. He is a prolific problem writer and is heavily involved with several other student-led math organizations such as Online Youth Math Competition (OYMC), Gaussian Curvature (GC), Online International Mathematical Cup (OIMC), Metrix Math Olympiad (MMO), and Deciphering the Enigma of Math Olympiads (DEMO). Evan has achieved Distinguished Honor Roll on both the AMC 10 and AMC 12. He has qualified for USAJMO and USAMO and achieved a USAMO bronze medal, qualifying for the selective MOP summer camp. He is a two-time USAMTS gold medalist. Besides math, Evan is interested in music and currently studies piano and music composition at the Westminster Conservatory of Music Honors Music Program. He is a MTNA Composition Competition National Finalist and a Golden Key Music Festival Composition Competition National Winner. In his free time, Evan can be found saying silly things online (often in the OMMC Community Discord).",
  },
  {
    id: 2,
    name: "Ishaan Akula",
    href: "#",
    imageSrc:
      "https://cdn.discordapp.com/attachments/760189295067004962/974655072543842345/unknown.png",
    imageAlt: "Ishaan Akula",
    role: "Administrator",
    bio: "Ishaan is a sophomore at High Technology High School in Lincroft, New Jersey. He cofounded OMMC with Evan Chang in September of 2020, and currently works as an administrator for OMMC and handles the website/social media aspect of the competition. He works as a coder for the OMMC website, and the manager for OMMC’s social media pages. In elementary school, he was a finalist in the National Scripps Spelling Bee.",
  },
  {
    id: 3,
    name: "Bill Fei",
    href: "#",
    imageSrc:
      "https://cdn.discordapp.com/attachments/760189295067004962/974655067263209532/unknown.png",
    imageAlt: "Bill Fei",
    role: "Administrator",
    bio: "Bill Fei is a sophomore at West Lafayette Jr./Sr. High School in West Lafayette, Indiana. He is an administrator for OMMC. He participates in competitive programming and competition math. He is a USACO Gold Medalist, a three-time AIME qualifier, and has achieved Distinguished Honor Roll on the AMC 10. He won first place in the ICTM math competition in Indiana, and coaches his school’s MATHCOUNTS team. Besides math, he does many other things in his spare time. He enjoys playing the viola and has been in the Indiana All-State Orchestra 2 years in a row and was the sectional principle of the viola section for both his years in the Indiana Junior All-State Orchestra. He also studies piano and has won awards at the Indiana State Fair piano competition. In addition, he enjoys being on his school’s debate team. He was on his school’s state Public Forum debate roster, and placed 5th at his district’s Congressional Debate. In his free time, he enjoys procrastinating and sleeping.",
  },
  {
    id: 4,
    name: "Kevin Liu",
    href: "#",
    imageSrc:
      "https://cdn.discordapp.com/attachments/753798704082714715/975416571839270952/unknown.png",
    imageAlt: "Kevin Liu",
    role: "Lead Website Developer",
    bio: "Kevin is a sophomore at High Technology High School in Lincroft, New Jersey. He cofounded OMMC with Evan Chang in September of 2020, and currently works as the lead website developer for OMMC, handling the online aspect of the competition. He works as the head coder for the OMMC website and OMMC Atlas. He is fluent in Javascript and React in designing, implementing, and testing software, including web and mobile applications development, API design, functional programming, optimization, system administration, databases, and scalability. In addition to web design and application development, he is fluent in Java and Python for Object-Oriented Programming, focusing on problem-solving and algorithm development, along with core concepts and tools, code implementations, testing program code, correcting errors, and documentation.",
  },
  {
    id: 5,
    name: "Vinay Singamsetty",
    href: "#",
    imageSrc:
      "https://media.discordapp.net/attachments/751497467329118280/977556703505703012/unknown.png",
    imageAlt: "Advika Vuppala",
    role: "Website Developer",
    bio: "Vinay is a freshman in California. He is a developer for OMMC and contributed greatly to the testing portal and website. He is an avid developer and is skilled at developing web applications focused on responsive design, positive UX/UI, SEO and more. He is fluent in React/Next, Vue/Nuxt, JS/HTML/CSS, Sass and general purpose languages like Node JS, Python, C++, C, C#, Java, and more. He's good at developing algorithms and vital coding concepts such as control flow, program structure, versioning, debugging, and formatting. He is also a math enthusiast, achieving honor roll on AMC 8 previously and is currently working on honing his math skills.    ",
  },
  {
    id: 6,
    name: "Vivian Loh",
    href: "#",
    imageSrc:
      "https://media.discordapp.net/attachments/709828147004047400/976857724098846770/Screen_Shot_2022-05-19_at_10.43.32_AM.png",
    imageAlt: "Vivian Loh",
    role: "Content Creator",
    bio: "Vivian Loh is a sophomore at Winchester Thurston School in Pittsburgh, PA. She is a testsolver for OMMC. She received USAJMO winner and an EGMO gold medal in 2022, and has qualified for MOP twice. She has been participating in math contests since 5th grade, qualifying for AIME five times and USAJMO twice, and is particularly enthusiastic about geometry, which she often spends her free time doing. She is also very active on AoPS and Discord (she can be found under the username v4913), and likes biking and talking with friends.",
  },
  {
    id: 7,
    name: "Serena Xu",
    href: "#",
    imageSrc:
      "https://media.discordapp.net/attachments/709828147004047400/976857380497281064/Screen_Shot_2022-05-19_at_10.42.18_AM.png",
    imageAlt: "Serena Xu",
    role: "Content Creator",
    bio: "Serena Xu is a junior who started math competitions at 7th grade. She attended MOP in 2021 and published Rabbit's Geometry while organizing GmathIRL. She contributed problems for OMMC, and test solve MMT. In her free time, she likes reading Naruto, playing video games and listening to Spotify.",
  },
  {
    id: 8,
    name: "Isaac Chen",
    href: "#",
    imageSrc:
      "https://media.discordapp.net/attachments/751497467329118280/978105620496527410/Screen_Shot_2022-05-22_at_9.21.40_PM.png",
    imageAlt: "Isaac Chen",
    role: "Content Creator",
    bio: "Isaac Chen is a freshman at Princeton Day School in Princeton, NJ. He contributes problems to OMMC and other contests such as the Online Youth Mathematics Competition. Isaac is a one-time USAJMO qualifier, one-time AMC 10 DHR awardee, and two-time AIME qualifier. He also placed 17th overall at CMIMC Math 2022 and 5th overall at 2021 NJ MATHCOUNTS States. Outside of math, Isaac spends his time playing and watching basketball, coding, and walking around Princeton University’s beautiful campus with his friends.",
  },
  {
    id: 9,
    name: "Vikram Sarkar",
    href: "#",
    imageSrc:
      "https://media.discordapp.net/attachments/751497467329118280/977555001725562900/CT_Vikram_Sarkar_-_Vikram_Sarkar.jpg?width=794&height=840",
    imageAlt: "Vikram Sarkar",
    role: "Content Creator",
    bio: "Vikram Sarkar is a test solver for the OMMC team and is currently an 8th grade. His achievements include 2 times Mathcounts Nationals Qualifier (top 56 / top 25% this year), and USAJMO Winner. He likes listening to EDM and various artists, and also likes video games.",
  },
  {
    id: 10,
    name: "Alexander Wang",
    href: "#",
    imageSrc:
      "https://media.discordapp.net/attachments/751497467329118280/977556703505703012/unknown.png",
    imageAlt: "Alexander Wang",
    role: "Content Creator",
    bio: "Alexander Wang is a 8th grader who works as a content creator for OMMC, and has contributed problems to the competition. He has achieved Distinguished Honor Roll on the AMC 10/12 multiple times. He has qualified for USAJMO 3 times, and placed overall rank 1 in USAJMO out of all contestants in 2022. He has also qualified for MATHCOUNTS Nationals two times. He is also a member of the selective Lehigh ARML Fire Team. He will be attending the prestigious MOP program this summer. You can find him on AoPS with the nickname DottedCaculator.",
  },
  {
    id: 11,
    name: "Calvin Wang",
    href: "#",
    imageSrc:
      "https://media.discordapp.net/attachments/751497467329118280/977556703505703012/unknown.png",
    imageAlt: "Calvin Wang",
    role: "Content Creator",
    bio: "Calvin is an 8th grader in Virginia who has participated in various math competitions such as AIME and MATHCOUNTS. He made AIME since 6th grade, got a perfect score in AMC8 in 6th grade, was the runner up in MATHCOUNTS Nationals in 8th grade, and has been actively doing many math competitions. Calvin enjoys many forms of math, and wants others to enjoy them, too. He is an active member on Discord(going by jatloe) and AoPS(going by cj13609517288). In his free time, Calvin enjoys playing and making puzzles, playing games, and wasting time on Discord.",
  },
  {
    id: 12,
    name: "Justin Lee",
    href: "#",
    imageSrc:
      "https://media.discordapp.net/attachments/751497467329118280/977556703505703012/unknown.png",
    imageAlt: "Justin Lee",
    role: "Problem Committee",
    bio: "Justin is a sophomore at Spring Valley High School in Las Vegas, Nevada. He is a member of the Problem Committee at OMMC. Additionally, he is a staff member for OYMC, ALP, MMO, and Holiday Problems. He has participated in numerous math competitions such as MathCounts, ARML, and the AMC competition series. He is active on AoPS where you can find him as JustinLee2017. In his free time, he enjoys doing puzzle hunts, hiking, and playing video games.",
  },
  {
    id: 13,
    name: "Neal Yan",
    href: "#",
    imageSrc:
      "https://media.discordapp.net/attachments/751497467329118280/977556703505703012/unknown.png",
    imageAlt: "Neal Yan",
    role: "Problem Committee",
    bio: "Neal is a highschool junior and geometry addict hailing from Wisconsin, serving as a problem writer / testsolver / marketer for OMMC. Currently, he is also the chief math officer of the regional organization known as Youth EUCLID Association. In math contests, he's made USA(J)MO since 8th grade, and has achieved multiple individual top fives at collegiate math tournaments like BMT, SMT, and JHMT. During most of the day, he enjoys solving and attempting to write olympiad problems, grinding OTIS, spamming / calling friends on Discord, listening to electronic songs, and blogging on AoPS under the username 'crazyeyemoody907'.",
  },
  {
    id: 14,
    name: "Mahith Gottipati",
    href: "#",
    imageSrc:
      "https://media.discordapp.net/attachments/751497467329118280/977556703505703012/unknown.png",
    imageAlt: "Mahith Gottipati",
    role: "Problem Committee",
    bio: "Mahith Gottipati is an 8th grader at Quail Valley Middle School. He is a member of the Problem Committee for OMMC. Some of his achievements are qualifying for the AIME and getting multiple first places in MathLeague's. You’ll find him on AoPS with the username rocketsri, where he, along with Justin Lee and Evan Chang run Holiday Problems. Outside of mathematics, he enjoys doing science bowl (and is a team captain for his school) and playing chess under the handle mathimathz on lichess.",
  },
  {
    id: 15,
    name: "Tanishq Pauskar",
    href: "#",
    imageSrc:
      "https://media.discordapp.net/attachments/751497467329118280/977556703505703012/unknown.png",
    imageAlt: "Tanishq Pauskar",
    role: "Content Creation",
    bio: "Tanishq Pauskar is a sophomore who enjoys solving and writing math problems. He is particularly fond of the subject combinatorics. Over the past few months, Tanishq has worked to test solve the OMMC exam. He has qualified for the USAJMO 3 times, becoming a USAJMO winner in 2022. In his spare time, he enjoy writing math problems and playing board games such as chess and connect 4.",
  },
  {
    id: 16,
    name: "Ritwin Narra",
    href: "#",
    imageSrc:
      "https://media.discordapp.net/attachments/751497467329118280/977556703505703012/unknown.png",
    imageAlt: "Ritwin Narra",
    role: "Content Creation",
    bio: "Ritwin is currently a freshman in California. He is a Test Solver for OMMC. He has qualified for the AIME since 7th grade, and his math accomplishments include a 72 on USAMTS and a 24 on BAMO (one point under Honorable Mention). In school, he teaches both programming and math. Apart from math, he loves coding: he's a USACO Platinum participant and reached Codeforces Master. Also, he likes cubing, especially the Square-1, and aims for a sub-20 3x3 average.",
  },
  {
    id: 17,
    name: "Ananya Vuppala",
    href: "#",
    imageSrc:
      "https://media.discordapp.net/attachments/751497467329118280/977556703505703012/unknown.png",
    imageAlt: "Ananya Vuppala",
    role: "Outreach",
    bio: "Ananya is currently a sophomore at Marine Academy of Science and Technology in Highlands, NJ. She is on OMMC's social media and outreach team, and helps out with making flyers and exploring social media design. She's a math tutor for students in elementary and middle school, and loves working with students to be able to work on their strengths and weaknesses and be part of their learning experience. A few of her hobbies include playing lacrosse, designing content, hiking, exploring finance, and many more. Ananya loves meeting new people and trying new things!",
  },
  {
    id: 18,
    name: "Advika Vuppala",
    href: "#",
    imageSrc:
      "https://media.discordapp.net/attachments/751497467329118280/977556703505703012/unknown.png",
    imageAlt: "Advika Vuppala",
    role: "Outreach",
    bio: "Advika Vuppala is a sophomore at High Technology High School in Lincroft, New Jersey. She worked on Marketing and Social Media for OMMC last year, and also helped with content creation for the website. This year, she helped with Outreach and Social Media. Advika served as Marketing and Outreach director for cypHER, and has a lot of experience with managing professional social media accounts. In her free time, she loves playing lacrosse, baking, hiking, and biking.",
  },
];
export default function Staff() {
  return (
    <div className="bg-slate-200 dark:bg-gray-800">
      <Navbar page="staff" />
      <Banner />
      <header className=" drop-shadow-lg bg-slate-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-slate-100">
            Staff
          </h1>
        </div>
      </header>
      <div className="w-full min-h-screen mx-auto max-w-7xl  px-10 pt-10">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {members.map((member) => (
            <div role="listitem" className="flex relative mt-16 mb-16 w-full">
              <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-900">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src={member.imageSrc}
                      alt={member.imageAlt}
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16 overflow-auto">
                  <h1 className=" text-gray-800 dark:text-slate-100 text-2xl font-extrabold text-center mb-1">
                    {member.name}
                  </h1>
                  <p className="text-gray-800 dark:text-gray-300  font-semibold  text-md text-center">
                    {member.role}
                  </p>
                  <p className="text-center text-gray-600 dark:text-gray-400 text-base pt-3 font-normal pb-6">
                    {member.bio}
                  </p>
                  {/* <div className="w-full flex self-end justify-center inset-x-0 bottom-0  pt-5 pb-5">
                    <a href="javascript:void(0)" className="mx-5">
                      <div aria-label="Github" role="img">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg"
                          alt="github"
                        />
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div aria-label="Twitter" role="img">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg"
                          alt="twitter"
                        />
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div aria-label="Instagram" role="img">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg"
                          alt="instagram"
                        />
                      </div>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
