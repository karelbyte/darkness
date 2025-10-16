import LocationInfo from '../molecules/LocationInfo';
import { Location } from '../../lib/types/game';

interface LocationDisplayProps {
  location: Location;
}

export default function LocationDisplay({ location }: LocationDisplayProps) {
  return (
    <div className="w-full relative" style={{
      backgroundImage: `url(${location.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "calc(100vh - 200px)"
    }}>

      <div className="relative z-10 p-6 h-full flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-lg" style={{ fontFamily: 'catcafe' }}>
            {location.name}
          </h2>
          
          <p className="text-white text-lg leading-relaxed drop-shadow-lg" style={{ fontFamily: 'catcafe' }}>
            {location.description}
          </p>
        </div>

        <div className="mt-auto">
          <LocationInfo 
            exits={location.exits}
            items={location.items}
            npcs={location.npcs}
          />
        </div>
      </div>
    </div>
  );
}
