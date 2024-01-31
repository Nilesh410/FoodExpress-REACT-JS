//import { sample_foods, sample_tags } from "../data";
//export all data of food data.js file
import axios from "axios";
export const getAll=async () =>{
    const { data }=await axios.get('/api/foods');
    return data;
};

export const search=async (searchTerm)=>
//    sample_foods.filter(item=>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
    {
        const { data }=await axios.get('/api/foods/search/'+searchTerm);
        return data;
    };

export const getAllTags=async ()=>
    //sample_tags;
    {
        const { data }=await axios.get('/api/foods/tags');
        return data;
    };

export const getAllByTag = async tag => {
    if (tag==='All') return getAll();
    //return sample_foods.filter(item=>item.tags?.includes(tag));
    const { data }=await axios.get('/api/foods/tag/'+tag);
    return data;
};

export const getById= async foodId =>
    //sample_foods.find(item=> item.id===foodId);
    {
        const { data }=await axios.get('/api/foods/'+foodId);
        return data;
    }

