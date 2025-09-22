const questions = [
    {
        "question": "`print(5 ** 2)` kodining natijasi qanday bo'ladi?",
        "code": "# Darajaga oshirish operatori\nprint(5 ** 2)    # 25\nprint(2 ** 3)    # 8\nprint(10 ** 0)   # 1",
        "options": ["10", "7", "25", "Xato"],
        "correct": 2,
        "explanation": "`**` operatori darajaga oshirishni bildiradi. `5 ** 2` bu 5 ning 2-darajasi (kvadrati), ya'ni 5 × 5 = 25."
    },
    {
        "question": "`print(13 % 4)` kodining natijasi qanday bo'ladi?",
        "code": "# Qoldiq operatori (%)\nprint(13 % 4)    # 1\nprint(10 % 3)    # 1\nprint(15 % 5)    # 0\nprint(7 % 2)     # 1",
        "options": ["3", "1", "3.25", "4"],
        "correct": 1,
        "explanation": "`%` operatori bo'linmadagi qoldiqni topadi. 13 ni 4 ga bo'lganda (3 × 4 = 12), 1 qoldiq qoladi. Bu operator juft/toq sonlarni tekshirishda ishlatiladi."
    },
    {
        "question": "Quyidagi mantiqiy amallardan qaysi biri `True` qiymat qaytaradi?",
        "code": "# Mantiqiy operatorlar\nprint(True and False)    # False\nprint(not True)          # False\nprint(5 < 3 or 10 > 7)   # True\nprint(False or False)    # False",
        "options": ["True and False", "not True", "5 < 3 or 10 > 7", "False or False"],
        "correct": 2,
        "explanation": "`or` operatori shartlardan kamida bittasi rost bo'lsa `True` qaytaradi. `5 < 3` yolg'on, lekin `10 > 7` rost bo'lgani uchun umumiy natija `True` bo'ladi."
    },
    {
        "question": "`print(\"salom\" != \"Salom\")` solishtiruv amali qanday natija qaytaradi?",
        "options": ["True", "False", "Xato", "salom"],
        "correct": 0,
        "explanation": "Python'da satrlarni solishtirishda harflarning katta-kichikligi hisobga olinadi. \"s\" va \"S\" harflari farqli bo'lgani uchun `!=` (teng emas) sharti `True` natijani beradi."
    },
    {
        "question": "`matn = \"Dasturlash olami\"\nprint(len(matn))` kodi ekranga nima chiqaradi?",
        "options": ["15", "2", "16", "17"],
        "correct": 2,
        "explanation": "`len()` funksiyasi satrdagi belgilar sonini (probel, ya'ni bo'sh joy bilan birga) qaytaradi. \"Dasturlash olami\" satrida 16 ta belgi bor."
    },
    {
        "question": "`s = \"Python\"\nprint(s.lower())` kodining natijasi nima?",
        "options": ["PYTHON", "python", "PyThon", "Xato"],
        "correct": 1,
        "explanation": "`lower()` metodi satrdagi barcha katta harflarni kichik harflarga o'girib, yangi satr qaytaradi."
    },
    {
        "question": "`matn = \"Salom Dunyo\"\nprint(matn.replace(\"Dunyo\", \"Olam\"))` kodi natijasi nima?",
        "options": ["Salom Dunyo", "Salom Olam", "salom olam", "Dunyo Olam"],
        "correct": 1,
        "explanation": "`replace()` metodi satrning bir qismini (\"Dunyo\") boshqa qismga (\"Olam\") almashtirib, yangi satr hosil qiladi."
    },
    {
        "question": "`son = 10\nnatija = son / 2 + 3\nprint(natija)` kodining natijasi nima?",
        "options": ["8", "6.5", "8.0", "5.5"],
        "correct": 2,
        "explanation": "Amallar tartibiga ko'ra avval bo'lish (`10 / 2 = 5.0`), so'ngra qo'shish (`5.0 + 3 = 8.0`) bajariladi. Python'da `/` operatori har doim o'nli son (float) qaytaradi."
    },
    {
        "question": "`print(\"Test\".upper() == \"test\".upper())` kodining natijasi qanday?",
        "options": ["True", "False", "TEST", "test"],
        "correct": 0,
        "explanation": "Ikkala satr ham `upper()` metodi yordamida \"TEST\" ko'rinishiga keladi. \"TEST\" == \"TEST\" sharti rost (`True`) bo'lgani uchun natija `True` chiqadi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\na = 15\nb = a % 4\nprint(b > 3)",
        "options": ["True", "False", "3", "4"],
        "correct": 1,
        "explanation": "Avval `a % 4` (15 ni 4 ga bo'lgandagi qoldiq) hisoblanadi, natija `b = 3`. Keyin `b > 3` (ya'ni `3 > 3`) sharti tekshiriladi. 3 soni 3 dan katta emas, shuning uchun natija `False` bo'ladi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\nx = 8\ny = 3\nprint(x // y, x % y)",
        "code": "# Butun bo'lish va qoldiq\nx = 8\ny = 3\nprint(x // y, x % y)  # 2 2\nprint(10 // 3, 10 % 3)  # 3 1\nprint(7 // 2, 7 % 2)   # 3 1",
        "options": ["2 2", "3 1", "2.67 2", "Xato"],
        "correct": 0,
        "explanation": "`//` butun bo'lish operatori, `%` qoldiq operatori. 8 // 3 = 2 (butun qism), 8 % 3 = 2 (qoldiq)."
    },
    {
        "question": "Quyidagi mantiqiy ifoda natijasi nima?\n\nprint(not (5 > 3 and 2 < 1))",
        "code": "# Mantiqiy operatorlar kombinatsiyasi\nprint(not (5 > 3 and 2 < 1))  # True\nprint(5 > 3 and 2 < 1)        # False\nprint(not False)              # True",
        "options": ["True", "False", "5 > 3", "2 < 1"],
        "correct": 0,
        "explanation": "Avval qavs ichidagi ifoda hisoblanadi: 5 > 3 (True) and 2 < 1 (False) = False. Keyin not False = True."
    }
]