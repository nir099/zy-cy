import React, { Component } from 'react'

export default class education extends Component {
  render() {
    return (
      <div>
      <section className="colorlib-education" data-section="education">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span className="heading-meta">Education</span>
							<h2 className="colorlib-heading animate-box">Education</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
							<div className="fancy-collapse-panel">
								<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

									<div className="panel panel-default">
									    <div className="panel-heading" role="tab" id="headingFour">
									        <h4 className="panel-title">
									            <a  data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="true" aria-controls="collapseFour">BSc in Information Technology
									            </a>
									        </h4>
									    </div>
									    <div id="collapseFour" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingFour">
									        <div className="panel-body">
									            <p> <strong></strong></p>	
									        </div>
									    </div>
									</div>

									<div className="panel panel-default">
									    <div className="panel-heading" role="tab" id="headingFive">
									        <h4 className="panel-title">
									            <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">High School Secondary Education
									            </a>
									        </h4>
									    </div>
									    <div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
									        <div className="panel-body">
									            <p><strong></strong>.</p>	
									        </div>
									    </div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
      </div>
    )
  }
}

