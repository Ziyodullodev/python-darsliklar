const questions = [
    {
        "question": "`map()` funksiyasining asosiy vazifasi nima?",
        "options": ["Ro'yxatdagi elementlarni tartiblash", "Iterable obyektning har bir elementiga funksiyani qo'llash", "Ro'yxatdagi elementlarni filtrlash", "Barcha elementlar yig'indisini hisoblash"],
        "correct": 1,
        "explanation": "`map()` funksiyasi biror iterable obyektdagi har bir elementga berilgan funksiyani qo'llab, yangi natijalar ketma-ketligini hosil qiladi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\nsonlar = [1, 2, 3]\nkvadratlar = list(map(lambda x: x**2, sonlar))\nprint(kvadratlar)",
        "options": ["[1, 2, 3]", "[1, 4, 9]", "1 4 9", "Xato"],
        "correct": 1,
        "explanation": "`map()` funksiyasi `sonlar` ro'yxatidagi har bir elementni kvadratga ko'taradi. Natijada `[1, 4, 9]` ro'yxati hosil bo'ladi."
    },
    {
        "question": "`filter()` funksiyasi nima vazifani bajaradi?",
        "options": ["Ro'yxatdagi barcha elementlarning ma'lumot turini o'zgartiradi", "Funksiya `True` qiymat qaytargan elementlarni ajratib oladi", "Ro'yxatni teskari tartibda joylashtiradi", "Ro'yxatdagi elementlarni birlashtiradi"],
        "correct": 1,
        "explanation": "`filter()` funksiyasi berilgan shartga (funksiya `True` qaytargan) mos keluvchi elementlarni tanlab oladi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\nsonlar = [1, 2, 3, 4, 5, 6]\ntoq_sonlar = list(filter(lambda x: x % 2 != 0, sonlar))\nprint(toq_sonlar)",
        "options": ["[2, 4, 6]", "[1, 3, 5]", "1 3 5", "Xato"],
        "correct": 1,
        "explanation": "Lambda funksiya faqat toq sonlar uchun `True` qaytaradi, shuning uchun `filter()` `[1, 3, 5]` ro'yxatini qaytaradi."
    },
    {
        "question": "`reduce()` funksiyasidan foydalanish uchun qaysi modulni import qilish kerak?",
        "options": ["`sys`", "`os`", "`math`", "`functools`"],
        "correct": 3,
        "explanation": "`reduce()` funksiyasi Python'da standart funksiya emas, u `functools` modulida joylashgan va uni ishlatish uchun import qilish shart."
    },
    {
        "question": "`reduce()` funksiyasining asosiy vazifasi nima?",
        "options": ["Barcha elementlarni bir qatorda chop etish", "Ikkita ro'yxatni birlashtirish", "Iterable obyekt elementlarini birlashtirib, bitta natija qaytarish", "Faqa juft sonlarni o'z ichiga oluvchi ro'yxat yaratish"],
        "correct": 2,
        "explanation": "`reduce()` funksiyasi `lambda` funksiyasini ketma-ket qo'llash orqali ro'yxat elementlarini bitta qiymatga kamaytiradi (reduce)."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\nfrom functools import reduce\n\nsonlar = [1, 2, 3, 4]\nyigindi = reduce(lambda x, y: x + y, sonlar)\nprint(yigindi)",
        "options": ["10", "1 2 3 4", "[1, 2, 3, 4]", "6"],
        "correct": 0,
        "explanation": "`reduce()` funksiyasi `x + y` amalini ketma-ket bajaradi: `1+2=3`, `3+3=6`, `6+4=10`."
    },
    {
        "question": "Qaysi funksiya bir nechta iterable obyektlar bilan birga ishlay oladi?",
        "options": ["`map()`", "`filter()`", "`reduce()`", "Hech qaysi"],
        "correct": 0,
        "explanation": "`map()` funksiyasi bir nechta iterable obyektlarni argument sifatida qabul qilishi mumkin. Masalan: `map(lambda x, y: x + y, list1, list2)`."
    },
    {
        "question": "`map()` va `filter()` funksiyalari orasidagi asosiy farq nima?",
        "options": ["`map()` ro'yxatni o'zgartiradi, `filter()` esa o'zgartirmaydi.", "`map()` elementlarni almashtiradi, `filter()` esa elementlarni tanlaydi.", "Ikkalasi ham bir xil ishlaydi, farqi yo'q.", "`map()` faqat sonlar bilan, `filter()` esa matnlar bilan ishlaydi."],
        "correct": 1,
        "explanation": "`map()` har bir elementga funksiyani qo'llab, yangi element yaratadi, `filter()` esa elementlarning asl o'zini shart asosida tanlab oladi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\nfrom functools import reduce\n\nsozlar = [\"salom\", \"dasturchi\"]\nbirlashma = reduce(lambda x, y: x + \" \" + y, sozlar)\nprint(birlashma)",
        "options": ["salom dasturchi", "salomdasturchi", "['salom', 'dasturchi']", "Xato"],
        "correct": 0,
        "explanation": "`reduce()` funksiyasi so'zlarni ketma-ket birlashtirib, o'rtasiga bo'sh joy qo'shadi. Natijada `salom dasturchi` so'zi hosil bo'ladi."
    },
    {
        "question": "`reduce()` funksiyasi uchun boshlang'ich qiymat (initial value) uzatish mumkinmi?",
        "options": ["Ha", "Yo'q, bu mumkin emas", "Faqat ro'yxatlar uchun", "Faqat musbat sonlar uchun"],
        "correct": 0,
        "explanation": "`reduce()` funksiyasiga uchinchi argument sifatida boshlang'ich qiymat uzatish mumkin, bu holda iteratsiya o'sha qiymatdan boshlanadi."
    },
    {
        "question": "Funksional dasturlashda `immutable` (o'zgarmas) tushunchasi nimani anglatadi?",
        "options": ["Funksiyalar bir marta aniqlanadi va hech qachon o'zgarmaydi", "Funksiyaga uzatilgan ma'lumotlar funksiya ichida o'zgartirilmaydi", "Dasturdagi barcha o'zgaruvchilar o'zgarmas", "Natija har doim bir xil bo'ladi"],
        "correct": 1,
        "explanation": "Funksional dasturlashda ma'lumotlar to'g'ridan-to'g'ri o'zgartirilmaydi. Funksiyalar ma'lumotlarning yangi nusxasini yaratadi, eski ma'lumot esa o'zgarmay qoladi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\nsonlar = [1, 2, 3]\nyangi = list(filter(lambda x: x > 2, sonlar))\nprint(yangi)",
        "options": ["[3]", "[2, 3]", "[1, 2, 3]", "Xato"],
        "correct": 0,
        "explanation": "Lambda funksiyasi faqat `x > 2` shartiga mos keluvchi elementlarni tanlaydi, bu holatda faqat `3` soni qoladi."
    },
    {
        "question": "`map()` va `filter()` funksiyalari qanday ma'lumot turini qaytaradi?",
        "options": ["Ro'yxat (`list`)", "Tuple", "Dictionary", "Iterator"],
        "correct": 3,
        "explanation": "`map()` va `filter()` funksiyalari to'g'ridan-to'g'ri ro'yxat emas, balki iterator obyektini qaytaradi. Uni ro'yxatga aylantirish uchun `list()` dan foydalanish kerak."
    },
    {
        "question": "Quyidagi kodda xato bormi?\n\nfrom functools import reduce\n\nsonlar = [1, 2, 3]\nreduce(lambda x, y: x + y, sonlar)\nprint(sonlar)",
        "options": ["Ha, `reduce` import qilinmagan", "Ha, `reduce` funksiyasi bir marta ishlatiladi va natijani qaytaradi, `sonlar` o'zgarmaydi.", "Yo'q, natija [1, 2, 3] bo'ladi", "Ha, `reduce` funksiyasi xato beradi."],
        "correct": 2,
        "explanation": "`reduce()` funksiyasi ro'yxatning o'zini o'zgartirmaydi, shuning uchun `sonlar` ro'yxati o'zgarmasdan `[1, 2, 3]` bo'lib qolaveradi."
    }
]