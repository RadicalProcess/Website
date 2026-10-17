import { em, link, strong, strongMuted } from './markup';

const en = {
  description: 'SGD (Spatial Gesture Designer) turns a sound file into a gesture that travels through a virtual room around the listener. Binaural VST3 / AU / Standalone plugin for macOS and Windows.',
  formats: 'VST3 / AU / Standalone',
  windowsFormats: 'VST3 / Standalone',
  download: 'Download',
  buy: 'Buy a license',
  regularPrice: 'Regular price ',
  launchDiscount: 'launch discount',
  withCode: (code: string) => `with code ${code}`,
  until: (date: string) => `until ${date}`,

  digestLabel: 'A silent screen recording of SGD: drawing a gesture\'s path on the room floor, shaping its elevation curve, and watching the gestures fly through the room from outside.',
  digestCaption: 'Edit view — the whole instrument on one screen: gestures on the left, the room floor in the middle, the curve editor below it, and the keyboard they all play from along the bottom. Drawing a path, shaping its curves, sizing the room, then out to the observe view.',

  intro: [
    `SGD turns a sound file into a ${em('gesture')}: a sound together with its motion through a virtual room around the listener. You draw the path on the room floor, lift it into three dimensions with an elevation curve, bend the timing with a motion curve, and bind the result to a MIDI key. Pressing that key does not merely play the sound, it sends it traveling — around you, overhead, past your ear.`,
    'SGD does not pan. It binauralizes every gesture against a physical model of the room, so on headphones the sound leaves your head, with distance, air, wall reflections and Doppler all following from the space you built. The whole spatial computation runs offline in the background, so playback itself costs almost nothing — and every gesture still keeps its own mixer strip with gain, three-band EQ and a send to the shared room reverb.',
    'SGD is developed by a former employee of ZKM Karlsruhe and Dear Reality (acquired by Sennheiser), who has worked in spatial audio for over a decade.',
  ],

  // Keyed by screenshot: /img/sgd-<key>.png.
  pitches: {
    gesture: {
      alt: 'The gesture list: each row shows a key dropdown, the gesture name, its sound file and length, and a thumbnail of its path.',
      title: 'A sound, a path, a key',
      body: 'That is a gesture, and the list keeps all three together: the sound file it plays, a thumbnail of the path it flies, and the key it answers to. Pick a new key from the dropdown and the binding moves with it — up to 128 gestures in a room, each with its own color.',
    },
    key: {
      alt: 'The keyboard strip: colored dots on C4, D4, E4 and the black keys mark the gestures bound to each key.',
      title: 'Play space like an instrument',
      body: 'Every gesture lives on a MIDI key, marked by its own color on the keyboard. Spatial sound design stops being an automation-lane chore and becomes something you perform live, from your DAW or the standalone application.',
    },
    trajectory: {
      alt: 'The trajectory editor: a looping path drawn around the listener with the sample\'s waveform painted along it.',
      title: 'Draw the motion, sculpt the time',
      body: 'The waveform is painted along the trajectory, so you see which part of the sample happens where. The motion curve then lets the source rush, hesitate, freeze mid-air, or run the path backwards.',
    },
    elevation: {
      alt: 'The elevation editor: breakpoints above and below the listener\'s ear line define the height of the path.',
      title: 'Lift it off the floor, stretch it wide',
      body: 'One editor, three curves. Elevation lifts the path over your head or drops it to your feet; the width curve spreads the two channels of a stereo file apart like wingtips, opening from a point into a wide wash and closing again.',
    },
    render: {
      alt: 'The render panel: Direct plus first, second and third order reflections, a Doppler amount knob, and a background render progress bar.',
      title: 'Sound that leaves your head',
      body: 'True binaural rendering, with distance, air absorption and up to three orders of wall reflections. Dial the reflections deeper for dense, vivid spaces, and set the Doppler shift of moving sources to taste.',
    },
    room: {
      alt: 'The room settings dialog: a wireframe room with the listener at its center, size in meters, and wall material controls.',
      title: 'Rooms are real, and they are yours',
      body: 'Width, height and depth in meters, with a wall material of your choice — absorption, damping, scatter and RT60. Resize the room or swap concrete for carpet and the reflections, the reverb and every gesture adapt automatically. Rooms save as self-contained folders, samples included.',
    },
    mix: {
      alt: 'The per-gesture mix strip: gain, low, mid and high EQ knobs, and a send to the shared room reverb.',
      title: 'Every gesture keeps its own strip',
      body: 'Gain, three-band EQ and a send to the shared room reverb, per gesture. Nothing is ever rendered twice: reopen a room and it is instantly ready; tweak a curve and only that one gesture quietly re-renders while you keep working.',
    },
    trim: {
      alt: 'The trim dialog: a stereo waveform with a highlighted region and fade handles at each edge.',
      title: 'Only the part that flies',
      body: 'Drag over the waveform to keep the part of the sound you want, pull the triangles for fades, and slide the whole region along the file. The gesture and its painted trajectory redraw around whatever you keep.',
    },
  },

  observeAlt: 'The SGD observe view: the room as a wireframe box seen from outside, with four named gestures tracing colored paths around the listener.',
  observeCaption: 'Observe view — the room from outside at true scale, the listener at its center, every sounding gesture named and tracing its path in its own color, each with a glowing sphere that swells and fades with the loudness of the sound.',

  demosHeading: 'Demos',
  demosIntro: 'Five screen recordings, each with the binaural output of SGD itself as its soundtrack. Step through them with the arrows — nothing plays until you press play, and only one plays at a time.',
  headphonesHeading: 'Put headphones on first',
  headphonesBody: 'These clips are binaural: the whole point is that each ear hears its own signal. Over speakers both signals reach both ears, the cues cancel, and the sound just comes from wherever your monitors are — there is nothing left to demonstrate. On headphones the same file puts the source out in the room, behind you, above you, passing your ear.',
  previousDemo: 'Previous demo',
  nextDemo: 'Next demo',
  playDemo: 'Play this demo',

  // Keyed by clip: /video/sgd-<key>.mp4, in the order they are shown.
  demos: {
    position: {
      label: 'Position',
      caption: 'One sound, one point, moved around the room between takes — front, behind, to either side, overhead, close and far. Nothing is panned: each position is binauralized against the room, so the source stays outside your head and the direction is heard rather than inferred from a level difference.',
    },
    movement: {
      label: 'Movement',
      caption: 'The same sound set in motion along a handful of plain paths — straight across from left to right, out and back, around a square, down a zigzag — and then the motion curve bent so the source rushes through one stretch of the path and lingers over the next.',
    },
    stereo: {
      label: 'Stereo',
      caption: 'A stereo file is placed as two sources rather than one, and the width envelope under the room says where each channel sits at every moment. The same marching band is played five ways: the pair stepped apart, left and right exchanged, the stage opened gradually from a point to its full width, the pair pushed apart by distance, and spread front to back around you.',
    },
    sync: {
      label: 'Sync',
      caption: 'The sample\'s waveform is painted along the trajectory, so every event in the file has a visible place on the path. Line a transient up with a corner and the hit lands exactly there — the sound and the space it moves through are edited as one thing, by eye.',
    },
    ideas: {
      label: 'Ideas',
      caption: 'A handful of sketches of what the thing is actually for: a siren crossing the room, footsteps circling behind you, a whisper arriving at one ear, dogs somewhere off in the dark, a marching band passing by. Each one is a sound, a path and a key.',
    },
  },

  downloadHeading: 'Download',
  downloadMac: 'Download for macOS',
  downloadWindows: 'Download for Windows',
  downloadNotes: ['14-day free trial', 'every feature unlocked', 'no registration'],
  manual: 'User manual',

  specsHeading: 'Specs',
  platformLabel: 'Platform',
  platformMac: 'macOS 11 (Big Sur) or later, Apple Silicon (ARM) only',
  platformWindows: 'Windows 10 or later, 64-bit',
  formatsLabel: 'Formats',
  formatList: 'VST3, AU, Standalone',
  auNote: 'AU is macOS only',
  aaxNote: 'AAX (Pro Tools) coming in v2.0',
  sampleRatesLabel: 'Sample rates',
  sampleRates: '44.1, 48 and 96 kHz only',
  hostsLabel: 'Tested hosts',
  hosts: 'Logic Pro, Cubase, REAPER',
  specsNote: 'The macOS build needs macOS 11 (Big Sur) or above and runs on Apple Silicon (ARM) only — there is no Intel build, and it will not run on Intel Macs, including under Rosetta. Sessions must run at 44.1, 48 or 96 kHz; other sample rates are not supported. The Windows build needs Windows 10 or later (64-bit) and comes as VST3 and Standalone.',

  trialHeading: 'Trial & license',
  trial: `SGD starts with a ${strong('free 14-day trial')}. The trial is the complete plugin: every feature is unlocked for the whole period, with no watermark, no export limit and nothing held back. Starting it takes one click — no name, no email address, no registration.`,
  afterTrial: `When the 14 days are over, SGD keeps running and your rooms keep opening, but the plugin is ${strongMuted('muted')} — it produces no audio output until a valid license key is entered. Enter one at any time, before or after the trial ends, and the sound comes straight back. One key covers every machine you own — see ${link('/licensing', 'how licensing works')}.`,
};

const ja: typeof en = {
  description: 'SGD（Spatial Gesture Designer）は、仮想空間の中を動く音の動き（＝ジェスチャー）をデザインするための。バイノーラルプラグインです。macOS / Windows 対応、VST3 / AU / スタンドアロン。',
  formats: 'VST3 / AU / スタンドアロン',
  windowsFormats: 'VST3 / スタンドアロン',
  download: 'ダウンロード',
  buy: 'ライセンスを購入',
  regularPrice: '通常価格 ',
  launchDiscount: '発売記念割引',
  withCode: (code: string) => `コード ${code} を入力`,
  until: (date: string) => `${date}まで`,

  digestLabel: 'SGD の音声なしの画面収録。トップビューでジェスチャーの軌道を描き、高さのカーブを整え、ジェスチャーが空間を飛び交う様子を可視化する。',
  digestCaption: 'エディットビューでは、すべての操作をひとつの画面で行えます。左にジェスチャーのリスト、中央に空間のトップビュー、その下に三種のカーブエディター、下端にはそれらすべてを演奏するキーボードが並びます。動画では、音の軌跡を描き、カーブを整え、空間の大きさを決めてから、オブザーブビューに切り替えています。',

  intro: [
    `SGD は、${em('ジェスチャー')}を自在にデザインするプラグインです。ジェスチャーとは、リスナーを取り囲む仮想空間の中を駆け巡る音の動きのことです。リスナーを真上から見下ろしたトップビューで軌跡を描き、エレベーションカーブで高さを与え、モーションカーブで動きに緩急をつけたら、MIDI キーに割り当てます。キーを押せば、音はただ鳴るだけでなく、あなたの周りを回り、頭上を越え、耳元をかすめて空間を駆けめぐります。`,
    'SGD は単なるパンニングとは違います。空間の物理モデルに基づいてすべてのジェスチャーをバイノーラル処理するため、ヘッドホンで聴くと、音が頭の外にはっきりと定位します。距離感も、空気感も、壁の反射も、ドップラー効果も、すべてはあなたが設計した空間から自然に生まれるもの。重い空間演算はバックグラウンドであらかじめ済ませておくので、再生時の負荷はほとんどかかりません。それに加えて、各ジェスチャーには、ジェスチャー同士の音のバランスを詳細に調整するためにゲイン、3バンド EQ、共有ルームリバーブへのセンドを備えた専用のミキサーストリップが付いています。',
    'SGDはZKM カールスルーエや Dear Reality（のちに Sennheiser が買収）に在籍し、10年以上にわたって空間オーディオの開発に携わってきたエンジニアによって開発が進められています。',
  ],

  pitches: {
    gesture: {
      alt: 'ジェスチャーリスト。各行にキーのドロップダウン、ジェスチャー名、サウンドファイルとその長さ、軌道のサムネイルが並ぶ。',
      title: '音と、軌道と、キー',
      body: 'この3つを組み合わせたものがジェスチャーです。リストには、再生するサウンドファイル、音の軌道のサムネイル、対応するキーの3つがまとめて表示されます。ドロップダウンで別のキーを選べば、割り当てもそのまま移ります。ひとつの空間には最大128個のジェスチャーを置けます。それぞれに固有の色をアサインしておくことができます。',
    },
    key: {
      alt: 'キーボードストリップ。C4、D4、E4 と黒鍵の上の色付きの点が、各キーに割り当てられたジェスチャーを示す。',
      title: '空間を楽器のように演奏する',
      body: 'すべてのジェスチャーは MIDI キーに割り当てられ、ジェスチャーリストで指定した色がキーボード上に小さな丸で表示されます。これによってDAW やMIDIキーボードから、空間の動きをライブで演奏できます。',
    },
    trajectory: {
      alt: '軌道エディター。リスナーの周りをループする軌道に沿って、サンプルの波形が描かれている。',
      title: '動きを描き、時間を操る',
      body: '軌道に沿って波形が描かれるので、サンプルのどの部分がどこで鳴るのかがひと目でわかります。モーションカーブを使えば、音を加速させたり、減速させたり、完全に止めたり、逆向きに動かしたりすることもできます。',
    },
    elevation: {
      alt: 'エレベーションエディター。リスナーの耳の高さの上下に置かれたブレークポイントが、軌道の高さを決める。',
      title: '音を頭上から鳴らし、広がりを調整する',
      body: 'ひとつのエディターで3本のカーブを編集できます。エレベーションカーブでは、軌道を頭上へ持ち上げたり、足元へ下ろしたりできます。ウィズ（Width）カーブでは、ステレオファイルの左右のチャンネルを広げ、一点から広がりのある響きへ変化させることが可能です。',
    },
    render: {
      alt: 'レンダーパネル。直接音と1次・2次・3次反射、ドップラー量のノブ、バックグラウンドレンダリングの進行バー。',
      title: '頭の外に定位する音',
      body: '距離、空気吸収、最大3次までの壁の反射を再現する本格的なバイノーラルレンダリングの進捗を表示します。反射の次数を上げるほど、密度が高く鮮やかな空間になります。動く音源のドップラーの量も、好みに合わせて調整できます。',
    },
    room: {
      alt: 'ルーム設定ダイアログ。中央にリスナーがいる空間、サイズ、壁の素材の設定。',
      title: 'リアルな空間を、自由に設計',
      body: '空間の幅・高さ・奥行きをメートル単位で指定し、壁の素材（吸音、ダンピング、拡散、RT60）を設定します。サイズを変えたり、コンクリートをカーペットに替えたりすると、反射もリバーブも、すべてのジェスチャーも自動的に更新されます。空間はサンプルを含むひとつのフォルダーとして保存されます。',
    },
    mix: {
      alt: 'ジェスチャーごとのミックスストリップ。ゲイン、Low・Mid・High の EQ ノブ、共有ルームリバーブへのセンド。',
      title: 'ジェスチャーごとに専用のストリップ',
      body: 'ジェスチャーごとに、ゲイン、3バンド EQ、共有ルームリバーブへのセンドを備えています。一度レンダリングしたものを再びレンダリングすることはないので、空間を開き直せばすぐに使えます。カーブを調整したときも、作業を続けているあいだに、そのジェスチャーだけがバックグラウンドで再レンダリングされます。',
    },
    trim: {
      alt: 'トリムダイアログ。ハイライトされた範囲と、両端にフェードハンドルのあるステレオ波形。',
      title: '必要な部分だけを手軽に抽出',
      body: '波形の上をドラッグして使いたい部分を選び、三角形のハンドルでフェードを付け、範囲全体をファイル上でスライドさせます。ジェスチャーと軌道上の波形は、選んだ範囲に合わせて自動的に描き直されます。',
    },
  },

  observeAlt: 'SGD のオブザーブビュー。ワイヤーフレームの箱として外側から見た空間の中で、名前の付いた4つのジェスチャーがリスナーの周りに色付きの軌跡を描いている。',
  observeCaption: 'オブザーブビューでは、実寸の空間を外側から眺めることができます。中央にいるのがリスナーです。ジェスチャーは軌跡を表す線と、音量に合わせて膨らんだり消えたりする光の球により可視化されます。',
  
  demosHeading: 'デモ',
  demosIntro: 'SGD の画面収録を5本用意しました。どの動画も、SGD のバイノーラル出力をそのまま音声にしています。矢印で切り替えられ、再生ボタンを押すまで音は鳴りません。同時に再生されるのは1本だけです。',
  headphonesHeading: 'まずヘッドホンを着けてください',
  headphonesBody: 'これらの動画はバイノーラル音声です。左右の耳にそれぞれ別の信号が届くことで、はじめて立体的に聞こえます。スピーカーで再生すると両方の信号が両耳に届いて手がかりが打ち消し合い、音はスピーカーのある位置から聞こえるだけになってしまいます。ヘッドホンで聴けば、同じ音源が空間の中や背後、頭上、耳元を通り過ぎていくのがわかります。',
  previousDemo: '前のデモ',
  nextDemo: '次のデモ',
  playDemo: 'このデモを再生',

  demos: {
    position: {
      label: '位置',
      caption: 'ひとつの音を一点に置き、テイクごとに前、後ろ、左右、頭上、近く、遠くへと位置を変えています。パンニングは使っていません。それぞれの位置を空間に合わせてバイノーラル処理しているため、音源は頭の外に定位し、方向は音量差からの推測ではなく、実際の方向として聞こえます。',
    },
    movement: {
      label: '動き',
      caption: '同じ音を、左から右へまっすぐ横切る、行って戻る、四角形を一周する、ジグザグに進むといったシンプルな軌道で動かしています。最後はモーションカーブを曲げて、軌道のある区間は一気に駆け抜け、次の区間ではゆっくり留まるようにしています。',
    },
    stereo: {
      label: 'ステレオ',
      caption: 'ステレオファイルは2つの音源として配置され、空間の下にあるウィズ（Width）カーブで、各チャンネルの位置を時間ごとに決められます。この動画では、同じマーチングバンドを5通りで再生しています。2つの音源を段階的に離す、左右を入れ替える、一点から全幅までステージを徐々に開く、距離によって押し広げる、リスナーを囲むように前後に広げる、の5つです。',
    },
    sync: {
      label: '同期',
      caption: '軌道に沿ってサンプルの波形が描かれるので、ファイル内のどの音が軌道上のどこで鳴るのかが目で見てわかります。トランジェントを軌道の角に合わせれば、アタックがちょうどその位置で鳴ります。音と空間を、ひとつのものとして目で見ながら編集できます。',
    },
    ideas: {
      label: 'アイデア',
      caption: 'SGD の使い道を示すスケッチをいくつか集めました。空間を横切るサイレン、背後を回る足音、片耳に届くささやき、暗闇のどこかで吠える犬たち、通り過ぎるマーチングバンド。どれも、音と軌道とキーだけで作られています。',
    },
  },

  downloadHeading: 'ダウンロード',
  downloadMac: 'macOS 版をダウンロード',
  downloadWindows: 'Windows 版をダウンロード',
  downloadNotes: ['14日間の無料トライアル', '全機能を利用可能', '登録不要'],
  manual: 'ユーザーマニュアル（英語）',

  specsHeading: '仕様',
  platformLabel: '対応 OS',
  platformMac: 'macOS 11（Big Sur）以降、Apple Silicon（ARM）のみ',
  platformWindows: 'Windows 10 以降、64-bit',
  formatsLabel: 'フォーマット',
  formatList: 'VST3、AU、スタンドアロン',
  auNote: 'AU は macOS のみ',
  aaxNote: 'AAX（Pro Tools）は v2.0 で対応予定',
  sampleRatesLabel: 'サンプルレート',
  sampleRates: '44.1、48、96 kHz のみ',
  hostsLabel: '動作確認済みホスト',
  hosts: 'Logic Pro、Cubase、REAPER',
  specsNote: 'macOS 版は macOS 11（Big Sur）以降が必要で、Apple Silicon（ARM）でのみ動作します。Intel 版はなく、Rosetta 経由も含め Intel Mac では動作しません。セッションのサンプルレートは 44.1、48、96 kHz のいずれかである必要があり、それ以外には対応していません。Windows 版は Windows 10 以降（64-bit）が必要で、VST3 とスタンドアロンで提供されます。',

  trialHeading: 'トライアルとライセンス',
  trial: `SGD は${strong('14日間の無料トライアル')}から始められます。トライアル版は製品版とまったく同じで、期間中はすべての機能を制限なく使えます。透かしも書き出しの制限もありません。開始はワンクリックで、名前やメールアドレスの入力、ユーザー登録も必要ありません。`,
  afterTrial: `14日間が過ぎても SGD は起動し、保存した空間も開けますが、有効なライセンスキーを入力するまでプラグインは${strongMuted('ミュート')}され、音声は出力されません。キーはトライアルの終了前でも終了後でも、いつでも入力でき、入力すればすぐに音が戻ります。1つのキーで、お持ちのすべてのマシンで使えます。詳しくは${link('/ja/licensing', 'ライセンスの仕組み')}をご覧ください。`,
};

export default { en, ja };
