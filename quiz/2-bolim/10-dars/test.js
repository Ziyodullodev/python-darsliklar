const questions = [
    {
        question: "Python'da fayl ochish uchun qaysi funksiya ishlatiladi?",
        options: ["open()", "file()", "read()", "write()"],
        correct: 0,
        explanation: "Python'da fayl ochish uchun open() funksiyasi ishlatiladi."
    },
    {
        question: "Fayl ochish rejimlari qaysilar?",
        options: ["'r', 'w', 'a'", "'read', 'write', 'append'", "'open', 'close', 'read'", "'file', 'text', 'binary'"],
        correct: 0,
        explanation: "Fayl ochish rejimlari: 'r' (read), 'w' (write), 'a' (append)."
    },
    {
        question: "'r' rejimi nima qiladi?",
        options: ["Faylga yozadi", "Faylni o'qiydi", "Faylga qo'shadi", "Faylni o'chiradi"],
        correct: 1,
        explanation: "'r' rejimi faylni faqat o'qish uchun ochadi."
    },
    {
        question: "'w' rejimi nima qiladi?",
        options: ["Faylni o'qiydi", "Faylga yozadi (mavjud ma'lumotni o'chiradi)", "Faylga qo'shadi", "Faylni o'chiradi"],
        correct: 1,
        explanation: "'w' rejimi faylga yozish uchun ochadi va mavjud ma'lumotni o'chiradi."
    },
    {
        question: "'a' rejimi nima qiladi?",
        options: ["Faylni o'qiydi", "Faylga yozadi (mavjud ma'lumotni o'chiradi)", "Faylga qo'shadi (mavjud ma'lumotni saqlaydi)", "Faylni o'chiradi"],
        correct: 2,
        explanation: "'a' rejimi faylga qo'shish uchun ochadi va mavjud ma'lumotni saqlaydi."
    },
    {
        question: "Quyidagi kodda qanday xatolik?",
        code: "file = open('test.txt', 'r')\ncontent = file.read()\n# Fayl yopilmagan",
        options: ["Hech qanday xatolik yo'q", "Fayl yopilmagan", "Fayl ochilmagan", "Ma'lumot o'qilmagan"],
        correct: 1,
        explanation: "Fayl yopilmagan, bu xotira oqimiga olib kelishi mumkin."
    },
    {
        question: "Faylni xavfsiz ochish uchun qanday usul ishlatiladi?",
        options: ["try-except", "with statement", "if-else", "for loop"],
        correct: 1,
        explanation: "with statement faylni xavfsiz ochish va avtomatik yopish uchun ishlatiladi."
    },
    {
        question: "Quyidagi kodda qanday usul ishlatilgan?",
        code: "with open('test.txt', 'r') as file:\n    content = file.read()",
        options: ["try-except", "with statement", "if-else", "for loop"],
        correct: 1,
        explanation: "with statement ishlatilgan, bu faylni avtomatik yopadi."
    },
    {
        question: "read() metodining vazifasi nima?",
        options: ["Faylga yozish", "Butun faylni o'qish", "Faylni yopish", "Faylni ochish"],
        correct: 1,
        explanation: "read() metodi butun faylni o'qish uchun ishlatiladi."
    },
    {
        question: "readline() metodining vazifasi nima?",
        options: ["Butun faylni o'qish", "Bir qatorni o'qish", "Faylga yozish", "Faylni yopish"],
        correct: 1,
        explanation: "readline() metodi fayldan bir qatorni o'qish uchun ishlatiladi."
    },
    {
        question: "readlines() metodining vazifasi nima?",
        options: ["Butun faylni o'qish", "Bir qatorni o'qish", "Barcha qatorlarni ro'yxat sifatida o'qish", "Faylga yozish"],
        correct: 2,
        explanation: "readlines() metodi barcha qatorlarni ro'yxat sifatida o'qish uchun ishlatiladi."
    },
    {
        question: "write() metodining vazifasi nima?",
        options: ["Faylni o'qish", "Faylga yozish", "Faylni yopish", "Faylni ochish"],
        correct: 1,
        explanation: "write() metodi faylga ma'lumot yozish uchun ishlatiladi."
    },
    {
        question: "Quyidagi kodda qanday natija chiqadi?",
        code: "with open('test.txt', 'w') as file:\n    file.write('Salom')\n    file.write('Dunyo')",
        options: ["'Salom' va 'Dunyo' alohida qatorlarda", "'SalomDunyo' bir qatorda", "Xatolik", "Hech narsa"],
        correct: 1,
        explanation: "write() metodi avtomatik ravishda yangi qator qo'shmaydi, shuning uchun 'SalomDunyo' bir qatorda yoziladi."
    },
    {
        question: "JSON fayl bilan ishlash uchun qaysi modul kerak?",
        options: ["csv", "json", "xml", "yaml"],
        correct: 1,
        explanation: "JSON fayl bilan ishlash uchun json moduli kerak."
    },
    {
        question: "CSV fayl bilan ishlash uchun qaysi modul kerak?",
        options: ["csv", "json", "xml", "yaml"],
        correct: 0,
        explanation: "CSV fayl bilan ishlash uchun csv moduli kerak."
    }
];