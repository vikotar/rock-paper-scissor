import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";

import Game from "./pages/Game/index.jsx";
import backgroundImage from "./assets/background.jpg";

function App() {
  return (
    <ChakraProvider>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <Game />
      </div>
    </ChakraProvider>
  );
}

export default App;
