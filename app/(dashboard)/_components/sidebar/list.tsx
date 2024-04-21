"use client";

import { useOrganizationList } from "@clerk/nextjs";
import Item from "./item";

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
        const { id, name, imageUrl } = membership.organization;
        return <Item key={id} id={id} name={name} imageUrl={imageUrl} />;
      })}
    </ul>
  );
}
