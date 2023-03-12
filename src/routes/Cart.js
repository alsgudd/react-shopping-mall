import styles from './Cart.module.css';
import { Table, Container, Button, Modal } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import BuyModal from '../component/BuyModal';


function Cart() {
    var localcart = localStorage.cart;
    const [show, setShow] = useState(false);
    const [checkItems, setCheckItems] = useState([]);
    const [cart, setCart] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    /* const handleClose = (index) => {
        let copy = [...show];
        copy[index] = false;
        setShow(copy);
    }
    const handleShow = (index) => {
        let copy = [...show];
        copy[index] = true;
        setShow(copy);
    } */
    const resetCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
    }
    const filterCart = () => {
        let copy = [...cart];
        for (var i = 0; i < copy.length; i++) {
            for (var j = 0; j < checkItems.length; j++) {
                if (copy[i] && copy[i].id === checkItems[j]) {
                    copy.splice(i, 1);
                    i--;
                }
            }
        }
        console.log(copy);
        setCart(copy);
        localStorage.setItem('cart', JSON.stringify(copy));
    }


    useEffect(() => {
        setCart(localcart);
    }, [])

    if (localStorage.cart == undefined) {
        return (
            <Container className={`mt-5 ${styles.main_container}`}>
                <h2>Cart</h2>
                <Table>
                    <thead>
                        <tr>
                            <th><input type={'checkbox'} /></th>
                            <th colSpan={2}>상품정보</th>
                            <th>수량</th>
                            <th>가격</th>
                            <th>배송비</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th colSpan={6} className={styles.empty}>장바구니가 비었습니다.</th>
                        </tr>                      
                    </tbody>
                </Table>
            </Container>
        )
    } else {
        localcart = JSON.parse(localcart);
        var totalPrice = 0;
        // 체크박스 단일 선택
        const handleSingleCheck = (checked, id) => {
            if (checked) {
                setCheckItems(prev => [...prev, id]);
            } else {
                setCheckItems(checkItems.filter((element) => element !== id));
            }
        }
        // 체크박스 전체 선택
        const handleAllCheck = (checked) => {
            if (checked) {
                const idArray = [];
                cart.forEach((element) => idArray.push(element.id));
                setCheckItems(idArray);
            }
            else {
                setCheckItems([]);
            }
        }
        return (
            <Container className={`mt-5 ${styles.main_container}`}>
                <h2>Cart</h2>
                <Table>
                    <thead>
                        <tr>
                            <th><input type={'checkbox'}
                                onChange={(e) => handleAllCheck(e.target.checked)}
                                checked={checkItems.length === cart.length ? true : false} /></th>
                            <th colSpan={2}>상품정보</th>
                            <th>수량</th>
                            <th>가격</th>
                            <th>배송비</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((cart, index) => {
                                //${Number(data.price).toLocaleString()} KRW
                                totalPrice += cart.price * cart.quantity;
                                return (
                                    <tr key={index}>
                                        <td><input type={'checkbox'}
                                            onChange={(e) => handleSingleCheck(e.target.checked, cart.id)}
                                            checked={checkItems.includes(cart.id) ? true : false}
                                        /></td>
                                        <td ><img className={styles.cart_img} src={cart.imgurl[0]} /></td>
                                        <td>{cart.name}</td>
                                        <td>
                                            {cart.quantity}
                                        </td>
                                        <td>{`${Number(cart.price * cart.quantity).toLocaleString()} KRW`}</td>
                                        <td>무료</td>
                                    </tr>
                                )
                            })
                        }
                        <tr>
                            <td colSpan={3}>
                                <button
                                    className={styles.cart_btn}
                                    onClick={filterCart}>선택상품 삭제</button>
                            </td>
                            <td></td>
                            <td colSpan={2}>{`Total Price: ${Number(totalPrice).toLocaleString()} KRW`}</td>
                        </tr>
                    </tbody>
                </Table>
                <div className={styles.center}>
                    <Button variant="secondary"
                        className={`${styles.cart_btn} ${styles.position}`}
                        onClick={() => { handleShow(); filterCart(); }}
                    >선택상품 주문하기</Button>
                    <BuyModal show={show} handleClose={ handleClose }/>
                    <Button variant="secondary"
                        className={`${styles.cart_btn} ${styles.position}`}
                        onClick={() => { handleShow(); resetCart(); }}>전체상품 주문하기</Button>
                    <BuyModal show={show} handleClose={ handleClose }/>
                    {
                        show == true ? 
                        <BuyModal show={show} handleClose={handleClose} /> :
                        null
                    }
                                     
                </div>
            </Container>
        );
    }
}

export default Cart;