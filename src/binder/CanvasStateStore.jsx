import React, {useReducer} from "react";

const actions = {
    SET_CANVAS: "SET_CANVAS",
    SET_MOUSE_POS: "SET_MOUSE_POSITION",
    SET_BG_COLOR: "SET_BG_COLOR",
}

const initState = {
    Canvas:{
        canvas: null,
        mousePos: {
            x: 0,
            y: 0,
        },
        bgColor: "white",
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
        case actions.SET_BG_COLOR:
            return {
                Canvas: {
                    ...state.Canvas,
                    bgColor: action.payload,
                }
            }
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
        setLightMode:(color)=>{
            dispatch({type: actions.SET_BG_COLOR, payload: color})
        },
        setDarkMode:(color)=>{
            dispatch({type: actions.SET_BG_COLOR, payload: color})
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