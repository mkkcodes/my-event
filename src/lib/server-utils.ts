//good practice to limit server-side requests to server-only
import "server-only";

import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";
import prisma from "./db";
import { capitalize } from "./utils";

//cache the events as we don't want to hit the database every time
export const getEvents = unstable_cache(async (city: string, page = 1) => {
  const events = await prisma.events.findMany({
    where: {
      //undefined is used to get all events
      city: city === "all" ? undefined : capitalize(city),
    },
    orderBy: {
      date: "asc",
    },
    take: 6,
    skip: (page - 1) * 6,
  });

  const totalCount = await prisma.events.count({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
  });

  return { events, totalCount };
});

export const getEvent = unstable_cache(async (slug: string) => {
  const event = await prisma.events.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!event) {
    return notFound();
  }

  return event;
});
