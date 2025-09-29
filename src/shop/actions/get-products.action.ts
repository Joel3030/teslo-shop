import { tesloApi } from '@/api';
import type { ProductsResponse } from '@/interfaces/products.response';

interface options {
  limit?: number | string;
  offset?: number | string;
  sizes?: string;
  gender?: string;
  minPrice?: number;
  maxPrice?: number;
  query?: string;
}

export const getProductsAction = async (
  options: options
): Promise<ProductsResponse> => {
  const { limit, offset, sizes, gender, minPrice, maxPrice, query } = options;
  const { data } = await tesloApi.get<ProductsResponse>('/products', {
    params: {
      limit,
      offset,
      sizes,
      gender,
      minPrice,
      maxPrice,
      q: query,
    },
  });

  const productsWithImageUrls = data.products.map((product) => {
    return {
      ...product,
      images: product.images.map(
        (image) => `${import.meta.env.VITE_API_URL}/files/product/${image}`
      ),
    };
  });

  return { ...data, products: productsWithImageUrls };
};
