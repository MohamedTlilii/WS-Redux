 const counterReducer = (counter = 0, action) => {
  if (action.type === 'INCREASE') {
    return (counter = counter +1)
  }else if (action.type === 'DECREASE' && counter > 0){
    return (counter = counter -1)
  }else {
  return counter;
}
};

export default counterReducer;
