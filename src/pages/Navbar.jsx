import React from 'react'

const Navbar = () => {
  return (
    <>
      <header className='sticky top-0 z-50 border-b back'>
        <div className='container nav-inner'>
          <a href="#home" className='brand' aria-label='Go to home'>
          {/* <span class="brand-badge" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/>
            </svg>
          </span> */}
          <span>CE</span>
          </a>
          <nav aria-label='Primary'>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#project">Project</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar
