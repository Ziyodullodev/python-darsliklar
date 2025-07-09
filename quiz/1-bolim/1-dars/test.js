const questions = [
    {
        question: "Python'da izoh (comment) yozish uchun qaysi belgi ishlatiladi?",
        options: ["//", "#", "<!-- -->", "/* */"],
        correct: 1,
        explanation: "Python'da izoh yozish uchun # belgisi ishlatiladi."
    },
    {
        question: "Quyidagilardan qaysi biri to‘g‘ri o‘zgaruvchi nomi hisoblanadi?",
        options: ["2name", "_name", "class", "-name"],
        correct: 1,
        explanation: "Python'da o‘zgaruvchi nomi raqam bilan boshlanmasligi va maxsus belgilar ishlatilmasligi kerak. Underscore bilan boshlash mumkin."
    },
    {
        question: "'Salom, dunyo!' ifodasi Python'da qaysi turga kiradi?",
        options: ["number", "list", "string", "boolean"],
        correct: 2,
        explanation: "'Salom, dunyo!' matn bo‘lgani uchun string turiga kiradi."
    },
    {
        question: "Quyidagilardan qaysi biri butun son (integer) turiga misol?",
        options: ["3.14", "'5'", "5", "\"7.0\""],
        correct: 2,
        explanation: "Faqat 5 qiymati integer turiga misol, qolganlari float yoki string."
    },
    {
        question: "Python'da ko‘p qatorli izoh yozishning qulay usuli nima?",
        options: ["/* */", "\"\"\" \"\"\"", "//", "#"],
        correct: 1,
        explanation: "Ko‘p qatorli izoh uchun Python'da triple quotes (\"\"\" \"\"\") ishlatiladi."
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
        question: "Python'da o‘zgaruvchi nomlari qanday holda yozilishi mumkin?",
        options: ["FaQat Katta Harflarda", "faqat raqamlarda", "faqat kichik harflarda", "katta-kichik harflar, raqam va _ bilan"],
        correct: 3,
        explanation: "O‘zgaruvchi nomlari harflar, raqamlar va _ belgisi bilan yozilishi mumkin, lekin raqam bilan boshlanmaydi."
    }
];
