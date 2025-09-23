import { CustomPagination } from '@/components';
import { products } from '@/mocks/products.mock';
import { CustomJumbotron, ProductsGrid } from '@/shop/components';
import { useParams } from 'react-router';

export const GenderPage = () => {
	const { gender } = useParams();

	const genderLabel =
		gender === 'men' ? 'Hombres' : gender === 'women' ? 'Mujeres' : 'Niños';

	return (
		<>
			<CustomJumbotron title={`Productos para ${genderLabel}`} />

			<ProductsGrid products={products} />

			<CustomPagination totalPages={10} />
		</>
	);
};
