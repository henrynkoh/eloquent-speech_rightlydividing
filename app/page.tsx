import Link from "next/link";
import { curriculum } from "@/lib/curriculum";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Leadership Communication Mastery
          </h1>
          <p className="text-2xl text-gray-700 mb-2">
            5-Day Intensive for Startup Founders
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            High-impact program combining eloquent speech with rightly dividing the words of truth.
            Daily 15-20 min lessons + targeted practice for rapid gains in pitching, leading, and closing deals.
          </p>
        </div>

        {/* Key Verse */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-12 border-l-4 border-indigo-600">
          <p className="text-lg italic text-gray-800 mb-2">
            "Study to shew thyself approved unto God, a workman that needeth not to be ashamed, 
            rightly dividing the word of truth."
          </p>
          <p className="text-sm text-gray-600 text-right">— 2 Timothy 2:15 (KJV)</p>
        </div>

        {/* Curriculum Overview */}
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 mb-12">
          {curriculum.map((lesson) => (
            <Link
              key={lesson.id}
              href={`/lesson/${lesson.id}`}
              className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-indigo-400"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-indigo-100 text-indigo-700 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                      {lesson.day}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">
                        Day {lesson.day}
                      </h2>
                      <p className="text-sm text-gray-500">
                        {lesson.duration}
                      </p>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {lesson.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {lesson.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {lesson.content.keyPoints.slice(0, 3).map((point, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                    >
                      {point.substring(0, 40)}...
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-indigo-600 font-medium">
                  Start Lesson →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Program Benefits */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            What You'll Master
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-2xl">🎯</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Confidence & Presence</h3>
                  <p className="text-gray-600 text-sm">Eliminate weak language, master body language, speak with authority</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">💬</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Storytelling & Voice</h3>
                  <p className="text-gray-600 text-sm">Craft compelling narratives, control tone and pace, use silence strategically</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">🤝</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Boundaries & Conflict</h3>
                  <p className="text-gray-600 text-sm">Say no gracefully, deliver tough feedback, de-escalate difficult situations</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-2xl">📊</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Pitching & Inspiration</h3>
                  <p className="text-gray-600 text-sm">Structure killer pitches, inspire teams, adapt mid-presentation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">⚖️</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Negotiation & Q&A</h3>
                  <p className="text-gray-600 text-sm">Handle high-stakes conversations, master Q&A, communicate in crises</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">📖</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Rightly Dividing Truth</h3>
                  <p className="text-gray-600 text-sm">Understand law vs. grace, Spirit-led vs. ritual-based, speak truth with clarity</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-indigo-600 text-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Communication?</h2>
          <p className="text-lg mb-6 opacity-90">
            Commit to daily practice for fast gains in fundraising, leading teams, and closing deals.
          </p>
          <Link
            href="/lesson/1"
            className="inline-block bg-white text-indigo-600 font-semibold px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors"
          >
            Start Day 1 →
          </Link>
        </div>
      </main>
    </div>
  );
}
