export const setTimeoutWithCallback = function(actionBefore = _ =>{}, actionAfter = _=>{}, time){
    actionBefore()
    setTimeout(actionAfter, time);
}