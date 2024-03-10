import { CardList } from './_component/tmp/cards/CardList';
import { Suspense } from 'react';
import Loading from './loading';
import { SearchTags } from './_component/tmp/tags/SearchTags';
export default function Home() {
  return (
    <div className="container py-4">
      <Suspense fallback={<Loading />} >
        <div className='flex'>
          <CardList />
          <SearchTags />
        </div>
      </Suspense>
    </div>
  );
}
