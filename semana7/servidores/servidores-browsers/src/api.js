import React from 'react';
import axios from 'axios'


const api = axios.create({

    baseURL:"http://api.tvmaze.com/shows/1/episodes"
})


    
  
export default api;