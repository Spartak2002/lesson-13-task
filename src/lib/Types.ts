import { Dispatch } from "react"

export interface IEvent {
    id: string | number
    title: string
    date: string
    time: string
    type: string
    composer: string
    cover: string
}

export interface IState {
    events: IEvent[]
    currentFilter: FilterTypes
}
export interface IContextType {
    state: IState
    dispatch: Dispatch<Action>
}
export interface Action {
    type: ActionTypes
    payload?: unknown
}

export enum ActionTypes {
    AddEvent,
    RemoveEvent,
    UpdateEvent,
    SetEvents,
    setFilter,
}

export enum FilterTypes {
    All = 'all',
    Ballet = 'ballet',
    Opera = 'opera'
}

