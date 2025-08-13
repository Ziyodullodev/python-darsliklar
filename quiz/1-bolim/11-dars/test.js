const questions = [
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\nmevalar = [\"olma\", \"nok\", \"banan\"]\nfor meva in mevalar:\n    print(meva)",
        "options": ["Xato", "olma nok banan", "olma\nnok\nbanan", "olma"],
        "correct": 2,
        "explanation": "for loop ro'yxatning har bir elementini alohida qatorda ekranga chiqaradi, shuning uchun natija har bir meva yangi qatorda bo'ladi."
    },
    {
        "question": "for loop qanday obyektlar ustida ishlaydi?",
        "options": ["Faqat ro'yxatlar", "Faqat sonlar", "Iterable (ro'yxat, string, tuple kabi) obyektlar", "Faqat bir dona qiymat"],
        "correct": 2,
        "explanation": "for loop ro'yxat, string, tuple kabi birma-bir ko'rib chiqiladigan (iterable) obyektlar ustida ishlaydi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\nmatn = \"Test\"\nfor harf in matn:\n    print(harf, end=\" \")",
        "options": ["T e s t", "Test", "T\ne\ns\nt", "Xato"],
        "correct": 0,
        "explanation": "print funksiyasida end=\" \" parametri har bir elementdan so'ng bo'sh joy qoldirishni bildiradi, shuning uchun natija 'T e s t' bo'ladi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\nfor i in range(4):\n    print(i)",
        "options": ["0, 1, 2, 3", "1, 2, 3, 4", "1, 2, 3", "0, 1, 2, 3, 4"],
        "correct": 0,
        "explanation": "range(4) funksiyasi 0 dan boshlab 4 gacha bo'lgan, ammo 4 ning o'zi kirmagan sonlar ketma-ketligini yaratadi."
    },
    {
        "question": "range(5, 10) funksiyasi qaysi sonlar ketma-ketligini yaratadi?",
        "options": ["5, 6, 7, 8, 9, 10", "5, 6, 7, 8, 9", "1, 2, 3, 4, 5", "6, 7, 8, 9, 10"],
        "correct": 1,
        "explanation": "range(boshlang'ich, oxirgi) funksiyasi oxirgi qiymatni kiritmaydi, shuning uchun 5 dan 9 gacha bo'lgan sonlar chiqadi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\nfor i in range(1, 10, 3):\n    print(i)",
        "options": ["1, 2, 3", "1, 4, 7, 10", "1, 4, 7", "1, 3, 5, 7, 9"],
        "correct": 2,
        "explanation": "range(boshlang'ich, oxirgi, qadam) funksiyasida har bir qadam 3 ga teng. Ketma-ketlik: 1, 1+3=4, 4+3=7. 10 kirmaydi."
    },
    {
        "question": "range() funksiyasi bilan teskari tartibda yurish uchun qadam parametri qanday bo'lishi kerak?",
        "options": ["Nolga teng", "Musbat son", "Manfiy son", "Hech qanday farqi yo'q"],
        "correct": 2,
        "explanation": "Teskari tartibda yurish uchun qadam (step) parametri manfiy son bo'lishi kerak."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\nfor i in range(3, 0, -1):\n    print(i)",
        "options": ["3, 2, 1", "3, 2, 1, 0", "Xato", "1, 2, 3"],
        "correct": 0,
        "explanation": "range(3, 0, -1) funksiyasi 3 dan boshlab 1 gacha, -1 qadam bilan bo'lgan sonlar ketma-ketligini yaratadi."
    },
    {
        "question": "Nested loop nima?",
        "options": ["Loop ichidagi loop", "Faqatgina bir loop", "Cheksiz ishlaydigan loop", "Loop'ni to'xtatish usuli"],
        "correct": 0,
        "explanation": "Nested loop - bu bir for loop'ning ichida boshqa for loop ishlatishdir."
    },
    {
        "question": "Quyidagi kod nechta iteratsiyani bajaradi?\n\nfor i in range(2):\n    for j in range(3):\n        print(\"Salom\")",
        "options": ["2", "3", "5", "6"],
        "correct": 3,
        "explanation": "Tashqi loop 2 marta (0, 1) ishlaydi, ichki loop esa har bir tashqi iteratsiya uchun 3 marta (0, 1, 2) ishlaydi. Jami: 2 * 3 = 6 ta iteratsiya."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\nfor i in range(2):\n    for j in range(2):\n        print(f\"{i}{j}\")",
        "options": ["00\n01\n10\n11", "00 01 10 11", "11\n12\n21\n22", "Xato"],
        "correct": 0,
        "explanation": "Tashqi loop i=0 va i=1 qiymatlari uchun ishlaydi. Har safar ichki loop j=0 va j=1 uchun ishlaydi, natijada 4 ta juftlik hosil bo'ladi."
    },
    {
        "question": "Nested loop’lar qachon ishlatiladi?",
        "options": ["Faqat sonlar bilan ishlashda", "Biror takroriy harakatni bir marta bajarish uchun", "Ko'p darajali takroriy harakatlar, masalan, jadval yoki matritsa bilan ishlashda", "Faqat bitta element ustida ishlash uchun"],
        "correct": 2,
        "explanation": "Nested loop'lar bir necha darajali takroriy amallar, masalan, jadval, matritsa yoki 2 o'lchamli ma'lumotlar bilan ishlash uchun juda foydali."
    },
    {
        "question": "for loop yordamida ro'yxatga yangi element qo'shish mumkinmi?",
        "options": ["Ha", "Yo'q", "Faqat range() bilan", "Faqat nested loop bilan"],
        "correct": 1,
        "explanation": "for loop ro'yxat elementlarini iteratsiya qilish uchun ishlatiladi. for loop ichida ro'yxatni o'zgartirish (yangi element qo'shish) odatda xatoliklarga olib kelishi mumkin."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\ncount = 0\nfor i in range(5):\n    count += 1\nprint(count)",
        "options": ["0", "4", "5", "10"],
        "correct": 2,
        "explanation": "range(5) 5 marta ishlaydi. Har bir iteratsiyada count o'zgaruvchisi 1 ga oshadi, shuning uchun yakuniy natija 5 bo'ladi."
    },
    {
        "question": "for loop'ning asosiy maqsadi nima?",
        "options": ["Shartlarni tekshirish", "Funksiyalarni yaratish", "Kodni bir marta ishga tushirish", "Iterable obyekt elementlari ustida takroriy harakatlarni bajarish"],
        "correct": 3,
        "explanation": "for loop'ning asosiy maqsadi — ro'yxat, matn, tuple kabi iterable obyektning barcha elementlari ustida belgilangan amallarni takroriy bajarishdir."
    }
]