import { INCREMENT } from "./actions"

export interface IAppState {
    counter: number
}

export const initialState: IAppState = {
    counter: 0
}

// shape of the redux store

export function rootReducer(state: any, action: any): IAppState {
    switch (action.type) {
        case INCREMENT:
        return { counter: state.counter + 1 }
    }
    return state
}