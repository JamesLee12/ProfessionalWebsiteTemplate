import React, {Component } from 'react';
export default class Footer extends Component {
  render(){
    let resumeData = this.props.resumeData;
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <div className="social-links">
              {
                resumeData.socialLinks && resumeData.socialLinks.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href={item.url}>
                        <i className={item.className}/>
                      </a>
                    </li>
                  )
                })
              }
            </div>
          </div>
          <div><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>
    );
  }
}
