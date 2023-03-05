import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Slide from '../component/Slide';
import styles from './Home.module.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const getData = async () => {
        axios.get('https://raw.githubusercontent.com/alsgudd/alsgudd.github.io/main/datasJSON/Mainpage.json')
            .then((result) => {
                setData(result.data);
            })
            .catch(() => {
                return (
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
                        data && data.map((a, i) => {
                            return (
                                <Col key={i} md={3} sm={6}>
                                    <div>
                                        <img src={a.imgurl}
                                            className={styles.home_mainImage}
                                            onClick={() => { navigate(`/product/${a.id}`) }}
                                            alt='product_main_img' />
                                        <p className='p-2' style={{ textAlign: 'center' }}>
                                            <span className={styles.product_name}
                                                onClick={() => { navigate(`/product/${a.id}`) }}>{a.name}</span><br />
                                            {`${Number(a.price).toLocaleString()} KRW`}
                                        </p>
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