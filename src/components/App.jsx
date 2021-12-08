import React from "react";
import CursorTracker from "./CursorTracker";
import GooglyEye from "./GooglyEye"
import Drawing from "./Drawing";
import Title from "./Title";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Title />
                <Drawing />   
                <CursorTracker
                    render=
                    {(mouse) => (   //<= {return()}
                        <>                           
                            <GooglyEye mouse={mouse} />
                        </>
                    )
                    }
                />                
            </div>
        );
    }
}

export default App;