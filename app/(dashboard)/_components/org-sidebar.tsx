"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Star } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import StyledOrganisationSwitcher from "./styled-organisation-switcher";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function OrgSidebar() {
  const searchParams = useSearchParams();
  const favourites = searchParams.get("favourites");
  return (
    <div className="hidden lg:flex flex-col space-y-6 w-[222px] pl-5 pt-5">
      <Link href={"/"} className="flex gap-x-2 items-center">
        <Image src={"/logo.svg"} alt="Logo" height={45} width={45} />
        <span className={cn("font-semibold text-2xl", font.className)}>
          MiroClooney
        </span>
      </Link>
      <StyledOrganisationSwitcher />
      <div className="space-y-1 w-full">
        <Button
          asChild
          variant={favourites ? "ghost" : "outline"}
          size="lg"
          className="justify-start w-full px-2 font-normal"
        >
          <Link href="/">
            <LayoutDashboard className="h-4 w-4 mr-2" /> Team boards
          </Link>
        </Button>
        <Button
          asChild
          variant={favourites ? "outline" : "ghost"}
          size="lg"
          className="justify-start w-full px-2 font-normal"
        >
          <Link
            href={{
              pathname: "/",
              query: {
                favourites: true,
              },
            }}
          >
            <Star className="h-4 w-4 mr-2" /> Favourite boards
          </Link>
        </Button>
      </div>
    </div>
  );
}
