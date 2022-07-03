import "../App.css";

const sponsors = [
  {
    id: 1,
    href: "https://www.desmos.com/",
    imageSrc:
      "https://cdn.discordapp.com/attachments/710679539558121482/973275817448706108/unknown.png",
    imageAlt: "Desmos",
  },
  {
    id: 2,
    href: "https://www.geogebra.org/?lang=en",
    imageSrc:
      "data:image/png;base64,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",
    imageAlt: "GeoGebra",
  },
  {
    id: 3,
    href: "https://www.janestreet.com/",
    imageSrc:
      "https://cdn.discordapp.com/attachments/760189295067004962/976149016087756800/unknown.png",
    imageAlt: "Jane Street",
  },
  {
    id: 4,
    href: "https://artofproblemsolving.com/?utm_source=google&utm_medium=cpc&utm_campaign=&cmid=15593084286&agid=130908271813&search_keyword=aops&search_type=e&netid=g&adid=570025226859&adpos=&dvt=&ptid=&gclid=CjwKCAjw9-KTBhBcEiwAr19ig5zqOPfgTA0t67MDU_L08vklZ7FVHIaEoJP-ojcUrDLBWjeR6_YyMxoC_7sQAvD_BwE",
    imageSrc:
      "https://cdn.discordapp.com/attachments/710679539558121482/973275946721370193/unknown.png",
    imageAlt: "AoPS",
  },
  {
    id: 5,
    href: "https://www.wolframalpha.com/",
    imageSrc:
      "https://content.wolfram.com/uploads/sites/10/2016/06/wolfram-language-text-logo.png",
    imageAlt: "Wolfram",
  },
  {
    id: 6,
    href: "https://www.maplesoft.com/",
    imageSrc:
      "https://www.maplesoft.com/media/logos/Maplesoft_Logo/Maplesoft_logo.jpg",
    imageAlt: "Maplesoft",
  },
  {
    id: 7,
    href: "https://www.3blue1brown.com/",
    imageSrc:
      "https://cdn.discordapp.com/attachments/753798704082714715/975569527930781696/unknown.png",
    imageAlt: "3blue1brown",
  },
  {
    id: 8,
    href: "https://thebeautyofmath.net/pages/home",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0536/6651/3088/files/unnamed_180x.jpg?v=1612934980",
    imageAlt: "TheBeautyOfMath",
  },
];

export default function Sponsors() {
  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-lg bg-slate-100">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Sponsors</h1>
        </div>
      </header>
      <div className=" max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Sponsors</h2>

        <div className=" grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {sponsors.map((sponsor) => (
            <a key={sponsor.id} href={sponsor.href} className="group">
              <div className="self-center w-full aspect-w-1 aspect-h-1  rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={sponsor.imageSrc}
                  alt={sponsor.imageAlt}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
