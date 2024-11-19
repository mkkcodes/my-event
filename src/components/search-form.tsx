"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`/events/${searchText}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[580px]">
      <input
        placeholder="Search any events..."
        spellCheck={false}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full h-16 rounded-lg bg-gray-300/75 dark:bg-white/[7%] 
          px-6 outline-none ring-accent/50 transition focus:ring-2 focus:bg-white/10"
      />
    </form>
  );
}
