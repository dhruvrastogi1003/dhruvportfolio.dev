import { Section } from '@/components/section';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { SKILLS } from '@/lib/data';

const SkillCard = ({ skill }: { skill: (typeof SKILLS)[0] }) => (
  <Card className="flex flex-col items-center justify-center p-6 text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg w-40 h-40 shrink-0">
    <CardHeader className="p-0">
      <skill.icon className="h-12 w-12 mx-auto text-primary mb-4" />
      <CardTitle className="text-base font-medium">{skill.name}</CardTitle>
    </CardHeader>
  </Card>
);

export function Skills() {
  const duplicatedSkills = [...SKILLS, ...SKILLS];

  return (
    <Section id="skills" title="My Skills">
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to right, hsl(var(--background)), transparent 10%, transparent 90%, hsl(var(--background)))' }} />
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {duplicatedSkills.map((skill, index) => (
             <div key={index} className="px-3">
                <SkillCard skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
