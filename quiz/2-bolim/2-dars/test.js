const questions = [
    {
        question: "Instance method nima?",
        options: ["Class bilan ishlaydigan metod", "Object bilan ishlaydigan metod", "Mustaqil ishlaydigan metod", "Funksiya"],
        correct: 1,
        explanation: "Instance method - bu object bilan ishlaydigan metod. Birinchi parametri har doim 'self' bo'ladi."
    },
    {
        question: "Instance method'ning birinchi parametri qanday bo'lishi kerak?",
        options: ["cls", "self", "object", "instance"],
        correct: 1,
        explanation: "Instance method'ning birinchi parametri har doim 'self' bo'lishi kerak."
    },
    {
        question: "Class method qanday belgilanadi?",
        options: ["@staticmethod", "@classmethod", "@instancemethod", "@method"],
        correct: 1,
        explanation: "Class method '@classmethod' dekoratori bilan belgilanadi."
    },
    {
        question: "Class method'ning birinchi parametri qanday bo'ladi?",
        options: ["self", "cls", "object", "class"],
        correct: 1,
        explanation: "Class method'ning birinchi parametri 'cls' (class'ni bildiradi) bo'ladi."
    },
    {
        question: "Static method qanday belgilanadi?",
        options: ["@classmethod", "@staticmethod", "@instancemethod", "@method"],
        correct: 1,
        explanation: "Static method '@staticmethod' dekoratori bilan belgilanadi."
    },
    {
        question: "Static method qanday parametr oladi?",
        options: ["self", "cls", "Hech qanday maxsus parametr", "object"],
        correct: 2,
        explanation: "Static method 'self' yoki 'cls' parametri olmaydi, mustaqil ishlaydi."
    },
    {
        question: "Quyidagi kodda qanday metod?",
        code: "@classmethod\ndef universitet_haqida(cls):\n    print(f'Bu {cls.universitet} universiteti!')",
        options: ["Instance method", "Class method", "Static method", "Funksiya"],
        correct: 1,
        explanation: "Bu '@classmethod' dekoratori bilan belgilangan class method hisoblanadi."
    },
    {
        question: "Quyidagi kodda qanday metod?",
        code: "@staticmethod\ndef yosh_tekshirish(yosh):\n    if yosh >= 16:\n        return 'Talaba bo'lish mumkin'",
        options: ["Instance method", "Class method", "Static method", "Funksiya"],
        correct: 2,
        explanation: "Bu '@staticmethod' dekoratori bilan belgilangan static method hisoblanadi."
    },
    {
        question: "Instance method qanday chaqiriladi?",
        options: ["Class orqali", "Object orqali", "Funksiya kabi", "Hech qanday usulda"],
        correct: 1,
        explanation: "Instance method faqat object orqali chaqiriladi."
    },
    {
        question: "Class method qanday chaqiriladi?",
        options: ["Faqat object orqali", "Faqat class orqali", "Class yoki object orqali", "Hech qanday usulda"],
        correct: 2,
        explanation: "Class method class yoki object orqali chaqirilishi mumkin."
    },
    {
        question: "Static method qanday chaqiriladi?",
        options: ["Faqat object orqali", "Faqat class orqali", "Class yoki object orqali", "Hech qanday usulda"],
        correct: 2,
        explanation: "Static method class yoki object orqali chaqirilishi mumkin."
    },
    {
        question: "Quyidagi kodda 'self' nima bildiradi?",
        code: "def hujum(self, dushman):\n    zarar = self.kuch * 2\n    return zarar",
        options: ["Class", "Object'ning o'zini", "Funksiya", "Ma'lumot"],
        correct: 1,
        explanation: "'self' - bu object'ning o'zini bildiradi va object'ning xususiyatlariga murojaat qilish uchun ishlatiladi."
    },
    {
        question: "Instance method object'ning holatini o'zgartirishi mumkinmi?",
        options: ["Ha", "Yo'q", "Ba'zan", "Faqat ba'zi holatlarda"],
        correct: 0,
        explanation: "Ha, instance method object'ning holatini o'zgartirishi mumkin."
    },
    {
        question: "Class method class'ning holatini o'zgartirishi mumkinmi?",
        options: ["Ha", "Yo'q", "Ba'zan", "Faqat ba'zi holatlarda"],
        correct: 0,
        explanation: "Ha, class method class'ning holatini o'zgartirishi mumkin."
    },
    {
        question: "Static method nima uchun ishlatiladi?",
        options: ["Object bilan ishlash uchun", "Class bilan ishlash uchun", "Mustaqil hisoblashlar uchun", "Ma'lumot saqlash uchun"],
        correct: 2,
        explanation: "Static method mustaqil hisoblashlar yoki yordamchi funksiyalar uchun ishlatiladi."
    }
];
