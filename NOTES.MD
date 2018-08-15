# create-react-app

## Stuff we get on install:

1. React - the React Library
2. Webpack - Links together js files
3. Babel - compiles ES6/7/8 etc. and JSX into ES5 code
4. Jest - Automated test runner
5. JSDOM - javascript code implementation (Libray) which simulates a browser in the command line to run tests - it will create fake HTML elements inside the terminal to be tested by Jest

## .env

- **.env** file with alteration to change file path for all imports to absolute rather than relative
- absolute path is based from the src file
- relative path is based from the file I am currently
- **SETTINGS** 1) create .env fille in root directory 2) add: NODE_PATH=src/

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

## beforeEach

- Jest provides this helper method to setup common test logic with a single file

## Simulating events in the JSDOM

- when writing a test that tests any kind state change within the DOM:

1. Find the element
2. Simulate the change event
3. Provide a fake event object
4. Force the component to update
5. Assert that the element's value has changed

## describe()

- Jest function that allows which creates code block for grouping together tests that have common set up or teardown
- can limit the scope of beforeEach afterEach statements

## Redux

### reducers

- index.js houses the combine reducers call - which takes all reducers and combines them together into a single object

## Unit tests

- isolate a tiny part of the application and test it's functionality
- touches very few parts of the app in a single test

## Integration tests

- Simultaneously test many different parts at once
- touches many parts of the app with a single test

## Higher Order Components

- A React Component specifically made to help us reuse code within an application
- Then combine them together with normal components
- Normal component + Higher Order Component = Enhanced (Composed) Component
- eg. the connect component from the redux library - adds functionality to a regular component when imported
- Create higher order component files with a lowercase start. (Uppercase start is, by convention, held for Class components )

## Enhanced (Composed) Component

- Has additional functionality donated to it by the Higher Order Component

## BrowserRouter

- Wrap the app component in BrowserRouter
- it tells React Router what information to show on screen based on the url the user is currently looking at

## Higher order Component for this APP

- GOAL - to restrict use to the post route if the user is not signed in
- If the user tries to access the post route they will automatically do redirected to the home route

## Steps for creating a Higher Order Component

1. Write the logic I want to reuse in the regular Component
2. Create a HOC file and add the HOC scaffold
3. Move the reusable logic into the HOC file
4. pass props / config behavior through to child Component

## React Router library

- anytime a component is rendered by the React router Library we get access to the this.props.history object
- this.props.history lets us programmatically navigate through the App with .push()
- then I add the route I want to navigate to in the .push() method -> eg. this.props.history.push('/comments')
