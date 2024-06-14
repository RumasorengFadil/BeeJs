/**
 * Component to create a text
 * @param {object} style - style of the button
 * @returns Html elements
 * @example
 * <Button
 *  className = "value"
 *  text = "value"
 *  width = "value"
 *  height = "value"
 *  padding = "value value value value" // Ex: "2px 4px 2px 4px"
 *  margin = "value value value value"  // Ex: "2px 4px 2px 4px"
 *  color = "value"
 *  backgrColor = "value"
 *  display = "value"
 *  fontSize = "value"
 *  boxShadow = "valueX valueY valueBlur valueSpread valueColor valueShadow" // Ex: "2px 0 px 0 black inset"
 *  fontFamily = "value"
 *  textAlign = "value"
 *  opacity = "value"
 *  animation = "value"
 * />
 */
function Text({
  text = "Hello World!",
  className,
  width,
  height,
  padding,
  margin,
  color,
  backgrColor,
  display,
  fontSize,
  boxShadow,
  fontFamily,
  textAlign,
  opacity,
  animation,
}) {
  return (
    <p
      className={`${className}`}
      style={{
        width: width,
        height: height,
        padding: padding,
        margin: margin,
        backgroundColor: backgrColor,
        color: color,
        display: display,
        fontSize: fontSize,
        boxShadow: boxShadow,
        fontFamily: fontFamily,
        textAlign: textAlign,
        opacity: opacity,
        animation: animation,
      }}
    >
      {text}
    </p>
  );
}

export default Text;
