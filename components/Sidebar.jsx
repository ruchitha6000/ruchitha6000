import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="text-2xl font-bold p-4 border-b border-gray-700">
        📬 My Inbox
      </div>
      <nav className="flex-1 p-4">
        <ul>
          <li className="mb-2">
            <Link to="/" className="block px-2 py-2 rounded hover:bg-gray-700">Inbox</Link>
          </li>

          {/* <li>
            <Link to="/sent" className="block px-2 py-2 rounded hover:bg-gray-700">Sent</Link>
          </li>

          <li>
            <Link to="/trash" className="block px-2 py-2 rounded hover:bg-gray-700">Trash</Link>
          </li> */}

          {/* <li>
            <Link to="/roles" className="block px-2 py-2 rounded hover:bg-gray-700">Roles</Link>
          </li> */}

          <li className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full text-left block px-2 py-2 rounded hover:bg-gray-700 focus:outline-none"
            >
              Roles ▾
            </button>
            {isDropdownOpen && (
              <ul className="bg-gray-700 mt-1 rounded shadow-md overflow-hidden">
                <li>
                  <Link to="/roles/java-developer" className="block px-4 py-2 hover:bg-gray-600">
                    Java Developer
                  </Link>
                </li>
                <li>
                  <Link to="/roles/python-developer" className="block px-4 py-2 hover:bg-gray-600">
                    Python Developer
                  </Link>
                </li>
                <li>
                  <Link to="/roles/backend-developer" className="block px-4 py-2 hover:bg-gray-600">
                    Backend Developer
                  </Link>
                </li>
                <li>
                  <Link to="/roles/frontend-developer" className="block px-4 py-2 hover:bg-gray-600">
                    Frontend Developer
                  </Link>
                </li>
              </ul>
            )}
          </li>


        </ul>
      </nav>
    </aside>
  );
}
