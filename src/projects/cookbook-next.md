---
name: "Cookbook Next.js"
repo: "https://github.com/trettifjerde/cookbook-nextjs"
url: "https://cookbook-nextjs-34.vercel.app/"
desc: "A web app for sharing recipes and keeping shopping lists."
accountable:
- fullstack
- design
tags: 
- TypeScript
- React
- Next.js
- Redux Toolkit
- Rest API
- MongoDB
- CSS
- Tailwind
- Framer Motion
---
Registration, authentication and authorization are implemented without any third-party libraries except for **JWT**.

Data is stored in a **Mongo Atlas** database and is cached both on server and client, so the number of DB calls is reduced.

Recipe images are uploaded to [imgbb](https://imgbb.com/) when the recipe form is being submitted.

All the ingredients of any given recipe can be added to your shopping list in just one click. Items with the same name and units add up automatically.