import { RootState } from '../../../store'


export const chatsSelector = (state: RootState) => {
  return state.activeChats.activeChats
}

