const questions = [
    {
        "question": "Lambda funksiya nima?",
        "options": ["Nomlangan funksiya", "Yig'ma funksiya", "Rekursiv funksiya", "Anonim (nomsiz) funksiya"],
        "correct": 3,
        "explanation": "Lambda funksiya `def` kalit so'zi bilan emas, balki `lambda` kalit so'zi bilan yaratiladigan nomsiz funksiyadir."
    },
    {
        "question": "Lambda funksiyaning sintaksisi qanday?",
        "options": ["def funksiya_nomi(argumentlar): ifoda", "lambda argumentlar: ifoda", "lambda (argumentlar): ifoda", "lambda: funksiya"],
        "correct": 1,
        "explanation": "Lambda funksiyaning to'g'ri sintaksisi: `lambda argumentlar: ifoda`."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\nkopaytirish = lambda a, b: a * b\nprint(kopaytirish(2, 5))",
        "options": ["7", "10", "25", "Xato"],
        "correct": 1,
        "explanation": "Lambda funksiya `a` va `b` argumentlarini qabul qilib, ularni ko'paytmasini qaytaradi. 2 * 5 = 10."
    },
    {
        "question": "Lambda funksiyalar asosan qanday operatsiyalar uchun ishlatiladi?",
        "options": ["Murakkab mantiqiy hisob-kitoblar", "Bir nechta qatorli kod bloklari", "Kichik va bir qatorlik operatsiyalar", "Faqat ro'yxatlarni yaratish"],
        "correct": 2,
        "explanation": "Lambda funksiyalar kodni ixchamlashtirish uchun kichik, bir martalik va bir qatorlik operatsiyalar uchun qulaydir."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\nprint((lambda x: x * 3)(4))",
        "options": ["4", "12", "x * 3", "Xato"],
        "correct": 1,
        "explanation": "Bu yerda lambda funksiya o'zgaruvchiga saqlanmasdan to'g'ridan-to'g'ri chaqirilgan. Natija 4 * 3 = 12 bo'ladi."
    },
    {
        "question": "`map()` funksiyasi nima vazifani bajaradi?",
        "options": ["Ro'yxatdan kerakli elementlarni ajratib oladi", "Ro'yxatdagi elementlarni tartiblaydi", "Ro'yxatdagi har bir elementga berilgan funksiyani qo'llaydi", "Ro'yxatning barcha elementlarini yig'indisini hisoblaydi"],
        "correct": 2,
        "explanation": "`map()` funksiyasi ro'yxat, tuple kabi iterable obyektdagi har bir elementga berilgan funksiyani qo'llab, yangi iteratsiyani qaytaradi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\nsonlar = [1, 2, 3]\nyangi_sonlar = list(map(lambda x: x + 1, sonlar))\nprint(yangi_sonlar)",
        "options": ["[1, 2, 3]", "[2, 3, 4]", "1 2 3", "Xato"],
        "correct": 1,
        "explanation": "Lambda funksiya ro'yxatdagi har bir songa 1 ni qo'shib chiqadi. Natijada `[2, 3, 4]` ro'yxati hosil bo'ladi."
    },
    {
        "question": "`filter()` funksiyasi nima vazifani bajaradi?",
        "options": ["Ro'yxatdagi barcha elementlarni o'zgartiradi", "Funksiya to'g'ri (True) qiymat qaytargan elementlarni ajratib oladi", "Ro'yxatdagi elementlarni aksincha tartiblaydi", "Ro'yxatdan tasodifiy elementni tanlaydi"],
        "correct": 1,
        "explanation": "`filter()` funksiyasi berilgan iterable obyektdan funksiya True qiymat qaytargan elementlarni filtrlash uchun ishlatiladi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\nsonlar = [1, 2, 3, 4, 5]\njuft_sonlar = list(filter(lambda x: x % 2 == 0, sonlar))\nprint(juft_sonlar)",
        "options": ["[1, 3, 5]", "[2, 4]", "2, 4", "Xato"],
        "correct": 1,
        "explanation": "Lambda funksiya juft sonlarni aniqlaydi. `filter()` esa bu shartga mos keladigan `[2, 4]` sonlarni ajratib oladi."
    },
    {
        "question": "`sorted()` funksiyasi bilan lambda qanday ishlatiladi?",
        "options": ["`sorted(ro'yxat, key=lambda ...)`", "`sorted(ro'yxat, filter=lambda ...)`", "`sorted(lambda ...)`", "`sorted(ro'yxat, map=lambda ...)`"],
        "correct": 0,
        "explanation": "sorted() funksiyasida `key` parametri orqali tartiblash qoidasini belgilash uchun lambda funksiyadan foydalaniladi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\ntalabalar = [('Ali', 85), ('Zilola', 92)]\ntartiblangan = sorted(talabalar, key=lambda x: x[1])\nprint(tartiblangan)",
        "options": ["(('Ali', 85), ('Zilola', 92))", "[('Ali', 85), ('Zilola', 92)]", "[('Zilola', 92), ('Ali', 85)]", "Xato"],
        "correct": 1,
        "explanation": "`key=lambda x: x[1]` har bir tuple'ning ikkinchi elementi (ya'ni ball) bo'yicha tartiblashni bildiradi. 85 < 92 bo'lgani uchun natija shu tartibda chiqadi."
    },
    {
        "question": "Lambda funksiyada `if/else` shartidan foydalanish mumkinmi?",
        "options": ["Ha, istalgancha", "Yo'q, umuman mumkin emas", "Faqat bir qatorli `if-else` shaklida", "Faqat `for` loop bilan"],
        "correct": 2,
        "explanation": "Lambda funksiyada murakkab shartlar ishlatilmaydi, lekin bir qatorli `if-else` shakli mavjud: `a if shart else b`."
    },
    {
        "question": "Lambda funksiya oddiy funksiyaga nisbatan qanday afzallikka ega?",
        "options": ["Tezroq ishlaydi", "Kodni osonroq o'qish mumkin", "Kodni qisqartiradi va ixcham qiladi", "Barcha turdagi murakkab operatsiyalarni bajarish mumkin"],
        "correct": 2,
        "explanation": "Lambda funksiyalar kichik, bir martalik operatsiyalarni yozish uchun kodni ancha ixcham va qisqa qiladi."
    },
    {
        "question": "Quyidagi kodda xato bormi?\n\nmevalar = ['olma', 'banan', 'anor']\nuzun_mevalar = list(filter(lambda x: len(x) > 4, mevalar))\nprint(uzun_mevalar)",
        "options": ["Ha, `len(x)` funksiyasini ishlatib bo'lmaydi", "Ha, `filter()` funksiyasi `list()` ichida ishlamaydi", "Yo'q, kod to'g'ri va natija `['banan', 'anor']` bo'ladi", "Yo'q, kod to'g'ri va natija `['olma', 'banan', 'anor']` bo'ladi"],
        "correct": 2,
        "explanation": "Kod to'g'ri. Lambda funksiya har bir so'z uzunligini tekshiradi va filter() esa uzunligi 4 dan katta bo'lgan 'banan' va 'anor' so'zlarini ajratib oladi."
    },
    {
        "question": "Lambda funksiyalar qaysi tushuncha bilan bog'liq?",
        "options": ["Obyektga yo'naltirilgan dasturlash", "Funksional dasturlash", "Cheksiz looplar", "Rekursiv funksiyalar"],
        "correct": 1,
        "explanation": "Lambda funksiyalar funksional dasturlash paradigmasining bir qismi bo'lib, `map()`, `filter()` kabi funksiyalar bilan birga ishlatiladi."
    }
]