'use client';
import LocationCard from '@/app/components/card';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useCallback } from 'react';

export default function SearchPage({
  placeholder,
  results,
}: {
  placeholder: string;
  results: any[];
}) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useCallback(
    (term: string) => {
      const params = new URLSearchParams(searchParams);
      params.set('page', '1');
      if (term) params.set('query', term);
      else params.delete('query');
      replace(`${pathname}?${params.toString()}`);
    },
    [searchParams, replace, pathname]
  );

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flexbox items-center py-32 px-16 bg-white dark:bg-black">
        <input
          className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          placeholder={placeholder}
          onChange={(e) => handleSearch(e.target.value)}
        />
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
