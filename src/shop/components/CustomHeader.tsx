import { CustomLogo } from '@/components/custom/CustomLogo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import { useRef, type KeyboardEvent } from 'react';
import { Link, useParams, useSearchParams } from 'react-router';

export const CustomHeader = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { gender } = useParams();

  const inputRef = useRef<HTMLInputElement>(null);
  const query = searchParams.get('query') || '';

  const handleSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return;

    const value = inputRef.current?.value.trim();

    const params = new URLSearchParams();

    value ? params.set('query', value) : params.delete('query');

    setSearchParams(params);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-slate-50 backdrop-blur">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <CustomLogo />

          {/* Navigation - Desktop */}
          <nav className="hidden items-center space-x-8 md:flex">
            <Link
              to="/"
              className={cn(
                `hover:text-primary text-sm font-medium transition-colors`,
                !gender ? 'underline' : ''
              )}
            >
              Todos
            </Link>
            <Link
              to="/gender/men"
              className={cn(
                `hover:text-primary text-sm font-medium transition-colors`,
                gender === 'men' ? 'underline' : ''
              )}
            >
              Hombres
            </Link>
            <Link
              to="/gender/women"
              className={cn(
                `hover:text-primary text-sm font-medium transition-colors`,
                gender === 'women' ? 'underline' : ''
              )}
            >
              Mujeres
            </Link>
            <Link
              to="/gender/kids"
              className={cn(
                `hover:text-primary text-sm font-medium transition-colors`,
                gender === 'kids' ? 'underline' : ''
              )}
            >
              Niños
            </Link>
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <div className="hidden items-center space-x-2 md:flex">
              <div className="relative">
                <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                <Input
                  ref={inputRef}
                  placeholder="Buscar productos..."
                  className="h-9 w-64 pl-9"
                  onKeyDown={handleSearch}
                  defaultValue={query}
                />
              </div>
            </div>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>

            <Link to="/auth/login">
              <Button variant="default" size="sm" className="ml-2">
                Login
              </Button>
            </Link>

            <Link to="/admin">
              <Button variant="destructive" size="sm" className="ml-2">
                Admin
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
