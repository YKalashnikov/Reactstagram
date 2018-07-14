const postComments = (state = [], action) => {
  console.log('post', state)
  switch(action.type){
    case 'ADD_COMMENT' :
      return [...state, {
        user: action.author,
        text: action.comment
      }];
      case 'REMOVE_COMMENT' :
      console.log('new',...state.slice(0, action.i))
      console.log('plus one',...state.slice(action.i + 1))
       return [
         ...state.slice(0, action.i),
         ...state.slice(action.i + 1)
       ]
      return state
    
    }
  return state
}


const comments = (state = [], action) => {
   if(typeof action.id !== 'undefined') {
     return {
       ...state,
     [action.id] : postComments(state[action.id], action) 
     }
   }
  return state

}

export default comments;
