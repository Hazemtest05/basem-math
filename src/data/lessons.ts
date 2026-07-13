/* =============================================================================
   INTERACTIVE MICRO-LESSON DATA
   Grounded in Book 1, Unit 3, Lesson 1 (المشتق) — example B1-U3-L1-E01, verified:
     f(x)=x²−3x  ·  f'(2)=1  ·  f(2)=−2  ·  tangent y=x−4.
   Cross-checked: f'(x)=2x−3 ⇒ f'(2)=1 ✔ ; line passes through (2,−2): 2−4=−2 ✔.
   The common mistake is the lesson's own «خطأ شائع» (product rule), reframed with
   the site's light voice.
   ============================================================================= */

export interface Hint {
  label: string;
  body: string;
}

export interface MiniQuestion {
  prompt: string;
  /** accepted numeric answer */
  answer: number;
  tolerance: number;
  unitHint: string;
  correct: string;
  wrong: string;
}

export interface TangentLesson {
  unitSlug: string;
  eyebrow: string;
  title: string;
  problemLead: string;
  /** LaTeX for the function under study */
  fnLatex: string;
  /** the point of tangency, algebraically */
  pointLatex: string;
  hints: Hint[];
  solutionLatex: string;
  solutionNote: string;
  commonMistake: { wrong: string; right: string; note: string };
  mini: MiniQuestion;
  /** plotting parameters for the SVG stage (f(x)=x^2-3x) */
  plot: { a: number; b: number; c: number; xFocus: number; domain: [number, number] };
}

export const tangentLesson: TangentLesson = {
  unitSlug: 'differentiation',
  eyebrow: 'درس تفاعلي · الاشتقاق',
  title: 'من الوتر إلى المماس',
  problemLead:
    'خذ التابع أدناه. اسحب النقطة على المنحني، وراقب كيف يتحوّل الوتر إلى مماس حين تقترب النقطتان. المطلوب: ميل المماس عند الفاصلة 2، ثم معادلته.',
  fnLatex: 'f(x)=x^2-3x',
  pointLatex: 'a=2',
  hints: [
    {
      label: 'الفكرة',
      body: 'ميل المماس عند نقطة هو المشتقّ عندها. فلنحسب f′ أولاً بدل أن نخمّن.',
    },
    {
      label: 'التعريف',
      body: 'f′(a) هو نهاية معدّل التغيّر الوسطي بين النقطتين حين تقترب إحداهما من الأخرى. الحيلة: بسّط الكسر واختصر h قبل أن تجعل h→0.',
    },
    {
      label: 'الحساب',
      body: 'عند a=2: المقدار يساوي h+1، وعندما h→0 يؤول إلى 1. إذن f′(2)=1، وهذا هو الميل.',
    },
    {
      label: 'المعادلة',
      body: 'المماس: y=f′(a)(x−a)+f(a). ونعرف f(2)=4−6=−2. بقي التعويض.',
    },
  ],
  solutionLatex: 'y=1\\cdot(x-2)+(-2)=x-4',
  solutionNote: 'التحقّق بالجدول: f′(x)=2x−3، إذن f′(2)=1 ✔، والمستقيم y=x−4 يمرّ بالنقطة (2,−2).',
  commonMistake: {
    wrong: "(uv)'=u'v'",
    right: "(uv)'=u'v+uv'",
    note: 'أشهر فخّ في الاشتقاق: قاعدة الجداء ليست ضرب المشتقّين. هي حدّان، تشتقّ في كلٍّ منهما عاملاً واحداً وتترك الآخر.',
  },
  mini: {
    prompt: 'دورك الآن: ما ميل المماس للتابع y=x² عند الفاصلة x=3؟',
    answer: 6,
    tolerance: 0.001,
    unitHint: 'رقم فقط',
    correct: 'ممتاز. المشتقّ y′=2x، وعند 3 يعطي 6. السؤال حاول يشتّتك، لكن الخطة نجحت.',
    wrong: 'قريب، بس لسا لأ. تذكّر y′=2x، وعوّض x=3. المماس بيحبّ الأرقام الزوجية اليوم.',
  },
  plot: { a: 1, b: -3, c: 0, xFocus: 2, domain: [-1.6, 4.6] },
};
