import React from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faSkype} from '@fortawesome/free-brands-svg-icons'

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Oskar Zieliński</h2>
            <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" alt="avatar" style={{height: '250px'}}/>
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Feel free to contact me!</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

              <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <FontAwesomeIcon className="contact-icons" icon={faPhone}></FontAwesomeIcon>
                    +48 734 427 832
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <FontAwesomeIcon className="contact-icons" icon={faEnvelope}></FontAwesomeIcon>
                    OskarZielin@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <FontAwesomeIcon className="contact-icons" icon={faSkype}></FontAwesomeIcon>
                    <a href="skype:live:.cid.3368b3f9aa27a75d?userinfo">Oskar Z</a>
                  </ListItemContent>
                </ListItem>
              </List>
              </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
