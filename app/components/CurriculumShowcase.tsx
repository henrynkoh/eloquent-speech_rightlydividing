'use client';

import Link from 'next/link';
import { curriculum } from '@/lib/curriculum';

const colors = [
  'from-blue-500 to-cyan-500',
  'from-purple-500 to-pink-500',
  'from-orange-500 to-red-500',
  'from-green-500 to-emerald-500',
  'from-indigo-500 to-blue-500',
];

export default function CurriculumShowcase() {
  return (
    <section id="curriculum" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
              5-Day Intensive Curriculum
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Progressive skill-building from personal confidence to high-stakes influence
          </p>
        </div>

        {/* Curriculum Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {curriculum.map((lesson, index) => (
            <Link
              key={lesson.id}
              href={`/lesson/${lesson.id}`}
              className="group relative"
            >
              <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${colors[index % colors.length]}`} />
                
                {/* Content */}
                <div className="p-6">
                  {/* Day Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colors[index % colors.length]} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                      {lesson.day}
                    </div>
                    <span className="text-sm text-gray-500 font-medium">{lesson.duration}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {lesson.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {lesson.description}
                  </p>

                  {/* Key Points Preview */}
                  <div className="space-y-2 mb-4">
                    {lesson.content.keyPoints.slice(0, 2).map((point, idx) => (
                      <div key={idx} className="flex items-start">
                        <span className="text-indigo-500 mr-2">✓</span>
                        <span className="text-sm text-gray-600 line-clamp-1">{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-indigo-600 font-semibold group-hover:translate-x-2 transition-transform">
                    Start Lesson
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${colors[index % colors.length]} opacity-0 group-hover:opacity-5 transition-opacity`} />
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Link
            href="/lesson/1"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Start Your 5-Day Transformation
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

