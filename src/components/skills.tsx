import { Section } from '@/components/section';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { SKILLS } from '@/lib/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const SkillCard = ({ skill }: { skill: (typeof SKILLS)[0] }) => (
  <Card className="flex flex-col items-center justify-center p-6 text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg w-40 h-40 shrink-0">
    <CardHeader className="p-0">
      <skill.icon className="h-12 w-12 mx-auto text-primary mb-4" />
      <CardTitle className="text-base font-medium">{skill.name}</CardTitle>
    </CardHeader>
  </Card>
);

export function Skills() {
  return (
    <Section id="skills" title="My Skills">
      <div className="w-full max-w-4xl mx-auto">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {SKILLS.map((skill, index) => (
              <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div className="p-1">
                  <SkillCard skill={skill} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </Section>
  );
}
