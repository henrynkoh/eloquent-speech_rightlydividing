'use client';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Founder',
    quote: 'I went from stumbling through pitches to closing a $2M round. This program changed everything.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Marcus Johnson',
    role: 'CEO',
    quote: 'Finally, a communication course that actually applies to startup life. The investor pitch framework alone was worth it.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'David Park',
    role: 'Co-Founder',
    quote: 'I thought I was a good communicator until I did this program. Now I realize I was just talking. Now I\'m actually communicating.',
    gradient: 'from-orange-500 to-red-500',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              What Founders Are Saying
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join 1,000+ founders transforming their communication skills
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center mb-6`}>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Quote */}
              <p className="text-lg text-gray-200 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold mr-4`}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2">87%</div>
            <div className="text-gray-300">Improved Pitch Confidence</div>
          </div>
          <div>
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent mb-2">92%</div>
            <div className="text-gray-300">Better at Difficult Conversations</div>
          </div>
          <div>
            <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent mb-2">79%</div>
            <div className="text-gray-300">Close More Deals</div>
          </div>
          <div>
            <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-2">94%</div>
            <div className="text-gray-300">Would Recommend</div>
          </div>
        </div>
      </div>
    </section>
  );
}

