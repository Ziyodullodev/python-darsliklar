const questions = [
    {
        question: "Python'da dictionary qanday belgilar bilan yoziladi?",
        options: ["[]", "()", "{}", "<>"],
        correct: 2,
        explanation: "Dictionary jingalak {} qavslar ichida yoziladi."
    },
    {
        question: "Quyidagi kodda 'Ali' ni olish uchun qaysi kod ishlatiladi?\n\n talaba = {\"ism\": \"Ali\", \"yosh\": 15}",
        options: [
            "print(talaba[\"yosh\"])",
            "print(talaba.ism)",
            "print(talaba[\"ism\"])",
            "print(talaba.get[\"ism\"])"
        ],
        correct: 2,
        explanation: "Dictionary'dan qiymat olishda kvadrat qavs ishlatiladi: talaba[\"ism\"]"
    },
    {
        question: "Dictionary uzunligini aniqlash uchun qaysi funksiya ishlatiladi?",
        options: ["length()", "size()", "count()", "len()"],
        correct: 3,
        explanation: "len() funksiyasi dictionary uzunligini beradi."
    },
    {
        question: "Dictionary ustida iteratsiya qilishda talaba.keys() nimani qaytaradi?",
        options: ["Qiymatlar", "Kalitlar", "Kalit-qiymat juftliklari", "Hech narsa"],
        correct: 1,
        explanation: "keys() faqat kalitlarni qaytaradi."
    },
    {
        question: "get() metodi qanday afzallikka ega?",
        options: [
            "Dictionary uzunligini beradi",
            "Har doim True qaytaradi",
            "Kalit bo‘lmasa ham xato chiqarmaydi",
            "Qiymatlarni o‘chiradi"
        ],
        correct: 2,
        explanation: "get() metodi kalit topilmasa, xato o‘rniga default qiymat qaytaradi."
    },
    {
        question: "Quyidagi kod nima chiqazadi?\n\n talaba = {\"ism\": \"Ali\", \"yosh\": 15}\nprint(talaba.get(\"baholar\"))",
        options: ["0", "None", "baholar", "Error"],
        correct: 1,
        explanation: "get() metodi kalit topilmasa, None qaytaradi."
    },
    {
        question: "items() metodi qanday qiymat qaytaradi?",
        options: [
            "Faqat kalitlarni",
            "Faqat qiymatlarni",
            "Kalit-qiymat juftliklarini",
            "Hech narsani"
        ],
        correct: 2,
        explanation: "items() metodi kalit-qiymat juftliklarini tuple ko‘rinishida qaytaradi."
    },
    {
        question: "Dictionary'da qiymatlarni olish uchun qaysi metod ishlatiladi?",
        options: ["values()", "items()", "keys()", "length()"],
        correct: 0,
        explanation: "values() faqat qiymatlarni qaytaradi."
    },
    {
        question: "Quyidagi kodda nechta element bor?\n\n talaba = {\"ism\": \"Ali\", \"yosh\": 15, \"sinf\": \"9-sinf\"}",
        options: ["2", "3", "4", "0"],
        correct: 1,
        explanation: "Dictionaryda 3 ta element bor."
    },
    {
        question: "get() metodi ishlatilganda standart qiymat qanday ko‘rsatiladi?",
        options: [
            "dictionary.get(kalit, standart_qiymat)",
            "dictionary.get[standart_qiymat]",
            "dictionary.standart(kalit)",
            "get(dictionary, kalit, standart_qiymat)"
        ],
        correct: 0,
        explanation: "Sintaksisi: dictionary.get(kalit, standart_qiymat)"
    }
];
