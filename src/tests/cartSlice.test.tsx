import cartReducer, {
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  } from "../redux/slices/cartSlice";
  import { CartState } from "../types/types";
  
  const mockProduct = {
    id: 1,
    title: "Test Product",
    price: 100,
    description: "Test Description",
    image: "test-image-url",
    category: "Test Category",
  };
  
  const initialState: CartState = {
    items: [],
  };
  
  describe("cartSlice", () => {
    beforeEach(() => {
      localStorage.clear();
    });
  
    it("should return the initial state", () => {
      expect(cartReducer(undefined, { type: '' })).toEqual(initialState);
    });
  
    it("should handle addToCart action for a new product", () => {
      const nextState = cartReducer(initialState, addToCart(mockProduct));
  
      expect(nextState.items).toHaveLength(1);
      expect(nextState.items[0].product).toEqual(mockProduct);
      expect(nextState.items[0].quantity).toBe(1);
      expect(JSON.parse(localStorage.getItem("cartItems")!)).toEqual(
        nextState.items
      );
    });
  
    it("should increase quantity if product already exists in cart", () => {
      const stateWithItem: CartState = {
        items: [{ product: mockProduct, quantity: 1 }],
      };
      const nextState = cartReducer(stateWithItem, addToCart(mockProduct));
  
      expect(nextState.items).toHaveLength(1);
      expect(nextState.items[0].quantity).toBe(2);
      expect(JSON.parse(localStorage.getItem("cartItems")!)).toEqual(
        nextState.items
      );
    });
  
    it("should decrease quantity when removeFromCart is called with quantity greater than 1", () => {
      const stateWithItem: CartState = {
        items: [{ product: mockProduct, quantity: 2 }],
      };
      const nextState = cartReducer(stateWithItem, removeFromCart({ id: 1 }));
  
      expect(nextState.items).toHaveLength(1);
      expect(nextState.items[0].quantity).toBe(1);
      expect(JSON.parse(localStorage.getItem("cartItems")!)).toEqual(
        nextState.items
      );
    });
  
    it("should remove the product when removeFromCart is called with quantity 1", () => {
      const stateWithItem: CartState = {
        items: [{ product: mockProduct, quantity: 1 }],
      };
      const nextState = cartReducer(stateWithItem, removeFromCart({ id: 1 }));
  
      expect(nextState.items).toHaveLength(0);
      expect(JSON.parse(localStorage.getItem("cartItems")!)).toEqual(
        nextState.items
      );
    });
  
    it("should update the product quantity when updateQuantity is called", () => {
      const stateWithItem: CartState = {
        items: [{ product: mockProduct, quantity: 1 }],
      };
      const nextState = cartReducer(
        stateWithItem,
        updateQuantity({ id: 1, quantity: 5 })
      );
  
      expect(nextState.items).toHaveLength(1);
      expect(nextState.items[0].quantity).toBe(5);
      expect(JSON.parse(localStorage.getItem("cartItems")!)).toEqual(
        nextState.items
      );
    });
  
    it("should clear the cart when clearCart is called", () => {
      const stateWithItem: CartState = {
        items: [{ product: mockProduct, quantity: 1 }],
      };
      const nextState = cartReducer(stateWithItem, clearCart());
  
      expect(nextState.items).toHaveLength(0);
      expect(localStorage.getItem("cartItems")).toBeNull();
    });
  });
  