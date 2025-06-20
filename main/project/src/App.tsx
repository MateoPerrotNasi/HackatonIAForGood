// App.tsx
import React, { useState } from 'react';
import { Cpu, Leaf, Zap, TrendingUp, AlertTriangle, Lightbulb } from 'lucide-react';
import CurrentBadImpact from './components/CurrentBadImpact';
import CurrentGoodImpact from './components/CurrentGoodImpact';
import FutureImpact from './components/FutureImpact';
import CarbonFootprintCalculator from './components/CarbonFootprintCalculator'; // <-- Importez le nouveau composant

type Tab = 'bad' | 'good' | 'future' | 'carbon'; // Assurez-vous que 'carbon' est ici

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('bad');

  const tabs = [
    { id: 'bad' as Tab, label: 'Défis Actuels', icon: AlertTriangle, color: 'text-red-600' },
    { id: 'good' as Tab, label: 'Impact Positif', icon: Leaf, color: 'text-green-600' },
    { id: 'future' as Tab, label: 'Perspectives d\'Avenir', icon: Lightbulb, color: 'text-blue-600' },
    { id: 'carbon' as Tab, label: 'Empreintes Carbonne', icon: Zap, color: 'text-purple-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl">
              <Cpu className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">IA & Environnement</h1>
              <p className="text-gray-600">Comprendre l'empreinte environnementale de l'intelligence artificielle</p>
            </div>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex space-x-8">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-6 border-b-2 font-medium text-sm transition-all duration-200 flex items-center space-x-2 ${
                      activeTab === tab.id
                        ? `border-current ${tab.color} bg-gradient-to-t from-gray-50 to-transparent`
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Tab Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="transition-all duration-300 ease-in-out">
          {activeTab === 'bad' && <CurrentBadImpact />}
          {activeTab === 'good' && <CurrentGoodImpact />}
          {activeTab === 'carbon' && <CarbonFootprintCalculator />} {/* <-- Utilisez le nouveau composant ici */}
          {activeTab === 'future' && <FutureImpact />}
        </div>
      </main>

      {/* Footer de l'application principale - Vous pouvez choisir de garder celui-ci ou de laisser uniquement celui du jeu si vous le préférez */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Cpu className="h-6 w-6" />
              <span className="text-xl font-bold">IA & Environnement</span>
            </div>
            <p className="text-gray-400">
              Comprendre et traiter l'impact environnemental de l'IA pour un avenir durable
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;