import React from "react";
import Comp1 from "./components/Comp1";
import { UserProvider } from "./Context/userContext";
// import ClickCounter from "./components/ClickCounter";
// import HoverCounter from "./components/HoverCounter";
// import User from "./components/User";
// import CounterWrapper from "./utls/counterWrapper";
// import ErrorBounding from "./components/ErrorBounding";
// import Jerseys from "./components/Jerseys";
function App() {
  const user = {
    name:'Hossain',
    age: 25
  }
  return (
    <div>
      {/* <ErrorBounding>
        <Jerseys name={"Nemar"} JerseyNum={10} />
      </ErrorBounding>
      <ErrorBounding>
        <Jerseys name={"messi"} JerseyNum={5} />
      </ErrorBounding>
      <ErrorBounding>
        <Jerseys name={"rolando"} JerseyNum={11} />
      </ErrorBounding>
      <ErrorBounding>
        <Jerseys JerseyNum={11} />
      </ErrorBounding> */}
      {/* <ClickCounter/> */}
      {/* <HoverCounter/> */}
      {/* <User render={(isLoggedIn) => (isLoggedIn ? "Hossain" : "visitor")} /> */}
     <UserProvider value={user}>
    <Comp1/>
     </UserProvider>
    </div>
  );
}

export default App;
