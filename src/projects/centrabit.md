---
name: "Centrabit website"
site: "http://148.251.199.126:8080/"
desc: "An informational website for a start-up. Currently is being filled with content and not deployed on the official domain yet."
accountable: 
- fullstack
- design
tags: 
- TypeScript
- React
- Next.js 
- react-markdown
- nodemailer
- MongoDB
- SCSS
order: 1
---
Pages are rendered from **.md** files and are **revalidated regularly** - no need to rebuild the website when the content is updated.

The two forms (Newsletter Subscription and Contact Us) are protected with **reCAPTCHA Enterprise**.

Upon form submission, the backend **stores** the form **data in a database** for future reference and **sends emails** both to the user (confirming that their request has been received) and the site administrator (notifying them of a new request).

