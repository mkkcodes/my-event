import React from "react";
import Skeleton from "./skeleton";

export default function SkeletonCard() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-36 w-full" />
      <Skeleton className="h-5 w-[250px] rounded-lg" />
      <Skeleton className="h-4 w-[200px] rounded-full" />
      <Skeleton className="h-2 w-[200px] rounded-full" />
    </div>
  );
}
