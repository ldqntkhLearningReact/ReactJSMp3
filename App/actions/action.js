import {ADD_ITEM, EDIT_ITEM, REMOVE_ITEM, IS_ADDING} from './actionType.js';

/**
 * funtion add item
 */
const AddItem = (item)=> {
    return {
        type : ADD_ITEM,
        item
    }
}

/**
 * function remove item at index
 */
const RemoveItem = (index) => {
    return {
        type : REMOVE_ITEM,
        index
    }
}

/**
 * function edit item
 */
const EditItem = (item, index) => {
    return {
        type : EDIT_ITEM,
        item,
        index
    }
}

/**
 * function edit adding
 */
const isAdding = () => {
    return {
        type : IS_ADDING
    }
}

export {AddItem, EditItem, RemoveItem, isAdding};
