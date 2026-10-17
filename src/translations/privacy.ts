// DRAFT — not legal advice. The plugin and licensing sections are drafted from
// the actual code (LicenseManager, TrialGuard, cf-worker.js); the boilerplate
// sections below them are standard text and still need review by a lawyer or
// the IHK before this is relied upon.
//
// TODO(hosting): "Website hosting" names Cloudflare. The GitHub Actions
// workflow currently deploys to GitHub Pages. Name whichever provider actually
// serves radical-process.com — and update it if the site moves.

import { code, externalLink, linkMuted, strong } from './markup';

// A section is a run of blocks: body paragraphs, smaller notes, a bulleted
// list, or the supervisory authority's address (which is not translated).
type Block = { p: string } | { note: string } | { list: string[] } | { authority: true };

interface Section {
  heading: string;
  blocks: Block[];
}

const en = {
  title: 'Privacy Policy — Radical Process',
  description: 'How Radical Process and its plugins handle your data: licensing, trial checks, website hosting and your rights (Datenschutzerklärung).',
  heading: 'Privacy',
  lastUpdated: (date: string) => `Last updated ${date}`,
  // Only a translation carries a note; the English text is the binding one.
  translationNote: null as string | null,
  sections: [
    {
      heading: 'In short',
      blocks: [
        { p: 'Our plugins contain no telemetry, no analytics and no usage tracking. The only network call a plugin ever makes is license activation, and only when you start it yourself. Our license server stores nothing — no database, no logs of your data. This site sets no cookies and runs no analytics.' },
      ],
    },
    {
      heading: 'This website',
      blocks: [
        { p: 'This site is a static site. It sets no cookies, embeds no third-party fonts or scripts, and runs no analytics or tracking of any kind.' },
        { p: 'If you pick a language with the EN / JP switch, that choice is kept in your browser\'s local storage so the site opens in the same language next time. It never leaves your device.' },
        { p: 'It is hosted by Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA. As a technical necessity, Cloudflare processes the connection data of each request — including your IP address, the page requested, the time of the request, and the browser and operating system reported by your device — in order to deliver the page and to protect the service against attacks.' },
        { p: 'Legal basis: Art. 6(1)(f) GDPR — our legitimate interest in a secure and reliably delivered website. Transfers to the USA are covered by the EU Commission\'s adequacy decision for the EU–US Data Privacy Framework and by standard contractual clauses.' },
      ],
    },
    {
      heading: 'The plugin does not phone home',
      blocks: [
        { p: `SGD contains exactly one network call: license activation, and only when you actively start it by entering a license key or starting a trial. There is no telemetry, no analytics, no usage tracking, no update check and no other server contact of any kind. Once activated, the plugin verifies your license ${strong('offline')} and never contacts us again.` },
      ],
    },
    {
      heading: 'License activation',
      blocks: [
        { p: `When you enter a license key, the plugin sends to ${code('https://license.radical-process.com/activate')}:` },
        { list: ['the license key you entered,', `the product identifier of the plugin (e.g. ${code('SGD')}).`] },
        { p: 'Our server passes the license key to Lemon Squeezy for validation and receives back the name and email address you gave when purchasing. It uses these to generate a cryptographically signed license file, which it returns to the plugin.' },
        { p: `${strong('The server stores nothing.')} No database, no logs of your data — the name and email pass through the request and are not retained by us. As a technical necessity, our hosting provider Cloudflare processes the connection metadata of the request (including your IP address) in order to deliver it and to protect against attacks.` },
        { note: 'Legal basis: Art. 6(1)(b) GDPR (performance of the license agreement).' },
      ],
    },
    {
      heading: 'Free trial',
      blocks: [
        { p: `When you start the trial, the plugin sends only the product identifier to ${code('https://license.radical-process.com/trial')}. ${strong('No personal data is transmitted')} — no name, no email address, no registration. The server returns a signed trial license file with an expiry date. The same note about Cloudflare connection metadata applies.` },
        { note: 'Legal basis: Art. 6(1)(b) GDPR.' },
      ],
    },
    {
      heading: 'Data stored on your computer',
      blocks: [
        { p: `${strong('License file.')} After activation, the signed license file is stored on your computer, in the standard application-support location for your operating system. It contains the name and email address from your purchase, the product name and, for trials, the expiry date. It is displayed in the plugin as “Licensed to …”.` },
        { p: `${strong('Trial markers.')} So that the trial period cannot be reset simply by deleting a file, the signed trial license is written to more than one location on your system, and a missing copy is restored when the plugin runs. These markers contain the trial expiry date and a placeholder name and email address (“Trial User”, ${code('trial@user')}) — no personal data of yours, and nothing that identifies you or your computer.` },
        { p: `${strong('These trial markers are deliberately not removed when you uninstall SGD')}, because otherwise reinstalling would grant an unlimited number of trial periods. If you want them removed from your system, write to support at radical-process.com and we will send you removal instructions.` },
        { p: 'This storage on your device is strictly necessary to provide the license or trial you have expressly requested (§ 25(2) No. 2 TDDDG); it is not used for analysis or tracking, contains no personal data in the case of a trial, and is never transmitted to us.' },
        { note: 'Retention: everything described above remains on your computer until you delete it. We hold no copy.' },
      ],
    },
    {
      heading: 'Purchase',
      blocks: [
        { p: `Purchases are handled by Lemon Squeezy as Merchant of Record. Your payment data and billing details are processed by Lemon Squeezy, not by us; we receive only the name and email address associated with a license key, and only at the moment of activation. See Lemon Squeezy's privacy policy: ${externalLink('https://www.lemonsqueezy.com/privacy', 'lemonsqueezy.com/privacy')}.` },
      ],
    },
    {
      heading: 'Your rights',
      blocks: [
        { p: 'Under the GDPR you have the right to obtain confirmation of whether we process personal data about you and, if so, access to it (Art. 15); to have inaccurate data corrected (Art. 16); to have data erased (Art. 17); to have processing restricted (Art. 18); to receive your data in a portable format (Art. 20); and to object to processing based on our legitimate interests (Art. 21). Where processing rests on consent, you may withdraw that consent at any time with effect for the future.' },
        { p: 'To exercise any of these, write to support at radical-process.com. Please note that, as described above, we do not operate a database of customer data: outside the moment of license activation we hold no personal data about you, so in most cases a request for access or erasure will be answered by telling you exactly that.' },
      ],
    },
    {
      heading: 'Right to lodge a complaint',
      blocks: [
        { p: 'You have the right to lodge a complaint with a supervisory authority (Art. 77 GDPR), in particular in the member state of your residence, place of work, or of the alleged infringement. The authority responsible for us is:' },
        { authority: true },
      ],
    },
    {
      heading: 'Changes to this policy',
      blocks: [
        { p: 'We update this policy when the products or the services behind them change — for example if a plugin ever gains a feature that contacts a server. The date at the top of this page always reflects the current version.' },
      ],
    },
    {
      heading: 'Controller',
      blocks: [
        { p: `The controller responsible for the processing described here, within the meaning of Art. 4(7) GDPR, is Radical Process. Our full name and postal address are given in the ${linkMuted('/about#impressum', 'Impressum')}.` },
        { p: 'Contact: support at radical-process.com' },
        { note: 'We are not required to appoint a data protection officer and have not appointed one.' },
      ],
    },
  ] as Section[],
};

const ja: typeof en = {
  title: 'プライバシーポリシー — Radical Process',
  description: 'Radical Process とそのプラグインがデータをどう扱うか — ライセンス、トライアルの確認、ウェブサイトのホスティング、そしてあなたの権利について（Datenschutzerklärung）。',
  heading: 'プライバシー',
  lastUpdated: (date: string) => `最終更新日 ${date}`,
  translationNote: `この日本語版は参考のための翻訳です。内容に相違がある場合は、${linkMuted('/privacy', '英語版')}が優先されます。`,
  sections: [
    {
      heading: '概要',
      blocks: [
        { p: '私たちのプラグインには、テレメトリーも、アクセス解析も、利用状況の追跡も一切含まれていません。プラグインがネットワークに接続するのはライセンスのアクティベーションのときだけで、それもあなた自身が開始した場合に限られます。私たちのライセンスサーバーは何も保存しません — データベースも、あなたのデータのログもありません。このサイトは Cookie を使用せず、アクセス解析も行いません。' },
      ],
    },
    {
      heading: 'このウェブサイト',
      blocks: [
        { p: 'このサイトは静的サイトです。Cookie を使用せず、第三者のフォントやスクリプトを埋め込まず、いかなる種類のアクセス解析や追跡も行いません。' },
        { p: 'EN / JP の切り替えで言語を選ぶと、次回もその言語でサイトが開くよう、その選択がブラウザのローカルストレージに保存されます。この情報があなたの端末の外に送られることはありません。' },
        { p: 'このサイトは Cloudflare, Inc.（101 Townsend St., San Francisco, CA 94107, USA）がホスティングしています。技術上必要なため、Cloudflare は各リクエストの接続データ — IP アドレス、リクエストされたページ、リクエストの時刻、お使いの端末が通知するブラウザとオペレーティングシステムを含む — を、ページを配信し、サービスを攻撃から守るために処理します。' },
        { p: '法的根拠：GDPR 第6条1項(f) — 安全かつ確実に配信されるウェブサイトに対する私たちの正当な利益。米国へのデータ移転は、EU–US データプライバシーフレームワークに関する欧州委員会の十分性認定、および標準契約条項によって保護されています。' },
      ],
    },
    {
      heading: 'プラグインは勝手に通信しません',
      blocks: [
        { p: `SGD に含まれるネットワーク接続はただひとつ、ライセンスのアクティベーションだけです。それも、ライセンスキーの入力やトライアルの開始によって、あなたが自ら開始した場合に限られます。テレメトリー、アクセス解析、利用状況の追跡、アップデートの確認など、それ以外のサーバーとの通信は一切ありません。一度アクティベートされると、プラグインはライセンスを${strong('オフライン')}で検証し、私たちに接続することは二度とありません。` },
      ],
    },
    {
      heading: 'ライセンスのアクティベーション',
      blocks: [
        { p: `ライセンスキーを入力すると、プラグインは${code('https://license.radical-process.com/activate')}に次の情報を送信します。` },
        { list: ['入力されたライセンスキー', `プラグインの製品識別子（例：${code('SGD')}）`] },
        { p: '私たちのサーバーはライセンスキーを Lemon Squeezy に渡して検証し、購入時に入力された名前とメールアドレスを受け取ります。これらを使って暗号署名付きのライセンスファイルを生成し、プラグインに返します。' },
        { p: `${strong('サーバーは何も保存しません。')}データベースも、あなたのデータのログもありません — 名前とメールアドレスはリクエストを通過するだけで、私たちが保持することはありません。技術上必要なため、ホスティングプロバイダーの Cloudflare は、リクエストを配信し攻撃から守る目的で、リクエストの接続メタデータ（IP アドレスを含む）を処理します。` },
        { note: '法的根拠：GDPR 第6条1項(b)（ライセンス契約の履行）。' },
      ],
    },
    {
      heading: '無料トライアル',
      blocks: [
        { p: `トライアルを開始すると、プラグインは製品識別子だけを${code('https://license.radical-process.com/trial')}に送信します。${strong('個人データは一切送信されません')} — 名前もメールアドレスも、登録もありません。サーバーは有効期限付きの署名済みトライアルライセンスファイルを返します。Cloudflare の接続メタデータについては、上記と同じことが当てはまります。` },
        { note: '法的根拠：GDPR 第6条1項(b)。' },
      ],
    },
    {
      heading: 'あなたのコンピューターに保存されるデータ',
      blocks: [
        { p: `${strong('ライセンスファイル。')}アクティベーション後、署名付きのライセンスファイルが、お使いのオペレーティングシステムの標準的なアプリケーションサポートの場所に保存されます。このファイルには、購入時の名前とメールアドレス、製品名、そしてトライアルの場合は有効期限が含まれます。プラグイン内では「Licensed to …」として表示されます。` },
        { p: `${strong('トライアルマーカー。')}ファイルを削除するだけでトライアル期間をリセットできないよう、署名付きのトライアルライセンスはシステム上の複数の場所に書き込まれ、欠けたコピーはプラグインの実行時に復元されます。これらのマーカーには、トライアルの有効期限と、仮の名前とメールアドレス（「Trial User」、${code('trial@user')}）が含まれます — あなたの個人データは含まれず、あなたやあなたのコンピューターを特定するものは何もありません。` },
        { p: `${strong('これらのトライアルマーカーは、SGD をアンインストールしても意図的に削除されません。')}削除されてしまうと、再インストールするたびに何度でもトライアル期間が得られてしまうためです。システムから削除したい場合は support at radical-process.com までご連絡ください。削除の手順をお送りします。` },
        { p: 'この端末への保存は、あなたが明示的に求めたライセンスまたはトライアルを提供するために厳密に必要なものです（TDDDG 第25条2項2号）。分析や追跡には使用されず、トライアルの場合は個人データを含まず、私たちに送信されることもありません。' },
        { note: '保存期間：上記のものはすべて、あなたが削除するまでコンピューター上に残ります。私たちはその写しを保持していません。' },
      ],
    },
    {
      heading: '購入',
      blocks: [
        { p: `購入は、Merchant of Record（販売者）である Lemon Squeezy が処理します。支払いデータと請求情報を処理するのは私たちではなく Lemon Squeezy です。私たちが受け取るのはライセンスキーに紐づく名前とメールアドレスだけで、それもアクティベーションの時点に限られます。Lemon Squeezy のプライバシーポリシーをご覧ください：${externalLink('https://www.lemonsqueezy.com/privacy', 'lemonsqueezy.com/privacy')}` },
      ],
    },
    {
      heading: 'あなたの権利',
      blocks: [
        { p: 'GDPR に基づき、あなたには次の権利があります。私たちがあなたに関する個人データを処理しているかどうかの確認を求め、処理している場合はそのデータにアクセスする権利（第15条）、不正確なデータを訂正させる権利（第16条）、データを消去させる権利（第17条）、処理を制限させる権利（第18条）、データをポータブルな形式で受け取る権利（第20条）、そして私たちの正当な利益に基づく処理に異議を唱える権利（第21条）。同意に基づく処理については、いつでも将来に向かってその同意を撤回できます。' },
        { p: 'これらの権利を行使するには、support at radical-process.com までご連絡ください。なお、上記のとおり私たちは顧客データのデータベースを運用していません。ライセンスのアクティベーションの瞬間を除いて、あなたに関する個人データを保持していないため、ほとんどの場合、アクセスや消去の請求には、まさにそのことをお伝えする形で回答することになります。' },
      ],
    },
    {
      heading: '苦情を申し立てる権利',
      blocks: [
        { p: 'あなたには、監督機関に苦情を申し立てる権利があります（GDPR 第77条）。特に、あなたの居住地、勤務地、または違反が疑われる場所の加盟国の監督機関に申し立てることができます。私たちを管轄する監督機関は次のとおりです。' },
        { authority: true },
      ],
    },
    {
      heading: 'このポリシーの変更',
      blocks: [
        { p: '製品やその背後にあるサービスが変わったとき — たとえば、プラグインにサーバーと通信する機能が加わった場合 — このポリシーを更新します。このページ上部の日付は、常に最新の版を示しています。' },
      ],
    },
    {
      heading: '管理者',
      blocks: [
        { p: `ここに記載した処理について、GDPR 第4条7項にいう責任を負う管理者は Radical Process です。正式な氏名と郵送先住所は${linkMuted('/ja/about#impressum', '運営者情報（Impressum）')}に記載しています。` },
        { p: '連絡先：support at radical-process.com' },
        { note: '私たちはデータ保護責任者の選任義務を負っておらず、選任もしていません。' },
      ],
    },
  ],
};

export default { en, ja };
