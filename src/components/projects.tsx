'use client';

import { useState } from 'react';
import { Section } from '@/components/section';
import { ProjectCard } from '@/components/project-card';
import { PROJECTS } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const projectCategories = ['All', ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  return (
    <Section id="projects" title="My Projects">
      <div className="flex justify-center flex-wrap gap-2 mb-12">
        {projectCategories.map((category) => (
          <Button
            key={category}
            variant={activeFilter === category ? 'default' : 'outline'}
            onClick={() => setActiveFilter(category)}
            className={cn(
              'rounded-full',
              activeFilter === category && 'bg-primary hover:bg-primary/90'
            )}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
}
