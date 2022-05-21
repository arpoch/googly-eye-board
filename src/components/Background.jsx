import {useContext} from "react";
import {IconContext} from "react-icons";
import BackgroundViewModel from "../viewmodel/BackgroundViewModel";
import {SidebarContext} from "../Model/SidebarStateStore";
import {BsImage, BsImageFill} from "react-icons/all";
import penViewModel from "../viewmodel/PenViewModel";


const Background = ({canvasViewModel}) => {

    // const [image, setImage] = useState(() => {
    //     const image = new Image();
    //     image.src = beach;
    //     return image;
    // });
    // const image = new Image(0,0);
    // image.src = beach;
    // window.onload =()=>{
    //     if(image.src.length!=0)
    //         canvasContent.current.drawImage(image,0,0,);
    //     else
    //         console.log("ok")
    // }

    // function handleImage() {
    //     setImage(image => {
    //         console.log(image);
    //     });
    // }
    //
    // useEffect(() => {
    //     if(!image.complete){
    //         image.onload = () =>{
    //             canvasContent.current.drawImage(image, 0, 0, window.innerWidth, window.innerHeight);
    //         }
    //     }else{
    //         canvasContent.current.drawImage(image, 0, 0, window.innerWidth, window.innerHeight);
    //     }
    // }, [image]);
    const sidebarContext = useContext(SidebarContext);
    const backgroundViewModel = new BackgroundViewModel(sidebarContext,canvasViewModel);

    function handleClick(){
        backgroundViewModel.handleIconClick();
    }

    function setDisplayIcon(){
        if(backgroundViewModel.getIconClick()){
            backgroundViewModel.addBackground();
            return <BsImageFill />
        } else {
            return <BsImage />
        }
    }

    return(
        <>
            <IconContext.Provider value={{title: "Pen", size: "2.3em", className: 'react-icons'}}>
                <button onClick={handleClick}>{setDisplayIcon()}</button>
            </IconContext.Provider>
        </>
    );

}

export default Background;