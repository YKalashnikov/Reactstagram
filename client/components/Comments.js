import React from 'react'

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.Comments = this.Comments.bind(this)
  }


     //maping comments 
      Comments(comment, i){
        return (
          <div className = "comment"  key={i}>
           <p>
             <strong>{comment.user}</strong>
             {comment.text}

              <button className='remove-comment'
              onClick={this.props.removeComment.bind(null,
              this.props.params.id, i)}> 
              &times;</button>
         
          </p>
          </div>
        )
       
     }
     handleSubmit(e){
      e.preventDefault();
    const { id } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    console.log(id, author, comment )
    this.props.addComment(id, comment, author)
    this.refs.commentForm.reset();

     }

  render(){
  return (
    <div className="comments" >
      {this.props.postComments.map(this.Comments)}
       <form
         ref="commentForm" onSubmit={this.handleSubmit}  className="comment-form">
        <input type="text" ref="author" placeholder="author"/>
        <input type="text" ref="comment" placeholder="comment"/>
        <input type="submit" hidden/>
      </form>
    </div>
  )
}
}

export default Comments;