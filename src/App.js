import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/MyNavBar";
import MyCarousel from "./components/MyCarousel";
import MyCards from "./components/MyCards";

function App() {
  return (
    <div className="App">
      <header>
        <MyNavBar subtitle="Dieti"></MyNavBar>
        <MyCarousel></MyCarousel>
      </header>
      <main>
        <MyCards></MyCards>
      </main>
    </div>
  );
}

export default App;
