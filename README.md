# ShortenUrl
  Design a url shortener service, here give the url(full url) as input and service will generate the shorten url and store in the table 
and If the shortened url service or api , the corresponding longer url (the original
webpage) will open up.

  User give the url(full url) and key(short url) as input and it will check the key if key(short url) is not available then it will store in the table and if key(short url) is available it will give the error.  

### Software Requirement :
1. Nodejs(v12.18.4)
2. Mongodb
3. MongoCompass(if only to see Databas) 

### Packages Used:
1. Express:- Express.js is a web application framework for Node.js. It provides various features that make web application development fast and easy which otherwise takes more time using only Node.js.
2. EJS:- EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.
3. Moongose:- Mongoose is a JavaScript framework that is commonly used in a Node.js application with a MongoDB database.
4. Shortid:- ShortId creates amazingly short non-sequential url-friendly unique ids.

### Project Setup Guide :
1. Download the project ShortenUrl.
2. Open the project in command prompt or vscode
3. Install packages those are used in project. Run the following command
```
    npm install 
```
4. Run project on node server using following command
```
    npm start
```
5. Application run on the PORT 3000. The url ``` http://<your-domain>:3000 ``` open in the browser
