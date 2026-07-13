/* =============================================================================
   SELECTED PROBLEMS — small, curated, VERIFIED examples adapted from the guide.
   Each states its source and whether it is verbatim or adapted. Math checked
   against the guide's own worked solutions.
   ============================================================================= */

export interface WorkedStep {
  latex: string;
  note?: string;
}
export interface Problem {
  id: string;
  unitSlug: string;
  unitTag: string;
  title: string;
  statement: string;
  statementLatex?: string;
  steps: WorkedStep[];
  answerLatex: string;
  mistake: string;
  takeaway: string;
  source: string;
}

export const problems: Problem[] = [
  {
    id: 'B2-U4-L3-E01',
    unitSlug: 'complex-numbers',
    unitTag: 'الأعداد العقدية',
    title: 'الشكل المثلّثي: لا تثق بالميل وحده',
    statement: 'اكتب العدد العقدي التالي بالشكل المثلّثي.',
    statementLatex: 'z=-\\sqrt3+i',
    steps: [
      { latex: 'r=\\sqrt{(-\\sqrt3)^2+1^2}=\\sqrt{3+1}=2', note: 'الطويلة r دائماً موجبة.' },
      { latex: '\\cos\\theta=\\dfrac{-\\sqrt3}{2}<0,\\quad \\sin\\theta=\\dfrac{1}{2}>0', note: 'الإشارتان معاً تحدّدان الرُّبع الثاني.' },
      { latex: '\\theta=\\dfrac{5\\pi}{6}', note: 'لا نأخذها من الظلّ وحده.' },
    ],
    answerLatex: 'z=2\\left(\\cos\\dfrac{5\\pi}{6}+i\\sin\\dfrac{5\\pi}{6}\\right)',
    mistake: 'الاعتماد على الظلّ وحده يضع الزاوية في الرُّبع الرابع، بينما العدد في الرُّبع الثاني. إشارتا جيب التمام والجيب معاً هما ما ينقذك.',
    takeaway: 'جيب التمام السالب مع الجيب الموجب يضعان الزاوية في الرُّبع الثاني. الظلّ وحده يُخفي هذا.',
    source: 'الكتاب الثاني، ص 95 (مثال B2-U4-L3-E01، بصيغته الأصلية).',
  },
  {
    id: 'B1-U7-L4-E01',
    unitSlug: 'integration',
    unitTag: 'التكامل',
    title: 'مساحة تحت قطعٍ مكافئ',
    statement: 'أوجد مساحة المنطقة المحصورة بين المنحني ومحور السينات، بين نقطتي تقاطعه مع المحور.',
    statementLatex: 'y=4x(3-x)',
    steps: [
      { latex: 'f(x)=12x-4x^2=0\\ \\Rightarrow\\ x=0\\ \\text{أو}\\ x=3', note: 'حدود التكامل هي جذور التابع.' },
      { latex: 'f\\ge0\\ \\text{على}\\ [0,3]', note: 'فوق المحور، فالمساحة هي التكامل مباشرةً.' },
      { latex: '\\mathcal{A}=\\int_0^3(12x-4x^2)\\,dx=\\left[6x^2-\\tfrac43x^3\\right]_0^3', note: 'نطبّق التابع الأصليّ.' },
      { latex: '=(54-36)-0', note: '' },
    ],
    answerLatex: '\\mathcal{A}=18\\ \\text{وحدة مساحة}',
    mistake: 'حين ينزل المنحني تحت المحور، لا تكامل f مباشرةً: المساحة لا تكون سالبة أبداً، فاستعمل القيمة المطلقة |f|.',
    takeaway: 'أوجد أين يلتقي المنحني المحور أولاً، وتأكّد أنه فوقه، ثم كامِل. الترتيب هو نصف الحل.',
    source: 'الكتاب الأول، ص 218 (مثال B1-U7-L4-E01، بصيغته الأصلية).',
  },
];
