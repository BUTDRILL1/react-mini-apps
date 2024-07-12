import './App.css';
import Home from "./Home.jsx";
import Header from "./Header.jsx";
import Checkout from "./Checkout.jsx";
import Login from "./Login.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import reducer, { initialState } from "./reducer.jsx";
import { StateProvider } from "./StateProvider.jsx";

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<><Header /><Checkout /></>} />
          <Route path="/" element={<><Header /><Home /></>} />
        </Routes>
      </Router>
    </div>
    </StateProvider>
  );
}

export default App;
