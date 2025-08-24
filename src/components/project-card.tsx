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
    <Card className="flex flex-col overflow-hidden transition-all duration-300">
      <div className="relative h-52 w-full">
        <Image src={image} alt={title} data-ai-hint={dataAiHint} fill style={{ objectFit: 'cover' }} />
      </div>
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
      <CardFooter className="flex justify-start gap-4">
        <Button asChild variant="outline">
          <Link href={demo} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href={github} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> GitHub
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
