# OTP-VERIFICATION

## Demo of the project at : https://youtu.be/tjmM_GFxGr0

## How To Install/Run on your local directory.

1. Clone this project
2. Start by installing npm and MongoDB on your PC if you don't have it already.
3. Navigate to Project Directory by :

```
cd otp-verification-admitkard
```

4. To run API navigate to API and run using the following commands

```
cd api
npm install
npm start or nodemon index.js or node index.js
```

-> API will start on port 8000 5. To run client/frontend navigate to the following directory by :

```
cd .. // To go back to project directory
cd client
npm install
npm start or react-scripts start
```

## Basic Features:

#### TechStack : HTML, CSS, JS, ReactJS, NodeJS, ExpressJS, MongoDB

1. Server built on Node and Express. Client side written on React.
2. Validation for phone number and OTP inbuilt.
3. OTP stays valid for 15 minutes.
4. OTP service also used(only works from 9AM - 9PM).

## How to Use/Control?

1. First enter a 10 digit correct number. For receiving SMS on mobile via Fast2SMS(between 9AM-9PM) please us an Indian mobile number.(Try adding less than 10 digit numbers).
2. Receive an OTP on mobile and on APP screen, enter that OTP. (Try adding wrong OTPs or Incomplete ones).
3. Enter the OTP and you will be validated.

## Preview

## Directory Structure

`/api` - contains all api part <br>
`/api/index.js` - entry point to express <br>
`/api/routes` - contains all routes <br>
`/api/routes/api` - contains all api files <br>
`/api/models` - contains all models <br>
`/api/controllers`- contains all controllers <br>
`/api/config` - contains all config files <br>

`/client` - contains frontend part <br>
`/client/src` - all code files <br>
`/client/src/components` - all react components <br>
`/client/src/assets` - all assets files <br>
`/client/src/img` - all image files <br>
`/client/src/css` - all css files <br>
`/client/src/config` - all config files <br>
