import React from 'react';
import { Lightbulb, Rocket, Brain, Globe, Zap, TreePine } from 'lucide-react';

const FutureImpact = () => {
  const projections = [
    {
      icon: Zap,
      title: 'Energy Efficiency',
      value: '50%',
      description: 'potential reduction in global energy consumption by 2035',
      color: 'text-blue-600',
      timeline: '2030-2035'
    },
    {
      icon: TreePine,
      title: 'Carbon Capture',
      value: '10 Gt',
      description: 'CO₂ removal capacity through AI-optimized systems',
      color: 'text-green-600',
      timeline: '2035-2040'
    },
    {
      icon: Globe,
      title: 'Climate Modeling',
      value: '99%',
      description: 'accuracy in long-term climate predictions',
      color: 'text-purple-600',
      timeline: '2028-2030'
    },
    {
      icon: Brain,
      title: 'Green AI',
      value: '90%',
      description: 'reduction in AI training energy requirements',
      color: 'text-teal-600',
      timeline: '2027-2030'
    }
  ];

  const innovations = [
    {
      title: 'Quantum-Enhanced Climate Models',
      description: 'Quantum computing combined with AI will enable unprecedented accuracy in climate simulations, helping us understand and mitigate environmental changes with precision.',
      timeline: '2028-2032',
      impact: 'Revolutionary',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg'
    },
    {
      title: 'Autonomous Carbon Capture',
      description: 'Self-managing AI systems will operate massive carbon capture facilities, optimizing efficiency and scaling to remove gigatons of CO₂ from the atmosphere.',
      timeline: '2030-2035',
      impact: 'Transformative',
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg'
    },
    {
      title: 'Neural Weather Control',
      description: 'Advanced AI may enable limited weather modification to prevent extreme climate events and optimize conditions for agriculture and renewable energy.',
      timeline: '2035-2040',
      impact: 'Experimental',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg'
    }
  ];

  const scenarios = [
    {
      title: 'Optimistic Scenario',
      description: 'AI development becomes carbon-negative by 2030 through breakthrough efficiency gains and renewable energy adoption.',
      probability: '35%',
      color: 'green',
      outcomes: [
        'Net-positive environmental impact',
        'Exponential clean energy growth',
        'Reversed climate change trends'
      ]
    },
    {
      title: 'Balanced Scenario',
      description: 'Steady progress in AI sustainability with modest environmental gains while managing continued growth in computing demands.',
      probability: '50%',
      color: 'blue',
      outcomes: [
        'Stabilized emissions growth',
        'Incremental efficiency improvements',
        'Sustainable AI development practices'
      ]
    },
    {
      title: 'Challenging Scenario',
      description: 'AI growth outpaces sustainability efforts, requiring urgent intervention and regulation to prevent environmental damage.',
      probability: '15%',
      color: 'red',
      outcomes: [
        'Accelerated environmental impact',
        'Regulatory constraints on AI',
        'Emergency sustainability measures'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative rounded-3xl overflow-hidden">
        <img
          src="https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg"
          alt="Futuristic cityscape with green technology"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/60 flex items-center">
          <div className="max-w-3xl mx-auto px-8 text-white">
            <Rocket className="h-16 w-16 mb-6 text-blue-300" />
            <h2 className="text-4xl font-bold mb-4">Future Environmental Impact</h2>
            <p className="text-xl text-blue-100">
              The next decade will determine whether AI becomes humanity's greatest environmental 
              asset or its most challenging obstacle in the fight against climate change.
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
          Breakthrough Technologies
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
                      innovation.impact === 'Revolutionary' ? 'bg-purple-100 text-purple-800' :
                      innovation.impact === 'Transformative' ? 'bg-blue-100 text-blue-800' :
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
          Potential Future Scenarios
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
          <h3 className="text-3xl font-bold mb-4">Shaping AI's Environmental Future</h3>
          <p className="text-purple-100 mb-8 text-lg leading-relaxed">
            The choices we make today in AI development, regulation, and deployment will determine 
            the environmental legacy we leave for future generations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <Brain className="h-10 w-10 mx-auto mb-3 text-blue-300" />
              <h4 className="font-semibold mb-2">Research & Development</h4>
              <p className="text-purple-100 text-sm">
                Invest in green AI technologies and energy-efficient computing solutions.
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <Globe className="h-10 w-10 mx-auto mb-3 text-green-300" />
              <h4 className="font-semibold mb-2">Global Cooperation</h4>
              <p className="text-purple-100 text-sm">
                Establish international standards for sustainable AI development.
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <Rocket className="h-10 w-10 mx-auto mb-3 text-yellow-300" />
              <h4 className="font-semibold mb-2">Innovation Acceleration</h4>
              <p className="text-purple-100 text-sm">
                Fast-track deployment of AI solutions for climate challenges.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg font-medium mb-2">The Future is in Our Hands</p>
            <p className="text-purple-200">
              By 2030, AI could either be our greatest ally or our biggest challenge in achieving net-zero emissions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureImpact;