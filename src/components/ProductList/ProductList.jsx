import ProductListItem from "../ProductListItem/ProductListItem";

export default function ProductList({ productItems, isPaid }) {
    const products = productItems.map( product =>
        <ProductListItem 
        key={product._id}
        productItem={product}
        isPaid={isPaid}
        />
        );
        return (
            <main className="ProductList">
                {products}
            </main>
        )
}