/* =============================================================================
   PER-LESSON INTERACTIVE REGISTRY
   Every one of the 57 lessons in the Syrian Scientific-Baccalaureate programme
   is mapped here to its own hands-on interactive. `type` is a unique key resolved
   to a self-contained widget in src/lib/lessonInteractives.ts (each widget bakes
   in its own verified example math — no params to plumb). Titles mirror
   curriculum.ts `lessonsAr`; prompts are short Arabic instructions.

   Lessons whose content is a proof/property (induction, limit theorems, plane
   systems…) get a fitting stepper/visual rather than a graph.
   ============================================================================= */

export interface LessonTool {
  /** stable id, also the anchor and the interactive key */
  type: string;
  title: string;
  prompt: string;
}
export interface UnitLessons {
  unitSlug: string;
  book: 1 | 2;
  unitNo: number;
  unitTitle: string;
  lessons: LessonTool[];
}

export const lessonUnits: UnitLessons[] = [
  // ============================ BOOK 1 · التحليل ============================
  {
    unitSlug: 'sequences-induction', book: 1, unitNo: 1, unitTitle: 'المتتاليات والإثبات بالتدريج',
    lessons: [
      { type: 'seq-basics', title: 'المتتاليات: الاطّراد والحسابية والهندسية', prompt: 'بدّل بين الحسابية والهندسية وحرّك الأساس/الفرق لترى سلوك الحدود.' },
      { type: 'induction', title: 'الإثبات بالتدريج (الاستقراء الرياضي)', prompt: 'خطوة الأساس ثم خطوة التوريث: شاهد كيف يسقط كلّ «الدومينو».' },
    ],
  },
  {
    unitSlug: 'limits-continuity', book: 1, unitNo: 2, unitTitle: 'التوابع: النهايات والاستمرار',
    lessons: [
      { type: 'lim-infinity', title: 'نهاية تابع عند اللانهاية', prompt: 'حرّك x نحو اللانهاية وراقب اقتراب f(x) من المقارب الأفقي.' },
      { type: 'lim-point', title: 'نهاية تابع عند عدد حقيقي', prompt: 'اقترب من a من اليمين واليسار وراقب القيمة التي تسعى إليها f.' },
      { type: 'lim-indeterminate', title: 'العمليات على النهايات وأشكال عدم التعيين', prompt: 'شكل 0/0: بسّط بالعامل المشترك وراقب النهاية تظهر من الجدول.' },
      { type: 'lim-squeeze', title: 'مبرهنات المقارنة (الحصر)', prompt: 'التابع محصورٌ بين حدّين يؤولان إلى النهاية نفسها، فيُجبَر على اللحاق بهما.' },
      { type: 'lim-composed', title: 'نهاية تابع مركّب', prompt: 'نهاية داخلية ثم خارجية: تتبّع كيف تنتقل النهاية عبر التركيب.' },
      { type: 'lim-oblique', title: 'المقارب المائل', prompt: 'حرّك x وراقب الفرق بين المنحني والمستقيم y=ax+b يتلاشى.' },
      { type: 'continuity', title: 'الاستمرار', prompt: 'حرّك مِقدار «القفزة» حتى تلتحم طرفا المنحني ويصبح مستمراً.' },
      { type: 'ivt', title: 'مبرهنة القيم الوسطى', prompt: 'التابع يغيّر إشارته على المجال، فلا بدّ أن يعبر الصفر: حاصِر الجذر بالتنصيف.' },
    ],
  },
  {
    unitSlug: 'differentiation', book: 1, unitNo: 3, unitTitle: 'التوابع: الاشتقاق',
    lessons: [
      { type: 'deriv-def', title: 'المشتق: التعريف والقواعد', prompt: 'قرّب النقطتين (h→0) وشاهد الوتر يتحوّل إلى مماس.' },
      { type: 'deriv-apps', title: 'تطبيقات الاشتقاق: الاطّراد والقيم الحدّية والمماس', prompt: 'حرّك x واقرأ إشارة f′: موجبة⇒تزايد، سالبة⇒تناقص، صفر⇒قيمة حدّية.' },
      { type: 'chain-rule', title: 'اشتقاق تابع مركّب (قاعدة السلسلة)', prompt: 'ميل المماس هنا هو حاصل ضرب مشتقّي الطبقتين.' },
      { type: 'higher-deriv', title: 'المشتقات من مراتب عليا', prompt: 'بدّل بين f و f′ و f″ ولاحظ العلاقة بين f″ والتقعّر.' },
    ],
  },
  {
    unitSlug: 'sequence-limits', book: 1, unitNo: 4, unitTitle: 'نهاية متتالية',
    lessons: [
      { type: 'seqlim-recall', title: 'نهاية متتالية: تذكرة', prompt: 'غيّر الأساس r وراقب كيف تقترب الحدود من الخط L.' },
      { type: 'seqlim-theorems', title: 'مبرهنات نهايات المتتاليات', prompt: 'المتتاليات المرجعية 1/n و 1/n² و qⁿ: قارن سرعة اقترابها من الصفر.' },
      { type: 'seqlim-monotone', title: 'تقارب المتتاليات المطّردة', prompt: 'متتالية متزايدة ومحدودة من الأعلى: لا مفرّ من أن تتقارب.' },
      { type: 'seqlim-recursive', title: 'المتتاليات المتجاورة والتراجعية', prompt: 'كرّر uₙ₊₁=f(uₙ) على مخطّط العنكبوت وشاهدها تستقرّ عند النقطة الثابتة.' },
    ],
  },
  {
    unitSlug: 'natural-logarithm', book: 1, unitNo: 5, unitTitle: 'التابع اللوغاريتمي النيبيري',
    lessons: [
      { type: 'ln-def', title: 'تعريف التابع ln', prompt: 'حرّك x وراقب المساحة تحت 1/t من 1 إلى x — إنها ln(x) نفسها.' },
      { type: 'ln-algebra', title: 'الخواص الجبرية للّوغاريتم', prompt: 'غيّر a و b وتأكّد أنّ ln(a)+ln(b)=ln(a·b): الجداء صار جمعاً.' },
      { type: 'ln-study', title: 'دراسة التابع ln والعدد e', prompt: 'ln و exp انعكاس أحدهما للآخر حول المستقيم y=x.' },
      { type: 'ln-deriv', title: 'مشتق ln(u) ونهايات مهمّة', prompt: 'حرّك النقطة على منحني ln وتأكّد أنّ الميل يساوي 1/x.' },
    ],
  },
  {
    unitSlug: 'exponential', book: 1, unitNo: 6, unitTitle: 'التابع الأُسّي',
    lessons: [
      { type: 'exp-props', title: 'التابع الأُسّي وخواصه', prompt: 'حرّك x ولاحظ أنّ ميل المماس يساوي قيمة eˣ نفسها.' },
      { type: 'exp-study', title: 'دراسة التابع الأُسّي ونهاياته', prompt: 'ادرس x·e^−x: قيمة حدّية ثمّ تلاشٍ نحو الصفر عند اللانهاية.' },
      { type: 'exp-power', title: 'التوابع من النمط aˣ', prompt: 'غيّر الأساس a وراقب متى يكون التابع متزايداً (a>1) أو متناقصاً (a<1).' },
      { type: 'exp-diffeq', title: 'المعادلات التفاضلية البسيطة', prompt: 'غيّر k والشرط الابتدائي وشاهد حلول y′=k·y الأُسّية.' },
    ],
  },
  {
    unitSlug: 'integration', book: 1, unitNo: 7, unitTitle: 'التكامل والتوابع الأصلية',
    lessons: [
      { type: 'prim-def', title: 'التوابع الأصلية', prompt: 'حرّك الثابت C: كلّ التوابع الأصلية تنزاح شاقولياً بنفس الميل.' },
      { type: 'prim-rules', title: 'قواعد حساب التوابع الأصلية', prompt: 'ميل التابع الأصلي F عند كلّ نقطة يساوي قيمة f هناك.' },
      { type: 'integral-def', title: 'التكامل المحدَّد والتكامل بالتجزئة', prompt: 'زد عدد المستطيلات وراقب المجموع يقترب من قيمة التكامل.' },
      { type: 'integral-area', title: 'حساب المساحات وحجم مجسم دوراني', prompt: 'المساحة المحصورة بين منحنيين هي تكامل الفرق بينهما.' },
    ],
  },

  // ================= BOOK 2 · الهندسة والعقديّات والاحتمالات =================
  {
    unitSlug: 'vectors-space', book: 2, unitNo: 1, unitTitle: 'الأشعّة في الفراغ',
    lessons: [
      { type: 'vec-ops', title: 'عموميّات وعمليّات على الأشعّة', prompt: 'اسحب الشعاع v وشاهد مجموعه مع u كقطر متوازي أضلاع.' },
      { type: 'vec-basis', title: 'الارتباط الخطّي والأساس', prompt: 'حرّك الشعاع حتى يصير على استقامة الآخر: عندها يصيران مرتبطَين خطّياً.' },
      { type: 'vec-coords', title: 'المعلم والإحداثيات في الفراغ', prompt: 'غيّر x و y و z وتتبّع موضع النقطة في مُعلَمٍ ثلاثي الأبعاد.' },
      { type: 'vec-distance', title: 'المسافة في الفراغ', prompt: 'حرّك النقطتين واقرأ المسافة من قانون فيثاغورس في الفراغ.' },
      { type: 'vec-barycenter', title: 'مركز الأبعاد المتناسبة', prompt: 'غيّر الأوزان وشاهد مركز الثقل ينزلق نحو النقطة الأثقل.' },
    ],
  },
  {
    unitSlug: 'dot-product', book: 2, unitNo: 2, unitTitle: 'الجداء السلّمي في الفراغ',
    lessons: [
      { type: 'dot-def', title: 'الجداء السلّمي: التعريف والخواص', prompt: 'اسحب الشعاع الأحمر وراقب قيمة u·v والزاوية بينهما.' },
      { type: 'dot-normal', title: 'التعامد والشعاع الناظم', prompt: 'الشعاع الناظم عمودي على كامل المستوي: أدِر المشهد لتراه.' },
      { type: 'dot-planedist', title: 'المعادلة الديكارتية لمستوٍ والبُعد عنه', prompt: 'حرّك النقطة واقرأ بُعدها العمودي عن المستقيم (نظير المستوي في المستوى).' },
    ],
  },
  {
    unitSlug: 'lines-planes', book: 2, unitNo: 3, unitTitle: 'المستقيمات والمستويات في الفراغ',
    lessons: [
      { type: 'line-locus', title: 'المستقيم والمستوي كمراكز أبعاد', prompt: 'حرّك الوسيط t لترى النقطة M تجري على المستقيم M=A+t·u.' },
      { type: 'param-repr', title: 'التمثيلات الوسيطية', prompt: 'غيّر الوسيطين t و s لتمسح نقاط المستوي M=A+t·u+s·v.' },
      { type: 'line-positions', title: 'التقاطعات والأوضاع النسبية', prompt: 'حرّك المستقيم الثاني: متقاطعان، متوازيان، أم منطبقان؟' },
      { type: 'three-planes', title: 'تقاطع ثلاثة مستويات', prompt: 'بدّل الحالة وشاهد نوع الحلّ: نقطة، مستقيم، أو لا حلّ.' },
    ],
  },
  {
    unitSlug: 'complex-numbers', book: 2, unitNo: 4, unitTitle: 'الأعداد العقدية',
    lessons: [
      { type: 'cx-algebraic', title: 'المجموعة والشكل الجبري', prompt: 'اسحب النقطة واقرأ العدد العقدي z=a+ib المقابل لها.' },
      { type: 'cx-conjugate', title: 'مرافق عدد عقدي', prompt: 'المرافق z̄ هو انعكاس z حول المحور الحقيقي.' },
      { type: 'cx-modarg', title: 'الطويلة والعمدة والشكل المثلّثي', prompt: 'اسحب z واقرأ طويلته |z| وعمدته θ — إنها إحداثياته القطبية.' },
      { type: 'cx-demoivre', title: 'الشكل الأُسّي ومبرهنة دي موافر', prompt: 'غيّر الأُس n وشاهد zⁿ يدور بزاوية nθ وتتغيّر طويلته إلى rⁿ.' },
      { type: 'cx-quadratic', title: 'المعادلات من الدرجة الثانية', prompt: 'مميّزٌ سالب ⇒ جذران عقديّان مترافقان، متناظران حول المحور الحقيقي.' },
    ],
  },
  {
    unitSlug: 'complex-geometry', book: 2, unitNo: 5, unitTitle: 'تطبيقات الأعداد العقدية في الهندسة',
    lessons: [
      { type: 'cxg-affix', title: 'لاحقة نقطة وشعاع', prompt: 'لاحقة الشعاع AB هي فرق اللاحقتين: z_B − z_A.' },
      { type: 'cxg-distangle', title: 'المسافات والزوايا وطبيعة الأشكال', prompt: 'اسحب النقاط واقرأ المسافة والزاوية الموجّهة من الأعداد العقدية.' },
      { type: 'cxg-transforms', title: 'الكتابة العقدية للتحويلات', prompt: 'بدّل التحويل (انسحاب، تحاكٍ، دوران) وشاهد أثره على النقطة.' },
    ],
  },
  {
    unitSlug: 'combinatorics', book: 2, unitNo: 6, unitTitle: 'التحليل التوافقي',
    lessons: [
      { type: 'count-arrangements', title: 'القوائم والتراتيب والتبديلات', prompt: 'غيّر n و p واحسب عدد التراتيب حيث الترتيب مهمّ.' },
      { type: 'count-combinations', title: 'التوافيق', prompt: 'اختر p عناصر من n دون اعتبار الترتيب: هذا هو التوفيق C(n,p).' },
      { type: 'count-pascal', title: 'خواص التوافيق ومنشور ذي الحدّين', prompt: 'انقر خليةً في مثلّث باسكال لترى أنّها مجموع الخليتين فوقها.' },
    ],
  },
  {
    unitSlug: 'probability', book: 2, unitNo: 7, unitTitle: 'الاحتمالات',
    lessons: [
      { type: 'prob-conditional', title: 'الاحتمالات المشروطة', prompt: 'غيّر احتمالات الشجرة واقرأ الاحتمال المشروط على كلّ فرع.' },
      { type: 'prob-randomvar', title: 'المتحوّلات العشوائية (الأمل والتباين)', prompt: 'عدّل قيم التوزيع وراقب الأمل E(X) والتباين V(X).' },
      { type: 'prob-independence', title: 'الاستقلال الاحتمالي', prompt: 'حرّك الحادثتين حتى يتحقّق P(A∩B)=P(A)·P(B): عندها هما مستقلّان.' },
      { type: 'prob-binomial', title: 'المتحوّل العشوائي الحدّاني', prompt: 'غيّر n و p وراقب شكل التوزيع الحدّاني وموقع الأمل np.' },
    ],
  },
];

export const allLessonTools: LessonTool[] = lessonUnits.flatMap((u) => u.lessons);
export const lessonCount = allLessonTools.length;
