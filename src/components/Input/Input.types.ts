import { FormEvent } from 'react'

export interface IInput {
  onClick?: (e: FormEvent<HTMLDivElement>) => void
}