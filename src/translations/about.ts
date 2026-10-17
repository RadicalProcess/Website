const discord = (text: string): string =>
  `<a href="https://download.radical-process.com/discord" rel="noopener noreferrer" target="_blank" class="text-gray-300 underline underline-offset-4 decoration-2 decoration-gray-500 hover:text-white transition-colors">${text}</a>`;

const en = {
  title: 'About — Radical Process',
  description: 'Radical Process makes edgy, obsessively detailed audio plugins for artists who chase their own signature tone. Community, contact and Impressum.',
  heading: 'About',
  about: 'Radical Process makes edgy, obsessively detailed audio plugins for artists who refuse to settle for the generic sound flooding music today. Built for those who chase their own signature tone down to the last decimal, our tools are unapologetically niche and unapologetically deep. This is gear for people who care too much—and wouldn\'t have it any other way.',
  communityHeading: 'Community',
  community: `Join us on ${discord('Discord')} to talk shop, share presets, report bugs and hear about what we are building next.`,
  contactHeading: 'Contact',
  // The Impressum itself stays in German, as German law requires.
  impressumHeading: 'Impressum',
};

const ja: typeof en = {
  title: '概要 — Radical Process',
  description: 'Radical Process は、自分だけのサウンドを追い求めるアーティストのために、尖った、徹底的に作り込まれたオーディオプラグインを作っています。コミュニティ、お問い合わせ、運営者情報。',
  heading: '概要',
  about: 'Radical Process は、いまの音楽にあふれるありきたりなサウンドに甘んじないアーティストのために、尖った、ユニークなオーディオプラグインを作っています。自分だけのシグネチャートーンを小数点以下の最後の一桁まで追い求める人のための、とことんニッチで、とことん深い、こだわりすぎる人のためのツールを提供するブランドです。',
  communityHeading: 'コミュニティ',
  community: `${discord('Discord')} では、機材の話やプリセットの共有、バグ報告などを受け付けているほか、開発中の新製品の情報もいち早くお届けしています。お気軽にご参加ください。`,
  contactHeading: 'お問い合わせ',
  impressumHeading: '運営者情報（Impressum）',
};

export default { en, ja };
