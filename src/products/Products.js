import { useEffect, useState } from "react";
import { foodItems } from "../service/api";

const Products = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    foodItems().then((res) => {
      setFood(res);
    });
  }, []);

  return (
    <div>
      {food.map((element) => {
        return (
          <div key={element.id} className="container">
            <img src={element.img} alt={element.name} />
            <div className="name-price">
              <h3>{element.name}</h3>
              <span>{element.price}</span>
            </div>
            <div>
              <p>{element.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
