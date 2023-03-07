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

function CartButton({ name, price, imgurl }) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={() => {
        if (localStorage.getItem('cart') != null) {
          var temp = JSON.parse(localStorage.cart);
          var findIndex = temp.findIndex((element) => element.name === name);
          if (findIndex != -1) {
            //해당 item이 이미 존재
            temp[findIndex].quantity++;
            localStorage.setItem('cart', JSON.stringify(temp));
          } else {
            //item이 존재하지 않음 (새로 만들어야함.)
            var pushitem = {
              name: name,
              price: price,
              quantity: 1,
              imgurl: imgurl
            }
            temp.push(pushitem);
            localStorage.setItem('cart', JSON.stringify(temp));
          }
        } else {
          var cart = [{
            name: name,
            price: price,
            quantity: 1,
            imgurl: imgurl
          }]
          localStorage.setItem('cart', JSON.stringify(cart));
        }
        handleShow();
      }}>
        Add to Cart
      </Button>

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
    </>
  );
}

export default CartButton;