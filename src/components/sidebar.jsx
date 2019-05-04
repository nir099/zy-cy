/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></a>
          <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.png)'}} />
              <h3 id="colorlib-logo"><a href="index.html">Nirmal Aththanayaka</a></h3>
              <h5>Web Developer and a Seeker !</h5>
              <span className="email"> <i className="fas fa-envelope"></i>   a.m.s.nirmal.a@gmail.com</span>
              <span className="number"><i className="fas fa-mobile"></i>   +94 71-700-5071</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#" data-nav-section="home">Introduction</a></li>
                  <li><a href="#" data-nav-section="about">About</a></li>
                  <li><a href="#" data-nav-section="timeline">Timeline</a></li>
                  <li><a href="#" data-nav-section="skills">Skills</a></li>
                  {/* <li><a href="#" data-nav-section="education">Education</a></li> */}
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a style= {{color: "Dodgerblue"}} href="https://www.facebook.com/nirmal.aththanayaka" target=" "><i className="fab fa-facebook-square fa-lg"></i></a></li>
                <li><a style= {{color: "green"}} href="https://www.instagram.com/99nir99/" target=" "><i className="fab fa-instagram fa-lg"></i></a></li>
                <li><a style= {{color: "rgba(68, 19, 255, 0.7)"}} href="https://www.linkedin.com/in/nirmal-aththanayaka-93b13911a/" target=" "><i className="fab fa-linkedin fa-lg"></i></a></li>
                <li><a href="https://github.com/nir099" target=" "><i className="fab fa-github fa-lg"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Made with <i style= {{color: "red"}} className="fas fa-heart" aria-hidden="true" /> and <i style= {{color: "orange"}} className="fas fa-beer" aria-hidden="true"></i> + <i style= {{color: "Dodgerblue"}} className="fas fa-headphones-alt"></i><br></br> 
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
