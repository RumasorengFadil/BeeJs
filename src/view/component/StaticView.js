/**
 *
 * Component to created a StaticView
 * @param {object} style - style of the StaticView
 * @returns html Element
 * @example
 * <StaticView 
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
 *  <Text text = "Hello World!" />
 * <StaticView>
 */

const StaticView = ({
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
}) => {
  return (
    <div
      className={`${className}`}
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
    >
      {children}
    </div>
  );
};

export default StaticView;
