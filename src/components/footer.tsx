import Link from 'next/link';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AiTool } from '@/components/ai-tool';

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Dhruv Rastogi. All rights reserved.
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <Link href="#" aria-label="GitHub">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
             <Link href="#" aria-label="Twitter">
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="#" aria-label="Instagram">
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
              </Button>
            </Link>
          </div>
          <div className="text-center md:text-right">
             <AiTool />
          </div>
        </div>
      </div>
    </footer>
  );
}
