import React, {useReducer} from "react";

const actions = {
    SET_CANVAS: "SET_CANVAS",
    SET_ELEMENT: "SET_ELEMENT",
}

const initState = {
    Canvas:{
        canvas: null,
        dElement: null,
    }
}

function reducer(state,action){
    switch (action.type){
        case actions.SET_CANVAS:
            if(state.canvas!==action.payload){
                return {
                    Canvas: {
                        ...state,
                        canvas: action.payload,
                    }
                };
            }
            break;
        case actions.SET_ELEMENT:
            if(state.dElement!==action.payload){
                return {
                    ...state,
                    dElement: action.payload,
                }
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
        setDOMElement:(domElement)=>{
            dispatch({type: actions.SET_ELEMENT, payload: domElement});
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