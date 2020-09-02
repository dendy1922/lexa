let store = {
    email: "",
    password: "",
    password_confirmation: "",
};

function updateStoreFunc(state) {
    this.email = state.email;
    this.password = state.password;
    this.password_confirmation = state.password_confirmation;
}

export let updateStore = updateStoreFunc.bind(store)


window.store = store;
