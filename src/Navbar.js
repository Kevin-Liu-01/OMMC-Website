import "./App.css";
import { Disclosure } from "@headlessui/react";
import {MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Staff", href: "/staff", current: true },
  { name: "Sample Problems", href: "/sample", current: true },
  { name: "Sponsors", href: "/sponsors", current: true },
  { name: "Leaderboard", href: "/leaderboard", current: true },
  { name: "Test Docs", href: "/testDocs", current: true },
  {name: "POTM", href:"/problem-of-the-day", current: true}
  // { name: "Portal", href: "/portal", current: true },
  // { name: "Retreival", href: "/retreival", current: true },

];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-900 border border-gray-900 border-b-red-700 border-b-8">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 border-b-indigo-500">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="hidden lg:block h-10 w-auto"
                    src="https://cdn.discordapp.com/attachments/760189295067004962/917951890690547712/ommc_fixup.png"
                    alt="OMMCLogo"
                    href="/"
                  />
                  <img
                    className="block lg:hidden h-10 w-auto"
                    src="https://cdn.discordapp.com/attachments/760189295067004962/917951890690547712/ommc_fixup.png"
                    alt="OMMCLogo"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "hover:bg-gray-800 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "hover:bg-gray-800 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
