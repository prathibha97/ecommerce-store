const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='bg-white border-t'>
      <div className='mx-auto py-10'>
        <p className='text-center text-xs text-black'>
          &copy;{year} FakeStoreName, Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
