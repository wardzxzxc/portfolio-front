import { createGlobalStyle } from "styled-components";
import { colors } from "../utils/constants/colors";
import "./_app.css";

const GlobalStyle = createGlobalStyle`
    html,
    body{
        padding: 0;
        margin: 0;
        height: 100%;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
        font-size: 100%;
        line-height: 2rem;
        background-color: ${colors.backgroundColor};  
        min-width: 320px;
    }
    header {
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
    }
    * {
        box-sizing: border-box;
    }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
