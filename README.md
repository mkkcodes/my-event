# My Event - Event Discovery Web App

My Event is a full-stack web application built with Next.js and Prisma that allows users to discover events happening in different cities.

## 🚀 Live Demo

[https://my-event-gamma.vercel.app/](https://my-event-gamma.vercel.app/)

## ✨ Features

- Browse events by city.
- Search for events.
- View event details.
- Pagination for event lists.
- Responsive design for mobile and desktop.

## ቴክ Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Database:** [PostgreSQL](https://www.postgresql.org/)
- **Validation:** [Zod](https://zod.dev/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/) & [Framer Motion](https://www.framer.com/motion/)

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm
- PostgreSQL

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/my-event.git
   cd my-event
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up the database:**

   - Create a PostgreSQL database.
   - Create a `.env` file in the root of the project and add your database connection string:

     ```
     DATABASE_URL="postgresql://user:password@host:port/database"
     ```

4. **Run database migrations:**

   ```bash
   npx prisma migrate dev
   ```

5. **Seed the database with sample data:**

   ```bash
   npx prisma db seed
   ```

6. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📜 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Lints the codebase.

## 📂 Folder Structure

```
.
├── prisma/
│   ├── schema.prisma  # Database schema
│   └── seed.ts        # Database seed data
├── public/            # Static assets
└── src/
    ├── app/           # Next.js App Router
    ├── components/    # Reusable React components
    └── lib/           # Utility functions and libraries
```

## 🚀 Deployment

The application is ready to be deployed on platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/). Make sure to set up the `DATABASE_URL` environment variable in your deployment provider.