import { configureStore } from "@reduxjs/toolkit";
import notificationsReducer from "../features/notifications/NotificationsSlice";
import partsReducer from "../features/parts/PartsSlice";

const store = configureStore({
    reducer: {
        parts: partsReducer,
        notifications: notificationsReducer
    }
})
export default store;