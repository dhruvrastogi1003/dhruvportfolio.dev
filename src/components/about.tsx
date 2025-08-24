import { Section } from '@/components/section';
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  return (
    <Section id="about" title="About Me" className="bg-secondary">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-card border-border shadow-lg transition-all duration-300 hover:shadow-primary/20">
          <CardContent className="p-8 md:p-10">
            <p className="text-muted-foreground text-lg">
              Frontend Developer focused on crafting intuitive, responsive, and
              accessible web interfaces. Passionate about clean code and better
              user experiences.
            </p>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
