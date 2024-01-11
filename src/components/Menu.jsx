import React from 'react'
import recipes from '../recipes'

const Menu = () => {
  return (
    <div className='menu-container'>
        <div>
            <h2>This weeks Specials!</h2>
            <button>Order Menu</button>
        </div>

        <div className='cards'>
            {
                recipes.map(recipe => <div key = {recipes.id} className='menu-items'>
                   <img src={recipe.image} alt='/'/>

                   <div className='menu-content'>
                    <div className='heading'>
                    <h1>{recipe.title}</h1>
                    <p>{recipe.price}</p>
                   </div>
                   <p>{recipe.description}</p>
                   <button className='orderBtn'>Order Now</button>
                   </div>

         </div>)
            }
        </div>

    </div>
  )
}

export default Menu