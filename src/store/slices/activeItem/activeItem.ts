import { createSlice } from '@reduxjs/toolkit';
import { IActiveItem } from './activeItem.types';

const initialState: IActiveItem = {
  activeId: null
  // messages: []
}

const activeItemId = createSlice({
  name: 'activeId',
  initialState,
  reducers: {
    setActiveId: (state, action) => {
      state.activeId = action.payload
    }
  }
})

// export const getActiveSearch = (state: RootState) => {
//   return state.activeSearchReducer.activeSearch
// }

export const { setActiveId } = activeItemId.actions
export default activeItemId.reducer 