import { Provider } from "react-redux";
import MainHeader from "./component/Header";
import Laout from "./component/Laout";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <MainHeader />
        <Laout />
      </Provider>
    </>
  );
}

export default App;
