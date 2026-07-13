/* Per-unit interactive demo config. Maps a curriculum unit slug to an
   interactive type (implemented in src/lib/interactives.ts) plus its Arabic
   title and one-line prompt. One hands-on demo for every unit. */

export interface DemoConfig {
  type: string;
  title: string;
  prompt: string;
}

export const demosBySlug: Record<string, DemoConfig> = {
  'sequences-induction': {
    type: 'sequences',
    title: 'المتتالية تنمو أو تتلاشى',
    prompt: 'بدّل بين الحسابية والهندسية، وحرّك الأساس لترى سلوك الحدود.',
  },
  'limits-continuity': {
    type: 'limits',
    title: 'المنحني يقترب ولا يلمس',
    prompt: 'حرّك x نحو اللانهاية وراقب f(x) تقترب من المقارب y = 2.',
  },
  'differentiation': {
    type: 'tangent',
    title: 'الميل يتغيّر مع النقطة',
    prompt: 'حرّك النقطة على المنحني وراقب ميل المماس f′(x) = 2x.',
  },
  'sequence-limits': {
    type: 'seqlimit',
    title: 'الحدود تتقارب نحو النهاية',
    prompt: 'غيّر الأساس r وراقب كيف تقترب الحدود من الخط L = 2.',
  },
  'natural-logarithm': {
    type: 'logarithm',
    title: 'الجداء يصير جمعاً',
    prompt: 'غيّر a و b وتأكّد أنّ ln(a) + ln(b) = ln(a·b).',
  },
  'exponential': {
    type: 'exponential',
    title: 'التابع الذي يساوي مشتقّه',
    prompt: 'حرّك x ولاحظ أنّ ميل المماس يساوي قيمة eˣ نفسها.',
  },
  'integration': {
    type: 'integration',
    title: 'المستطيلات تملأ المساحة',
    prompt: 'زد عدد المستطيلات وراقب المجموع يقترب من قيمة التكامل.',
  },
  'vectors-space': {
    type: 'vecadd',
    title: 'المجموع هو القطر',
    prompt: 'اسحب الشعاع v وشاهد مجموعه مع u كقطر متوازي أضلاع.',
  },
  'dot-product': {
    type: 'dotproduct',
    title: 'متى يكون الجداء صفراً؟',
    prompt: 'اسحب الشعاع الأحمر حتى يتعامد مع الأسود، فيصبح الجداء السلّمي صفراً.',
  },
  'lines-planes': {
    type: 'linesplanes',
    title: 'نقطة تجري على مستقيم',
    prompt: 'حرّك الوسيط t لترى النقطة M تتحرّك على المستقيم.',
  },
  'complex-numbers': {
    type: 'complex',
    title: 'العدد العقدي نقطة في المستوي',
    prompt: 'اسحب z لترى طويلته وعمدته ومرافقه، أو اضربه بـ i ليدور.',
  },
  'complex-geometry': {
    type: 'complexgeom',
    title: 'الضرب دوران',
    prompt: 'غيّر الزاوية θ لتدوير النقطة حول المركز ω.',
  },
  'combinatorics': {
    type: 'combinatorics',
    title: 'مثلّث باسكال',
    prompt: 'انقر خليةً لترى كيف تُبنى من الخليتين فوقها.',
  },
  'probability': {
    type: 'probability',
    title: 'التوزيع الحدّاني',
    prompt: 'غيّر n و p وراقب شكل التوزيع وموقع الأمل E(X) = np.',
  },
};
