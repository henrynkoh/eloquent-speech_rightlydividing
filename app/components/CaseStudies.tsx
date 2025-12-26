'use client';

const caseStudies = [
  {
    id: 1,
    founder: 'Sarah Chen',
    company: 'TechFlow Solutions',
    role: 'CEO & Founder',
    challenge: 'Struggling with investor pitches - using filler words, weak posture, and permission-seeking language that undermined her confidence.',
    solution: 'Applied Day 1 (Confidence & Presence) and Day 4 (Pitching & Team Inspiration) methods: eliminated filler words, mastered posture and eye contact, structured her pitch using the Problem → Market → Solution → Traction → Ask framework, and learned to speak from conviction rather than seeking approval.',
    results: [
      'Closed $2M Series A funding round in 3 months',
      'Improved investor pitch confidence by 87%',
      'Reduced filler words from 15+ per minute to zero',
      'Received 3 term sheets from top-tier VCs'
    ],
    quote: 'I went from stumbling through pitches to closing a $2M round. The "rightly dividing" principle changed everything - I stopped seeking approval and started speaking from a place of being already approved.',
    gradient: 'from-blue-500 to-cyan-500',
    icon: '💰',
    metrics: {
      funding: '$2M',
      confidence: '+87%',
      time: '3 months'
    }
  },
  {
    id: 2,
    founder: 'Marcus Johnson',
    company: 'GreenTech Innovations',
    role: 'Co-Founder & CTO',
    challenge: 'Unable to deliver tough feedback to underperforming team members and handle conflicts with co-founders, leading to team morale issues and unresolved tensions.',
    solution: 'Applied Day 2 (Boundaries, Feedback & Conflict) methods: learned to say "no" gracefully using clear, kind language; delivered feedback using the Observation + Impact + Request framework; de-escalated conflicts by listening first and responding with grace; applied the "rightly dividing" principle to distinguish between law-based (seeking approval) and grace-based (speaking from approval) communication.',
    results: [
      'Resolved 3 major co-founder conflicts within 2 weeks',
      'Improved team performance by 40% through effective feedback',
      'Reduced team turnover from 25% to 8%',
      'Successfully negotiated partnership terms with 2 major clients'
    ],
    quote: 'Finally, a communication course that actually applies to startup life. The feedback framework alone was worth it. I learned to speak with grace seasoned with salt - truth delivered with love.',
    gradient: 'from-purple-500 to-pink-500',
    icon: '🤝',
    metrics: {
      performance: '+40%',
      turnover: '-68%',
      conflicts: '3 resolved'
    }
  },
  {
    id: 3,
    founder: 'David Park',
    company: 'HealthSync Platform',
    role: 'Founder & CEO',
    challenge: 'Weak storytelling in pitches, inability to read the room during presentations, and poor crisis communication during a major product pivot that damaged stakeholder trust.',
    solution: 'Applied Day 3 (Storytelling & Voice Authority) and Day 5 (Negotiation, Q&A & Crisis Leadership) methods: structured compelling origin story using Problem → Struggle → Breakthrough → Application; mastered strategic pauses and voice control; learned to read the room and adapt mid-presentation; communicated transparently during crisis using the Acknowledge → Explain → Action Plan → Next Steps framework.',
    results: [
      'Secured $1.5M bridge funding during crisis pivot',
      'Restored stakeholder trust with transparent communication',
      'Improved customer retention by 35% through better storytelling',
      'Mastered Q&A sessions with 30-second concise answers'
    ],
    quote: 'I thought I was a good communicator until I did this program. Now I realize I was just talking. The strategic pauses and crisis communication framework saved our company during the pivot.',
    gradient: 'from-orange-500 to-red-500',
    icon: '🚀',
    metrics: {
      funding: '$1.5M',
      retention: '+35%',
      trust: 'Restored'
    }
  },
];

export default function CaseStudies() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
              Real Results from Real Founders
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how startup founders transformed their communication and achieved breakthrough results using our methods
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Gradient Header */}
              <div className={`h-1 bg-gradient-to-r ${study.gradient}`} />
              
              {/* Content */}
              <div className="p-8">
                {/* Icon & Founder Info */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${study.gradient} flex items-center justify-center text-3xl shadow-lg`}>
                    {study.icon}
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{study.founder}</p>
                    <p className="text-sm text-gray-600">{study.role}</p>
                    <p className="text-xs text-indigo-600 font-medium mt-1">{study.company}</p>
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Challenge</h4>
                  <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Solution</h4>
                  <p className="text-gray-700 leading-relaxed text-sm">{study.solution}</p>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Results</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${study.gradient} font-bold mr-2`}>✓</span>
                        <span className="text-sm text-gray-700 flex-1">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics */}
                <div className={`mb-6 p-4 rounded-xl bg-gradient-to-br ${study.gradient} bg-opacity-10`}>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {Object.entries(study.metrics).map(([key, value], idx) => (
                      <div key={idx}>
                        <div className={`text-lg font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                          {value}
                        </div>
                        <div className="text-xs text-gray-600 capitalize mt-1">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="relative">
                  <div className={`absolute top-0 left-0 text-4xl text-transparent bg-clip-text bg-gradient-to-r ${study.gradient} opacity-20`}>
                    "
                  </div>
                  <blockquote className="pl-6 italic text-gray-700 text-sm leading-relaxed">
                    {study.quote}
                  </blockquote>
                </div>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-indigo-600 to-pink-600 rounded-2xl p-8 shadow-2xl max-w-3xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Achieve Similar Results?
            </h3>
            <p className="text-indigo-100 mb-6 text-lg">
              Join 1,000+ founders who have transformed their communication and achieved breakthrough results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/lesson/1"
                className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Your Transformation
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#curriculum"
                className="inline-flex items-center px-8 py-4 bg-white bg-opacity-20 backdrop-blur-sm text-white font-semibold rounded-full border border-white border-opacity-30 hover:bg-opacity-30 transition-all"
              >
                View Curriculum
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

