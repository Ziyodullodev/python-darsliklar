const questions = [
    {
        question: "Exception nima?",
        options: ["Oddiy xatolik", "Dastur ishlashida yuzaga keladigan maxsus holat", "Funksiya", "Class"],
        correct: 1,
        explanation: "Exception - dastur ishlashida yuzaga keladigan maxsus holat yoki xatolik."
    },
    {
        question: "Python'da exception'ni qanday tutish mumkin?",
        options: ["if-else bilan", "try-except bilan", "for loop bilan", "while loop bilan"],
        correct: 1,
        explanation: "Python'da exception'ni try-except bloki bilan tutish mumkin."
    },
    {
        question: "Quyidagi kodda qanday exception yuzaga keladi?",
        code: "x = 10 / 0",
        options: ["ValueError", "TypeError", "ZeroDivisionError", "IndexError"],
        correct: 2,
        explanation: "Nolga bo'lish ZeroDivisionError exception'ini keltirib chiqaradi."
    },
    {
        question: "Quyidagi kodda qanday exception yuzaga keladi?",
        code: "my_list = [1, 2, 3]\nprint(my_list[5])",
        options: ["ValueError", "TypeError", "ZeroDivisionError", "IndexError"],
        correct: 3,
        explanation: "Ro'yxat chegarasidan tashqaridagi indeksga murojaat IndexError exception'ini keltirib chiqaradi."
    },
    {
        question: "Quyidagi kodda qanday exception yuzaga keladi?",
        code: "int('abc')",
        options: ["ValueError", "TypeError", "ZeroDivisionError", "IndexError"],
        correct: 0,
        explanation: "Noto'g'ri formatdagi qiymatni int'ga aylantirish ValueError exception'ini keltirib chiqaradi."
    },
    {
        question: "finally bloki qachon ishlaydi?",
        options: ["Exception yuzaga kelganda", "Exception yuzaga kelmasa", "Har doim", "Hech qachon"],
        correct: 2,
        explanation: "finally bloki har doim ishlaydi, exception yuzaga kelsa ham, kelmasa ham."
    },
    {
        question: "Quyidagi kodda qanday natija chiqadi?",
        code: "try:\n    x = 10 / 0\nexcept ZeroDivisionError:\n    print('Nolga bo\'lish mumkin emas')\nfinally:\n    print('Finally bloki ishladi')",
        options: ["Faqat 'Nolga bo'lish mumkin emas'", "Faqat 'Finally bloki ishladi'", "Ikkalasi ham", "Hech narsa"],
        correct: 2,
        explanation: "Exception tutilganda except bloki ishlaydi, keyin finally bloki ham ishlaydi."
    },
    {
        question: "Custom Exception qanday yaratiladi?",
        options: ["Exception class'dan meros olish orqali", "Object yaratish orqali", "Funksiya yaratish orqali", "Class yaratish orqali"],
        correct: 0,
        explanation: "Custom Exception Exception class'dan meros olish orqali yaratiladi."
    },
    {
        question: "Quyidagi kodda qanday custom exception yaratilgan?",
        code: "class CustomError(Exception):\n    pass\n\nraise CustomError('Bu maxsus xatolik')",
        options: ["CustomError", "Exception", "Error", "BaseException"],
        correct: 0,
        explanation: "CustomError - Exception class'dan meros olgan custom exception."
    },
    {
        question: "raise kalit so'zi nima uchun ishlatiladi?",
        options: ["Exception'ni tutish uchun", "Exception'ni yaratish uchun", "Exception'ni o'chirish uchun", "Exception'ni tekshirish uchun"],
        correct: 1,
        explanation: "raise kalit so'zi exception'ni yaratish va tashlash uchun ishlatiladi."
    },
    {
        question: "Quyidagi kodda qanday exception tutiladi?",
        code: "try:\n    x = int('abc')\nexcept ValueError as e:\n    print(f'Xatolik: {e}')",
        options: ["ValueError", "TypeError", "ZeroDivisionError", "IndexError"],
        correct: 0,
        explanation: "Bu kodda ValueError exception'i tutiladi va 'e' o'zgaruvchisiga saqlanadi."
    },
    {
        question: "Multiple exception'lar qanday tutiladi?",
        options: ["Bir nechta except bloklari bilan", "Bir except blokida tuple bilan", "Ikkalasi ham", "Hech biri"],
        correct: 2,
        explanation: "Multiple exception'lar bir nechta except bloklari yoki bir except blokida tuple bilan tutilishi mumkin."
    },
    {
        question: "Quyidagi kodda qanday exception tutiladi?",
        code: "try:\n    x = 10 / 0\nexcept (ZeroDivisionError, ValueError) as e:\n    print(f'Xatolik: {e}')",
        options: ["Faqat ZeroDivisionError", "Faqat ValueError", "Ikkalasi ham", "Hech biri"],
        correct: 2,
        explanation: "Bu kodda ZeroDivisionError va ValueError exception'lari tutiladi."
    },
    {
        question: "Exception chaining nima?",
        options: ["Exception'larni zanjirga bog'lash", "Exception'larni o'chirish", "Exception'larni nusxalash", "Exception'larni tekshirish"],
        correct: 0,
        explanation: "Exception chaining - exception'larni zanjirga bog'lash, ya'ni bir exception boshqa exception'ni keltirib chiqarishi."
    },
    {
        question: "Quyidagi kodda qanday exception handling ko'rinadi?",
        code: "def divide(a, b):\n    try:\n        return a / b\nexcept ZeroDivisionError:\n        return 'Nolga bo\'lish mumkin emas'\nexcept TypeError:\n        return 'Noto\'g\'ri ma\'lumot turi'\nexcept Exception as e:\n        return f'Boshqa xatolik: {e}'",
        options: ["Specific exception handling", "General exception handling", "Ikkalasi ham", "Hech biri"],
        correct: 2,
        explanation: "Bu kodda specific exception'lar (ZeroDivisionError, TypeError) va general exception (Exception) handling ko'rinadi."
    }
];