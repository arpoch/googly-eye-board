import React, {useReducer} from "react";

const actions = {
    COUNT: "COUNT",
    CLICKED: "CLICKED",
    MOUSE_POSITION: "MOUSE_POSITION",
}

const initState = {
    GoogleEyeCount:{
        c:0,
    },
    IsClicked:{
        click:false,
    },
    MousePosition:{
        x:0,
        y:0,
    }
}

function reducer(state,action){
    switch (action.type){
        case actions.MOUSE_POSITION:
            return {
                ...state,
                MousePosition: {
                    x: action.payload.x,
                    y: action.payload.y,
                }
            };
        case actions.CLICKED:
            return {
                ...state,
                GoogleEyeCount:{
                    c:state.GoogleEyeCount.c+1,
                },
                IsClicked: {
                    click: !state.IsClicked.click,
                }
            }
        default:
            return state;
    }
}

const GoogleEyeContext = React.createContext();

function GooglyEyeStateStore({children}) {
    const [state,dispatch] = useReducer(reducer,initState);
    const value = {
        states:state,
        handleIconClick:()=>{
            dispatch({type: actions.CLICKED})
        },
        handleMousePosition:(e)=>{
            dispatch({type: actions.MOUSE_POSITION, payload:e})
        },
    }

    return(
        <GoogleEyeContext.Provider value={value}>
            {children}
        </GoogleEyeContext.Provider>
    )
}

export default GooglyEyeStateStore;
export {GoogleEyeContext};