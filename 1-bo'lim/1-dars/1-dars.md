📚 Darsning mavzusi: Python Sintaksisi: Izohlar, o‘zgaruvchilar, number, string, Boolean, casting
📚 Qisqacha vaqt taqsimoti
Qism
Davomiyligi
Kirish/Izohlar
25 daqiqa
O‘zgaruvchilar
25 daqiqa
Number (sonlar)
10 daqiqa
String (matnlar)
30 daqiqa
Boolean
15 daqiqa
Casting
15 daqiqa
Jami
120 daqiqa (2 soat)


Bu usul yoshlar uchun samarali, qiziqarli va tushunarli bo‘lib, o‘quvchilarni dars jarayoniga faolroq jalb qiladi.


📖 Darsning batafsil rejasi
1. Kirish va Izohlar (25 daqiqa)
Assalomu alaykum, yosh dasturchilar! 😊 Bugun biz Python dasturlash tilini o‘rganamiz, va bu juda qiziqarli bo‘ladi! Python — bu oson va ko‘p joyda ishlatiladigan til, masalan, o‘yinlar, veb-saytlar va hatto sun’iy intellekt yaratishda foydalaniladi. Bugun biz Python sintaksisining asoslarini o‘rganamiz: izohlar, o‘zgaruvchilar, sonlar, matnlar, Boolean va casting. Keling, birinchi qismdan boshlaymiz — izohlar nima?

Izohlar — bu dastur kodida o‘zimizga yoki boshqa dasturchilarga eslatma yozish uchun ishlatiladigan qismlar. Ular kodni tushunishni osonlashtiradi, lekin dastur ishlaganda bu izohlar e’tiborga olinmaydi. Python’da izoh yozish uchun # belgisidan foydalanamiz. Mana, misol keltiraman:

# Bu mening birinchi Python kodim

print("Salom, dunyo!")  # Bu yerda "Salom, dunyo!" so‘zini ekranga chiqaraman

Buni ekranga chiqarsak, faqat Salom, dunyo! so‘zi ko‘rinadi, chunki # dan keyingi qism dastur tomonidan o‘qilmaydi. Izohlar ko‘p qatorli bo‘lishi uchun ''' yoki """ belgilardan foydalansak ham bo‘ladi. Mana, bunday:

'''

Bu ko‘p qatorli izoh.

Men bu yerda kodimni tushuntiraman.

'''

print("Ko‘p qatorli izohdan keyin ishlaydi!")

Izohlar yozish odat tusiga kirishi kerak, chunki bu sizning kodingizni boshqalarga tushunarli qiladi. Masalan, bir oy o‘tib o‘zingiz qaytib ko‘rsangiz, ‘bu kod nima qiladi ekan?’ deb o‘ylamasligingiz uchun! 😄 Keling, bir savol: kim menga izoh yozishning foydasini aytib bera oladi?

Endi bir amaliy mashq qilamiz: har biringiz Python’da o‘z ismingizni ekranga chiqaradigan kod yozing va unga izoh qo‘shing. Masalan:

# Mening ismimni ekranga chiqarish

print("Mening ismim Ali")

5 daqiqa vaqt beraman, yozib ko‘ring!


2. O‘zgaruvchilar (25 daqiqa)
Ajoyib, endi keyingi qismga o‘tamiz — o‘zgaruvchilar! O‘zgaruvchilar nima deb o‘ylaysiz? 🤔 Bu xuddi quti kabi: biz unga biror narsani solib qo‘yamiz, keyin kerak bo‘lganda foydalanamiz. Python’da o‘zgaruvchi yaratish uchun = belgisidan foydalanamiz. Mana, misol:

ism = "Ali"  # ism o‘zgaruvchisiga "Ali" so‘zini saqladim

yosh = 15    # yosh o‘zgaruvchisiga 15 sonini saqladim

print(ism)   # Ali

print(yosh)  # 15

O‘zgaruvchilarning bir nechta qoidasi bor:

O‘zgaruvchi nomi harf yoki pastki chiziq _ bilan boshlanishi kerak. Masalan, ism yoki _son.
O‘zgaruvchi nomi raqam bilan boshlanmasligi kerak, masalan, 1son noto‘g‘ri.
O‘zgaruvchi nomida bo‘sh joy bo‘lmaydi, o‘rniga _ ishlatiladi, masalan, ism_familiya.
Python’da katta-kichik harflar farqlanadi, ya’ni ism va ISM — bu ikki xil o‘zgaruvchi.

Keling, bir misol ko‘ramiz:

# O‘zgaruvchilar yaratish

ism = "Nodir"

yosh = 16

print("Mening ismim", ism, "va men", yosh, "yoshdaman.")

Bu kod ekranga Mening ismim Nodir va men 16 yoshdaman. deb chiqaradi. O‘zgaruvchilarning qiymatini o‘zgartirish ham mumkin:

yosh = 16

yosh = 17  # Endi yosh 17 bo‘ldi

print(yosh)  # 17

Endi siz sinab ko‘ring: o‘z ismingiz va yoshingizni o‘zgaruvchilarga saqlab, ekranga chiqaring. 5 daqiqa vaqt beraman!


3. Number (Sonlar) (10 daqiqa)
Ajoyib, endi sonlar haqida gaplashamiz! Python’da sonlar ikki xil bo‘ladi: butun sonlar (integer) va o‘nli sonlar (float). Masalan:

butun_son = 10    # Integer

onli_son = 3.14   # Float

print(butun_son)  # 10

print(onli_son)   # 3.14

Sonlar bilan matematik amallar qilish mumkin: qo‘shish, ayirish, ko‘paytirish, bo‘lish. Mana, misol:

a = 5

b = 3

print(a + b)  # 8

print(a - b)  # 2

print(a * b)  # 15

print(a / b)  # 1.666...

Python’da bo‘lishda // ishlatilsa, faqat butun qismi olinadi, % esa qoldiqni beradi:

print(5 // 2)  # 2 (butun qism)

print(5 % 2)   # 1 (qoldiq)

Tez mashq: 10 va 4 sonlarini qo‘shib, ayirib, ko‘paytirib va bo‘lib ko‘ring. Natijani ekranga chiqaring! 3 daqiqa vaqt beraman.


4. String (Matnlar) (30 daqiqa)
Endi string, ya’ni matnlar haqida o‘rganamiz! String — bu harflar, so‘zlar yoki jumlalar. Ular ' yoki " belgilari ichida yoziladi. Mana, misol:

ism = "Zilola"

print(ism)  # Zilola

Stringlar bilan ko‘p narsa qilish mumkin. Masalan, birlashtirish (konkatenatsiya):

ism = "Sardor"

salom = "Salom, " + ism + "!"

print(salom)  # Salom, Sardor!

Stringlarda harflarni katta yoki kichik qilish uchun metodlar bor:

matn = "salom, dunyo!"

print(matn.upper())  # SALOM, DUNYO!

print(matn.lower())  # salom, dunyo!

print(matn.capitalize())  # Salom, dunyo!

String uzunligini bilish uchun len() funksiyasi ishlatiladi:

matn = "Python"

print(len(matn))  # 6

Stringlardan bir qismini olish uchun indekslardan foydalanamiz. Indeks 0 dan boshlanadi:

matn = "Salom"

print(matn[0])  # S

print(matn[1])  # a

print(matn[0:3])  # Sal

Amaliy mashq: O‘z ismingizni o‘zgaruvchiga saqlang, uni katta harfga aylantiring, uzunligini toping va birinchi harfini ekranga chiqaring. 7 daqiqa vaqt beraman!


5. Boolean (15 daqiqa)
Endi Boolean haqida gaplashamiz! Boolean — bu faqat ikkita qiymat oladigan ma’lumot turi: True (rost) yoki False (yolg‘on). Ular shartlarni tekshirishda ishlatiladi. Mana, misol:

a = 5

b = 3

print(a > b)  # True

print(a < b)  # False

print(a == b)  # False (tenglik uchun == ishlatiladi)

Boolean qiymatlarni o‘zgaruvchilarga saqlash ham mumkin:

yoshim_18dan_katta = True

print(yoshim_18dan_katta)  # True

Boolean qiymatlar ko‘pincha if shartlarida ishlatiladi:

yosh = 16

if yosh >= 18:

    print("Siz katta yoshlisiz!")

else:

    print("Siz hali kichiksiz!")

Tez mashq: O‘z yoshingizni o‘zgaruvchiga saqlang va yoshingiz 18 dan katta yoki kichik ekanligini tekshirib, natijani ekranga chiqaring. 5 daqiqa vaqt beraman.


6. Casting (15 daqiqa)
Oxirgi qismimiz — casting! Casting — bu ma’lumot turini boshqa turga aylantirish. Masalan, stringni songa aylantirish kerak bo‘lsa:

matn = "123"

son = int(matn)  # Stringni songa aylantirdik

print(son + 5)  # 128

Python’da asosiy casting funksiyalari:

int() — butun songa aylantiradi.
float() — o‘nli songa aylantiradi.
str() — stringga aylantiradi.

Mana, misollar:

# Stringdan songa

son = int("10")

print(son + 5)  # 15

# Sondan stringga

son = 20

matn = str(son)

print("Mening yoshim: " + matn)  # Mening yoshim: 20

# O‘nli songa aylantirish

son = float("3.14")

print(son + 1)  # 4.14

E’tibor bering: agar stringni songa aylantirmoqchi bo‘lsangiz, unda faqat raqamlar bo‘lishi kerak, aks holda xato chiqadi. Masalan:

son = int("abc")  # Xato! "abc" ni songa aylantirib bo‘lmaydi

Oxirgi mashq: yosh = "15" o‘zgaruvchisini songa aylantiring va unga 5 qo‘shib, natijani ekranga chiqaring. 5 daqiqa vaqt beraman!


Xulosa va qo‘shimcha maslahatlar
Ajoyib, yosh dasturchilar! 🎉 Bugun biz Python sintaksisining asoslarini o‘rgandik: izohlar yozishni, o‘zgaruvchilar bilan ishlashni, sonlar, matnlar, Boolean va castingni ko‘rdik. Bu bilimlar sizga dasturlashda katta yordam beradi.

Uyga vazifa sifatida quyidagini qiling:

O‘z ismingiz, yoshingiz va sevimli rangingizni o‘zgaruvchilarga saqlang.
Ularni birlashtirib, “Mening ismim [ism], men [yosh] yoshdaman, sevimli rangim [rang]!” shaklida ekranga chiqaring.
Yoshni stringdan songa aylantirib, unga 1 qo‘shing va natijani ekranga chiqaring.

Darsimiz shu bilan tugadi, keyingi darsda esa Pythonda Amallar: Arifmetik, mantiqiy, solishtirish mavzusini o‘rganamiz. Savollaringiz bo‘lsa, yozib qoldiring yoki keyingi darsda so‘rang! 😊





