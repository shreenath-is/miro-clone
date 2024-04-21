"use client";

import { UserButton, useOrganization } from "@clerk/nextjs";
import SearchInput from "./search-input";
import StyledOrganisationSwitcher from "./styled-organisation-switcher";
import InviteButton from "./invite-button";

export default function Navbar() {
  const { organization } = useOrganization();
  return (
    <div className="flex items-center p-5 gap-x-4 ">
      <div className="hidden lg:flex lg:flex-1">
        <SearchInput />
      </div>
      <div className="lg:hidden flex-1">
        <StyledOrganisationSwitcher />
      </div>
      {organization && <InviteButton />}
      <UserButton />
    </div>
  );
}
