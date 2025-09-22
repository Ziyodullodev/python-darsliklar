const questions = [
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\nx = 10\nif x > 5:\n    print(\"Salom\")",
        "code": "# If shart operatori\nx = 10\nif x > 5:\n    print(\"Salom\")  # Bu bajariladi\n\n# Boshqa misol\ny = 3\nif y > 5:\n    print(\"Bu bajarilmaydi\")",
        "options": ["Xato", "Hech narsa", "Salom", "x > 5"],
        "correct": 2,
        "explanation": "x ning qiymati (10) 5 dan katta bo'lgani uchun 'if' sharti bajariladi va \"Salom\" yozuvi konsolga chiqariladi. Python'da if sharti True bo'lsa, uning ichidagi kod bajariladi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\ny = 3\nif y == 5:\n    print(\"To'g'ri\")\nelse:\n    print(\"Noto'g'ri\")",
        "code": "# If-else shart operatori\ny = 3\nif y == 5:\n    print(\"To'g'ri\")  # Bu bajarilmaydi\nelse:\n    print(\"Noto'g'ri\")  # Bu bajariladi\n\n# Boshqa misol\nz = 5\nif z == 5:\n    print(\"To'g'ri\")  # Bu bajariladi\nelse:\n    print(\"Noto'g'ri\")",
        "options": ["To'g'ri", "Noto'g'ri", "Xato", "y == 5"],
        "correct": 1,
        "explanation": "y ning qiymati 5 ga teng emas, shuning uchun 'if' sharti bajarilmaydi va 'else' bloki ishga tushib, \"Noto'g'ri\" degan yozuv chiqadi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\nson = 0\nif son > 0:\n    print(\"Musbat\")\nelif son < 0:\n    print(\"Manfiy\")\nelse:\n    print(\"Nol\")",
        "options": ["Musbat", "Manfiy", "Nol", "Xato"],
        "correct": 2,
        "explanation": "Birinchi 'if' sharti (0 > 0) yolg'on. Ikkinchi 'elif' sharti (0 < 0) ham yolg'on. Shuning uchun 'else' bloki bajariladi va \"Nol\" deb chiqariladi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\na = 10\nb = 20\nif a > 5 and b < 15:\n    print(\"Muvaffaqiyat\")\nelse:\n    print(\"Xatolik\")",
        "options": ["Xatolik", "a > 5 and b < 15", "Muvaffaqiyat", "Hech narsa"],
        "correct": 0,
        "explanation": "'a > 5' (True) sharti to'g'ri, lekin 'b < 15' (False) sharti noto'g'ri. 'and' operatori ikkala shart ham rost bo'lgandagina 'True' qaytaradi, shuning uchun 'else' bloki ishlaydi."
    },
    {
        "question": "Python'da 'if' blokiga tegishli kod qanday ajratib ko'rsatiladi?",
        "options": ["Jingalak qavslar {} bilan", "Nuqtali vergul ; bilan", "Bo'sh joy (otsup) bilan", "Dumaloq qavslar () bilan"],
        "correct": 2,
        "explanation": "Pythonda kod bloklari, jumladan if/elif/else bloklari, bo'sh joylar (odatda 4 ta probel) yordamida ajratiladi."
    },
    {
        "question": "Quyidagi kod natijasi qanday bo'ladi?\n\nif 0:\n    print(\"Rost\")\nelse:\n    print(\"Yolg'on\")",
        "options": ["Rost", "Yolg'on", "0", "SyntaxError"],
        "correct": 1,
        "explanation": "Pythonda 0, None, bo'sh satr \"\", va bo'sh to'plamlar ([]) 'False' qiymatiga ega. Shuning uchun 'if' sharti yolg'on hisoblanadi va 'else' bloki ishlaydi."
    },
    {
        "question": "'if' shartlari ketma-ketligida 'elif' nima uchun ishlatiladi?",
        "options": [
            "Agar 'if' sharti yolg'on bo'lsa, qo'shimcha shart tekshirish uchun",
            "Har doim bajariladigan kod bloki uchun",
            "Kodda xatolik yuzaga kelganda ishga tushadi",
            "Tsiklni boshlash uchun"
        ],
        "correct": 0,
        "explanation": "'elif' (else if) oldingi 'if' yoki 'elif' shartlari yolg'on bo'lganda yangi shartni tekshirish imkonini beradi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\nx = 10\ny = 5\nif x > 5:\n    if y > 10:\n        print(\"A\")\n    else:\n        print(\"B\")\nelse:\n    print(\"C\")",
        "options": ["A", "B", "C", "Xato"],
        "correct": 1,
        "explanation": "Tashqi 'if' sharti (x > 5) rost. Ichki 'if' sharti (y > 10) esa yolg'on. Shuning uchun ichkaridagi 'else' bloki bajarilib, \"B\" harfi chop etiladi."
    },
    {
        "question": "Quyidagi kodda qaysi yozuv chiqadi?\n\nhavo = \"yomg'ir\"\nif havo == \"quyosh\":\n    print(\"Sayrga chiqamiz\")\nelif havo == \"yomg'ir\":\n    print(\"Uyda qolamiz\")\nelif havo == \"bulut\":\n    print(\"Soyabon olamiz\")",
        "options": ["Sayrga chiqamiz", "Uyda qolamiz", "Soyabon olamiz", "Hech narsa"],
        "correct": 1,
        "explanation": "Python shartlarni ketma-ket tekshiradi. Birinchi 'if' sharti yolg'on. Ikkinchi 'elif havo == \"yomg'ir\"' sharti rost, shuning uchun uning bloki bajariladi va qolgan shartlar tekshirilmaydi."
    },
    {
        "question": "'if' va 'else' ni bir qatorda yozish usuli qanday nomlanadi?",
        "options": ["Lambda funksiya", "Dekorator", "Ternary operator", "Generator"],
        "correct": 2,
        "explanation": "Bu 'if-else' shartini bir qatorda ixcham yozish usuli bo'lib, \"Ternary Operator\" (uchlik operatori) deb ataladi. Masalan: print('Juft') if son % 2 == 0 else print('Toq')"
    }
]