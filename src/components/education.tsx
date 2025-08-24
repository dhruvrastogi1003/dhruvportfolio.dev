import { Section } from '@/components/section';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap } from 'lucide-react';

const educationHistory = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'Stanford University',
    period: '2015 - 2017',
    description:
      'Focused on artificial intelligence and machine learning, completing a thesis on natural language processing.',
    tags: ['AI', 'Machine Learning', 'NLP', 'Python'],
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Massachusetts Institute of Technology (MIT)',
    period: '2011 - 2015',
    description:
      'Graduated with honors. Active member of the coding club and contributed to several open-source projects.',
    tags: ['Data Structures', 'Algorithms', 'Web Development', 'Java'],
  },
];

export function Education() {
  return (
    <Section id="education" title="Education" className="bg-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="relative pl-6 before:absolute before:inset-y-0 before:w-1 before:bg-primary/20 before:left-0">
          {educationHistory.map((edu, index) => (
            <div key={index} className="mb-12 pl-8 relative group">
              <div className="absolute left-[-24px] top-1.5 h-10 w-10 bg-primary rounded-full flex items-center justify-center ring-8 ring-secondary transition-transform duration-300 group-hover:scale-110">
                <GraduationCap className="h-5 w-5 text-primary-foreground" />
              </div>
              <Card className="bg-card border-border transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="text-foreground/90">{edu.degree}</CardTitle>
                        <CardDescription className="mt-1 text-accent">{edu.institution}</CardDescription>
                    </div>
                    <Badge variant="outline" className="hidden sm:block border-accent text-accent">{edu.period}</Badge>
                  </div>
                   <CardDescription className="sm:hidden pt-2">{edu.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{edu.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.tags.map((tag) => (
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
