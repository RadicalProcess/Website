// The site exists in two languages. English lives at the root, Japanese
// mirrors it page for page under /ja/. Each page is a single template under
// src/pages/[...locale]/, rendered once per language, with its copy in
// src/translations/.

export type Lang = 'en' | 'ja';

const japanesePrefix = '/ja';

// Every page is built twice: at its English path and under /ja/.
export const getLocalePaths = () => [
  { params: { locale: undefined }, props: { lang: 'en' as Lang } },
  { params: { locale: 'ja' }, props: { lang: 'ja' as Lang } },
];

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

// A calendar date written the way each language writes it: "November 18",
// "11月18日".
export const formatDate = (isoDate: string, lang: Lang, withYear: boolean): string =>
  new Intl.DateTimeFormat(lang === 'ja' ? 'ja-JP' : 'en-US', {
    year: withYear ? 'numeric' : undefined,
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${isoDate}T00:00:00Z`));
