import { useState } from "react";
import DATA from "../data/accordion_data.json";
import "../styles/accordion.css";

// single selection
// multi selection

export const Accordion = () => {
  const [selected, setSelected] = useState("");

  const data = DATA;

  const handleSingleSelection = (getCurrentId) => {
    // setSelected(getCurrentId);
    // to close already opened one on following click
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item">
              <div
                key={item.id}
                className="title"
                onClick={() => handleSingleSelection(item.id)}
              >
                <h3>{item.name}</h3>
                <span>+</span>
              </div>
              {selected === item.id ? (
                <div className="content">{item.description}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};
