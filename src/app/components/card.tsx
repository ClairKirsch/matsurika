import Image from 'next/image';

type LocationCardProps = {
  name: string;
  location: string;
  url?: string;
};

const LocationCard = ({ name, location, url }: LocationCardProps) => {
  return (
    <div className="relative bg-grey rounded-lg shadow-lg p-6 max-w-xs
    sm:max-w-md mx-auto transform hover:scale-105 transition-transform 
    duration-300 ease-in-out">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden 
        border-4 border-white shadow-md mb-4">
          {<Image
            src={url || '/default-avatar.png'}
            alt="image"
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />}
        </div>
            <h2 className="text-lg font-bold text-gray-200 mb-1">{name}</h2>
            <h2 className="text-sm text-gray-400 mb-1">{location}</h2>
      </div>

      <div className="text-white-700">
        <p className="flex items-center mb-2"></p>
        <p className="flex items-center mb-2"></p>
        <p className="flex items-center mb-2"></p>
      </div>
    </div>
  );
};

export default LocationCard;
