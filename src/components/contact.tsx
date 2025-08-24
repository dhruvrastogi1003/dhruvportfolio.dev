
'use client';

import Link from 'next/link';
import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Github, Linkedin, Instagram } from 'lucide-react';

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'dhruv10.rastogi@gmail.com',
    href: 'mailto:dhruv10.rastogi@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9870688238',
    href: 'tel:+919870688238',
  },
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: '#',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: '#',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: '#',
  },
];

export function Contact() {
  return (
    <Section id="contact" title="Get in Touch">
      <div className="max-w-2xl mx-auto">
        <p className="text-center text-muted-foreground mb-8">
          Have a project in mind or just want to say hi? Feel free to reach out.
        </p>
        <Card className="bg-card border-border shadow-lg">
          <CardContent className="p-8 space-y-8">
            <div className="space-y-4">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <detail.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{detail.label}</h3>
                    <a
                      href={detail.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {detail.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-8">
              <h3 className="text-center font-semibold text-lg mb-4">
                you can connect to me on these platforms
              </h3>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social) => (
                  <Link href={social.href} key={social.label} aria-label={social.label}>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-12 w-12 rounded-full transition-all duration-300 hover:scale-110 hover:bg-primary/10 hover:border-primary/50"
                    >
                      <social.icon className="h-6 w-6" />
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
