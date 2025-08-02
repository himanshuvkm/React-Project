import React, { useState } from "react";
import data from "./Data.js";
import "./Accordian.css";

function Accordian() {
  const [selected, setSelected] = useState([]);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  const handleSingleSelection = (id) => {
    setSelected(selected[0] === id ? [] : [id]);
  };

  const handleMultiSelection = (id) => {
    if (enableMultiSelection) {
      setSelected((prevSelected) =>
        prevSelected.includes(id)
          ? prevSelected.filter((item) => item !== id)
          : [...prevSelected, id]
      );
    }
  };

  return (
    <div className="wrapper">
      <h1>Accordion</h1>
      <div className="toggle">
        <input
          type="checkbox"
          id="Enable-Multi-Selection"
          checked={enableMultiSelection}
          onChange={() => setEnableMultiSelection(!enableMultiSelection)}
        />
        <label htmlFor="Enable-Multi-Selection">Enable Multi-Selection</label>
      </div>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                className="title"
                onClick={() =>
                  enableMultiSelection
                    ? handleMultiSelection(dataItem.id)
                    : handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>{selected === dataItem.id ? "-" : "+"}</span>
              </div>
              {(enableMultiSelection
                ? selected.includes(dataItem.id)
                : selected[0] === dataItem.id) && (
                <div className="content">{dataItem.answer}</div>
              )}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}

export default Accordian;
