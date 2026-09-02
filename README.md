# Abd Ur Rehman — Portfolio

Personal portfolio site for **Abd Ur Rehman**, Software Engineer (Cloud & AI/ML) and
HBSc Computer Science Specialist (Co-op) at the University of Toronto.

Built with React 19, Vite, Tailwind CSS, GSAP and Framer Motion. The hero, mid-page
transition and contact sections are scroll-driven canvas frame sequences.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run lint     # eslint
```

## Contact form configuration

The contact form uses [EmailJS](https://dashboard.emailjs.com/). Create a service and
template on your own EmailJS account, then:

```bash
cp .env.example .env
```

and fill in `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID` and
`VITE_EMAILJS_PUBLIC_KEY`. Until those are set the form reports
`COMM_LINK_UNCONFIGURED` rather than sending. The email address shown under the
form heading works as a direct fallback.

## Where the content lives

There is no central config file — content is inline in the components:

| Content | File |
| --- | --- |
| Page title, meta and Open Graph tags | `index.html` |
| Wordmark, nav links, "Hire Me" | `src/components/Navbar.jsx` |
| Name, role, tagline, HUD text, hero social links | `src/components/Hero.jsx` |
| Bio, info cards, tech stack, resume button | `src/components/About.jsx` |
| Project cards (`projectData`) | `src/components/Portfolio.jsx` |
| Services and work experience sidebar | `src/components/Services.jsx` |
| Contact form and EmailJS wiring | `src/components/Contact.jsx` |
| Footer brand, nav, social links, copyright | `src/components/Footer.jsx` |

## Assets

- `public/images/` — 240-frame hero sequence
- `public/src/assets/images/`, `src/assets/image2/` — mid-page transition sequence
- `public/image3/` — 160-frame contact sequence
- `public/projects/` — project card screenshots
- `public/Abd_Ur_Rehman_Resume.pdf` — resume served by the download button

## Credits

3D scene, scroll animation and layout based on the
[leeshark21](https://github.com/leeshark21) portfolio template.
