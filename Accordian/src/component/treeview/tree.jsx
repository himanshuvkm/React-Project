import React from "react";
import menus from "./data";
import Menulist from "./menu-list";
import './tree.css'

function Tree() {
  return (
    <div className="tree-view-container ">
        <h1 className="text-4xl text-ceter font-bold">Tree Structure</h1>
      <Menulist list={menus} />
    </div>
  );
}

export default Tree;
