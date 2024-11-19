import H1 from "@/components/h1";
import SearchForm from "@/components/search-form";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-3 pt-36">
      <H1>Find Events Around You</H1>
      <p className="mb-12 mt-7 text-2xl lg:text-3xl text-center opacity-75">
        Browse more than{" "}
        <span className="font-bold text-accent italic underline">
          10,000 events
        </span>{" "}
        worldwide
      </p>

      <SearchForm />

      <section className="mt-4 flex gap-x-4 text-sm text-black/75 dark:text-white/50">
        <p>Popular:</p>
        <div className="space-x-2 font-semibold">
          <Link href="/events/london">London</Link>
          <Link href="/events/bristol">Bristol</Link>
        </div>
      </section>
    </main>
  );
}
