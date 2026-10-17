// Inline markup for translated copy. Sentences that carry a link or an
// emphasis are kept whole in each language, since Japanese puts them in a
// different place in the sentence; these keep the styling out of the prose.

const linkClass = 'underline underline-offset-4 decoration-gray-500 hover:text-white transition-colors';

export const em = (text: string): string => `<em class="not-italic text-white">${text}</em>`;

export const emLabel = (text: string): string => `<em class="not-italic text-gray-200">${text}</em>`;

export const strong = (text: string): string => `<strong class="font-medium text-white">${text}</strong>`;

export const strongMuted = (text: string): string => `<strong class="font-medium text-gray-300">${text}</strong>`;

export const code = (text: string): string => `<code class="text-gray-400 text-sm">${text}</code>`;

export const link = (href: string, text: string): string =>
  `<a href="${href}" class="text-gray-300 ${linkClass}">${text}</a>`;

export const linkMuted = (href: string, text: string): string =>
  `<a href="${href}" class="text-gray-400 ${linkClass}">${text}</a>`;

export const externalLink = (href: string, text: string): string =>
  `<a href="${href}" rel="noopener noreferrer" target="_blank" class="text-gray-400 ${linkClass}">${text}</a>`;
