import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from './Sidebar.module.css';

function Sidebar() {
    const navigate = useNavigate();

    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={1}>
                    <Nav className="flex-column p-3">
                        <Nav.Item>
                            <Nav.Link onClick={() => { navigate('/tab/all') }} className={styles.tab_text}>All</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={() => { navigate('/tab/top') }} className={styles.tab_text}>Top</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={() => { navigate('/tab/bottom') }} className={styles.tab_text}>Bottom</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={() => { navigate('/tab/acc') }} className={styles.tab_text}>Acc</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Outlet></Outlet>
            </Row>
        </Tab.Container>
    );
}

export default Sidebar;