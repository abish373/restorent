export const foodItems = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res([
        {
          id: 1,
          name: "Pizza",
          price: "10.00",
          img: "https://st.depositphotos.com/1003814/5052/i/950/depositphotos_50523105-stock-photo-pizza-with-tomatoes.jpg",
          description:
            "Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven.",
        },
        {
          id: 2,
          name: "Burger",
          price: "10.00",
          description:
            "A burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.",
        },
        {
          id: 3,
          name: "Pasta",
          price: "10.00",
          description:
            "Pasta is an Italian dish consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven.",
        },
        {
          id: 4,
          name: "Ravioli",
          price: "10.00",
          description:
            "Ravioli are a type of pasta dish that consists of a filled pasta dish, such as macaroni, with a sauce made from a variety of ingredients, including eggs, cheese, meat, and vegetables.",
        },
        {
          id: 5,
          name: "Chicken",
          price: "10.00",
          description:
            "Chicken is a food produced by roasting the ovary of the chicken. It is made from the meat of the chicken, which is the result of co-producting the ovary with the egg yolks and the egg white.",
        },
        {
          id: 6,
          name: "Fish",
          price: "10.00",
          description:
            "Fish is a food produced by roasting the ovary of the chicken. It is made from the meat of the chicken, which is the result of co-producting the ovary with the egg yolks and the egg white.",
        },
        {
          id: 7,
          name: "French Fries",
          price: "10.00",
          description:
            "French fries are a type of food often served in a bag or container. They are typically eaten with chips or salad. In the United States and Canada, they are typically eaten with hamburger, hot dog, or fries.",
        },
        {
          id: 8,
          name: "Salad",
          price: "10.00",
          description:
            "Salad is a food produced by roasting the ovary of the chicken. It is made from the meat of the chicken, which is the result of co-producting the ovary with the egg yolks and the egg white.",
        },
        {
          id: 9,
          name: "Soup",
          price: "10.00",
          description:
            "Soup is a food produced by roasting the ovary of the chicken. It is made from the meat of the chicken, which is the result of co-producting the ovary with the egg yolks and the egg white.",
        },
      ]);
    }, 1000);
  });
};
