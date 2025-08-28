const questions = [
    {
        question: "Python’da set yaratish uchun qaysi belgidan foydalaniladi?",
        options: ["[]", "{}", "()", "set()"],
        correct: 1,
        explanation: "Set’lar jingalak qavslar {} yordamida yaratiladi. Bo‘sh set yaratishda esa set() ishlatiladi."
    },
    {
        question: "Bo‘sh set yaratishda {} ishlatilsa, qanday obyekt hosil bo‘ladi?",
        options: ["set", "list", "dict", "tuple"],
        correct: 2,
        explanation: "{} ishlatilganda Python dictionary (dict) obyektini yaratadi. Bo‘sh set uchun set() ishlatiladi."
    },
    {
        question: "Set ichida elementlar qanday bo‘ladi?",
        options: [
            "Tartibli va takrorlanishi mumkin",
            "Tartibsiz va takrorlanmaydi",
            "Indeks orqali murojaat qilish mumkin",
            "Faqat sonlardan tashkil topadi"
        ],
        correct: 1,
        explanation: "Set’lar tartibsiz va takrorlanmaydigan elementlardan iborat."
    },
    {
        question: "Qaysi metod set’ga yangi element qo‘shadi?",
        options: ["append()", "add()", "insert()", "extend()"],
        correct: 1,
        explanation: "Set’ga element qo‘shish uchun add() metodi ishlatiladi."
    },
    {
        question: "Qaysi metod elementni o‘chiradi va topilmasa xato chiqarmaydi?",
        options: ["remove()", "discard()", "pop()", "clear()"],
        correct: 1,
        explanation: "discard() metodida element bo‘lmasa ham xato chiqmaydi, remove() esa xato beradi."
    },
    {
        question: "Union operatsiyasi qanday natija qaytaradi?",
        options: [
            "Faqat umumiy elementlarni qaytaradi",
            "Faqat birinchi set’dagi elementlarni qaytaradi",
            "Ikkala set’dagi barcha elementlarni takrorlanmas holda qaytaradi",
            "Faqat ikkinchi set’dagi elementlarni qaytaradi"
        ],
        correct: 2,
        explanation: "Union ikkala set’dagi elementlarni birlashtiradi va takrorlarni faqat bir marta qaytaradi."
    },
    {
        question: "Intersection operatsiyasi natijasida nima olinadi?",
        options: [
            "Faqat birinchi set elementlari",
            "Faqat ikkinchi set elementlari",
            "Umumiy elementlar",
            "Barcha elementlar"
        ],
        correct: 2,
        explanation: "Intersection ikkala set’dagi umumiy elementlarni qaytaradi."
    },
    {
        question: "Difference operatsiyasi (set1 - set2) nimani qaytaradi?",
        options: [
            "set1 va set2 umumiy elementlari",
            "Faqat set2 elementlarini",
            "set1’da bor, set2’da yo‘q elementlarni",
            "Har ikkala set’dagi barcha elementlarni"
        ],
        correct: 2,
        explanation: "Difference operatsiyasi birinchi set’da bor, ikkinchisida yo‘q elementlarni qaytaradi."
    },
    {
        question: "Qaysi metod ikkita set’ni birlashtirish uchun ishlatiladi?",
        options: ["union()", "update()", "extend()", "combine()"],
        correct: 0,
        explanation: "Set’larni birlashtirish uchun union() yoki | operatori ishlatiladi."
    },
    {
        question: "Set’ni uzunligini topish uchun qaysi funksiya ishlatiladi?",
        options: ["size()", "length()", "len()", "count()"],
        correct: 2,
        explanation: "len() funksiyasi yordamida set’ning uzunligini bilib olish mumkin."
    }
];
