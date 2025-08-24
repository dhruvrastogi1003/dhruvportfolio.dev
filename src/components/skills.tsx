import { Section } from '@/components/section';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { SKILLS } from '@/lib/data';

export function Skills() {
  return (
    <Section id="skills" title="My Skills">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {SKILLS.map((skill) => (
          <Card key={skill.name} className="flex flex-col items-center justify-center p-6 text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <CardHeader className="p-0">
              <skill.icon className="h-12 w-12 mx-auto text-primary mb-4" />
              <CardTitle className="text-base font-medium">{skill.name}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Section>
  );
}
