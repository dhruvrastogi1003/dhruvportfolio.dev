'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Wand2 } from 'lucide-react';
import { getEnhancedContent } from '@/app/actions';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from './ui/separator';

type AiResult = {
  suggestedRevisions: string;
  reasoning: string;
};

export function AiTool() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [portfolioContent, setPortfolioContent] = useState('');
  const [trafficData, setTrafficData] = useState('');
  const [result, setResult] = useState<AiResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);
    setError(null);

    try {
      const aiResult = await getEnhancedContent({ portfolioContent, trafficData });
      if (aiResult) {
        setResult(aiResult);
      } else {
        setError('Failed to get suggestions. The AI returned an empty response.');
      }
    } catch (err) {
      setError('An error occurred while fetching suggestions. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Wand2 className="mr-2 h-4 w-4" /> AI Content Enhancer
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>AI Content Enhancement Tool</DialogTitle>
          <DialogDescription>
            Get AI-powered suggestions to improve your portfolio's content and layout based on performance data.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[70vh] pr-6">
          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="portfolio-content">Portfolio Content</Label>
              <Textarea
                id="portfolio-content"
                placeholder="Paste your portfolio's text and layout description here."
                rows={8}
                value={portfolioContent}
                onChange={(e) => setPortfolioContent(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="traffic-data">Website Traffic Analytics</Label>
              <Textarea
                id="traffic-data"
                placeholder="e.g., Page Views: 1000/month, Bounce Rate: 75%, Avg. Time on Page: 30s"
                rows={4}
                value={trafficData}
                onChange={(e) => setTrafficData(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <Button type="submit" disabled={isLoading || !portfolioContent || !trafficData}>
              {isLoading ? 'Generating...' : 'Generate Suggestions'}
            </Button>
          </form>

          {error && <p className="text-sm font-medium text-destructive">{error}</p>}

          {result && (
            <div className="mt-6 space-y-4">
              <Separator />
               <h3 className="text-lg font-semibold mt-4">Suggestions</h3>
              <Card>
                <CardHeader>
                  <CardTitle>Suggested Revisions</CardTitle>
                </CardHeader>
                <CardContent className="text-sm whitespace-pre-wrap">{result.suggestedRevisions}</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Reasoning</CardTitle>
                </CardHeader>
                <CardContent className="text-sm whitespace-pre-wrap">{result.reasoning}</CardContent>
              </Card>
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
