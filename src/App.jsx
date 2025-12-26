import { useRoutes } from "react-router-dom";
import "./App.css";

import allRouts from "./routes";

function App() {
  let router = useRoutes(allRouts);
  return router;
}

export default App;
