'use client';
import LocationCard from '@/app/components/card';

export default function OverviewPage({
  results,
}: {
  results: any[];
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flexbox items-center py-32 px-16 bg-white dark:bg-black">
        {results.map((result, index) => (
            <div key={index} className="mt-6 w-full">
                <LocationCard
                    name={result.name}
                    location={result.location}
                    url={result.url}
                />
            </div>
        ))}
      </main>
    </div>
  );
}
