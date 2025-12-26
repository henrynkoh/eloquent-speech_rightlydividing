import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getLessonById, curriculum } from "@/lib/curriculum";

interface LessonPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return curriculum.map((lesson) => ({
    id: lesson.id.toString(),
  }));
}

export async function generateMetadata({ params }: LessonPageProps): Promise<Metadata> {
  const { id } = await params;
  const lesson = getLessonById(parseInt(id));
  
  if (!lesson) {
    return {
      title: "Lesson Not Found",
    };
  }

  return {
    title: `Day ${lesson.day}: ${lesson.title} | Leadership Communication Mastery`,
    description: lesson.description,
  };
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { id } = await params;
  const lesson = getLessonById(parseInt(id));

  if (!lesson) {
    notFound();
  }

  const currentIndex = curriculum.findIndex((l) => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? curriculum[currentIndex - 1] : null;
  const nextLesson = currentIndex < curriculum.length - 1 ? curriculum[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Navigation */}
        <div className="mb-6">
          <Link
            href="/"
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            ← Back to Curriculum
          </Link>
        </div>

        {/* Lesson Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-indigo-600">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-indigo-100 text-indigo-700 rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl">
              {lesson.day}
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                Day {lesson.day}: {lesson.title}
              </h1>
              <p className="text-gray-600 mt-1">{lesson.duration}</p>
            </div>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed">
            {lesson.description}
          </p>
        </div>

        {/* Overview */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed">{lesson.content.overview}</p>
        </section>

        {/* Key Points */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Points</h2>
          <ul className="space-y-3">
            {lesson.content.keyPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold mt-1">•</span>
                <span className="text-gray-700 flex-1">{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Biblical Foundation */}
        {lesson.content.biblicalFoundation && (
          <section className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl shadow-md p-8 mb-6 border border-indigo-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Biblical Foundation</h2>
            <div className="bg-white rounded-lg p-6 mb-4">
              <p className="text-lg italic text-gray-800 mb-2">
                "{lesson.content.biblicalFoundation.verse}"
              </p>
              <p className="text-sm text-gray-600 text-right">
                — {lesson.content.biblicalFoundation.reference}
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {lesson.content.biblicalFoundation.explanation}
            </p>
          </section>
        )}

        {/* Right Division */}
        {lesson.content.rightDivision && (
          <section className="bg-amber-50 rounded-xl shadow-md p-8 mb-6 border-l-4 border-amber-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Rightly Dividing: {lesson.content.rightDivision.concept}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {lesson.content.rightDivision.explanation}
            </p>
            {lesson.content.rightDivision.verses && (
              <div className="space-y-3">
                {lesson.content.rightDivision.verses.map((verse, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4">
                    <p className="text-gray-800 mb-1">"{verse.text}"</p>
                    <p className="text-sm text-gray-600 text-right">— {verse.reference}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Practice Exercise */}
        <section className="bg-green-50 rounded-xl shadow-md p-8 mb-6 border-l-4 border-green-500">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Practice: {lesson.content.practice.title}
          </h2>
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Instructions:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              {lesson.content.practice.instructions.map((instruction, idx) => (
                <li key={idx} className="leading-relaxed">{instruction}</li>
              ))}
            </ol>
            {lesson.content.practice.examples && (
              <div className="mt-6">
                <h3 className="font-semibold text-gray-900 mb-3">Examples:</h3>
                <div className="space-y-2">
                  {lesson.content.practice.examples.map((example, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded p-3 text-sm text-gray-700 font-mono"
                    >
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Navigation Between Lessons */}
        <div className="flex justify-between items-center gap-4 mt-8">
          {prevLesson ? (
            <Link
              href={`/lesson/${prevLesson.id}`}
              className="flex-1 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border border-gray-200"
            >
              <p className="text-sm text-gray-600 mb-1">Previous</p>
              <p className="font-semibold text-gray-900">
                Day {prevLesson.day}: {prevLesson.title}
              </p>
            </Link>
          ) : (
            <div className="flex-1"></div>
          )}
          
          {nextLesson ? (
            <Link
              href={`/lesson/${nextLesson.id}`}
              className="flex-1 bg-indigo-600 text-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow text-right"
            >
              <p className="text-sm opacity-90 mb-1">Next</p>
              <p className="font-semibold">
                Day {nextLesson.day}: {nextLesson.title} →
              </p>
            </Link>
          ) : (
            <div className="flex-1"></div>
          )}
        </div>

        {/* Completion Message */}
        {!nextLesson && (
          <div className="mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">🎉 Congratulations!</h2>
            <p className="text-lg mb-6 opacity-90">
              You've completed the 5-Day Intensive. Keep practicing daily to see rapid gains in 
              pitching, leading, and closing deals.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-indigo-600 font-semibold px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors"
            >
              Review Curriculum
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
