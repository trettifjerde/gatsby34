---
name: "Centrabit website"
site: "http://148.251.199.126:8080/"
desc: "A website for a start-up. Currently is being filled with content, so it's not deployed on the official domain yet."
accountable: 
- fullstack
tags: 
- TypeScript
- React
- Next.js
- nodemailer
- Rest API
- MongoDB
- SCSS
order: 1
---
Pages are rendered from **.md** files and are **revalidated regularly** - no need to rebuild the website when content is updated.

Upon form submission, the backend stores data in a database and **sends email notifications** - to the user, confirming that their request has been received, and to the site administrator, notifying them of a new request.

Forms are protected with **reCAPTCHA Enterprise**.

