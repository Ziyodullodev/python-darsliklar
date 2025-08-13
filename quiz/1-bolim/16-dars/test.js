const questions = [
    {
        "question": "Rekursiya nima?",
        "options": ["Funksiyaning o'zgaruvchiga qiymat yuklashi", "Funksiyaning boshqa funksiyani chaqirishi", "Funksiyaning o'zini-o'zi chaqirishi", "Funksiyaning faqat bir marta ishlashi"],
        "correct": 2,
        "explanation": "Rekursiya – bu funksiyaning o'zini takroran chaqirishi orqali muammoni hal qilish usuli."
    },
    {
        "question": "Rekursiv funksiyaning ishlashi uchun eng muhim shartlardan biri nima?",
        "options": ["Bir nechta argumentga ega bo'lishi", "Faoliyatsiz funksiyani chaqirishi", "Base case (asosiy holat)ga ega bo'lishi", "for loop ichida bo'lishi"],
        "correct": 2,
        "explanation": "Base case (asosiy holat) rekursiv funksiyaning to'xtash shartidir. Agar u bo'lmasa, funksiya cheksiz chaqirilib, 'RecursionError' yuzaga keladi."
    },
    {
        "question": "Base case (asosiy holat) nima?",
        "options": ["Rekursiya boshlanadigan nuqta", "Rekursiyani boshqa funksiyaga o'tkazish sharti", "Rekursiv chaqiruvni to'xtatadigan va qiymat qaytaradigan shart", "Har qanday xatolikni tuzatadigan kod qismi"],
        "correct": 2,
        "explanation": "Base case rekursiyaning eng kichik muammosini hal qiladi va rekursiv chaqiruvni to'xtatish uchun zarur bo'lgan shartdir."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\ndef teskari_sanash(n):\n    if n > 0:\n        print(n)\n        teskari_sanash(n - 1)\n\nteskari_sanash(3)",
        "options": ["3\n2\n1", "1\n2\n3", "3 2 1", "Cheksiz loop"],
        "correct": 0,
        "explanation": "Funksiya 3 dan boshlab, 1 ga kamaytirib sanaydi. Base case (n > 0) sharti n=0 bo'lganda noto'g'ri bo'ladi va funksiya to'xtaydi."
    },
    {
        "question": "Agar rekursiv funksiyada base case bo'lmasa nima bo'ladi?",
        "options": ["Dastur normal ishlaydi", "Kod faqat bir marta ishlaydi", "RecursionError yuzaga keladi", "Funksiya xato e'lon qiladi"],
        "correct": 2,
        "explanation": "Agar base case bo'lmasa, funksiya o'zini cheksiz chaqiraveradi va tizim resurslari tugab, 'RecursionError' xatosi beriladi."
    },
    {
        "question": "Faktorialni hisoblovchi rekursiv funksiyada `n=0` yoki `n=1` bo'lganda qaytariladigan qiymat qanday?",
        "options": ["0", "1", "n", "Hech narsa qaytarmaydi"],
        "correct": 1,
        "explanation": "Faktorialning ta'rifiga ko'ra, 0! = 1 va 1! = 1. Bu faktorial funksiyasining base case'i hisoblanadi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\ndef faktorial(n):\n    if n == 0:\n        return 1\n    else:\n        return n * faktorial(n - 1)\n\nprint(faktorial(3))",
        "options": ["3", "6", "1", "Xato"],
        "correct": 1,
        "explanation": "3! = 3 * 2 * 1 = 6. Rekursiv chaqiruvlar 3 * faktorial(2) → 3 * (2 * faktorial(1)) → 3 * (2 * (1 * faktorial(0))) → 3 * (2 * (1 * 1)) = 6"
    },
    {
        "question": "Fibonacci ketma-ketligini hisoblashda nechta base case kerak bo'ladi?",
        "options": ["1", "2", "3", "0"],
        "correct": 1,
        "explanation": "Fibonacci ketma-ketligini rekursiv hisoblashda ikkita base case kerak bo'ladi: `n=0` (qiymat 0) va `n=1` (qiymat 1)."
    },
    {
        "question": "Rekursiya yordamida stringni teskari qilish uchun `base case` qanday bo'lishi mumkin?",
        "options": ["String uzunligi 0 dan katta bo'lsa", "String uzunligi 1 dan kichik yoki teng bo'lsa", "String bo'sh bo'lmasa", "String faqat bitta harfdan iborat bo'lsa"],
        "correct": 1,
        "explanation": "String uzunligi 0 yoki 1 bo'lganda, stringni teskari qilishning hojati yo'q. Bu eng kichik muammo hisoblanadi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\ndef teskari_qil(matn):\n    if len(matn) <= 1:\n        return matn\n    return matn[-1] + teskari_qil(matn[:-1])\n\nprint(teskari_qil(\"kitob\"))",
        "options": ["kitob", "b\no\nt\ni\nk", "botik", "Xato"],
        "correct": 2,
        "explanation": "Funksiya har safar matnning oxirgi harfini oladi va qolgan qismini teskari qiladi. Natijada 'botik' so'zi hosil bo'ladi."
    },
    {
        "question": "1 dan `n` gacha bo'lgan sonlar yig'indisini hisoblovchi rekursiv funksiyaning base case'i qanday bo'ladi?",
        "options": ["n=0", "n=1", "n > 0", "n <= 1"],
        "correct": 1,
        "explanation": "Yig'indini hisoblashda `n=1` bo'lganda, rekursiyani to'xtatish uchun eng mantiqiy holat hisoblanadi, chunki bu holda yig'indi 1 ga teng."
    },
    {
        "question": "Rekursiya qanday muammolarni hal qilishda samarali?",
        "options": ["Faqat hisoblash amallari", "Faqat ro'yxatlar ustida yurish", "Murakkab muammolarni kichikroq, bir xil qismlarga bo'lish mumkin bo'lgan holatlar", "Hech qanday maxsus holatlar yo'q"],
        "correct": 2,
        "explanation": "Rekursiya muammoni kichikroq sub-muammolarga bo'lib, har bir sub-muammoni bir xil usul bilan hal qilish mumkin bo'lgan holatlarda juda samarali bo'ladi."
    },
    {
        "question": "Quyidagi kodda xato bormi?\n\ndef sanash(n):\n    if n > 0:\n        sanash(n - 1)\n    print(n)\n\nsanash(3)",
        "options": ["Ha, `print(n)` qatori `if` blokidan oldin kelishi kerak.", "Ha, bu cheksiz rekursiya.", "Yo'q, natija 0, 1, 2, 3 bo'ladi.", "Yo'q, natija 3, 2, 1, 0 bo'ladi."],
        "correct": 2,
        "explanation": "Bu kodda rekursiv chaqiruvdan so'ng print() funksiyasi ishlaydi, shuning uchun natija 0, 1, 2, 3 bo'ladi. Bu boshqa turdagi rekursiv funksiya."
    },
    {
        "question": "Rekursiv funksiyaning xotira (memory) talabi qanday?",
        "options": ["Doimiy va oz miqdorda", "Har bir rekursiv chaqiruv uchun xotira ishlatiladi, shuning uchun ko'p bo'lishi mumkin", "Rekursiya xotira ishlatmaydi", "Boshqa funksiyalarga nisbatan kamroq"],
        "correct": 1,
        "explanation": "Har bir rekursiv chaqiruvda stack'da yangi 'frame' hosil bo'ladi. Agar rekursiya chuqur bo'lsa, bu stack Overflow xatosiga olib kelishi mumkin."
    },
    {
        "question": "Rekursiya va loop (for, while) o'rtasidagi asosiy farq nima?",
        "options": ["Ikkalasi ham bir xil ishlaydi, farqi yo'q.", "Rekursiya faqat sonlar bilan, loop esa matnlar bilan ishlaydi.", "Rekursiya muammoni o'zini o'zi chaqirib hal qiladi, loop esa shart yoki iterable ustida takroriy harakatni bajaradi.", "Loop tezroq ishlaydi, rekursiya sekinroq."],
        "correct": 2,
        "explanation": "Asosiy farq shuki, rekursiya funksiyani qayta-qayta chaqirishga asoslangan, loop esa aniq belgilangan shart yoki iteratsiyalar soni bo'yicha takrorlanadi."
    }
]