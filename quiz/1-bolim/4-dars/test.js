const questions_lesson_4 = [
    {
        question: "Quyidagi qaysi metod satrni bo'shliqlarga qarab qismlarga ajratadi va list qaytaradi?",
        options: ["join()", "split()", "partition()", "divide()"],
        correct: 1,
        explanation: "`split()` metodi satrni bo'shliqlarga qarab (yoki ko'rsatilgan ajratgichga qarab) qismlarga ajratadi va list qaytaradi."
    },
    {
        question: "Agar `my_string = 'salom dunyo'` bo'lsa, `my_string.split()` qanday natija beradi?",
        options: ["['s', 'a', 'l', 'o', 'm', ' ', 'd', 'u', 'n', 'y', 'o']", "['salom', 'dunyo']", "['salom', ' dunyo']", "['salomdunyo']"],
        correct: 1,
        explanation: "Argumentlarsiz `split()` bo'shliqlarga qarab ajratadi, shuning uchun natija `['salom', 'dunyo']` bo'ladi."
    },
    {
        question: "Quyidagi qaysi metod elementlari satrlardan iborat bo'lgan listni berilgan ajratgich yordamida bitta satrga birlashtiradi?",
        options: ["merge()", "join()", "concatenate()", "combine()"],
        correct: 1,
        explanation: "`join()` metodi listdagi elementlarni berilgan ajratgich yordamida bitta satrga birlashtiradi."
    },
    {
        question: "Agar `my_list = ['olma', 'anor', 'uzum']` bo'lsa, `', '.join(my_list)` qanday natija beradi?",
        options: ["'olma, anor, uzum'", "'olma anor uzum'", "['olma', 'anor', 'uzum']", "''olma', 'anor', 'uzum''"],
        correct: 0,
        explanation: "`, `.join(my_list)` list elementlarini ', ' ajratgichi bilan birlashtiradi va natijada `'olma, anor, uzum'` satrini beradi."
    },
    {
        question: "Python'da f-stringlar nima uchun ishlatiladi?",
        options: ["Fayllarni formatlash uchun", "Funksiyalarni tezlashtirish uchun", "Satrlarni formatlash uchun", "Raqamlarni formatlash uchun"],
        correct: 2,
        explanation: "f-stringlar (Formatted string literals) satrlarni dinamik ravishda formatlash uchun ishlatiladi."
    },
    {
        question: "Qaysi f-string sintaksisi to'g'ri?",
        options: ["f'Salom {ism}'", "'Salom {ism}'f", "F'Salom {ism}'", "print(f'Salom {ism}')"],
        correct: 0,
        explanation: "f-stringlar 'f' yoki 'F' harfi bilan boshlanadi va jingalak qavslar ichiga o'zgaruvchilar qo'yiladi: `f'Salom {ism}'`."
    },
    {
        question: "Agar `text = 'Assalomu alaykum'` bo'lsa, `text.startswith('As')` qanday natija beradi?",
        options: ["True", "False", "Error", "None"],
        correct: 0,
        explanation: "`startswith()` metodi satrning berilgan prefiks bilan boshlanishini tekshiradi. 'Assalomu alaykum' 'As' bilan boshlanganligi sababli 'True' qaytadi."
    },
    {
        question: "Qaysi metod satrning berilgan sufiks bilan tugashini tekshiradi?",
        options: ["startwith()", "finishwith()", "endswith()", "hasend()"],
        correct: 2,
        explanation: "`endswith()` metodi satrning berilgan sufiks bilan tugashini tekshiradi."
    },
    {
        question: "Agar `word = 'python'` bo'lsa, `word.endswith('on')` qanday natija beradi?",
        options: ["True", "False", "Error", "None"],
        correct: 0,
        explanation: "`python` satri 'on' bilan tugaydi, shuning uchun natija 'True' bo'ladi."
    },
    {
        question: "Quyidagi qaysi kod `text` satrining 'Hello' bilan boshlanishini va 'World' bilan tugashini tekshiradi?",
        options: ["`text.startswith('Hello') and text.endswith('World')`", "`text.starts('Hello') and text.ends('World')`", "`'Hello' in text and 'World' in text`", "`text.startswith('Hello') or text.endswith('World')`"],
        correct: 0,
        explanation: "To'g'ri tekshirish uchun `startswith()` va `endswith()` metodlari `and` operatori bilan birga ishlatiladi."
    },
    {
        question: "Agar `data = ['A', 'B', 'C']` bo'lsa, `'-'.join(data)` qanday natija beradi?",
        options: ["'A-B-C'", "['A', '-', 'B', '-', 'C']", "'ABC'", "Error"],
        correct: 0,
        explanation: "`'-'.join(data)` list elementlarini '-' ajratgichi bilan birlashtiradi va `'A-B-C'` satrini hosil qiladi."
    },
    {
        question: "`sentence = 'Python dasturlash tili'` bo'lsa, `sentence.split(' ')` qanday natija beradi?",
        options: ["['Python', 'dasturlash', 'tili']", "['P', 'y', 't', 'h', 'o', 'n', ' ', 'd', 'a', 's', 't', 'u', 'r', 'l', 'a', 's', 'h', ' ', 't', 'i', 'l', 'i']", "['Python dasturlash tili']", "Error"],
        correct: 0,
        explanation: "`split(' ')` bo'shliq bo'yicha ajratadi va so'zlardan iborat list qaytaradi."
    },
    {
        question: "Quyidagi f-string ishlatishga misol bo'lmaydigan qatorni toping:",
        options: ["`f'Ism: {ism}, Yosh: {yosh}'`", "`f'2 + 3 = {2 + 3}'`", "`'Salom' + ism`", "`f'Bugun sana: {datetime.date.today()}'`"],
        correct: 2,
        explanation: "`'Salom' + ism` bu oddiy satr birlashtirish, f-string emas."
    },
    {
        question: "Agar `path = 'home/user/documents/report.pdf'` bo'lsa, `path.endswith('.pdf')` qanday natija beradi?",
        options: ["True", "False", "Error", "None"],
        correct: 0,
        explanation: "`report.pdf` `.pdf` bilan tugaydi, shuning uchun 'True' qaytadi."
    },
    {
        question: "Quyidagi kod natijasi nima bo'ladi? `text = 'apple,banana,cherry' ; fruits = text.split(',') ; result = ' & '.join(fruits)`",
        options: ["'apple & banana & cherry'", "['apple', 'banana', 'cherry']", "'apple,banana,cherry'", "Error"],
        correct: 0,
        explanation: "Avval `split(',')` 'apple,banana,cherry'ni `['apple', 'banana', 'cherry']` ga aylantiradi, keyin `' & '.join()` uni 'apple & banana & cherry' ga birlashtiradi."
    }
];