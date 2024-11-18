import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import client from "../graphql/client";
import store from "../redux/store";
import "../styles/globals.css";
import CustomAppBar from "@/components/Appbar";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <CustomAppBar />
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
