# Home1800


  This project was built from three different repositories [RealEstate_Server](https://github.com/estherkimyunjung/RealEstate_Server), [RealEstate_NodeServer](https://github.com/estherkimyunjung/RealEstate_NodeServer), and [RealEstate_Client](https://github.com/estherkimyunjung/RealEstate_Client). Then it was merged into [Home1800][1] to simplify cloning and updating the project.

  <img src="images/Home1800.png" alt="Home 1800 Homepage" width="730"/>


>
> *This application build with*
>
  > - **Back-end**
  >> <img src="images/Ruby_Rails.jpeg" alt="Ruby on Rails logo" width="45"/> **Ruby on Rails**  - *endpoints for users (client and agent), companies, properties, and appointments*
  >> <img src="images/Nodejs.png" alt="Node.js logo" width="45"/> **Node.js** - *Nodemailer for email and Socket.IO for chat server*
>
  > - **Front-end**
  >> <img src="images/React_hooks_Redux.png" alt="React and Redux logo" width="105"/> **React**, **Redux**, and **Hooks** - *JWT authentication to manage user logins. Google Maps API to show the location and provide additional information to the property listings*
>
  > - **UI framework**
  >> <img src="images/Material_UI.png" alt="Maerial UI logo" width="30"/> **Material UI**, <img src="images/Semantic_UI.png" alt="Semantic UI logo" width="30"/> **Semantic UI**, and <img src="images/reactstrap.png" alt="React-Bootstrap logo" width="30"/> **React-Bootstrap**
>
  

## Usage Guide

### Initial Setup

1. Fork and clone this repository to your local machine.
2. CD into the directory where you cloned.
3. `cd server/` then setup the environment `bundle install`, `rails db:migrate`, `rails db:seed`, and `rails s` to start the server.
4. open another terminal for node server `cd node_server/` Type `npm install` then run the node server by `npm start`.
5. open last terminal for client, move client directory by `cd client/` and type `npm install` for dependency setup then start the react app by `npm start`.
6. Now you are available to see in your browser URL: http://localhost:3001/login for Login (ID: est123 Password:es12345) or Sign Up for new account.

  ### Linking Images ###
  [![An old rock in the desert](/assets/images/shiprock.jpg "Shiprock, New Mexico by Beau Rogers")](https://www.flickr.com/photos/beaurogers/31833779864/in/photolist-Qv3rFw-34mt9F-a9Cmfy-5Ha3Zi-9msKdv-o3hgjr-hWpUte-4WMsJ1-KUQ8N-deshUb-vssBD-6CQci6-8AFCiD-zsJWT-nNfsgB-dPDwZJ-bn9JGn-5HtSXY-6CUhAL-a4UTXB-ugPum-KUPSo-fBLNm-6CUmpy-4WMsc9-8a7D3T-83KJev-6CQ2bK-nNusHJ-a78rQH-nw3NvT-7aq2qf-8wwBso-3nNceh-ugSKP-4mh4kh-bbeeqH-a7biME-q3PtTf-brFpgb-cg38zw-bXMZc-nJPELD-f58Lmo-bXMYG-bz8AAi-bxNtNT-bXMYi-bXMY6-bXMYv)

  ### An Example Putting the Parts Together ###
In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends
of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to
eat: it was a [hobbit-hole][1], and that means comfort.


[Home1800][1]

[1]: <https://github.com/estherkimyunjung/Home1800> "Home1800"