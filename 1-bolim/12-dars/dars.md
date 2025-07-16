📚 Darsning mavzusi: For Loop: Iteratsiya, range() funksiyasi, nested loops
Qisqacha vaqt taqsimoti
Qism
Davomiyligi
Kirish va Iteratsiya
20 daqiqa
range() funksiyasi
25 daqiqa
Nested loops
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
1. Kirish va Iteratsiya (20 daqiqa)
Assalomu alaykum, yosh dasturchilar! 😊 Bugun biz Python’da for loop’lari haqida o‘rganamiz. For loop yordamida iteratsiya qilish, range() funksiyasi va ichma-ich (nested) loop’larni ko‘rib chiqamiz. Loop’lar dasturda takroriy harakatlarni bajarish uchun ishlatiladi va juda muhim.

for loop ro‘yxat, string yoki boshqa iterable (ya’ni birma-bir ko‘rib chiqiladigan) obyektlar ustida ishlaydi. Sintaksis quyidagicha:

for o‘zgaruvchi in iterable:

    # Har bir element uchun bu kod ishlaydi

Mana, oddiy misol — ro‘yxat elementlarini ekranga chiqarish:

mevalar = ["olma", "banan", "anor"]

for meva in mevalar:

    print(meva)

Natija:

olma

banan

anor

for loop yordamida stringlar bo‘yicha ham yurish mumkin:

matn = "Salom"

for harf in matn:

    print(harf)

Natija:

S

a

l

o

m

for loop iterable obyektning har bir elementini birma-bir oladi va o‘zgaruvchiga yuklaydi, so‘ng kod bloki ishlaydi. Bu jarayon iteratsiya deb ataladi.

Keling, bir savol: for loop qachon ishlatiladi deb o‘ylaysiz?

Mashq: ranglar = ["qizil", "yashil", "ko‘k"] ro‘yxati bilan:

Har bir rangni ekranga chiqaring.
Har bir rangni “Mening sevimli rangim: [rang]” shaklida chiqaring.

5 daqiqa vaqt beraman!


2. range() funksiyasi (25 daqiqa)
Endi range() funksiyasi haqida gaplashamiz! range() funksiyasi for loop bilan birgalikda sonlar ketma-ketligini yaratish uchun ishlatiladi. Sintaksis quyidagicha: range(boshlang‘ich, oxirgi, qadam). Oxirgi qiymat kirmaydi.

Mana, oddiy misol:

for i in range(5):  # 0 dan 4 gacha (5 kirmaydi)

    print(i)

Natija:

0

1

2

3

4

range() funksiyasida boshlang‘ich qiymatni ham belgilash mumkin:

for i in range(2, 6):  # 2 dan 5 gacha

    print(i)

Natija:

2

3

4

5

Qadam (step) parametri yordamida har qadamda qancha oshirishni belgilash mumkin:

for i in range(1, 10, 2):  # 1 dan 9 gacha, har ikkinchi son

    print(i)

Natija:

1

3

5

7

9

range() funksiyasi bilan teskari tartibda ham yurish mumkin, buning uchun qadam sifatida manfiy son beramiz:

for i in range(5, 0, -1):  # 5 dan 1 gacha

    print(i)

Natija:

5

4

3

2

1

range() funksiyasi ko‘pincha takroriy harakatlar sonini belgilashda ishlatiladi. Masalan, 5 marta “Salom” so‘zini chiqarish:

for i in range(5):

    print("Salom")

Mashq: range() yordamida:

1 dan 10 gacha bo‘lgan sonlarni ekranga chiqaring.
10 dan 1 gacha bo‘lgan sonlarni teskari tartibda ekranga chiqaring.

5 daqiqa vaqt beraman!


3. Nested loops (20 daqiqa)
Ajoyib, endi ichma-ich loop’lar, ya’ni nested loops haqida gaplashamiz! Nested loop — bu bir for loop ichida boshqa for loop ishlatish. Bu ko‘p darajali takroriy harakatlar uchun foydali. Mana, misol:

for i in range(3):

    for j in range(2):

        print(f"i={i}, j={j}")

Natija:

i=0, j=0

i=0, j=1

i=1, j=0

i=1, j=1

i=2, j=0

i=2, j=1

Yuqoridagi misolda tashqi loop (i) 3 marta, ichki loop (j) har bir tashqi loop uchun 2 marta ishlaydi. Umumiy iteratsiyalar soni: 3 * 2 = 6.

Nested loop’lar ko‘pincha jadval yoki matritsalar bilan ishlashda ishlatiladi. Masalan, yulduzcha yordamida 3x3 kvadrat chizaylik:

for i in range(3):

    for j in range(3):

        print("*", end=" ")

    print()  # Yangi qatorga o‘tish

Natija:

* * * 

* * * 

* * * 

Nested loop’lardan foydalanganda ehtiyot bo‘lish kerak, chunki juda ko‘p ichma-ich loop’lar dasturni sekinlashtirishi mumkin.

Mashq: Nested loop yordamida:

4 qator va 5 ustundan iborat “#” belgilari jadvagini chizdiring.
1 dan 3 gacha bo‘lgan sonlar uchun har bir sonni 1 dan 2 gacha bo‘lgan sonlar bilan juftlik sifatida chiqaring (masalan, (1, 1), (1, 2), ...).

5 daqiqa vaqt beraman!


4. Amaliy mashqlar (25 daqiqa)
Endi o‘rganganlarimizni amalda sinab ko‘ramiz! Quyidagi mashqlarni qilamiz:
Mashq 1: Iteratsiya
sozlar = ["kitob", "ruchka", "daftar"] ro‘yxati bilan:
Har bir so‘zni ekranga chiqaring.
Har bir so‘zni “Mening buyumim: [so‘z]” shaklida chiqaring.

sozlar = ["kitob", "ruchka", "daftar"]

for soz in sozlar:

    print(soz)

print("---")

for soz in sozlar:

    print(f"Mening buyumim: {soz}")

Natija:

kitob

ruchka

daftar

---

Mening buyumim: kitob

Mening buyumim: ruchka

Mening buyumim: daftar
Mashq 2: range() funksiyasi
range() yordamida:
5 dan 15 gacha bo‘lgan sonlarni ekranga chiqaring.
20 dan 10 gacha bo‘lgan juft sonlarni teskari tartibda ekranga chiqaring.

for i in range(5, 16):

    print(i)

print("---")

for i in range(20, 9, -2):

    print(i)

Natija:

5

6

7

8

9

10

11

12

13

14

15

---

20

18

16

14

12

10
Mashq 3: Nested loops
Nested loop yordamida:
5 qator va 4 ustundan iborat “$” belgilari jadvagini chizdiring.
1 dan 2 gacha bo‘lgan sonlar uchun har bir sonni 1 dan 3 gacha bo‘lgan sonlar bilan juftlik sifatida chiqaring (masalan, (1, 1), (1, 2), ...).

for i in range(5):

    for j in range(4):

        print("$", end=" ")

    print()

print("---")

for i in range(1, 3):

    for j in range(1, 4):

        print(f"({i}, {j})")

Natija:

$ $ $ $ 

$ $ $ $ 

$ $ $ $ 

$ $ $ $ 

$ $ $ $ 

---

(1, 1)

(1, 2)

(1, 3)

(2, 1)

(2, 2)

(2, 3)

Har bir mashq uchun 8-9 daqiqa vaqt beraman. Kodlarni yozib, natijalarni ekranga chiqaring!


5. Xulosa va uy vazifasi (20 daqiqa)
Ajoyib, yosh dasturchilar! 🎉 Bugun biz Python’da for loop’lari bilan ishlashni o‘rgandik: iteratsiya qilish, range() funksiyasi va nested loop’larni ko‘rdik. Bu loop’lar yordamida takroriy harakatlarni osonlikcha bajarish mumkin.

Uyga vazifa sifatida quyidagini qiling:

mevalar = ["uzum", "nok", "banan"] ro‘yxati bilan:
Har bir mevani “Sevimli mevam: [meva]” shaklida chiqaring.
range() yordamida:
3 dan 12 gacha bo‘lgan toq sonlarni ekranga chiqaring.
15 dan 5 gacha bo‘lgan sonlarni teskari tartibda ekranga chiqaring.
Nested loop yordamida:
3 qator va 5 ustundan iborat “@” belgilari jadvagini chizdiring.
1 dan 3 gacha bo‘lgan sonlar uchun har bir sonni 1 dan 4 gacha bo‘lgan sonlar bilan juftlik sifatida chiqaring (masalan, (1, 1), (1, 2), ...).

Darsimiz shu bilan tugadi, keyingi darsda esa While Loop: Cheksiz looplar, break, continue, else bilan loop mavzusini o‘rganamiz. Savollaringiz bo‘lsa, yozib qoldiring yoki keyingi darsda so‘rang!


6. Qayta ko'rib chiqamiz va savollar (10 daqiqa)
Ajoyib! Endi bir oz o'rganganlarimizi qayta ko'rib chiqamiz.. Bugungi darsda nimalarni o‘rgandik? Kim aytib bera oladi?

for loop qanday ishlaydi va u qachon ishlatiladi?
range() funksiyasi qanday ishlaydi va uning parametrlari nimalardan iborat?
Nested loop’lar qachon foydali?

Qandaydir tushunmovchilik bo‘ldimi? Savollaringiz bormi? 😊



