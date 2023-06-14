import Header from "./Header";

function Product(props){
    return(
        <div>
            <Header/>
            <p>Name: {props.name}</p>
            <p>Price: {props.price}</p>
            <p>Category: {props.category}</p>
        </div>
    )
}
export default Product