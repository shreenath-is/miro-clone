import OrgList from "./list";
import NewButton from "./new-button";

export default function Sidebar() {
  return (
    <aside className="h-full fixed z-[1] left-0 w-[60px] bg-blue-950 flex flex-col gap-y-4 text-white p-3">
      <OrgList />
      <NewButton />
    </aside>
  );
}
