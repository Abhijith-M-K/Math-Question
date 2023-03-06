import Nav from "./components/Nav/Nav";
import Questions from "./pages/Questions";

function App() {
  return (
    <div className="App">
      <Nav/>
      <div className="container">
      <Questions/>
      </div>
    </div>
  );
}

export default App;
