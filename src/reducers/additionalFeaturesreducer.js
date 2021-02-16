import { ADD_FEATURE } from './../actions/AdditionalFeaturesActions';

export const initialState = {
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
}

const additionalFeaturesReducer = (state = initialState, action) => {
  console.log("action type:", action.type);
  console.log("action payload:", action.payload);
  switch(action.type){
    case ADD_FEATURE: 
      return({
        ...state,
        additionalFeatures: [...state.additionalFeatures, {name: action.payload.name, price: action.payload.price}]
      })
    default:
      return state;
  }
}

export default additionalFeaturesReducer;