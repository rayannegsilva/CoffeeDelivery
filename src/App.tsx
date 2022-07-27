import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Header } from "./components/Header"
import { Router } from "./Router"
import { defaultTheme } from "./theme/default"
import { GlobalStyle } from "./theme/global"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
       <GlobalStyle />
    </ThemeProvider>
  )
}
