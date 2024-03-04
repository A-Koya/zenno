import { CardList } from './_component/tmp/cards/CardList';
import { Suspense } from 'react';
import Loading from './loading';
export default function Home() {
  return (
    <div className="container py-4">
      <Suspense fallback={<Loading />} >
        <CardList />
      </Suspense>
    </div>
  );
}
