// src/components/CarbonFootprintCalculator.tsx
import React, { useState, useEffect } from 'react';
import { Leaf } from 'lucide-react'; // Example icon for the footer, adjust as needed

const CarbonFootprintCalculator: React.FC = () => {
  const [carKm, setCarKm] = useState<number>(5000);
  const [flightNb, setFlightNb] = useState<number>(1);
  const [heatingType, setHeatingType] = useState<string>('gaz');
  const [meatFreq, setMeatFreq] = useState<string>('tous_les_jours');
  const [greenElec, setGreenElec] = useState<string>('oui');
  const [clothesNb, setClothesNb] = useState<number>(10);
  const [publicTransport, setPublicTransport] = useState<string>('souvent');
  const [recycling, setRecycling] = useState<string>('oui');
  const [devicesNb, setDevicesNb] = useState<number>(1);
  const [totalCarbon, setTotalCarbon] = useState<number | null>(null);
  const [treeImageSrc, setTreeImageSrc] = useState<string>('');

  const heatFactors: { [key: string]: number } = {
    gaz: 1800, electrique: 1500, fioul: 2400, bois: 900, aucun: 0
  };
  const meatFactors: { [key: string]: number } = {
    tous_les_jours: 2700,
    plusieurs_fois_semaine: 1800,
    une_fois_semaine: 900,
    rarement: 300,
    jamais: 0
  };

  const calculateCarbonFootprint = (e: React.FormEvent) => {
    e.preventDefault();

    const carCarbon = carKm * 0.2;
    const flightCarbon = flightNb * 800;
    const heatingCarbon = heatFactors[heatingType] || 0;
    const meatCarbon = meatFactors[meatFreq] || 0;
    const elecCarbon = (greenElec === "oui") ? 100 : 500;
    const clothesCarbon = clothesNb * 25;
    const devicesCarbon = devicesNb * 250;
    const transportBonus = (publicTransport === "souvent") ? -200 : (publicTransport === "parfois" ? -100 : 0);
    const recyclingBonus = (recycling === "oui") ? -150 : 0;

    const total = carCarbon + flightCarbon + heatingCarbon + meatCarbon +
                  elecCarbon + clothesCarbon + devicesCarbon + transportBonus + recyclingBonus;

    setTotalCarbon(total);

    if (total > 6000) {
      setTreeImageSrc("/arbre_endommage.png");
    } else if (total > 3000) {
      setTreeImageSrc("/arbre_moyen.png");
    } else {
      setTreeImageSrc("/arbre_bonne_sante.png");
    }
  };

  // Scroll to result when it becomes visible
  useEffect(() => {
    if (totalCarbon !== null) {
      const resultDiv = document.getElementById('result-section');
      if (resultDiv) {
        resultDiv.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [totalCarbon]);

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-slate-50 to-blue-50 text-gray-800">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">GreenScan 🌿</h1>

      <form onSubmit={calculateCarbonFootprint} className="bg-white p-6 rounded-xl shadow-lg max-w-xl w-full space-y-4">
        <div>
          <label htmlFor="carKm" className="block text-sm font-semibold text-gray-700 mb-1">Distance en voiture (km/an) :</label>
          <input
            type="number"
            id="carKm"
            value={carKm}
            onChange={(e) => setCarKm(Number(e.target.value))}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="flightNb" className="block text-sm font-semibold text-gray-700 mb-1">Vols/an :</label>
          <input
            type="number"
            id="flightNb"
            value={flightNb}
            onChange={(e) => setFlightNb(Number(e.target.value))}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="heatingType" className="block text-sm font-semibold text-gray-700 mb-1">Type de chauffage :</label>
          <select
            id="heatingType"
            value={heatingType}
            onChange={(e) => setHeatingType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="gaz">Gaz</option>
            <option value="electrique">Électrique</option>
            <option value="fioul">Fioul</option>
            <option value="bois">Bois</option>
            <option value="aucun">Aucun</option>
          </select>
        </div>

        <div>
          <label htmlFor="meatFreq" className="block text-sm font-semibold text-gray-700 mb-1">Viande :</label>
          <select
            id="meatFreq"
            value={meatFreq}
            onChange={(e) => setMeatFreq(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="tous_les_jours">Tous les jours</option>
            <option value="plusieurs_fois_semaine">Plusieurs fois/semaine</option>
            <option value="une_fois_semaine">Une fois/semaine</option>
            <option value="rarement">Rarement</option>
            <option value="jamais">Jamais</option>
          </select>
        </div>

        <div>
          <label htmlFor="greenElec" className="block text-sm font-semibold text-gray-700 mb-1">Électricité verte ?</label>
          <select
            id="greenElec"
            value={greenElec}
            onChange={(e) => setGreenElec(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="oui">Oui</option>
            <option value="non">Non</option>
          </select>
        </div>

        <div>
          <label htmlFor="clothesNb" className="block text-sm font-semibold text-gray-700 mb-1">Vêtements neufs/an :</label>
          <input
            type="number"
            id="clothesNb"
            value={clothesNb}
            onChange={(e) => setClothesNb(Number(e.target.value))}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="publicTransport" className="block text-sm font-semibold text-gray-700 mb-1">Transports en commun :</label>
          <select
            id="publicTransport"
            value={publicTransport}
            onChange={(e) => setPublicTransport(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="souvent">Souvent</option>
            <option value="parfois">Parfois</option>
            <option value="jamais">Jamais</option>
          </select>
        </div>

        <div>
          <label htmlFor="recycling" className="block text-sm font-semibold text-gray-700 mb-1">Tries-tu tes déchets ?</label>
          <select
            id="recycling"
            value={recycling}
            onChange={(e) => setRecycling(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="oui">Oui</option>
            <option value="non">Non</option>
          </select>
        </div>

        <div>
          <label htmlFor="devicesNb" className="block text-sm font-semibold text-gray-700 mb-1">Appareils électroniques achetés :</label>
          <input
            type="number"
            id="devicesNb"
            value={devicesNb}
            onChange={(e) => setDevicesNb(Number(e.target.value))}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button type="submit" className="mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md w-full transition-colors duration-200">
          Calculer mon empreinte
        </button>
      </form>

      {totalCarbon !== null && (
        <div id="result-section" className="mt-8 bg-green-100 p-6 rounded-xl shadow-lg max-w-xl w-full text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🌍 Résultat</h2>
          <p className="text-xl text-gray-700 mb-4">
            Ton empreinte carbone estimée est de <span className="font-bold text-green-700">{totalCarbon.toFixed(0)}</span> kg CO₂e/an
          </p>
          {treeImageSrc && (
            <img id="treeImage" src={treeImageSrc} alt="État de l’arbre" className="mt-4 max-w-[220px] mx-auto block" />
          )}
        </div>
      )}

      {/* Footer adapted to the main App.tsx footer style */}
      <footer className="bg-gray-900 text-white py-8 mt-12 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-left">
            <div className="flex-1 min-w-[180px] max-w-[250px]">
              <h4 className="font-semibold text-lg mb-3 text-green-400">🚗 Mobilité</h4>
              <ul className="text-gray-400 text-sm list-none p-0">
                <li className="mb-1">Voiture : ADEME - Base Carbone</li>
                <li className="mb-1">Avion : MyClimate, ADEME</li>
                <li className="mb-1">Transports : données estimées</li>
              </ul>
            </div>
            <div className="flex-1 min-w-[180px] max-w-[250px]">
              <h4 className="font-semibold text-lg mb-3 text-green-400">🏠 Énergie</h4>
              <ul className="text-gray-400 text-sm list-none p-0">
                <li className="mb-1">Chauffage : ADEME</li>
                <li className="mb-1">Électricité : RTE / Enedis</li>
                <li className="mb-1">Recyclage : ADEME</li>
              </ul>
            </div>
            <div className="flex-1 min-w-[180px] max-w-[250px]">
              <h4 className="font-semibold text-lg mb-3 text-green-400">🥩 Alimentation & conso</h4>
              <ul className="text-gray-400 text-sm list-none p-0">
                <li className="mb-1">Viande : WWF, Greenly</li>
                <li className="mb-1">Textile : ADEME (25 kg CO₂/vêtement)</li>
                <li className="mb-1">Électronique : ADEME (250 kg CO₂/appareil)</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-gray-500 text-xs mt-8">
            © 2025 GreenScan – Données indicatives à visée pédagogique
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CarbonFootprintCalculator;