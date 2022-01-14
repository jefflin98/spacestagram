import React, { useContext, useEffect } from "react";
import { Context } from "../context/context";
import Gallery from "./gallery";
import Loader from "./loader";

const Container = (dates) => {
    const { images, loading, runSearch } = useContext(Context);
    useEffect(() => {
        runSearch(dates);
        // eslint-disable-next-line
    }, [dates]);

    return (
        <div className="photo-container">
            {loading ? <Loader /> : <Gallery data={images} />}
        </div>
    );
};

export default Container;