import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';

const StyledDiv = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
`

function BuyModal({ show, handleClose }) {


    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <StyledDiv>
                <Modal.Header closeButton>
                    <Modal.Title styled={{ fontWeight: "bold" }}>구매 완료</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    구매가 정상적으로 완료되었습니다. <br />
                    이용해주셔서 감사합니다.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        닫기
                    </Button>
                </Modal.Footer>
            </StyledDiv>
        </Modal>
    );
}

export default BuyModal;