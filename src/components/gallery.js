import { Image, Card } from '@shopify/polaris';

const Gallery = props => {
    const results = props.data;
    let images;
    // map variables to each item in fetched image array and return image component
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
            </Card>;
        });
    }
    return <div> {images} </div>;
};

export default Gallery;