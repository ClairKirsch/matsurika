import OverviewPage from './components/overview_page';

export default async function QueryPage({ searchParams }: { searchParams: { query?: string } }) {
  const results = [{index: 1, name: 'Result 1', location: 'Nullpo', url: ''},
{ index: 2, name: 'Result 2', location: 'Null', url: '' },
{ index: 3, name: 'Result 3', location: 'Null', url: '' },
{ index: 4, name: 'Result 4', location: 'Null', url: '' }
  ];
  return <OverviewPage results={results} />;
}
