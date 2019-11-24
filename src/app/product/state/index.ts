import { Product } from 'src/app/models';

export interface ProductState {
  currentProduct: Product;
  recentProducts?: Product[];
  foundProducts?: Product[];
  allProducts?: Product[];
}
