import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Nav, Button } from "react-bootstrap";
import styles from './Detail.module.css';
import CartButton from "../component/CartButton";
import BuyButton from "../component/BuyButton";


function Detail() {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [tab, setTab] = useState(0);
    const getDetail = useCallback(async () => {
        axios.get(`https://raw.githubusercontent.com/alsgudd/alsgudd.github.io/main/datasJSON/detailpgJSON/id${id}.json`)
            .then((result) => {
                setData(result.data);
            })
            .catch(() => {
                return (
                    <h1>Error 404! Unable to get server!</h1>
                );
            })
    })

    useEffect(() => {
        getDetail();
    }, [])
    console.log(data);
    return (
        <Container className={styles.main_container}>
            <Row>
                <Col md={3}>
                    <div className={styles.text_container}>
                        <h1>MDR</h1>
                        <h4>{data.name}</h4>
                        <ul className={styles.list_container}>
                            {
                                data.detail && data.detail.map((a, index) => {
                                    return (
                                        <li key={index} className={styles.list}>{a}</li>
                                    )
                                })
                            }
                            <li className={styles.list}>laundry type : cold water hand wash / dry clean</li>
                            <li className={styles.list}>model is W: H169 W53 (M size)</li>
                            <li className={styles.list}>made in china / made in korea</li>
                        </ul>
                    </div>
                </Col>
                <Col md={5}>
                    {
                        data.imgurl && data.imgurl.map((a, i) => {
                            return (
                                <div key={i}>
                                    <img src={a}
                                        className={styles.img}
                                        alt='product_img' />
                                </div>
                            )
                        })
                    }
                </Col>
                <Col md={4}>
                    <div className={styles.right}>
                        <h4 className={styles.price}>{`PRICE: ${Number(data.price).toLocaleString()} KRW`}</h4>
                        <BuyButton name={data.name}/>{' '}
                        <CartButton id={data.id} name={data.name} price={data.price} imgurl={data.imgurl}/>
                        <Nav variant="tabs" defaultActiveKey="link0" className={styles.navs}>
                            <Nav.Item>
                                <Nav.Link onClick={() => { setTab(0) }} eventKey="link0">SIZE GUIDE</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={() => { setTab(1) }} eventKey="link1">CAUTION</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={() => { setTab(2) }} eventKey="link2">DELIVERY</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <TabContent tab={tab} />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

function TabContent({ tab }) {
    if (tab === 0) {
        return (
            <div className="p-2">
                <p className={styles.tab_text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus fuga repudiandae, officiis odio natus possimus. Ducimus aut soluta adipisci deserunt repellendus dolores itaque, quo eaque animi voluptates cupiditate illo quasi?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus fuga repudiandae, officiis odio natus possimus. Ducimus aut soluta adipisci deserunt repellendus dolores itaque, quo eaque animi voluptates cupiditate illo quasi?
                </p>
            </div>
        )
    }
    else if (tab === 1) {
        return (
            <div className="p-2">
                <p className={styles.tab_text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus fuga repudiandae, officiis odio natus possimus. Ducimus aut soluta adipisci deserunt repellendus dolores itaque, quo eaque animi voluptates cupiditate illo quasi?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus fuga repudiandae, officiis odio natus possimus. Ducimus aut soluta adipisci deserunt repellendus dolores itaque, quo eaque animi voluptates cupiditate illo quasi?
                </p>
            </div>
        )
    }
    else if (tab === 2) {
        return (
            <div className="p-2">
                <p className={styles.tab_text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus fuga repudiandae, officiis odio natus possimus. Ducimus aut soluta adipisci deserunt repellendus dolores itaque, quo eaque animi voluptates cupiditate illo quasi?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus fuga repudiandae, officiis odio natus possimus. Ducimus aut soluta adipisci deserunt repellendus dolores itaque, quo eaque animi voluptates cupiditate illo quasi?
                </p>
            </div>
        )
    }
}
export default Detail;