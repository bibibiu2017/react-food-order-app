import MealsData from "../../Data/MealsData";

const initialState = {
  cartItems: [],
  totalItems: 0,
  totalAmount: 0,
};

const initializeState = () => initialState;

const findMealItem = (id) => {
  const mealItem = MealsData.find((mealItem) =>
    cartItemMatchesId(mealItem, id)
  );
  return {
    ...mealItem,
    count: 0,
  };
};

const countCartItems = (cartItems) => {
  return cartItems.reduce((count, item) => count + item.count, 0);
};

const sumTotalAmount = (cartItems) => {
  return cartItems.reduce(
    (amount, item) => amount + item.price * item.count,
    0
  );
};

const cartItemMatchesId = (cartItem, id) => cartItem.id === id;

const cartReducer = (state, action) => {
  const id = action.id;
  const cartItems = [...state.cartItems];

  if (action.type === "ADD_CART_ITEM") {
    const count = action.count;
    const index = cartItems.findIndex((item) => cartItemMatchesId(item, id));

    if (index === -1) {
      cartItems.push(findMealItem(id));
    }

    const processedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        const newCount = item.count + count;
        return {
          ...item,
          count: newCount,
        };
      }
      return {
        ...item,
      };
    });

    return {
      cartItems: processedCartItems,
      totalItems: countCartItems(processedCartItems),
      totalAmount: sumTotalAmount(processedCartItems),
    };
  }

  if (action.type === "REMOVE_CART_ITEM") {
    const processedCartItems = cartItems
      .map((item) => {
        if (item.id === id) {
          const currentCount = item.count - 1 < 0 ? 0 : item.count - 1;
          return {
            ...item,
            count: currentCount,
          };
        }
        return {
          ...item,
        };
      })
      .filter((item) => item.count !== 0);

    return {
      cartItems: processedCartItems,
      totalItems: countCartItems(processedCartItems),
      totalAmount: sumTotalAmount(processedCartItems),
    };
  }

  return initialState;
};

export { initializeState, cartReducer };
