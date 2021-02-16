export const ADD_FEATURE = "ADD_FEATURE";

export const addFeature = (name, price) => {
    return {type: "ADD_FEATURE", payload: {name: name, price: price}}
}