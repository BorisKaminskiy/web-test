export type TTime = 'time' | 'date' | 'time&date'

export interface ITime {
  dateInfo: Date
  type?: TTime
}