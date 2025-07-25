const questions = [
    {
        question: "Ichma-ich list (nested list) nima?",
        options: ["Faqat raqamlar saqlaydigan list", "Boshqa listlarni element sifatida saqlaydigan list", "Faqat bir xil turdagi elementlar saqlaydigan list", "List ichidagi Tuple"],
        correct: 1,
        explanation: "Ichma-ich list - bu listning elementlaridan biri yoki bir nechtasi boshqa listdan iborat bo'lgan list."
    },
    {
        question: "`matrix = [[1, 2], [3, 4]]` bo'lsa, `matrix[0][1]` qanday natija beradi?",
        options: ["1", "2", "3", "4"],
        correct: 1,
        explanation: "`matrix[0]` birinchi ichki list `[1, 2]`ni beradi, `[1]` esa uning ikkinchi elementi, ya'ni `2` ni beradi."
    },
    {
        question: "List comprehension nima?",
        options: ["Listlarni qo'shish usuli", "Listlarni tartiblash usuli", "Listlarni ixcham tarzda yaratish usuli", "List elementlarini o'chirish usuli"],
        correct: 2,
        explanation: "List comprehension - bu bir qatorli kod yordamida yangi list yaratishning ixcham va samarali usuli."
    },
    {
        question: "Quyidagi list comprehension qanday natija beradi? `squares = [x**2 for x in range(3)]`",
        options: ["[0, 1, 4]", "[0, 1, 2, 3]", "[1, 4, 9]", "[0, 1, 8]"],
        correct: 0,
        explanation: "`range(3)` 0, 1, 2 qiymatlarini beradi. Har bir qiymat kvadratga ko'tarilib, `[0, 1, 4]` hosil bo'ladi."
    },
    {
        question: "Listni o'z o'rnida tartiblash uchun qaysi metod ishlatiladi?",
        options: ["sort()", "sorted()", "order()", "arrange()"],
        correct: 0,
        explanation: "`sort()` metodi listni o'z o'rnida (in-place) tartiblaydi va `None` qaytaradi."
    },
    {
        question: "`numbers = [3, 1, 4, 2]` bo'lsa, `numbers.sort()` dan keyin `numbers` qanday ko'rinishda bo'ladi?",
        options: ["[1, 2, 3, 4]", "[4, 3, 2, 1]", "[3, 1, 4, 2]", "Error"],
        correct: 0,
        explanation: "`sort()` metodi listni o'suvchi tartibda tartiblaydi."
    },
    {
        question: "Listni teskari tartibda joylashtirish (reverse) uchun qaysi metod ishlatiladi?",
        options: ["flip()", "reverse()", "invert()", "backward()"],
        correct: 1,
        explanation: "`reverse()` metodi list elementlarining tartibini o'z o'rnida teskari o'zgartiradi."
    },
    {
        question: "`letters = ['a', 'b', 'c']` bo'lsa, `letters.reverse()` dan keyin `letters` qanday ko'rinishda bo'ladi?",
        options: ["['a', 'b', 'c']", "['c', 'b', 'a']", "['b', 'a', 'c']", "Error"],
        correct: 1,
        explanation: "`reverse()` metodi listni teskari tartibda joylashtiradi."
    },
    {
        question: "Quyidagi list comprehension qanday natija beradi? `evens = [x for x in range(10) if x % 2 == 0]`",
        options: ["[0, 2, 4, 6, 8]", "[1, 3, 5, 7, 9]", "[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]", "[0, 2, 4, 6, 8, 10]"],
        correct: 0,
        explanation: "Bu kod 0 dan 9 gacha bo'lgan sonlar orasida juft bo'lganlarini (qoldiqsiz 2 ga bo'linadiganlarini) listga yig'adi."
    },
    {
        question: "Agar `data = [10, 20, 5, 15]` bo'lsa, `data.sort(reverse=True)` dan keyin `data` qanday ko'rinishda bo'ladi?",
        options: ["[5, 10, 15, 20]", "[20, 15, 10, 5]", "[10, 20, 5, 15]", "Error"],
        correct: 1,
        explanation: "`sort(reverse=True)` listni kamayuvchi tartibda tartiblaydi."
    },
    {
        question: "Berilgan list comprehension sintaksisi qaysi holatda xato bo'ladi?",
        options: ["[x+1 for x in my_list]", "[x if x > 5 for x in my_list]", "[x for x in my_list if x % 2 == 0]", "[x for x in my_list]"],
        correct: 1,
        explanation: "`if` sharti `for` tsikldan keyin kelishi kerak. To'g'ri sintaksis: `[expression for item in iterable if condition]`."
    },
    {
        question: "`my_list = ['g', 'a', 'e', 'c']` bo'lsa, `my_list.sort()` dan keyin `my_list` qanday ko'rinishda bo'ladi?",
        options: ["['g', 'a', 'e', 'c']", "['a', 'c', 'e', 'g']", "['g', 'e', 'c', 'a']", "Error"],
        correct: 1,
        explanation: "`sort()` metodi harflarni alifbo tartibida tartiblaydi."
    },
    {
        question: "Python'da `sorted()` funksiyasi va `list.sort()` metodi o'rtasidagi asosiy farq nima?",
        options: ["`sort()` yangi list qaytaradi, `sorted()` esa mavjud listni o'zgartiradi.", "`sort()` mavjud listni o'zgartiradi, `sorted()` esa yangi tartiblangan list qaytaradi.", "Ikkalasi ham bir xil ishlaydi.", "Faqat nomlari har xil, vazifasi bir xil."],
        correct: 1,
        explanation: "`list.sort()` listni o'z o'rnida tartiblaydi va `None` qaytaradi. `sorted()` funksiyasi esa asl listni o'zgartirmasdan, yangi tartiblangan list qaytaradi."
    },
    {
        question: "Quyidagi kod natijasi nima bo'ladi? `data = [[1, 2, 3], [4, 5, 6]] ; flat_list = [num for sublist in data for num in sublist]`",
        options: ["[1, 2, 3], [4, 5, 6]", "[[1, 2, 3, 4, 5, 6]]", "[1, 2, 3, 4, 5, 6]", "Error"],
        correct: 2,
        explanation: "Bu ichma-ich listni tekislash (flatten) uchun ishlatiladigan list comprehension. Natijada barcha elementlar bitta listga yig'iladi."
    },
    {
        question: "Agar `items = [1, 2, 3, 4, 5]` bo'lsa, `items.reverse()` dan keyin `items` qanday ko'rinishda bo'ladi?",
        options: ["[1, 2, 3, 4, 5]", "[5, 4, 3, 2, 1]", "[2, 1, 4, 3, 5]", "Error"],
        correct: 1,
        explanation: "`reverse()` metodi listni teskari tartibda joylashtiradi."
    }
];