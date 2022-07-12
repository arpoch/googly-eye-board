import React, {useReducer} from "react";

const actions={
    LINE_WIDTH:"LINE_WIDTH",
    COLOR:"COLOR",
    ERASER_COLOR: "ERASER_COLOR",
}

const initState={
    PenProps:{
        lineWidth: 2,
        color: "",
        cap: "round",
    },
    EraserProps:{
      color: "",
      radius: 10,
    },
}

function reducer(state,action){
    switch (action.type){
        case actions.LINE_WIDTH:
            return {
                ...state,
                PenProps: {
                    ...state.PenProps,
                    lineWidth: action.payload,
                }
            };
        case actions.COLOR:
            return {
                ...state,
                PenProps: {
                    ...state.PenProps,
                    color: action.payload,
                }
            };
        case actions.ERASER_COLOR:
            return {
                ...state,
                EraserProps:{
                    ...state.EraserProps,
                    color: action.payload,
                }
            }

        default:
            return state;
    }
}

const PropsContext = React.createContext();

function PropertiesStateStore({children}){
    const [state,dispatch] = useReducer(reducer,initState);
    const value={
        states:state,
        handleLineWidth:(value)=>{
          dispatch({type: actions.LINE_WIDTH, payload: value});
        },
        handleLineColor: (value)=>{
            dispatch({type: actions.COLOR, payload: value});
        },
        handleEraserColor:(value)=>{
            dispatch({type: actions.ERASER_COLOR, payload: value});
        }
    }
    return(
        <PropsContext.Provider value={value}>
            {children}
        </PropsContext.Provider>
    )
}

export default PropertiesStateStore;
export {PropsContext};