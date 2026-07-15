/* =============================================================================
   DOWNLOADABLE BOOKS — the two Scientific-Baccalaureate textbooks.

   These are surfaced ONLY through the calculator Easter egg on /lessons:
     · 1 + 1  → reveals Book 1 (Analysis)
     · 2 + 2  → reveals Book 2 (Geometry · Complex numbers · Probability)
   They are intentionally not linked anywhere else on the site.

   ⚠️  TO MAKE THE DOWNLOADS WORK: drop the two PDF files into `public/downloads/`
       with these exact names:
         public/downloads/book-1.pdf
         public/downloads/book-2.pdf
       Astro copies `public/` verbatim, so they become /downloads/book-1.pdf etc.
       To point at different files or external links instead, just edit `href`.
   ============================================================================= */

export interface BookDownload {
  id: 'book-1' | 'book-2';
  /** the arithmetic that unlocks it, e.g. "1+1" */
  trigger: string;
  titleAr: string;
  subtitleAr: string;
  /** path under /public (or an absolute URL) */
  href: string;
  /** small meta line shown on the card */
  meta: string;
}

export const books: BookDownload[] = [
  {
    id: 'book-1',
    trigger: '1+1',
    titleAr: 'الكتاب الأول · التحليل',
    subtitleAr: 'التوابع، النهايات، الاشتقاق، والتكامل',
    href: '/downloads/book-1.pdf',
    meta: 'PDF · الصف الثالث الثانوي العلمي',
  },
  {
    id: 'book-2',
    trigger: '2+2',
    titleAr: 'الكتاب الثاني · الهندسة والأعداد العقدية والاحتمالات',
    subtitleAr: 'الأشعّة والمستويات، الأعداد العقدية، والاحتمالات',
    href: '/downloads/book-2.pdf',
    meta: 'PDF · الصف الثالث الثانوي العلمي',
  },
];
