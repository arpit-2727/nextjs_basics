"use client"
import { usePathname, useRouter } from 'next/navigation';

export default function OrderProduct() {
  const pathname = usePathname();
  const router = useRouter();
  const handleClick = () => {
      console.log('Placing Order');
      router.push('/');
    };

  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place order</button>
    </>
  );
}
