import {IconContext} from "react-icons";

//Props are object, to access a specific key of an object use {key1, key2} in function
//parameter list
function PropertiesButton({title,className,onClickEventHandler,icon}){

    return (
      <>
          <IconContext.Provider value={{title: title, size: "1.7em", className: className}}>
              <button
                  onClick={onClickEventHandler}
                  className={'sidebar-button props-menu-button'}>
                  {icon}
              </button>
          </IconContext.Provider>
      </>
    );
}

export default PropertiesButton;