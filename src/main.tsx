import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App.tsx";
import GlobalStyles from "./styles/GlobalStyles.tsx";
import AuthProvider from "./components/AuthProvider.tsx";
import "./styles/style.css";
import { Provider } from "react-redux";
import store from "./store/index.ts";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </AuthProvider>
    </QueryClientProvider>
    <GlobalStyles />
  </React.StrictMode>
);
