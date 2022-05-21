import React, {useReducer} from "react";

const actions = {
    GET_CANVAS: "CANVAS",
}

const initState = {
    Canvas:{
        canvas: null,
    }
}

function reducer(state,action){
    switch (action.type){
        case actions.GET_CANVAS:
            if(state.Canvas.canvas!=null){
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
        state,
        getCanvas:(canvas)=>{
            dispatch({type: actions.GET_CANVAS, payload: canvas});
        }
    };

    return (
      <CanvasContext.Provider value={value}>
          {children}
      </CanvasContext.Provider>
    );
}

export default CanvasStateStore;
export {CanvasContext};