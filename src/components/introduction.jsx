import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/img_bg.jpg)'}} arial-lable={'Nirmal Aththanayaka'} role="img" >
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1 style={{ color: "#fff"}}>Hi! <br />I'm Nirmal</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://drive.google.com/open?id=1-QzedPWKALWP8YNGfJr0DpIY28tEdxSh" target=" ">View My CV<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/img_bg.jpg)'}} arial-lable={'Nirmal Aththanayaka'} role="img" >
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 style={{ color: "#fff"}}>I love to explore <br /> New Tech!</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://github.com/nir099" target=" ">View My Projects <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/img_bg.jpg)'}} arial-lable={'Nirmal Aththanayaka'} role="img" >
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                        <h1 style={{ color: "#fff"}}><br /> Seeker! <i style= {{color: "Dodgerblue"}} className="fas fa-headphones-alt fa-lg"></i></h1>
                          <p><a className="btn btn-primary btn-learn" href="https://medium.com/@nirmalaththanayaka" target=" ">I offen read in medium <i className="icon-book" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
