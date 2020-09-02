let store = {
    email: "",
    password: "",
};

function updateStoreFunc(state) {
    this.email = state.email;
    this.password = state.password;
}

export let updateStore = updateStoreFunc.bind(store)


window.store = store;
