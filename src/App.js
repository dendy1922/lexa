import React from 'react';
import RegModal from "./components/Modal";
import { MyContext } from "./components/Context";
import { updateStore } from "./store.js";

class App extends React.Component {

  render() {
    return (
      <MyContext.Provider value={updateStore}>
        <RegModal />
      </MyContext.Provider>
    )
  }
}

export default App;
