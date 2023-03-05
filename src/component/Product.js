import styles from './Product.module.css';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Product(props) {
    const product = props.product;
    const navigate = useNavigate();
    const id = product.id;

    return (
        <Col md={4}>
            <div className={styles.product_itembox}>
                <img src={product.imgurl}
                    alt='product_all_img'
                    className={styles.product_img}
                    onClick={() => {
                        navigate(`/product/${id}`)
                    }}
                />
                <p className={`p-2 ${styles.product_text}`}>
                    <span className={styles.product_name}
                        onClick={() => { navigate(`/product/${id}`) }}>{product.name}
                    </span><br />{`${Number(product.price).toLocaleString()} KRW`}
                </p>
            </div>
        </Col>
    )
}

export default Product;