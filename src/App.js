import { Home } from "./components/Pages/Home";
import { Navbar } from "./components/Shared/Navbar";
import { Routes, Route } from "react-router-dom";
import { Signup } from "./components/Pages/Signup";
import { SingleMovie } from "./components/Pages/SingleMovie";
import { SignIn } from "./components/Pages/SignIn";
import { NotFound } from "./components/Shared/NotFound";
function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="h-[100vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="singleMovie/:id" element={<SingleMovie />} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>
        
      </main>
    </>
  );
}

export default App;
