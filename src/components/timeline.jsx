import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  {/* <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="fas fa-pen" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="#">Internship at 99xTechnologies</a> <span>2019-present</span></h2>
                        <p>I recently have joined the Juniper Networs as a Software Developer-Intern in the DevOps team. My major part of the work has been into the field of creating sustainable and flexible CI/CD (Continuous Integration & Continuous Development) pipelines which enables developers at Juniper to do rapid development. I am also exploring the role of container technology like Docker and container-orchrastation technologies like K8s, Swarm to create industry standard production environments.</p>
                      </div>
                    </div>
                  </article> */}
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                      <i className="fas fa-pen" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="#">Undergraduate at University Of Moratuwa</a> <span>2015-Present</span></h2>
                        <p>I am pursuing my under-graduation studies in Unversity of Moratuwa Faculty of Information Technology. we have lots of modules like DSA, OOPs, Computer Networks, IOT, Web-Database , Management over the years and have better understanding of these subjects with 3.7+ GPA .</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                      <i className="fas fa-pen" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="#">Secondary and Higher Education</a> <span>2006-2015</span></h2>
                        <p>The best years , was a hosteler for 6 years scored 8A's 1B without classes , played football as a sport and all other sports becouse i had(still have) lot of friends as hosteler and we had lot of time , then straight to boading house score 3B's in A/L </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                      <i className="fas fa-pen" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="#">Primary Education</a> <span>2001-205</span></h2>
                        <p>You know , kids lol . But i manged to pass grade 5 scholorship as 9th in district :) got schol to Ananda Collage , lucky enough .. </p> 
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
