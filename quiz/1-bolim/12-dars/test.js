const questions = [
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\nson = 1\nwhile son <= 3:\n    print(son)\n    son += 1",
        "options": ["1 2 3", "1\n2\n3", "0\n1\n2\n3", "Cheksiz loop"],
        "correct": 1,
        "explanation": "son 1 dan boshlanadi, har safar 1 ga oshadi va shart (son <= 3) bajarilgancha ishlaydi. Natijada 1, 2, 3 sonlari yangi qatordan chiqadi."
    },
    {
        "question": "while loop qachon ishlatiladi?",
        "options": ["Faqat ro'yxatlar ustida yurish uchun", "Shart to'g'ri bo'lganicha kodni takrorlash uchun", "Aniqlangan son marta kodni takrorlash uchun", "Har doim faqat bir marta ishlaydi"],
        "correct": 1,
        "explanation": "while loop berilgan shart to'g'ri bo'lganicha o'z ichidagi kod blokini takrorlaydi."
    },
    {
        "question": "Quyidagi kod cheksiz loopga olib keladi. Bunga sabab nima?\n\nson = 1\nwhile son > 0:\n    print(\"Loop ishlayapti\")",
        "options": ["Shart hech qachon noto'g'ri bo'lmaydi", "son o'zgaruvchisi loop ichida o'zgarmaydi", "print funksiyasi cheksiz chaqiriladi", "Bunday kod xato beradi"],
        "correct": 0,
        "explanation": "son ning qiymati doimo 1, shuning uchun 'son > 0' sharti hech qachon noto'g'ri bo'lmaydi va loop cheksiz ishlaydi."
    },
    {
        "question": "break operatori nima vazifani bajaradi?",
        "options": ["Loop'ning joriy iteratsiyasini o'tkazib yuboradi", "Loop'ni butunlay to'xtatadi", "Loop'ni qayta boshlaydi", "Hech qanday ta'sir ko'rsatmaydi"],
        "correct": 1,
        "explanation": "break operatori loop'ni to'liq to'xtatish uchun ishlatiladi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\nson = 1\nwhile son <= 5:\n    if son == 3:\n        break\n    print(son)\n    son += 1",
        "options": ["1\n2\n3", "1\n2", "1\n2\n3\n4\n5", "3"],
        "correct": 1,
        "explanation": "son 3 ga teng bo'lganda break operatori ishlaydi va loop darhol to'xtaydi. Shuning uchun faqat 1 va 2 chiqadi."
    },
    {
        "question": "continue operatori nima vazifani bajaradi?",
        "options": ["Loop'ni butunlay to'xtatadi", "Loop'dan keyingi kodga o'tadi", "Joriy iteratsiyani o'tkazib yuboradi va keyingi iteratsiyaga o'tadi", "Faqat for loop uchun ishlaydi"],
        "correct": 2,
        "explanation": "continue operatori joriy iteratsiyaning qolgan qismini o'tkazib yuboradi va loop'ning keyingi iteratsiyasiga o'tadi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\nson = 0\nwhile son < 5:\n    son += 1\n    if son % 2 == 0:\n        continue\n    print(son)",
        "options": ["1\n3\n5", "1\n2\n3\n4\n5", "2\n4", "1 3 5"],
        "correct": 0,
        "explanation": "Agar son juft bo'lsa, continue operatori tufayli print(son) qismi bajarilmaydi va faqat toq sonlar ekranga chiqadi."
    },
    {
        "question": "while loop’da else bloki qachon ishlaydi?",
        "options": ["Har doim loop tugagandan so'ng", "Agar loop break bilan to'xtatilsa", "Agar loop normal yakunlansa", "Faqatgina loop ichida xato bo'lsa"],
        "correct": 2,
        "explanation": "else bloki faqat loop'ning sharti noto'g'ri bo'lib, loop normal yakunlansa ishlaydi. Agar break bilan to'xtatilsa, ishlamaydi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\nson = 1\nwhile son <= 2:\n    print(son)\n    son += 1\nelse:\n    print(\"Yakunlandi\")",
        "options": ["1\n2\nYakunlandi", "1\n2", "Yakunlandi", "Xato"],
        "correct": 0,
        "explanation": "son 1 va 2 qiymatlari uchun loop ishlaydi. Keyin shart noto'g'ri bo'ladi va else bloki bajariladi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\nson = 1\nwhile son <= 5:\n    if son == 3:\n        break\n    print(son)\n    son += 1\nelse:\n    print(\"Yakunlandi\")",
        "options": ["1\n2\n3\nYakunlandi", "1\n2\n3", "1\n2", "1\n2\nYakunlandi"],
        "correct": 2,
        "explanation": "son 3 ga teng bo'lganda break operatori ishlaydi va loop to'xtaydi. Shuning uchun else bloki ishlamaydi."
    },
    {
        "question": "for va while loop'larining asosiy farqi nima?",
        "options": ["for faqat sonlar bilan, while esa matnlar bilan ishlaydi.", "for shartga bog'liq, while esa iterable obyektlar ustida ishlaydi.", "for iterable obyektlar ustida ishlaydi, while esa shartga bog'liq ishlaydi.", "Hech qanday farqi yo'q."],
        "correct": 2,
        "explanation": "for loop iterable obyektlarning har bir elementi bo'yicha iteratsiya qilish uchun ishlatiladi. while loop esa shart to'g'ri bo'lganicha ishlaydi."
    },
    {
        "question": "Quyidagi kodning xatosini toping:\n\nson = 10\nwhile son >= 0:\n    print(son)\n    son += 1",
        "options": ["print() xato yozilgan.", "son >= 0 sharti xato.", "son -= 1 bo'lishi kerak, aks holda cheksiz loop bo'ladi.", "Kodda xato yo'q."],
        "correct": 2,
        "explanation": "son o'zgaruvchisi har safar oshirilmoqda, shuning uchun 'son >= 0' sharti har doim to'g'ri bo'lib qoladi va cheksiz loopga olib keladi."
    },
    {
        "question": "Sizga foydalanuvchidan 'stop' so'zi kiritilmaguncha ma'lumot qabul qilish kerak. Qaysi loop turini ishlatgan ma'qul?",
        "options": ["for loop", "while loop", "nested loop", "while ... else loop"],
        "correct": 1,
        "explanation": "while loop shartga bog'liq bo'lgani uchun, qachon to'xtash aniq bo'lmagan holatlarda (masalan, foydalanuvchi ma'lumoti) juda qulaydir."
    },
    {
        "question": "while loop'dagi son = son + 1 qatori nima maqsadda yozilgan?",
        "options": ["Loop'ni tezlashtirish uchun", "Loop'ni cheksiz qilish uchun", "Loop shartining noto'g'ri bo'lishiga erishish va loop'dan chiqish uchun", "Loop'da xato yuzaga keltirish uchun"],
        "correct": 2,
        "explanation": "Bu qator loop o'zgaruvchisini yangilab boradi, bu esa biror vaqtda shartning noto'g'ri bo'lishiga va loop'ning tugashiga olib keladi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\nfor i in range(3):\n    print(\"Salom\")\nelse:\n    print(\"Tugadi\")",
        "options": ["Salom\nSalom\nSalom", "Salom\nSalom\nSalom\nTugadi", "Faqat 'Tugadi'", "Xato"],
        "correct": 1,
        "explanation": "for loop ham else bloki bilan ishlay oladi. Loop normal tugagach, else bloki ishga tushadi."
    }
]