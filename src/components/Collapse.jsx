import React, { useState } from "react";

function Collapse(props) {

  const [isCollapsed, setIsCollapsed] = useState(false);

  const changeCollapsed = () => {
      setIsCollapsed(prev => !prev);
  }

  return (
    <>
      <button className="btn btn-light" onClick={() => changeCollapsed()}>
        {isCollapsed ? props.expandedLabel : props.collapsedLabel}
      </button>
      <div className={isCollapsed ? "collapsible-content-expanded" : "collapsible-content-collapsed"}>
        {props.children}
      </div>
    </>
  );
}

export default Collapse