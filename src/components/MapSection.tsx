import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in React-Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface Landmark {
  name: string;
  coordinates: LatLngExpression;
  query: string;
}

const landmarks: Landmark[] = [
  {
    name: "The Strand",
    coordinates: [-19.2454, 146.8088] as LatLngExpression,
    query: "Tell me about The Strand in Townsville."
  },
  {
    name: "Magnetic Island Ferry Terminal",
    coordinates: [-19.2531, 146.8225] as LatLngExpression,
    query: "What can I do on Magnetic Island?"
  },
  {
    name: "Castle Hill Lookout",
    coordinates: [-19.2663, 146.7966] as LatLngExpression,
    query: "What's the best way to get to Castle Hill lookout?"
  },
  {
    name: "Jezzine Barracks",
    coordinates: [-19.2355, 146.7940] as LatLngExpression,
    query: "What can I see at Jezzine Barracks in Townsville?"
  },
  {
    name: "JAM Corner",
    coordinates: [-19.2609, 146.8191] as LatLngExpression,
    query: "Tell me about JAM Corner restaurant in Townsville."
  },
  {
    name: "Billabong Sanctuary",
    coordinates: [-19.4121, 146.7873] as LatLngExpression,
    query: "What animals are at Billabong Sanctuary?"
  }
];

const MapSection = () => {
  const handleMarkerClick = (query: string) => {
    const input = document.getElementById('townsville-ai-input') as HTMLInputElement;
    if (input) {
      input.value = query;
      input.focus({ preventScroll: true });
      // Scroll to top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Explore Townsville
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Zoom in to discover the city's landmarks, restaurants, and attractions.
        </p>
        
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-[var(--shadow-tropical)] border-2 border-border">
          <MapContainer
            center={[-19.2577, 146.8181] as [number, number]}
            zoom={12}
            style={{ height: '500px', width: '100%' }}
            scrollWheelZoom={true}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {landmarks.map((landmark, index) => (
              <Marker
                key={index}
                position={landmark.coordinates}
                eventHandlers={{
                  click: () => handleMarkerClick(landmark.query)
                }}
              >
                <Popup>
                  <div className="text-center">
                    <strong className="text-foreground">{landmark.name}</strong>
                    <br />
                    <button
                      onClick={() => handleMarkerClick(landmark.query)}
                      className="mt-2 text-primary hover:underline text-sm"
                    >
                      Ask about this place
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
