import H1 from "@/components/h1";
import { getEvent } from "@/lib/server-utils";
import Image from "next/image";
import React from "react";
import { capitalize } from "@/lib/utils";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;

  const event = await getEvent(slug);
  return {
    title: `${capitalize(event.name)}`,
    description: `Details for the event ${capitalize(event.name)}`,
  };
}

// export async function generateStaticParams() {
//   //top 100 most popular events
//   return [
//     {
//       slug: "comedy-extravaganza",
//     },
//     {
//       slug: "dj-practice-session",
//     },
//   ];
// }

export default async function Event({ params }: Props) {
  const slug = params.slug;
  const event = await getEvent(slug);

  return (
    <main>
      <section className="relative -hidden flex justify-center items-center py-14 md:py-20">
        <Image
          src={event.imageUrl}
          className="object-cover blur-lg z-0"
          alt="Event Background Image"
          fill
          quality={50}
          sizes="(max-width: 1280px) 100vw, 1280px"
          priority
        />
        <div className="z-1 flex flex-col lg:flex-row gap-6 lg:gap-16 relative">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
            className="rounded-xl border-2 border-white/50 object-cover"
          />

          <div className="flex flex-col text-white/75">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
            <H1 className="mb-2 mt-1 text-white/75 whitespace-nowrap lg:text-5xl">
              {event.name}
            </H1>

            <p className="whitespace-nowrap text-xl text-white/75">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>

            <button className="bg-white/20 text-lg capitalize backdrop-blur mt-5 lg:mt-auto w-full py-2 rounded-md text-white/75 border-white/10 border-2 state-effects">
              Get Tickets
            </button>
          </div>
        </div>
      </section>

      <div className="min-h-[75vh] text-center px-5 py-16">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionParagraph>{event.description}</SectionParagraph>
        </Section>

        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionParagraph>{event.location}</SectionParagraph>
        </Section>
      </div>
    </main>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-12">{children}</section>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl mb-8">{children}</h2>;
}

function SectionParagraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-4xl mx-auto text-lg leading-8 dark:text-white/75">
      {children}
    </p>
  );
}
