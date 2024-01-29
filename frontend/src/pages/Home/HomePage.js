import React, { useEffect } from 'react'
import { useReducer } from 'react';
import Thumbnails from '../../components/Thumnails/Thumbnails';
import { getAll } from '../../services/foodService';
import { useParams } from 'react-router-dom';
import { search } from '../../services/foodService';
import Search from '../../components/Search/Search';
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
    const {searchTerm}=useParams();

    useEffect(()=>{
      const loadFoods=searchTerm? search(searchTerm):getAll();
      loadFoods.then(foods=>dispatch({type:'FOODS_LOADED',payload:foods}));
    },[searchTerm]);
    return (
      <>
        <Search />
        <Thumbnails foods={foods}/>
      </>
    );
}
