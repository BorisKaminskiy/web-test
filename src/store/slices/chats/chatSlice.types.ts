import { IItem } from '../../../interface/page'

export interface ActiveChatsProps {
  activeChats: IItem[] 
  isLoading: boolean
  error: string | undefined
}