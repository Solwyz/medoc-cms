import { Route, Routes } from "react-router-dom";
import CmsLayout from "./Cms/CmsLayout";

function App() {
  return (
    <div className="App font-AnekLatin">
      <Routes>
        <Route path="/" element={<CmsLayout />} />
      </Routes>
    </div>
  );
}

export default App;
