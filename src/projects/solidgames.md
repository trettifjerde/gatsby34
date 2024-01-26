---
name: "SolidGames website"
url: "https://sg.zone/"
desc: "A multipurpose platform for a gaming community with 3000+ registered members."
accountable: 
- frontend
tags:
- JavaScript
- CSS
- HTML
---
The platform features:

- a forum
- a real time messaging system
- a complex form for uploading player made mission files
- an admin panel for user and content management
- a game replay viewer

I worked on the front end, implementing the given graphic design and connecting the client side to the backend written in **C++**, so I made it in plain **JavaScript** and **HTML**.

The most fun I had was developing [the game replay viewer](https://sg.zone/replays/1705087203). This utility:

- gets a JSON file of player positions and in-game events
- recreates the match in browser on a map, using the **Leaflet** library
- calculates and displays the overall match statistics