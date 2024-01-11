import React from 'react'
import logo from '../images/Logo .svg'

const Footer = () => {
  return (
    <footer>
        <section>
            <div className='company-info'>
                <img src ={logo} alt='/'/>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ullam aliquam, odio quos atque possimus et consequuntur cumque eius eos minus. At ad aperiam officia sed hic sapiente ut eum.</p>

            </div>

            <div>
                <h3>Important Links</h3>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Menu</a></li>
                    <li><a href='/'>Reservations</a></li>
                    <li><a href='/'>Order Online</a></li>
                    <li><a href='/'>Login</a></li>

                </ul>
            </div>

            <div>
                <h3>Contact</h3>
                <ul>
                    <li>Address: <br /> 123 Towncity, USA</li>
                    <li>Phone: <br /> ++ 00 1234567891</li>
                    <li>Email: <br /> little@lemon.com</li>
                </ul>
            </div>

            <div>
                <h3>Social Meida</h3>
                <ul>
                    <li><a href='/'>Facebook</a></li>
                    <li><a href='/'>Instagram</a></li>
                    <li><a href='/'>X</a></li>
                    <li><a href='/'>Trip Advisor</a></li>

                </ul>
            </div>
        </section>

    </footer>
  )
}

export default Footer