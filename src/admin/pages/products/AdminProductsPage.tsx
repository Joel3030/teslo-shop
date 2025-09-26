import { AdminTitle } from '@/admin/components';
import { Button } from '@/components';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { PlusIcon } from 'lucide-react';
import { Link } from 'react-router';

export const AdminProductsPage = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <AdminTitle
          title="Productos"
          subtitle="Aquí puedes administrar todos los productos de tu tienda."
        />

        <div className="mb-10 flex justify-end gap-4">
          <Link to="/admin/products/new">
            <Button>
              <PlusIcon /> Nuevo producto
            </Button>
          </Link>
        </div>
      </div>

      <Table className="mb-10 rounded-sm bg-white p-10 shadow-xs">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Imagen</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Categoría</TableHead>
            <TableHead>Inventario</TableHead>
            <TableHead>Tallas</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>
              <img
                src="/placeholder.svg"
                alt="Product"
                className="h-10 w-10 rounded-full"
              />
            </TableCell>
            <TableCell>Apple iPhone 14 Pro Max</TableCell>
            <TableCell>$799.00</TableCell>
            <TableCell>Electrónica</TableCell>
            <TableCell>100 Stock</TableCell>
            <TableCell>XS,S,L</TableCell>
            <TableCell className="text-right">
              <Link
                to="/admin/products/1"
                className="text-blue-600 hover:underline"
              >
                Editar
              </Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};
