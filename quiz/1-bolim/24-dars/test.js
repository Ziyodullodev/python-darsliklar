const questions = [
    {
        "question": "Python'da fayl va papkalar bilan ishlash uchun qaysi modul ishlatiladi?",
        "options": ["`sys`", "`math`", "`os`", "`random`"],
        "correct": 2,
        "explanation": "`os` (Operating System) moduli fayl tizimi operatsiyalari, papkalar yaratish va boshqa operatsion tizim bilan bog'liq vazifalarni bajarish uchun mo'ljallangan."
    },
    {
        "question": "`sys.argv` nima uchun ishlatiladi?",
        "options": ["Python versiyasini olish uchun", "Joriy papkadagi fayllar ro'yxatini olish uchun", "Dasturga uzatilgan buyruq qatori argumentlarini olish uchun", "Fayllarni o'chirish uchun"],
        "correct": 2,
        "explanation": "`sys.argv` dasturga buyruq qatori orqali uzatilgan argumentlarni ro'yxat sifatida qaytaradi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\nimport os\n\nos.mkdir('test_papka')",
        "options": ["Dastur xato beradi", "Hozirgi papkada 'test_papka' nomli papka yaratiladi", "'test_papka' nomli fayl yaratiladi", "Hech narsa bo'lmaydi"],
        "correct": 1,
        "explanation": "`os.mkdir()` funksiyasi berilgan nom bilan yangi papka (direktoriya) yaratadi."
    },
    {
        "question": "`random.randint(1, 5)` funksiyasi qanday sonni qaytaradi?",
        "options": ["Faqat 1 yoki 5 ni", "1 dan 5 gacha butun tasodifiy son", "0 dan 5 gacha tasodifiy haqiqiy son", "1 dan 5 gacha toq sonlarni"],
        "correct": 1,
        "explanation": "`random.randint(a, b)` funksiyasi `a` dan `b` gacha, `a` va `b` ham qo'shilgan holda, tasodifiy butun sonni qaytaradi."
    },
    {
        "question": "`math.sqrt(49)` funksiyasi qanday qiymatni qaytaradi?",
        "options": ["`7`", "`7.0`", "`49`", "`2401`"],
        "correct": 1,
        "explanation": "`math.sqrt()` funksiyasi sonning kvadrat ildizini hisoblaydi va natijani float turida (49 ning ildizi 7.0) qaytaradi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\nimport sys\n\nprint(sys.exit())",
        "options": ["`None`", "`0`", "Xato yuzaga keladi", "Dasturdan chiqish"],
        "correct": 3,
        "explanation": "`sys.exit()` funksiyasi dasturni shu nuqtada to'xtatadi va chiqish holatini qaytaradi. `print()` esa dastur to'xtatilgani sababli ishlamaydi."
    },
    {
        "question": "`os.getcwd()` funksiyasi nima vazifani bajaradi?",
        "options": ["Fayl nomini o'zgartiradi", "Yangi papka yaratadi", "Joriy ish papkasining yo'lini qaytaradi", "Dasturdan chiqadi"],
        "correct": 2,
        "explanation": "`os.getcwd()` (get current working directory) joriy ish papkasining to'liq yo'lini qaytaradi."
    },
    {
        "question": "`random.choice(ro'yxat)` funksiyasi nima uchun ishlatiladi?",
        "options": ["Ro'yxatni aralashtirish uchun", "Ro'yxatdan tasodifiy elementni tanlash uchun", "Ro'yxatni tozalash uchun", "Ro'yxatga yangi element qo'shish uchun"],
        "correct": 1,
        "explanation": "`random.choice()` ro'yxat, tuple yoki matn kabi ketma-ketliklardan tasodifiy elementni tanlash uchun ishlatiladi."
    },
    {
        "question": "`math.factorial(4)` funksiyasi qanday qiymatni qaytaradi?",
        "options": ["`24`", "`4`", "`2.0`", "`1`"],
        "correct": 0,
        "explanation": "`math.factorial()` funksiyasi sonning faktorialini hisoblaydi. 4! = 4 * 3 * 2 * 1 = 24."
    },
    {
        "question": "Qaysi modul tasodifiy sonlar generatsiya qilish uchun mo'ljallangan?",
        "options": ["`sys`", "`math`", "`os`", "`random`"],
        "correct": 3,
        "explanation": "`random` moduli tasodifiy sonlar, tanlovlar va aralashtirish uchun keng qo'llaniladi."
    },
    {
        "question": "`os.listdir()` funksiyasi nima qaytaradi?",
        "options": ["Joriy papkaning nomini", "Joriy papka ichidagi fayllar va papkalar ro'yxatini", "Faqat fayllar ro'yxatini", "Xato beradi"],
        "correct": 1,
        "explanation": "`os.listdir()` joriy papka ichidagi barcha fayllar va papkalarning nomlarini ro'yxat (list) sifatida qaytaradi."
    },
    {
        "question": "Matematik hisob-kitoblar uchun Python'da qaysi moduldan foydalanish kerak?",
        "options": ["`math`", "`random`", "`os`", "`sys`"],
        "correct": 0,
        "explanation": "`math` moduli trigonometrik, logarifmik va boshqa murakkab matematik funksiyalar bilan ishlash uchun mo'ljallangan."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\nimport random\n\nmevalar = [\"Olma\", \"Banan\"]\nrandom.shuffle(mevalar)\nprint(mevalar)",
        "options": ["`['Olma', 'Banan']`", "`['Banan', 'Olma']`", "`random` natija", "Xato yuzaga keladi"],
        "correct": 2,
        "explanation": "`random.shuffle()` funksiyasi ro'yxatning asl tartibini tasodifiy ravishda o'zgartiradi. Shuning uchun natija har safar har xil bo'lishi mumkin."
    },
    {
        "question": "`math.pi` va `math.e` nima?",
        "options": ["Funksiyalar", "O'zgaruvchilar", "Modullar", "Python kalit so'zlari"],
        "correct": 1,
        "explanation": "`math.pi` (π) va `math.e` (e) `math` moduli ichida joylashgan doimiy (konstanta) qiymatlar bo'lib, ularni funksiya emas, balki o'zgaruvchi sifatida chaqirish kerak."
    },
    {
        "question": "Python versiyasini bilish uchun qaysi kod qatoridan foydalanish kerak?",
        "options": ["`import sys; print(sys.version)`", "`import os; print(os.version)`", "`import math; print(math.version)`", "`print(version())`"],
        "correct": 0,
        "explanation": "`sys` moduli Python interpretatorining xususiyatlariga kirish imkonini beradi. Uning ichidagi `version` atributi Python versiyasini saqlaydi."
    }
]