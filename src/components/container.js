import React, { useContext, useEffect } from "react";
import { Context } from "../context/context";
import Gallery from "./gallery";
import Loader from "./loader";

const Container = () => {
    const { images, loading, runSearch } = useContext(Context);
    useEffect(() => {
        runSearch();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="photo-container">
            {loading ? <Loader /> : <Gallery data={images} />}
        </div>
    );
};

export default Container;