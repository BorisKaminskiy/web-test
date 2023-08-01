import { RootState } from '../../../store'

export const activeIdSelector = (state: RootState) => {
  return state.activeItem.activeId
}
