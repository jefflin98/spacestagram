import React, { useState } from "react";
import { Image, Card, Button } from '@shopify/polaris';

const Gallery = props => {
    const results = props.data;
    const [likedImages, setLikedImages] = useState(new Set());

    let images;
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
                <p> Rover: {rover} </p>
                <p> Camera: {camera} </p>
                <p> Date: {date} </p>
                <Button id={id} primary={likedImages.has(id)} onClick={() => {
                    if (likedImages.has(id)) {
                        setLikedImages(prev => {
                            const cur = new Set(prev);
                            cur.delete(id);
                            return cur;
                        });
                    } else {
                        setLikedImages(prev => {
                            const cur = new Set(prev);
                            cur.add(id)
                            return cur;
                        });
                    };
                    console.log(likedImages);
                }}> Like </Button>
            </Card >;
        });
    }
    return <div> {images} </div>;
};

export default Gallery;