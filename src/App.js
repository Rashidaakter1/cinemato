import { Home } from "./components/Pages/Home";
import { Navbar } from "./components/Shared/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main ><Home/></main>
    </>
  );
}

export default App;
