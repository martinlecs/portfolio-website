export const addProject = (project) => {
  // the below params get passed in from top-level function
  return (dispatch, getState) => {
    // make async call to database
    dispatch({type: 'ADD_PROJECT', project})
  }
}