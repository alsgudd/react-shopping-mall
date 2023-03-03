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
                    src="http://cdn015.negagea.net/wherehouse/2023/main/230227_2.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={`d-block ${styles.bg_img}`}
                    src="https://static.wixstatic.com/media/f20312_f68af1efdf1a48e4a89f60e9f5ce1242~mv2.jpg/v1/fill/w_1903,h_896,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f20312_f68af1efdf1a48e4a89f60e9f5ce1242~mv2.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Slide;