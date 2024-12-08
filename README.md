# Blogtopia

**Blogtopia** is a blogging platform built with modern web technologies. It allows users to create, edit, and delete their blogs and enables other users to comment on these blogs. This project demonstrates the power of server-side actions with Next.js, efficient database management with Drizzle ORM, and modern UI components using ShadCN and Tailwind CSS.

## 🌟 Features

- **Blog Management**: Users can create, edit, and delete blogs.
- **Commenting System**: Users can interact with blogs by adding comments.
- **Database**: Uses PostgreSQL with Drizzle ORM for efficient and structured data handling.
- **Modern UI**: Styled with Tailwind CSS and ShadCN components.
- **Server Actions**: Implements efficient server-side logic with Next.js server actions.
- **Caching**: API responses are cached using `next/cache`.

## 🚀 Technologies Used

- **Next.js**: For the front-end and server-side rendering.
- **Drizzle ORM**: For interacting with the PostgreSQL database.
- **PostgreSQL**: Hosted on Neon for database management.
- **ShadCN**: For prebuilt UI components.
- **Tailwind CSS**: For styling.
- **Husky**: For managing git hooks.
- **Prettier**: For consistent code formatting.

## 🌐 Live Demo

Check out the live version: [Blogtopia](https://blogtopia-mu.vercel.app/)

## 📂 Folder Structure

```
.
├── src/
│   ├── app/               # Next.js application directory
│   ├── db/                # Database schema and connection files
│   ├── components/        # Reusable UI components
│   ├── pages/             # API routes and static pages
│   ├── public/            # Static assets
│   ├── styles/            # Global styles (including Tailwind CSS)
│   ├── utils/             # Utility functions
└── README.md              # Project documentation
```

## 🛠️ Prerequisites

- **Node.js**: v18 or later
- **npm**: v9 or later
- **PostgreSQL Database**: Hosted locally or on Neon (details below)

## 🛠️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/blogtopia.git
cd blogtopia
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory and copy the following environment variables:

```env
NODE_ENV=development
NEXT_PUBLIC_VERCEL_URL=http://localhost:3000
AUTH_SECRET=your-secret-key
AUTH_TRUST_HOST=localhost
POSTGRES_PRISMA_URL="postgres://<your-user>:<your-password>@<your-host>/<your-database>?sslmode=require"
POSTGRES_URL_NON_POOLING="postgres://<your-user>:<your-password>@<your-host>/<your-database>?sslmode=require"
```

Replace `<your-user>`, `<your-password>`, `<your-host>`, and `<your-database>` with your PostgreSQL database credentials.

### 4. Set Up the Database

#### Generate the schema

```bash
npm run db:generate
```

#### Apply migrations

```bash
npm run db:migrate
```

#### (Optional) Start Drizzle Studio

For a graphical interface to manage your database:

```bash
npm run db:studio
```

### 5. Run the Application

Start the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## 🛠️ Deployment

The project is deployed on Vercel. To deploy the project manually:

1. Connect your GitHub repository to Vercel.
2. Add the necessary environment variables in the Vercel dashboard.
3. Vercel will automatically build and deploy your application.

## ⚙️ Commands

| Command               | Description                                |
| --------------------- | ------------------------------------------ |
| `npm run dev`         | Start the development server               |
| `npm run build`       | Build the project for production           |
| `npm run start`       | Start the production server                |
| `npm run lint`        | Run the linter to check code quality       |
| `npm run prettier`    | Format code with Prettier                  |
| `npm run db:generate` | Generate database schema                   |
| `npm run db:migrate`  | Apply database migrations                  |
| `npm run db:push`     | Push the schema to the database            |
| `npm run db:studio`   | Open Drizzle Studio to manage the database |

## 🛠️ Database Connection

The application uses a singleton pattern to ensure a single database connection throughout the app. The database is hosted on Neon, using pooled and non-pooled URLs as required.

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---
