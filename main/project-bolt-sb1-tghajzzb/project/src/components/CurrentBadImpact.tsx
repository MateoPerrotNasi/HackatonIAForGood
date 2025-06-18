import React from 'react';
import { Zap, Factory, ThermometerSun, Database, AlertCircle } from 'lucide-react';

const CurrentBadImpact = () => {
  const stats = [
    {
      icon: Zap,
      title: 'Energy Consumption',
      value: '3.7%',
      description: 'of global electricity used by data centers',
      color: 'text-red-600'
    },
    {
      icon: Factory,
      title: 'Carbon Emissions',
      value: '300M tons',
      description: 'CO₂ equivalent annually from AI training',
      color: 'text-orange-600'
    },
    {
      icon: ThermometerSun,
      title: 'Heat Generation',
      value: '40°C+',
      description: 'average data center operating temperature',
      color: 'text-yellow-600'
    },
    {
      icon: Database,
      title: 'Data Storage',
      value: '59 ZB',
      description: 'of data created annually requiring storage',
      color: 'text-purple-600'
    }
  ];

  const challenges = [
    {
      title: 'Training Large Models',
      description: 'Training GPT-3 consumed as much energy as 126 Danish homes use in a year. Each training run of large language models can emit hundreds of tons of CO₂.',
      impact: 'High Energy Cost'
    },
    {
      title: 'Data Center Infrastructure',
      description: 'AI workloads require specialized hardware like GPUs that consume significantly more power than traditional servers, often running 24/7.',
      impact: 'Continuous Power Draw'
    },
    {
      title: 'Hardware Manufacturing',
      description: 'Production of AI chips requires rare earth minerals and generates substantial emissions before the hardware even becomes operational.',
      impact: 'Embodied Carbon'
    },
    {
      title: 'Model Inference',
      description: 'Every query to ChatGPT or similar models requires computational resources, with millions of daily users creating enormous aggregate demand.',
      impact: 'Scale Effect'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative rounded-3xl overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg"
          alt="Industrial smokestacks"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-orange-900/60 flex items-center">
          <div className="max-w-3xl mx-auto px-8 text-white">
            <AlertCircle className="h-16 w-16 mb-6 text-red-300" />
            <h2 className="text-4xl font-bold mb-4">Environmental Challenges</h2>
            <p className="text-xl text-red-100">
              AI's rapid growth has created significant environmental concerns, from massive energy consumption 
              to carbon emissions that rival entire countries.
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
          Major Environmental Challenges
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
          <h3 className="text-2xl font-bold mb-4">The Challenge is Real</h3>
          <p className="text-red-100 mb-6 leading-relaxed">
            Without intervention, AI's environmental impact could grow exponentially. However, awareness 
            and action can drive positive change toward more sustainable AI development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold">626%</div>
              <div className="text-sm text-red-100">Projected AI energy growth by 2030</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold">$23B</div>
              <div className="text-sm text-red-100">Annual energy costs for AI by 2030</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentBadImpact;