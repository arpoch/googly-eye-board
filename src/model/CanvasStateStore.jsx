import React, {useReducer} from "react";

const actions = {
    SET_CANVAS: "SET_CANVAS",
    SET_MOUSE_POS: "SET_MOUSE_POSITON",
}

const initState = {
    Canvas:{
        canvas: null,
        mousePos: {
            x: 0,
            y: 0,
        }
    }
}

function reducer(state,action){
    switch (action.type){
        case actions.SET_CANVAS:
            if(state.Canvas.canvas!==action.payload){
                return {
                    Canvas: {
                        canvas: action.payload,
                    }
                };
            }
            break;
        default:
            return state;
    }
}

const CanvasContext = React.createContext();

function CanvasStateStore({children}){
    const [state,dispatch] = useReducer(reducer,initState);
    const value={
        states:state,
        setCanvas:(canvas)=>{
            dispatch({type: actions.SET_CANVAS, payload: canvas});
        },
    };

    return (
      <CanvasContext.Provider value={value}>
          {children}
      </CanvasContext.Provider>
    );
}

export default CanvasStateStore;
export {CanvasContext};