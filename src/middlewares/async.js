// old syntax
// export default function({ dispatch }) {
//   return function(next) {
//     return function(action) {

//     }
//   }
// }

// new fat arrow syntax is same as above
export default ({ dispatch }) => next => action => {
  // Check to see if the action has a promise on its payload property
  // If it does wait for it to resolve
  // If it doesn't send the action on to the next middleWare
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  // If there is a promise -> Wait for the promise to resolve
  // Get is data and then create a new action with the data and dispatch it again
  action.payload.then(function(response) {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};
