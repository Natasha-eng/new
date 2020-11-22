import {reducer, Statetype, TOGGLE_COLLAPSED} from "./reducer";

test('collapsed should be true', () => {
    //data
    const state: Statetype = {
        collapsed: false
    }

    //action
   const newState =  reducer(state, {type: TOGGLE_COLLAPSED})

    //expectation
    expect(newState.collapsed).toBe(true)
})


test('collapsed should be false', () => {
    //data
    const state: Statetype = {
        collapsed: true
    }

    //action
    const newState =  reducer(state, {type: TOGGLE_COLLAPSED})

    //expectation
    expect(newState.collapsed).toBe(false)
})


test('REDUCER SHOULD THROW ERROR BECAUSE OF INCORRECT ACTION TYPE', () => {
    //data
    const state: Statetype = {
        collapsed: true
    }

    //action
    const newState =

    //expectation
    expect(() => {reducer(state, {type: "FAKETYPE"}) }).toThrowError();
})