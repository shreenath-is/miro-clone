"use client";

import { useOrganizationList } from "@clerk/nextjs";

export default function OrgList() {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  if (!userMemberships.data?.length) return null;

  return (
    <ul className="space-y-4">
      {userMemberships.data.map((membership) => {
        return (
          <li key={membership.organization.id}>
            {membership.organization.name}
          </li>
        );
      })}
    </ul>
  );
}
