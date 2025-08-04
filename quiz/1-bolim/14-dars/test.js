const questions = [
    {
        "question": "Funksiya qanday kalit so'z bilan aniqlanadi?",
        "options": ["function", "def", "func", "define"],
        "correct": 1,
        "explanation": "Pythonda funksiyani aniqlash uchun `def` kalit so'zidan foydalaniladi. `function`, `func` va `define` boshqa dasturlash tillarida ishlatilishi mumkin, lekin Pythonda emas."
    },
    {
        "question": "Quyidagi funksiya nima qaytaradi?\n\ndef salom_ber():\n    print(\"Assalomu alaykum!\")\n\nsalom_ber()",
        "options": ["Assalomu alaykum!", "None", "Bo'sh qiymat", "Xato (Error)"],
        "correct": 0,
        "explanation": "Bu funksiya hech qanday qiymat qaytarmaydi, balki faqat ekranga yozuv chiqaradi. `print()` funksiyasi `return` bilan bir xil ishlamaydi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\ndef daraja(x, y=2):\n    return x ** y\n\nprint(daraja(3))",
        "options": ["9", "6", "8", "Xato (Error)"],
        "correct": 0,
        "explanation": "`daraja` funksiyasining `y` argumentiga standart (default) qiymat `2` berilgan. Funksiya faqat bitta argument bilan chaqirilganda, u `3**2` ni hisoblaydi va `9` ni qaytaradi."
    },
    {
        "question": "Bir nechta pozitsion argumentlarni qabul qilish uchun qaysi sintaksisdan foydalaniladi?",
        "options": ["**kwargs", "*args", "&args", "arguments"],
        "correct": 1,
        "explanation": "`*args` cheklanmagan sondagi pozitsion (nomlanmagan) argumentlarni kortej (tuple) sifatida qabul qilish uchun ishlatiladi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\ndef toliq_ism(ism, familiya):\n    return f\"{ism} {familiya}\"\n\nprint(toliq_ism(familiya=\"Aliyev\", ism=\"Vali\"))",
        "options": ["Vali Aliyev", "Aliyev Vali", "Xato (Error)", "None"],
        "correct": 0,
        "explanation": "Kalit so'zli (keyword) argumentlardan foydalanganda, argumentlarning tartibi ahamiyatsiz. Natija `ism=\"Vali\"` va `familiya=\"Aliyev\"` bo'ladi."
    },
    {
        "question": "`return` kalit so'zining asosiy vazifasi nima?",
        "options": ["Funksiyani to'xtatish", "Funksiyani ichidagi ma'lumotni ekranga chiqarish", "Funksiyadan qiymat qaytarish va uning bajarilishini to'xtatish", "Funksiyaning ichidagi kodni takrorlash"],
        "correct": 2,
        "explanation": "`return` funksiyadan qiymatni qaytaradi va shu zahoti funksiyaning ishlashini to'xtatadi. Undan keyingi kodlar bajarilmaydi."
    },
    {
        "question": "Agar funksiya `return` kalit so'zidan foydalanmasa, qanday qiymat qaytaradi?",
        "options": ["0", "Bo'sh matn (`''`)", "None", "Xato (Error)"],
        "correct": 2,
        "explanation": "Agar funksiya aniq biror qiymat qaytarmasa, u avtomatik ravishda `None` obyektini qaytaradi."
    },
    {
        "question": "Quyidagi funksiyaning natijasi nima?\n\ndef test_funksiya():\n    return 10\n    print(\"Bu kod ishlamaydi\")\n\nprint(test_funksiya())",
        "options": ["10", "10\nBu kod ishlamaydi", "Bu kod ishlamaydi", "Xato (Error)"],
        "correct": 0,
        "explanation": "`return` operatori funksiyani darhol yakunlaydi. Shuning uchun, `print` qatori ishlamaydi va funksiya faqat `10` ni qaytaradi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\ndef hisobla(a, b):\n    print(a + b)\n\nnatija = hisobla(2, 3)\nprint(natija)",
        "options": ["5\nNone", "5", "None\n5", "Xato (Error)"],
        "correct": 0,
        "explanation": "Funksiya ichidagi `print` operatori `5` ni ekranga chiqaradi. Funksiyaning o'zi hech narsa qaytarmagani uchun `natija` o'zgaruvchisiga `None` saqlanadi va keyingi `print` `None` ni chop etadi."
    },
    {
        "question": "Funksiyaga cheklanmagan sonli kalit so'zli argumentlarni qabul qilish uchun qaysi sintaksisdan foydalaniladi?",
        "options": ["**kwargs", "*args", "keywords", "&kwargs"],
        "correct": 0,
        "explanation": "`**kwargs` cheklanmagan sonli kalit so'zli argumentlarni lug'at (dictionary) sifatida qabul qilish uchun ishlatiladi."
    },
    {
        "question": "Quyidagi funksiya chaqirilganda nima sodir bo'ladi?\n\nqiymat = 10\n\ndef funksiya():\n    global qiymat\n    qiymat = 20\n\nfunksiya()\nprint(qiymat)",
        "options": ["10", "20", "Xato (Error)", "None"],
        "correct": 1,
        "explanation": "`global` kalit so'zi funksiya ichidan global o'zgaruvchiga murojaat qilish va uni o'zgartirish imkonini beradi. Natijada, `qiymat` o'zgaruvchisi `20` ga o'zgaradi."
    },
    {
        "question": "Bir funksiyadan bir nechta qiymatni qaytarish mumkinmi?",
        "options": ["Ha, bitta qatorda, vergul bilan ajratib", "Yo'q, faqat bitta qiymat qaytarish mumkin", "Yo'q, faqat bir xil turdagi qiymatlarni qaytarish mumkin", "Ha, lekin faqat `list` yoki `tuple` ichida"],
        "correct": 0,
        "explanation": "Ha, funksiya bir nechta qiymatni qaytarishi mumkin. Python ularni avtomatik ravishda kortej (tuple) sifatida qaytaradi."
    },
    {
        "question": "Funksiya ichida aniqlangan o'zgaruvchilar qanday ko'lamga (scope) ega bo'ladi?",
        "options": ["Global", "Mahalliy (Local)", "Modul bo'ylab", "Doimiy"],
        "correct": 1,
        "explanation": "Funksiya ichida aniqlangan o'zgaruvchilar faqat shu funksiya ichida mavjud bo'ladi va ularga funksiyadan tashqarida murojaat qilib bo'lmaydi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\ndef hisobla(a, b):\n    return a + b, a * b\n\nyigindi, kopaytma = hisobla(3, 4)\nprint(yigindi)",
        "options": ["12", "7", "3", "4"],
        "correct": 1,
        "explanation": "Funksiya ikki qiymatni kortej sifatida qaytaradi. Ular bir vaqtning o'zida ikkita o'zgaruvchiga tayinlanadi. `yigindi`ga `7`, `kopaytma`ga `12` tayinlanadi. `print(yigindi)` natijasi `7` bo'ladi."
    },
    {
        "question": "Rekursiv funksiya nima?",
        "options": ["Boshqa funksiyani chaqiradigan funksiya", "O'zini o'zi chaqiradigan funksiya", "Cheksiz takrorlanadigan funksiya", "Faqat bir marta ishlaydigan funksiya"],
        "correct": 1,
        "explanation": "Rekursiv funksiya — bu o'zini o'zi chaqiradigan funksiya. Bunday funksiyalarda `base case` (to'xtash sharti) bo'lishi shart, aks holda cheksiz tsikl yuzaga keladi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\na = lambda x: x * 2\nprint(a(5))",
        "options": ["10", "a(5)", "x * 2", "Xato (Error)"],
        "correct": 0,
        "explanation": "`lambda` - bu nomsiz funksiya yaratishning tezkor usuli. Bu yerda `x` argumentini olib, uni `2` ga ko'paytiradigan funksiya yaratilgan. `a(5)` chaqirilganda, `5 * 2` hisoblanadi va `10` chop etiladi."
    },
    {
        "question": "Python funksiyasining dokumentatsiyasini yozish uchun nima ishlatiladi?",
        "options": ["`#` bilan izohlar", "Docstrings (uchlik tirnoqlar ichida)", "Kommentariyalar", "Funksiya nomi"],
        "correct": 1,
        "explanation": "Funksiya haqida ma'lumot (maqsadi, argumentlari, qaytaradigan qiymati) yozish uchun funksiya tanasining boshida uchlik tirnoqlar ichida yoziladigan `docstring`lardan foydalaniladi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\ndef hisobla(a, b, c):\n    return a + b + c\n\nlugat = {'a': 10, 'b': 20, 'c': 30}\nprint(hisobla(**lugat))",
        "options": ["60", "10", "20", "Xato (Error)"],
        "correct": 0,
        "explanation": "`**` belgisi lug'atni kalit so'zli argumentlarga ajratish uchun ishlatiladi. `hisobla(**lugat)` `hisobla(a=10, b=20, c=30)` ga teng bo'ladi, natija esa `60`."
    },
    {
        "question": "Funksiyada berilgan argument qiymatini o'zgartirish mumkinmi?",
        "options": ["Ha, doimiy o'zgaruvchilarni o'zgartirish mumkin", "Ha, lekin faqat `list` va `dict` kabi o'zgaruvchan ma'lumot turlari uchun", "Yo'q, hech qanday holatda o'zgartirib bo'lmaydi", "Faqat `global` kalit so'zi bilan"],
        "correct": 1,
        "explanation": "`list`, `dict`, `set` kabi o'zgaruvchan (mutable) ma'lumot turlari funksiyada o'zgartirilganda, asl o'zgaruvchi ham o'zgaradi. `int`, `str`, `tuple` kabi o'zgarmas (immutable) turlar esa o'zgarmaydi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\ndef hisobla(son):\n    son += 1\n    return son\n\nqiymat = 5\nprint(hisobla(qiymat))\nprint(qiymat)",
        "options": ["6\n5", "6\n6", "5\n6", "5\n5"],
        "correct": 0,
        "explanation": "`qiymat` o'zgaruvchisi o'zgarmas (immutable) turdagi ma'lumotdir. Funksiya ichida uning nusxasi bilan ishlanadi, shuning uchun `qiymat`ning asl qiymati o'zgarmaydi. `hisobla(qiymat)` funksiyasi `6` ni qaytaradi, ikkinchi `print` esa asl `qiymat` `5` ni chop etadi."
    }
]