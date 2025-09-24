import './globals.css'
import './homepage.scss'
import './banner.scss'
import Image from "next/image";
import { FaLinkedinIn, FaSquareFacebook, FaSquareGithub } from 'react-icons/fa6'

export default function Homepage() {
  return (
    <main className="homepage">
      {/* Navigation */}
      <nav className="navbar">
       <a href="/" className="navbar__logo">
  <img src="./assets/images/logo-light.svg" alt="ReyDev Logo" className="logo-light" />
  <img src="./assets/images/logo-dark.svg" alt="ReyDev Logo" className="logo-dark" />
</a>


        <ul className="navbar__menu">
          <li className="navbar__item"><a href="#home" className="navbar__link">Home</a></li>
          <li className="navbar__item"><a href="#projects" className="navbar__link">Projects</a></li>
          <li className="navbar__item"><a href="#contact" className="navbar__link">Contact</a></li>
        </ul>
      </nav>

      {/* Banner */}
      <section className="banner">
        <div className="banner__info">
          <div className="banner__details">
            <p className="banner__intro">Hi I&apos;m</p>
            <h1 className="banner__title">Rey Dante G. Garcia</h1>
            <p className="banner__desc">
              An IT enthusiast that aspires to immerse in the ins and outs of front-end development.
              Creating compelling websites using creative visuals and handy tools that surpass expectations.
            </p>
          </div>

          <div className="banner__socials">
            <a><FaSquareFacebook/></a>
            <a><FaSquareGithub/></a>
            <a><FaLinkedinIn/></a>
          </div>
          
          <div className="banner__buttons">
            <button className="btn btn--primary">View Project</button>
            <button className="btn btn--secondary">Message Me</button>
          </div>
        </div>

        <div className="banner__image">
            <Image
            src="/assets/images/profile.jpg"
            alt="Profile of Rey Dante G. Garcia"
            width={280}
            height={280}
            className="profile-image"
            priority/>
        </div>
      </section>
    </main>
  )
}
