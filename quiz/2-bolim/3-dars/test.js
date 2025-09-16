const questions = [
    {
        question: "Inheritance (Meros) nima?",
        options: ["Class yaratish", "Bir class'dan boshqa class yaratish", "Object yaratish", "Funksiya yaratish"],
        correct: 1,
        explanation: "Inheritance - bu bir class'dan boshqa class yaratish, ya'ni meros olish."
    },
    {
        question: "Parent class nima?",
        options: ["Farzand class", "Meros beruvchi class", "Yangi class", "Asosiy class"],
        correct: 1,
        explanation: "Parent class (Ota class) - meros beruvchi class hisoblanadi."
    },
    {
        question: "Child class nima?",
        options: ["Ota class", "Meros oluvchi class", "Asosiy class", "Yangi class"],
        correct: 1,
        explanation: "Child class (Farzand class) - meros oluvchi class hisoblanadi."
    },
    {
        question: "Quyidagi kodda qaysi class parent class?",
        code: "class Transport:\n    pass\n\nclass Mashina(Transport):\n    pass",
        options: ["Mashina", "Transport", "Ikkalasi ham", "Hech biri"],
        correct: 1,
        explanation: "'Transport' - parent class, 'Mashina' - child class hisoblanadi."
    },
    {
        question: "Quyidagi kodda qaysi class child class?",
        code: "class Hayvon:\n    pass\n\nclass It(Hayvon):\n    pass",
        options: ["Hayvon", "It", "Ikkalasi ham", "Hech biri"],
        correct: 1,
        explanation: "'It' - child class, 'Hayvon' - parent class hisoblanadi."
    },
    {
        question: "Child class parent class'ning metodlarini meros oladimi?",
        options: ["Ha", "Yo'q", "Ba'zan", "Faqat ba'zi metodlarni"],
        correct: 0,
        explanation: "Ha, child class parent class'ning barcha metodlarini meros oladi."
    },
    {
        question: "Method Overriding nima?",
        options: ["Yangi metod yaratish", "Child class'da parent class'ning metodini qayta yozish", "Metodni o'chirish", "Metodni nusxalash"],
        correct: 1,
        explanation: "Method Overriding - child class'da parent class'ning metodini qayta yozish."
    },
    {
        question: "super() funksiyasi nima uchun ishlatiladi?",
        options: ["Child class yaratish uchun", "Parent class'ga murojaat qilish uchun", "Object yaratish uchun", "Metod chaqirish uchun"],
        correct: 1,
        explanation: "super() funksiyasi parent class'ga murojaat qilish uchun ishlatiladi."
    },
    {
        question: "Quyidagi kodda super() nima qiladi?",
        code: "class It(Hayvon):\n    def __init__(self, nom, yosh):\n        super().__init__(nom, yosh)",
        options: ["Yangi metod yaratadi", "Parent class constructor'ini chaqiradi", "Object yaratadi", "Metodni o'zgartiradi"],
        correct: 1,
        explanation: "super().__init__() parent class constructor'ini chaqiradi."
    },
    {
        question: "Multiple Inheritance nima?",
        options: ["Bir class'dan meros olish", "Bir nechta class'lardan meros olish", "Object yaratish", "Metod yaratish"],
        correct: 1,
        explanation: "Multiple Inheritance - bir class bir nechta parent class'lardan meros olishi."
    },
    {
        question: "Quyidagi kodda qanday inheritance?",
        code: "class Qush(Hayvon, Uchuvchi):\n    pass",
        options: ["Single Inheritance", "Multiple Inheritance", "No Inheritance", "Simple Inheritance"],
        correct: 1,
        explanation: "Bu Multiple Inheritance, chunki 'Qush' class'i ikkita parent class'dan meros oladi."
    },
    {
        question: "Inheritance'ning asosiy afzalligi nima?",
        options: ["Tez ishlash", "Kod qayta ishlatish", "Xotira tejash", "Dastur kichikroq bo'lishi"],
        correct: 1,
        explanation: "Inheritance'ning asosiy afzalligi kod qayta ishlatishdir."
    },
    {
        question: "Child class o'ziga xos metodlar qo'shishi mumkinmi?",
        options: ["Ha", "Yo'q", "Ba'zan", "Faqat ba'zi holatlarda"],
        correct: 0,
        explanation: "Ha, child class o'ziga xos metodlar qo'shishi mumkin."
    },
    {
        question: "MRO (Method Resolution Order) nima?",
        options: ["Metod yaratish tartibi", "Qaysi metod ishlatilishini aniqlash tartibi", "Class yaratish tartibi", "Object yaratish tartibi"],
        correct: 1,
        explanation: "MRO - qaysi metod ishlatilishini aniqlash tartibi."
    },
    {
        question: "Quyidagi kodda 'It' class'i qanday metodlarni ishlatishi mumkin?",
        code: "class Hayvon:\n    def ovqatlanish(self):\n        pass\n\nclass It(Hayvon):\n    def havlayish(self):\n        pass",
        options: ["Faqat havlayish()", "Faqat ovqatlanish()", "Ikkalasini ham", "Hech qaysini"],
        correct: 2,
        explanation: "'It' class'i ikkala metodni ham ishlatishi mumkin: meros olgan 'ovqatlanish()' va o'zining 'havlayish()' metodini."
    }
];
