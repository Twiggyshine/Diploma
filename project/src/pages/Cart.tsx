import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { Item } from "../data/types";
import { removeItem } from "../redux/cartSlice";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Cart: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  
  const dispatch = useDispatch();

  const handleRemoveItem = (id: number) => {
    dispatch(removeItem(id));
  };


return (
  <div>
    <div className="wrapper">
  <h1 style={{ textAlign: "center" }}>Shopping Cart</h1>
  
  <div className="cart-list" style={{ display: "flex", flexWrap: "wrap", gap : "20px"}}>
     {items.map((item: Item) =>  (
      <Card key={item.id} style={{ width: "18rem", margin: "10px" }}>
        <Card.Img
          variant="top"
          src={`/public/carousel/${item.image}`}
          alt={item.name}
          width={"300"}
        />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>Price: ${item.price}</Card.Text>
          <Button variant="danger" className="cart__button-delete" onClick={() => handleRemoveItem(item.id)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    ))}
  </div>

</div>
</div>
);
};

export default Cart;