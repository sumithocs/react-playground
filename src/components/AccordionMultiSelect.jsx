import { useState } from "react";
import DATA from "../data/accordion_data.json";
import "../styles/accordion.css";

// single selection
// multi selection

export const AccordionMultiSelect = () => {
  const [selected, setSelected] = useState("");
  const [enablleMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const data = DATA;

  const handleSingleSelection = (getCurrentId) => {
    // setSelected(getCurrentId);
    // to close already opened one on following click
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultipleSelection = (getCurrentId) => {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(copyMultiple);

    console.log(selected, multiple);
  };

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enablleMultiSelection)}>
        Enable multiselect
      </button>

      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item">
              <div
                key={item.id}
                className="title"
                onClick={
                  enablleMultiSelection
                    ? () => handleMultipleSelection(item.id)
                    : () => handleSingleSelection(item.id)
                }
              >
                <h3>{item.name}</h3>
                <span>+</span>
              </div>
              {enablleMultiSelection
                ? multiple.indexOf(item.id) !== -1 && (
                    <div className="content">{item.description}</div>
                  )
                : selected === item.id && (
                    <div className="content">{item.description}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};
