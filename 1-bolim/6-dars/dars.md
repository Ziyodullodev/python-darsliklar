📚 Darsning mavzusi: Python List Advanced: Nested lists, comprehension, sort(), reverse()
Qisqacha vaqt taqsimoti
Qism
Davomiyligi
Kirish va Nested lists
20 daqiqa
List comprehension
25 daqiqa
sort() va reverse() metodlari
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
1. Kirish va Nested lists (20 daqiqa)
Assalomu alaykum, yosh dasturchilar! 😊 Bugun biz Python’da listlar bilan ishlashning ilg‘or usullarini o‘rganamiz. Avvalgi darslarda listlar bilan tanishgan edik, endi esa ichma-ich listlar (nested lists), list comprehension, sort() va reverse() metodlarini ko‘rib chiqamiz. Bu usullar listlar bilan ishlashni yanada samarali qiladi.

Keling, birinchi bo‘lib ichma-ich listlar, ya’ni nested listlar haqida gaplashaylik. Nested list — bu list ichida boshqa listlar bo‘lishi. Bu ko‘p o‘lchovli ma’lumotlarni saqlashda juda foydali. Mana, oddiy misol:

nested_list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

print(nested_list)  # [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

Bu yerda har bir ichki list bir qator sifatida ko‘rilishi mumkin. Elementlarga murojaat qilish uchun ikkita indeks ishlatamiz:

print(nested_list[0])     # [1, 2, 3] (birinchi qator)

print(nested_list[1][2])  # 6 (ikkinchi qator, uchinchi element)

Nested listlarni o‘zgartirish ham mumkin:

nested_list[2][1] = 10

print(nested_list)  # [[1, 2, 3], [4, 5, 6], [7, 10, 9]]

Nested listlar ko‘pincha murakkab ma’lumotlarni saqlashda ishlatiladi, masalan, talabalarning baholari yoki o‘yin maydonidagi koordinatalar.

Keling, bir savol: nested listdan qanday foydalanish mumkin deb o‘ylaysiz? (O‘quvchilar javobini kutaman, to‘g‘ri javob bo‘lsa: “Ajoyib, to‘g‘ri!” deyman.)

Mashq: [[10, 20], [30, 40], [50, 60]] nested listini yarating va:

Ikkinchi qatorning birinchi elementini ekranga chiqaring.
Uchinchi qatorning ikkinchi elementini 70 ga o‘zgartiring.

5 daqiqa vaqt beraman!


2. List comprehension (25 daqiqa)
Endi list comprehension haqida gaplashamiz! List comprehension — bu listlarni yaratishning qisqa va oson usuli. U tsikllarni qisqartirib, kodni yanada chiroyli qiladi. Sintaksis quyidagicha: [ifoda for element in ro‘yxat]. Mana, oddiy misol:

# Oddiy usul

sonlar = []

for i in range(5):

    sonlar.append(i)

print(sonlar)  # [0, 1, 2, 3, 4]

# List comprehension bilan

sonlar = [i for i in range(5)]

print(sonlar)  # [0, 1, 2, 3, 4]

List comprehension’da shart qo‘shish ham mumkin:

# Faqat juft sonlar

juft_sonlar = [x for x in range(10) if x % 2 == 0]

print(juft_sonlar)  # [0, 2, 4, 6, 8]

List comprehension’da ifoda sifatida hisob-kitob ham ishlatish mumkin:

kvadratlar = [x**2 for x in range(5)]

print(kvadratlar)  # [0, 1, 4, 9, 16]

Nested listlar bilan ham list comprehension ishlatish mumkin. Masalan, nested listdagi barcha elementlarni bitta listga yig‘ish:

nested = [[1, 2, 3], [4, 5, 6]]

yassi = [num for ichki in nested for num in ichki]

print(yassi)  # [1, 2, 3, 4, 5, 6]

List comprehension kodni qisqa va o‘qilishi oson qiladi, lekin murakkab bo‘lsa, oddiy for tsiklidan foydalanish yaxshiroq bo‘ladi.

Mashq: List comprehension yordamida:

1 dan 10 gacha bo‘lgan sonlarning kvadratlarini list sifatida yarating.
1 dan 20 gacha bo‘lgan toq sonlardan iborat list yarating.

5 daqiqa vaqt beraman!


3. sort() va reverse() metodlari (20 daqiqa)
Ajoyib, endi listlarni tartiblash va teskari tartibga keltirish usullarini ko‘ramiz: sort() va reverse().
sort() metodi
sort() metodi listni joyida tartiblaydi (ya’ni listning o‘zini o‘zgartiradi). Tartiblash o‘sish tartibida bo‘ladi:

sonlar = [5, 2, 9, 1, 7]

sonlar.sort()

print(sonlar)  # [1, 2, 5, 7, 9]

Kamayish tartibida tartiblash uchun reverse=True parametridan foydalanamiz:

sonlar.sort(reverse=True)

print(sonlar)  # [9, 7, 5, 2, 1]

Stringlardan iborat listni ham tartiblash mumkin (alfavit bo‘yicha):

sozlar = ["banan", "olma", "anor"]

sozlar.sort()

print(sozlar)  # ['anor', 'banan', 'olma']
reverse() metodi
reverse() metodi listni teskari tartibga keltiradi:

sonlar = [1, 2, 3, 4, 5]

sonlar.reverse()

print(sonlar)  # [5, 4, 3, 2, 1]

Agar sort() ishlatmasdan faqat teskari tartib kerak bo‘lsa, reverse() yetarli. Shu bilan birga, sort() va reverse() ni birga ishlatish ham mumkin:

sozlar = ["banan", "olma", "anor"]

sozlar.sort()

print(sozlar)  # ['anor', 'banan', 'olma']

sozlar.reverse()

print(sozlar)  # ['olma', 'banan', 'anor']

E’tibor bering: sort() faqat bir xil turdagi elementlardan iborat listlar uchun ishlaydi. Agar listda turli xil ma’lumot turlari bo‘lsa, xato chiqadi:

har_xil = [1, "olma", 3]  # TypeError: '<' not supported between instances of 'str' and 'int'

har_xil.sort()

Mashq: ["kitob", "ruchka", "daftar", "qalam"] listi bilan:

Listni alfavit bo‘yicha tartiblang.
Tartiblangan listni teskari tartibga keltiring.

5 daqiqa vaqt beraman!


4. Amaliy mashqlar (25 daqiqa)
Endi o‘rganganlarimizni amalda sinab ko‘ramiz! Quyidagi mashqlarni qilamiz:
Mashq 1: Nested lists
[[5, 10], [15, 20], [25, 30]] nested listini yarating.
Ikkinchi qatorning ikkinchi elementini ekranga chiqaring.
Uchinchi qatorning birinchi elementini 50 ga o‘zgartiring.

nested = [[5, 10], [15, 20], [25, 30]]

print(nested[1][1])  # 20

nested[2][0] = 50

print(nested)  # [[5, 10], [15, 20], [50, 30]]
Mashq 2: List comprehension
List comprehension yordamida 1 dan 10 gacha bo‘lgan sonlarning kublaridan iborat list yarating.
1 dan 15 gacha bo‘lgan juft sonlardan iborat list yarating.

kublar = [x**3 for x in range(1, 11)]

print(kublar)  # [1, 8, 27, 64, 125, 216, 343, 512, 729, 1000]

juftlar = [x for x in range(1, 16) if x % 2 == 0]

print(juftlar)  # [2, 4, 6, 8, 10, 12, 14]
Mashq 3: sort() va reverse()
[12, 5, 8, 3, 10] listini o‘sish tartibida tartiblang.
Tartiblangan listni teskari tartibga keltiring.
["uzum", "olma", "banan", "nok"] listini alfavit bo‘yicha tartiblang.

sonlar = [12, 5, 8, 3, 10]

sonlar.sort()

print(sonlar)  # [3, 5, 8, 10, 12]

sonlar.reverse()

print(sonlar)  # [12, 10, 8, 5, 3]

mevalar = ["uzum", "olma", "banan", "nok"]

mevalar.sort()

print(mevalar)  # ['banan', 'nok', 'olma', 'uzum']

Har bir mashq uchun 8-9 daqiqa vaqt beraman. Kodlarni yozib, natijalarni ekranga chiqaring!


5. Xulosa va uy vazifasi (20 daqiqa)
Ajoyib, yosh dasturchilar! 🎉 Bugun biz Python’da listlar bilan ishlashning ilg‘or usullarini o‘rgandik: nested listlar, list comprehension, sort() va reverse() metodlari. Bu usullar yordamida listlar bilan ishlashni ancha samarali qildik. Listlar dasturlashda juda muhim, chunki ular yordamida ko‘p ma’lumotlarni tartib bilan saqlash va ularga ishlov berish mumkin.

Uyga vazifa sifatida quyidagini qiling:

[[1, 3], [5, 7], [9, 11]] nested listini yarating.
Ikkinchi qatorning birinchi elementini 10 ga o‘zgartiring.
Uchinchi qatorni ekranga chiqaring.
List comprehension yordamida:
1 dan 10 gacha bo‘lgan sonlarning 5 ga bo‘linadiganlarini list sifatida yarating.
1 dan 20 gacha bo‘lgan sonlarning kvadratlarini list sifatida yarating.
["qalam", "ruchka", "kitob", "daftar"] listi bilan:
Listni alfavit bo‘yicha tartiblang.
Tartiblangan listni teskari tartibga keltiring.

Darsimiz shu bilan tugadi, keyingi darsda esa Python: Tuple: Tushuncha, packing/unpacking, Tuple operatsiyalari mavzusini o‘rganamiz. Savollaringiz bo‘lsa, yozib qoldiring yoki keyingi darsda so‘rang! 😊


6. Qayta ko'rib chiqish va savollar (10 daqiqa)
Ajoyib! Endi bir oz o'rganganlarimizi qayta ko'rib chiqamiz.. Bugungi darsda nimalarni o‘rgandik? Kim aytib bera oladi?

Nested listlar nima va ular qayerda ishlatiladi?
List comprehension qanday ishlaydi va u qachon foydali?
sort() va reverse() metodlari qanday ishlaydi?

Qandaydir tushunmovchilik bo‘ldimi? Savollaringiz bormi? (O‘quvchilar savollarini eshitaman va tushuntiraman.) 😊




