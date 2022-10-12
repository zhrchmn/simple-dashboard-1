import React from "react";
import { useNavigate } from "react-router-dom";
import red from "../Assets/red.png";

function Newsidebar({ children }) {
  const navigate = useNavigate();

  const Subs = [
    { title: "Dashboard", src: red, to: "/" },
    { title: "Job List", src: red, to: "/tablelist" },
    { title: "Create Job", src: red, to: "/create" },
  ];

  return (
    <div className="grid">
      <div className=" h-screen p-5 pt-8 bg-slate-600 relative">
        <div className="flex gap-x-4 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-14 h-14"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
            />
          </svg>
        </div>
        <ul className="pt-6 w-52">
          {Subs.map((test, index) => {
            const clickActive = (idx) => {
              test.click ? test.click() : navigate(test.to);
            };
            return (
              <li
                onClick={() => clickActive(index)}
                key={index}
                className="text-black text-base font-medium flex items-center gap-x-4 cursor-pointer p-2 hover:bg-red-700 rounded-md"
              >
                {<img className="h-10 w-10" src={test.src} alt="Profile" />}
                <span className="origin-left">{test.title}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="p-12 h-screen w-full">{children}</div>
    </div>
  );
}

export default Newsidebar;
