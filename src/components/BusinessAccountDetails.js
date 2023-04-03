import ButtonSmall from '@components/ButtonSmall';

export default function BusinessAccountDetails(props) {
  return (
    <div className='w-11/12 mx-auto max-w-screen-sm text-accentcolor1 tracking-widest bg-accentcolor2 font-cursive py-6 px-6 rounded-lg'>
      <h3 className='text-4xl'>Description</h3>
      <div className='flex flex-col mb-10 mt-10 items-center'>
        <ButtonSmall buttonName={'Edit'} buttonLink='/' />
      </div>
    </div>
  );
}
