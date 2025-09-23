import { Link } from 'react-router';

interface Props {
  subTitle?: string;
}

export const CustomLogo = ({ subTitle }: Props) => {
  return (
    <>
      <Link to="/" className="flex items-center whitespace-nowrap">
        <span className="font-montserrat m-0 text-xl font-bold whitespace-nowrap">
          Teslo |
        </span>
        <p className="text-muted-foreground m-0 px-2 whitespace-nowrap">
          {subTitle || 'Shop'}
        </p>
      </Link>
    </>
  );
};
