import React from 'react';
import './GooglyEye.css';

class GooglyEye extends React.Component {

  render() {
    return (
        <div className="Eye-ball" >
          <div className="Irs"
            style=
            {{
              left: this.props.mouse.eyeX,
              top: this.props.mouse.eyeY
            }}>
          </div>
        </div>
    );
  };
}

export default GooglyEye;
