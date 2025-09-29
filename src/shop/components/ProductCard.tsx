import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import type { Product } from '@/interfaces/product.interface';

interface Props {
  product: Product;
}

export const ProductCard = ({
  product: { title, price, images, tags },
}: Props) => {
  return (
    <Card className="group product-card-hover cursor-pointer border-0 shadow-none">
      <CardContent className="p-0">
        <div className="bg-muted relative aspect-square overflow-hidden rounded-lg">
          <img
            src={images[0]}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="image-overlay" />
        </div>

        <div className="space-y-3 px-4 pt-6 pb-4">
          <div className="space-y-1">
            <h3 className="text-sm font-medium tracking-tight">{title}</h3>
            <p className="text-muted-foreground text-xs uppercase">{tags[0]}</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold">${price}</p>
            <Button
              size="sm"
              variant="outline"
              className="hover:bg-primary hover:text-primary-foreground border-primary/20 h-8 px-4 py-2 text-xs opacity-0 transition-all duration-300 group-hover:opacity-100"
            >
              Agregar al carrito
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
