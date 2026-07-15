ملفات الكتب القابلة للتحميل  —  Downloadable book files
=======================================================

ضع ملفَّي الـ PDF هنا بهذين الاسمين بالضبط:
Drop the two PDF files here with these EXACT names:

    book-1.pdf   ← الكتاب الأول (التحليل)  /  Book 1 (Analysis)
    book-2.pdf   ← الكتاب الثاني (الهندسة والعقديّات والاحتمالات)  /  Book 2

مجلّد public/ يُنسخ كما هو عند البناء، فتصبح المسارات:
public/ is copied verbatim at build time, so they are served at:

    /downloads/book-1.pdf
    /downloads/book-2.pdf

لتغيير الأسماء أو الربط برابط خارجي بدل ملف محلي، عدّل الحقل href في:
To use different names or an external link instead, edit the `href` field in:

    src/config/downloads.ts
