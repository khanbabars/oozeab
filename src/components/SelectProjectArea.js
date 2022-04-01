import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const options = [
  { label: "Stockholm ", value: "Stockholm" },
  { label: "Göteborg", value: "Göteborg" },
  { label: "Luleå", value: "Luleå" },
  { label: "Malmö", value: "Malmö" },
  { label: "Distans", value: "Distans" },
];

export const SelectProjectArea = () => {
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <pre>{JSON.stringify(selected)}</pre> 
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="selectList"
        overrideStrings={{
          selectSomeItems: "Välj",
          search: "Sök",
          selectAll: "Alla"
      }}
      />

    </div>
  );
};

export default SelectProjectArea;
