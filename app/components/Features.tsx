'use client';

const features = [
  {
    icon: '🎯',
    title: 'Startup-Specific',
    description: 'Every exercise tailored to real entrepreneurial scenarios: investor pitches, team leadership, negotiations, and crises.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: '📖',
    title: 'Biblical Foundation',
    description: 'Integrates "rightly dividing the words of truth" - understanding truth itself so you speak with authority.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: '💪',
    title: 'Hands-On Practice',
    description: 'Not just theory - practical exercises you apply immediately. Record yourself, role-play, and practice daily.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: '🚀',
    title: 'Progressive Building',
    description: 'Structured 5-day program that builds from personal confidence to high-stakes influence.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: '⏱️',
    title: 'Time-Efficient',
    description: 'Just 30-45 minutes per day. No lengthy courses - focused learning with immediate application.',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: '🆓',
    title: 'Completely Free',
    description: 'No credit card required. No hidden fees. Just learning and transformation.',
    color: 'from-pink-500 to-rose-500',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
              What Makes This Different
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Not just another communication course. A comprehensive program designed specifically for startup founders.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-4xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

