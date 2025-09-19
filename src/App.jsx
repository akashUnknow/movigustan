import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Home />
      </div>
    </div>
  );
}

export default App;
