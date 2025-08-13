const questions = [
    {
        "question": "Default argumentlar funksiyada qanday vazifani bajaradi?",
        "options": ["Funksiyaga har doim qiymat berishni talab qiladi", "Argument kiritilmasa, standart qiymatni ishlatadi", "Argumentlarni ro'yxat sifatida qabul qiladi", "Argumentlarni lug'at sifatida qabul qiladi"],
        "correct": 1,
        "explanation": "Default argumentlar funksiyani chaqirganda tegishli argument kiritilmasa, oldindan belgilangan standart qiymatni ishlatadi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\ndef salom_ber(ism=\"Mehmon\"):\n    print(f\"Assalomu alaykum, {ism}!\")\n\nsalom_ber(\"Ali\")",
        "options": ["Assalomu alaykum, Mehmon!", "Assalomu alaykum, Ali!", "Xato yuzaga keladi", "Hech narsa chiqmaydi"],
        "correct": 1,
        "explanation": "Funksiya chaqirilganda 'Ali' qiymati kiritilgani uchun standart 'Mehmon' o'rniga 'Ali' ishlatiladi."
    },
    {
        "question": "Default argumentlar funksiya ta'rifida qanday joylashishi kerak?",
        "options": ["Oddiy argumentlardan oldin", "Istalgan joyda", "Oddiy argumentlardan keyin", "Faqat birgina default argument bo'lishi mumkin"],
        "correct": 2,
        "explanation": "Default argumentlar funksiya ta'rifida oddiy argumentlardan keyin kelishi shart. Aks holda, SyntaxError xatosi beriladi."
    },
    {
        "question": "Quyidagi kodda qaysi qiymat narxi parametriga uzatiladi?\n\ndef mahsulot(nomi, narxi=1000):\n    print(f\"Mahsulot: {nomi}, Narxi: {narxi}\")\n\nmahsulot(\"Kitob\")",
        "options": ["'Kitob'", "1000", "Hech qanday", "Xato yuzaga keladi"],
        "correct": 1,
        "explanation": "'Kitob' qiymati 'nomi' parametriga o'tadi va 'narxi' parametri uchun standart qiymat 1000 ishlatiladi, chunki u kiritilmagan."
    },
    {
        "question": "`*args` nima uchun ishlatiladi?",
        "options": ["Bir nechta nomli argumentlar uzatish uchun", "O'zgaruvchan miqdordagi argumentlarni tuple sifatida qabul qilish uchun", "Har doim faqat bitta argumentni qabul qilish uchun", "Funksiyadan qiymat qaytarish uchun"],
        "correct": 1,
        "explanation": "`*args` funksiyaga o'zgaruvchan sonli pozitsion (nomsiz) argumentlarni uzatish va ularni tuple sifatida qabul qilish imkonini beradi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\ndef yigindi(*sonlar):\n    summa = 0\n    for son in sonlar:\n        summa += son\n    print(summa)\n\nyigindi(1, 2, 3)",
        "options": ["(1, 2, 3)", "6", "123", "Xato yuzaga keladi"],
        "correct": 1,
        "explanation": "`*sonlar` (1, 2, 3) tuple'ini qabul qiladi va loop yordamida barcha sonlar yig'indisi hisoblanadi."
    },
    {
        "question": "Quyidagi kodda `*args` o'rniga qanday ma'lumot turi uzatiladi?\n\ndef my_func(*args):\n    pass\n\nmy_func(1, 2, 3, 4)",
        "options": ["Tuple", "List", "Dictionary", "String"],
        "correct": 0,
        "explanation": "`*args` funksiya ichida tuple (kortej) sifatida ishlatiladi. Bu holda, `args` o'zgaruvchisi `(1, 2, 3, 4)` tuple'iga teng bo'ladi."
    },
    {
        "question": "`**kwargs` nima uchun ishlatiladi?",
        "options": ["O'zgaruvchan sonli nomli argumentlarni (kalit-qiymat) qabul qilish uchun", "Faqat bir dona nomli argument uzatish uchun", "Bir nechta pozitsion argument uzatish uchun", "Funksiyaga ro'yxat uzatish uchun"],
        "correct": 0,
        "explanation": "`**kwargs` funksiyaga o'zgaruvchan sonli nomli argumentlarni uzatish imkonini beradi va ularni lug'at (dictionary) sifatida qabul qiladi."
    },
    {
        "question": "Quyidagi kodda `**kwargs` qanday ma'lumot turiga aylanadi?\n\ndef info(**kwargs):\n    pass\n\ninfo(ism=\"Ali\", yosh=18)",
        "options": ["Tuple", "List", "Dictionary", "Set"],
        "correct": 2,
        "explanation": "`**kwargs` funksiya ichida lug'at (dictionary) sifatida ishlatiladi. Bu holda, `kwargs` o'zgaruvchisi `{'ism': 'Ali', 'yosh': 18}` lug'atiga teng bo'ladi."
    },
    {
        "question": "Quyidagi funksiya chaqirilganda natija nima bo'ladi?\n\ndef shaxs(**malumot):\n    if \"ism\" in malumot:\n        print(malumot[\"ism\"])\n    if \"yosh\" in malumot:\n        print(malumot[\"yosh\"])\n\nshaxs(ism=\"Vali\", fan=\"Informatika\")",
        "options": ["Vali\nInformatika", "Vali\n15", "Vali", "Xato yuzaga keladi"],
        "correct": 2,
        "explanation": "Funksiyaga 'ism' va 'fan' kalitlari uzatilgan. Kod faqat 'ism' va 'yosh' mavjudligini tekshiradi. 'ism' topilgani uchun 'Vali' chiqadi, ammo 'yosh' topilmaganligi uchun hech narsa chiqmaydi."
    },
    {
        "question": "Funksiya ta'rifida `def func(a, b=1, *args, **kwargs)` tartibi to'g'rimi?",
        "options": ["Ha, to'g'ri", "Yo'q, `*args` `b` dan oldin kelishi kerak", "Yo'q, `b=1` `a` dan keyin kelishi kerak", "Yo'q, `**kwargs` `*args` dan oldin kelishi kerak"],
        "correct": 0,
        "explanation": "To'g'ri tartib quyidagicha: oddiy argumentlar, default argumentlar, `*args`, va nihoyat `**kwargs`."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\ndef qabul_qil(a, *b):\n    print(a, b)\n\nqabul_qil(1, 2, 3, 4)",
        "options": ["(1, 2, 3, 4)", "1, (2, 3, 4)", "1, 2, 3, 4", "Xato yuzaga keladi"],
        "correct": 1,
        "explanation": "Birinchi qiymat (1) 'a' parametriga uzatiladi, qolgan qiymatlar esa tuple sifatida 'b' (ya'ni `*b`) parametriga o'tadi."
    },
    {
        "question": "Funksiyaga `def func(**kwargs, *args)` ko'rinishida argument uzatish mumkinmi?",
        "options": ["Ha, mumkin", "Yo'q, chunki `*args` `**kwargs` dan keyin kelishi kerak", "Yo'q, chunki `*args` `**kwargs` dan oldin kelishi kerak", "Yo'q, funksiya faqat bittasini qabul qiladi"],
        "correct": 2,
        "explanation": "Funksiya ta'rifida `*args` har doim `**kwargs` dan oldin kelishi kerak. To'g'ri tartib: `(oddiy, standart, *args, **kwargs)`."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\ndef info(ism, **kwargs):\n    print(f\"Ism: {ism}\")\n    print(f\"Boshqa ma'lumotlar: {kwargs}\")\n\ninfo(\"Jamshid\", yosh=25, shahar=\"Toshkent\")",
        "options": ["Ism: Jamshid\nBoshqa ma'lumotlar: {'yosh': 25, 'shahar': 'Toshkent'}", "Xato yuzaga keladi", "Ism: Jamshid\nBoshqa ma'lumotlar: {yosh: 25, shahar: Toshkent}", "Ism: Jamshid"],
        "correct": 0,
        "explanation": "'Jamshid' `ism` parametriga o'tadi. Qolgan nomli argumentlar `kwargs` lug'atiga jamlanadi."
    },
    {
        "question": "Funksiyaga uzatilgan argumentni o'tkazib yuborish uchun qanday usuldan foydalaniladi?",
        "options": ["`break` operatori", "`continue` operatori", "Default argumentlar", "`return` operatori"],
        "correct": 2,
        "explanation": "Default argumentlar yordamida agar funksiyaga argument uzatilmasa, u o'tkazib yuboriladi va standart qiymat ishlatiladi."
    }
]