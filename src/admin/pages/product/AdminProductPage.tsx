import { AdminTitle } from '@/admin/components/AdminTitle';
import { useParams } from 'react-router';

import { useState } from 'react';
import { X, Plus, Upload, Tag, SaveAll } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  slug: string;
  stock: number;
  sizes: string[];
  gender: string;
  tags: string[];
  images: string[];
}

export const AdminProductPage = () => {
  const { id } = useParams();

  const productTitle = id === 'new' ? 'Nuevo producto' : 'Editar producto';
  const productsubtitle =
    id === 'new'
      ? 'Aquí puedes crear un nuevo producto.'
      : 'Aquí puedes editar el producto.';

  const [product, setProduct] = useState<Product>({
    id: '376e23ed-df37-4f88-8f84-4561da5c5d46',
    title: "Men's Raven Lightweight Hoodie",
    price: 115,
    description:
      "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Hoodie has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve with a french terry interior for versatility in any season. Made from 70% bamboo and 30% cotton.",
    slug: 'men_raven_lightweight_hoodie',
    stock: 10,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    gender: 'men',
    tags: ['hoodie'],
    images: [
      'https://placehold.co/250x250',
      'https://placehold.co/250x250',
      'https://placehold.co/250x250',
      'https://placehold.co/250x250',
    ],
  });

  const [newTag, setNewTag] = useState('');
  const [dragActive, setDragActive] = useState(false);

  const availableSizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];

  const handleInputChange = (field: keyof Product, value: string | number) => {
    setProduct((prev) => ({ ...prev, [field]: value }));
  };

  const addTag = () => {
    if (newTag.trim() && !product.tags.includes(newTag.trim())) {
      setProduct((prev) => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()],
      }));
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setProduct((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const addSize = (size: string) => {
    if (!product.sizes.includes(size)) {
      setProduct((prev) => ({
        ...prev,
        sizes: [...prev.sizes, size],
      }));
    }
  };

  const removeSize = (sizeToRemove: string) => {
    setProduct((prev) => ({
      ...prev,
      sizes: prev.sizes.filter((size) => size !== sizeToRemove),
    }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const files = e.dataTransfer.files;
    console.log(files);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    console.log(files);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <AdminTitle title={productTitle} subtitle={productsubtitle} />

        <div className="mb-10 flex justify-end gap-4">
          <Button variant="outline">
            <Link to="/admin/products" className="flex items-center gap-2">
              <X className="h-4 w-4" />
              Cancelar
            </Link>
          </Button>

          <Button>
            <SaveAll className="h-4 w-4" />
            Guardar cambios
          </Button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Form */}
          <div className="space-y-6 lg:col-span-2">
            {/* Basic Information */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-lg">
              <h2 className="mb-6 text-xl font-semibold text-slate-800">
                Información del producto
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Título del producto
                  </label>
                  <input
                    type="text"
                    value={product.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    placeholder="Título del producto"
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Precio ($)
                    </label>
                    <input
                      type="number"
                      value={product.price}
                      onChange={(e) =>
                        handleInputChange('price', parseFloat(e.target.value))
                      }
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                      placeholder="Precio del producto"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Stock del producto
                    </label>
                    <input
                      type="number"
                      value={product.stock}
                      onChange={(e) =>
                        handleInputChange('stock', parseInt(e.target.value))
                      }
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                      placeholder="Stock del producto"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Slug del producto
                  </label>
                  <input
                    type="text"
                    value={product.slug}
                    onChange={(e) => handleInputChange('slug', e.target.value)}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    placeholder="Slug del producto"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Género del producto
                  </label>
                  <select
                    value={product.gender}
                    onChange={(e) =>
                      handleInputChange('gender', e.target.value)
                    }
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="men">Hombre</option>
                    <option value="women">Mujer</option>
                    <option value="unisex">Unisex</option>
                    <option value="kids">Niño</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Descripción del producto
                  </label>
                  <textarea
                    value={product.description}
                    onChange={(e) =>
                      handleInputChange('description', e.target.value)
                    }
                    rows={5}
                    className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    placeholder="Descripción del producto"
                  />
                </div>
              </div>
            </div>

            {/* Sizes */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-lg">
              <h2 className="mb-6 text-xl font-semibold text-slate-800">
                Tallas disponibles
              </h2>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className="inline-flex items-center rounded-full border border-blue-200 bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800"
                    >
                      {size}
                      <button
                        onClick={() => removeSize(size)}
                        className="ml-2 text-blue-600 transition-colors duration-200 hover:text-blue-800"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 border-t border-slate-200 pt-2">
                  <span className="mr-2 text-sm text-slate-600">
                    Añadir tallas:
                  </span>
                  {availableSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => addSize(size)}
                      disabled={product.sizes.includes(size)}
                      className={`rounded-full px-3 py-1 text-sm font-medium transition-all duration-200 ${
                        product.sizes.includes(size)
                          ? 'cursor-not-allowed bg-slate-100 text-slate-400'
                          : 'cursor-pointer bg-slate-200 text-slate-700 hover:bg-slate-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-lg">
              <h2 className="mb-6 text-xl font-semibold text-slate-800">
                Etiquetas
              </h2>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-green-200 bg-green-100 px-3 py-1 text-sm font-medium text-green-800"
                    >
                      <Tag className="mr-1 h-3 w-3" />
                      {tag}
                      <button
                        onClick={() => removeTag(tag)}
                        className="ml-2 text-green-600 transition-colors duration-200 hover:text-green-800"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && addTag()}
                    placeholder="Añadir nueva etiqueta..."
                    className="flex-1 rounded-lg border border-slate-300 px-4 py-2 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                  />
                  <Button onClick={addTag} className="py-2rounded-lg px-4">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Product Images */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-lg">
              <h2 className="mb-6 text-xl font-semibold text-slate-800">
                Imágenes del producto
              </h2>

              {/* Drag & Drop Zone */}
              <div
                className={`relative rounded-lg border-2 border-dashed p-6 text-center transition-all duration-200 ${
                  dragActive
                    ? 'border-blue-400 bg-blue-50'
                    : 'border-slate-300 hover:border-slate-400'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                  onChange={handleFileChange}
                />
                <div className="space-y-4">
                  <Upload className="mx-auto h-12 w-12 text-slate-400" />
                  <div>
                    <p className="text-lg font-medium text-slate-700">
                      Arrastra las imágenes aquí
                    </p>
                    <p className="text-sm text-slate-500">
                      o haz clic para buscar
                    </p>
                  </div>
                  <p className="text-xs text-slate-400">
                    PNG, JPG, WebP hasta 10MB cada una
                  </p>
                </div>
              </div>

              {/* Current Images */}
              <div className="mt-6 space-y-3">
                <h3 className="text-sm font-medium text-slate-700">
                  Imágenes actuales
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.images.map((image, index) => (
                    <div key={index} className="group relative">
                      <div className="flex aspect-square items-center justify-center rounded-lg border border-slate-200 bg-slate-100">
                        <img
                          src={image}
                          alt="Product"
                          className="h-full w-full rounded-lg object-cover"
                        />
                      </div>
                      <button className="absolute top-2 right-2 rounded-full bg-red-500 p-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        <X className="h-3 w-3" />
                      </button>
                      <p className="mt-1 truncate text-xs text-slate-600">
                        {image}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Status */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-lg">
              <h2 className="mb-6 text-xl font-semibold text-slate-800">
                Estado del producto
              </h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                  <span className="text-sm font-medium text-slate-700">
                    Estado
                  </span>
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                    Activo
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                  <span className="text-sm font-medium text-slate-700">
                    Inventario
                  </span>
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium ${
                      product.stock > 5
                        ? 'bg-green-100 text-green-800'
                        : product.stock > 0
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {product.stock > 5
                      ? 'En stock'
                      : product.stock > 0
                        ? 'Bajo stock'
                        : 'Sin stock'}
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                  <span className="text-sm font-medium text-slate-700">
                    Imágenes
                  </span>
                  <span className="text-sm text-slate-600">
                    {product.images.length} imágenes
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                  <span className="text-sm font-medium text-slate-700">
                    Tallas disponibles
                  </span>
                  <span className="text-sm text-slate-600">
                    {product.sizes.length} tallas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
