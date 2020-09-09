import React from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Expernience from './experience';
import Technologies from './technologies';

class Resume extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img src="https://www.shareicon.net/data/512x512/2015/10/04/112033_user_512x512.png" alt="avatar" style={{height: '200px'}} />
            </div>
            <h2 style={{paddingTop: '2em'}}>Oskar Zieliński</h2>
            <h4 style={{color: 'grey'}}>Web developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Walking along the Web-dev path</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Location</h5>
            <p>Poznań, Poland</p>
            <h5>Phone</h5>
            <p>+48 734 427 832</p>
            <h5>E-mail</h5>
            <p>Oskarzielin@gmail.com</p>
            <h5>Web</h5>
            <p>Mywebsite</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2017} endYear={2021} schoolName='Wyższa Szkoła Bankowa' schoolDescription='Information Technology Engineer'
              />
            <hr style={{borderTop: '3px solid #e22947'}} />

            <h2>Expernience</h2>
            <Expernience
              startYear={2015} endYear={2015} jobName='' jobDescription=''
              />
            <Expernience
              startYear={2014} endYear={2015} jobName='' jobDescription=''
              />
            <Expernience
              startYear={2009} endYear={2010} jobName='' jobDescription=''
              />
            <hr style={{borderTop: '3px solid #e22947'}} />
            <h2>Technologies</h2>
            <Technologies />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
