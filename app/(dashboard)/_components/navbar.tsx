"use client";

import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <div className="flex items-center p-5 gap-x-4 bg-green-500">
      <div className="hidden lg:flex lg:flex-1 bg-yellow-400">
        {/* Add search bar */} Search Placeholder
      </div>
      <UserButton />
    </div>
  );
}
