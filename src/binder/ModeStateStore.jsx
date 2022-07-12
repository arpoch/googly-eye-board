import React, {useReducer} from "react";

const actions={
    CLICKED: "CLICKED",
    THEME: "THEME",
}

const initState={
    click: false,
    darkMode: (localStorage.getItem("mode") === "black") ||
        window.matchMedia('(prefers-color-scheme: dark)').matches,
}

function reducer(state,action){
    switch (action.type){
        case actions.THEME:
            localStorage.setItem("mode",action.payload);
            return {
                    ...state,
                    click: !state.click,
                    darkMode: localStorage.getItem("mode") === "black",
                };
        default:
            return state;
    }
}

const ModeContext = React.createContext();

function ModeStateStore({children}){
    const [state,dispatch] = useReducer(reducer,initState);
    const value={
        states: state,
        handleThemeChange:(color)=>{
            dispatch({type: actions.THEME, payload: color})
        },
    };

    return(
      <ModeContext.Provider value={value}>
          {children}
      </ModeContext.Provider>
    );
}

export default ModeStateStore;
export {ModeContext};