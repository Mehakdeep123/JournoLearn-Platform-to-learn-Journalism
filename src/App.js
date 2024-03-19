import "./App.css";
import Aboutme from "./component/Aboutme";
import Awards from "./component/Awards";
import Benefit from "./component/Benefit";
import Congrats from "./component/Congrats";
import Experience from "./component/Experience";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Aboutme />
      <Experience />
      <Awards />
      <Congrats />
      <Benefit/>
    </div>
  );
}
export default App;