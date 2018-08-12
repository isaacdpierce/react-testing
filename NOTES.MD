# create-react-app

## Stuff we get on install:

1. React - the React Library
2. Webpack - Links together js files
3. Babel - compiles ES6/7/8 etc. and JSX into ES5 code
4. Jest - Automated test runner
5. JSDOM - javascript code implementation (Libray) which simulates a browser in the command line to run tests - it will create fake HTML elements inside the terminal to be tested by Jest

## React side - 3 Components

1. App component - Holds all other components
2. Comment box component
3. Comment List component

## Redux side

1. Global state object (State)
   - 1 Reducer: it will produce a piece of state we will refer to as 'comments'
   - 'comments' is an array of strings the user has added via the comment box form ["I'm a comment", "I'm another comment"]
2. Actions - 1 action - saveComment - Adds a comment via the 'comments' reducer.

## Reuseable Testing Framework

3 steps:

1. Look at every individual part of the application -> every component, every reducer, every action creator
2. Imagine you are sitting with a friend and you tell that person the purpose of each part of the application whatever I say to my friend as the purpose of that part of the application is what I am going to write a test for
3. Write a test to very each part of the app does what I say it should do

## Testing outline for this app

### App Component

1. Shows the comment box inside of it
2. Shows the comment list inside of it

### Comment Box component

1. Shows a text area and a button
2. Users can enter input into the text area and submit it
3. When the input is submitted the text area should be cleared

### Comment List component

1. shows 1 'li' per component
2. Text from each comment is visible

### Comments reducer

1. Properly handles actions with a type of 'SAVE_COMMENT'
2. Doesn't throw an error if it gets an action of any other type

### SaveComment action

1. Has the type of 'SAVE_COMMENT'
2. Produces an action that has a payload of the new comment's text

## ReactDOM renders a component to the DOM (displays it on screen)

- it is in the index.js file

Connect with us!

Sign up for our newsletter to stay up to date with all our research!

We understand how annoying and stressful it is to try find products that are suited to a fungal skin condition.

To take the stress out of shopping. Remove the confusion of ingredient lists. Save you tons of money.

Our goal is to help help you find the the products that are best for your skin by relieving you of the ingredient list checking ordeal.

We want shopping to be fun again. With Sezia you will immediately know if a product is right for you or not. No more squinting or trying to translate dead languages or piece together extracts. We do all the research for you.

ULTIMATE BENEFIT OF SEZIA - Skincare shopping is FUN again!

## 'it' function

- globally available function to start a test (NO IMPORTS REQUIRED)

## 'expect' function - test expectations

- 'expect' is a globally available function (NO IMPORTS REQUIRED)
- expect( "The thing we want to verify" ).matcher statement( "value we 'expect' to see" )
- matcher statement - designates 'how' we want to inspect the subject -> eg. toContain
- every 'it' statement can contain 1 to as many as we want # of expect statements
- normally there are only 1 or 2 expect statements inside an if statement

### BEST PRACTICE - Do not try to access the inner workings in another component from a test from another component

## ENZYME

- an extra library that has more explicit matcher statements
- setupTests.js -> Jest automatically looks for this file
- if jest finds setupTests.js it runs it first
- this is where we reference and setup Enzyme and Adapter
- I do not have to import this file anywhere because Jest looks for it first
- Enzyme has 3 main libraries or functions that we can pass a component to

      1) Static renderer -  renders the given component and return plain HTML
      2) Shallow renderer - function - renders **just** the given component and none of its React Dom Component children - It **will** render vanilla DOM elements - HTML
      3) Full DOM renderer - Renders an instance of the full component and **all** of it's children + let's us modify it afterwards - can simulate click events or any other DOM interactivity
