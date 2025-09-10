import { allProducts, categories } from './products';
import { ProductProps } from '@/types/product';

export const productService = {
  // Retorna todos os produtos
  getAllProducts: (): ProductProps[] => {
    return allProducts;
  },

  // Retorna produtos por categoria
  getProductsByCategory: (category: string): ProductProps[] => {
    if (category === 'Todos') {
      return allProducts;
    }
    return allProducts.filter(product => product.category === category);
  },

  // Retorna produtos em destaque para a seção Collections (primeiros 6)
  getFeaturedProducts: (): ProductProps[] => {
    return allProducts.slice(0, 6);
  },

  // Retorna um produto específico por ID
  getProductById: (id: string): ProductProps | undefined => {
    return allProducts.find(product => product.id === id);
  },

  // Retorna todas as categorias disponíveis
  getCategories: (): string[] => {
    return categories;
  },

  // Retorna o número total de produtos
  getProductCount: (): number => {
    return allProducts.length;
  },

  // Retorna o número de produtos por categoria
  getProductCountByCategory: (category: string): number => {
    return productService.getProductsByCategory(category).length;
  }
};