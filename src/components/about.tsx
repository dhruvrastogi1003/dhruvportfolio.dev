import { Section } from '@/components/section';
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  return (
    <Section id="about" title="About Me" className="bg-secondary">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-card border-border shadow-lg transition-all duration-300 hover:shadow-primary/20">
          <CardContent className="p-8 md:p-10">
            <p className="text-muted-foreground text-lg">
              Hi, I’m Dhruv — a frontend developer focused on building fast,
              responsive, and accessible web applications using HTML, CSS,
              JavaScript, and React.js. I turn complex ideas into intuitive
              user experiences, with clean code and attention to detail. Always
              learning, always improving.
            </p>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
