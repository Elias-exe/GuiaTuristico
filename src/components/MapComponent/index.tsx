import Map from "../../assets/images/Map.jpeg"
import { ImageMapper } from 'react-image-mapper';

const areas = [
  {
    id: 'location1',
    shape: 'circle',
    coords: [100, 100, 30], // x, y, radius
    preFillColor: 'rgba(255, 0, 0, 0.4)' // Color of the area before it's clicked
  },
  // Define more areas for other locations
];

const MapComponent = () => {
  const handleClick = (area:any) => {
    // Handle click on an area (location)
    // You can show the corresponding evaluation or information here
    console.log(`Clicked on ${area.id}`);
  };

  return (
    <ImageMapper
      src={Map}
      map={{
        name: 'your-map',
        areas: areas
      }}
      onClick={(area:any) => handleClick(area)}
    />
  );
};

export default MapComponent;
