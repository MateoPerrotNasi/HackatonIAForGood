import React from 'react';
import { Lightbulb, Rocket, Brain, Globe, Zap, TreePine } from 'lucide-react';

const FutureImpact = () => {
  const projections = [
    {
      icon: Zap,
      title: 'Efficacité Énergétique',
      value: '50%',
      description: 'réduction potentielle de la consommation énergétique mondiale d\'ici 2035',
      color: 'text-blue-600',
      timeline: '2030-2035'
    },
    {
      icon: TreePine,
      title: 'Capture de Carbone',
      value: '10 Gt',
      description: 'capacité de retrait de CO₂ via des systèmes optimisés par IA',
      color: 'text-green-600',
      timeline: '2035-2040'
    },
    {
      icon: Globe,
      title: 'Modélisation Climatique',
      value: '99%',
      description: 'précision dans les prédictions climatiques à long terme',
      color: 'text-purple-600',
      timeline: '2028-2030'
    },
    {
      icon: Brain,
      title: 'IA Verte',
      value: '90%',
      description: 'réduction des besoins énergétiques d\'entraînement IA',
      color: 'text-teal-600',
      timeline: '2027-2030'
    }
  ];

  const innovations = [
    {
      title: 'Modèles Climatiques Quantiques Améliorés',
      description: 'L\'informatique quantique combinée à l\'IA permettra une précision sans précédent dans les simulations climatiques, nous aidant à comprendre et atténuer les changements environnementaux avec précision.',
      timeline: '2028-2032',
      impact: 'Révolutionnaire',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg'
    },
    {
      title: 'Capture de Carbone Autonome',
      description: 'Des systèmes IA auto-gérés exploiteront d\'énormes installations de capture de carbone, optimisant l\'efficacité et s\'adaptant pour retirer des gigatonnes de CO₂ de l\'atmosphère.',
      timeline: '2030-2035',
      impact: 'Transformateur',
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg'
    },
    {
      title: 'Contrôle Météorologique Neural',
      description: 'L\'IA avancée pourrait permettre une modification météorologique limitée pour prévenir les événements climatiques extrêmes et optimiser les conditions pour l\'agriculture et les énergies renouvelables.',
      timeline: '2035-2040',
      impact: 'Expérimental',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg'
    }
  ];

  const scenarios = [
    {
      title: 'Scénario Optimiste',
      description: 'Le développement de l\'IA permet de stopper sa propre augmentation énergétique d\'ici 2040 grâce aux gains d\'efficacité révolutionnaires et à l\'adoption d\'énergies renouvelables.',
      probability: '',
      color: 'green',
      outcomes: [
        'Impact environnemental net positif',
        'Croissance exponentielle de l\'énergie propre',
        'Tendances du changement climatique inversées'
      ]
    },
    {
      title: 'Scénario Équilibré',
      description: 'Progrès régulier dans la durabilité de l\'IA avec des gains environnementaux modestes tout en gérant la croissance continue des demandes informatiques.',
      probability: '',
      color: 'blue',
      outcomes: [
        'Croissance des émissions stabilisée',
        'Améliorations d\'efficacité progressives',
        'Pratiques de développement IA durables'
      ]
    },
    {
      title: 'Scénario Difficile',
      description: 'La croissance de l\'IA dépasse les efforts de durabilité, nécessitant une intervention urgente et une réglementation pour prévenir les dommages environnementaux.',
      probability: '',
      color: 'red',
      outcomes: [
        'Impact environnemental accéléré',
        'Contraintes réglementaires sur l\'IA',
        'Mesures de durabilité d\'urgence'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative rounded-3xl overflow-hidden">
        <img
          src="https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg"
          alt="Paysage urbain futuriste avec technologie verte"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/60 flex items-center">
          <div className="max-w-3xl mx-auto px-8 text-white">
            <Rocket className="h-16 w-16 mb-6 text-blue-300" />
            <h2 className="text-4xl font-bold mb-4">Impact Environnemental Futur</h2>
            <p className="text-xl text-blue-100">
              La prochaine décennie déterminera si l'IA devient le plus grand atout environnemental 
              de l'humanité ou son obstacle le plus difficile dans la lutte contre le changement climatique.
            </p>
          </div>
        </div>
      </div>

      {/* Future Projections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projections.map((projection, index) => {
          const Icon = projection.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-blue-500"
            >
              <div className="flex items-center justify-between mb-4">
                <Icon className={`h-8 w-8 ${projection.color}`} />
                <span className={`text-2xl font-bold ${projection.color}`}>{projection.value}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{projection.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{projection.description}</p>
              <div className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full inline-block">
                {projection.timeline}
              </div>
            </div>
          );
        })}
      </div>

      {/* Future Innovations */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900 flex items-center">
          <Lightbulb className="h-7 w-7 text-yellow-500 mr-3" />
          Technologies Révolutionnaires
        </h3>
        {innovations.map((innovation, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="lg:flex">
              <div className="lg:w-1/3">
                <img
                  src={innovation.image}
                  alt={innovation.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="lg:w-2/3 p-8">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-semibold text-gray-900">{innovation.title}</h4>
                  <div className="flex flex-col items-end space-y-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      innovation.impact === 'Révolutionnaire' ? 'bg-purple-100 text-purple-800' :
                      innovation.impact === 'Transformateur' ? 'bg-blue-100 text-blue-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {innovation.impact}
                    </span>
                    <span className="text-gray-500 text-sm">{innovation.timeline}</span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{innovation.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Future Scenarios */}
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Globe className="h-7 w-7 text-green-600 mr-3" />
          Scénarios Futurs Potentiels
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {scenarios.map((scenario, index) => (
            <div
              key={index}
              className={`border-2 rounded-xl p-6 hover:shadow-lg transition-all duration-300 ${
                scenario.color === 'green' ? 'border-green-200 hover:border-green-400' :
                scenario.color === 'blue' ? 'border-blue-200 hover:border-blue-400' :
                'border-red-200 hover:border-red-400'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900">{scenario.title}</h4>
                <span className={`text-2xl font-bold ${
                  scenario.color === 'green' ? 'text-green-600' :
                  scenario.color === 'blue' ? 'text-blue-600' :
                  'text-red-600'
                }`}>
                  {scenario.probability}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{scenario.description}</p>
              <div className="space-y-2">
                {scenario.outcomes.map((outcome, outcomeIndex) => (
                  <div
                    key={outcomeIndex}
                    className={`text-xs px-3 py-1 rounded-full inline-block mr-2 mb-1 ${
                      scenario.color === 'green' ? 'bg-green-100 text-green-800' :
                      scenario.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                      'bg-red-100 text-red-800'
                    }`}
                  >
                    {outcome}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action for the Future */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Façonner l'Avenir Environnemental de l'IA</h3>
          <p className="text-purple-100 mb-8 text-lg leading-relaxed">
            Les choix que nous faisons aujourd'hui dans le développement, la réglementation et 
            le déploiement de l'IA détermineront l'héritage environnemental que nous laissons 
            aux générations futures.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <Brain className="h-10 w-10 mx-auto mb-3 text-blue-300" />
              <h4 className="font-semibold mb-2">Recherche & Développement</h4>
              <p className="text-purple-100 text-sm">
                Investir dans les technologies IA vertes et les solutions informatiques économes en énergie.
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <Globe className="h-10 w-10 mx-auto mb-3 text-green-300" />
              <h4 className="font-semibold mb-2">Coopération Mondiale</h4>
              <p className="text-purple-100 text-sm">
                Établir des normes internationales pour le développement durable de l'IA.
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <Rocket className="h-10 w-10 mx-auto mb-3 text-yellow-300" />
              <h4 className="font-semibold mb-2">Accélération de l'Innovation</h4>
              <p className="text-purple-100 text-sm">
                Accélérer le déploiement de solutions IA pour les défis climatiques.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg font-medium mb-2">L'Avenir est Entre Nos Mains</p>
            <p className="text-purple-200">
              D'ici 2030, l'IA pourrait être soit notre plus grand allié soit notre plus grand défi pour atteindre les émissions nettes zéro.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureImpact;