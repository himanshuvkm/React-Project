import React from "react";
import MenuItem from "./menu-item";

function Menulist({ list }) {
  return (
    <ul>
      {list && list.length > 0
        ? list.map((item, index) => <MenuItem key={index} item={item} />)
        : null}
    </ul>
  );
}

export default Menulist;
