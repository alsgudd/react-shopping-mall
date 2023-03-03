import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react'
import styles from "./Slide.module.css";

function Slide() {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className={`d-block ${styles.bg_img}`}
                    src="http://cdn015.negagea.net/wherehouse/2023/main/230227_1.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={`d-block ${styles.bg_img}`}
                    src="https://images.unsplash.com/photo-1596609548086-85bbf8ddb6b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={`d-block ${styles.bg_img}`}
                    src="https://wallpapershome.com/images/pages/ico_h/18463.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Slide;