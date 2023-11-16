import rinconcito_hero from '../img/rinconcito_hero.png';


export function Hero() {
  return (
    <div className="bg-gray-900">
      <div className="w-full overflow-hidden">
        <div className="flex">
          <div className="w-screen">
            <img src={rinconcito_hero} alt="Imagen 1" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

