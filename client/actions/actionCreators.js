

export const increment = (index) => {
  //console.log('using increment', index)
  return {
    type: 'INCREMENT_LIKES',
    index
  };
}

/*
  Comments
*/

export const addComment = (id, author, comment) => {
  return {
    type: 'ADD_COMMENT',
    id,
    author,
    comment,
  };
}

export const removeComment = (id, i) => {
  return {
    type: 'REMOVE_COMMENT',
     id,
      i
  };
}
