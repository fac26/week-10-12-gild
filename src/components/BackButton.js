import { useRouter } from 'next/router';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

export default function BackButton() {
  const router = useRouter();

  function handleClick() {
    router.back();
  }

  return (
    <>
      <ChevronLeftIcon
        onClick={handleClick}
        className='h-12 w-12 text-accentcolor3 cursor-pointer'
      />
    </>
  );
}
