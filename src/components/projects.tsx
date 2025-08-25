
'use client';

import { Section } from '@/components/section';
import { ProjectCard } from '@/components/project-card';
import { PROJECTS } from '@/lib/data';

const ProjectList = () => (
    <div className="flex animate-marquee shrink-0">
      {PROJECTS.map((project, index) => (
        <div key={index} className="px-4 w-[350px]">
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
);

export function Projects() {
  return (
    <Section id="projects" title="My Projects" className="bg-secondary pt-0">
       {/* <div className="flex justify-center flex-wrap gap-2 mb-12">
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
      </div> */}
       <div className="relative w-full overflow-hidden flex flex-nowrap">
        <ProjectList />
        <ProjectList />
      </div>
    </Section>
  );
}
