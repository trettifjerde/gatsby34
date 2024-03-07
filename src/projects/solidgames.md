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
- a forum
- a custom-made BBCode tag panel
- a real time messaging system
- a complex mission form for uploading user-made missions
- a .pbo file parser to extract info needed for mission form autocomplete
- an admin panel for user and content management
- an in-browser match replay viewer

In order to be able to fully adapt the frontend to the custom backend written in C++, I wrote the frontend in plain **HTML** and **vanilla JavaScript**, with **four third-party libraries only:** a slimmed-down [cropper](https://fengyuanchen.github.io/cropperjs/), **reCAPTCHA**, [Leaflet.js](https://leafletjs.com/) and [bitjson/qr-code](https://github.com/bitjson/qr-code).

The most fun I had was developing [the match replay viewer](https://sg.zone/replays/1705087203). The viewer gets a JSON file of player positions and in-game events and **recreates the match on a map** in a sort of video player UI so that users can scrutinise how the events unfolded at any moment. It allows as well to quickly rewind to a specific event from the event log or find a user from the players list on the map. The script also **aggregates and displays the overall match stats** for every player and squad.