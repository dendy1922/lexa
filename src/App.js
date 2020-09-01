import React from 'react';
import RegModal from "./components/Modal"


const store = {
  email: "",
  password: "",
  password_confirmation: "",
};

const updateStoreFunc = (state) => {
  this.email = state.email;
  this.password = state.password;
  this.password_confirmation = state.password_confirmation;
}
let updateStore = updateStoreFunc.bind(store)

export const Mycontext = React.createContext()


const App = () => {
  return (
    <Mycontext.Provider value={updateStore}>
      <RegModal />
    </Mycontext.Provider>
  )
}

window.store = store
export default App;
