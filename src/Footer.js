import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white text-center p-5 text-sm w-full flex flex-col items-center justify-center box-border">
      <ul className="list-none m-0 p-0 flex justify-center gap-[15px] flex-wrap">
        <div className="text-white no-underline text-base font-bold flex gap-5 justify-around m-0 mx-auto flex-wrap">
          <li>
            <Link
              to="/faq"
              className="text-white no-underline text-base font-bold"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              to="/privacy-policy"
              className="text-white no-underline text-base font-bold"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              to="/feedback"
              className="text-white no-underline text-base font-bold"
            >
              Send Us Feedback
            </Link>
          </li>
          <li className="text-[#FFD700] text-base font-bold">
            &copy; {new Date().getFullYear()} Copyright: Olympia.com
          </li>
        </div>
      </ul>
    </footer>
  );
}

export default Footer;
