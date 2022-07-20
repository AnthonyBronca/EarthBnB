# EarthBnB

EarthBnB demo: https://w14-earthbnb.herokuapp.com/

Git wiki : https://github.com/AnthonyBronca/EarthBnB

## Authors:

### Anthony Bronca
https://github.com/AnthonyBronca


## EarthBnB
------
EarthBnB is supposed to mimic the functionality of AirBnB. It is a full stack application that allows users to browse listings, check reviews on a listings, post a listing, review a listing, and make edits/deletes to items they created on their account. EarthBnB has a base of 3 users, 3 listings, and 4 reviews pre-seeded. Users testing are free to leave their own tests as long they remain approprite to the theme and is not-offensive.


## Images

### Splash Page![Screen Shot 2022-07-12 at 6 21 21 PM](https://user-images.githubusercontent.com/95654116/178605589-33741031-98bf-4901-80e7-dca8665253c5.png)

### Home Page
![Screen Shot 2022-07-12 at 6 22 07 PM](https://user-images.githubusercontent.com/95654116/178605705-bf11b38f-2bf4-4526-bf1a-447a49dc82ce.png)

### Individual listing page
![Screen Shot 2022-07-12 at 6 22 28 PM](https://user-images.githubusercontent.com/95654116/178605803-6a64838b-27a1-4a73-bc0c-45cb787643db.png)


## How to Run
------
1. You will need to download the repo and open it in VScode
2. Install node_modules using 'npm install'
3. In the root folder, create a '.env' file and use the '.env.example' file as a reference (you may copy and paste and use your own data)
4. In your terminal use the following commands in this order:
    - psql-create user EarthBnB with password 'password' createdb
    - npx dotenv sequelize init
    ** data models,seed data, and associations have been completed for you **
    - npx dotenv sequelize db:create
    - npx dotenv sequelize db:migrate
    - npx dotenv sequelize db:seed:all
5. Open a terminal in the backend folder and run "npm start" to begin the server on the back end. Open another terminal in the frontend folder run "npm start" to begin the server on the front end
6. In your browser navigate to "http://localhost:3000/"

## Languages and FrameWorks
-------
The website was built with React/Redux, CSS, Javascript, and Express

## Back-End
--------
Back-end uses API routes, thunks to routes, and queries returning using sequelize.

     - Express.JS
     - Javascript
     - Express Session
     - Express Validator
     - Express Cookie-Parser
     - PostgreSQL
     - Sequelize
     - Bcrypt.js
     - CSRF Token

## Front-End
--------
With the help of React I was able to mimic HTML styles with less code or DOM-manipulation.
Redux was used to hold state from page to page, and have most pages render changes dynamically.

    - React
    - Redux
    - JavaScript
    - CSS


### Where I plan to go from here

This project was by a student at App Academy for a class project. Students were given a week to work on the projects for 8 hours+ a day. This was my first full-stack project using React/Redux, and also my first time solo project.

Some of the challenges faced, and used as learning experience for future projects are:

- Use of Redux store towards the beginning made it difficult to debug react issues. As I gained more exposure I was able to add some full CRUD features within a day or two of starting them. In the future, I will better use redux store to create more states as needed in order to make state manipulation easier from page to page. I also learned how to better change redux within the reducers. I hope to make the code cleaner in the coming weeks.

I plan on implementing the following features within the next few weeks:

- Continue working on CSS styling
- Add the ability for users to book listings
- Refactor React/redux code in order to be more DRY and use Big-O processes for speed management
- Add more detailed error handling (both backend/frontend) for listings, reviews, and usernames allowed (users should not be able to post vulgar content)
- Booking feature. Users should be able to book listings and edit/delete them.
- Better User Profile prefences
- Better theme implementations along with more UI friendly styling
- Better Media Queries for different mobile devices/screen sizes.
- Bug Fixes
    - add a listing page does not load NotSignedIn page when user is not signed in. When attempting to add this feature, redux would cause app to break due to session user not being loaded in useSelector.
