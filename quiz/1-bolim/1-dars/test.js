const questions = [
    {
        question: "Python'da izoh (comment) yozish uchun qaysi belgi ishlatiladi?",
        options: ["//", "#", "<!-- -->", "/* */"],
        correct: 1,
        explanation: "Python'da izoh yozish uchun # belgisi ishlatiladi. Bu belgi qatorning boshidan yoki kodning oxiridan keyin ishlatiladi."
    },
    {
        question: "Quyidagilardan qaysi biri to'g'ri o'zgaruvchi nomi hisoblanadi?",
        code: "# O'zgaruvchi nomlari misollari\n2name = 10  # Xato\n_name = 20  # To'g'ri\nclass = 30  # Xato (kalit so'z)\n-name = 40  # Xato",
        options: ["2name", "_name", "class", "-name"],
        correct: 1,
        explanation: "Python'da o'zgaruvchi nomi raqam bilan boshlanmasligi, kalit so'zlardan foydalanmasligi va maxsus belgilar ishlatilmasligi kerak. Underscore (_) bilan boshlash mumkin va bu maxsus ma'noga ega."
    },
    {
        question: "'Salom, dunyo!' ifodasi Python'da qaysi turga kiradi?",
        code: "# Ma'lumot turlari misollari\nmatn = 'Salom, dunyo!'  # string\nson = 42  # int\nkasr = 3.14  # float\nrost = True  # bool",
        options: ["number", "list", "string", "boolean"],
        correct: 2,
        explanation: "'Salom, dunyo!' matn bo'lgani uchun string turiga kiradi. Python'da matnlar qo'shtirnoq ('') yoki qo'shtirnoq (\"\") ichida yoziladi."
    },
    {
        question: "Quyidagilardan qaysi biri butun son (integer) turiga misol?",
        code: "# Ma'lumot turlarini tekshirish\nprint(type(3.14))    # <class 'float'>\nprint(type('5'))     # <class 'str'>\nprint(type(5))       # <class 'int'>\nprint(type('7.0'))   # <class 'str'>",
        options: ["3.14", "'5'", "5", "\"7.0\""],
        correct: 2,
        explanation: "Faqat 5 qiymati integer turiga misol. 3.14 - float (o'nli son), '5' va '7.0' - string (matn) hisoblanadi."
    },
    {
        question: "Python'da ko'p qatorli izoh yozishning qulay usuli nima?",
        code: "# Bir qatorli izoh\n# Bu ham bir qatorli izoh\n\n\"\"\"\nBu ko'p qatorli izoh\nBu ikkinchi qator\nBu uchinchi qator\n\"\"\"",
        options: ["/* */", "\"\"\" \"\"\"", "//", "#"],
        correct: 1,
        explanation: "Ko'p qatorli izoh uchun Python'da triple quotes (\"\"\" \"\"\") ishlatiladi. Bu docstring yaratish uchun ham ishlatiladi."
    },
    {
        question: "Quyidagilardan qaysi biri string turiga misol?",
        options: ["45", "3.14", "'Python'", "True"],
        correct: 2,
        explanation: "String matn bo‘ladi, masalan, 'Python'."
    },
    {
        question: "Python'da butun son qanday tip bilan ifodalanadi?",
        options: ["float", "str", "bool", "int"],
        correct: 3,
        explanation: "Python'da butun son 'int' tipida bo‘ladi."
    },
    {
        question: "Quyidagilardan qaysi biri float turiga misol?",
        options: ["10", "'3.14'", "3.14", "\"10\""],
        correct: 2,
        explanation: "3.14 float turidagi son, qolganlari string yoki integer."
    },
    {
        question: "Python'da qiymati o‘zgarmaydigan ma’lumot turi qaysi?",
        options: ["list", "dict", "tuple", "set"],
        correct: 2,
        explanation: "Tuple o‘zgarmas (immutable) tur hisoblanadi."
    },
    {
        question: "Python'da string biriktirish uchun qaysi operator ishlatiladi?",
        options: ["-", "+", "*", "/"],
        correct: 1,
        explanation: "String qo‘shish uchun + operatori ishlatiladi."
    },
    {
        question: "Python'da o‘zgaruvchiga qiymat biriktirish operatori qaysi?",
        options: ["==", ":=", "=", "!="],
        correct: 2,
        explanation: "Qiymat biriktirish uchun = ishlatiladi."
    },
    {
        question: "Quyidagilardan qaysi biri izoh emas?",
        options: ["# Bu izoh", "\"Izoh\"", "\"\"\"Izoh\"\"\"", "#Izoh"],
        correct: 1,
        explanation: "\"Izoh\" bu string ifoda, izoh emas."
    },
    {
        question: "Python'da data type'ni tekshirish uchun qaysi funksiya ishlatiladi?",
        options: ["typeof()", "type()", "checkType()", "datatype()"],
        correct: 1,
        explanation: "Python'da type() funksiyasi ma’lumot turini aniqlash uchun ishlatiladi."
    },
    {
        question: "Quyidagilardan qaysi biri string uzunligini o‘lchash uchun ishlatiladi?",
        options: ["length()", "strlen()", "count()", "len()"],
        correct: 3,
        explanation: "len() funksiyasi string uzunligini beradi."
    },
    {
        question: "Python'da o'zgaruvchi nomlari qanday holda yozilishi mumkin?",
        options: ["FaQat Katta Harflarda", "faqat raqamlarda", "faqat kichik harflarda", "katta-kichik harflar, raqam va _ bilan"],
        correct: 3,
        explanation: "O'zgaruvchi nomlari harflar, raqamlar va _ belgisi bilan yozilishi mumkin, lekin raqam bilan boshlanmaydi."
    },
    {
        question: "Quyidagi kodda qanday xatolik bor?",
        code: "# Xatolikli o'zgaruvchi nomlari\n2name = 'Ali'  # Xato\nmy-name = 'Vali'  # Xato\nclass = 'Python'  # Xato\nmy_name = 'Hasan'  # To'g'ri",
        options: ["Hech qanday xatolik yo'q", "2name raqam bilan boshlanadi", "my-name tire belgisi bor", "class kalit so'z"],
        correct: 1,
        explanation: "2name xatolik, chunki o'zgaruvchi nomi raqam bilan boshlanmaydi. my-name ham xatolik (tire belgisi), class ham xatolik (kalit so'z)."
    },
    {
        question: "Python'da ma'lumot turini tekshirish uchun qanday funksiya ishlatiladi?",
        code: "# Ma'lumot turini tekshirish\nx = 42\ny = 'Salom'\nz = 3.14\nprint(type(x))  # <class 'int'>\nprint(type(y))  # <class 'str'>\nprint(type(z))  # <class 'float'>",
        options: ["typeof()", "type()", "checkType()", "datatype()"],
        correct: 1,
        explanation: "Python'da type() funksiyasi ma'lumot turini aniqlash uchun ishlatiladi. Bu funksiya ma'lumotning qaysi class'ga tegishli ekanligini qaytaradi."
    }
];
