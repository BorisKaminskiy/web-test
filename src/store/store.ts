import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit";

import activeChats from './slices/chats/chatsSLice'
import activeItem from './slices/activeItem/activeItem';

const rootReducer = combineReducers({
  activeChats,
  activeItem
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>() 
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector