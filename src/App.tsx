import React from "react";

import "./App.css";
import Toolbar from "./Toolbar";
import Viewer from "./Viewer";
import { useLoadSvg } from "./useLoadSvg";

const App: React.FC = () => {
  const { loading, loadedSvg, finishedMs, loadData } = useLoadSvg();
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <Toolbar svg={loadedSvg} finishedMs={finishedMs} loadData={loadData} />
      {loadedSvg && <Viewer svg={loadedSvg} />}
    </div>
  );
};

export default App;
