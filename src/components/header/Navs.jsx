import React from 'react'
import { Link } from 'react-router-dom'
function Navs() {
  return (
    <>
        <div class="contact-info bg-body-tertiary">
            <p>+0987654321 | +1234567890 </p>
            <p><a href="mailto:">contact@domainname.com</a></p>
        </div>
        <nav class="navbar navbar-expand-md bg-body-tertiary">
            <div class="container-xl">
                <a class="navbar-brand" href="#">
                <img src="https://codingyaar.com/wp-content/uploads/coding-yaar-logo.png" alt=""/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                       <Link class="nav-link active" aria-current="page" to='/'>Home</Link>
                       <Link className='nav-link' to="Blog">Blog</Link>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Cars Buy/Sell
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                            <hr class="dropdown-divider"/>
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                        <Link className='nav-link' to="Contact">Offers</Link>
                        <Link className='nav-link' to="About">About Us</Link>
                        <Link className='nav-link' to="Contact">Contact Us</Link>
                    </ul>
                    <div class="search-and-icons d-flex justify-content-end">
                        <div class="user-icons d-flex ">
                            <div class="profile"><Link to="Login"><i class="bi bi-person-fill"></i></Link></div>
                            <div class="wishlist"><i class="bi bi-heart-fill " ></i></div>
                            <div class="cart"><i class="bi bi-cart-fill"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navs