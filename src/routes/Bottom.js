import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Product from "../component/Product";

function Bottom() {
  const [data, setData] = useState([]);
  const getData = async () => {
    axios.get('https://raw.githubusercontent.com/alsgudd/alsgudd.github.io/main/datasJSON/Bottompage.json')
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
    <Col sm={11}>
      <Container>
        <Row>
          {
            data.map((a, i) => {
              return (
                <Product key={i} product={data[i]}/>
              )
            })
          }
        </Row>
      </Container>
    </Col>
  );
}

export default Bottom;