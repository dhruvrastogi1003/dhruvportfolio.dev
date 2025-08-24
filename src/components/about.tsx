import { Section } from '@/components/section';
import Image from 'next/image';

export function About() {
  return (
    <Section id="about" title="About Me" className="bg-secondary">
      <div className="grid md:grid-cols-3 gap-12 items-center">
        <div className="relative h-64 w-64 mx-auto md:h-80 md:w-80 col-span-1">
          <Image
            src="https://placehold.co/400x400.png"
            alt="Dhruv Rastogi"
            data-ai-hint="professional headshot"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div className="md:col-span-2 text-center md:text-left">
          <p className="text-muted-foreground text-lg mb-4">
            Hello! I'm Dhruv, a frontend developer driven by a passion for creating beautiful, intuitive, and high-performance web applications. My journey into web development started with a deep curiosity for how things work on the web, which has since evolved into a career where I can build seamless digital experiences.
          </p>
          <p className="text-muted-foreground text-lg mb-4">
            With a strong foundation in React.js, Next.js, and TypeScript, I specialize in turning complex ideas into functional and elegant user interfaces. I thrive on solving challenges and am constantly seeking to learn and adapt to the latest industry trends and technologies.
          </p>
          <p className="text-muted-foreground text-lg">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee. I believe in the power of collaboration and am always excited to work with teams that are passionate about building great products.
          </p>
        </div>
      </div>
    </Section>
  );
}
