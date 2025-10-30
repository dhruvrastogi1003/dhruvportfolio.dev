import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demo: string;
  github: string;
  'data-ai-hint'?: string;
};

export function ProjectCard({
  title,
  description,
  tags,
  image,
  demo,
  github,
  'data-ai-hint': dataAiHint,
}: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
