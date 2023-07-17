import React from "react";
import states from "../constants/States";

export default function SelectState({ setstate,setToogle }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-full overflow-y-scroll bg-black bg-opacity-75 scroll-smooth">
      <div className="grid grid-cols-2  text-center md:grid-cols-4 divide-x-[1px] shadow-xl rounded-xl bg-white gap-2.5 md:gap-5">
        {states.map((_, index) => {
          return (
            <ul key={index} className="px-3 py-1 overflow-y-scroll text-center">
              <li
                className="text-xs cursor-pointer md:text-base"
                onClick={() => {
                  setstate(_);
                  setToogle(false)
                }}
              >
                {_}
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
