import rootrouter from "./Reducer/index";

import {createStore}from "redux"

const store = createStore (rootrouter);

export default store;