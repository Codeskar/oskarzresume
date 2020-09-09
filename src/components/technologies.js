import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHtml5, faCss3Alt, faJs, faNode} from '@fortawesome/free-brands-svg-icons';

class Technologies extends React.Component {
  render() {
    return (
      <div className="technologies" style={{display: 'flex'}}>
        <FontAwesomeIcon className="tech-icon" icon={faHtml5} />
        <FontAwesomeIcon className="tech-icon" icon={faCss3Alt} />
        <FontAwesomeIcon className="tech-icon" icon={faJs} />
        <FontAwesomeIcon className="tech-icon" icon={faNode} />
      </div>
    )
  }
}

export default Technologies;
