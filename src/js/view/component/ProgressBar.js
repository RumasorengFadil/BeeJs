import iconLoading from "/public/icn/icon-loading.svg";

/**
 * Component to create a progress bar
 * @param {object} style - style of the button 
 * @returns Html elements
 * @example 
 * <ProgressBar 
 *  position = "value" //Ex: top, right, bottom, left, and center
 * />
 */
function ProgressBar({position="center"}){
    return(
        <img className= {`progressbar-${position}`} src={iconLoading}></img>
    )
}

export default ProgressBar;