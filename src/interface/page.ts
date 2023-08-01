export interface IPage{
    title?: string
}

export interface ILastMessage {
    created_at: Date
    user_id: string
    user_name: string
    user_surname: string
    you: boolean
    message: string
}

export interface IUser {
   id: string
   name: string
   surname: string
   avatar: string,
   you: boolean 
}

export interface IItem {
    id: string
    created_at: Date
    title: string
    avatar: string
    private: boolean
    last_message: ILastMessage
    count_unread: number
    users: IUser[]
}

export interface IMessage {
    id: string
    created_at: Date
    message: string
    is_new: boolean
    user: IUser
}

