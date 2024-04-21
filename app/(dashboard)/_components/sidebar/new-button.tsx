"use client";
import Hint from "@/components/hint";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import { Plus } from "lucide-react";

export default function NewButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Hint
          hint="Add New Organisation"
          side="right"
          align="start"
          sideOffset={18}
        >
          <div className="aspect-square">
            <button className="bg-white/25 w-full h-full flex justify-center items-center rounded-md opacity-60 hover:opacity-100 transition">
              <Plus className="text-white" />
            </button>
          </div>
        </Hint>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
}
