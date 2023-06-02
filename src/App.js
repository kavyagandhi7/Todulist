import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./components/Add";
import Main from "./components/Main";
import Update from "./components/Update";
function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>

<Route exact path="/" element={<><Add/><Main/></>}/>
<Route path= {`/update/:id`} element={<><Update/></>}/>




  </Routes>
  
  
  
  
  </BrowserRouter>
  </>
  );
}

export default App;
