import { Product, SearchResult } from 'src/app/models';

export interface ProductState {
  currentProduct: Product;
  recentProducts?: Product[];
  foundProducts?: SearchResult[];
  allProducts?: Product[];
}
