# TC Hacks

Website for **TC Hacks**, a student organization at the University of Minnesota that runs the Twin Cities' student hackathon, plus networking nights, resume reviews and build nights throughout the year.

Built with [Next.js](https://nextjs.org) (React), [Tailwind CSS](https://tailwindcss.com) and [Motion](https://motion.dev), the same stack [Aceternity UI](https://ui.aceternity.com/components) components are built for, so you can copy their components straight in.

## Run it locally

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Where things live

| What | Where |
| --- | --- |
| All the text (events, FAQ, team, sponsor perks) | `src/content/site.ts` |
| Pages | `src/app/page.tsx` (Home), `src/app/about`, `src/app/events`, `src/app/sponsor`, `src/app/faq` |
| Colors and fonts | `src/app/globals.css` (the `@theme` block) |
| Header and footer | `src/components/header.tsx`, `src/components/footer.tsx` |
| Minneapolis skyline illustration | `src/components/skyline.tsx` |
| Email and sponsor forms | `src/components/forms.tsx` |

Most edits only need `src/content/site.ts`.

### Adding team photos

Save a square photo (a LinkedIn profile photo at 400×400 works well) to `public/team/`, for example `public/team/eric.jpg`, then add it to that person in `src/content/site.ts`:

```ts
{ name: "Eric He", founder: true, image: "/team/eric.jpg" },
```

### Hooking up the forms

The "Stay updated" and sponsor forms show a thank-you message but don't send anything yet. Connect them to a service such as Formspree, Google Forms or Mailchimp in `src/components/forms.tsx`.

### Using Aceternity components

Aceternity components expect a `cn()` helper, which is already in `src/lib/utils.ts`, and the `motion`, `clsx` and `tailwind-merge` packages, which are already installed. Copy a component into `src/components/` and import it into a page.

## Deploying

The easiest option is [Vercel](https://vercel.com): import this GitHub repo and click Deploy. Every push to `main` then updates the live site automatically.

## Placeholders to fill in

Search the code for `[contact email]`, `[Name]`, `Date: TBD` and the `#` social links in `src/content/site.ts`.
