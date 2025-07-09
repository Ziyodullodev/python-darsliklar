const questions = [
    {
        question: "Python'da set yaratish uchun qaysi belgi ishlatiladi?",
        options: ["[]", "{}", "()", "set()"],
        correct: 1,
        explanation: "Set'lar {} jingalak qavslar bilan yaratiladi"
    },
    {
        question: "Quyidagi kodning natijasi qanday bo'ladi?",
        code: "sonlar = {1, 2, 2, 3, 4, 4}\nprint(len(sonlar))",
        options: ["6", "4", "5", "Xato"],
        correct: 1,
        explanation: "Set'da takroriy elementlar avtomatik olib tashlanadi"
    },
    {
        question: "Bo'sh set qanday yaratiladi?",
        options: ["{}", "set()", "[]", "()"],
        correct: 1,
        explanation: "{} dictionary yaratadi, bo'sh set uchun set() ishlatiladi"
    },
    {
        question: "Set'ga element qo'shish uchun qaysi metod ishlatiladi?",
        options: ["append()", "add()", "insert()", "push()"],
        correct: 1,
        explanation: "Set'ga element qo'shish uchun add() metodi ishlatiladi"
    },
    {
        question: "Union operatsiyasi uchun qaysi operator ishlatiladi?",
        options: ["&", "|", "-", "^"],
        correct: 1,
        explanation: "Union (birlashtirish) uchun | operatori ishlatiladi"
    },
    {
        question: "Quyidagi kodning natijasi qanday?",
        code: "set1 = {1, 2, 3}\nset2 = {3, 4, 5}\nprint(set1 & set2)",
        options: ["{1, 2, 3, 4, 5}", "{3}", "{1, 2}", "{4, 5}"],
        correct: 1,
        explanation: "& operatori intersection (kesishish) - umumiy elementlarni qaytaradi"
    },
    {
        question: "Difference operatsiyasi uchun qaysi operator ishlatiladi?",
        options: ["&", "|", "-", "^"],
        correct: 2,
        explanation: "Difference (farq) uchun - operatori ishlatiladi"
    },
    {
        question: "Set'dan elementni o'chirish uchun qaysi metodlar ishlatiladi?",
        options: ["remove() va discard()", "delete() va clear()", "pop() va push()", "del() va remove()"],
        correct: 0,
        explanation: "remove() va discard() metodlari element o'chirish uchun ishlatiladi"
    },
    {
        question: "Quyidagi kodning natijasi qanday?",
        code: "mevalar = ['olma', 'banan', 'olma', 'anor']\nprint(len(set(mevalar)))",
        options: ["4", "3", "2", "5"],
        correct: 1,
        explanation: "Set'ga aylantirilganda takroriy 'olma' olib tashlanadi"
    },
    {
        question: "Set'larning asosiy xususiyati nima?",
        options: ["Tartibli elementlar", "Takrorlanadigan elementlar", "Takrorlanmaydigan elementlar", "Indeksli elementlar"],
        correct: 2,
        explanation: "Set'larning asosiy xususiyati - takrorlanmaydigan elementlar"
    }
];
