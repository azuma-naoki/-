import { useEffect, useState } from "react";
import Header from "./Components/Header";
import MainContents from "./pages/MainContents";
import RenderGraph from "./pages/RenderGraph";
import CreatePage from "./pages/CreatePage/CreatePage";

function Main() {
  return (
    <main>
      <MainContents />
      <RenderGraph x={[0,1,2,3,4,5]} y={[0,1,2,3,4,5]} />
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>&copy; PriGraph</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      {/* <Main /> */}
      <CreatePage/>
      <Footer />

    </div>
  );
}

export default App;
