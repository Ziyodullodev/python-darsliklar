const questions = [
    {
        "question": "Generator nima?",
        "options": ["Barcha elementlarni xotirada saqlaydigan ro'yxat", "Ma'lumotlarni birdaniga qaytaradigan funksiya", "Kerak bo'lganda elementlarni birma-bir qaytaradigan iterator", "Faqat juft sonlarni qaytaradigan funksiya"],
        "correct": 2,
        "explanation": "Generatorlar - bu xotirani tejash uchun elementlarni birma-bir qaytaradigan maxsus turdagi iteratorlardir. Ular barcha ma'lumotlarni birdaniga xotiraga yuklamaydi."
    },
    {
        "question": "Generator funksiyalarni yaratish uchun qaysi kalit so'z ishlatiladi?",
        "options": ["`return`", "`yield`", "`next`", "`generate`"],
        "correct": 1,
        "explanation": "`yield` kalit so'zi funksiyani generatorga aylantiradi. U qiymat qaytaradi, lekin funksiyaning holatini saqlab qoladi."
    },
    {
        "question": "Oddiy ro'yxat va generator o'rtasidagi asosiy farq nima?",
        "options": ["Oddiy ro'yxat tezroq ishlaydi, generator sekinroq.", "Oddiy ro'yxat ma'lumotlarni o'zgartira olmaydi, generator o'zgartiradi.", "Oddiy ro'yxat barcha elementlarni xotirada saqlaydi, generator esa faqat bir vaqtda bitta elementni.", "Asosiy farqi yo'q, ikkalasi ham bir xil ishlaydi."],
        "correct": 2,
        "explanation": "Oddiy ro'yxat barcha elementlarni xotirada saqlaydi, generator esa 'lazy evaluation' prinsipiga asoslanib, faqat kerak bo'lganda elementni yaratadi va xotirani tejaydi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\ndef sonlar_gen():\n    yield 1\n    yield 2\n\nfor son in sonlar_gen():\n    print(son, end=' ')",
        "options": ["1 2", "1\n2", "[1, 2]", "Xato"],
        "correct": 0,
        "explanation": "`for` tsikli generatorni avtomatik ravishda iteratsiya qiladi va har bir `yield` qiymatini oladi. `end=' '` bo'lgani uchun natija bir qatorda chiqadi."
    },
    {
        "question": "Generatorning keyingi elementini olish uchun qaysi funksiyadan foydalaniladi?",
        "options": ["`get_next()`", "`next()`", "`list()`", "`for`"],
        "correct": 1,
        "explanation": "`next()` funksiyasi generatorning navbatdagi elementini olish uchun ishlatiladi. Agar elementlar tugasa, `StopIteration` xatosi yuzaga keladi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\ndef juft_sonlar(n):\n    for i in range(n):\n        if i % 2 == 0:\n            yield i\n\ngen = juft_sonlar(5)\nprint(list(gen))",
        "options": ["[0, 2, 4]", "[0, 1, 2, 3, 4]", "0\n2\n4", "Xato"],
        "correct": 0,
        "explanation": "Generator 0 dan 4 gacha bo'lgan sonlar ichidan faqat juft sonlarni qaytaradi. `list()` funksiyasi barcha elementlarni ro'yxatga aylantiradi."
    },
    {
        "question": "Generator expression qanday yaratiladi?",
        "options": ["`[i for i in range(5)]`", "`{i for i in range(5)}`", "`(i for i in range(5))`", "`lambda i: i for i in range(5)`"],
        "correct": 2,
        "explanation": "Generator expression ro'yxat comprehension'ga o'xshash, lekin kvadrat qavslar o'rniga yumaloq qavslar bilan yoziladi. U xotirani tejaydi, chunki generator yaratadi."
    },
    {
        "question": "Katta hajmli fayllarni qator-qator o'qish uchun qaysi usul samarali?",
        "options": ["Faylni o'qish uchun `read()` funksiyasidan foydalanish", "Faylni `readlines()` bilan o'qib, ro'yxatga saqlash", "Faylni o'qish uchun generator yordamida funksiya yaratish", "Hech qanday farqi yo'q, hamma usul bir xil ishlaydi."],
        "correct": 2,
        "explanation": "Generator yordamida katta fayllarni o'qish xotirani tejaydi, chunki generator faylni to'liq xotiraga yuklamasdan, har bir qatorni birma-bir qaytaradi."
    },
    {
        "question": "Agar generatorning barcha elementlari tugagandan so'ng `next()` funksiyasini chaqirsak, nima bo'ladi?",
        "options": ["Hech narsa bo'lmaydi", "`None` qiymati qaytariladi", "`StopIteration` xatosi yuzaga keladi", "Generator qayta boshlanadi"],
        "correct": 2,
        "explanation": "Generator elementlarining barchasini qaytarib bo'lgandan so'ng, u tugaydi. U yana element qaytara olmaydi va `next()` chaqirilganda `StopIteration` xatosini beradi."
    },
    {
        "question": "Quyidagi generator funksiyasining `yield` funksiyasi nima qiladi?\n\ndef generator_funksiya():\n    yield 1\n    yield 2",
        "options": ["`return 1`, keyin `return 2`", "Bir vaqtning o'zida `return (1, 2)`", "`return`ga o'xshash, lekin funksiyaning holatini saqlab qoladi", "Kodni to'xtatadi va xato beradi"],
        "correct": 2,
        "explanation": "`yield` qiymat qaytaradi, lekin oddiy `return`dan farqli o'laroq, funksiyaning holatini eslab qoladi. Keyingi chaqiruvda kod aynan shu nuqtadan davom etadi."
    },
    {
        "question": "Generatorlar qaysi funksional dasturlash prinsipiga asoslanadi?",
        "options": ["`Eager evaluation` (birdaniga hisoblash)", "`Lazy evaluation` (kerak bo'lganda hisoblash)", "`Immutable data` (o'zgarmas ma'lumot)", "`Recursive calls` (rekursiv chaqiruvlar)"],
        "correct": 1,
        "explanation": "`Lazy evaluation` tamoyilida ma'lumotlar faqatgina ularga ehtiyoj tug'ilganda hisoblanadi yoki hosil qilinadi, generatorlar ham xuddi shunday ishlaydi."
    },
    {
        "question": "Generator yordamida cheksiz ketma-ketliklar yaratish mumkinmi?",
        "options": ["Ha, `while True` loop bilan", "Yo'q, bu mumkin emas", "Faqat bir martalik ishlatish mumkin bo'lgan holatlarda", "Faqat juft sonlar bilan"],
        "correct": 0,
        "explanation": "Generatorlar `while True` loop bilan cheksiz ketma-ketliklar yaratish uchun juda qulay. Masalan, cheksiz natural sonlar ketma-ketligini hosil qilish mumkin."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\ngen = (x for x in range(3))\nprint(next(gen))\nprint(next(gen))",
        "options": ["0\n1", "[0, 1]", "0\n1\n2", "Xato"],
        "correct": 0,
        "explanation": "`next()` funksiyasi generatorning navbatdagi elementini oladi. Birinchi chaqiruvda 0, ikkinchisida esa 1 qaytariladi."
    },
    {
        "question": "Generatorni ro'yxatga o'tkazish uchun qaysi funksiyadan foydalaniladi?",
        "options": ["`str()`", "`list()`", "`tuple()`", "`dict()`"],
        "correct": 1,
        "explanation": "Generatorni bir martalik iteratsiya qilib, barcha elementlarini ro'yxatga yig'ish uchun `list()` funksiyasidan foydalaniladi."
    },
    {
        "question": "`yield` kalit so'zi funksiyaning ichida qancha marta ishlatilishi mumkin?",
        "options": ["Faqat bir marta", "Faqat ikki marta", "Istagan marta", "Umuman ishlatib bo'lmaydi"],
        "correct": 2,
        "explanation": "Generator funksiyasi ichida `yield` kalit so'zidan bir necha marta foydalanish mumkin. Har bir `yield` chaqirilganda, navbatdagi element qaytariladi."
    }
]