import styles from './Cart.module.css';
import { Table, Container } from 'react-bootstrap';


function Cart() {
    if (localStorage.cart == undefined) {
        return (
            <div>장바구니가 비었음.</div>
        )
    } else {
        var cart = JSON.parse(localStorage.cart);
        var totalPrice = 0;
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
                        {
                            cart.map((cart, index) => {
                                //${Number(data.price).toLocaleString()} KRW
                                totalPrice += cart.price * cart.quantity;
                                return (
                                    <tr key={index}>
                                        <td><input type={'checkbox'} /></td>
                                        <td ><img className={styles.cart_img} src={cart.imgurl[0]} /></td>
                                        <td>{cart.name}</td>
                                        <td>{cart.quantity}</td>
                                        <td>{`${Number(cart.price * cart.quantity).toLocaleString()} KRW`}</td>
                                        <td>무료</td>
                                    </tr>
                                )
                            })
                        }
                        <tr>
                            <td colSpan={3}>
                                <input type={'checkbox'} />{' '}
                                <button className={styles.cart_btn}>선택상품 삭제</button>
                            </td>
                            <td></td>
                            <td colSpan={2}>{`Total Price: ${Number(totalPrice).toLocaleString()} KRW`}</td>
                        </tr>
                    </tbody>
                </Table>
                <div className={styles.cart_mainbtn}>
                    <button className={styles.cart_}>쇼핑 계속하기</button>
                    <button class="cart__bigorderbtn right">주문하기</button>
                </div>
            </Container>
        );
    }
}

export default Cart;