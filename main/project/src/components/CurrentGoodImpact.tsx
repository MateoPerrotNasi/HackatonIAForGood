import React from 'react';
import { Leaf, Wind, Lightbulb, Recycle, TreePine, Activity } from 'lucide-react';

const CurrentGoodImpact = () => {
  const benefits = [
    {
      icon: Wind,
      title: 'Réseaux Énergétiques Intelligents',
      value: '20%',
      description: 'réduction du gaspillage énergétique grâce à l\'optimisation IA',
      color: 'text-green-600'
    },
    {
      icon: TreePine,
      title: 'Modélisation Climatique',
      value: '85%',
      description: 'amélioration de la précision des prévisions météorologiques',
      color: 'text-emerald-600'
    },
    {
      icon: Recycle,
      title: 'Réduction des Déchets',
      value: '30%',
      description: 'diminution des déchets industriels via l\'optimisation IA',
      color: 'text-teal-600'
    },
    {
      icon: Activity,
      title: 'Surveillance du Carbone',
      value: '95%',
      description: 'précision dans les systèmes de suivi des émissions',
      color: 'text-blue-600'
    }
  ];

  const solutions = [
    {
      title: 'Agriculture de Précision',
      description: 'L\'agriculture assistée par IA a le potentiel de réduire considérablement l\'utilisation de pesticides, avec des études démontrant des diminutions allant jusqu\'à 40% ou plus ; elle optimise également la consommation d\'eau et augmente les rendements, tout en minimisant l\'impact environnemental.',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg',
      impact: 'Optimisation des Ressources'
    },
    {
      title: 'Transport Intelligent',
      description: 'Les systèmes de gestion du trafic et d\'optimisation des itinéraires par IA ont le potentiel de réduire la consommation de carburant de 10 à 25% (voire plus dans certains cas) dans les zones urbaines, et minimisent les émissions en optimisant les flux de circulation.',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      impact: 'Réduction des Émissions'
    },
    {
      title: 'Énergie Renouvelable',
      description: 'Grâce aux algorithmes d\'apprentissage automatique, la prédiction des modèles éoliens et solaires est affinée, optimisant ainsi la production d\'énergie renouvelable. Cette amélioration de l\'efficacité peut atteindre 20%, voire davantage, en facilitant une meilleure intégration au réseau et une gestion plus stable de l\'approvisionnement.',
      image: 'https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg',
      impact: 'Optimisation Énergétique'
    },
    {
      title: 'Efforts de Conservation',
      description: 'L\'IA surveille la déforestation, suit les populations d\'animaux sauvages et identifie les priorités de conservation avec une précision sans précédent.',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
      impact: 'Protection de la Biodiversité'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative rounded-3xl overflow-hidden">
        <img
          src="https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg"
          alt="Éoliennes dans un champ vert"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-emerald-900/60 flex items-center">
          <div className="max-w-3xl mx-auto px-8 text-white">
            <Leaf className="h-16 w-16 mb-6 text-green-300" />
            <h2 className="text-4xl font-bold mb-4">Impact Environnemental Positif</h2>
            <p className="text-xl text-green-100">
              L'IA génère déjà des bénéfices environnementaux significatifs, de l'optimisation 
              des systèmes énergétiques à l'activation de solutions climatiques révolutionnaires 
              dans tous les secteurs.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-green-500"
            >
              <div className="flex items-center justify-between mb-4">
                <Icon className={`h-8 w-8 ${benefit.color}`} />
                <span className={`text-2xl font-bold ${benefit.color}`}>{benefit.value}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          );
        })}
      </div>

      {/* Solution Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="relative h-48">
              <img
                src={solution.image}
                alt={solution.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                  {solution.impact}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
              <p className="text-gray-600 leading-relaxed">{solution.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Success Stories */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 text-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Histoires de Succès Réelles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <Lightbulb className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
              <h4 className="font-semibold mb-2">DeepMind de Google</h4>
              <p className="text-green-100 text-sm">
                Réduction de 40% des coûts de refroidissement des centres de données grâce aux systèmes d'optimisation IA.
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <Wind className="h-12 w-12 mx-auto mb-4 text-blue-300" />
              <h4 className="font-semibold mb-2">AI for Earth de Microsoft</h4>
              <p className="text-green-100 text-sm">
                Financement de plus de 300 projets utilisant l'IA pour lutter contre le changement climatique et la perte de biodiversité.
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <TreePine className="h-12 w-12 mx-auto mb-4 text-green-300" />
              <h4 className="font-semibold mb-2">Green Horizons d'IBM</h4>
              <p className="text-green-100 text-sm">
                Prévisions de qualité de l'air alimentées par IA aidant les villes à réduire la pollution de 20%.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Efficiency Improvements */}
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Activity className="h-7 w-7 text-green-600 mr-3" />
          Gains d'Efficacité Pilotés par l'IA
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { sector: 'Fabrication', efficiency: '15%', description: 'Économies d\'énergie grâce à la maintenance prédictive' },
            { sector: 'Transport', efficiency: '25%', description: 'Réduction de carburant via l\'optimisation d\'itinéraires' },
            { sector: 'Bâtiments', efficiency: '30%', description: 'Optimisation CVC et contrôles intelligents' },
            { sector: 'Agriculture', efficiency: '20%', description: 'Réduction de l\'utilisation d\'eau et d\'engrais' },
            { sector: 'Chaîne d\'Approvisionnement', efficiency: '18%', description: 'Réduction des déchets par prévision de la demande' },
            { sector: 'Réseau Énergétique', efficiency: '12%', description: 'Équilibrage de charge et réponse à la demande' }
          ].map((item, index) => (
            <div
              key={index}
              className="border border-green-200 rounded-xl p-4 hover:border-green-400 transition-colors duration-200"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900">{item.sector}</h4>
                <span className="text-2xl font-bold text-green-600">{item.efficiency}</span>
              </div>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrentGoodImpact;