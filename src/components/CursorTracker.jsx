import React from "react";

class MouseTracker extends React.Component{
  constructor(props){
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.getX = this.getX.bind(this);
    this.getY = this.getY.bind(this);

    this.state = { x: 0, y:0, eyeX: 0, eyeY: 0};
  }

  componentDidMount(){
    window.addEventListener("mousemove",e => this.handleMouseMove(e));
  }

  componentWillUnmount(){
    window.removeEventListener("mousemove",this.handleMouseMove);
  }

  handleMouseMove(e){
    this.setState({ 
      x: e.clientX,
      y: e.clientY
    });
    this.setState({ 
      eyeX: this.getX(),
      eyeY: this.getY()
    });
  }

  getX() {
    if ((this.state.x * 100 / window.innerWidth) < 20) {
      return 20 + "%";
    } else if ((this.state.x * 100 / window.innerWidth) > 80) {
      return 80 + "%";
    } else 
    {
      return (this.state.x) * 100 / window.innerWidth + '%';
    }
  }

  getY() {
    if ((this.state.y * 100 / window.innerHeight) < 20) {
      return 20 + "%";
    } else if ((this.state.y * 100 / window.innerHeight) > 80) {
      return 80 + "%";
    } else 
    {
      return this.state.y * 100 / window.innerHeight + '%';
    }
  }

  render(){
    return (
      <>
        {this.props.render(this.state)}
      </>
      );
  }
}

  export default MouseTracker;