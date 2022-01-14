import React, { createContext, useState } from "react";
import axios from "axios";
import { apiKey } from "../api/config";
export const Context = createContext();

const ContextProvider = props => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const runSearch = dates => {
        let year = dates.dates.start.getFullYear();
        let month = dates.dates.start.getMonth() + 1;
        let date = dates.dates.start.getDate();
        axios
            .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${year}-${month}-${date}&api_key=${apiKey}`)
            .then(response => {
                console.log(response.data.photos);
                setImages(response.data.photos);
                setLoading(false);
            })
            .catch(error => {
                console.log(
                    "Encountered an error with fetching and parsing data",
                    error
                );
            });
    };
    return (
        <Context.Provider value={{ images, loading, runSearch }}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;