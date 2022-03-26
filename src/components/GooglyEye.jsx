import './GooglyEye.css';

function GooglyEye({eyeX, eyeY}){

    console.log(eyeX+" "+eyeY);
    return (
        <div className="Eye-ball" >
          <div className="Irs" style= {{ left: eyeX, top: eyeY }}>
          </div>
        </div>
    );
}

export default GooglyEye;
