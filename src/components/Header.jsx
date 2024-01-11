import React from 'react'
import { Link } from 'react-router-dom';
import bannerImg from '../images/restauranfood.jpg'

const Header = () => {
  return (
     <header className='header'>
        <section>
            <div>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam sed, earum, commodi animi suscipit cumque corporis qui eveniet nihil fugiat deleniti odio reiciendis modi ipsa sunt perspiciatis laudantium perferendis inventore.</p>
                <Link to= "/booking"><button aria-label='On Click'>Reserve Table</button></Link>

            </div>

            <div className='banner-img'>
                <img src={bannerImg} alt='/' />
            </div>
        </section>

     </header>
  )
}

export default Header