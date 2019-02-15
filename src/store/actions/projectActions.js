export const addProject = project => {
  return (dispatch, getState, { getFirestore, getFirebase}) => {
    // make async call to database
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "ADD_PROJECT", project });
      })
      .catch(err => {
        dispatch({ type: "ADD_PROJECT_ERROR", err });
      });
    dispatch({ type: "ADD_PROJECT", project });
  };
};
