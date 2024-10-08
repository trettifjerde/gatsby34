---
name: "SolidGames"
site: "https://sg.zone/"
desc: "A multipurpose platform for a gaming community with 3000+ registered members."
accountable: 
- frontend
tags:
- JavaScript
- CSS
- HTML
priority: 3
---
SolidGames website features:
- forum
- custom-made BBCode tag panel
- real time messaging system
- complex form for uploading user-made mission files
- .pbo file parser used to extract ArmA 3 mission data to autocomplete the mission upload form
- admin panel for user and content management
- in-browser match replay viewer

In order to be able to fully adapt the frontend to the custom backend written in C++, I wrote the frontend in plain **HTML** and **vanilla JavaScript**, with **five third-party libraries only:** a slimmed-down [cropper](https://fengyuanchen.github.io/cropperjs/), **reCAPTCHA**, [Leaflet.js](https://leafletjs.com/), [prism](https://prismjs.com/) and [bitjson/qr-code](https://github.com/bitjson/qr-code).

I had the most fun developing [the match replay viewer](https://sg.zone/replays/1705087203). The viewer script loads a JSON file containing player positions and in-game events for every 5 minutes of the match and then **recreates the whole match on a scalable map** made using the Leaflet.js library. The UI that resembles a video player allows you to:
- scrutinise how events were unfolding at any given moment
- quickly rewind to any event from the log
- pinpoint players from the players list on the map and get additional info on their in-game status and position 

The script also **aggregates and displays the overall match statistics** for every player and squad.