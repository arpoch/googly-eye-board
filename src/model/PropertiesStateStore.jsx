import React, {useReducer} from "react";

const actions={
    LINE_WIDTH:"LINE_WIDTH",
    COLOR:"COLOR",
}

const initState={
    PenProps:{
        lineWidth: 2,
        color: "black",
        cap: "round",
    },
    EraserProps:{
      color: "white",
      radius: 5,
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
    }
    return(
        <PropsContext.Provider value={value}>
            {children}
        </PropsContext.Provider>
    )
}

export default PropertiesStateStore;
export {PropsContext};