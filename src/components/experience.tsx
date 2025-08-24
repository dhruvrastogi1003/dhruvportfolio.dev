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
    role: 'Senior Frontend Developer',
    company: 'Innovate Corp.',
    period: 'Jan 2021 - Present',
    description:
      'Led the development of a new client-facing dashboard using React and TypeScript. Mentored junior developers and conducted code reviews to maintain high code quality.',
    tags: ['React.js', 'TypeScript', 'Next.js', 'Redux'],
  },
  {
    role: 'Frontend Developer',
    company: 'Tech Solutions LLC',
    period: 'Jun 2018 - Dec 2020',
    description:
      'Developed and maintained responsive web applications for various clients. Collaborated with designers and backend developers to deliver high-quality products.',
    tags: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Firebase'],
  },
  {
    role: 'Junior Web Developer',
    company: 'Creative Agency',
    period: 'Jul 2017 - May 2018',
    description:
      'Assisted in the development of websites and landing pages. Gained hands-on experience with modern web technologies and best practices.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'jQuery'],
  },
];

export function Experience() {
  return (
    <Section id="experience" title="Work Experience">
      <div className="max-w-4xl mx-auto">
        <div className="relative pl-6 before:absolute before:inset-y-0 before:w-1 before:bg-primary/20 before:left-0">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 pl-8 relative group">
              <div className="absolute left-[-24px] top-1.5 h-10 w-10 bg-primary rounded-full flex items-center justify-center ring-8 ring-background transition-transform duration-300 group-hover:scale-110">
                <Briefcase className="h-5 w-5 text-primary-foreground" />
              </div>
              <Card className="bg-secondary border-secondary-foreground/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="text-foreground/90">{exp.role}</CardTitle>
                        <CardDescription className="mt-1 text-accent">{exp.company}</CardDescription>
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
