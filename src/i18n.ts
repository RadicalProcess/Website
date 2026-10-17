// The site exists in two languages. English lives at the root, Japanese
// mirrors it page for page under /ja/.

export type Lang = 'en' | 'ja';

const japanesePrefix = '/ja';

export const isJapanesePath = (pathname: string): boolean =>
  pathname === japanesePrefix || pathname.startsWith(`${japanesePrefix}/`);

// The same page in the given language: "/about/" ⇄ "/ja/about/". Works on
// site-relative links too, fragment included ("/about#impressum").
export const pathIn = (pathname: string, lang: Lang): string => {
  const english = isJapanesePath(pathname) ? pathname.slice(japanesePrefix.length) || '/' : pathname;
  if (lang === 'en')
  {
    return english;
  }

  return english === '/' ? `${japanesePrefix}/` : `${japanesePrefix}${english}`;
};
