import React from "react";

interface WarningComponentProps {
  title: string;
}

const WarningComponent: React.FC<WarningComponentProps> = ({
  children,
  title,
}) => {
  return (
    <>
      <div className="header">{title}</div>
      <div className="content">{children}</div>
    </>
  );
};

export default WarningComponent;