'use client';

import Link from 'next/link';
import { useState } from 'react';
import { curriculum } from '@/lib/curriculum';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-indigo-600 text-white p-3 rounded-lg shadow-lg hover:bg-indigo-700 transition-colors"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 text-white z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 shadow-2xl`}
      >
        <div className="flex flex-col h-full p-6 overflow-y-auto">
          {/* Logo/Header */}
          <div className="mb-8 pt-4">
            <h1 className="text-2xl font-bold mb-2 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Leadership Communication
            </h1>
            <p className="text-sm text-indigo-200">5-Day Intensive</p>
            <div className="mt-4 p-3 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
              <p className="text-xs italic text-indigo-100">
                "Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth."
              </p>
              <p className="text-xs text-indigo-300 mt-1">— 2 Timothy 2:15</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <div className="mb-6">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg bg-white bg-opacity-10 hover:bg-opacity-20 transition-all mb-2 font-semibold"
              >
                🏠 Home
              </Link>
            </div>

            <div className="mb-4">
              <h3 className="text-xs uppercase tracking-wider text-indigo-300 mb-3 px-4">Curriculum</h3>
              <ul className="space-y-2">
                {curriculum.map((lesson) => (
                  <li key={lesson.id}>
                    <Link
                      href={`/lesson/${lesson.id}`}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center px-4 py-2.5 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all group"
                    >
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-sm font-bold text-white mr-3 group-hover:scale-110 transition-transform">
                        {lesson.day}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{lesson.title}</p>
                        <p className="text-xs text-indigo-300 truncate">{lesson.duration}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-white border-opacity-20 pt-4 mt-6">
              <h3 className="text-xs uppercase tracking-wider text-indigo-300 mb-3 px-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/appendix"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all"
                  >
                    <span className="mr-3">📖</span>
                    <span className="text-sm">Rightly Dividing Appendix</span>
                  </Link>
                </li>
                <li>
                  <a
                    href="https://github.com/henrynkoh/eloquent-speech_rightlydividing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all"
                  >
                    <span className="mr-3">📚</span>
                    <span className="text-sm">GitHub Repo</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          {/* Footer */}
          <div className="mt-auto pt-6 border-t border-white border-opacity-20">
            <p className="text-xs text-indigo-300 text-center">
              Transform your communication in 5 days
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

