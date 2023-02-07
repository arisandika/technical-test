import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import "./Navbar.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="lg:px-[80px] px-[8px] bg-[#201D2F] lg:py-0 py-2">
      <nav className="text-[#74CDFF] text-center">
        <div className="lg:w-full max-w-7xl mx-auto">
          <div className="flex items-center justify-between lg:h-[62px] h-[52px]">
            <div className="flex items-center">
              <a className="btn btn-ghost normal-case text-xl">Ari Mart</a>
              <div className="hidden md:block">
                <div className="lg:ml-40 md:ml-14 sm:ml-0 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className="hover:text-white px-3 text-[14px] font-base"
                  >
                    Lorem
                  </a>

                  <a
                    href="#"
                    className="hover:text-white px-3 text-[14px] font-base"
                  >
                    Lorem
                  </a>

                  <a
                    href="#"
                    className="hover:text-white px-3 text-[14px] font-base"
                  >
                    Lorem
                  </a>

                  <a
                    href="#"
                    className="hover:text-white px-3 text-[14px] font-base"
                  >
                    Lorem Ipsum
                  </a>
                  <a
                    href="#"
                    className="hover:text-white px-3 text-[14px] font-base"
                  >
                    Lorem
                  </a>
                  <a
                    href="#"
                    className="hover:text-white px-3 text-[14px] font-base"
                  >
                    Lorem
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 ">
              <button className="btn btn-sm button-login hover:text-white normal-case mr-5">
                <p>Login</p>
              </button>
              <button className="btn btn-sm button-sign hover:text-white normal-case">
                <p>Sign Up</p>
              </button>
            </div>
            <div className="hamburger mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="" id="mobile-menu">
              <div
                ref={ref}
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-left"
              >
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Lorem
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Lorem
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Lorem
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Lorem
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Lorem
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
