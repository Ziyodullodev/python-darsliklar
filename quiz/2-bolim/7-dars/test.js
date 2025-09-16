const questions = [
    {
        question: "Composition nima?",
        options: ["Inheritance'ning turi", "Object'lar orasidagi 'has-a' munosabati", "Class yaratish usuli", "Method yaratish usuli"],
        correct: 1,
        explanation: "Composition - object'lar orasidagi 'has-a' munosabati, ya'ni bir object boshqa object'ni o'z ichiga oladi."
    },
    {
        question: "Aggregation nima?",
        options: ["Inheritance'ning turi", "Object'lar orasidagi zaif bog'lanish", "Class yaratish usuli", "Method yaratish usuli"],
        correct: 1,
        explanation: "Aggregation - object'lar orasidagi zaif bog'lanish, object'lar mustaqil mavjud bo'lishi mumkin."
    },
    {
        question: "Quyidagi kodda qanday munosabat ko'rinadi?",
        code: "class Dvigatel:\n    def ishga_tushirish(self):\n        pass\n\nclass Mashina:\n    def __init__(self):\n        self.dvigatel = Dvigatel()",
        options: ["Inheritance", "Composition", "Aggregation", "Association"],
        correct: 1,
        explanation: "Bu Composition, chunki Mashina Dvigatel'ni o'z ichiga oladi (has-a munosabat)."
    },
    {
        question: "Mixins nima?",
        options: ["Class'ning turi", "Ko'plab class'larda qayta ishlatiladigan funksionallik", "Object", "Method"],
        correct: 1,
        explanation: "Mixins - ko'plab class'larda qayta ishlatiladigan funksionallikni taqdim etuvchi class'lar."
    },
    {
        question: "Quyidagi kodda qanday pattern ko'rinadi?",
        code: "class LoggerMixin:\n    def log(self, message):\n        print(f'Log: {message}')\n\nclass Talaba(LoggerMixin):\n    def oqish(self):\n        self.log('Talaba o\'qiyapti')",
        options: ["Inheritance", "Composition", "Mixin", "Aggregation"],
        correct: 2,
        explanation: "Bu Mixin pattern, chunki LoggerMixin funksionallikni taqdim etadi."
    },
    {
        question: "Factory Pattern nima?",
        options: ["Object yaratish usuli", "Class yaratish usuli", "Method yaratish usuli", "Funksiya yaratish usuli"],
        correct: 0,
        explanation: "Factory Pattern - object yaratish jarayonini boshqarish uchun ishlatiladigan pattern."
    },
    {
        question: "Singleton Pattern nima?",
        options: ["Ko'p object yaratish", "Faqat bitta object yaratish", "Object'ni o'chirish", "Object'ni nusxalash"],
        correct: 1,
        explanation: "Singleton Pattern - class'dan faqat bitta object yaratilishini ta'minlaydi."
    },
    {
        question: "Quyidagi kodda qanday pattern ko'rinadi?",
        code: "class Singleton:\n    _instance = None\n    \n    def __new__(cls):\n        if cls._instance is None:\n            cls._instance = super().__new__(cls)\n        return cls._instance",
        options: ["Factory", "Singleton", "Observer", "Strategy"],
        correct: 1,
        explanation: "Bu Singleton pattern, chunki faqat bitta instance yaratilishini ta'minlaydi."
    },
    {
        question: "Observer Pattern nima?",
        options: ["Object'ni kuzatish", "Object'lar orasidagi bog'lanish", "Bir object o'zgarishlarini boshqa object'larga xabar berish", "Object'ni o'chirish"],
        correct: 2,
        explanation: "Observer Pattern - bir object o'zgarishlarini boshqa object'larga xabar berish mexanizmi."
    },
    {
        question: "Decorator Pattern nima?",
        options: ["Funksiyani bezash", "Object'ga yangi funksionallik qo'shish", "Class'ni bezash", "Method'ni bezash"],
        correct: 1,
        explanation: "Decorator Pattern - object'ga yangi funksionallik qo'shish uchun ishlatiladi."
    },
    {
        question: "Strategy Pattern nima?",
        options: ["Algoritm tanlash", "Object yaratish", "Class yaratish", "Method yaratish"],
        correct: 0,
        explanation: "Strategy Pattern - runtime'da algoritm yoki strategiyani tanlash uchun ishlatiladi."
    },
    {
        question: "Quyidagi kodda qanday pattern ko'rinadi?",
        code: "class PaymentStrategy:\n    def pay(self, amount):\n        pass\n\nclass CreditCardPayment(PaymentStrategy):\n    def pay(self, amount):\n        print(f'Credit card: {amount}')\n\nclass PayPalPayment(PaymentStrategy):\n    def pay(self, amount):\n        print(f'PayPal: {amount}')",
        options: ["Factory", "Singleton", "Strategy", "Observer"],
        correct: 2,
        explanation: "Bu Strategy pattern, chunki turli to'lov usullarini tanlash imkonini beradi."
    },
    {
        question: "Dependency Injection nima?",
        options: ["Object'ni o'chirish", "Object'ga bog'liqlikni tashqi tomondan berish", "Object'ni yaratish", "Object'ni nusxalash"],
        correct: 1,
        explanation: "Dependency Injection - object'ga bog'liqlikni tashqi tomondan berish, object o'z bog'liqliklarini yaratmaydi."
    },
    {
        question: "Quyidagi kodda qanday pattern ko'rinadi?",
        code: "class Database:\n    def save(self, data):\n        pass\n\nclass UserService:\n    def __init__(self, database):\n        self.database = database\n    \n    def create_user(self, user_data):\n        self.database.save(user_data)",
        options: ["Factory", "Singleton", "Dependency Injection", "Observer"],
        correct: 2,
        explanation: "Bu Dependency Injection, chunki UserService'ga database tashqi tomondan beriladi."
    },
    {
        question: "OOP Design Principles qaysilar?",
        options: ["SOLID principles", "DRY principle", "KISS principle", "Barchasi"],
        correct: 3,
        explanation: "OOP Design Principles - SOLID, DRY, KISS va boshqa ko'plab prinsiplarni o'z ichiga oladi."
    }
];