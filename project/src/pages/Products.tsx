import SHOP_DATA from "../data/shoes.data";

const Products = () => {
  const nikeItems = SHOP_DATA.nike.items;

  return (
    <div>
      <h1>Products</h1>
      <div className="product-list">
        {/* Мапим данные о товарах для отображения */}
        {nikeItems.map((item) => (
          <div key={item.id} className="product">
            <img
              src={`/public/carousel/${item.image}`}
              alt={item.name}
              className="product-img"
            />
            <h2>{item.name}</h2>
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
