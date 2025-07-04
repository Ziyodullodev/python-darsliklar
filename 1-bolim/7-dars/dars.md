📚 Darsning mavzusi: Python: Tuple: Tushuncha, packing/unpacking, Tuple operatsiyalari
Qisqacha vaqt taqsimoti
Qism
Davomiyligi
Kirish va Tuple tushunchasi
20 daqiqa
Tuple yaratish va packing/unpacking
25 daqiqa
Tuple operatsiyalari
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
1. Kirish va Tuple tushunchasi (20 daqiqa)
Assalomu alaykum, yosh dasturchilar! 😊 Bugun biz Python’da tuple’lar haqida o‘rganamiz. Tuple nima, ularni qanday yaratish, packing va unpacking qilish, shuningdek tuple’lar bilan qilinadigan operatsiyalarni ko‘rib chiqamiz. Tuple’lar dasturlashda muhim, chunki ular o‘zgarmas (immutable) ma’lumotlar saqlash uchun ishlatiladi.

Tuple — bu o‘zgarmas ro‘yxat deb aytsak bo‘ladi. Ular () oddiy qavslar ichida yoziladi va elementlar vergul bilan ajratiladi. Tuple ichida har xil turdagi ma’lumotlar bo‘lishi mumkin: sonlar, stringlar, hatto boshqa tuple’lar! Mana, oddiy misol:

mevalar = ("olma", "banan", "anor")

print(mevalar)  # ('olma', 'banan', 'anor')

Tuple’lar o‘zgarmas, ya’ni ularni yaratgandan keyin elementlarini o‘zgartirib yoki o‘chirib bo‘lmaydi. Bu ularni listlardan farq qiladi. Listlar o‘zgaruvchan edi, tuple’lar esa yo‘q. Tuple’ning uzunligini len() funksiyasi yordamida topish mumkin:

print(len(mevalar))  # 3

Keling, bir savol: tuple’lar listlardan nimasi bilan farq qiladi deb o‘ylaysiz? (O‘quvchilar javobini kutaman, to‘g‘ri javob bo‘lsa: “Ajoyib, to‘g‘ri!” deyman.)

Javob: Tuple’lar o‘zgarmas, listlar esa o‘zgaruvchan. Tuple’lar ko‘pincha o‘zgarmas bo‘lishi kerak bo‘lgan ma’lumotlarni saqlash uchun ishlatiladi, masalan, konstantalar yoki koordinatalar.


2. Tuple yaratish va packing/unpacking (25 daqiqa)
Tuple yaratish
Tuple yaratish juda oson — oddiy qavslar ichida elementlarni yozamiz. Tuple bo‘sh ham bo‘lishi mumkin:

# Bo‘sh tuple

bo‘sh_tuple = ()

print(bo‘sh_tuple)  # ()

# Elementli tuple

sonlar = (1, 2, 3, 4, 5)

print(sonlar)  # (1, 2, 3, 4, 5)

Bitta elementli tuple yaratishda e’tiborli bo‘lish kerak. Bitta element yozib, oddiy qavs ichiga olsangiz, Python uni tuple deb hisoblamaydi:

# Noto‘g‘ri

xato = (5)

print(type(xato))  # <class 'int'>

# To‘g‘ri

to‘g‘ri = (5,)

print(type(to‘g‘ri))  # <class 'tuple'>
Packing va Unpacking
Packing — bu bir nechta qiymatlarni tuple sifatida birlashtirish:

ism = "Ali"

yosh = 15

talaba = (ism, yosh)  # Packing

print(talaba)  # ('Ali', 15)

Unpacking — tuple’dagi elementlarni alohida o‘zgaruvchilarga ajratish:

ism, yosh = talaba  # Unpacking

print(ism)   # Ali

print(yosh)  # 15

Unpacking qilishda o‘zgaruvchilar soni tuple elementlari soniga mos bo‘lishi kerak, aks holda xato chiqadi:

# Xato

ism, yosh, sinf = talaba  # ValueError: not enough values to unpack

Agar tuple’da ko‘p element bo‘lsa va siz faqat ba’zilarini olishni xohlasangiz, * yordamida qolgan elementlarni ro‘yxat sifatida olish mumkin:

sonlar = (1, 2, 3, 4, 5)

birinchi, *qolgan, oxirgi = sonlar

print(birinchi)  # 1

print(qolgan)    # [2, 3, 4]

print(oxirgi)    # 5

Mashq: (10, "salom", True) tuple’ini yarating va:

Uning uzunligini ekranga chiqaring.
Unpacking yordamida elementlarni alohida o‘zgaruvchilarga saqlang va ekranga chiqaring.

5 daqiqa vaqt beraman!


3. Tuple operatsiyalari (20 daqiqa)
Tuple’lar o‘zgarmas bo‘lsa-da, ular bilan bir qancha operatsiyalarni bajarish mumkin.
Indekslash va Slicing
Tuple’da elementlarga indeks orqali murojaat qilish listlardagi kabi:

mevalar = ("olma", "banan", "anor", "uzum")

print(mevalar[1])   # banan

print(mevalar[-1])  # uzum

Slicing ham listlardagi kabi ishlaydi:

print(mevalar[1:3])  # ('banan', 'anor')

print(mevalar[::2])  # ('olma', 'anor') (har ikkinchi element)
Tuple’larni birlashtirish va takrorlash
Tuple’larni + yordamida birlashtirish mumkin:

tuple1 = (1, 2, 3)

tuple2 = (4, 5, 6)

birlashma = tuple1 + tuple2

print(birlashma)  # (1, 2, 3, 4, 5, 6)

* yordamida tuple’ni takrorlash mumkin:

takror = (1, 2) * 3

print(takror)  # (1, 2, 1, 2, 1, 2)
Elementni tekshirish
in operatori yordamida tuple’da element bor-yo‘qligini tekshirish mumkin:

mevalar = ("olma", "banan", "anor")

print("banan" in mevalar)  # True

print("nok" in mevalar)    # False

Tuple’da elementlarni o‘zgartirib bo‘lmaydi:

mevalar[1] = "shaftoli"  # TypeError: 'tuple' object does not support item assignment

Ammo agar tuple ichida list bo‘lsa, listni o‘zgartirish mumkin:

har_xil = (1, ["olma", "banan"], 3)

har_xil[1][0] = "anor"

print(har_xil)  # (1, ['anor', 'banan'], 3)

Mashq: ("kitob", "ruchka", "daftar", "qalam") tuple’i bilan:

Ikkinchi elementni ekranga chiqaring.
Dastlabki 3 elementni kesib oling.
"daftar" tuple’da bor-yo‘qligini tekshiring.

5 daqiqa vaqt beraman!


4. Amaliy mashqlar (25 daqiqa)
Endi o‘rganganlarimizni amalda sinab ko‘ramiz! Quyidagi mashqlarni qilamiz:
Mashq 1: Tuple yaratish va packing/unpacking
(5, "Python", 3.14) tuple’ini yarating.
Uning uzunligini ekranga chiqaring.
Unpacking yordamida elementlarni alohida o‘zgaruvchilarga saqlang va ekranga chiqaring.

data = (5, "Python", 3.14)

print(len(data))  # 3

son, matn, onli = data

print(son)   # 5

print(matn)  # Python

print(onli)  # 3.14
Mashq 2: Tuple operatsiyalari
("a", "b", "c") va (1, 2, 3) tuple’larini birlashtiring.
("salom",) tuple’ini 3 marta takrorlang.
("olma", "anor", "nok") tuple’ida "anor" bor-yo‘qligini tekshiring.

tuple1 = ("a", "b", "c")

tuple2 = (1, 2, 3)

birlashma = tuple1 + tuple2

print(birlashma)  # ('a', 'b', 'c', 1, 2, 3)

takror = ("salom",) * 3

print(takror)  # ('salom', 'salom', 'salom')

mevalar = ("olma", "anor", "nok")

print("anor" in mevalar)  # True
Mashq 3: Kombinatsiya
(10, 20, [30, 40], "matn") tuple’ini yarating.
Uchinchi elementdagi listning birinchi qiymatini 50 ga o‘zgartiring.
Dastlabki 2 elementni kesib oling.
Tuple’dagi "matn" elementini tekshiring.

data = (10, 20, [30, 40], "matn")

data[2][0] = 50

print(data)  # (10, 20, [50, 40], 'matn')

print(data[:2])  # (10, 20)

print("matn" in data)  # True

Har bir mashq uchun 8-9 daqiqa vaqt beraman. Kodlarni yozib, natijalarni ekranga chiqaring!


5. Xulosa va uy vazifasi (20 daqiqa)
Ajoyib, yosh dasturchilar! 🎉 Bugun biz Python’da tuple’lar bilan ishlashni o‘rgandik: tuple’ni yaratish, packing va unpacking qilish, shuningdek tuple’lar bilan operatsiyalarni ko‘rdik. Tuple’lar o‘zgarmas bo‘lgani uchun ular ma’lumotlarni xavfsiz saqlashda juda foydali.

Uyga vazifa sifatida quyidagini qiling:

("kitob", 20000, "Ahmad Lutfiy") tuple’ini yarating.
Unpacking yordamida elementlarni alohida o‘zgaruvchilarga saqlang va ekranga chiqaring.
Tuple uzunligini ekranga chiqaring.
("qizil", "ko‘k") va ("sariq", "yashil") tuple’larini birlashtiring va natijani 2 marta takrorlang.
("telefon", [1000000, "qora"], "Samsung") tuple’i bilan:
Ikkinchi elementdagi listning birinchi qiymatini 1200000 ga o‘zgartiring.
"Samsung" tuple’da bor-yo‘qligini tekshiring.
Oxirgi 2 elementni kesib oling.

Darsimiz shu bilan tugadi, keyingi darsda esa Python: Set: Unique elements, union, intersection, difference operatsiyalari mavzusini o‘rganamiz. Savollaringiz bo‘lsa, yozib qoldiring yoki keyingi darsda so‘rang! 😊


6. Qayta ko'rib chiqamiz va savollar (10 daqiqa)
Ajoyib! Endi bir oz o'rganganlarimizi qayta ko'rib chiqamiz.. Bugungi darsda nimalarni o‘rgandik? Kim aytib bera oladi?

Tuple’lar nima va ular listlardan qanday farq qiladi?
Packing va unpacking qanday ishlaydi?
Tuple’lar bilan qanday operatsiyalarni bajarish mumkin?

Qandaydir tushunmovchilik bo‘ldimi? Savollaringiz bormi? 😊



