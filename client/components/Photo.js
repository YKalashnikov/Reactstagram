import React from 'react'
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Photo = () => ({
 
  render(){
    const { post, comments, index } = this.props;
  return (
    <div>
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
        <Link to={`/view/${post.code}`}>
        <img src={post.display_src} alt={post.caption} className="grid-photo"></img>
        </Link>

        <CSSTransitionGroup transitionName="like"
        transitionEnterTimeout={500}
        transitionEnterTimeout={500}>
        <span key={post.likes} className="likes-heart">
        {post.likes}</span>
        </CSSTransitionGroup>
        </div>
        <figcaption>
          <p className="caption">{post.caption}</p>
          <div className="control-buttons">
          <button onClick={this.props.increment.bind(null, index)} className="likes">&hearts;{post.likes}</button>

          <Link to={`/view/${post.code}`}  className="button">
           <span className="comment-count">
            <span className="speech-bubble"></span> <span/>
          {comments[post.code] ? comments[post.code].length : 0}
          </span>
          </Link>
          </div>
        </figcaption>
      </figure>
      
    </div>
  )
}
})


export default Photo