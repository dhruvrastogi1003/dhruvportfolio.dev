import { Section } from '@/components/section';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { RECOMMENDATIONS } from '@/lib/data';

export function Recommendations() {
  return (
    <Section id="recommendations" title="Recommendations" className="bg-card">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          {RECOMMENDATIONS.map((rec, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <Card className="flex flex-col h-full">
                  <CardContent className="flex-grow flex flex-col justify-between p-6">
                    <blockquote className="text-muted-foreground italic mb-6">
                      "{rec.quote}"
                    </blockquote>
                    <div className="text-right">
                      <p className="font-semibold text-primary">{rec.name}</p>
                      <p className="text-sm text-muted-foreground">{rec.title}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Section>
  );
}
