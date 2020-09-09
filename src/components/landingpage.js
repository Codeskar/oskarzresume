import React from 'react';
import {Grid, Cell} from 'react-mdl';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

class Landing extends React.Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=Black&eyeType=Happy&eyebrowType=Default&mouthType=Default&skinColor=Light'
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Full Stack Web dev</h1>
              <hr/>

              <p>HTML/CSS | JavaScripts | React | NodeJs | Express | MongoDB</p>

              <div className="social-links">

                {/*LinkedIn*/}
                <a href="https://www.linkedin.com/in/oskar-zieli%C5%84ski-966262179/" target="_blank">
                  <FontAwesomeIcon className="socIcon" icon={faLinkedin} />
                </a>

                {/*Github*/}
                <a href="https://github.com/Oskarinio" target="_blank">
                  <FontAwesomeIcon className="socIcon" icon={faGithub} />
                </a>


              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
