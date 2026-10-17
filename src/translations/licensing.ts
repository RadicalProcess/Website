import { emLabel, link, strong, strongMuted } from './markup';

const en = {
  title: 'Licensing — Radical Process',
  description: 'Try every Radical Process plugin free for 14 days, buy a license once, and use it on all your machines.',
  heading: 'Licensing',
  tagline: ['Try for 14 days', 'buy once', 'all your machines'],
  howItWorks: `Every plugin from Radical Process works the same way: download it, use it free for ${strong('14 days')}, and buy a license key if you want to keep it. There is no account to create, no subscription, and no dongle.`,

  flowHeading: 'The whole journey',
  flowTitle: 'How a Radical Process license works',
  flowDescription: 'Install the plugin, then start a 14-day trial of the complete plugin. Buy a license at any point during or after the trial; the key arrives by email. If the 14 days run out first the plugin keeps loading but is muted, and a key entered later picks up from there. Activating a key makes one online check, after which the plugin is verified offline on every machine you own.',
  flowAnyTime: 'AT ANY TIME',
  flowLaterKey: 'A KEY ENTERED LATER',
  // One per box of the diagram, in the order the template places them.
  flowSteps: [
    { title: 'Install the plugin', detail: 'Nothing to register, nothing to sign' },
    { title: 'Start the trial', detail: 'One click · the complete plugin · 14 days' },
    { title: 'Day 14 — the trial ends', detail: 'Only if you have not bought by then' },
    { title: 'The plugin goes quiet', detail: 'It still loads and opens your work — but muted' },
    { title: 'Buy a license', detail: 'From inside the plugin, or from this site' },
    { title: 'Your key arrives', detail: 'Shown at checkout and sent to your email' },
    { title: 'Activate — one online check', detail: 'A signed license file is stored on that machine' },
    { title: 'Unlocked, for good', detail: 'Checked offline · on every machine you own' },
  ],
  flowNote: 'The two paths meet: buying during the trial and buying months after it expired end in exactly the same place.',

  trialHeading: 'Fourteen free days',
  trial: `Start the trial from inside the plugin with a single click. No name, no email address, no registration. For the next 14 days you have the ${strong('complete plugin')}: every feature unlocked, no watermark, no export limit, nothing held back and nothing to upgrade to.`,
  trialNote: 'The trial runs per plugin, so each product you try gets its own 14 days.',

  afterTrialHeading: 'When the 14 days are over',
  afterTrial: `The plugin does not disappear and neither does your work. It still loads, your projects still open, and you can still look around — but without a valid license it is ${strong('muted')}, producing no audio output.`,
  afterTrialNote: 'Enter a license key at any point, during the trial or long after it has expired, and the sound comes straight back where you left it.',

  buyingHeading: 'Buying a license',
  buyingIntro: 'Two routes to the same checkout — take whichever is closer to hand:',
  fromPluginHeading: 'From the plugin',
  fromPlugin: `Press ${emLabel('Buy')} in the license dialog and the plugin opens the shop in your browser, on the right product.`,
  fromSiteHeading: 'From this site',
  fromSite: `Use the ${emLabel('Buy a license')} button at the top of the ${link('/', 'SGD page')} — the plugin does not need to be open, or even installed, to buy a license for it.`,
  payment: `Payment is handled by our reseller, Lemon Squeezy. As soon as it completes, your ${strongMuted('license key')} is shown on the confirmation page and sent to the email address you paid with — keep that email, it is your proof of purchase.`,

  activationHeading: 'Using your key',
  activation: `Paste the key into the plugin's license dialog and press activate. The plugin checks the key with our server once, stores a signed license file on that machine, and is unlocked. From then on it verifies that file ${strong('offline')} — no connection is needed to run the plugin, ever again.`,
  activationNote: `What that single activation call sends, and what the license file contains, is set out in the ${link('/privacy', 'privacy notice')}.`,

  machinesHeading: 'As many machines as you own',
  machines: `The license belongs to you, not to a computer. Use the same key on ${strong('every machine you own')} — studio desktop, laptop on the road, the spare box in the rehearsal room — with no activation count to ration and no seats to release when you replace a machine.`,
  machinesNote: 'The one thing we ask in return: the key is personal. Do not pass it to other people or publish it.',

  supportHeading: 'Lost a key, or stuck?',
  support: 'Write to support at radical-process.com with the email address you bought with and we will dig out your key.',
};

const ja: typeof en = {
  title: 'ライセンス — Radical Process',
  description: 'Radical Process のプラグインは、どれも14日間無料で試せます。ライセンスは一度買えば、所有するすべてのマシンで使えます。',
  heading: 'ライセンス',
  tagline: ['14日間のお試し', '買い切り', '所有するすべてのマシンで'],
  howItWorks: `Radical Process のプラグインは、どれも同じ仕組みです。ダウンロードして${strong('14日間')}無料で使い、使い続けたければライセンスキーを購入してください。アカウントの作成も、サブスクリプションも、ドングルも不要です。`,

  flowHeading: '全体の流れ',
  flowTitle: 'Radical Process のライセンスの仕組み',
  flowDescription: 'プラグインをインストールし、完全なプラグインの14日間トライアルを開始します。ライセンスはトライアル中でも終了後でも、いつでも購入でき、キーはメールで届きます。先に14日間が過ぎた場合、プラグインは読み込まれますがミュートされ、あとからキーを入力すればそこから再開できます。キーのアクティベートではオンライン確認が1回だけ行われ、その後は所有するすべてのマシンでオフラインで検証されます。',
  flowAnyTime: 'いつでも',
  flowLaterKey: 'あとから入力したキー',
  flowSteps: [
    { title: 'プラグインをインストール', detail: '登録も署名も不要' },
    { title: 'トライアルを開始', detail: 'ワンクリック · 完全版 · 14日間' },
    { title: '14日目 — トライアル終了', detail: 'それまでに購入しなかった場合のみ' },
    { title: 'プラグインが無音に', detail: '読み込みも作業も開けるが、音は出ない' },
    { title: 'ライセンスを購入', detail: 'プラグイン内から、またはこのサイトから' },
    { title: 'キーが届く', detail: '購入画面に表示され、メールでも届く' },
    { title: 'アクティベート — オンライン確認は1回だけ', detail: '署名付きライセンスファイルをそのマシンに保存' },
    { title: 'アンロック、ずっと使える', detail: 'オフラインで確認 · 所有するすべてのマシンで' },
  ],
  flowNote: '2つの道は合流します。トライアル中に購入しても、期限切れから何か月も経ってから購入しても、行き着く先はまったく同じです。',

  trialHeading: '14日間の無料期間',
  trial: `トライアルはプラグイン内からワンクリックで開始できます。名前もメールアドレスも、登録も不要です。それから14日間は${strong('完全なプラグイン')}が使えます。すべての機能が使え、透かしも書き出しの制限もなく、出し惜しみも、上位版へのアップグレードもありません。`,
  trialNote: 'トライアルはプラグインごとに用意されているので、試す製品それぞれに14日間があります。',

  afterTrialHeading: '14日間が過ぎたら',
  afterTrial: `プラグインが消えることはなく、あなたの作品も消えません。プラグインは引き続き読み込まれ、プロジェクトも開け、中を見て回ることもできます — ただし有効なライセンスがなければ${strong('ミュート')}され、音声は出力されません。`,
  afterTrialNote: 'トライアル中でも、期限切れからずっと後でも、ライセンスキーを入力すれば、中断したところからすぐに音が戻ります。',

  buyingHeading: 'ライセンスの購入',
  buyingIntro: '同じ購入ページへの2つのルート — 手近なほうをどうぞ。',
  fromPluginHeading: 'プラグインから',
  fromPlugin: `ライセンスダイアログの ${emLabel('Buy')} を押すと、プラグインがブラウザでショップの該当製品のページを開きます。`,
  fromSiteHeading: 'このサイトから',
  fromSite: `${link('/ja/', 'SGD のページ')}上部にある${emLabel('ライセンスを購入')}ボタンを使ってください — 購入するのに、プラグインを開いている必要も、インストールしている必要さえありません。`,
  payment: `決済は販売代理店の Lemon Squeezy が処理します。決済が完了するとすぐに${strongMuted('ライセンスキー')}が確認ページに表示され、支払いに使ったメールアドレスにも送られます — このメールは購入の証明になるので、保管しておいてください。`,

  activationHeading: 'キーを使う',
  activation: `キーをプラグインのライセンスダイアログに貼り付け、アクティベートを押します。プラグインはサーバーでキーを一度だけ確認し、署名付きのライセンスファイルをそのマシンに保存して、アンロックされます。以降はそのファイルを${strong('オフライン')}で検証するため、プラグインを使うのにインターネット接続が必要になることは二度とありません。`,
  activationNote: `この一度きりのアクティベーションで何が送信され、ライセンスファイルに何が含まれるかは、${link('/ja/privacy', 'プライバシーポリシー')}に記載しています。`,

  machinesHeading: '所有するマシンすべてで',
  machines: `ライセンスはコンピューターではなく、あなたに属します。同じキーを${strong('所有するすべてのマシン')}で使えます — スタジオのデスクトップ、持ち歩くノートパソコン、リハーサルスタジオの予備機まで。アクティベーションの回数をやりくりする必要も、マシンを買い替えたときに登録を解除する必要もありません。`,
  machinesNote: 'そのかわりに、ひとつだけお願いがあります。キーは個人用です。他の人に渡したり、公開したりしないでください。',

  supportHeading: 'キーをなくした、または困ったときは',
  support: '購入時のメールアドレスを添えて、support at radical-process.com までご連絡ください。キーをお探しします。',
};

export default { en, ja };
