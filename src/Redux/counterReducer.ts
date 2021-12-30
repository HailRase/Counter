const INCREMENT_COUNT = 'INCREMENT-COUNT'
const RESET_COUNT = 'RESET-COUNT'
const SET_MIN = 'SET-MIN'
const SET_MAX = 'SET-MAX'

export type InitialStateType = {
    count: number | string
    minValue: number
    maxValue: number
}
const initialState: InitialStateType = {
    count: 0,
    minValue: 0,
    maxValue: 0
}

type ActionType =
    ReturnType<typeof setCounter>
    | ReturnType<typeof resCounter>
    | ReturnType<typeof setMin>
    | ReturnType<typeof setMax>

export const counterReducer = (state = initialState, action: ActionType): InitialStateType=> {
    switch (action.type){
        case INCREMENT_COUNT:
            return {
                ...state,
                count: action.value
            }
        case RESET_COUNT:
            return {
                ...state,
                count: action.value
            }
        case SET_MIN:
            return {
                ...state,
                minValue: action.minValue
            }
        case SET_MAX:
            return {
                ...state,
                maxValue: action.maxValue
            }
        default:
            return state
    }
}

export const setCounter = (value: number | string) => {
    return {
        type: INCREMENT_COUNT,
        value
    } as const
}

export const resCounter = (value: number) => {
    return {
        type: RESET_COUNT,
        value
    } as const
}

export const setMin = (minValue: number) => {
    return {
        type: SET_MIN,
        minValue
    } as const
}
export const setMax = (maxValue: number) => {
    return {
        type: SET_MAX,
        maxValue
    } as const
}