import Link from 'next/link';

export default function AllProducts() {
  const products = [
    { id: 1, name: 'product1' },
    { id: 2, name: 'product2' },
    { id: 3, name: 'product3' },
  ];
  return (
    <ul>
      {products.map(item => (
        <li key={item.id}>
          <Link href={`products/${item.id}`}>
            <a>{item.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
