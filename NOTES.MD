# create-react-app

## Stuff we get on install:

1. React - the React Library
2. Webpack - Links together js files
3. Babel - compiles ES6/7/8 etc. and JSX into ES5 code
4. Jest - Automated test runner

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
