import RoomAudio from "../../../RoomAudio";

/**
 * Component to create a button
 * @param {object} style - style of the button
 * @returns Html elements
 * @example
 * <Button
 * className = "value"
 *  text = "value"
 *  width = "value"
 *  height = "value"
 *  padding = "value value value value" // Ex: "2px 4px 2px 4px"
 *  margin = "value value value value"  // Ex: "2px 4px 2px 4px"
 *  color = "value"
 *  backgrColor = "value"
 *  bordRadius = "value"
 *  display = "value"
 *  fontSize = "value"
 *  boxShadow = "valueX valueY valueBlur valueSpread valueColor valueShadow" // Ex: "2px 0 px 0 black inset"
 *  fontFamily = "value"
 *  filter = "value"
 *  sound = "value" // Ex: click
 *  href = "value"
 * />
 */
function Button({
  className,
  text = "Button",
  width,
  height,
  padding,
  margin,
  color,
  backgrColor,
  bordRadius,
  display,
  fontSize,
  boxShadow,
  filter,
  fontFamily,
  sound,
  href,
}) {
  return (
    <a
      className={`btn btn-wrap btn-pad-12-ver btn-pad-20-hor ${className}`}
      style={{
        width: width,
        height: height,
        padding: padding,
        margin: margin,
        backgroundColor: backgrColor,
        color: color,
        borderRadius: bordRadius,
        display: display,
        fontSize: fontSize,
        boxShadow: boxShadow,
        filter: filter,
        fontFamily: fontFamily,
      }}
      onClick={() => {
        switch (sound) {
          case "click":
            RoomAudio.getAudio().mouseClick.play();
            break;
          default:
            console.error("Audio not found");
        }
      }}
      href={href}
    >
      {text}
    </a>
  );
}

export default Button;
