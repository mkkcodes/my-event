import { ImageResponse } from "next/og";

// Image metadata
export const alt = "My Events";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  return new ImageResponse(
    (
      <section>
        <h1>{params.slug}</h1>
        <p>My Events - Browse events around you</p>
      </section>
    )
  );
}
