const questions = [
    {
        "question": "Python'da modul nima?",
        "options": ["Bir nechta papkani o'z ichiga olgan fayl", "Faqat funksiyalarni saqlaydigan `.py` fayli", "Funksiyalar, o'zgaruvchilar va sinflarni saqlaydigan `.py` fayli", "Faqat birgina funksiyadan iborat fayl"],
        "correct": 2,
        "explanation": "Modul - bu Python fayli (.py) bo'lib, unda funksiyalar, o'zgaruvchilar, sinflar yoki kodning boshqa qismlari bo'lishi mumkin."
    },
    {
        "question": "Modulni dasturga import qilish uchun qaysi kalit so'z ishlatiladi?",
        "options": ["`from`", "`import`", "`as`", "`class`"],
        "correct": 1,
        "explanation": "`import` kalit so'zi boshqa fayldagi modulni joriy dasturga yuklash uchun ishlatiladi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\nimport math\nprint(math.sqrt(9))",
        "options": ["3", "3.0", "Xato", "Hech narsa chiqmaydi"],
        "correct": 1,
        "explanation": "`math.sqrt(9)` 9 ning kvadrat ildizini hisoblaydi va natijani float (3.0) turida qaytaradi."
    },
    {
        "question": "`from math import pi` sintaksisining afzalligi nima?",
        "options": ["`math` modulining barcha funksiyalari import qilinadi", "Faqat `pi` o'zgaruvchisi import qilinadi", "Kodni qisqartiradi, lekin xotiradan ko'p joy egallaydi", "Bunday usulda import qilib bo'lmaydi"],
        "correct": 1,
        "explanation": "`from ... import ...` sintaksisi modulning faqat kerakli qismini import qilishga imkon beradi, bu esa kodni ixchamlashtiradi va keraksiz obyektlarni yuklamaydi."
    },
    {
        "question": "Modulga qisqa nom (alias) berish uchun qaysi kalit so'z ishlatiladi?",
        "options": ["`as`", "`import`", "`from`", "`alias`"],
        "correct": 0,
        "explanation": "`import modul_nomi as alias` sintaksisi yordamida modulga qisqartirilgan nom berish mumkin. Masalan, `import pandas as pd`."
    },
    {
        "question": "Paket nima?",
        "options": ["Faqat bir moduldan iborat papka", "Faqat funksiyalarni o'z ichiga olgan papka", "Bir nechta modullarni o'z ichiga olgan papka", "Faqat bitta fayl"],
        "correct": 2,
        "explanation": "Paket - bu Python modullaridan iborat papka bo'lib, u ichidagi modullarni tartibli saqlash uchun ishlatiladi. Dastlab, paketni belgilash uchun papka ichida `__init__.py` fayli bo'lishi shart edi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\nimport random\n\nmevalar = [\"Olma\", \"Anor\", \"Banan\"]\ntanlov = random.choice(mevalar)\nprint(tanlov in mevalar)",
        "options": ["`True`", "`False`", "Xato yuzaga keladi", "Natija tasodifiy"],
        "correct": 0,
        "explanation": "`random.choice()` funksiyasi ro'yxatdan tasodifiy elementni tanlaydi. Bu element ro'yxatda mavjud bo'lgani uchun `in` operatori `True` qiymat qaytaradi."
    },
    {
        "question": "Faqat bitta fayldan iborat custom modulni import qilish uchun nima qilish kerak?",
        "options": ["`from modul import *`", "Faylni bitta papkaga joylash", "Modul nomi bilan `.py` faylini yaratish va `import` qilish", "Bunday qilish mumkin emas"],
        "correct": 2,
        "explanation": "Custom modul yaratish uchun oddiy `.py` fayli yaratiladi va uni boshqa dasturdan `import` kalit so'zi bilan chaqirish mumkin."
    },
    {
        "question": "Paketning ichidagi modulni import qilish uchun qanday sintaksis ishlatiladi?",
        "options": ["`import paket.modul`", "`from paket import modul`", "`from .modul import funksiya`", "Barcha javoblar to'g'ri"],
        "correct": 3,
        "explanation": "Modullarni paket ichidan import qilishning bir nechta usuli mavjud: `import paket.modul`, `from paket import modul` yoki nisbiy import (`from .modul import funksiya`) kabi."
    },
    {
        "question": "Nima uchun dasturlashda modullardan foydalanish muhim?",
        "options": ["Kodni qisqartirish uchun", "Dasturning ishlash tezligini oshirish uchun", "Kodni tartibli, o'qishli va qayta ishlatiladigan qilish uchun", "Har doim ishlatilishi shart"],
        "correct": 2,
        "explanation": "Modullar kodni mantiqiy qismlarga bo'lish, uni tartibli saqlash va turli loyihalarda qayta ishlatish imkonini beradi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\nimport datetime as dt\n\nhozir = dt.datetime.now()\nprint(hozir.year)",
        "options": ["2025", "hozir.year", "Xato yuzaga keladi", "Hech narsa chiqmaydi"],
        "correct": 0,
        "explanation": "Modulga `dt` nomi berilgan. `dt.datetime.now()` yordamida joriy sana va vaqt olinadi va `.year` atributi orqali joriy yil qaytariladi. (Joriy yil 2025 deb qabul qilingan)."
    },
    {
        "question": "Standart Python moduliga misol keltiring.",
        "options": ["`requests`", "`numpy`", "`django`", "`os`"],
        "correct": 3,
        "explanation": "`os` moduli Python'ning standart kutubxonasiga kiradi va operatsion tizim bilan o'zaro ishlash uchun ishlatiladi. Qolganlari tashqi (uchinchi tomon) kutubxonalardir."
    },
    {
        "question": "Import qilingan modulning barcha funksiyalarini to'g'ridan-to'g'ri chaqirish uchun qanday sintaksis ishlatiladi?",
        "options": ["`import modul_nomi`", "`from modul_nomi import *`", "`import modul_nomi as m`", "Ikkalasi ham"],
        "correct": 1,
        "explanation": "`from modul_nomi import *` sintaksisi modul ichidagi barcha funksiyalarni to'g'ridan-to'g'ri, modul nomini yozmasdan chaqirishga imkon beradi. Lekin bu usul tavsiya etilmaydi."
    },
    {
        "question": "Quyidagi kodda xato bormi?\n\nfrom os import getcwd\n\nprint(os.getcwd())",
        "options": ["Ha, `os` nomli modul import qilinmagan", "Ha, `getcwd` o'rniga `os` yozilgan", "Yo'q, kod to'g'ri ishlaydi", "Ha, `getcwd` funksiyasi argument talab qiladi"],
        "correct": 1,
        "explanation": "`from os import getcwd` sintaksisi faqat `getcwd` funksiyasini import qiladi. `os.getcwd()` deb chaqirish uchun `import os` deb butun modulni import qilish kerak edi."
    },
    {
        "question": "Modullarni import qilishning eng yaxshi amaliyoti qaysi?",
        "options": ["Kerakli modullarni dastur boshida import qilish", "Kerak bo'lganda funksiya ichida import qilish", "`from modul import *` dan foydalanish", "Modullarni import qilmasdan ishlash"],
        "correct": 0,
        "explanation": "Eng yaxshi amaliyot shuki, barcha zaruriy modullar dastur faylining eng yuqori qismida import qilinishi kerak. Bu kodni o'qishni va boshqarishni osonlashtiradi."
    }
]