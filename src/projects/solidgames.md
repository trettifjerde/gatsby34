---
name: "SolidGames website"
site: "https://sg.zone/"
desc: "A multipurpose platform for a gaming community with 3000+ registered members."
accountable: 
- frontend
tags:
- JavaScript
- CSS
- HTML
order: 1
---
The person I collaborated on this project with wrote the backend in C++, so I went hardcore too and wrote my front end part in **HTML** and **vanilla JavaScript** with **two third-party libraries only:** a slimmed-down [cropper](https://fengyuanchen.github.io/cropperjs/) and [Leaflet](https://leafletjs.com/).

SolidGames website features:
- a forum
- a real time messaging system
- a complex form for uploading mission files
- an admin panel for user and content management
- a custom made BBCode tag panel
- an in-browser match replay viewer

I had the most fun developing [the match replay viewer](https://sg.zone/replays/1705087203). I wrote a script that reads a JSON file (containing player positions and in-game events for every 5 seconds of the game) and **recreates the match on a map** in the browser. The script also **aggregates match statistics** for every player and squad.