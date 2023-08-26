import { Container } from "./styles"
import Home from "../pages/Home"
import defaultTheme from "../assets/styles/themes/default"
import { ThemeProvider } from "styled-components"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import GlobalStyles from "../assets/styles/global"

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Home />
      </Container>
    </ThemeProvider>
  )
}
