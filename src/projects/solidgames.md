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
SolidGames website features:
- forum
- custom-made BBCode tag panel
- real time messaging system
- complex form for uploading user-made missions
- .pbo file parser used to extract info that is needed for mission form autocomplete
- admin panel for user and content management
- in-browser match replay viewer

In order to be able to fully adapt the frontend to the custom backend written in C++, I wrote the frontend in plain **HTML** and **vanilla JavaScript**, with **four third-party libraries only:** a slimmed-down [cropper](https://fengyuanchen.github.io/cropperjs/), **reCAPTCHA**, [Leaflet.js](https://leafletjs.com/) and [bitjson/qr-code](https://github.com/bitjson/qr-code).

I had the most fun developing [the match replay viewer](https://sg.zone/replays/1705087203). The viewer gets a JSON file of player positions and in-game events and **recreates the match on a map** in a sort of video player UI. It allows users to scrutinise how the events were unfolding at any moment and quickly rewind to specific events from the log or pinpoint specific players from the players list on the map. The script also **aggregates and displays the overall match statistics** for every player and squad.