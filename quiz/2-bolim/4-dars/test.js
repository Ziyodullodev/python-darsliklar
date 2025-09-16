const questions = [
    {
        question: "Polymorphism (Ko'p shakllilik) nima?",
        options: ["Bir xil nomli metodlarni turli usullarda ishlatish", "Yangi metod yaratish", "Class yaratish", "Object yaratish"],
        correct: 0,
        explanation: "Polymorphism - bir xil nomli metodlarni turli usullarda ishlatish."
    },
    {
        question: "Polymorphism'ning asosiy xususiyati nima?",
        options: ["Bir xil interfeys, turli xatti-harakat", "Turli interfeys, bir xil xatti-harakat", "Bir xil interfeys, bir xil xatti-harakat", "Turli interfeys, turli xatti-harakat"],
        correct: 0,
        explanation: "Polymorphism'ning asosiy xususiyati - bir xil interfeys, turli xatti-harakat."
    },
    {
        question: "Quyidagi kodda polymorphism qayerda ko'rinadi?",
        code: "class Hayvon:\n    def ovqatlanish(self):\n        pass\n\nclass It(Hayvon):\n    def ovqatlanish(self):\n        print('It ovqat yeyapti')\n\nclass Mushuk(Hayvon):\n    def ovqatlanish(self):\n        print('Mushuk ovqat yeyapti')",
        options: ["Hayvon class'ida", "It va Mushuk class'larida ovqatlanish() metodini override qilishda", "Class yaratishda", "Object yaratishda"],
        correct: 1,
        explanation: "Polymorphism It va Mushuk class'larida ovqatlanish() metodini turli usullarda override qilishda ko'rinadi."
    },
    {
        question: "Runtime Polymorphism nima?",
        options: ["Compile vaqtida aniqlanadigan polymorphism", "Ish vaqtida aniqlanadigan polymorphism", "Design vaqtida aniqlanadigan polymorphism", "Test vaqtida aniqlanadigan polymorphism"],
        correct: 1,
        explanation: "Runtime Polymorphism - ish vaqtida aniqlanadigan polymorphism."
    },
    {
        question: "Quyidagi kodda qanday polymorphism ko'rinadi?",
        code: "def ovqatlanish_jarayoni(hayvon):\n    hayvon.ovqatlanish()\n\nit = It()\nmushuk = Mushuk()\novqatlanish_jarayoni(it)\novqatlanish_jarayoni(mushuk)",
        options: ["Compile-time polymorphism", "Runtime polymorphism", "Design-time polymorphism", "Static polymorphism"],
        correct: 1,
        explanation: "Bu runtime polymorphism, chunki qaysi metod chaqirilishi ish vaqtida aniqlanadi."
    },
    {
        question: "Method Overloading Python'da qo'llab-quvvatlanadimi?",
        options: ["Ha, to'liq qo'llab-quvvatlanadi", "Yo'q, qo'llab-quvvatlanmaydi", "Faqat ba'zi holatlarda", "Faqat class method'larda"],
        correct: 1,
        explanation: "Python'da method overloading to'liq qo'llab-quvvatlanmaydi, lekin default parametrlar bilan taqlid qilish mumkin."
    },
    {
        question: "Duck Typing nima?",
        options: ["O'rdak haqida dasturlash", "Object'ning turini tekshirmasdan metod chaqirish", "Class yaratish usuli", "Object yaratish usuli"],
        correct: 1,
        explanation: "Duck Typing - object'ning turini tekshirmasdan, faqat kerakli metod mavjudligini tekshirib metod chaqirish."
    },
    {
        question: "Quyidagi kodda duck typing qayerda ko'rinadi?",
        code: "def qush_uchish(qush):\n    qush.uchish()\n\nclass Qarg'a:\n    def uchish(self):\n        print('Qarg'a uchmoqda')\n\nclass Burgut:\n    def uchish(self):\n        print('Burgut uchmoqda')",
        options: ["qush_uchish() funksiyasida", "Qarg'a class'ida", "Burgut class'ida", "Barcha joyda"],
        correct: 0,
        explanation: "Duck typing qush_uchish() funksiyasida ko'rinadi, chunki u object'ning turini tekshirmaydi."
    },
    {
        question: "Operator Overloading nima?",
        options: ["Operatorlarni o'chirish", "Operatorlarning ishlashini o'zgartirish", "Yangi operator yaratish", "Operatorlarni nusxalash"],
        correct: 1,
        explanation: "Operator Overloading - operatorlarning ishlashini o'zgartirish."
    },
    {
        question: "Quyidagi kodda qaysi operator overload qilingan?",
        code: "class Vector:\n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)",
        options: ["+", "-", "*", "/"],
        correct: 0,
        explanation: "Bu kodda '+' operatori overload qilingan."
    },
    {
        question: "Magic Methods (Dunder Methods) nima?",
        options: ["Maxsus metodlar", "Ikki underscore bilan boshlanadigan va tugaydigan metodlar", "Oddiy metodlar", "Class metodlari"],
        correct: 1,
        explanation: "Magic Methods - ikki underscore (__) bilan boshlanadigan va tugaydigan maxsus metodlar."
    },
    {
        question: "__str__ metodining vazifasi nima?",
        options: ["Object'ni string'ga aylantirish", "Object'ni raqamga aylantirish", "Object'ni ro'yxatga aylantirish", "Object'ni lug'atga aylantirish"],
        correct: 0,
        explanation: "__str__ metodining vazifasi object'ni string'ga aylantirish."
    },
    {
        question: "Quyidagi kodda qanday polymorphism ko'rinadi?",
        code: "class Transport:\n    def harakatlanish(self):\n        pass\n\nclass Mashina(Transport):\n    def harakatlanish(self):\n        print('Yo'lda harakatlanmoqda')\n\nclass Samolyot(Transport):\n    def harakatlanish(self):\n        print('Osmonda uchmoqda')",
        options: ["Method Overriding", "Method Overloading", "Duck Typing", "Operator Overloading"],
        correct: 0,
        explanation: "Bu Method Overriding orqali polymorphism ko'rinadi."
    },
    {
        question: "Polymorphism'ning afzalligi nima?",
        options: ["Tez ishlash", "Kodning moslashuvchanligi", "Xotira tejash", "Dastur kichikroq bo'lishi"],
        correct: 1,
        explanation: "Polymorphism'ning asosiy afzalligi kodning moslashuvchanligi va kengaytirilishi."
    },
    {
        question: "Quyidagi kodda polymorphism qanday ishlaydi?",
        code: "def transport_harakati(transport):\n    transport.harakatlanish()\n\nmashina = Mashina()\nsamolyot = Samolyot()\ntransport_harakati(mashina)\ntransport_harakati(samolyot)",
        options: ["Bir xil funksiya turli object'lar bilan turli xatti-harakat ko'rsatadi", "Bir xil funksiya bir xil xatti-harakat ko'rsatadi", "Turli funksiyalar bir xil xatti-harakat ko'rsatadi", "Hech qanday xatti-harakat ko'rsatmaydi"],
        correct: 0,
        explanation: "Bir xil funksiya (transport_harakati) turli object'lar (mashina, samolyot) bilan turli xatti-harakat ko'rsatadi."
    }
];
