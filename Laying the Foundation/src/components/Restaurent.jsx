import { useParams } from "react-router"

const Restaurent = () => {
    const { resId } = useParams();


    return <div>Restaurent:{resId}</div>
}

export default Restaurent;