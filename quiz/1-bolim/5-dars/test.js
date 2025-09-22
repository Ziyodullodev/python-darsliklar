const questions = [
    {
        question: "Python'da list (ro'yxat) yaratish uchun qaysi qavslardan foydalaniladi?",
        code: "# List yaratish usullari\nfruits = ['olma', 'anor', 'uzum']  # [] kvadrat qavslar\nnumbers = [1, 2, 3, 4, 5]\nempty_list = []  # bo'sh list\nmixed = [1, 'salom', 3.14, True]",
        options: ["()", "{}", "[]", "<>"],
        correct: 2,
        explanation: "Listlar [] kvadrat qavslar yordamida yaratiladi. () - tuple, {} - dictionary, <> - Python'da ishlatilmaydi."
    },
    {
        question: "Listdagi elementlarga indeks yordamida qanday murojaat qilinadi?",
        code: "# List elementlariga murojaat\nfruits = ['olma', 'anor', 'uzum']\nprint(fruits[0])  # olma\nprint(fruits[1])  # anor\nprint(fruits[2])  # uzum\nprint(fruits[-1]) # uzum (oxirgi element)",
        options: ["my_list(0)", "my_list[0]", "my_list{0}", "my_list<0>"],
        correct: 1,
        explanation: "List elementlariga indeks yordamida `[]` kvadrat qavslar orqali murojaat qilinadi. Indekslar 0 dan boshlanadi. Manfiy indekslar oxiridan hisoblanadi."
    },
    {
        question: "Bo'sh list yaratishning to'g'ri usuli qaysi?",
        options: ["my_list = {}", "my_list = ()", "my_list = []", "my_list = new List()"],
        correct: 2,
        explanation: "Bo'sh list `[]` bilan yaratiladi."
    },
    {
        question: "Agar `fruits = ['olma', 'anor', 'uzum']` bo'lsa, `fruits[1]` qanday natija beradi?",
        options: ["'olma'", "'anor'", "'uzum'", "Error"],
        correct: 1,
        explanation: "List indekslari 0 dan boshlanadi, shuning uchun `fruits[1]` ikkinchi elementni, ya'ni 'anor'ni qaytaradi."
    },
    {
        question: "Listga yangi element qo'shish uchun qaysi metod ishlatiladi?",
        options: ["add()", "insert()", "append()", "put()"],
        correct: 2,
        explanation: "`append()` metodi listning oxiriga yangi element qo'shadi."
    },
    {
        question: "`my_list = [10, 20, 30]` bo'lsa, `my_list.append(40)` dan keyin `my_list` qanday ko'rinishda bo'ladi?",
        options: ["[10, 20, 30, 40]", "[40, 10, 20, 30]", "[10, 20, 30]", "Error"],
        correct: 0,
        explanation: "`append()` metodi elementni listning oxiriga qo'shadi."
    },
    {
        question: "Listdan elementni o'chirish uchun qaysi metod ishlatilishi mumkin?",
        options: ["remove()", "delete()", "erase()", "drop()"],
        correct: 0,
        explanation: "`remove()` metodi listdan berilgan qiymatga ega birinchi elementni o'chiradi."
    },
    {
        question: "`numbers = [1, 2, 3, 2, 4]` bo'lsa, `numbers.remove(2)` dan keyin `numbers` qanday ko'rinishda bo'ladi?",
        options: ["[1, 3, 2, 4]", "[1, 3, 4]", "[1, 2, 4]", "Error"],
        correct: 0,
        explanation: "`remove()` metodi birinchi topilgan `2` ni o'chiradi, shuning uchun natija `[1, 3, 2, 4]` bo'ladi."
    },
    {
        question: "Listdagi elementlar sonini aniqlash uchun qaysi funksiya ishlatiladi?",
        options: ["size()", "count()", "len()", "length()"],
        correct: 2,
        explanation: "`len()` funksiyasi listdagi (yoki boshqa ketma-ketlikdagi) elementlar sonini qaytaradi."
    },
    {
        question: "Agar `items = ['a', 'b', 'c']` bo'lsa, `len(items)` qanday natija beradi?",
        options: ["2", "3", "4", "Error"],
        correct: 1,
        explanation: "Listda 3 ta element bor, shuning uchun `len()` 3 ni qaytaradi."
    },
    {
        question: "Listga indeks bo'yicha element kiritish uchun qaysi metod ishlatiladi?",
        options: ["add_at_index()", "put_at()", "insert()", "place()"],
        correct: 2,
        explanation: "`insert()` metodi berilgan indeksga element kiritadi."
    },
    {
        question: "`my_list = ['x', 'y', 'z']` bo'lsa, `my_list.insert(1, 'w')` dan keyin `my_list` qanday ko'rinishda bo'ladi?",
        options: ["['w', 'x', 'y', 'z']", "['x', 'w', 'y', 'z']", "['x', 'y', 'w', 'z']", "Error"],
        correct: 1,
        explanation: "`insert(1, 'w')` 1-indeksga 'w' ni kiritadi, qolgan elementlarni o'ngga suradi."
    },
    {
        question: "Listdan elementni indeks bo'yicha olib tashlash va uni qaytarish uchun qaysi metod ishlatiladi?",
        options: ["remove_by_index()", "delete_at()", "pop()", "extract()"],
        correct: 2,
        explanation: "`pop()` metodi berilgan indeksdagi elementni o'chiradi va uni qaytaradi. Agar indeks berilmasa, oxirgi elementni o'chiradi."
    },
    {
        question: "`colors = ['red', 'green', 'blue']` bo'lsa, `colors.pop(0)` dan keyin `colors` qanday ko'rinishda bo'ladi va qaysi qiymat qaytadi?",
        options: ["`['green', 'blue']`, qaytgan qiymat: 'red'", "`['red', 'green']`, qaytgan qiymat: 'blue'", "`['green', 'blue']`, qaytgan qiymat: 'green'", "Error"],
        correct: 0,
        explanation: "`pop(0)` 0-indeksdagi 'red'ni o'chiradi va uni qaytaradi, list esa `['green', 'blue']` bo'lib qoladi."
    },
    {
        question: "Python listlari o'zgaruvchan (mutable) ma'lumot turlari hisoblanadimi?",
        options: ["Ha", "Yo'q", "Faqat raqamlardan iborat bo'lsa", "Faqat matnlardan iborat bo'lsa"],
        correct: 0,
        explanation: "Python listlari o'zgaruvchan (mutable)dir, ya'ni yaratilgandan so'ng ularning elementlarini o'zgartirish, qo'shish yoki o'chirish mumkin."
    },
    {
        question: "Quyidagi kod natijasi nima bo'ladi?",
        code: "# List metodlari kombinatsiyasi\nnumbers = [1, 2, 3]\nnumbers.append(4)\nnumbers.insert(0, 0)\nprint(numbers)",
        options: ["[0, 1, 2, 3, 4]", "[1, 2, 3, 4, 0]", "[0, 1, 2, 3]", "[1, 2, 3, 4]"],
        correct: 0,
        explanation: "append(4) oxiriga 4 qo'shadi: [1, 2, 3, 4]. insert(0, 0) 0-indeksga 0 qo'shadi: [0, 1, 2, 3, 4]."
    },
    {
        question: "Quyidagi kod natijasi nima bo'ladi?",
        code: "# List slicing va metodlar\nfruits = ['olma', 'anor', 'uzum', 'banan']\nprint(fruits[1:3])\nprint(len(fruits))",
        options: ["['anor', 'uzum'] va 4", "['olma', 'anor'] va 3", "['uzum', 'banan'] va 4", "Xato"],
        correct: 0,
        explanation: "fruits[1:3] 1-indeksdan 3-indeksgacha (3 kirmaydi): ['anor', 'uzum']. len(fruits) list uzunligi: 4."
    }
];