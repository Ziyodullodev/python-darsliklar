const questions = [
    {
        "question": "Faylga yangi ma'lumot qo'shish uchun qaysi fayl rejimidan foydalaniladi?",
        "options": ["`'r'`", "`'w'`", "`'a'`", "`'rb'`"],
        "correct": 2,
        "explanation": "`'a'` (append) rejimi faylni ochib, ma'lumotni fayl oxiriga qo'shish uchun ishlatiladi. Agar fayl mavjud bo'lmasa, u yangi fayl yaratadi."
    },
    {
        "question": "`'w'` rejimida faylga yozishning asosiy xususiyati nima?",
        "options": ["Faqat yangi fayllar yaratish mumkin", "Mavjud faylni o'chirib, yangidan yozadi", "Fayl oxiriga ma'lumot qo'shadi", "Fayldan ma'lumotni o'qish mumkin"],
        "correct": 1,
        "explanation": "`'w'` (write) rejimida fayl ochilganda, agar u mavjud bo'lsa, ichidagi barcha ma'lumotlar o'chiriladi va yozish amali boshlanadi."
    },
    {
        "question": "Binary fayllar bilan ishlashda fayl rejimiga qaysi belgi qo'shiladi?",
        "options": ["`'t'`", "`'b'`", "`'x'`", "`'p'`"],
        "correct": 1,
        "explanation": "Binary fayllar bilan ishlash uchun matn rejimlariga (`'r'`, `'w'`, `'a'`) 'b' belgisi qo'shiladi. Masalan: `'rb'`, `'wb'`, `'ab'`."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\nwith open('test.txt', 'w') as fayl:\n    fayl.write('Salom')\nwith open('test.txt', 'a') as fayl:\n    fayl.write(' Dunyo')\n\nwith open('test.txt', 'r') as fayl:\n    print(fayl.read())",
        "options": ["Salom", "Dunyo", "Salom Dunyo", "Xato yuzaga keladi"],
        "correct": 2,
        "explanation": "Birinchi `w` rejimida 'Salom' yoziladi, ikkinchi `a` rejimida ' Dunyo' qo'shiladi. Natijada fayl ichida 'Salom Dunyo' matni bo'ladi."
    },
    {
        "question": "Binary fayllardan o'qilgan ma'lumotlar qaysi ma'lumot turida bo'ladi?",
        "options": ["`str` (matn)", "`list`", "`bytes` (baytlar)", "`int` (son)"],
        "correct": 2,
        "explanation": "Binary fayllardan o'qilgan ma'lumotlar `bytes` turida bo'ladi. Ularni matn sifatida ko'rish uchun `decode()` usulidan foydalanish kerak."
    },
    {
        "question": "Binary ma'lumotlarni matn turiga o'tkazish uchun qaysi usul ishlatiladi?",
        "options": ["`encode()`", "`read()`", "`decode()`", "`write()`"],
        "correct": 2,
        "explanation": "`bytes` turidagi ma'lumotni matn (`str`) turiga o'tkazish uchun `decode()` usulidan foydalaniladi. Aksincha, `encode()` matnni `bytes`ga o'tkazadi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\nwith open('data.bin', 'wb') as fayl:\n    fayl.write(b'Python')\n\nwith open('data.bin', 'rb') as fayl:\n    print(fayl.read().decode('utf-8'))",
        "options": ["Python", "b'Python'", "Xato yuzaga keladi", "Hech narsa chiqmaydi"],
        "correct": 0,
        "explanation": "Kod avval 'Python' matnini `bytes` turida faylga yozadi. Keyin fayldan o'qilgan `bytes` ma'lumot `decode('utf-8')` yordamida matnga aylantiriladi va 'Python' chiqadi."
    },
    {
        "question": "`struct` moduli nima uchun ishlatiladi?",
        "options": ["Matnni ro'yxatga o'tkazish uchun", "Sonlarni binary formatda yozish va o'qish uchun", "Fayllarning nomini o'zgartirish uchun", "Faqat matnli fayllar bilan ishlash uchun"],
        "correct": 1,
        "explanation": "`struct` moduli Python ma'lumot turlarini (masalan, sonlarni) C tilidagi strukturalar kabi binary formatga o'tkazish va aksincha amalni bajarish uchun ishlatiladi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\nimport struct\n\nwith open('son.bin', 'wb') as fayl:\n    fayl.write(struct.pack('i', 25))\n\nwith open('son.bin', 'rb') as fayl:\n    ma'lumot = fayl.read()\n    son = struct.unpack('i', ma'lumot)[0]\n    print(son)",
        "options": ["25", "b'25'", "i", "Xato yuzaga keladi"],
        "correct": 0,
        "explanation": "`struct.pack('i', 25)` sonni binary formatga o'tkazadi va faylga yozadi. Keyin `struct.unpack('i', ma'lumot)[0]` bu binary ma'lumotni qayta songa aylantiradi."
    },
    {
        "question": "`with open(...)` sintaksisining asosiy afzalligi nima?",
        "options": ["Fayl operatsiyalari tezroq ishlaydi", "Faqat bir marta yozish mumkin", "Dastur tugagach, faylni avtomatik yopadi", "Faqat o'qish uchun ishlatiladi"],
        "correct": 2,
        "explanation": "`with` blokidan foydalanish fayl bilan ishlash tugagandan so'ng, dastur qanday tugashidan qat'i nazar, faylni avtomatik va xavfsiz yopishni ta'minlaydi."
    },
    {
        "question": "Fayldan ma'lumot o'qish uchun qaysi fayl rejimidan foydalaniladi?",
        "options": ["`'a'`", "`'w'`", "`'r'`", "`'wb'`"],
        "correct": 2,
        "explanation": "`'r'` (read) rejimi fayldagi ma'lumotlarni o'qish uchun ishlatiladi. Bu standart rejim hisoblanadi."
    },
    {
        "question": "Binary fayllar bilan ishlashda yozish uchun qaysi rejim ishlatiladi?",
        "options": ["`'w'`", "`'a'`", "`'rb'`", "`'wb'`"],
        "correct": 3,
        "explanation": "`'wb'` (write binary) rejimi binary formatda yangi fayl yaratish yoki mavjudini o'chirib, unga ma'lumot yozish uchun ishlatiladi."
    },
    {
        "question": "Quyidagi matn `bytes` turiga qanday o'tkaziladi?",
        "options": ["`'Salom'.encode()`", "`b'Salom'`", "Ikkalasi ham", "Hech qaysi"],
        "correct": 2,
        "explanation": "Matnni `bytes`ga o'tkazish uchun `b` prefiksidan yoki matn obyektining `encode()` usulidan foydalanish mumkin. Ikkalasi ham bir xil natija beradi."
    },
    {
        "question": "Fayldan o'qish uchun `fayl.read()` usuli nima qaytaradi?",
        "options": ["Faylning butun matnini `str` turida", "Faqat birinchi qatorni", "Faqat birinchi belgini", "Ma'lumot turiga bog'liq"],
        "correct": 0,
        "explanation": "`fayl.read()` usuli argumentlarsiz chaqirilganda, fayldagi barcha ma'lumotni bitta `str` yoki `bytes` obyekti sifatida qaytaradi."
    },
    {
        "question": "Quyidagi kod natijasi nima bo'ladi?\n\nwith open('test.txt', 'r') as fayl:\n    print(fayl.read())",
        "options": ["Agar fayl mavjud bo'lmasa, `FileNotFoundError` yuzaga keladi", "Fayl yaratiladi", "Fayldagi ma'lumot o'chiriladi", "Hech narsa bo'lmaydi"],
        "correct": 0,
        "explanation": "`'r'` (read) rejimida fayl mavjud bo'lmasa, uni o'qib bo'lmaydi va `FileNotFoundError` xatosi yuzaga keladi. `'w'` va `'a'` rejimlari esa yangi fayl yaratadi."
    }
]