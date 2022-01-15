import React, { useState } from "react";
import { Image, Card, Button, DisplayText } from '@shopify/polaris';

const Gallery = props => {
    var results = props.data;
    const viewLiked = props.viewLiked
    const [likedImages, setLikedImages] = useState(new Set());
    let images;

    if (viewLiked) {
        results = Array.from(likedImages);
    }

    if (results.length > 0) {
        images = results.map(image => {
            let id = image.id;
            let rover = image.rover.name;
            let camera = image.camera.full_name;
            let url = image.img_src;
            let title = rover + ', ' + camera
            let date = image.earth_date;

            return <Card sectioned key={id} >
                <Image src={url} key={id} alt={title} width={"100%"} />
                <p> {rover} - {camera} </p>
                <p> {date} </p>
                <Button id={id} primary={likedImages.has(image)} onClick={() => {
                    if (likedImages.has(image)) {
                        setLikedImages(prev => {
                            const cur = new Set(prev);
                            cur.delete(image);
                            return cur;
                        });
                    } else {
                        setLikedImages(prev => {
                            const cur = new Set(prev);
                            cur.add(image)
                            return cur;
                        });
                    };
                    // console.log(likedImages);
                }}> Like </Button>
            </Card >;
        });
    } else {
        images = <center><DisplayText size="small"> No Image </DisplayText></center>
    }
    return <div> {images} </div>;
};

export default Gallery;