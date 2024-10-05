---
name: "Cookbook Next.js"
repo: "https://github.com/trettifjerde/cookbook-nextjs"
site: "https://cookbook-nextjs-34.vercel.app/"
desc: "A web app for sharing recipes and keeping grocery lists."
accountable:
- fullstack
- design
tags: 
- TypeScript
- React
- Next.js
- Redux Toolkit
- MongoDB
- CSS
- Tailwind CSS
- Framer Motion
priority: 0
---
Registration and authentication are implemented without any third-party libraries other than **JWT**.

Data is **cached** both on server and client, so the number of DB calls is reduced.

Images that users attach to their recipes are uploaded to [imgbb](https://imgbb.com/) image hosting when the recipe is added to the database.

Ingredients of any given recipe can be added to the user's grocery list **in just one click**. Items with the same name and measure units **add up automatically**.