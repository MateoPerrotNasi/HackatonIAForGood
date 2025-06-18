import React from 'react';
import { Leaf, Wind, Lightbulb, Recycle, TreePine, Activity } from 'lucide-react';

const CurrentGoodImpact = () => {
  const benefits = [
    {
      icon: Wind,
      title: 'Smart Energy Grids',
      value: '20%',
      description: 'reduction in energy waste through AI optimization',
      color: 'text-green-600'
    },
    {
      icon: TreePine,
      title: 'Climate Modeling',
      value: '85%',
      description: 'accuracy improvement in weather predictions',
      color: 'text-emerald-600'
    },
    {
      icon: Recycle,
      title: 'Waste Reduction',
      value: '30%',
      description: 'decrease in industrial waste via AI optimization',
      color: 'text-teal-600'
    },
    {
      icon: Activity,
      title: 'Carbon Monitoring',
      value: '95%',
      description: 'precision in emissions tracking systems',
      color: 'text-blue-600'
    }
  ];

  const solutions = [
    {
      title: 'Precision Agriculture',
      description: 'AI-powered farming reduces pesticide use by 40%, optimizes water consumption, and increases crop yields while minimizing environmental impact.',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg',
      impact: 'Resource Optimization'
    },
    {
      title: 'Smart Transportation',
      description: 'AI traffic management systems reduce fuel consumption by 25% in urban areas and optimize delivery routes to minimize emissions.',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      impact: 'Emission Reduction'
    },
    {
      title: 'Renewable Energy',
      description: 'Machine learning algorithms predict wind and solar patterns, increasing renewable energy efficiency by up to 20%.',
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg',
      impact: 'Clean Energy'
    },
    {
      title: 'Conservation Efforts',
      description: 'AI monitors deforestation, tracks wildlife populations, and identifies conservation priorities with unprecedented precision.',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
      impact: 'Biodiversity Protection'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative rounded-3xl overflow-hidden">
        <img
          src="https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg"
          alt="Wind turbines in green field"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-emerald-900/60 flex items-center">
          <div className="max-w-3xl mx-auto px-8 text-white">
            <Leaf className="h-16 w-16 mb-6 text-green-300" />
            <h2 className="text-4xl font-bold mb-4">Positive Environmental Impact</h2>
            <p className="text-xl text-green-100">
              AI is already driving significant environmental benefits, from optimizing energy systems 
              to enabling breakthrough climate solutions across industries.
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
          <h3 className="text-2xl font-bold mb-6 text-center">Real-World Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <Lightbulb className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
              <h4 className="font-semibold mb-2">Google's DeepMind</h4>
              <p className="text-green-100 text-sm">
                Reduced data center cooling costs by 40% using AI-powered optimization systems.
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <Wind className="h-12 w-12 mx-auto mb-4 text-blue-300" />
              <h4 className="font-semibold mb-2">Microsoft's AI for Earth</h4>
              <p className="text-green-100 text-sm">
                Funded 300+ projects using AI to address climate change and biodiversity loss.
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <TreePine className="h-12 w-12 mx-auto mb-4 text-green-300" />
              <h4 className="font-semibold mb-2">IBM's Green Horizons</h4>
              <p className="text-green-100 text-sm">
                AI-powered air quality forecasting helping cities reduce pollution by 20%.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Efficiency Improvements */}
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Activity className="h-7 w-7 text-green-600 mr-3" />
          AI-Driven Efficiency Gains
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { sector: 'Manufacturing', efficiency: '15%', description: 'Energy savings through predictive maintenance' },
            { sector: 'Transportation', efficiency: '25%', description: 'Fuel reduction via route optimization' },
            { sector: 'Buildings', efficiency: '30%', description: 'HVAC optimization and smart controls' },
            { sector: 'Agriculture', efficiency: '20%', description: 'Water and fertilizer usage reduction' },
            { sector: 'Supply Chain', efficiency: '18%', description: 'Waste reduction through demand forecasting' },
            { sector: 'Energy Grid', efficiency: '12%', description: 'Load balancing and demand response' }
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