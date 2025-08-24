import { Section } from '@/components/section';
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardContent className="p-8 text-center text-lg text-muted-foreground">
            <p>
              I am a dedicated and passionate frontend developer with a knack for creating beautiful, intuitive, and highly performant web applications. With a strong foundation in React.js and a love for clean, efficient code, I strive to build seamless user experiences. I am a lifelong learner, always excited to explore new technologies and improve my craft.
            </p>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
