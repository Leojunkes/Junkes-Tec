import { ChakraProvider } from "@chakra-ui/react";
import Header from "../componentes/Header/header";
import "../styles/globals.css";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
