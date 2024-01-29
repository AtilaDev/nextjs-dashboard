import { Metadata } from 'next';
import { CardCounter } from '@/shopping-cart';

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: '',
};

export default function CounterPage() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <span>Productos en el carrito</span>
      <CardCounter value={10} />
    </div>
  );
}
