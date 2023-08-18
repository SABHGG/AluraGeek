import Header from "../components/Header";
import Producto from "../components/Producto";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

function ProductId() {
    const { id } = useParams();
    return (
        <div className="flex flex-col items-center justify-center mx-auto font-sans">
            <Header />
            <Producto id={id} />
            <Footer />
        </div>
    );
}

export default ProductId;