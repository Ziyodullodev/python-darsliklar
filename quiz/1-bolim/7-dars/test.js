const questions = [
    {
        question: "Python'da tuple (kortej) yaratish uchun qaysi qavslardan foydalaniladi?",
        options: ["[]", "{}", "()", "<>"],
        correct: 2,
        explanation: "Tuple'lar () qavslar yordamida yaratiladi."
    },
    {
        question: "Tuple'lar listlardan qanday farq qiladi?",
        options: ["Tuple'lar o'zgaruvchan (mutable), listlar esa o'zgarmas (immutable).", "Tuple'lar o'zgarmas (immutable), listlar esa o'zgaruvchan (mutable).", "Tuple'lar faqat sonlar saqlaydi, listlar esa istalgan turdagi ma'lumotni saqlaydi.", "Ular orasida hech qanday farq yo'q."],
        correct: 1,
        explanation: "Tuple'lar o'zgarmas (immutable) ma'lumot turlari bo'lib, yaratilgandan so'ng ularning elementlarini o'zgartirish, qo'shish yoki o'chirish mumkin emas. Listlar esa o'zgaruvchandir."
    },
    {
        question: "Bo'sh tuple yaratishning to'g'ri usuli qaysi?",
        options: ["my_tuple = {}", "my_tuple = []", "my_tuple = ()", "my_tuple = new Tuple()"],
        correct: 2,
        explanation: "Bo'sh tuple `()` bilan yaratiladi."
    },
    {
        question: "Bir elementli tuple yaratishning to'g'ri usuli qaysi?",
        options: ["`my_tuple = (1)`", "`my_tuple = (1,)`", "`my_tuple = [1]`", "`my_tuple = {1}`"],
        correct: 1,
        explanation: "Bir elementli tuple yaratishda elementdan keyin vergul (,) qo'yish shart, aks holda bu oddiy qavs ichidagi qiymat sifatida tushuniladi: `(1,)`."
    },
    {
        question: "Agar `coordinates = (10, 20, 30)` bo'lsa, `coordinates[0]` qanday natija beradi?",
        options: ["10", "20", "30", "Error"],
        correct: 0,
        explanation: "Tuple elementlariga indeks yordamida murojaat qilish mumkin, indekslar 0 dan boshlanadi."
    },
    {
        question: "Tuple'ga yangi element qo'shish uchun qaysi metod ishlatiladi?",
        options: ["add()", "append()", "insert()", "Tuple'larga element qo'shib bo'lmaydi"],
        correct: 3,
        explanation: "Tuple'lar o'zgarmas bo'lganligi sababli, ularga yangi element qo'shish yoki mavjudlarini o'zgartirish mumkin emas. Yangi tuple yaratish kerak bo'ladi."
    },
    {
        question: "Tuple'dan elementni o'chirish uchun qaysi metod ishlatiladi?",
        options: ["remove()", "pop()", "delete()", "Tuple'dan element o'chirib bo'lmaydi"],
        correct: 3,
        explanation: "Tuple'lar o'zgarmas bo'lganligi sababli, ulardan element o'chirib bo'lmaydi."
    },
    {
        question: "Tuple'dagi elementlar sonini aniqlash uchun qaysi funksiya ishlatiladi?",
        options: ["size()", "count()", "len()", "length()"],
        correct: 2,
        explanation: "`len()` funksiyasi listlar kabi tuple'lardagi elementlar sonini ham qaytaradi."
    },
    {
        question: "Agar `data = ('apple', 'banana')` bo'lsa, `len(data)` qanday natija beradi?",
        options: ["1", "2", "3", "Error"],
        correct: 1,
        explanation: "Tupleda 2 ta element bor, shuning uchun `len()` 2 ni qaytaradi."
    },
    {
        question: "Quyidagi kod natijasi nima bo'ladi? `my_tuple = (1, 2, 3) ; my_tuple[0] = 5`",
        options: ["my_tuple = (5, 2, 3)", "my_tuple = (1, 2, 3)", "Error beradi", "my_tuple = (5,)"],
        correct: 2,
        explanation: "Tuple'lar o'zgarmas bo'lganligi sababli, ularning elementlarini o'zgartirishga urinish `TypeError` xatosini beradi."
    },
    {
        question: "Tuple'lar qachon ishlatilishi afzal?",
        options: ["Ma'lumotlar o'zgarishi kerak bo'lsa", "Katta hajmli ma'lumotlar saqlash uchun", "Ma'lumotlar o'zgarmasligini ta'minlash va ishlash tezligi muhim bo'lsa", "Faqat qisqa satrlarni saqlash uchun"],
        correct: 2,
        explanation: "Tuple'lar ma'lumotlarning o'zgarmasligini ta'minlash kerak bo'lganda va listlarga nisbatan biroz tezroq ishlashi mumkin bo'lgan holatlarda afzaldir."
    },
    {
        question: "Tuple elementlarini o'z ichiga olgan listni qanday yaratish mumkin?",
        options: ["`my_list = [(1, 2), (3, 4)]`", "`my_list = ((1, 2), (3, 4))`", "`my_list = [1, 2, 3, 4]`", "`my_list = {1, 2, 3, 4}`"],
        correct: 0,
        explanation: "List ichida tuple'lar element sifatida saqlanishi mumkin. Sintaksis `[(tuple1), (tuple2)]`."
    },
    {
        question: "Tuple ichida boshqa tuple bo'lishi mumkinmi?",
        options: ["Ha", "Yo'q", "Faqat bir xil elementlar bo'lsa", "Faqat sonlar bo'lsa"],
        correct: 0,
        explanation: "Ha, tuple ichida boshqa tuple bo'lishi mumkin (nested tuples)."
    },
    {
        question: "Quyidagi kod natijasi nima bo'ladi? `t = (1, 2, 3) ; new_t = t + (4,)`",
        options: ["`new_t = (1, 2, 3)`", "`new_t = (1, 2, 3, 4)`", "Error beradi", "`new_t = (4, 1, 2, 3)`"],
        correct: 1,
        explanation: "Tuple'larni `+` operatori yordamida birlashtirish mumkin, natijada yangi tuple hosil bo'ladi. E'tibor bering, bir elementli tuple `(4,)` deb yoziladi."
    },
    {
        question: "`x, y, z = (1, 2, 3)` bu qanday operatsiya?",
        options: ["Tuple yaratish", "Tuple elementini o'zgartirish", "Tuple ochish (unpacking)", "Tuple ni listga o'tkazish"],
        correct: 2,
        explanation: "Bu tuple ochish (tuple unpacking) operatsiyasi bo'lib, tuple elementlarini bir nechta o'zgaruvchilarga taqsimlaydi."
    }
];