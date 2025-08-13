const questions = [
    {
        "question": "Dekorator nima?",
        "options": ["Funksiya ichida yoziladigan o'zgaruvchi", "Boshqa funksiyaga qo'shimcha funksionallik qo'shish uchun ishlatiladigan funksiya", "Funksiya chaqirilganda xato yuzaga keltiradigan mexanizm", "Kodni tezroq ishlashini ta'minlovchi vosita"],
        "correct": 1,
        "explanation": "Dekoratorlar bir funksiyani argument sifatida qabul qilib, unga yangi xususiyatlar qo'shadi va yangi funksiya qaytaradi."
    },
    {
        "question": "Dekoratorni qo'llashning eng keng tarqalgan usuli qaysi?",
        "options": ["`def` kalit so'zi bilan", "`@` belgisi bilan", "`from` kalit so'zi bilan", "`import` kalit so'zi bilan"],
        "correct": 1,
        "explanation": "Python'da dekoratorni qo'llash uchun dekoratsiyalanayotgan funksiyadan oldin `@` belgisidan foydalaniladi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\ndef mening_dekoratorim(funksiya):\n    def wrapper():\n        print('Funksiya boshlanmoqda')\n        funksiya()\n    return wrapper\n\n@mening_dekoratorim\ndef salom():\n    print('Assalomu alaykum!')\n\nsalom()",
        "options": ["Assalomu alaykum!", "Funksiya boshlanmoqda\nAssalomu alaykum!", "Assalomu alaykum!\nFunksiya boshlanmoqda", "Xato yuzaga keladi"],
        "correct": 1,
        "explanation": "Dekorator funksiyani chaqirishdan oldin 'Funksiya boshlanmoqda' xabarini chiqaradi, keyin esa asl `salom()` funksiyasi ishlaydi."
    },
    {
        "question": "Dekoratorni qo'lda qo'llash sintaksisi qanday?",
        "options": ["`funksiya = dekorator(funksiya)`", "`dekorator(funksiya)`", "`funksiya()`", "`dekorator`"],
        "correct": 0,
        "explanation": "`@dekorator` sintaksisi aslida `funksiya = dekorator(funksiya)` sintaksisining qisqartirilgan shaklidir."
    },
    {
        "question": "Agar dekorator qo'llaniladigan funksiya argument qabul qilsa, `wrapper` funksiyasi qanday bo'lishi kerak?",
        "options": ["Argument qabul qilmasligi kerak", "Faqat bitta argument qabul qilishi kerak", "Xuddi shu argumentlarni yoki `*args` va `**kwargs`ni qabul qilishi kerak", "Faqat `**kwargs`ni qabul qilishi kerak"],
        "correct": 2,
        "explanation": "Agar asl funksiya argument qabul qilsa, `wrapper` ham xuddi shu argumentlarni yoki ko'p qirrali bo'lishi uchun `*args` va `**kwargs`ni qabul qilishi kerak."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\ndef ikkiga_kopaytir(funksiya):\n    def wrapper(son):\n        natija = funksiya(son)\n        return natija * 2\n    return wrapper\n\n@ikkiga_kopaytir\ndef sonni_ol(son):\n    return son\n\nprint(sonni_ol(5))",
        "options": ["5", "10", "Xato", "Hech narsa qaytarmaydi"],
        "correct": 1,
        "explanation": "`sonni_ol(5)` funksiyasi 5 ni qaytaradi, dekorator esa bu natijani olib, 2 ga ko'paytiradi. Natija 10 bo'ladi."
    },
    {
        "question": "`wrapper` funksiyasida `*args` va `**kwargs`dan foydalanish nima uchun kerak?",
        "options": ["Har doim shart", "Dekoratorni faqat nomli argumentlar bilan ishlatish uchun", "Dekoratorni istalgan sonli va turdagi argumentlar qabul qiladigan funksiyalar bilan ishlatish uchun", "Funksiya tezligini oshirish uchun"],
        "correct": 2,
        "explanation": "`*args` va `**kwargs` wrapper funksiyasini universal qiladi. Ular yordamida dekorator istalgan sonli pozitsion va nomli argumentlar bilan ishlay oladi."
    },
    {
        "question": "Dekoratorlar qanday amaliy vazifalarda foydali bo'ladi?",
        "options": ["Faqat funksiya chaqirilishidan oldin xabar chiqarishda", "Logging, funksiya ishlash vaqtini o'lchash, ruxsatlarni tekshirish kabi vazifalarda", "Faqat Python dasturlarida", "Faqat kichik dasturlarda"],
        "correct": 1,
        "explanation": "Dekoratorlar funksiyalarni o'zgartirmasdan, ularga logging, vaqt o'lchash, ruxsat tekshirish kabi umumiy xususiyatlarni qo'shishda juda samarali."
    },
    {
        "question": "Quyidagi kodda `wrapper` funksiyasi `funksiya`dan qaytgan natijani qabul qilishi uchun nima qilish kerak?",
        "options": ["`wrapper` ichida `return funksi()`", "`wrapper` ichida `natija = funksi()` va keyin `return natija`", "Hech narsa qilish shart emas", "Faqat `funksiya()` ni chaqirish yetarli"],
        "correct": 1,
        "explanation": "Agar dekoratsiyalanayotgan funksiya qiymat qaytarsa, dekorator ham bu qiymatni qabul qilib, o'zgaruvchiga saqlashi va uni qaytarishi kerak. (`return natija`)."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\ndef ruxsat_tekshir(funksiya):\n    def wrapper(foydalanuvchi):\n        if foydalanuvchi == 'admin':\n            funksiya(foydalanuvchi)\n        else:\n            print('Ruxsat yo\'q!')\n    return wrapper\n\n@ruxsat_tekshir\ndef maxfiy_malumot(foydalanuvchi):\n    print('Maxfiy ma\'lumotlar...')\n\nmaxfiy_malumot('mehmon')",
        "options": ["Maxfiy ma'lumotlar...", "Ruxsat yo'q!", "Maxfiy ma'lumotlar...\nRuxsat yo'q!", "Xato"],
        "correct": 1,
        "explanation": "`foydalanuvchi` 'mehmon' bo'lgani uchun `if foydalanuvchi == 'admin'` sharti bajarilmaydi va `else` blokidagi 'Ruxsat yo'q!' xabari chiqadi."
    },
    {
        "question": "Dekoratorlar funksiyalarga qanday yondashuvni ta'minlaydi?",
        "options": ["Funksiyani to'liq qayta yozish", "Funksiyaning asl kodini o'zgartirmasdan, uning xulq-atvorini o'zgartirish", "Funksiyaning nomini o'zgartirish", "Funksiyadan bitta argumentni olib tashlash"],
        "correct": 1,
        "explanation": "Dekoratorlar funksiyaning asl kodiga tegmasdan, unga yangi xulq-atvor (funksionallik) qo'shish imkonini beradi."
    },
    {
        "question": "Nima sababdan dekorator funksiyasi `return wrapper` deb ichki funksiyani qaytaradi?",
        "options": ["Chunki bu standart Python sintaksisi", "Chunki `wrapper` funksiyasi dekoratorning asosiy ishini bajaradi", "Chunki dekorator funksiya nomi bilan qaytishi kerak", "Chunki `wrapper` funksiyasining ishlashiga hech qanday ehtiyoj yo'q"],
        "correct": 1,
        "explanation": "Dekorator funksiyasi asl funksiyani almashtiradigan yangi funksiya (`wrapper`)ni qaytaradi. Bu `wrapper` asl funksiya chaqirilganda ishlaydi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\nimport time\n\ndef vaqt_olchagich(funksiya):\n    def wrapper(*args, **kwargs):\n        boshlanish = time.time()\n        funksiya(*args, **kwargs)\n        tugash = time.time()\n        print(f'{tugash - boshlanish} sekundda yakunlandi')\n    return wrapper\n\n@vaqt_olchagich\ndef hisobla(son):\n    time.sleep(1)\n    print(f'Natija: {son * 2}')\n\nhisobla(5)",
        "options": ["Natija: 10", "1 sekundda yakunlandi", "Natija: 10\n~1.0... sekundda yakunlandi", "Xato"],
        "correct": 2,
        "explanation": "Dekorator funksiyani chaqirishdan oldin va keyin vaqtni o'lchaydi. `hisobla(5)` ishlashi uchun 1 sekund kutadi va keyin natija va vaqt chiqadi."
    },
    {
        "question": "Dekorator `wrapper` funksiyasining ichida qanday qilib asl funksiyani chaqiradi?",
        "options": ["`wrapper()`", "`funksiya()`", "`dekorator(funksiya)`", "`return wrapper()`"],
        "correct": 1,
        "explanation": "`wrapper` funksiyasi o'ziga argument sifatida uzatilgan asl funksiyani `funksiya()` orqali chaqiradi."
    },
    {
        "question": "Qaysi xatolik ko'pincha dekoratorlardan foydalanganda yuzaga keladi?",
        "options": ["`KeyError`", "`TypeError` (noto'g'ri argumentlar uzatish)", "`ImportError`", "`IndexError`"],
        "correct": 1,
        "explanation": "Dekoratorlar bilan ishlaganda eng ko'p uchraydigan xato bu `TypeError`. Bu, odatda, asl funksiyaga to'g'ri argumentlar uzatilmaganligi yoki `wrapper` funksiyasi `*args` va `**kwargs`dan foydalanmaganligi uchun yuzaga keladi."
    }
]