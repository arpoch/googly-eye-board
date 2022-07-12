import {useCallback, useRef} from "react";

function Palette({penPropertiesViewModel}){

    const ref = useRef(null);

    const activeCallback = useCallback((current)=>{
        ref.current = current;
    },[]);

    function setPrimaryPenColor(){
        if(localStorage.getItem("mode")==="black") return "#ffffff";
        else return "#000000";

    }

    function handleSwatchClick(target,code){
        const prevTarget = ref.current;
        prevTarget.className = "swatch";
        target.target.className += " active";
        ref.current = target.target;
        penPropertiesViewModel.handleSwatchColor(code);
    }

    return (
      <>
          <div className={'palette'}>
              <button
                  onClick={(e)=>handleSwatchClick(e,"#fcc135")}
                  className={'swatch'}
                  style={{backgroundColor: "#fcc135"}}/>
              <button
                  onClick={(e)=>handleSwatchClick(e,"#ffa31a")}
                  className={'swatch'}
                  style={{backgroundColor: "#ffa31a"}}/>
              <button
                  onClick={(e)=>handleSwatchClick(e,"#ff751a")}
                  className={'swatch'}
                  style={{backgroundColor: "#ff751a"}}/>
              <button
                  onClick={(e)=>handleSwatchClick(e,"#8000ff")}
                  className={'swatch'}
                  style={{backgroundColor: "#8000ff"}}/>
              <button
                  onClick={(e)=>handleSwatchClick(e,"#9933ff")}
                  className={'swatch'}
                  style={{backgroundColor: "#9933ff"}}/>
              <button
                  onClick={(e)=>handleSwatchClick(e,"#e600ac")}
                  className={'swatch'}
                  style={{backgroundColor: "#e600ac"}}/>
              <button
                  onClick={(e)=>handleSwatchClick(e,"#66e0ff")}
                  className={'swatch'}
                  style={{backgroundColor: "#66e0ff"}}/>
              <button
                  onClick={(e)=>handleSwatchClick(e,"#1a75ff")}
                  className={'swatch'}
                  style={{backgroundColor: "#1a75ff"}}/>
              <button
                  onClick={(e)=>handleSwatchClick(e,"#0052cc")}
                  className={'swatch'}
                  style={{backgroundColor: "#0052cc"}}/>
              <button
                  onClick={(e)=>handleSwatchClick(e,"#00e600")}
                  className={'swatch'}
                  style={{backgroundColor: "#00e600"}}/>
              <button
                  onClick={(e)=>handleSwatchClick(e,"#009900")}
                  className={'swatch'}
                  style={{backgroundColor: "#009900"}}/>
              <button
                  ref={activeCallback}
                  onClick={(e)=>handleSwatchClick(e,setPrimaryPenColor())}
                  className={'swatch active'}
                  style={{backgroundColor: setPrimaryPenColor()}}/>
          </div>
      </>
    );
}

export default Palette;