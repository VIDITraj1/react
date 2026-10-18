import React from 'react'

const Card = (prop) => {

    console.log(prop)

  return (

                
            
                <div className="card">
                    <img src={prop.image} alt="prof1" />
                    <h1>{prop.user}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, cum!</p>
                    <button className='btn'>View Profile</button>
                </div>
            
            

  )
}

export default Card
