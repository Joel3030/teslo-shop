import { CustomPagination } from '@/components';
import { products } from '@/mocks/products.mock';
import { CustomJumbotron, ProductsGrid } from '@/shop/components';

export const HomePage = () => {
	return (
		<>
			<CustomJumbotron title='Todos los productos' />

			<ProductsGrid products={products} />

			<CustomPagination totalPages={10} />
		</>
	);
};
