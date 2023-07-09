import { Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Route } from "react-router-dom";
import Countries from "./pages/Countries";
import Destinations from "./pages/Destinations";
import Destination from "./pages/Destination";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/continent/:continentId" element={<Countries />} />
      <Route
        path="/continent/:continentId/country/:countryId"
        element={<Destinations />}
      />
      <Route
        path="/continent/:continentId/country/:countryId/destination/:destinationId"
        element={<Destination />}
      />
    </Routes>
  );
}

export default App;
