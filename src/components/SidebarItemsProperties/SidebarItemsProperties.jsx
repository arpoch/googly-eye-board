import PenProperties from "../PenProperties/PenProperties";
import "./SidebarItemsProperties.css"


function SidebarItemsProperties(){

    return (
      <>
          <div className={'menu'}>
              <div className={'menu-container'}>
                  <div className={'menu-item'}>
                      {/*PEN-Properties*/}
                      <PenProperties/>
                  </div>
              </div>
          </div>
      </>
    );
}

export default SidebarItemsProperties;