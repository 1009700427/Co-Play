# CoPlay
Share your Spotify playlists with QR code! 
**Created June, 2018**

## Table of Contents 
- [About](#about)
- [Installation Instructions](#installation-instructions)
- [Built With](#built-with)
- [Features](#features)

## Creator
- [Siyuan Xu](https://github.com/1009700427)

## About
CoPlay is a web app that helps people share their Spotify playlists with QR code. 

## Installation Instructions:
#### Prerequisites
Requires Node.js installed.
1. Clone the repository
2. ```cd Co-Play```
3. Run ```npm install``` to download node modules
4. Run ```npm run build``` to bundle the code
5. Run ```npm run serve``` to start the server
6. In browser, visit ```localhost:3000``` to launch the app

## Built With 
- Webpack 
- Frontend 
  - React/Redux
  - Bootstrap 
  - LESS 
  - HTML/CSS
  - [QR Code API](http://goqr.me/api/doc/create-qr-code/)
- Backend
  - Express.js 
  - [Spotify Web API](https://developer.spotify.com/documentation/web-api/)

## Features 

### Login and Register Page 
In order to login/register, click on the ```Login with Spotify``` button, and it will lead you to the Spotify login site. This functionality is achieved with the OAuth Framework. In this way, we can receive authorization and refresh token for particular Spotify users and thus receive useful information (playlists, tracks, and so on). 

Login/Register Page: 
![login](https://user-images.githubusercontent.com/22974252/42426640-1fb39b90-835c-11e8-9ebf-6f6f1ee8bd63.png)

![login2](https://user-images.githubusercontent.com/22974252/42426726-d14efa3e-835c-11e8-924b-6ad360cac0c5.png)

![login3](https://user-images.githubusercontent.com/22974252/42426795-40dc0c70-835d-11e8-8677-945aa4e63c96.png)

### User Home Page
The user home page contains all the playlists a user has. We can see the QR code as well as a complete list of songs by clicking on each playlist. 
![userhome](https://user-images.githubusercontent.com/22974252/42426992-b4e1abf6-835e-11e8-856b-d1bfd5271bed.png)

### QR Code and Songs 
At this page, users can scan/save this QR code on their devices, and they will be directed to the designated webpage of this playlist. In addition, users can also click on each song and it will lead them to the song page in spotify. 
![playlist](https://user-images.githubusercontent.com/22974252/42427112-51d7bbee-835f-11e8-9824-5ea45d4183e9.png)

Scan it with your phone and share it with your friends! 
![phone](https://user-images.githubusercontent.com/22974252/42427380-d18bb22c-8360-11e8-9a02-30af3ebf74ba.jpeg)
