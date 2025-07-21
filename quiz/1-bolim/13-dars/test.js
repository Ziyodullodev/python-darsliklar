const questions = [
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\ntry:\n    x = 10 / 0\nexcept ZeroDivisionError:\n    print(\"Nolga bo'lish mumkin emas\")",
        "options": ["10.0", "Xato (Error)", "0", "Nolga bo'lish mumkin emas"],
        "correct": 3,
        "explanation": "`10 / 0` amali `ZeroDivisionError` xatoligini keltirib chiqaradi. `try` bloki bu xatolikni ushlab, tegishli `except ZeroDivisionError` blokini ishga tushiradi."
    },
    {
        "question": "Quyidagi kod nima chiqaradi?\n\ntry:\n    son = int(\"matn\")\nexcept ValueError:\n    print(\"Noto'g'ri qiymat\")",
        "options": ["son", "matn", "Noto'g'ri qiymat", "Xato (ValueError)"],
        "correct": 2,
        "explanation": "\"matn\" satrini `int()` yordamida songa o'girib bo'lmaydi, bu `ValueError`ga sabab bo'ladi. `except ValueError` bloki bu xatoni tutib oladi."
    },
    {
        "question": "`try...except` konstruksiyasidagi `else` bloki qachon ishlaydi?",
        "options": [
            "Har doim",
            "Faqat xatolik yuz berganda",
            "Faqat `try` blokida xatolik yuz bermaganda",
            "Hech qachon"
        ],
        "correct": 2,
        "explanation": "`else` bloki faqatgina `try` bloki muvaffaqiyatli, ya'ni hech qanday istisno (exception) yuzaga kelmasdan yakunlanganda ishga tushadi."
    },
    {
        "question": "`finally` blokining asosiy vazifasi nima?",
        "options": [
            "Faqat xatolik bo'lganda ishlash",
            "Faqat xatolik bo'lmaganda ishlash",
            "Xatolik yuz berishidan qat'iy nazar har doim ishlash",
            "Dasturni yakunlash"
        ],
        "correct": 2,
        "explanation": "`finally` bloki `try` blokida xatolik yuz beradimi yoki yo'qmi, bundan qat'iy nazar har doim bajariladi. Odatda fayllarni yopish kabi tozalash amallari uchun ishlatiladi."
    },
    {
        "question": "Quyidagi kod natijasi nima?\n\nmy_list = [10, 20]\ntry:\n    print(my_list[2])\nexcept IndexError:\n    print(\"Bunday indeks yo'q\")",
        "options": ["20", "10", "Bunday indeks yo'q", "None"],
        "correct": 2,
        "explanation": "Ro'yxatda faqat 0 va 1-indekslar mavjud. Mavjud bo'lmagan 2-indeksga murojaat qilish `IndexError`ga olib keladi va `except` bloki ishlaydi."
    },
    {
        "question": "Quyidagi kodda qanday xatolik yuz beradi?\n\ntalaba = {\"ism\": \"Ali\"}\nprint(talaba[\"yoshi\"])",
        "options": ["ValueError", "TypeError", "IndexError", "KeyError"],
        "correct": 3,
        "explanation": "Lug'atda (dictionary) mavjud bo'lmagan \"yoshi\" kalitiga `[]` orqali murojaat qilinganda `KeyError` xatoligi yuzaga keladi."
    },
    {
        "question": "Python'da `raise` kalit so'zining vazifasi nima?",
        "options": [
            "Xatolikni e'tiborsiz qoldirish",
            "Dasturni to'xtatish",
            "Ma'lum bir xatolikni majburan yuzaga keltirish",
            "Xatolik haqida yordam olish"
        ],
        "correct": 2,
        "explanation": "`raise` kalit so'zi dasturchiga o'zining shartlariga ko'ra, kodning istalgan joyida ma'lum bir turdagi xatolikni ataylab yuzaga keltirish imkonini beradi."
    },
    {
        "question": "Quyidagi kod ekranga nimalarni chiqaradi?\n\ntry:\n    print(\"A\")\nexcept:\n    print(\"B\")\nelse:\n    print(\"C\")\nfinally:\n    print(\"D\")",
        "options": ["A, B, D", "A, C, D", "A, D", "B, D"],
        "correct": 1,
        "explanation": "`try` bloki ('A') xatosiz bajariladi. Shuning uchun `except` bloki ('B') o'tkazib yuboriladi. `try` muvaffaqiyatli bo'lgani uchun `else` bloki ('C') ishlaydi. `finally` bloki ('D') esa har doim ishlaydi. Natija: A, C, D."
    },
    {
        "question": "`except Exception as e:` sintaksisidagi `e` nimani anglatadi?",
        "options": [
            "Xatolik turi",
            "Xatolik yuz bergan qator",
            "Xatolik haqidagi ma'lumotni o'zida saqlaydigan o'zgaruvchi",
            "Dasturni to'xtatuvchi buyruq"
        ],
        "correct": 2,
        "explanation": "`e` bu o'zgaruvchi bo'lib, u yuzaga kelgan xatolik (exception) obyektini o'zida saqlaydi. Bu obyekt orqali xatolik haqida batafsil ma'lumot olish mumkin."
    },
    {
        "question": "Agar bir nechta xatolik turini bitta `except` blokida ushlamoqchi bo'lsangiz, qaysi sintaksisdan foydalanasiz?",
        "options": [
            "except ValueError or TypeError:",
            "except ValueError, TypeError:",
            "except (ValueError, TypeError):",
            "except [ValueError, TypeError]:"
        ],
        "correct": 2,
        "explanation": "Bir nechta turdagi xatoliklarni bitta `except` blokida tutish uchun ularni qavslar ichida vergul bilan ajratib yozish kerak."
    }
]