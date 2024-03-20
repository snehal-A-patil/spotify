import React from "react";
import { Icon } from "../../Icons";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <nav className="px-2">
        <ul className="flex flex-col">
          <li>
            <Link
              className="h-10 flex gap-x-4 items-center text-sm text-gray-500 font-semibold hover:text-white px-4"
              to={"/"}
            >
              <span>
                <Icon name="home"></Icon>
              </span>
              Home
            </Link>
          </li>

          <li>
            <Link
              className="h-10 flex gap-x-4 items-center text-sm text-gray-500 font-semibold hover:text-white px-4"
              to={"/search"}
            >
              <span>
                <Icon name="search"></Icon>
              </span>
              Search
            </Link>
          </li>

          <li>
            <div className="h-10 flex gap-x-4 items-center text-sm text-gray-500 font-semibold hover:text-white px-4">
              <span>
                <Icon name="collection"></Icon>
              </span>
              Library
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;