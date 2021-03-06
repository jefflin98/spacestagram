import React, { useContext, useEffect } from "react";
import { Context } from "../context/context";
import Gallery from "./gallery";
import Loader from "./loader";

const Container = (q) => {
    const { images, loading, runSearch } = useContext(Context);
    useEffect(() => {
        runSearch(q);
        // eslint-disable-next-line
    }, [q]);

    // console.log(q.viewLiked);
    return (
        <div className="photo-container">
            {loading ? <Loader /> : <Gallery data={images} viewLiked={q.viewLiked} />}
        </div>
    );
};

export default Container;