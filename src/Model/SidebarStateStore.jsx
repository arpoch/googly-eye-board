import React, {useReducer} from "react";

const actions = {
    PEN:"PEN",
    ERASER:"ERASER",
    BACKGROUND: "BACKGROUND",
    SELECT: "SELECT",
}

//Can create separate objs for each item
const initialState = {
    Pen: {
        isPenClicked:false,
    },
    Eraser: {
        isEraserClicked:false,
    },
    Background: {
        isBackgroundClicked: false,
    },
    Select: {
        isSelected: false,
    }
}

function reducer(state,action){
    switch (action.type){
        case actions.PEN:
            return {
                ...state,
                Pen:{
                    ...state.Pen,
                    isPenClicked: !state.Pen.isPenClicked
                },
                Eraser: {
                    ...state.Eraser,
                    isEraserClicked: false
                },
                Background: {
                    ...state.Background,
                    isBackgroundClicked: false,
                },
                Select:{
                    isSelected: false,
                },
            };

        case actions.ERASER:
            return {
                ...state,
                Eraser: {
                    ...state.Eraser,
                    isEraserClicked: !state.Eraser.isEraserClicked
                },
                Pen:{
                    ...state.Pen,
                    isPenClicked: false
                },
                Background: {
                    ...state.Background,
                    isBackgroundClicked: false,
                },
                Select:{
                    isSelected: false,
                },
            };

        case actions.BACKGROUND:
            return {
                ...state,
                Background: {
                    ...state.Background,
                    isBackgroundClicked: !state.Background.isBackgroundClicked,
                },
                Eraser: {
                    ...state.Eraser,
                    isEraserClicked: false,
                },
                Pen:{
                    ...state.Pen,
                    isPenClicked: false,
                },
                Select:{
                    isSelected: false,
                },
            };

        case actions.SELECT:
            return {
                ...state,
                Select:{
                    isSelected: !state.Select.isSelected,
                },
                Background: {
                    ...state.Background,
                    isBackgroundClicked: false,
                },
                Eraser: {
                    ...state.Eraser,
                    isEraserClicked: false,
                },
                Pen:{
                    ...state.Pen,
                    isPenClicked: false,
                }
            };

        default:
            return state;
    }
}

const SidebarContext = React.createContext();

function SidebarStateStore({children}){
    const [state,dispatch] = useReducer(reducer,initialState);
    const value = {
        states: state,
        handlePenClick:()=>{
            dispatch({type: actions.PEN});
        },
        handleEraserClick:()=>{
            dispatch({type:actions.ERASER});
        },
        handleBackgroundClick:()=>{
            dispatch({type:actions.BACKGROUND});
        },
        handleSelection: ()=>{
            dispatch({type:actions.SELECT});
        }
    };

    return(
        <SidebarContext.Provider value={value}>
            {children}
        </SidebarContext.Provider>
    );

}

export default SidebarStateStore;
export {SidebarContext};