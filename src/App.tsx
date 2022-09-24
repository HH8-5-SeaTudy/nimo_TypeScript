import { ThemeProvider } from "styled-components";
import "./App.css";
import theme from "./style/Theme";
import Router from "./Router";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
