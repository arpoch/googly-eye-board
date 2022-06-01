import './Title.css'
import {Link} from "react-router-dom";
import React, {useState} from "react";
import {IconContext} from "react-icons";
import {BsArrowRightCircle, BsArrowRightCircleFill} from "react-icons/bs";
function Title() {
    //Can be converted to MVVM, but seems to be an overkill
    const [onHover,setHover] = useState(false);

    function handleInput(e){
        const target = document.getElementById("Page");
        if(e.target.value!==''){
            target.style.display="block";
        }else{
            target.style.display="none";
        }
    }

    function handleMouseOver(){
        setHover(true);
    }

    function handleMouseLeave(){
        setHover(false);
    }

    function displayIcon(){
        if(onHover) return <BsArrowRightCircleFill/>
        else return <BsArrowRightCircle />;
    }

    return (
        <>
            <div className="header">
                <div className="title">
                    Googly Eyed
                </div>
                <div className="word">
                    <input id="box" placeholder=".   .   ."  onChange={handleInput}/>
                </div>
            </div>
            <Link to="/googly-eye" >
                <IconContext.Provider value={{size: "4.5em", className: 'react-icons'}}>
                    <button id="Page" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>{displayIcon()}</button>
                </IconContext.Provider>
            </Link>
        </>
    );
}

export default Title;