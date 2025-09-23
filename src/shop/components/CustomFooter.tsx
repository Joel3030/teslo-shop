import { CustomLogo } from '@/components';

export const CustomFooter = () => {
  return (
    <footer className="mt-16 border-t px-4 py-12 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <CustomLogo />
            <p className="text-muted-foreground text-sm">
              Ropa inspirada en el diseño minimalista y la innovación de Tesla.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-medium">Productos</h4>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-foreground">
                  Camisetas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Sudaderas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Chaquetas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Accesorios
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-medium">Ayuda</h4>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-foreground">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Envíos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Devoluciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Guía de Tallas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-medium">Empresa</h4>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-foreground">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Sustentabilidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Carreras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Prensa
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-muted-foreground mt-8 border-t pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Tesla Style. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
