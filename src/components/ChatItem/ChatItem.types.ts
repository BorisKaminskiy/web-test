import { MouseEvent } from 'react';
import { IItem } from '../../interface/page';

export interface IChatItem {
  props: IItem
  isActive: boolean
  onClick: (e: MouseEvent<HTMLDivElement>) => void
}