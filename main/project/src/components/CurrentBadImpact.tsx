import React from 'react';
import { Zap, Factory, ThermometerSun, Database, AlertCircle } from 'lucide-react';

const CurrentBadImpact = () => {
  const stats = [
    {
      icon: Zap,
      title: 'Consommation d\'Énergie',
      value: '3,7%',
      description: 'de l\'électricité mondiale utilisée par les centres de données',
      color: 'text-red-600'
    },
    {
      icon: Factory,
      title: 'Émissions de Carbone',
      value: '300M tonnes',
      description: 'équivalent CO₂ annuellement par l\'entraînement IA',
      color: 'text-orange-600'
    },
    {
      icon: ThermometerSun,
      title: 'Génération de Chaleur',
      value: '40°C+',
      description: 'température moyenne de fonctionnement des centres de données',
      color: 'text-yellow-600'
    },
    {
      icon: Database,
      title: 'Stockage de Données',
      value: '59 ZO',
      description: 'de données créées annuellement nécessitant un stockage',
      color: 'text-purple-600'
    }
  ];

  const challenges = [
    {
      title: 'Entraînement de Grands Modèles',
      description: 'L\'entraînement de GPT-3 a consommé autant d\'énergie que 126 foyers danois utilisent en un an. Chaque session d\'entraînement de grands modèles de langage peut émettre des centaines de tonnes de CO₂.',
      impact: 'Coût Énergétique Élevé'
    },
    {
      title: 'Infrastructure des Centres de Données',
      description: 'Les charges de travail IA nécessitent du matériel spécialisé comme les GPU qui consomment significativement plus d\'énergie que les serveurs traditionnels, fonctionnant souvent 24h/24.',
      impact: 'Consommation Continue'
    },
    {
      title: 'Fabrication de Matériel',
      description: 'La production de puces IA nécessite des minéraux de terres rares et génère des émissions substantielles avant même que le matériel ne devienne opérationnel.',
      impact: 'Carbone Incorporé'
    },
    {
      title: 'Inférence de Modèles',
      description: 'Chaque requête à ChatGPT ou modèles similaires nécessite des ressources computationnelles, avec des millions d\'utilisateurs quotidiens créant une demande agrégée énorme.',
      impact: 'Effet d\'Échelle'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative rounded-3xl overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg"
          alt="Cheminées industrielles"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-orange-900/60 flex items-center">
          <div className="max-w-3xl mx-auto px-8 text-white">
            <AlertCircle className="h-16 w-16 mb-6 text-red-300" />
            <h2 className="text-4xl font-bold mb-4">Défis Environnementaux</h2>
            <p className="text-xl text-red-100">
              La croissance rapide de l'IA a créé des préoccupations environnementales significatives, 
              de la consommation massive d'énergie aux émissions de carbone qui rivalisent avec des pays entiers.
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <Icon className={`h-8 w-8 ${stat.color}`} />
                <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{stat.title}</h3>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </div>
          );
        })}
      </div>

      {/* Detailed Challenges */}
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <AlertCircle className="h-7 w-7 text-red-600 mr-3" />
          Principaux Défis Environnementaux
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-6 hover:border-red-300 transition-colors duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-semibold text-gray-900">{challenge.title}</h4>
                <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                  {challenge.impact}
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-8 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Le Défi est Réel</h3>
          <p className="text-red-100 mb-6 leading-relaxed">
            Sans intervention, l'impact environnemental de l'IA pourrait croître exponentiellement. 
            Cependant, la sensibilisation et l'action peuvent conduire à un changement positif vers 
            un développement d'IA plus durable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold">626%</div>
              <div className="text-sm text-red-100">Croissance énergétique IA projetée d'ici 2030</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold">23G$</div>
              <div className="text-sm text-red-100">Coûts énergétiques annuels pour l'IA d'ici 2030</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentBadImpact;