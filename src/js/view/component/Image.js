/**
 * Component to create a image
 * @param {object} style - style of the image
 * @returns Html elements
 * @example
 * <Image
 *  className = "value"
 *  width = "value"
 *  height = "value"
 *  padding = "value value value value" // Ex: "2px 4px 2px 4px"
 *  margin = "value value value value"  // Ex: "2px 4px 2px 4px"
 *  backgrColor = "value"
 *  bordRadius = "value"
 *  display = "value"
 *  fontSize = "value"
 *  boxShadow = "valueX valueY valueBlur valueSpread valueColor valueShadow" // Ex: "2px 0 px 0 black inset"
 *  rotate = "value"
 *  cursor = "value"
 *  animation = "value"
 *  src = "value"
 * />
 */

const Image = ({
  className,
  width,
  height,
  padding,
  margin,
  backgrColor,
  bordRadius,
  display,
  boxShadow,
  rotate,
  cursor,
  animation,
  src,
  onClick,
}) => {
  return (
    <img
      className={className}
      style={{
        width: width,
        height: height,
        padding: padding,
        margin: margin,
        backgroundColor: backgrColor,
        borderRadius: bordRadius,
        display: display,
        boxShadow: boxShadow,
        rotate: rotate,
        cursor: cursor,
        animation: animation,
      }}
      src={src}
      onClick={onClick}
    ></img>
  );
};

export default Image;