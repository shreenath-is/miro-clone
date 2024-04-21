import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { OrganizationProfile } from "@clerk/nextjs";
import { Plus } from "lucide-react";

export default function InviteButton() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"outline"}>
          <Plus className="w-4 h-4 mr-2" /> Invite Member
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent max-w-[880px] border-none">
        <OrganizationProfile />
      </DialogContent>
    </Dialog>
  );
}
