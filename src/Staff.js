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
    role: "Lead Developer",
    bio: "Kevin is a sophomore at High Technology High School in Lincroft, New Jersey. He cofounded OMMC with Evan Chang in September of 2020, and currently works as the lead website developer for OMMC, handling the online aspect of the competition. He works as the head coder for the OMMC website and OMMC Atlas. He is fluent in Javascript and React in designing, implementing, and testing software, including web and mobile applications development, API design, functional programming, optimization, system administration, databases, and scalability. In addition to web design and application development, he is fluent in Java and Python for Object-Oriented Programming, focusing on problem-solving and algorithm development, along with core concepts and tools, code implementations, testing program code, correcting errors, and documentation.",
  },
  {
    id: 5,
    name: "Vivian Loh",
    href: "#",
    imageSrc:
      "https://media.discordapp.net/attachments/709828147004047400/976857724098846770/Screen_Shot_2022-05-19_at_10.43.32_AM.png",
    imageAlt: "Vivian Loh",
    role: "Content Creator",
    bio: "Vivian Loh is a sophomore at Winchester Thurston School in Pittsburgh, PA. She is a testsolver for OMMC. She received USAJMO winner and an EGMO gold medal in 2022, and has qualified for MOP twice. She has been participating in math contests since 5th grade, qualifying for AIME five times and USAJMO twice, and is particularly enthusiastic about geometry, which she often spends her free time doing. She is also very active on AoPS and Discord (she can be found under the username v4913), and likes biking and talking with friends."
  },
  {
    id: 6,
    name: "Serena Xu",
    href: "#",
    imageSrc:
      "https://media.discordapp.net/attachments/709828147004047400/976857380497281064/Screen_Shot_2022-05-19_at_10.42.18_AM.png",
    imageAlt: "Serena Xu",
    role: "Content Creator",
    bio: "Serena Xu is a junior who started math competitions at 7th grade. She attended MOP in 2021 and published Rabbit's Geometry while organizing GmathIRL. She contributed problems for OMMC, and test solve MMT. In her free time, she likes reading Naruto, playing video games and listening to Spotify."
  }, 
  {
    id: 7,
    name: "Vikram Sarkar",
    href: "#",
    imageSrc:
      "https://media.discordapp.net/attachments/751497467329118280/977555001725562900/CT_Vikram_Sarkar_-_Vikram_Sarkar.jpg?width=794&height=840",
    imageAlt: "Vikram Sarkar",
    role: "Content Creator",
    bio: "Vikram Sarkar is a test solver for the OMMC team and is currently an 8th grade. His achievements include 2 times Mathcounts Nationals Qualifier (top 56 / top 25% this year), and USAJMO Winner. He likes listening to EDM and various artists, and also likes video games."
  },
];

export default function Example() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <header className="bg-white shadow-lg bg-slate-100">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Staff</h1>
        </div>
      </header>
      <div className="w-full min-h-screen mx-auto max-w-7xl  px-10 pt-10">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {members.map((member) => (
            <div role="listitem" class="flex relative mt-16 mb-16 w-full">
              <div class="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                <div class="absolute -mt-20 w-full flex justify-center">
                  <div class="h-32 w-32">
                    <img
                      src={member.imageSrc}
                      alt={member.imageAlt}
                      role="img"
                      class="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div class="px-6 mt-16 overflow-auto">
                  <h1 class="font-bold dark:text-white text-3xl text-center mb-1">
                    {member.name}
                  </h1>
                  <p class="text-gray-800 dark:text-white text-sm text-center">
                    {member.role}
                  </p>
                  <p class="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal pb-6">
                    {member.bio}
                  </p>
                  {/* <div class="w-full flex self-end justify-center inset-x-0 bottom-0  pt-5 pb-5">
                    <a href="javascript:void(0)" class="mx-5">
                      <div aria-label="Github" role="img">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg"
                          alt="github"
                        />
                      </div>
                    </a>
                    <a href="javascript:void(0)" class="mx-5">
                      <div aria-label="Twitter" role="img">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg"
                          alt="twitter"
                        />
                      </div>
                    </a>
                    <a href="javascript:void(0)" class="mx-5">
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
