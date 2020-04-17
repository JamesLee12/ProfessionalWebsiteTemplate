import React, { Component } from "react";
export default class About extends Component{
  render(){
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/p960x960/79351164_10214120779843741_7615390376345468928_o.jpg?_nc_cat=109&_nc_sid=8024bb&_nc_oc=AQmS-FHPgmhq7dF34Q7PdNJzJSnGu-OmBOpL6Wy2DQwNdIgPLT_EZMGVo6-SF3yFZFFJ9o_6FSPiY2RnSZtZ5MBC&_nc_ht=scontent-sjc3-1.xx&_nc_tp=6&oh=51affb9b267cd87991f24631dfd804a9&oe=5EBC24A5" alt=""/>
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
              {
                resumeData.aboutme
              }
            </p>
            <ul id="nav" className="nav">
                <li><a href={resumeData.resumeURL} target="_blank">Download Resume</a>   </li>
                <li><a href="#contact">Contact</a></li>
          </ul>


            {/* <div className="row">
              <div className="c"lumns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span>
                  <br/>
                  <br/>
                  <span>{resumeData.address}</span>
                  <br/>
                  <br/>
                  <span>{resumeData.website}</span>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}
