import Header from "./component/Header";
// import DayList from "./component/DayList";
// import Day from "./component/Day";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import EmptyPage from "./component/EmptyPage";
import Wrapper from "./component/Wrapper";

function App() {
  return (
    // <BrowserRouter>
    <div className="App">
      {/* <Header /> */}
      {/* <Switch>
          <Route exact path="/">
            <DayList />
          </Route>
          <Route path="/day/:day">
            <Day />
          </Route>
          <Route>
            <EmptyPage />
          </Route>
        </Switch> */}
      <Wrapper />
    </div>
    // </BrowserRouter>
  );
}

export default App;
