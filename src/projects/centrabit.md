---
name: "Centrabit website"
url: "http://148.251.199.126:8080/"
desc: "A start-up homepage. The owners are currently filling the pages with content, so the website is not deployed on the official domain yet."
accountable: 
- fullstack
- design
tags: 
- TypeScript
- React
- Next.js
- nodemailer
- Rest API
- MongoDB
- SCSS
---
**reCAPTCHA** protected forms.

Form data is stored in a **Mongo** database. Upon form submission, the server emails the user, confirming that their request is received, and the site owners, notifying them of a new request.

Pages are rendered from **.md** files and are revalidated regularly - no need to rebuild the site after updates have been made.
