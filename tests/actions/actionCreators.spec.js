import expect from 'expect';
import { increment, addComment, removeComment } from '../../client/actions/actionCreators.js';

describe('Action Creators', () => {

  describe('increment',()=> {

    it('should create an action to increment likes', () => {
      const expected = {
        type: 'INCREMENT_LIKES',
        index: 5
      };
      const actual = increment(5);
      expect(actual).toEqual(expected);
    });

  });

  describe('addComment',()=> {

    it('should create an action to add a comment', () => {
      const id = 'BAcJeJrQca9';
      const author = 'Yurii';
      const comment = 'This sure is a neat picture';

      const expected = {
        type: 'ADD_COMMENT',
        id,
        author,
        comment
      };

      const actual = addComment(id, author, comment);
      expect(actual).toEqual(expected);
    });

  });

  describe('removeComment',()=> {

    it('should create an action to remove a comment', () => {
      const expected = {
        type: 'REMOVE_COMMENT',
        id: 'BAcyDyQwcXX',
        i: 3
      };

      const actual = removeComment('BAcyDyQwcXX', 3);
      expect(actual).toEqual(expected);
    });

  });


})
