"use client";
import { Menu, MenuItem, MenuButton, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold">CryptoGraph</h1>

        {/* User Profile Section */}
        <UserProfile />
      </div>
    </header>
  );
}

function UserProfile() {
  return (
    <div className="relative">
      <Menu>
        {({ open }) => (
          <>
            {/* Menu Button */}
            <MenuButton className="flex items-center space-x-2 cursor-pointer focus:outline-none">
              {/* Profile Image */}
              <img
                src="/lego.jpeg"
                alt="User"
                className="w-10 h-10 rounded-full border border-gray-700"
              />
              <ChevronDownIcon
                className={`w-4 h-4 text-gray-400 transition-transform ${
                  open ? "transform rotate-180" : ""
                }`}
              />
            </MenuButton>

            {/* Dropdown Menu */}
            <MenuItems className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded-lg shadow-lg focus:outline-none">
              <MenuItem>
                {({ active }) => (
                  <button
                    className={`block w-full text-left px-4 py-2 ${
                      active ? "bg-gray-700" : ""
                    }`}
                  >
                    Profile
                  </button>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <button
                    className={`block w-full text-left px-4 py-2 ${
                      active ? "bg-gray-700" : ""
                    }`}
                  >
                    Settings
                  </button>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <button
                    className={`block w-full text-left px-4 py-2 text-red-400 ${
                      active ? "bg-gray-700" : ""
                    }`}
                  >
                    Logout
                  </button>
                )}
              </MenuItem>
            </MenuItems>
          </>
        )}
      </Menu>
    </div>
  );
}
