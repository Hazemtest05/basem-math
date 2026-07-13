import { teacher } from './teacher';

export interface NavItem {
  label: string;
  href: string;
}

export const site = {
  /** central slogan, refined from the brief after reading the curriculum */
  slogan: 'الرياضيات أسهل مما تتخيّل',
  sloganSecondary: 'حين تُشرح الفكرة بالترتيب الصحيح، يصبح الحلّ مجرّد خطوات.',

  titleTemplate: (page?: string) =>
    page ? `${page} · ${teacher.brandName}` : `${teacher.brandName} · رياضيات البكالوريا العلمية`,

  description:
    'موقع تعليمي عربي لتدريس رياضيات الثالث الثانوي العلمي في سوريا: تحليل، هندسة فراغية، أعداد عقدية، احتمالات. شرح يبدأ من الفكرة، أمثلة محلولة خطوة بخطوة، ودروس تفاعلية.',

  locale: 'ar',
  dir: 'rtl',

  nav: [
    { label: 'البداية', href: '/' },
    { label: 'المنهاج', href: '/curriculum' },
    { label: 'الدروس', href: '/lessons' },
    { label: 'الطريقة', href: '/methodology' },
    { label: 'عن الأستاذ', href: '/about' },
    { label: 'تواصل', href: '/contact' },
  ] satisfies NavItem[],

  /** playful footer sign-off from the brief */
  footerSignoff: 'نهاية الصفحة، وليست نهاية المسألة.',
};
