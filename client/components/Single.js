import React from 'react'
import Comments from '../components/Comments';
import Photo from '../components/Photo';

class Single extends React.Component {
  
  render(){

  const { id } = this.props.params;
  const i = this.props.posts.findIndex((post) => post.code === id );
  const post = this.props.posts[i]
  const postComments = this.props.comments[id] || [];
  return (
    <div className="single-photo">
      <Photo index={i} post={post}  {...this.props}/>
      <Comments postComments={postComments}  {...this.props}/>
    </div> 
  )
}
}

export default Single