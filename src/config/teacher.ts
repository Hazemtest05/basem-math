/* =============================================================================
   TEACHER / BUSINESS CONFIGURATION  —  SINGLE SOURCE OF TRUTH
   -----------------------------------------------------------------------------
   Every real-world fact about the teacher and the service lives here. Nothing
   personal is hard-coded anywhere else in the site.

   ⚠️  FIELDS MARKED `@placeholder` ARE NOT REAL. Replace them before launch.
       The list of placeholder fields is exported as `PLACEHOLDER_FIELDS` at the
       bottom and is surfaced in IMPLEMENTATION_REPORT.md and a dev-only banner.

   No personal facts have been invented: names, numbers, credentials, and links
   below are neutral, clearly-labelled stand-ins, kept realistic only so layout
   and spacing are correct.
   ============================================================================= */

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
  /** icon key resolved in components/Icon.astro */
  icon: 'whatsapp' | 'telegram' | 'youtube' | 'instagram' | 'facebook' | 'mail' | 'phone';
}

export interface CourseFormat {
  id: string;
  title: string;
  summary: string;
  detail: string;
  cadence: string;
}

export interface TeacherConfig {
  /** @placeholder brand + display name — replace with the real teacher name */
  brandName: string;
  /** @placeholder */
  name: string;
  /** professional title (safe to keep, describes the role not the person) */
  title: string;
  level: string;
  /** @placeholder short bio — rewrite in the teacher's real voice */
  bio: string;
  /** @placeholder longer about-page biography */
  bioLong: string[];
  /** @placeholder path under /public — drop a real portrait here */
  photo: string | null;
  /** @placeholder years of experience */
  yearsExperience: number | null;

  /** @placeholder contact — all must be replaced with real, reachable values */
  whatsapp: string;      // international format, digits only, no + or spaces
  phone: string;
  email: string;
  /** @placeholder */
  city: string;
  country: string;

  /** @placeholder credentials — keep only what is true */
  credentials: string[];

  /** @placeholder external booking link (Calendly / form / etc.) or null */
  bookingUrl: string | null;

  social: SocialLink[];
  courseFormats: CourseFormat[];
}

export const teacher: TeacherConfig = {
  brandName: 'باسم',
  name: 'الأستاذ باسم',
  title: 'مدرّس رياضيات',
  level: 'البكالوريا العلمية',

  bio: 'أشرح رياضيات الثالث الثانوي العلمي بطريقة تبدأ من الفكرة لا من القانون، حتى تصبح المسألة خطوات واضحة بدل أن تكون لغزاً.',
  bioLong: [
    'أُدرّس منهاج البكالوريا العلمية في سوريا: كتاب التحليل وكتاب الهندسة والأعداد العقدية والاحتمالات. هدفي أن يفهم الطالب لماذا يعمل القانون، لا أن يحفظه ثم ينساه ليلة الامتحان.',
    'كل درس عندي يبدأ بالفكرة الأساسية، ثم مثال محلول خطوة بخطوة، ثم الخطأ الشائع الذي يقع فيه معظم الطلاب، ثم تمرين يشبه سؤال الامتحان تماماً. الطريقة نفسها التي بُني عليها هذا الموقع.',
    'أومن أن أغلب «صعوبة» الرياضيات ليست في المادة، بل في طريقة عرضها. حين تُشرح الفكرة بالترتيب الصحيح، يكتشف الطالب أنه كان قادراً طوال الوقت.',
  ],
  photo: null,
  yearsExperience: null,

  whatsapp: '963900000000',
  phone: '+963 900 000 000',
  email: 'teacher@example.com',
  city: 'حمص',
  country: 'سوريا',

  credentials: [
    'إجازة في الرياضيات',
    'خبرة في تدريس منهاج البكالوريا العلمية',
    'تحضير مكثّف لأسئلة الدورات السابقة',
  ],

  bookingUrl: null,

  social: [
    { label: 'واتساب', href: 'https://wa.me/963900000000', handle: 'تواصل مباشر', icon: 'whatsapp' },
    { label: 'تيليغرام', href: 'https://t.me/example', handle: '@example', icon: 'telegram' },
    { label: 'يوتيوب', href: 'https://youtube.com/@example', handle: 'دروس مصوّرة', icon: 'youtube' },
  ],

  courseFormats: [
    {
      id: 'private',
      title: 'دروس خصوصية',
      summary: 'جلسة مركّزة على نقاط ضعفك أنت بالذات.',
      detail: 'نبدأ بتشخيص سريع لمكان التعثّر، ثم نبني عليه. مناسبة لمن يريد قفزة سريعة قبل الامتحان.',
      cadence: 'حسب الحاجة',
    },
    {
      id: 'group',
      title: 'مجموعات صغيرة',
      summary: 'شرح منظّم للمنهاج كاملاً مع زملاء بنفس المستوى.',
      detail: 'نسير مع الوحدات بالترتيب: فكرة، مثال، خطأ شائع، تمرين امتحاني. مع متابعة أسبوعية للواجبات.',
      cadence: 'حصّتان أسبوعياً',
    },
    {
      id: 'exam',
      title: 'تحضير الامتحان',
      summary: 'خطة مراجعة مبنية على أنماط أسئلة البكالوريا.',
      detail: 'نراجع الأنماط السبعة عشر للمسائل، ونتدرّب على المسائل المركّبة متعددة الأجزاء، ونضبط إدارة الوقت.',
      cadence: 'قبل الدورة',
    },
  ],
};

/** Fields that are stand-ins and MUST be replaced before going live. */
export const PLACEHOLDER_FIELDS: readonly string[] = [
  'brandName',
  'name',
  'bio',
  'bioLong',
  'photo',
  'yearsExperience',
  'whatsapp',
  'phone',
  'email',
  'city',
  'credentials',
  'bookingUrl',
  'social[*].href',
];

/** Are we still running on stand-in contact details? (drives the dev banner) */
export const usingPlaceholders =
  teacher.whatsapp === '963900000000' || teacher.email === 'teacher@example.com';

/** Build a wa.me deep link with an optional prefilled Arabic message. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${teacher.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
