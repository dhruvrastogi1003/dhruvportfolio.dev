'use client';

import { useState } from 'react';
import { Section } from '@/components/section';
import { ProjectCard } from '@/components/project-card';
import { PROJECTS } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const projectCategories = ['All', ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  return (
    <Section id="projects" title="My Projects" className="bg-secondary">
       <div className="flex justify-center flex-wrap gap-2 mb-12">
        {projectCategories.map((category) => (
          <Button
            key={category}
            variant={activeFilter === category ? 'default' : 'outline'}
            onClick={() => setActiveFilter(category)}
            className={cn(
              'rounded-full transition-all duration-300',
              activeFilter === category 
                ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                : 'border-accent text-accent hover:bg-accent hover:text-accent-foreground'
            )}
          >
            {category}
          </Button>
        ))}
      </div>
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full max-w-6xl mx-auto"
      >
        <CarouselContent>
          {filteredProjects.map((project, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <ProjectCard {...project} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </Section>
  );
}
