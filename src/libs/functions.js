export const updateItem = (state, payload) =>{
    const {id, field, value} = payload;
    const item = state.find((piece) =>piece?.id == id);
    if(item){
        item[field] = value
    }
}

export const removeItem = (state, id) =>{
    return state?.filter(item => item?.id != id)
}