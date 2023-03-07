import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
`

function CartModal({ name, show, handleClose }) {
  const navigate = useNavigate();

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <StyledDiv>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontWeight: "bold" }}>장바구니 담기</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {`${name}을 장바구니에 담았습니다.`}<br />
          장바구니로 이동하시겠습니까?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            쇼핑 계속하기
          </Button>
          <Button variant="primary" onClick={() => { navigate('/cart') }}>장바구니로 이동하기</Button>
        </Modal.Footer>
      </StyledDiv>
    </Modal>
  );
}

export default CartModal;