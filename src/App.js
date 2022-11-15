import React, { useState } from "react";
import Toolbar from "./components/Toolbar/Toolbar";

const App = () => {
  const filters = ["All", "Websites", "Flayers", "Business Cards"];
  const [state, setState] = useState("All");
  const [active, setActive] = useState("All");

  const onSelectFilter = (e) => {
    setState((prev) => (prev = e));
    setActive((prev) => (prev = e));
  };

  return (
    <>
      <nav>
        {filters.map((item) => {
          return (
            <ul
              className={item === active ? "active" : ""}
              key={item}
              onClick={() => {
                onSelectFilter(item);
              }}
            >
              {item}
            </ul>
          );
        })}
      </nav>
      <Toolbar
        filters={filters}
        selected={state}
      />
    </>
  );
};

export default App;
