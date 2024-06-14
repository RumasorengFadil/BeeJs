import mouseClickmp3 from "./mouse-clicks.mp3";

export const audio = function(){
    return{
        mouseClick : new Audio(mouseClickmp3)
    }
}

