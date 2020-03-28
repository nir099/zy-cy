/* eslint-disable jsx-a11y/anchor-is-valid */
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
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="fas fa-pen" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="#">Internship at 99x Technologies</a> <span>2019-Aug to 2020-May</span></h2>
                        <p>I joined 99x Technologies as an intern. During my Internship period I worked as a full stack developer and got the opportunity for polish my skills and learn new technologies. I got improved in ReactJs, Angular 8, AWS-DynamoDb, AWS-Lambda, AWS-S3, AWS-ClouldFront, Serverless, NodeJS-Typescript, MySql, TypeORM, Travis, Circle CI and many more best known technologies
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                      <i className="fas fa-pen" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="#">Undergraduate at University Of Moratuwa</a> <span>2016-Present</span></h2>
                        <p>I am pursuing my under-graduation studies in Unversity of Moratuwa Faculty of Information Technology. we have lots of modules like DSA, OOPs, Computer Networks, IOT, Web-Database , Management over the years and have better understanding of these subjects with 3+ GPA .</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                      <i className="fas fa-pen" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="#">Secondary and Higher Education - Ananda College</a> <span>2006-2015</span></h2>
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
                        <p>I manged to pass grade 5 scholorship as 9th in district.</p> 
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
