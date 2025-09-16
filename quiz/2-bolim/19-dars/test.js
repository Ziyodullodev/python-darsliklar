const questions = [
    {
        question: "OOP (Object-Oriented Programming) nima?",
        options: ["Dasturlash tili", "Dasturlash usuli", "Dastur tuzilishi", "Ma'lumotlar bazasi"],
        correct: 1,
        explanation: "OOP - bu dasturlash usuli bo'lib, real dunyodagi narsalarni kompyuter dasturida modellashtirishga asoslangan."
    },
    {
        question: "Python'da OOP ning nechta asosiy prinsipi bor?",
        options: ["2 ta", "3 ta", "4 ta", "5 ta"],
        correct: 2,
        explanation: "Python'da OOP ning 4 ta asosiy prinsipi bor: Encapsulation, Inheritance, Polymorphism, Abstraction."
    },
    {
        question: "Class nima?",
        options: ["Dastur", "Narsaning shablon yoki rejasi", "Ma'lumot turi", "Funksiya"],
        correct: 1,
        explanation: "Class - bu narsaning shablon yoki rejasi. Xuddi uy qurish uchun loyiha kabi."
    },
    {
        question: "Object nima?",
        options: ["Class", "Class asosida yaratilgan haqiqiy narsa", "Funksiya", "O'zgaruvchi"],
        correct: 1,
        explanation: "Object - bu class asosida yaratilgan haqiqiy narsa. Xuddi loyiha asosida qurilgan uy kabi."
    },
    {
        question: "Python'da class yaratish uchun qaysi kalit so'z ishlatiladi?",
        options: ["function", "def", "class", "object"],
        correct: 2,
        explanation: "Python'da class yaratish uchun 'class' kalit so'zi ishlatiladi."
    },
    {
        question: "Quyidagi kodda 'Talaba' nima?",
        code: "class Talaba:\n    def __init__(self, ism):\n        self.ism = ism",
        options: ["Object", "Class", "Funksiya", "O'zgaruvchi"],
        correct: 1,
        explanation: "'Talaba' - bu class (sinf) hisoblanadi."
    },
    {
        question: "Attribute nima?",
        options: ["Object'ning harakatlari", "Object'ning xususiyatlari (ma'lumotlari)", "Class nomi", "Funksiya"],
        correct: 1,
        explanation: "Attribute - bu object'ning xususiyatlari (ma'lumotlari). Masalan, ism, yosh, rang kabi."
    },
    {
        question: "Method nima?",
        options: ["Object'ning xususiyatlari", "Object'ning harakatlari (funktsiyalari)", "Class nomi", "Ma'lumot turi"],
        correct: 1,
        explanation: "Method - bu object'ning harakatlari (funktsiyalari). Masalan, oqish(), yurish() kabi."
    },
    {
        question: "Python'da constructor qaysi metod?",
        options: ["__main__", "__init__", "__str__", "__class__"],
        correct: 1,
        explanation: "Python'da constructor '__init__' metodidir. Bu metod object yaratilganda avtomatik ishlaydi."
    },
    {
        question: "Quyidagi kodda 'self' nima?",
        code: "def __init__(self, ism):\n    self.ism = ism",
        options: ["Class nomi", "Object'ning o'zini bildiradi", "Funksiya nomi", "Ma'lumot turi"],
        correct: 1,
        explanation: "'self' - bu object'ning o'zini bildiradi. Har bir instance method'ning birinchi parametri."
    },
    {
        question: "Instance attribute nima?",
        options: ["Barcha objectlar uchun umumiy", "Har bir object uchun alohida", "Class nomi", "Funksiya"],
        correct: 1,
        explanation: "Instance attribute - har bir object uchun alohida bo'ladi. Masalan, har bir talabaning o'z ismi."
    },
    {
        question: "Class attribute nima?",
        options: ["Har bir object uchun alohida", "Barcha objectlar uchun umumiy", "Funksiya", "O'zgaruvchi"],
        correct: 1,
        explanation: "Class attribute - barcha objectlar uchun umumiy bo'ladi. Masalan, barcha talabalar bir universitetda o'qishadi."
    },
    {
        question: "Quyidagi kodda qanday object yaratiladi?",
        code: "talaba1 = Talaba('Ali', 18)",
        options: ["Class yaratiladi", "Object yaratiladi", "Funksiya chaqiriladi", "Ma'lumot saqlanadi"],
        correct: 1,
        explanation: "Bu kod orqali 'talaba1' nomli object yaratiladi."
    },
    {
        question: "OOP ning asosiy maqsadi nima?",
        options: ["Kodni qisqartirish", "Real dunyodagi narsalarni modellashtirish", "Tez ishlash", "Xotira tejash"],
        correct: 1,
        explanation: "OOP ning asosiy maqsadi real dunyodagi narsalarni kompyuter dasturida modellashtirishdir."
    },
    {
        question: "Quyidagi kodda 'self.ism' nima?",
        code: "def __init__(self, ism):\n    self.ism = ism",
        options: ["Class attribute", "Instance attribute", "Funksiya", "Ma'lumot turi"],
        correct: 1,
        explanation: "'self.ism' - bu instance attribute hisoblanadi, chunki har bir object uchun alohida qiymatga ega bo'ladi."
    }
];
