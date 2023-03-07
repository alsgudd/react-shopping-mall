import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';

const StyledDiv = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
`

function BuyButton({name}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="dark" onClick={handleShow}>
                Buy Now
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <StyledDiv>
                    <Modal.Header closeButton>
                        <Modal.Title styled={{fontWeight: "bold"}}>구매 완료</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        구매가 정상적으로 완료되었습니다. <br />
                        {`귀하가 구매한 상품은 ${name}입니다.`}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            닫기
                        </Button>
                    </Modal.Footer>
                </StyledDiv>
            </Modal>
        </>
    );
}

export default BuyButton;