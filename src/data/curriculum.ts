/* =============================================================================
   CURRICULUM DATA — the 14 units of the Syrian Scientific Baccalaureate maths
   programme (Book 1: Analysis · Book 2: Geometry, Complex numbers, Probability).

   Grounded in: syrian_baccalaureate_math_complete_guide_ar.md (Ministry of
   Education, ed. 1447H / 2025-2026). Hooks are original site copy paraphrased
   from each unit's "نظرة عامة"; formulas are copied verbatim from each unit's
   "جدول قوانين الوحدة" (formula table); skills from "قائمة التحقق".

   To update: edit values here only. Motif keys map to SVG glyphs in
   components/UnitGlyph.astro.
   ============================================================================= */

export interface Formula {
  latex: string;
  label: string;
}
export interface Term {
  ar: string;
  en: string;
}
export type MotifKey =
  | 'staircase' | 'asymptote' | 'tangent' | 'converge' | 'logcurve'
  | 'expcurve' | 'area' | 'axes3d' | 'angle' | 'plane'
  | 'complexplane' | 'rotation' | 'tree' | 'dice';

export interface Unit {
  book: 1 | 2;
  unitNo: number;
  slug: string;
  titleAr: string;
  titleEn: string;
  hook: string;
  lessonsAr: string[];
  keyFormulas: Formula[];
  skills: string[];
  /** 1 = foundational, 2 = core, 3 = synthesis-heavy */
  difficulty: 1 | 2 | 3;
  englishTerms: Term[];
  motif: MotifKey;
}

export const BOOK_TITLES: Record<1 | 2, { ar: string; en: string; theme: string }> = {
  1: { ar: 'الكتاب الأول · التحليل', en: 'Analysis', theme: 'التوابع والنهايات والاشتقاق والتكامل' },
  2: { ar: 'الكتاب الثاني · الهندسة والأعداد العقدية والاحتمالات', en: 'Geometry, Complex Numbers, Probability', theme: 'الفراغ، العقديّات، والعدّ والاحتمال' },
};

export const DIFFICULTY_LABEL: Record<1 | 2 | 3, string> = {
  1: 'تأسيسي',
  2: 'أساسي',
  3: 'متقدّم',
};

export const units: Unit[] = [
  // ---------------------------------------------------------------- Book 1
  {
    book: 1, unitNo: 1, slug: 'sequences-induction', motif: 'staircase',
    titleAr: 'المتتاليات والإثبات بالتدريج',
    titleEn: 'Sequences and Mathematical Induction',
    hook: 'المتتاليات الحسابية والهندسية، مع سلاح الإثبات بالتدريج لكل عبارة تبدأ بـ«من أجل كلّ n».',
    lessonsAr: ['المتتاليات: الاطّراد والحسابية والهندسية', 'الإثبات بالتدريج (الاستقراء الرياضي)'],
    keyFormulas: [
      { latex: 'u_n=u_0+nr', label: 'الحدّ العام للمتتالية الحسابية' },
      { latex: 'S=\\dfrac{n(a+\\ell)}{2}', label: 'مجموع حدود متتالية حسابية' },
      { latex: 'u_n=u_0\\,q^{\\,n}', label: 'الحدّ العام للمتتالية الهندسية' },
    ],
    skills: ['التمييز بين المتتالية الحسابية والهندسية', 'إيجاد الحدّ العام والمجموع', 'تطبيق خطوات الإثبات بالتدريج الثلاث'],
    difficulty: 1,
    englishTerms: [
      { ar: 'متتالية', en: 'sequence' },
      { ar: 'الإثبات بالتدريج', en: 'mathematical induction' },
      { ar: 'متتالية هندسية', en: 'geometric sequence' },
    ],
  },
  {
    book: 1, unitNo: 2, slug: 'limits-continuity', motif: 'asymptote',
    titleAr: 'التوابع: النهايات والاستمرار',
    titleEn: 'Functions: Limits and Continuity',
    hook: 'النهايات والمقاربات والاستمرار، ومبرهنة القيم الوسطى التي تُثبت وجود الجذور دون حسابها.',
    lessonsAr: [
      'نهاية تابع عند اللانهاية', 'نهاية تابع عند عدد حقيقي', 'العمليات على النهايات وأشكال عدم التعيين',
      'مبرهنات المقارنة (الحصر)', 'نهاية تابع مركّب', 'المقارب المائل', 'الاستمرار', 'مبرهنة القيم الوسطى',
    ],
    keyFormulas: [
      { latex: '\\lim\\limits_{x\\to\\pm\\infty}\\dfrac{a_nx^n+\\cdots}{b_mx^m+\\cdots}=\\lim\\limits_{x\\to\\pm\\infty}\\dfrac{a_nx^n}{b_mx^m}', label: 'نهاية كسر بالحدّ المسيطر' },
      { latex: 'y=ax+b:\\ a=\\lim\\dfrac{f(x)}{x},\\ b=\\lim(f(x)-ax)', label: 'المقارب المائل' },
      { latex: '\\lim\\limits_{x\\to a}f(x)=f(a)', label: 'شرط الاستمرار عند نقطة' },
    ],
    skills: ['رفع أشكال عدم التعيين الأربعة', 'إيجاد المقاربات الأفقية والشاقولية والمائلة', 'استعمال مبرهنة القيم الوسطى'],
    difficulty: 3,
    englishTerms: [
      { ar: 'النهاية', en: 'limit' },
      { ar: 'المقارب المائل', en: 'oblique asymptote' },
      { ar: 'مبرهنة القيم الوسطى', en: 'intermediate value theorem' },
    ],
  },
  {
    book: 1, unitNo: 3, slug: 'differentiation', motif: 'tangent',
    titleAr: 'التوابع: الاشتقاق',
    titleEn: 'Functions: Differentiation',
    hook: 'المشتقّ هو ميل المماس ومعدّل التغيّر اللحظي، ومفتاح جداول التغيّر وعدّ حلول المعادلات.',
    lessonsAr: ['المشتق: التعريف والقواعد', 'تطبيقات الاشتقاق: الاطّراد والقيم الحدّية والمماس', 'اشتقاق تابع مركّب (قاعدة السلسلة)', 'المشتقات من مراتب عليا'],
    keyFormulas: [
      { latex: "f'(a)=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}", label: 'تعريف المشتقّ عند نقطة' },
      { latex: "y=f'(a)(x-a)+f(a)", label: 'معادلة المماس' },
      { latex: "\\left(\\dfrac{u}{v}\\right)'=\\dfrac{u'v-uv'}{v^2}", label: 'مشتق القسمة' },
    ],
    skills: ['حساب المشتقّ بالتعريف وبالقواعد', 'كتابة معادلة المماس', 'بناء جدول تغيّرات وقراءة القيم الحدّية'],
    difficulty: 2,
    englishTerms: [
      { ar: 'المشتقّ', en: 'derivative' },
      { ar: 'المماس', en: 'tangent' },
      { ar: 'قاعدة السلسلة', en: 'chain rule' },
    ],
  },
  {
    book: 1, unitNo: 4, slug: 'sequence-limits', motif: 'converge',
    titleAr: 'نهاية متتالية',
    titleEn: 'Limits of Sequences',
    hook: 'ماذا يحدث لحدود المتتالية حين يكبر الدليل بلا حدّ؟ تقارب وتباعد، ومبرهنات تُثبت وجود النهاية.',
    lessonsAr: ['نهاية متتالية: تذكرة', 'مبرهنات نهايات المتتاليات', 'تقارب المتتاليات المطّردة', 'المتتاليات المتجاورة والتراجعية'],
    keyFormulas: [
      { latex: '|q|<1\\ \\Rightarrow\\ \\lim q^n=0', label: 'نهاية q أُس n' },
      { latex: '\\lim\\dfrac{1}{n^k}=0', label: 'متتالية مرجعية آيلة للصفر' },
      { latex: 'u_{n+1}=f(u_n)\\ \\Rightarrow\\ \\ell=f(\\ell)', label: 'نهاية متتالية تراجعية' },
    ],
    skills: ['معرفة نهاية q أُس n حسب موضع q', 'إثبات أنّ مطّردة محدودة متقاربة', 'دراسة متتالية تراجعية'],
    difficulty: 2,
    englishTerms: [
      { ar: 'متتالية متقاربة', en: 'convergent sequence' },
      { ar: 'متتاليتان متجاورتان', en: 'adjacent sequences' },
      { ar: 'متتالية تراجعية', en: 'recursive sequence' },
    ],
  },
  {
    book: 1, unitNo: 5, slug: 'natural-logarithm', motif: 'logcurve',
    titleAr: 'التابع اللوغاريتمي النيبيري',
    titleEn: 'The Natural Logarithm',
    hook: 'التابع الذي يحوّل الجداء إلى مجموع، ومنه يُولد العدد e ومفتاح حلّ المعادلات ذات المجهول في الأُسّ.',
    lessonsAr: ['تعريف التابع ln', 'الخواص الجبرية للّوغاريتم', 'دراسة التابع ln والعدد e', 'مشتق ln(u) ونهايات مهمّة'],
    keyFormulas: [
      { latex: '(\\ln x)\'=\\dfrac1x', label: 'مشتق اللوغاريتم' },
      { latex: '\\ln(ab)=\\ln a+\\ln b', label: 'تحويل الجداء إلى مجموع' },
      { latex: '\\ln x=m\\iff x=e^{m}', label: 'علاقة ln بالعدد e' },
    ],
    skills: ['تحديد المجال x>0 قبل أيّ معالجة', 'تحويل الجداءات والقوى إلى مجاميع', 'حلّ المعادلات اللوغاريتمية'],
    difficulty: 2,
    englishTerms: [
      { ar: 'اللوغاريتم النيبيري', en: 'natural logarithm' },
      { ar: 'العدد e', en: 'the number e' },
      { ar: 'تقابل', en: 'bijection' },
    ],
  },
  {
    book: 1, unitNo: 6, slug: 'exponential', motif: 'expcurve',
    titleAr: 'التابع الأُسّي',
    titleEn: 'The Exponential Function',
    hook: 'شقيق اللوغاريتم وعكسه: التابع الذي يساوي مشتقّه، وأداة نمذجة النموّ والتلاشي.',
    lessonsAr: ['التابع الأُسّي وخواصه', 'دراسة التابع الأُسّي ونهاياته', 'التوابع من النمط a أُس x', 'المعادلات التفاضلية البسيطة'],
    keyFormulas: [
      { latex: 'y=e^{x}\\iff x=\\ln y', label: 'الأُسّي عكس اللوغاريتم' },
      { latex: 'e^{a+b}=e^{a}e^{b}', label: 'القانون الأساس للأُسّي' },
      { latex: "y'=ay\\ \\Rightarrow\\ y=Ce^{ax}", label: "حلّ المعادلة y'=ay" },
    ],
    skills: ['تطبيق قوانين الأُسّي', 'حلّ المعادلات الأُسّية', "حلّ y'=ay بشرطٍ ابتدائي"],
    difficulty: 2,
    englishTerms: [
      { ar: 'التابع الأُسّي', en: 'exponential function' },
      { ar: 'معادلة تفاضلية', en: 'differential equation' },
      { ar: 'التابع العكسي', en: 'inverse function' },
    ],
  },
  {
    book: 1, unitNo: 7, slug: 'integration', motif: 'area',
    titleAr: 'التكامل والتوابع الأصلية',
    titleEn: 'Integration and Primitives',
    hook: 'العملية العكسية للاشتقاق تصير أداةً لقياس المساحات والحجوم عبر التكامل المحدَّد.',
    lessonsAr: ['التوابع الأصلية', 'قواعد حساب التوابع الأصلية', 'التكامل المحدَّد والتكامل بالتجزئة', 'حساب المساحات وحجم مجسم دوراني'],
    keyFormulas: [
      { latex: '\\int_a^b f=F(b)-F(a)', label: 'التكامل المحدَّد' },
      { latex: "\\int_a^b uv'=[uv]_a^b-\\int_a^b u'v", label: 'التكامل بالتجزئة' },
      { latex: 'V=\\pi\\int_a^b [f(x)]^2\\,dx', label: 'حجم مجسم دوراني' },
    ],
    skills: ['إيجاد التابع الأصليّ لشرطٍ ابتدائي', 'استعمال علاقة شال', 'حساب المساحات وحجم مجسم دوراني'],
    difficulty: 3,
    englishTerms: [
      { ar: 'التابع الأصليّ', en: 'primitive' },
      { ar: 'التكامل المحدَّد', en: 'definite integral' },
      { ar: 'التكامل بالتجزئة', en: 'integration by parts' },
    ],
  },
  // ---------------------------------------------------------------- Book 2
  {
    book: 2, unitNo: 1, slug: 'vectors-space', motif: 'axes3d',
    titleAr: 'الأشعّة في الفراغ',
    titleEn: 'Vectors in Space',
    hook: 'ارفع هندسة الأشعّة إلى البُعد الثالث، وحوّل الفراغ كلّه إلى حسابٍ بالإحداثيات.',
    lessonsAr: ['عموميّات وعمليّات على الأشعّة', 'الارتباط الخطّي والأساس', 'المعلم والإحداثيات في الفراغ', 'المسافة في الفراغ', 'مركز الأبعاد المتناسبة'],
    keyFormulas: [
      { latex: '\\vec{AB}+\\vec{BC}=\\vec{AC}', label: 'علاقة شال' },
      { latex: 'AB=\\sqrt{(x_B-x_A)^2+(y_B-y_A)^2+(z_B-z_A)^2}', label: 'المسافة في الفراغ' },
      { latex: '(x-a)^2+(y-b)^2+(z-c)^2=R^2', label: 'معادلة الكرة' },
    ],
    skills: ['تقرير هل ثلاثة أشعّة متوازية لمستوٍ', 'إيجاد مركّبات الشعاع ومنتصف', 'حساب المسافات وتصنيف الأشكال'],
    difficulty: 2,
    englishTerms: [
      { ar: 'متوازية لمستوٍ', en: 'coplanar' },
      { ar: 'الأساس', en: 'basis' },
      { ar: 'الكرة', en: 'sphere' },
    ],
  },
  {
    book: 2, unitNo: 2, slug: 'dot-product', motif: 'angle',
    titleAr: 'الجداء السلّمي في الفراغ',
    titleEn: 'Scalar Product in Space',
    hook: 'عددٌ واحد يختصر الأطوال والزوايا والتعامد، ويفتح لك معادلة كلّ مستوٍ في الفراغ.',
    lessonsAr: ['الجداء السلّمي: التعريف والخواص', 'التعامد والشعاع الناظم', 'المعادلة الديكارتية لمستوٍ والبُعد عنه'],
    keyFormulas: [
      { latex: '\\vec u\\cdot\\vec v=\\|\\vec u\\|\\,\\|\\vec v\\|\\cos\\theta', label: 'صيغة جيب التمام' },
      { latex: "\\vec u\\cdot\\vec v=xx'+yy'+zz'", label: 'الصيغة التحليلية' },
      { latex: '\\operatorname{dist}(M_0,\\mathcal P)=\\dfrac{|ax_0+by_0+cz_0+d|}{\\sqrt{a^2+b^2+c^2}}', label: 'بُعد نقطة عن مستوٍ' },
    ],
    skills: ['حساب الجداء السلّمي هندسياً وبالإحداثيات', 'إيجاد الزاوية بين شعاعين', 'كتابة معادلة مستوٍ من شعاعٍ ناظم'],
    difficulty: 2,
    englishTerms: [
      { ar: 'الجداء السلّمي', en: 'scalar (dot) product' },
      { ar: 'الشعاع الناظم', en: 'normal vector' },
      { ar: 'بُعد نقطة عن مستوٍ', en: 'point-to-plane distance' },
    ],
  },
  {
    book: 2, unitNo: 3, slug: 'lines-planes', motif: 'plane',
    titleAr: 'المستقيمات والمستويات في الفراغ',
    titleEn: 'Lines and Planes in Space',
    hook: 'صف المستقيمات والمستويات بالوسائط، وأجب عن السؤال المحوري: أين تتقاطع الأشياء في الفراغ؟',
    lessonsAr: ['المستقيم والمستوي كمراكز أبعاد', 'التمثيلات الوسيطية', 'التقاطعات والأوضاع النسبية', 'تقاطع ثلاثة مستويات'],
    keyFormulas: [
      { latex: 'M=A+t\\vec u', label: 'تمثيل وسيطي لمستقيم' },
      { latex: 'M=A+t\\vec u+s\\vec v', label: 'تمثيل وسيطي لمستوٍ' },
      { latex: '\\begin{cases}x=x_0+ta\\\\y=y_0+tb\\\\z=z_0+tc\\end{cases}', label: 'الصورة الإحداثية للمستقيم' },
    ],
    skills: ['كتابة التمثيل الوسيطي', 'التحويل بين الوسيطية والديكارتية', 'تصنيف ثلاثة مستويات بحلّ جملة'],
    difficulty: 3,
    englishTerms: [
      { ar: 'التمثيل الوسيطي', en: 'parametric representation' },
      { ar: 'الوضع النسبي', en: 'relative position' },
      { ar: 'جملة خطية', en: 'linear system' },
    ],
  },
  {
    book: 2, unitNo: 4, slug: 'complex-numbers', motif: 'complexplane',
    titleAr: 'الأعداد العقدية',
    titleEn: 'Complex Numbers',
    hook: 'برمزٍ واحد مربّعه يساوي ناقص واحد، تفتح عالماً عددياً جديداً يجعل لكلّ معادلةٍ جذوراً.',
    lessonsAr: ['المجموعة والشكل الجبري', 'مرافق عدد عقدي', 'الطويلة والعمدة والشكل المثلّثي', 'الشكل الأُسّي ومبرهنة دي موافر', 'المعادلات من الدرجة الثانية'],
    keyFormulas: [
      { latex: '\\bar z=a-ib,\\quad z\\bar z=a^2+b^2=|z|^2', label: 'المرافق والطويلة' },
      { latex: 'z=r(\\cos\\theta+i\\sin\\theta)', label: 'الشكل المثلّثي' },
      { latex: '(\\cos\\theta+i\\sin\\theta)^n=\\cos n\\theta+i\\sin n\\theta', label: 'مبرهنة دي موافر' },
    ],
    skills: ['العمليات مستعملاً i²=−1', 'كتابة خارج القسمة بالضرب بالمرافق', 'التحويل بين الأشكال الثلاثة'],
    difficulty: 2,
    englishTerms: [
      { ar: 'المرافق', en: 'conjugate' },
      { ar: 'الطويلة', en: 'modulus' },
      { ar: 'العمدة', en: 'argument' },
      { ar: 'مبرهنة دي موافر', en: "De Moivre's theorem" },
    ],
  },
  {
    book: 2, unitNo: 5, slug: 'complex-geometry', motif: 'rotation',
    titleAr: 'تطبيقات الأعداد العقدية في الهندسة',
    titleEn: 'Complex Numbers in Geometry',
    hook: 'حوّل مسائل الهندسة العصيّة إلى حساباتٍ عقدية قصيرة عبر لواحق النقاط والتحويلات.',
    lessonsAr: ['لاحقة نقطة وشعاع', 'المسافات والزوايا وطبيعة الأشكال', 'الكتابة العقدية للتحويلات'],
    keyFormulas: [
      { latex: 'z_{\\vec{AB}}=z_B-z_A', label: 'لاحقة الشعاع' },
      { latex: '(\\vec{AB},\\vec{AC})=\\arg\\dfrac{z_C-z_A}{z_B-z_A}', label: 'الزاوية الموجّهة' },
      { latex: "z'-\\omega=e^{i\\theta}(z-\\omega)", label: 'الدوران' },
    ],
    skills: ['قراءة لاحقة نقطةٍ أو شعاع', 'حساب مسافةٍ وزاويةٍ موجّهة', 'تمييز تحويلٍ من كتابته العقدية'],
    difficulty: 3,
    englishTerms: [
      { ar: 'اللاحقة', en: 'affix' },
      { ar: 'الدوران', en: 'rotation' },
      { ar: 'التحاكي', en: 'homothety' },
    ],
  },
  {
    book: 2, unitNo: 6, slug: 'combinatorics', motif: 'tree',
    titleAr: 'التحليل التوافقي',
    titleEn: 'Combinatorics',
    hook: 'تعلّم أن تَعُدّ دون أن تسرد: كم نتيجةً ممكنة؟ إنه جبر الاختيارات.',
    lessonsAr: ['القوائم والتراتيب والتبديلات', 'التوافيق', 'خواص التوافيق ومنشور ذي الحدّين'],
    keyFormulas: [
      { latex: 'A_n^{p}=\\dfrac{n!}{(n-p)!}', label: 'عدد التراتيب' },
      { latex: '\\binom{n}{p}=\\dfrac{n!}{p!\\,(n-p)!}', label: 'عدد التوافيق' },
      { latex: '(a+b)^n=\\sum_{k=0}^{n}\\binom{n}{k}a^{n-k}b^{k}', label: 'منشور ذي الحدّين' },
    ],
    skills: ['تقرير هل الترتيب مهمّ', 'عدّ المجموعات الجزئية بالتوافيق', 'نشر (a+b) أُس n'],
    difficulty: 2,
    englishTerms: [
      { ar: 'الترتيب', en: 'arrangement' },
      { ar: 'التوفيقة', en: 'combination' },
      { ar: 'منشور ذي الحدّين', en: 'binomial expansion' },
    ],
  },
  {
    book: 2, unitNo: 7, slug: 'probability', motif: 'dice',
    titleAr: 'الاحتمالات',
    titleEn: 'Probability',
    hook: 'من الاحتمال المشروط إلى القانون الحدّاني: أدواتٌ خوارزمية يتوقّعها كلّ امتحان بكالوريا.',
    lessonsAr: ['الاحتمالات المشروطة', 'المتحوّلات العشوائية (الأمل والتباين)', 'الاستقلال الاحتمالي', 'المتحوّل العشوائي الحدّاني'],
    keyFormulas: [
      { latex: 'P_B(A)=\\dfrac{P(A\\cap B)}{P(B)}', label: 'الاحتمال المشروط' },
      { latex: 'P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}', label: 'القانون الحدّاني' },
      { latex: 'E(X)=np,\\quad V(X)=np(1-p)', label: 'أمل وتباين الحدّاني' },
    ],
    skills: ['حساب احتمالٍ مشروط وقراءته من شجرة', 'تطبيق قانون الاحتمال الكلّي وبايز', 'نمذجة موقفٍ حدّاني'],
    difficulty: 3,
    englishTerms: [
      { ar: 'الاحتمال المشروط', en: 'conditional probability' },
      { ar: 'المتحوّل العشوائي', en: 'random variable' },
      { ar: 'القانون الحدّاني', en: 'binomial distribution' },
    ],
  },
];

export const unitsByBook = (book: 1 | 2) => units.filter((u) => u.book === book);
export const totalLessons = units.reduce((n, u) => n + u.lessonsAr.length, 0);
