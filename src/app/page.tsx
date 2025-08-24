import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Recommendations } from '@/components/recommendations';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Skills />
        <Projects />
        <Recommendations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
