import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="container">
            <h2>Booking.com</h2>
            <div className="nav-items">
              <span>PLN</span>
              <img src="" alt="" />
              <span> ? </span>
              <button className='list-property'>List your Property</button>
              <button className='btn'>Register</button>
              <button  className='btn'>Sign in</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar