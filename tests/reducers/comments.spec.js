import expect from 'expect';
import commentsReducer from '../../client/reducers/comments';
import defaultComments from '../../client/data/comments';

describe('Coments Reducer', function () {
  
  describe('Adding a comment', ()=>{

    const author = 'Wes Bos';
    const comment = 'Cool!';
    const expected = {user: author, text: comment};
    
    /* add duplicate function into a handy function since only id changes */  
    function addComment(id) {
      const action = { type: 'ADD_COMMENT', author, comment,  };
      const allComments = commentsReducer(defaultComments, action);
      return allComments[id];
    }

    it('should be able to add a new comment to an existing post',()=>{
      const postComments = addComment('BAhvZrRwcfu');
      expect(postComments[postComments.length - 1]).toEqual(expected);
    });

    it('should be able to add a new comment to a new post',()=>{
      const postComments = addComment('123-i-dont-exist');
      expect(postComments[postComments.length - 1]).toEqual(expected);
    });

    it('should add increase the length of the array by 1',()=>{
      const postComments = addComment('BAPIPRjQce9');
      expect(postComments.length).toEqual(defaultComments['BAPIPRjQce9'].length + 1);
    });

  }); 

  describe('Removing a comment', function() {
    var comment1, comment2, commentState, updatedCommentsState, ididid;

    before(()=> {
      ididid = 'BAcyDyQwcXX'
      var action = { type: 'REMOVE_COMMENT', i: 0, ididid }; 
      comment1 = { text: 'Great looking sandwich!', user: 'wesbos' };
      comment2 = { text: 'That dog though!', user: 'kaitbos' };
      commentState = { [ididid] : [ comment1, comment2 ] };
      updatedCommentsState = commentsReducer(commentState, action);
    });
    
    it('should remove a comment',()=> {
      expect(updatedCommentsState[idid]).toExclude(comment1);
    });
    
    it('should decrease the length of the array by 1', ()=> {
      expect(updatedCommentsState[idid].length).toEqual(commentState[idid].length - 1);
    });

  })



})
