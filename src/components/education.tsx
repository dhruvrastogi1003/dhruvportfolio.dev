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
    degree: 'Master of Computer Application',
    institution: 'Invertis University',
    period: '2024 - 2026',
    description:
      'Currently pursuing a Master\'s degree with a focus on advanced computer science concepts and application development, holding a current score of 72%.',
    tags: ['MCA', 'Computer Science', 'Application Development'],
  },
  {
    degree: 'Bachelor of Computer Application',
    institution: 'Invertis University',
    period: '2021 - 2024',
    description:
      'Completed a comprehensive bachelor\'s program covering foundational and advanced topics in computer applications, graduating with 62%.',
    tags: ['BCA', 'Web Development', 'Database Management', 'Programming'],
  },
  {
    degree: 'Intermediate',
    institution: 'National Institute of Open Schooling',
    period: '2021',
    description:
      'Completed intermediate education, building a strong foundation for higher studies in technology with a score of 71%.',
    tags: ['NIOS', 'Science Stream'],
  },
  {
    degree: 'High School',
    institution: 'Girish Prasad Memorial College',
    period: '2019',
    description:
      'Completed high school education with a focus on foundational science and mathematics subjects, achieving 67%.',
    tags: ['High School', 'Science'],
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
              <Card className="bg-card border-border transition-all duration-300">
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
