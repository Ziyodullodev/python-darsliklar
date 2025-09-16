const questions = [
    {
        question: "Encapsulation (Kapsulatsiya) nima?",
        options: ["Ma'lumotlarni bitta joyda saqlash", "Ma'lumotlarni tarqatish", "Ma'lumotlarni o'chirish", "Ma'lumotlarni nusxalash"],
        correct: 0,
        explanation: "Encapsulation - ma'lumotlarni bitta joyda saqlash va ularni himoya qilish."
    },
    {
        question: "Python'da private attribute qanday belgilanadi?",
        options: ["Bir underscore (_)", "Ikki underscore (__)", "Uch underscore (___)", "Hech qanday belgi"],
        correct: 1,
        explanation: "Python'da private attribute ikki underscore (__) bilan belgilanadi."
    },
    {
        question: "Protected attribute qanday belgilanadi?",
        options: ["Bir underscore (_)", "Ikki underscore (__)", "Uch underscore (___)", "Hech qanday belgi"],
        correct: 0,
        explanation: "Python'da protected attribute bir underscore (_) bilan belgilanadi."
    },
    {
        question: "Quyidagi kodda qaysi attribute private?",
        code: "class Talaba:\n    def __init__(self, ism):\n        self.ism = ism\n        self._yosh = 18\n        self.__ball = 0",
        options: ["ism", "_yosh", "__ball", "Barchasi"],
        correct: 2,
        explanation: "__ball - private attribute, chunki ikki underscore bilan boshlanadi."
    },
    {
        question: "Quyidagi kodda qaysi attribute protected?",
        code: "class Talaba:\n    def __init__(self, ism):\n        self.ism = ism\n        self._yosh = 18\n        self.__ball = 0",
        options: ["ism", "_yosh", "__ball", "Barchasi"],
        correct: 1,
        explanation: "_yosh - protected attribute, chunki bir underscore bilan boshlanadi."
    },
    {
        question: "Getter metod nima?",
        options: ["Ma'lumotni o'qish uchun", "Ma'lumotni yozish uchun", "Ma'lumotni o'chirish uchun", "Ma'lumotni nusxalash uchun"],
        correct: 0,
        explanation: "Getter metod - private yoki protected ma'lumotni xavfsiz o'qish uchun ishlatiladi."
    },
    {
        question: "Setter metod nima?",
        options: ["Ma'lumotni o'qish uchun", "Ma'lumotni yozish uchun", "Ma'lumotni o'chirish uchun", "Ma'lumotni nusxalash uchun"],
        correct: 1,
        explanation: "Setter metod - private yoki protected ma'lumotni xavfsiz yozish uchun ishlatiladi."
    },
    {
        question: "Quyidagi kodda qaysi metod getter?",
        code: "class Talaba:\n    def __init__(self, ism):\n        self.__ism = ism\n    \n    def get_ism(self):\n        return self.__ism\n    \n    def set_ism(self, yangi_ism):\n        self.__ism = yangi_ism",
        options: ["__init__", "get_ism", "set_ism", "Hech biri"],
        correct: 1,
        explanation: "get_ism() - getter metod, chunki u ma'lumotni o'qish uchun ishlatiladi."
    },
    {
        question: "Quyidagi kodda qaysi metod setter?",
        code: "class Talaba:\n    def __init__(self, ism):\n        self.__ism = ism\n    \n    def get_ism(self):\n        return self.__ism\n    \n    def set_ism(self, yangi_ism):\n        self.__ism = yangi_ism",
        options: ["__init__", "get_ism", "set_ism", "Hech biri"],
        correct: 2,
        explanation: "set_ism() - setter metod, chunki u ma'lumotni yozish uchun ishlatiladi."
    },
    {
        question: "Property dekoratori nima uchun ishlatiladi?",
        options: ["Getter va setter metodlarni birlashtirish uchun", "Metodlarni o'chirish uchun", "Class yaratish uchun", "Object yaratish uchun"],
        correct: 0,
        explanation: "@property dekoratori getter va setter metodlarni birlashtirish uchun ishlatiladi."
    },
    {
        question: "Quyidagi kodda @property nima qiladi?",
        code: "class Talaba:\n    def __init__(self, ism):\n        self.__ism = ism\n    \n    @property\n    def ism(self):\n        return self.__ism\n    \n    @ism.setter\n    def ism(self, yangi_ism):\n        self.__ism = yangi_ism",
        options: ["Getter metod yaratadi", "Setter metod yaratadi", "Getter va setter metodlarni birlashtiradi", "Hech narsa qilmaydi"],
        correct: 2,
        explanation: "@property getter va setter metodlarni birlashtiradi va ularni oddiy attribute kabi ishlatishga imkon beradi."
    },
    {
        question: "Encapsulation'ning asosiy maqsadi nima?",
        options: ["Tez ishlash", "Ma'lumotlarni himoya qilish", "Xotira tejash", "Dastur kichikroq bo'lishi"],
        correct: 1,
        explanation: "Encapsulation'ning asosiy maqsadi ma'lumotlarni himoya qilish va ularga xavfsiz kirishni ta'minlash."
    },
    {
        question: "Python'da private attribute'ga to'g'ridan-to'g'ri kirish mumkinmi?",
        options: ["Ha, har doim", "Yo'q, hech qachon", "Ba'zan", "Faqat class ichida"],
        correct: 2,
        explanation: "Python'da private attribute'ga to'g'ridan-to'g'ri kirish mumkin, lekin bu tavsiya etilmaydi."
    },
    {
        question: "Quyidagi kodda name mangling qanday ishlaydi?",
        code: "class Talaba:\n    def __init__(self, ism):\n        self.__ism = ism\n\n# Tashqaridan kirish\ntalaba = Talaba('Ali')\nprint(talaba._Talaba__ism)",
        options: ["Xatolik beradi", "Name mangling orqali private attribute'ga kirish", "Oddiy attribute kabi ishlaydi", "Hech narsa chiqarmaydi"],
        correct: 1,
        explanation: "Name mangling orqali private attribute'ga _ClassName__attribute formatida kirish mumkin."
    },
    {
        question: "Encapsulation'ning afzalligi nima?",
        options: ["Tez ishlash", "Kodning xavfsizligi va saqlanishi", "Xotira tejash", "Dastur kichikroq bo'lishi"],
        correct: 1,
        explanation: "Encapsulation'ning asosiy afzalligi kodning xavfsizligi va saqlanishi."
    }
];
