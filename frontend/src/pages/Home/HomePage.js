import React, { useEffect } from 'react'
import { useReducer } from 'react';
import Thumbnails from '../../components/Thumnails/Thumbnails';
import { getAll } from '../../services/foodService';
//reducer
const initialState = { foods: []};
const reducer = (state, action) => {
    switch (action.type) {
      case 'FOODS_LOADED':
        return { ...state, foods: action.payload };
      
      default:
        return state;
    }
  };
export default function HomePage() {
  
    const [state, dispatch] = useReducer(reducer, initialState);  
    const {foods}=state;

    useEffect(()=>{
      getAll().then(foods=>dispatch({type:'FOODS_LOADED',payload:foods}));
    },[]);
    return (
      <>
        <Thumbnails foods={foods}/>
      </>
    );
}
