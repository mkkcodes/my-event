import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const events = [
  {
    id: 1,
    name: "DJ Practice Session",
    slug: "dj-practice-session",
    city: "London",
    location: "O2 Academy Brixton",
    date: "2030-10-12T00:00:00.000Z",
    organizerName: "DJ Collective",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Join us for an immersive DJ practice session at the DJ Beats Workshop in London! Perfect for beginners and pros alike, learn and showcase your skills in a supportive environment.",
  },
  {
    id: 2,
    name: "Harmony Festival",
    slug: "harmony-festival",
    city: "Manchester",
    location: "Manchester Central Convention Complex",
    date: "2030-11-15T00:00:00.000Z",
    organizerName: "UK Music Enthusiasts",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Experience the magic of music across genres at Harmony Festival in Manchester! Live performances, workshops, and a celebration of musical creativity.",
  },
  {
    id: 3,
    name: "3D Animation Workshop",
    slug: "3d-animation-workshop",
    city: "Bristol",
    location: "Watershed Bristol",
    date: "2030-12-08T00:00:00.000Z",
    organizerName: "3D Animators UK",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Enter the world of 3D animation in Bristol! Perfect for students, pros, and creatives wanting to learn from experts in the industry.",
  },
  {
    id: 4,
    name: "Rock the City Concert",
    slug: "rock-the-city-concert",
    city: "Birmingham",
    location: "Utilita Arena Birmingham",
    date: "2030-11-18T00:00:00.000Z",
    organizerName: "Rock On Productions UK",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Rock out at Birmingham’s biggest rock concert! With top bands and electrifying performances, this is a night of pure rock energy.",
  },
  {
    id: 5,
    name: "Artisan Craft Fair",
    slug: "artisan-craft-fair",
    city: "Edinburgh",
    location: "Edinburgh International Conference Centre",
    date: "2030-12-01T00:00:00.000Z",
    organizerName: "Scottish Craftsmanship Guild",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Explore unique handmade crafts in Edinburgh! Meet artisans, shop for one-of-a-kind items, and support local craftsmanship.",
  },
  {
    id: 6,
    name: "Jazz Fusion Night",
    slug: "jazz-fusion-night",
    city: "London",
    location: "Ronnie Scott's Jazz Club",
    date: "2030-11-29T00:00:00.000Z",
    organizerName: "Groove Masters UK",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Enjoy the vibrant sounds of jazz fusion in London at the legendary Ronnie Scott's Jazz Club!",
  },
  {
    id: 7,
    name: "Indie Music Showcase",
    slug: "indie-music-showcase",
    city: "Brighton",
    location: "The Green Door Store",
    date: "2030-11-25T00:00:00.000Z",
    organizerName: "Indie Vibes UK",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Discover emerging indie artists at Brighton’s Indie Music Showcase! Enjoy live performances and support independent UK music.",
  },
  {
    id: 8,
    name: "Global Food Festival",
    slug: "global-food-festival",
    city: "Bristol",
    location: "Bristol Harbourside",
    date: "2030-10-30T00:00:00.000Z",
    organizerName: "Foodie Ventures UK",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Taste cuisines from around the world at Bristol’s Global Food Festival! Sample dishes, see cooking demos, and enjoy culinary delights.",
  },
  {
    id: 9,
    name: "Tech Innovators Summit",
    slug: "tech-innovators-summit",
    city: "London",
    location: "ExCeL London",
    date: "2030-11-15T00:00:00.000Z",
    organizerName: "InnovateTech UK",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Explore tech innovations and network with industry leaders at London’s Tech Innovators Summit.",
  },
  {
    id: 10,
    name: "Enchanted Garden Gala",
    slug: "enchanted-garden-gala",
    city: "Edinburgh",
    location: "Royal Botanic Garden Edinburgh",
    date: "2030-12-02T00:00:00.000Z",
    organizerName: "Cultural Garden Society UK",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Step into an enchanting night of art and music at Edinburgh's Royal Botanic Garden.",
  },
  {
    id: 11,
    name: "Comedy Extravaganza",
    slug: "comedy-extravaganza",
    city: "London",
    location: "The Comedy Store",
    date: "2030-11-06T00:00:00.000Z",
    organizerName: "Laugh Productions UK",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Get ready to laugh out loud with top comedians at The Comedy Store in London!",
  },
  {
    id: 12,
    name: "Science and Space Expo",
    slug: "science-space-expo",
    city: "Manchester",
    location: "Museum of Science and Industry",
    date: "2030-10-29T00:00:00.000Z",
    organizerName: "Cosmic Explorers Society UK",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Explore science and space in Manchester with hands-on exhibits and expert talks.",
  },
  {
    id: 13,
    name: "Fashion Runway",
    slug: "fashion-runway",
    city: "London",
    location: "Somerset House",
    date: "2030-11-12T00:00:00.000Z",
    organizerName: "Chic Trends UK",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "See the latest fashion trends at London’s iconic Somerset House.",
  },
  {
    id: 14,
    name: "Culinary Masterclass",
    slug: "culinary-masterclass",
    city: "Edinburgh",
    location: "Edinburgh Cook School",
    date: "2030-12-02T00:00:00.000Z",
    organizerName: "Gourmet Chefs UK",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description: "Join expert chefs for a culinary masterclass in Edinburgh.",
  },
  {
    id: 15,
    name: "Film Buffs Symposium",
    slug: "film-buffs-symposium",
    city: "Leeds",
    location: "Hyde Park Picture House",
    date: "2030-11-08T00:00:00.000Z",
    organizerName: "Cinema Society UK",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Celebrate cinema at Leeds’ Hyde Park Picture House with screenings and discussions.",
  },
  {
    id: 16,
    name: "Literary Salon",
    slug: "literary-salon",
    city: "Oxford",
    location: "Blackwell's Bookshop",
    date: "2030-12-15T00:00:00.000Z",
    organizerName: "Words Society UK",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Enjoy readings, discussions, and more at Oxford’s iconic Blackwell's Bookshop.",
  },
  {
    id: 17,
    name: "Wellness Expo",
    slug: "wellness-expo",
    city: "London",
    location: "Olympia London",
    date: "2030-11-30T00:00:00.000Z",
    organizerName: "Wellness Warriors UK",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description: "Dive into health and wellness at London’s Wellness Expo.",
  },
  {
    id: 18,
    name: "Digital Art Symposium",
    slug: "digital-art-symposium",
    city: "Birmingham",
    location: "MAC Birmingham",
    date: "2030-11-01T00:00:00.000Z",
    organizerName: "Tech Creatives Collective UK",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Discover digital art innovations at MAC Birmingham with workshops and talks.",
  },
  {
    id: 19,
    name: "Dance Fusion Festival",
    slug: "dance-fusion-festival",
    city: "Liverpool",
    location: "Liverpool Street Dance Studio",
    date: "2030-11-28T00:00:00.000Z",
    organizerName: "Rhythm Revolution UK",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Join us for a fusion of dance styles at Liverpool's Dance Fusion Festival!",
  },
];

async function main() {
  console.log(`Start seeding ...`);

  for (const event of events) {
    const result = await prisma.events.upsert({
      where: { id: event.id },
      update: {},
      create: event,
    });
    console.log(`Created event with id: ${result.id}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
