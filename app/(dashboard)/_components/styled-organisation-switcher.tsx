import { OrganizationSwitcher } from "@clerk/nextjs";

export default function StyledOrganisationSwitcher() {
  return (
    <OrganizationSwitcher
      hidePersonal
      appearance={{
        elements: {
          rootBox: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          },
          organizationSwitcherTrigger: {
            padding: 8,
            borderRadius: 8,
            width: "100%",
            border: "1px solid #E5E7EB",
            justifyContent: "space-between",
            background: "white",
          },
        },
      }}
    />
  );
}
