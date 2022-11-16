import React, { useState } from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import StoreItems from "./components/StoreItems/StoreItems";
import DropDown from "./components/DropDown/DropDown";
import viewList from "./image/viewList.svg";
import viewGrid from "./image/viewGrid.svg";

const App = () => {
  return <DropDown />;
};

// const App = () => {
//   const [view, setView] = useState(false);
//   const handleToggleView = () => {
//     setView(prev => prev = !view)
//   }

//   return (
//     <>
//       <span
//       onClick={() => {handleToggleView()}}
//        className="bth-toggle">
//         <img src={!view ? viewGrid : viewList} />
//       </span>
//       <StoreItems viewList={view} />
//     </>
//   );
// };
//   const filters = ["All", "Websites", "Flayers", "Business Cards"];
//   const [state, setState] = useState("All");
//   const [active, setActive] = useState("All");

//   const onSelectFilter = (e) => {
//     setState((prev) => (prev = e));
//     setActive((prev) => (prev = e));
//   };

//   return (
//     <>
//       <nav>
//         {filters.map((item) => {
//           return (
//             <ul
//               className={item === active ? "active" : ""}
//               key={item}
//               onClick={() => {
//                 onSelectFilter(item);
//               }}
//             >
//               {item}
//             </ul>
//           );
//         })}
//       </nav>
//       <Toolbar
//         filters={["All", "Websites", "Flayers", "Business Cards"]}
//         selected={state}
//       />
//     </>
//   );
// };
export default App;
