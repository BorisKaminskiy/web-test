import { ReactNode, FormEvent } from 'react';

type ButtonTypes = 'iconButton'
type BackgroundTypes = 'transparent' | 'gray'

export interface ButtonProps {
  children: ReactNode
  onClick?: (e: FormEvent<HTMLDivElement>) => void
  type?: string
  variant?: ButtonTypes
  background?: BackgroundTypes
}