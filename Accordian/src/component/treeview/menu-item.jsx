import React, { useState } from "react";
import Menulist from "./menu-list";

function MenuItem({ item }) {
  const [displayCurrChild, setDisplayCurrChild] = useState({});

  const handleToggle = (label) => {
    setDisplayCurrChild((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const hasChildren = item?.children?.length > 0;

  return (
    <li>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <p>{item.label}</p>
        {hasChildren && (
          <button onClick={() => handleToggle(item.label)}>
            {displayCurrChild[item.label] ? "-" : "+"}
          </button>
        )}
      </div>

      {hasChildren && displayCurrChild[item.label] && (
        <ul>
          <Menulist list={item.children} />
        </ul>
      )}
    </li>
  );
}

export default MenuItem;
