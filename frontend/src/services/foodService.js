import { sample_foods } from "../data";
//export all data of food data.js file
export const getAll=async () =>sample_foods;

export const search=async (searchTerm)=>
   sample_foods.filter(item=>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );