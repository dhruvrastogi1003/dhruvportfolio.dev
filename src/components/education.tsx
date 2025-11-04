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
    institution: 'Invertis University, Bareilly, Uttar Pradesh, India',
    period: '2024 - 2026',
    description:
      "Currently pursuing a Master's degree in Computer Application with a current score of 72%.",
  },
  {
    degree: 'Bachelor of Computer Application',
    institution: 'Invertis University, Bareilly, Uttar Pradesh, India',
    period: '2024',
    description:
      "Completed a Bachelor's in Computer Applications, graduated with 62%.",
  },
  {
    degree: 'Intermediate',
    institution: 'National Institute of Open Schooling',
    period: '2021',
    description:
      'Completed intermediate education with commerce and computer, scoring 71%.',
  },
  {
    degree: 'High School',
    institution: 'Girish Prasad Memorial College, Bareilly, Uttar Pradesh, India',
    period: '2019',
    description:
      'Completed high school education with a focus on foundational subjects, achieving 67%.',
  },
];

export function Education() {
  return (
    <Section id="education" title="Education" className="bg-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="relative pl-6">
          {educationHistory.map((edu, index) => (
            <div key={index} className="mb-12 pl-8 relative group">
              <div className="absolute left-[-24px] top-1.5 h-10 w-10 bg-primary rounded-full flex items-center justify-center ring-8 ring-secondary transition-transform duration-300 group-hover:scale-110">
                <GraduationCap className="h-5 w-5 text-primary-foreground" />
              </div>
              {index < educationHistory.length - 1 && (
                <div className="absolute left-0 top-5 bottom-[-3rem] w-1 bg-primary/20"></div>
              )}
              <Card className="bg-card border-border transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="text-foreground/90">{edu.degree}</CardTitle>
                        <CardDescription className="mt-1 text-primary/80 font-medium">{edu.institution}</CardDescription>
                    </div>
                    <Badge variant="outline" className="hidden sm:block border-primary/50 text-primary">{edu.period}</Badge>
                  </div>
                   <CardDescription className="sm:hidden pt-2 text-primary/80 font-semibold">{edu.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{edu.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
