// src/ai/flows/enhance-portfolio-content.ts
'use server';

/**
 * @fileOverview An AI agent that suggests revisions to portfolio content and layout based on website traffic data.
 *
 * - enhancePortfolioContent - A function that takes portfolio content and traffic data, and returns suggested revisions.
 * - EnhancePortfolioContentInput - The input type for the enhancePortfolioContent function.
 * - EnhancePortfolioContentOutput - The return type for the enhancePortfolioContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhancePortfolioContentInputSchema = z.object({
  portfolioContent: z
    .string()
    .describe('The current content of the portfolio, including text and layout descriptions.'),
  trafficData: z
    .string()
    .describe(
      'Website traffic data, including page views, bounce rate, and time on page.'
    ),
});
export type EnhancePortfolioContentInput = z.infer<
  typeof EnhancePortfolioContentInputSchema
>;

const EnhancePortfolioContentOutputSchema = z.object({
  suggestedRevisions: z
    .string()
    .describe(
      'A list of suggested revisions to the portfolio content and layout, based on the traffic data.'
    ),
  reasoning: z
    .string()
    .describe(
      'The reasoning behind the suggested revisions, explaining how they are expected to improve engagement.'
    ),
});
export type EnhancePortfolioContentOutput = z.infer<
  typeof EnhancePortfolioContentOutputSchema
>;

export async function enhancePortfolioContent(
  input: EnhancePortfolioContentInput
): Promise<EnhancePortfolioContentOutput> {
  return enhancePortfolioContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'enhancePortfolioContentPrompt',
  input: {schema: EnhancePortfolioContentInputSchema},
  output: {schema: EnhancePortfolioContentOutputSchema},
  prompt: `You are an AI assistant designed to optimize online portfolios.

  Analyze the provided portfolio content and website traffic data to suggest specific, actionable revisions to the content and layout.

  The goal is to improve user engagement, reduce bounce rate, and increase time spent on the portfolio.

  Portfolio Content: {{{portfolioContent}}}
  Traffic Data: {{{trafficData}}}

  Provide a list of suggested revisions and a clear explanation of why each revision is recommended.
  Be concise in the suggested revisions.
  For example:
  -"Hero Section: Update the headline to be more engaging and reflect Dhruv's expertise in AI."
  - "Project Gallery: Reorder projects to highlight the most recent and visually appealing ones first."
  - "Contact Section: Make the contact form more prominent and easier to find."
  `,
});

const enhancePortfolioContentFlow = ai.defineFlow(
  {
    name: 'enhancePortfolioContentFlow',
    inputSchema: EnhancePortfolioContentInputSchema,
    outputSchema: EnhancePortfolioContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
