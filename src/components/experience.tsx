import { Section } from '@/components/section';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    role: 'Web Full Stack Developer Intern',
    company: 'AICTE by EduSkills (Virtual)',
    period: 'April 2025 - June 2025',
    description:
      'A virtual internship focused on full-stack web development, gaining hands-on experience with modern technologies.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Datopic Technology Private limited (Onsite)',
    period: 'Nov 2023 - Mar 2024',
    description:
      'Gained practical experience in frontend development, working on real-world projects in an onsite environment, contributing to the user interface and overall user experience.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React.js'],
  },
];

export function Experience() {
  return (
    <Section id="experience" title="Work Experience">
      <div className="max-w-4xl mx-auto">
        <div className="relative pl-6 before:absolute before:inset-y-0 before:w-1 before:bg-primary/20 before:left-2">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 pl-8 relative group">
              <div className="absolute left-[-4px] top-1.5 h-4 w-4 bg-primary rounded-full ring-8 ring-background transition-transform duration-300 group-hover:scale-110">
              </div>
              <Card className="bg-secondary border-secondary-foreground/20 transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="text-foreground/90">{exp.role}</CardTitle>
                        <CardDescription className="mt-1 text-accent-foreground/80">{exp.company}</CardDescription>
                    </div>
                    <Badge variant="outline" className="hidden sm:block border-accent text-accent">{exp.period}</Badge>
                  </div>
                   <CardDescription className="sm:hidden pt-2">{exp.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
