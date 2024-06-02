import React from "react";

function Container({ children }) {
  return (
    <div className="w-full mx-w-7xl mx-auto px-4">
      {children}
      Container
    </div>
  );
}

export default Container;
