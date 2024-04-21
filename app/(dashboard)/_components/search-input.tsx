"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import queryString from "query-string";
import { ChangeEvent, useState } from "react";
import { useDebounceCallback } from "usehooks-ts";
import qs from "query-string";

export default function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const onSearch = useDebounceCallback((e: ChangeEvent<HTMLInputElement>) => {
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: {
          search: e.target.value,
        },
      },
      {
        skipEmptyString: true,
        skipNull: true,
      }
    );
    setSearchTerm(e.target.value);
    router.push(url);
  });

  return (
    <div className="flex gap-x-2 items-center w-full  relative">
      <Search className="absolute right-2 top-1/2 left-3 -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        className="max-w-[516px] pl-9"
        placeholder="Search here"
        onChange={onSearch}
      />
    </div>
  );
}
