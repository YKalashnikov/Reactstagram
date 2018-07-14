import React from 'react'
import { Link } from 'react-router'


const Main = () => ({
  render(){
  return (
    <div> 
        <h1 className="text">
          <Link to="/">Reactstagram</Link>
        </h1>
      {React.cloneElement(this.props.children, this.props)}

      </div>
  )
}
})
export default Main
// { React.cloneElement(this.props.children, this.props) }
