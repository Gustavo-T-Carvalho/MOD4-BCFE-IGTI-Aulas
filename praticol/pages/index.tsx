import { useEffect } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';

const StyledH1 = styled.h1`
  color: red;
`;
const fetcher = (...args: any) => fetch(...args).then(res => res.json());

export default function Home() {
  const { data, error } = useSWR('http://localhost:3000/products', fetcher);

  if (error) {
    return <div>Algo deu errado</div>;
  }

  if (!data) {
    return <div>Carregando</div>;
  }
  return (
    <div>
      <StyledH1>Mercado de hardware</StyledH1>
      {data.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </div>
  );
}
