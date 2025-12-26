import Hero from './components/Hero';
import Features from './components/Features';
import CaseStudies from './components/CaseStudies';
import CurriculumShowcase from './components/CurriculumShowcase';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="lg:ml-80">
        <Hero />
        <Features />
        <CaseStudies />
        <CurriculumShowcase />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}
