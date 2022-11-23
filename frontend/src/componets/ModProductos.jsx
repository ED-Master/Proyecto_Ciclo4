import productos from "../productos.json";
import imagen from "../img/logo192.png";
import "../styles/ModProductos.css"
import { useProducts } from "../context/ProductContainer";
import { Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

// A D M I N I S T R A D O R

export function ModProductos(){
    const { setProducts, products, createProduct} = useProducts();

    const navigate = useNavigate();

    if(productos.length === 0){
        return(
            <div>
                <h1>There aren't products;</h1>
            </div>
        )
    }
 
    return(
        <div className="container">
        <h4>MODIFICAR PRODUCTOS</h4>
        <div  className="container-ModPr">
            <div className="Lista-prod">
                <h6>Productos</h6>
                <ol>
                    {products.map(p =>(
                        <li key={p._id}><a onClick={() => console.log(p.descrip)}>{p.nombre}</a></li>
                    ))}
                </ol>
            </div>
            <div className="imagen">
                <img src={imagen} alt="" />
            </div>
            <div className="form">
                <Formik
                    initialValues={{
                        nombre: "",
                        descrip: "",
                        precio: "",
                        stock: "",
                    }}
                    validationSchema = {yup.object({
                        nombre: yup.string().required("Nombre es requerido"),
                        descrip: yup.string().required("Descripción es requerido"),
                        precio: yup.number().required("Precio es requerido"),
                        stock: yup.number().required("Stock es requerido"),
                    })}
                    onSubmit = {async (values, actions) => {
                        await createProduct(values);
                        navigate("/");
                    }}
                >   
                    {
                        ({handleSubmit}) => (
                            <Form onSubmit={handleSubmit}>
                                <Field name="nombre" placeholder="Nombre" /> <br />
                                <Field name="descrip" placeholder="Descripción" /><br />
                                <Field name="precio" placeholder="Precio" /><br />
                                <Field name="stock" placeholder="Stock" /><br />
                                <button type="submit">Click</button>
                            </Form>
                    )
                    }
                </Formik>
            </div>
        </div>
        </div>
    );
}