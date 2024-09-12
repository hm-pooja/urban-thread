const constants = {
  loginPage: {
    title: "Login",
    usernameLabel: "Username",
    passwordLabel: "Password",
    loginButtonLabel: "Login",
    errorMessages: {
      emptyFields: "Username and password are required",
      invalidCredentials: "Invalid username or password. Please try again.",
      loginError: "An error occurred during login. Please try again later.",
    },
  },
  successPage: {
    title: "Purchase Successful!",
    message: "Thank you for your purchase.",
    buttonLabel: "Go To Home",
    confettiDuration: 5000,
  },
  cartPage: {
    title: "Cart:",
    totalProductsLabel: "Total Products:",
    totalPriceLabel: "Total Price:",
    proceedButtonLabel: "Proceed to Buy",
    itemLabel: "item",
    itemsLabel: "items",
  },
  profilePage: {
    title: "Hello",
  },
  productDetailPage: {
    imageNotAvailableText: "Image not available",
    addToCartButtonText: "ADD TO CART",
    addMoreButtonText: "ADD MORE",
    inCartButtonPrefix: "In Cart: ",
  },
  header: {
    profile: "Profile",
    logout: "Logout",
  }
};

export default constants;
