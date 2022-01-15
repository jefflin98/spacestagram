import React, { useState } from "react";
import { Image, Card, Button, DisplayText } from '@shopify/polaris';

function isLiked(set, target) {
    for (let elem of set) {
        if (elem.id == target.id) {
            return true
        }
    }
    return false
}

const Gallery = props => {
    var results = props.data;
    const viewLiked = props.viewLiked
    var [likedImages, setLikedImages] = useState(new Set(JSON.parse(localStorage.getItem("likedImages"))));
    let images;

    localStorage.setItem("likedImages", JSON.stringify(Array.from(likedImages)));

    console.log(likedImages);

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
            let liked = isLiked(likedImages, image);
            // likedImages.has(image);

            return <Card sectioned key={id} >
                <Image src={url} key={id} alt={title} width={"100%"} />
                <DisplayText size="small"> {rover} - {camera} </DisplayText>
                <p> {date} </p>
                <Button id={id} primary={liked} onClick={() => {
                    if (liked) {
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
                }}> {liked ? 'Unlike' : 'Like'} </Button>
            </Card >;
        });
    } else {
        images = <center><DisplayText size="small"> No Image </DisplayText></center>
    }
    return <div> {images} </div>;
};

export default Gallery;