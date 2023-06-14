import Product from "./Product";

function Products() {
    let IphonePrice = 950000
    let MacbookPrice = 2500000
    let WatchPrice = 300000

    IphonePrice = IphonePrice.toLocaleString()
    MacbookPrice = MacbookPrice.toLocaleString()
    WatchPrice = WatchPrice.toLocaleString()

    const products = [
        {
            Name: "아이폰",
            Price: IphonePrice+'원',
            Category: "휴대폰"
        },
        {
            Name: "맥북 프로",
            Price: MacbookPrice + '원',
            Category: "컴퓨터"
        },
        {
            Name: "스마트워치",
            Price: WatchPrice + '원',
            Category: "액세서리"
        }
    ]
    return (
        <div>
            <Product name={products[0].Name} price={products[0].Price} category={products[0].Category}/>
            <Product name={products[1].Name} price={products[1].Price} category={products[1].Category}/>
            <Product name={products[2].Name} price={products[2].Price} category={products[2].Category}/>

        </div>)
}

export default Products