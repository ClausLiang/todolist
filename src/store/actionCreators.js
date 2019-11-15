import {INIT_LIST,ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM} from "./actionTypes";
import axios from 'axios'

export const getInputChangeAction = (value) =>({
    type: CHANGE_INPUT_VALUE,
    value
})
export const addItemAction = () =>({
    type: ADD_TODO_ITEM,
})
export const deleteItemAction = (index) =>({
    type: DELETE_TODO_ITEM,
    index
})
export const initListAction = (data) => ({
    type: INIT_LIST,
    data
})
export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/data.json').then(res=>{
            const action = initListAction(res.data)
            dispatch(action)
        })
    }
}

