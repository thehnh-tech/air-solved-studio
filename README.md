# Clean Air Technology — website

A React and TypeScript website presenting Clean Air Technology's air-treatment, air-conditioning and maintenance services. The pages cover market sectors, project references, partners and a contact flow.

The repository name `air-solved-studio` is retained; the brand shown in the site is **Clean Air Technology**.

## Stack and layout

- Vite, React, TypeScript and React Router.
- Tailwind CSS, shadcn/ui components and Framer Motion.
- `src/pages/` — route-level pages.
- `src/components/` — navigation and reusable page sections.
- `src/assets/` and `public/` — visual and static assets.
- `api/contact.ts` — server-side contact endpoint using Resend.

## Development

```sh
npm install
npm run dev
```

Use the local address printed by Vite. To build and preview the frontend:

```sh
npm run build
npm run preview
```

## Checks and configuration

`npm run lint` and `npm test` are defined in the package manifest. Their presence is not a statement that a particular revision has passed validation.

The contact endpoint needs `RESEND_API_KEY` in server-side deployment configuration. Do not place the key in a client-side `VITE_` variable or tracked source file. A Vite-only local session does not by itself establish that the deployed contact endpoint is configured.

## Project origin

The initial project was generated with Lovable. This repository contains the site's application code and assets. Business claims and references in the page content belong to the site content and should be confirmed by the business before publication.
