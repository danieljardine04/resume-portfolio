import React from 'react'


function Body(props){
  const { currentCategory } = props; 

  return (
    <section>      
       <currentCategory.code></currentCategory.code>
    </section>
  )
}

export default Body;