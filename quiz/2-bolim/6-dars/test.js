const questions = [
    {
        question: "Abstraction (Abstraksiya) nima?",
        options: ["Murakkab narsalarni soddalashtirish", "Ma'lumotlarni saqlash", "Kod yozish", "Object yaratish"],
        correct: 0,
        explanation: "Abstraction - murakkab narsalarni soddalashtirish va faqat kerakli qismlarni ko'rsatish."
    },
    {
        question: "Abstract class nima?",
        options: ["Oddiy class", "Object yaratilmaydigan class", "Funksiya", "Ma'lumot turi"],
        correct: 1,
        explanation: "Abstract class - object yaratilmaydigan, faqat meros olish uchun ishlatiladigan class."
    },
    {
        question: "Python'da abstract class qanday yaratiladi?",
        options: ["class kalit so'zi bilan", "ABC (Abstract Base Class) bilan", "def kalit so'zi bilan", "import kalit so'zi bilan"],
        correct: 1,
        explanation: "Python'da abstract class ABC (Abstract Base Class) bilan yaratiladi."
    },
    {
        question: "Abstract method nima?",
        options: ["Oddiy metod", "Implementatsiya qilinmagan metod", "Funksiya", "Class"],
        correct: 1,
        explanation: "Abstract method - implementatsiya qilinmagan, faqat signature mavjud bo'lgan metod."
    },
    {
        question: "Quyidagi kodda qanday import kerak?",
        code: "from abc import ABC, abstractmethod\n\nclass Hayvon(ABC):\n    @abstractmethod\n    def ovqatlanish(self):\n        pass",
        options: ["import abc", "from abc import ABC, abstractmethod", "import ABC", "from abc import *"],
        correct: 1,
        explanation: "Abstract class yaratish uchun 'from abc import ABC, abstractmethod' import kerak."
    },
    {
        question: "Abstract method qanday belgilanadi?",
        options: ["@staticmethod", "@classmethod", "@abstractmethod", "@property"],
        correct: 2,
        explanation: "Abstract method '@abstractmethod' dekoratori bilan belgilanadi."
    },
    {
        question: "Quyidagi kodda qanday xatolik?",
        code: "from abc import ABC, abstractmethod\n\nclass Hayvon(ABC):\n    @abstractmethod\n    def ovqatlanish(self):\n        pass\n\nhayvon = Hayvon()",
        options: ["Hech qanday xatolik yo'q", "Abstract class'dan object yaratish mumkin emas", "Import xatoligi", "Syntax xatoligi"],
        correct: 1,
        explanation: "Abstract class'dan to'g'ridan-to'g'ri object yaratish mumkin emas."
    },
    {
        question: "Interface nima?",
        options: ["Class", "Abstract class'ning maxsus turi", "Object", "Funksiya"],
        correct: 1,
        explanation: "Interface - abstract class'ning maxsus turi, faqat abstract metodlardan iborat."
    },
    {
        question: "Quyidagi kodda qanday class abstract?",
        code: "from abc import ABC, abstractmethod\n\nclass Transport(ABC):\n    @abstractmethod\n    def harakatlanish(self):\n        pass\n\nclass Mashina(Transport):\n    def harakatlanish(self):\n        print('Yo'lda harakatlanmoqda')",
        options: ["Transport", "Mashina", "Ikkalasi ham", "Hech biri"],
        correct: 0,
        explanation: "'Transport' - abstract class, chunki u ABC'dan meros oladi va abstract metodga ega."
    },
    {
        question: "Abstract class'ning maqsadi nima?",
        options: ["Object yaratish", "Umumiy interfeys ta'minlash", "Kod yozish", "Ma'lumot saqlash"],
        correct: 1,
        explanation: "Abstract class'ning maqsadi umumiy interfeys ta'minlash va child class'larga majburiy metodlarni belgilash."
    },
    {
        question: "Quyidagi kodda qanday xatolik?",
        code: "from abc import ABC, abstractmethod\n\nclass Hayvon(ABC):\n    @abstractmethod\n    def ovqatlanish(self):\n        pass\n\nclass It(Hayvon):\n    pass  # ovqatlanish metodini implement qilmagan",
        options: ["Hech qanday xatolik yo'q", "It class'i abstract metodni implement qilmagan", "Import xatoligi", "Syntax xatoligi"],
        correct: 1,
        explanation: "It class'i abstract metodni implement qilmagan, shuning uchun xatolik bo'ladi."
    },
    {
        question: "Concrete class nima?",
        options: ["Abstract class", "Abstract metodlarni implement qilgan class", "Interface", "Oddiy class"],
        correct: 1,
        explanation: "Concrete class - abstract metodlarni implement qilgan, object yaratilishi mumkin bo'lgan class."
    },
    {
        question: "Abstraction'ning afzalligi nima?",
        options: ["Tez ishlash", "Kodning soddaligi va tushunarliligi", "Xotira tejash", "Dastur kichikroq bo'lishi"],
        correct: 1,
        explanation: "Abstraction'ning asosiy afzalligi kodning soddaligi va tushunarliligi."
    },
    {
        question: "Quyidagi kodda qanday abstraction ko'rinadi?",
        code: "class Mashina:\n    def __init__(self):\n        self.__dvigatel = 'V8'\n        self.__transmissiya = 'Avtomat'\n    \n    def harakatlanish(self):\n        self.__dvigatel_ishga_tushirish()\n        self.__transmissiya_ishga_tushirish()\n        print('Mashina harakatlanmoqda')",
        options: ["Data abstraction", "Procedural abstraction", "Ikkalasi ham", "Hech biri"],
        correct: 2,
        explanation: "Bu kodda data abstraction (private attribute'lar) va procedural abstraction (murakkab jarayonni soddalashtirish) ko'rinadi."
    },
    {
        question: "Abstraction va Encapsulation orasidagi farq nima?",
        options: ["Farq yo'q", "Abstraction - soddalashtirish, Encapsulation - himoya qilish", "Abstraction - himoya qilish, Encapsulation - soddalashtirish", "Ikkalasi ham bir xil"],
        correct: 1,
        explanation: "Abstraction - murakkab narsalarni soddalashtirish, Encapsulation - ma'lumotlarni himoya qilish."
    }
];