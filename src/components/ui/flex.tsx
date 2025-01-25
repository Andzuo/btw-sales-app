import React from "react";

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  direction?: "row" | "column";
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around";
  align?: "flex-start" | "center" | "flex-end" | "stretch";
}

const Flex: React.FC<FlexProps> = ({
  children,
  direction = "row",
  justify = "flex-start",
  align = "stretch",
  style,
  ...rest
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Flex;
