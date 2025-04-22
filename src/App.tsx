import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { TransactionsPage } from "./pages/TransactionsPage/TransactionsPage"

export function App() {

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle/>

        <TransactionsPage/>
      </ThemeProvider>
    </>
  )
}


