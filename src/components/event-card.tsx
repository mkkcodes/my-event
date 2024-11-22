"use client";

import { Events } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type EventCardProps = {
  event: Events;
};

const MotionLink = motion(Link);

export default function EventCard({ event }: EventCardProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.5 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <MotionLink
      ref={ref}
      href={`/event/${event.slug}`}
      className="flex-1 basis-80 h-[380px] max-w-[420px]"
      style={{
        // @ts-ignore
        scale: scaleProgress,
        // @ts-ignore
        opacity: opacityProgress,
      }}
      initial={{ scale: 0.8, opacity: 0 }}
    >
      <section className="relative w-full h-full flex flex-col bg-white/75 dark:bg-white/[3%] rounded-xl overflow-hidden state-effects duration-300 shadow-md">
        <Image
          src={event.imageUrl}
          alt={event.name}
          width={420}
          height={280}
          className="h-[60%] object-cover"
        />
        <div className="flex flex-col flex-1 justify-center items-center">
          <h2 className="text-2xl font-semibold">{event.name}</h2>
          <p className="italic text-black/75 dark:text-white/75">
            By {event.organizerName}
          </p>
          <p className="text-sm text-black/50 dark:text-white/50 mt-4">
            {event.location}
          </p>
        </div>

        <section
          className="absolute flex flex-col left-[12px] top-[12px] h-[45px] items-center w-[45px]
      bg-black/75 rounded-md"
        >
          <p className="text-xl text-white font-bold -mb-[5px]">
            {/* turn date into day of the month with leading zero */}
            {new Date(event.date).getDate().toString().padStart(2, "0")}
          </p>
          <p className="text-xs uppercase text-white">
            {/* turn date into month abbreviation */}
            {new Date(event.date).toLocaleString("en-us", { month: "short" })}
          </p>
        </section>
      </section>
    </MotionLink>
  );
}
