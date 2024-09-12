export interface HeaderProps {
  showCartIcon?: Boolean;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export interface ProductCardProps {
  product: Product;
}

export interface CategoryListProps {
  categories: string[];
}

export interface CartItemProps {
  item: {
    product: {
      id: number;
      title: string;
      price: number;
      image: string;
    };
    quantity: number;
  };
}

export interface AuthState {
  username: string | null;
  token: string | null;
}

export interface CartItem {
  product: any;
  quantity: number;
}
export interface CartState {
  items: CartItem[];
}

export interface CategoryState {
  items: string[];
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export interface ProductsState {
  products: Product[];
}
