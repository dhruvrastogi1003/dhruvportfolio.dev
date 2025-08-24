import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Instagram } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
              <span className="text-gradient bg-gradient-to-r from-primary to-accent animated-text-gradient">
                Dhruv Rastogi
              </span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-xl">
              Aspiring Frontend Developer | MCA Student
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105">
                <Link href="#contact">
                  Get in Touch
                </Link>
              </Button>
               <Button asChild size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105">
                <a href="/resume.pdf" download="Dhruv-Rastogi-Resume.pdf">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </a>
              </Button>
            </div>
            <div className="mt-8 flex gap-4">
               <Link href="#" aria-label="GitHub">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="h-6 w-6" />
                </Button>
              </Link>
              <Link href="#" aria-label="LinkedIn">
                 <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-6 w-6" />
                </Button>
              </Link>
              <Link href="#" aria-label="Instagram">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
             <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px]">
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl">
                    <Image
                        src="https://placehold.co/400x400.png"
                        alt="Dhruv Rastogi"
                        data-ai-hint="professional headshot transparent background"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                        className="scale-105"
                    />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
