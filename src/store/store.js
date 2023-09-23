import { configureStore } from '@reduxjs/toolkit'
import SideBarSlice from './ReduxSlices/SideBarSlice'
import dataSlice from './DataSlices/DataSlices'
export const store = configureStore({
  reducer: {
    SideBarSelction :SideBarSlice,
    DataBase :dataSlice,
  },
})