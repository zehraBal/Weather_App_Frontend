import Header from "./components/Header";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import MainDashboard from "./components/MainDashboard";
import HistoricalWeatherPage from "./components/HistoricalWeatherPage";
import AddLocationPage from "./components/AddLocationPage";
function App() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main>
          <Routes>
            <Route path="/" element={<MainDashboard />} />
            <Route path="/historical" element={<HistoricalWeatherPage />} />
            <Route path="/add-location" element={<AddLocationPage />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
