import { Button } from '@/components';
import { Filter, Grid, List } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { FilterSidebar } from './FilterSidebar';
import { useSearchParams } from 'react-router';
import { useState } from 'react';
import type { Product } from '@/interfaces/product.interface';

interface Props {
  products: Product[];
}

export const ProductsGrid = ({ products }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const viewMode = searchParams.get('viewMode') || 'grid';

  const handleViewModeChange = (mode: 'grid' | 'list') => {
    searchParams.set('viewMode', mode);
    setSearchParams(searchParams);
  };

  const [showFilters, setShowFilters] = useState(false);

  return (
    <section className="px-4 py-12 lg:px-8">
      <div className="container mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h2 className="text-3xl font-light">Productos</h2>
            <span className="text-muted-foreground">
              ({products.length} productos)
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden"
            >
              <Filter className="mr-2 h-4 w-4" />
              Filtros
            </Button>

            <div className="hidden rounded-md border md:flex">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => handleViewModeChange('grid')}
                className="rounded-r-none"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => handleViewModeChange('list')}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="hidden lg:block">
            <FilterSidebar />
          </div>

          {showFilters && (
            <div className="bg-background fixed inset-0 z-50 p-4 lg:hidden">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-semibold">Filtros</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowFilters(false)}
                >
                  Cerrar
                </Button>
              </div>
              <FilterSidebar />
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
                  : 'space-y-4'
              }
            >
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
