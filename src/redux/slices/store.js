import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
import Sidebar from "../../components/sidebar/sidebar";

export const store=configureStore({
    reducer:{
        sidebar:sidebarReducer,
    },
});