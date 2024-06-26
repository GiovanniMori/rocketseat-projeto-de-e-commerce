"use client";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const search = data.q;
    if (!search) return null;
    router.push(`/search?q=${search}`);
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
    >
      <Search className="w-5 h-5 text-zinc-500" />
      <input
        name="q"
        type="search"
        defaultValue={query ?? ""}
        placeholder="Buscar produtos"
        className="bg-transparent text-zinc-50 outline-none placeholder:text-zinc-500 flex-1"
      />
    </form>
  );
}

export default function SearchForm() {
  return (
    // You could have a loading skeleton as the `fallback` too
    <Suspense>
      <SearchBar />
    </Suspense>
  );
}
