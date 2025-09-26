import { Link } from 'react-router';

interface Props {
  subtitle?: string;
}

export const CustomLogo = ({ subtitle }: Props) => {
  return (
    <>
      <Link to="/" className="flex items-center whitespace-nowrap">
        <span className="font-montserrat m-0 text-xl font-bold whitespace-nowrap">
          Teslo |
        </span>
        <p className="text-muted-foreground m-0 px-2 whitespace-nowrap">
          {subtitle || 'Shop'}
        </p>
      </Link>
    </>
  );
};
