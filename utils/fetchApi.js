// import axios from "axios";

// export const baseUrl = 'https://spotify23.p.rapidapi.com';

// export const fetchApi = async (url) => {
//   const { data } = await axios.get((url), {
//     params: {id: '6ifbujr7hgpu5mqie68473zgx', playlistLimit: '10', artistLimit: '10'},
//     headers: {
//       'x-rapidapi-host': 'bayut.p.rapidapi.com',
//       'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY ,
//     },
//   });
    
//   return data;
// }

export const options = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/user_profile/',
  params: {id: '6ifbujr7hgpu5mqie68473zgx', playlistLimit: '10', artistLimit: '10'},
  headers: {
    'X-RapidAPI-Key': 'c7d1a728c2msh9230e16f814ef0bp176af4jsna038481202cc',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
};