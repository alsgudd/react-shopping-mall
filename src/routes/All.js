import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import styles from './All.module.css';
import { useNavigate } from "react-router-dom";

function All() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const getData = async () => {
    axios.get('https://raw.githubusercontent.com/alsgudd/alsgudd.github.io/main/datasJSON/Allpage.json')
      .then((result) => {
        setData(result.data);
      })
      .catch(() => {
        return (
          <h1>Error 404! Cannot find Server !</h1>
        );
      })
  }
  useEffect(() => {
    getData();
  }, [])

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={1}>
          <Nav className="flex-column p-3">
            <Nav.Item>
              <Nav.Link onClick={()=>{ navigate('/all') }} className={styles.all_tab_text}>All</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={()=>{ navigate('/top') }} className={styles.all_tab_text}>Top</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={()=>{ navigate('/bottom') }} className={styles.all_tab_text}>Bottom</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={()=>{ navigate('/acc') }} className={styles.all_tab_text}>Acc</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={11}>
          <Container>
            <Row>
              {
                data.map((a, i) => {
                  return (
                    <Col key={i} md={4}>
                      <div className={styles.all_itembox}>
                        <img src={a.imgurl}
                          alt='product_all_img'
                          className={styles.all_img} />
                        <p className={`p-2 ${styles.all_text}`}>{a.name}<br />{a.price}</p>
                      </div>
                    </Col>
                  )
                })
              }
            </Row>
          </Container>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default All;