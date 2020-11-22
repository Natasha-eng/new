type ActionType = {
    type: string
}
export const TOGGLE_COLLAPSED = "TOGGLE-COLLAPSED";

export type Statetype = {
    collapsed: boolean
}

export const reducer = (state: Statetype, action: ActionType): Statetype => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {
                ...state,
                collapsed: !state.collapsed
            };
        default:
            throw new Error('Bad action type')
    }

    return state;
}