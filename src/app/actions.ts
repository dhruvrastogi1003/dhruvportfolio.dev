'use server';

import { enhancePortfolioContent } from '@/ai/flows/enhance-portfolio-content.ts';
import type { EnhancePortfolioContentInput, EnhancePortfolioContentOutput } from '@/ai/flows/enhance-portfolio-content.ts';

export async function getEnhancedContent(
  input: EnhancePortfolioContentInput
): Promise<EnhancePortfolioContentOutput | null> {
  try {
    const result = await enhancePortfolioContent(input);
    return result;
  } catch (error) {
    console.error('Error in getEnhancedContent server action:', error);
    return null;
  }
}
