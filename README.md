# IdeaVault – Client

## Project Overview

IdeaVault is a community-driven platform where innovators, entrepreneurs, and startup enthusiasts can share, explore, and discuss business ideas. Users can browse ideas, search by category, leave feedback, and manage their own submissions through a secure dashboard.

## Live Demo

🔗 https://ideavaultclient-beta.vercel.app

---

## Technologies Used

- Next.js (App Router)
- React
- Tailwind CSS
- HeroUI
- Better Auth
- React Hot Toast
- Lucide React
- React Icons

---

## Features

- User authentication with Better Auth
- Browse and search business ideas
- Filter ideas by category
- Add, edit, and delete your own ideas
- Comment on ideas and participate in discussions
- Protected dashboard for authenticated users
- Dark and light mode support
- Responsive design for mobile, tablet, and desktop

---

## Main Dependencies

- next
- react
- react-dom
- @heroui/react
- better-auth
- react-hot-toast
- lucide-react
- react-icons

---

## Run the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/Muna-Rahman/ideavault-client.git
cd ideavault-client
2. Install dependencies
npm install
3. Create a .env.local file
BETTER_AUTH_SECRET=your_secret
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_SERVER_URL=http://localhost:5000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

MONGODB_URI=your_mongodb_uri
4. Start the development server
npm run dev
5. Open the application
http://localhost:3000

Server Repository: https://github.com/Muna-Rahman/ideavault-server
