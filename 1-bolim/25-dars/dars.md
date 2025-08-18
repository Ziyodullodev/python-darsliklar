📚 Darsning mavzusi: Python: Fayllar bilan ishlash: Fayl ochish, o‘qish, yozish, faylni yopish
Qisqacha vaqt taqsimoti
Qism
Davomiyligi
Kirish va Fayllar bilan ishlash tushunchasi
20 daqiqa
Fayl ochish va o‘qish
25 daqiqa
Faylga yozish va yopish
20 daqiqa
Amaliy mashqlar
25 daqiqa
Xulosa va uy vazifasi
20 daqiqa
Qayta aloqa va savollar
10 daqiqa
Jami
120 daqiqa (2 soat)


Bu usul yoshlar uchun samarali, qiziqarli va tushunarli bo‘lib, o‘quvchilarni dars jarayoniga faolroq jalb qiladi.


📖 Darsning batafsil rejasi
1. Kirish va Fayllar bilan ishlash tushunchasi (20 daqiqa)
Assalomu alaykum, yosh dasturchilar! 😊 Bugun biz Python’da fayllar bilan ishlash haqida o‘rganamiz. Fayl ochish, o‘qish, yozish va faylni yopish usullarini ko‘rib chiqamiz. Fayllar bilan ishlash ma’lumotlarni saqlash va ulardan foydalanishda juda muhim.

Fayllar — bu kompyuterda ma’lumotlarni saqlash uchun ishlatiladigan obyektlar. Python’da fayllar bilan ishlash uchun open() funksiyasi ishlatiladi. Fayllar odatda matnli (.txt) yoki boshqa formatlarda (.csv, .json) bo‘lishi mumkin.

Fayllar bilan ishlashning asosiy bosqichlari:

Fayl ochish: open() funksiyasi yordamida faylni ochamiz.
O‘qish yoki yozish: Fayldan ma’lumot o‘qiymiz yoki yangi ma’lumot yozamiz.
Faylni yopish: Ish tugagach, faylni yopamiz (close()).

Fayl ochishning umumiy sintaksisi:

fayl = open("fayl_nomi.txt", "rejim")

# Ishlar bajariladi

fayl.close()

Rejimlar:

"r": O‘qish (read) — faqat o‘qish uchun (standart rejim).
"w": Yozish (write) — faylga yozish, agar fayl bo‘lsa, o‘chirib yangidan yozadi.
"a": Qo‘shish (append) — fayl oxiriga yozish.
"r+": O‘qish va yozish uchun.

Faylni yopish muhim, chunki ochiq fayllar xotirani band qiladi va dastur xavfsizligiga ta’sir qilishi mumkin. Shu sababli, ko‘pincha with iborasidan foydalanamiz, chunki u faylni avtomatik yopadi.

Keling, bir savol: Fayllar bilan ishlash qachon kerak bo‘ladi deb o‘ylaysiz? (O‘quvchilar javobini kutaman, to‘g‘ri javob bo‘lsa: “Ajoyib, to‘g‘ri!” deyman.)

Mashq: Quyidagi vazifani bajaring:

matn.txt nomli faylni o‘qish rejimida ochib, uni yoping (haqiqiy fayl yaratmasdan kod yozing).

5 daqiqa vaqt beraman!


2. Fayl ochish va o‘qish (25 daqiqa)
Endi fayl ochish va undan ma’lumot o‘qish haqida gaplashamiz! Faylni ochish uchun open() funksiyasidan foydalanamiz va o‘qish uchun turli usullar mavjud.
Fayl ochish va oddiy o‘qish
Faylni o‘qish uchun read() usulidan foydalanamiz:

# with iborasi yordamida

with open("matn.txt", "r") as fayl:

    matn = fayl.read()

    print(matn)

with iborasi faylni avtomatik yopadi, shuning uchun close() chaqirish shart emas. Agar matn.txt ichida “Salom, dunyo!” yozilgan bo‘lsa, natija:

Salom, dunyo!

Agar fayl mavjud bo‘lmasa, FileNotFoundError xatosi chiqadi.
Qator-qator o‘qish
Faylni qator-qator o‘qish uchun readline() yoki readlines() usullaridan foydalanish mumkin:

# Qator-qator o‘qish (readline)

with open("matn.txt", "r") as fayl:

    qator1 = fayl.readline()

    qator2 = fayl.readline()

    print(qator1)  # Birinchi qator

    print(qator2)  # Ikkinchi qator

readlines() barcha qatorlarni ro‘yxat sifatida qaytaradi:

with open("matn.txt", "r") as fayl:

    qatorlar = fayl.readlines()

    print(qatorlar)  # ['Salom, dunyo!\n', 'Qalaysan?\n']

For tsikli yordamida qatorlarni o‘qish yanada qulay:

with open("matn.txt", "r") as fayl:

    for qator in fayl:

        print(qator.strip())  # \n belgisini olib tashlash uchun strip()

Natija:

Salom, dunyo!

Qalaysan?
Fayl ochish rejimlari
Faylni o‘qish uchun "r" rejimidan tashqari, agar faylni ham o‘qish, ham yozish kerak bo‘lsa, "r+" rejimidan foydalanish mumkin:

with open("matn.txt", "r+") as fayl:

    matn = fayl.read()

    print(matn)

    fayl.write("Yangi matn")  # Faylga yozish

Bu rejimda faylning boshidan o‘qish boshlanadi, yozish esa kursor joylashgan joydan boshlanadi.

Mashq: Quyidagi vazifani bajaring:

matn.txt nomli faylni o‘qish rejimida ochib, uning barcha qatorlarini for tsikli yordamida chiqaring (fayl mavjud deb hisoblang).

5 daqiqa vaqt beraman!


3. Faylga yozish va yopish (20 daqiqa)
Ajoyib, endi faylga yozish va uni yopish haqida gaplashamiz!
Faylga yozish
Faylga yozish uchun "w" yoki "a" rejimlaridan foydalanamiz. "w" rejimi faylni tozalab, yangidan yozadi, "a" rejimi esa fayl oxiriga qo‘shadi.
"w" rejimi bilan yozish
with open("yangi_fayl.txt", "w") as fayl:

    fayl.write("Bu yangi fayl!\n")

    fayl.write("Ikkinchi qator.")

Bu kod yangi_fayl.txt nomli fayl yaratadi va ichiga yuqoridagi matnni yozadi. Agar fayl allaqachon mavjud bo‘lsa, uning ichidagi ma’lumotlar o‘chiriladi.

Natija (yangi_fayl.txt ichida):

Bu yangi fayl!

Ikkinchi qator.
"a" rejimi bilan qo‘shish
Agar mavjud faylga qo‘shimcha yozmoqchi bo‘lsak:

with open("yangi_fayl.txt", "a") as fayl:

    fayl.write("\nUchinchi qator.")

Natija (yangi_fayl.txt ichida):

Bu yangi fayl!

Ikkinchi qator.

Uchinchi qator.
Ro‘yxatdan faylga yozish
writelines() usuli yordamida ro‘yxatni faylga yozish mumkin:

qatorlar = ["Birinchi qator\n", "Ikkinchi qator\n", "Uchinchi qator\n"]

with open("yangi_fayl.txt", "w") as fayl:

    fayl.writelines(qatorlar)

Natija (yangi_fayl.txt ichida):

Birinchi qator

Ikkinchi qator

Uchinchi qator
Faylni yopish
with iborasi ishlatilganda fayl avtomatik yopiladi. Agar with ishlatmasak, close() usulini chaqirish kerak:

fayl = open("matn.txt", "r")

matn = fayl.read()

print(matn)

fayl.close()  # Qo‘lda yopish

Lekin with iborasi xavfsizroq va tavsiya etiladi, chunki u xatolarda ham faylni yopadi.

Mashq: Quyidagi vazifani bajaring:

salom.txt nomli fayl yarating va unga “Salom, Python!” deb yozing.
Keyin faylga “\nYangi qator.” qatorini qo‘shing.

5 daqiqa vaqt beraman!


4. Amaliy mashqlar (25 daqiqa)
Endi o‘rganganlarimizni amalda sinab ko‘ramiz! Quyidagi mashqlarni qilamiz:
Mashq 1: Fayldan o‘qish
malumot.txt nomli faylni o‘qish rejimida ochib, uning barcha matnini ekranga chiqaring (fayl mavjud deb hisoblang).

with open("malumot.txt", "r") as fayl:

    matn = fayl.read()

    print(matn)
Mashq 2: Faylga yozish
natija.txt nomli fayl yarating va unga “Bu birinchi qator.\nBu ikkinchi qator.” deb yozing.

with open("natija.txt", "w") as fayl:

    fayl.write("Bu birinchi qator.\nBu ikkinchi qator.")
Mashq 3: Faylga qo‘shish va o‘qish
natija.txt fayliga “\nBu uchinchi qator.” qatorini qo‘shing.
Keyin faylni o‘qib, barcha qatorlarni ekranga chiqaring.

# Qo‘shish

with open("natija.txt", "a") as fayl:

    fayl.write("\nBu uchinchi qator.")

# O‘qish

with open("natija.txt", "r") as fayl:

    for qator in fayl:

        print(qator.strip())

Natija:

Bu birinchi qator.

Bu ikkinchi qator.

Bu uchinchi qator.

Har bir mashq uchun 8-9 daqiqa vaqt beraman. Kodlarni yozib, natijalarni ekranga chiqaring!


5. Xulosa va uy vazifasi (20 daqiqa)
Ajoyib, yosh dasturchilar! 🎉 Bugun biz Python’da fayllar bilan ishlashni o‘rgandik: fayl ochish, o‘qish, yozish va yopish usullarini ko‘rdik. Fayllar bilan ishlash ma’lumotlarni saqlash va ulardan foydalanishda juda muhim.

Uyga vazifa sifatida quyidagini qiling:

xabar.txt nomli fayl yarating va unga “Assalomu alaykum!” deb yozing.
xabar.txt fayliga “\nXayrli kun!” qatorini qo‘shing.
xabar.txt faylini o‘qib, uning barcha qatorlarini for tsikli yordamida ekranga chiqaring.
Darsimiz shu bilan tugadi, keyingi darsda esa Python Fayl Operatsiyalari: Binary fayllar, fayl rejimlari (r, w, a) mavzusini o‘rganamiz. Savollaringiz bo‘lsa, yozib qoldiring yoki keyingi darsda so‘rang! 😊
6. Qayta ko'rib chiqish va savollar (10 daqiqa)
Zo‘r ish qildingiz! Endi bir oz o'rganganlarimizi qayta ko'rib chiqamiz.. Bugungi darsda nimalarni o‘rgandik? Kim aytib bera oladi? (O‘quvchilar javobini kutaman.)

Fayl ochish uchun qaysi funksiyadan foydalanamiz?
"w" va "a" rejimlari o‘rtasidagi farq nima?
with iborasi qanday afzallik beradi?

Qandaydir tushunmovchilik bo‘ldimi? Savollaringiz bormi? (O‘quvchilar savollarini eshitaman va tushuntiraman.) 😊



