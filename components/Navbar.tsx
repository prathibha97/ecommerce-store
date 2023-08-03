import Link from 'next/link';
import { FC } from 'react';
import MainNav from './MainNav';
import Container from './ui/Container';
import getCategories from '@/actions/get-categories';
import NavbarActions from './NavbarActions';

export const revalidate = 0;

const Navbar= async() => {
  const categories = await getCategories()
  return (
    <div className='border-b'>
      <Container>
        <div className='relative px-4 sm:px-6 lg:px8 flex h-16 items-center'>
          <Link href='/' className='ml-4 flex lg:ml-0 gap-x-2'>
            <p className='font-bold text-xl'>STORE</p>
          </Link>
          <MainNav data={categories}/>
          <NavbarActions/>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;