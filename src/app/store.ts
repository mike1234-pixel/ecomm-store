import { INCREMENT, TOGGLE_SUB_NAV } from "./actions"
import { tassign } from "tassign" 
// typesafe version of Object.assign()
// create new copy of state object and add mutations

export interface IAppState {
    counter: number,
    subNavVisible: boolean
}

export const INITIAL_STATE: IAppState = {
    counter: 0,
    subNavVisible: false
}

// shape of the redux store

export function rootReducer(state: any, action: any): IAppState {
    switch (action.type) {
        case INCREMENT:
            return tassign(state, { counter: state.counter + 1 });
        case TOGGLE_SUB_NAV:
            return tassign(state, { subNavVisible: !state.subNavVisible});
    }
    return state
}