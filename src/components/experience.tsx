import { Section } from '@/components/section';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Web Full Stack Developer Intern',
    company: 'AICTE by EduSkills Academy (Virtual)',
    period: 'April 2025 - June 2025',
    description:
      'A virtual internship focused on full-stack web development, gaining hands-on experience with modern technologies.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Datopic Technology Private Limited, Noida, Uttar Pradesh, India (Onsite)',
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
        <div className="relative pl-6">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 pl-8 relative group">
              <div className="absolute left-[-24px] top-1.5 h-10 w-10 bg-primary rounded-full flex items-center justify-center ring-8 ring-background transition-transform duration-300 group-hover:scale-110">
                <Briefcase className="h-5 w-5 text-primary-foreground" />
              </div>
              {index < experiences.length - 1 && (
                <div className="absolute left-0 top-5 bottom-[-3rem] w-1 bg-primary/20"></div>
              )}
              <Card className="bg-secondary border-border transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="text-foreground/90">{exp.role}</CardTitle>
                        <CardDescription className="mt-1 text-accent-foreground/80 font-medium">{exp.company}</CardDescription>
                    </div>
                    <Badge variant="outline" className="hidden sm:block border-primary/50 text-primary">{exp.period}</Badge>
                  </div>
                   <CardDescription className="sm:hidden pt-2 text-primary/80 font-semibold">{exp.period}</CardDescription>
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
