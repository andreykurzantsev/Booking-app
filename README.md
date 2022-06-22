# Booking-app

## This web application is my course-work on the topic: methods and technologies of software development.

### Description of the project
This is a hotel booking web service consisting of a client and a server part. Written functionality for the administrator and regular client. The main branch of the repository contains functionality for a regular user.

### Technology stack

+ [JavaScript](https://developer.mozilla.org/en/docs/Web/JavaScript)
+ [Node JS](https://nodejs.org/en/about/)
##### front-end
+ [ReactJS](https://ru.reactjs.org/)
+ [CSS3](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)
+ [HTML5 elements](https://en.wikipedia.org/wiki/HTML5)
##### back-end
+ [ExpressJS](http://expressjs.com/)
+ [MongoDB](https://www.mongodb.com/)



### How to start the service

*Important! The client and server must run at the same time if you are not running the application through docker.*

1. **First, edit the var.env file in the api folder. Enter your values in the required fields. You will need a mongo database cloud cluster and a key to encrypt the token via jwt. In the port field, you can specify the port on which the server will start.**

2. **To run the application using docker, type the following commands in turn:**
```
> docker-compose build
> docker-compose up
```

3. **To run it locally, you need to change the proxy in package.json in the client folder, as follows**

 "proxy": "http://localhost:5000/api"

 4. **After that start the client and server.**
 
 Server:
```
 >cd client
 >npm i
 >npm start
```
 Client:
```
 >cd api
 >npm i
 >npm run dev
```
