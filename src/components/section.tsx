import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

type SectionProps = {
  id: string;
  title: string;
  className?: string;
};

export const Section = ({ id, title, className, children }: PropsWithChildren<SectionProps>) => {
  return (
    <section id={id} className={cn('py-16 md:py-24', className)}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline text-gradient bg-gradient-to-r from-primary to-accent animated-text-gradient">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};
