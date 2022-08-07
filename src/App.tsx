import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Header } from "./components/Header"
import { CartContextProvider } from "./context/CartContext"
import { Router } from "./Router"
import { defaultTheme } from "./theme/default"
import { GlobalStyle } from "./theme/global"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider> 
      </BrowserRouter>
       <GlobalStyle />
    </ThemeProvider>
  )
}
