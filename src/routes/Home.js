import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Slide from '../component/Slide';
import styles from './Home.module.css';
import { useEffect, useState } from 'react';


function Home() {
    const [data, setData] = useState([]);
    const getData = async () => {
        axios.get('https://raw.githubusercontent.com/alsgudd/alsgudd.github.io/main/datasJSON/Mainpage.json')
            .then((result) => {
                setData(result.data);
            })
            .catch(() => {
                return(
                    <h2>Error 404! Cannot find server</h2>
                )
            })
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <Slide />
            <Container>
                <div className={styles.home_23SS}>
                    <h2>23S/S SPRING NEW ARRIVAL</h2>
                </div>
                <Row>
                    {
                        data.map((a, i) => {
                            return (
                                <Col key={i} md={3} sm={6}>
                                    <div>
                                        <img src={a.imgurl} 
                                        className={styles.home_mainImage}
                                        alt='product_main_img' />
                                        <p className='p-2'>{a.name}<br />{a.price}</p>
                                    </div>
                                </Col>
                            )
                        })
                    }

                </Row>
            </Container>



        </div>

    )
}

export default Home;