import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #eee;
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration: none;
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
