import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DetailProduct from "../component/DetailProduct";

function Detail() {
    const { id } = useParams();
    const [detail, setDetail] = useState({});
    const getDetail = async () => {
        axios.get(`https://raw.githubusercontent.com/alsgudd/alsgudd.github.io/main/datasJSON/detailpgJSON/id${id}.json`)
            .then((result) => {
                setDetail(result.data);
            })
            .catch(() => {
                return (
                    <h1>Error 404! Unable to get server!</h1>
                );
            })
    }
    useEffect(() => {
        getDetail();
    }, [])
    return (
        <DetailProduct detail={detail} />
    )

}
export default Detail;