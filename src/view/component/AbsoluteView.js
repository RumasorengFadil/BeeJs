/**
 *
 * Component to created a AbsoluteView
 * @param {object} style - style of the AbsoluteView
 * @returns html Element
 * @example
 * <AbsoluteView 
 *  className = "value"
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
 *  top = "value"
 *  right = "value"
 *  bottom = "value"
 *  left = "value"
 *  transform = "value">
 *  <Text text = "Hello World!" />
 * <AbsoluteView>
 */

const AbsoluteView = ({
  className,
  children,
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
  top,
  right,
  bottom,
  left,
  transform,
  position,
}) => {
  return (
    <div
      className={`${className} absolute-view-${position}`}
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
        position: "absolute",
        top: top,
        right: right,
        bottom: bottom,
        left: left,
        transform: transform,
      }}
    >
      {children}
    </div>
  );
};

export default AbsoluteView;
