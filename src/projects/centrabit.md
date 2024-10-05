---
name: "Centrabit"
site: "https://centrabit.com/"
desc: "An informational website for a crypto start-up and a place to subscribe to their desktop app."
accountable: 
- fullstack
- design
tags: 
- TypeScript
- React
- Next.js 
- react-markdown
- nodemailer
- paddle.js
- MongoDB
- SCSS
priority: 1
---
Pages are **rendered from .md** files, using **incremented static regeneration** - no need to rebuild the website when the content is updated.

Webshop functionalities are implemented using **Paddle**’s APIs.

The two forms (Newsletter Subscription and Contact Us) are protected with **reCAPTCHA Enterprise**.

The backend **stores** form data **in a MongoDB database** and **sends emails** on form submission: a confirmation letter to the user and a notification letter to the site administrator

