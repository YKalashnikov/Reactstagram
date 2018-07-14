import React from 'react'
import Photo from '../components/Photo';

const PhotGrid = () => ({
  render(){
  return (
    <div className="photo-grid">
   {this.props.posts.map((post,index)=> <Photo {...this.props} key={index} index={index} post={post}/>)}
    </div>
  )
}
})

export default PhotGrid