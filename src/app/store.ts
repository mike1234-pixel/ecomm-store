import { TOGGLE_SUB_NAV, TOGGLE_DROPDOWN, SAVE_PAINTING_PRODUCTS } from "./actions"
import { tassign } from "tassign" 
// typesafe version of Object.assign()
// create new copy of state object and add mutations

export interface IAppState {
    subNavVisible: boolean,
    dropdownVisible: boolean,
    paintingProducts: Array<any>
}

export const INITIAL_STATE: IAppState = {
    subNavVisible: false,
    dropdownVisible: false,
    paintingProducts: []
}

// shape of the redux store

export function rootReducer(state: any, action: any): IAppState {
    switch (action.type) {
        case TOGGLE_SUB_NAV:
            return tassign(state, { subNavVisible: !state.subNavVisible});
        case TOGGLE_DROPDOWN:
            return tassign(state, { dropdownVisible: !state.dropdownVisible })
        case SAVE_PAINTING_PRODUCTS:
            return tassign(state, { paintingProducts: action.payload })
    }
    return state
}