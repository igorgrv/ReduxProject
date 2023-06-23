import { createStandaloneToast } from "@chakra-ui/toast";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Router from "routes";
import "./index.scss";
import store from "./store";

const { ToastContainer } = createStandaloneToast();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router />
    <ToastContainer />
  </Provider>
);
