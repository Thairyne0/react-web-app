import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/MyNavBar";

function App() {
  return (
    <div className="App">
      <header>
        <MyNavBar subtitle="Tommaso"></MyNavBar>
      </header>
    </div>
  );
}

export default App;
