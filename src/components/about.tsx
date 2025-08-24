import { Section } from '@/components/section';
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  return (
    <Section id="about" title="About Me" className="bg-secondary">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-card border-border shadow-lg transition-all duration-300 hover:shadow-primary/20">
          <CardContent className="p-8 md:p-10">
            <p className="text-muted-foreground text-lg mb-4">
              Hello! I'm Dhruv, a frontend developer driven by a passion for
              creating beautiful, intuitive, and high-performance web
              applications. My journey into web development started with a deep
              curiosity for how things work on the web, which has since evolved
              into a career where I can build seamless digital experiences.
            </p>
            <p className="text-muted-foreground text-lg mb-4">
              As a Frontend Developer, I'm focused on crafting intuitive, responsive, and accessible web interfaces. With a strong foundation in React.js, Next.js, and TypeScript, I
              specialize in turning complex ideas into functional and elegant
              user interfaces. I thrive on solving challenges and am constantly
              seeking to learn and adapt to the latest industry trends and
              technologies.
            </p>
            <p className="text-muted-foreground text-lg">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying a good cup of
              coffee. I believe in the power of collaboration and am always
              excited to work with teams that are passionate about building
              great products.
            </p>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
