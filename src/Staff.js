const products = [
  {
    id: 1,
    name: "Evan Chang",
    href: "#",
    imageSrc:
      "https://raw.githubusercontent.com/Kevin-Liu-01/ommc/master/static/documents/evan.png?token=GHSAT0AAAAAABRCH35VA4ITINOC2THFIBY2YUAB4FA",
    imageAlt: "Evan Chang",
    role: "Director",
    bio: "Evan Chang is a sophomore at High Technology High School in Lincroft, New Jersey. He cofounded OMMC with Ishaan Akula in September of 2020. He works as a Director as well as the Head of Content Creation for OMMC. He is a prolific problem writer and is heavily involved with several other student-led math organizations such as Online Youth Math Competition (OYMC), Gaussian Curvature (GC), Online International Mathematical Cup (OIMC), Metrix Math Olympiad (MMO), and Deciphering the Enigma of Math Olympiads (DEMO). Evan has achieved Distinguished Honor Roll on both the AMC 10 and AMC 12. He has qualified for USAJMO and USAMO and achieved a USAMO bronze medal, qualifying for the selective MOP summer camp. He is a two-time USAMTS gold medalist. Besides math, Evan is interested in music and currently studies piano and music composition at the Westminster Conservatory of Music Honors Music Program. He is a MTNA Composition Competition National Finalist and a Golden Key Music Festival Composition Competition National Winner. In his free time, Evan can be found saying silly things online (often in the OMMC Community Discord).",
  },
  {
    id: 2,
    name: "Ishaan Akula",
    href: "#",
    imageSrc:
      "https://raw.githubusercontent.com/Kevin-Liu-01/ommc/master/static/documents/ish.png?token=GHSAT0AAAAAABRCH35UV4GGCPKYBFCWDSH4YUAB4NQ",
    imageAlt: "Ishaan Akula",
    role: "Administrator",
    bio: "Ishaan is a sophomore at High Technology High School in Lincroft, New Jersey. He cofounded OMMC with Evan Chang in September of 2020, and currently works as an administrator for OMMC and handles the website/social media aspect of the competition. He works as a coder for the OMMC website, and the manager for OMMC’s social media pages. In elementary school, he was a finalist in the National Scripps Spelling Bee. ",
  },
  {
    id: 3,
    name: "Bill Fei",
    href: "#",
    imageSrc:
      "https://raw.githubusercontent.com/Kevin-Liu-01/ommc/master/static/documents/bill.png?token=GHSAT0AAAAAABRCH35VYVPT6X4G5ES677SYYUAB3TQ",
    imageAlt: "Bill Fei",
    role: "Administrator",
    bio: "Bill Fei is a sophomore at West Lafayette Jr./Sr. High School in West Lafayette, Indiana. He is an administrator for OMMC. He participates in competitive programming and competition math. He is a USACO Gold Medalist, a three-time AIME qualifier, and has achieved Distinguished Honor Roll on the AMC 10. He won first place in the ICTM math competition in Indiana, and coaches his school’s MATHCOUNTS team. Besides math, he does many other things in his spare time. He enjoys playing the viola and has been in the Indiana All-State Orchestra 2 years in a row and was the sectional principle of the viola section for both his years in the Indiana Junior All-State Orchestra. He also studies piano and has won awards at the Indiana State Fair piano competition. In addition, he enjoys being on his school’s debate team. He was on his school’s state Public Forum debate roster, and placed 5th at his district’s Congressional Debate. In his free time, he enjoys procrastinating and sleeping.",
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
      <div className="w-full  mx-auto max-w-7xl  px-10 pt-10">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div role="listitem" class="flex relative mt-16 mb-32 w-full">
              <div class="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                <div class="absolute -mt-20 w-full flex justify-center">
                  <div class="h-32 w-32">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      role="img"
                      class="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div class="px-6 mt-16 overflow-auto">
                  <h1 class="font-bold dark:text-white text-3xl text-center mb-1">
                    {product.name}
                  </h1>
                  <p class="text-gray-800 dark:text-white text-sm text-center">
                    {product.role}
                  </p>
                  <p class="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal pb-6">
                    {product.bio}
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
