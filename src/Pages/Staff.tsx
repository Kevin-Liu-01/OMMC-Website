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
    bio: "Alexander is a sophomore and is the CEO for OMMC. He is an IMO Gold Medalist and has achieved Distinguished Honor Roll on the AMC 10/12 multiple times. He has qualified for USAJMO 3 times, and placed overall rank 1 in USAJMO out of all contestants in 2022. He has also qualified for MATHCOUNTS Nationals two times. He is also a member of the selective Lehigh ARML Fire Team. He will be attending the prestigious MOP program this summer. You can find him on AoPS with the nickname DottedCaculator.",
  },
  {
    id: 2,
    name: "Charles Zhang",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Charles Zhang",
    role: "Head of Logistics",
    bio: 'Charles is a junior in Southern California, and is the Head of Logistics for OMMC.  He is a 4-time Math Olympiad qualifier, and has scored 11 on the AIME 4 years in a row.  He is a researcher under the MIT PRIMES-USA program, and an attendee of Ross Indiana 2023 and SPARC 2024.  In his free time, he likes to play difficult 2017-2018 indie games, such as Hollow Knight, Celeste, and Cuphead.',
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
    role: "Head of Content Creation",
    bio: 'Mahith is a junior from Texas. He has qualified for the AIME three times and has placed well in several other contests. Apart from mathematics, he enjoys physics, coding, and playing table tennis and chess. You can find him on chess.com under the handle "rocketsrimsg," where he plays (a little too much) puzzle rush.',
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
    imageSrc: "/staff/default.png",
    imageAlt: "Aprameya Tripathy",
    role: "Head of Content Revision",
    bio: "Aprameya Tripathy is a high school sophomore who works as a testsolver at OMMC. He has attended MOP and is a one time JMO qualifier, and in his free time, you can find him testing out new recipes or exploring geometry configurations. He hopes to bake a croquembouche one day.",
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
    name: "Isaac Chen",
    href: "#",
    imageSrc: "/staff/isaac.png",
    imageAlt: "Isaac Chen",
    role: "Content Contributor",
    bio: "Isaac Chen is a junior at Princeton Day School in Princeton, NJ, and attended MOP. He contributes problems to OMMC and other contests such as the Online Youth Mathematics Competition. Isaac is a RSI qualifier, one-time USAJMO qualifier, one-time AMC 10 DHR awardee, and two-time AIME qualifier. He also placed 17th overall at CMIMC Math 2022 and 5th overall at 2021 NJ MATHCOUNTS States. Outside of math, Isaac spends his time playing and watching basketball, coding, and walking around Princeton University’s beautiful campus with his friends.",
  },
  {
    id: 10,
    name: "Vinay Singamsetty",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Vinay Singamsetty",
    role: "Website Developer",
    bio: "Vinay is a junior in California. He is a developer for OMMC and contributed greatly to the testing portal and website. He is an avid developer and is skilled at developing web applications focused on responsive design, positive UX/UI, SEO and more. He is fluent in React/Next, Vue/Nuxt, JS/HTML/CSS, Sass and general purpose languages like Node JS, Python, C++, C, C#, Java, and more. He's good at developing algorithms and vital coding concepts such as control flow, program structure, versioning, debugging, and formatting. He is also a math enthusiast, achieving honor roll on AMC 8 previously and is currently working on honing his math skills.    ",
  },
  {
    id: 11,
    name: "Vikram Sarkar",
    href: "#",
    imageSrc: "/staff/vikram.jpg",
    imageAlt: "Vikram Sarkar",
    role: "Content Contributor",
    bio: "Vikram Sarkar is a test solver for the OMMC team and is currently a sophomore. His achievements include 2 times Mathcounts Nationals Qualifier (top 56 / top 25% this year), and USAJMO Winner. He likes listening to EDM and various artists, and also likes video games.",
  },

  {
    id: 12,
    name: "Calvin Wang",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Calvin Wang",
    role: "Content Contributor",
    bio: "Calvin is a sophomore in Virginia who has participated in various math competitions such as AIME and MATHCOUNTS. He made AIME since 6th grade, got a perfect score in AMC8 in 6th grade, was the runner up in MATHCOUNTS Nationals in 8th grade, and has been actively doing many math competitions. Calvin enjoys many forms of math, and wants others to enjoy them, too. He is an active member on Discord(going by jatloe) and AoPS(going by cj13609517288). In his free time, Calvin enjoys playing and making puzzles, playing games, and wasting time on Discord.",
  },
  {
    id: 13,
    name: "Chris Bao",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Chris Bao",
    role: "Problem Committee",
    bio: "Chris Bao is a junior at the Davidson Academy of Nevada. He has qualified for the USAJMO three times and the USAMO in 2023. He has also participated in MOP 2022 and MOP 2023. Besides math, Chris also plays chess, piano, and works on coding a chess engine in his free time.",
  },

  {
    id: 14,
    name: "Bryan Guo",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Bryan Guo",
    role: "Content Contributor",
    bio: "Bryan Guo is a problem contributor for the OMMC team and is currently in a sophomore. He has achieved Distinguished Honor Roll on the AMC 10 several times, and qualified for the 2022 USAJMO. He is a two-time USAMTS silver medalist and has participated in the A2 team for SD ARML. In the 2022 AMC cycle, he achieved a perfect score on the AMC 10. Apart from math, he enjoys playing tennis and talking on Discord.",
  },

  {
    id: 15,
    name: "Rohan Bodke",
    href: "#",
    imageSrc: "/staff/default.png",
    imageAlt: "Rohan Bodke",
    role: "Content Contributor",
    bio: "Rohan is a junior in California who works for OMMC as a content contributor. He attended MOP and started math contests in 2018, when he was in sixth grade. Since then, he has qualified for the AIME three times, and the USAJMO twice, winning it in 2022. He was also part of California's MATHCOUNTS team in 2021, and was sixteenth place at nationals. In addition to math, he likes to play chess and other board games, both with his friends and online. He also enjoys doing extremely weird things no one else would do, such as reading WP:UA. He was a top 20 player in the now-defunct mobile game _Big Bang Racing_.",
  },
];

const pastMembers = [
  {
    id: 1,
    name: "Evan Chang",
    href: "#",
    imageSrc: "/staff/evan.png",
    imageAlt: "Evan Chang",
    bio: "Evan Chang is an incoming freshman at MIT. In 2023, he was a USAMO Gold Medalist and placed 12th out of all students nationwide.  He was a MOP camper in 2022 and 2023 and is a SPARC camper in 2023. He is an intern for LIVE by Po Shen Loh. Evan also currently studies piano and music composition.",
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
  const [showCurrent, setShowCurrent] = useState(true);

  return (
    <div
      className={
        (props.dark ? "dark" : "") +
        " min-h-screen bg-slate-100 dark:bg-gray-900 duration-150"
      }
    >
      <Navbar page="staff" dark={props.dark} setDark={props.setDark} />
      <Banner />
      <header className="drop-shadow-lg duration-150 bg-white dark:bg-[#182133]">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-slate-100">
            Staff
          </h1>
          <button
            onClick={() => setShowCurrent(!showCurrent)}
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 duration-150"
          >
            {showCurrent ? "Past Staff" : "Current Staff"}
          </button>
        </div>
      </header>
      <div className="w-full mx-auto max-w-7xl px-4 md:px-10 pt-10">
        <div className="mt-6 grid grid-cols-1 md:gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {(showCurrent ? currentMembers : pastMembers).map((member) => (
            <Profile member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}
