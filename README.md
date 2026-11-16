# Femila Ketherine Sheela K. — Portfolio

A responsive developer portfolio built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and lucide-react. It includes an accessible contact form backed by a Next.js route handler and the Resend email API.

## Requirements

- Node.js 18.18 or newer
- npm
- A [Resend](https://resend.com/) account and a verified sender address to deliver contact-form messages

## Local development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env.local` and add your Resend API key and verified sender address:

   ```env
   RESEND_API_KEY=re_...
   RESEND_FROM_EMAIL=Femila's Portfolio <portfolio@your-verified-domain.com>
   CONTACT_EMAIL=femilakatherinesheela@gmail.com
   ```

   `CONTACT_EMAIL` defaults to Femila's public contact address if omitted. Keep `.env.local` private; it is excluded from Git.

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000).

Without a valid Resend configuration, the portfolio still renders normally, but the contact endpoint returns an error when someone submits the form.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create the optimized production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npx tsc --noEmit` | Check TypeScript types |

## Deploy to Vercel

1. Push this repository to GitHub and import it into [Vercel](https://vercel.com/new).
2. Keep the detected Next.js build settings, or use `npm run build` as the build command.
3. In **Project Settings → Environment Variables**, add `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and (optionally) `CONTACT_EMAIL`. Use a sender address on a domain verified with Resend.
4. Deploy, then test the contact form on the deployed site. Configure the same variables for Preview deployments if you want contact delivery there.

## Updating the portfolio

- Edit the typed portfolio content in `lib/portfolio-data.ts`.
- Update the layout metadata in `app/layout.tsx`.
- Project source/demo links are intentionally omitted until real URLs are supplied; no placeholder destinations are linked.

## Contact delivery

`POST /api/contact` validates and limits the name, email, and message fields, then sends a plain-text email through Resend. The visitor's email is set as `reply_to`, so replies go directly to them. The API key and sender address are only read on the server and must never be exposed as `NEXT_PUBLIC_*` variables.
