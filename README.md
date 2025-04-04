# Creative Agency Website

A modern, Gen Z-friendly website for a creative advertising agency built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Modern, responsive design
- Admin dashboard with authentication
- Blog post management
- Analytics tracking
- User management
- Site settings management

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- MongoDB
- TinyMCE Editor

## Getting Started

### Prerequisites

- Node.js 18.x or later
- MongoDB Atlas account
- Vercel account (for deployment)

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd creative-agency
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ADMIN_EMAIL=admin@example.com
   ADMIN_PASSWORD=admin123
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is configured for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add the following environment variables in your Vercel project settings:
   - `MONGODB_URI`
   - `NEXT_PUBLIC_SITE_URL`
   - `ADMIN_EMAIL`
   - `ADMIN_PASSWORD`

## Admin Access

Default admin credentials:
- Email: admin@example.com
- Password: admin123

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 