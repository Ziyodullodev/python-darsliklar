📚 Darsning mavzusi: Python: Dictionary: Kalit-qiymat juftligi, looplar orqali iteratsiya, get() metodi
Qisqacha vaqt taqsimoti
Qism
Davomiyligi
Kirish va Kalit-qiymat juftligi
20 daqiqa
Looplar orqali iteratsiya
25 daqiqa
get() metodi
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
1. Kirish va Kalit-qiymat juftligi (20 daqiqa)
Assalomu alaykum, yosh dasturchilar! 😊 Bugun biz Python’da lug‘atlar, ya’ni dictionary’lar bilan ishlashning bir qancha usullarini o‘rganamiz. Avvalgi darslarda dictionary’lar bilan tanishgan edik, endi esa kalit-qiymat juftliklari, looplar orqali iteratsiya va get() metodini ko‘rib chiqamiz. Bu usullar dictionary’lar bilan ishlashni yanada samarali qiladi.

Dictionary — bu kalit (key) va qiymat (value) juftliklaridan iborat ma’lumot turi. Ular {} jingalak qavslar ichida yoziladi, kalit va qiymat : bilan ajratiladi. Dictionary’da kalitlar o‘ziga xos bo‘lishi kerak, lekin qiymatlar takrorlanishi mumkin. Mana, oddiy misol:

talaba = {"ism": "Ali", "yosh": 15, "sinf": "9-sinf"}

print(talaba)  # {'ism': 'Ali', 'yosh': 15, 'sinf': '9-sinf'}

Kalitlar odatda string yoki son bo‘ladi, qiymatlar esa har qanday turda bo‘lishi mumkin: string, son, list, hatto boshqa dictionary! Dictionary’lar o‘zgaruvchan (mutable), ya’ni ularni o‘zgartirish mumkin.

Dictionary’dagi elementlarga kalit orqali murojaat qilamiz:

print(talaba["ism"])  # Ali

print(talaba["yosh"])  # 15

Agar kalit mavjud bo‘lmasa, xato chiqadi:

print(talaba["baholar"])  # KeyError: 'baholar'

Dictionary’ning uzunligini len() funksiyasi yordamida topish mumkin:

print(len(talaba))  # 3

Keling, bir savol: dictionary’da kalit va qiymat juftligi nima uchun kerak deb o‘ylaysiz? (O‘quvchilar javobini kutaman.)

Mashq: O‘zingiz haqingizda dictionary yarating (ism, yosh, sevimli dars) va:

Ismingizni ekranga chiqaring.
Dictionary uzunligini ekranga chiqaring.

5 daqiqa vaqt beraman!


2. Looplar orqali iteratsiya (25 daqiqa)
Endi dictionary’lar ustida looplar yordamida qanday ishlashni o‘rganamiz! Dictionary’da elementlarni birma-bir ko‘rib chiqish uchun for tsiklidan foydalanamiz. Dictionary’da iteratsiya qilishning bir nechta usuli bor.
Faqat kalitlar ustida yurish
Agar for tsiklida dictionary’ni to‘g‘ridan-to‘g‘ri ishlatsak, u faqat kalitlar bo‘yicha yuradi:

talaba = {"ism": "Ali", "yosh": 15, "sinf": "9-sinf"}

for kalit in talaba:

    print(kalit)

Natija:

ism

yosh

sinf

Kalitlar yordamida qiymatlarga murojaat qilish mumkin:

for kalit in talaba:

    print(f"{kalit}: {talaba[kalit]}")

Natija:

ism: Ali

yosh: 15

sinf: 9-sinf
keys(), values() va items() metodlari
Dictionary’da maxsus metodlar yordamida ham iteratsiya qilish mumkin:

keys() — faqat kalitlarni qaytaradi.
values() — faqat qiymatlarni qaytaradi.
items() — kalit-qiymat juftliklarini qaytaradi.

Mana, misollar:

# Faqat kalitlar

for kalit in talaba.keys():

    print(kalit)

# Faqat qiymatlar

for qiymat in talaba.values():

    print(qiymat)

Natija:

ism

yosh

sinf

Ali

15

9-sinf

items() metodi yordamida kalit va qiymatni birga olish eng qulay usul:

for kalit, qiymat in talaba.items():

    print(f"{kalit}: {qiymat}")

Natija:

ism: Ali

yosh: 15

sinf: 9-sinf

items() metodidan foydalanganda, har bir iteratsiyada kalit va qiymatni alohida o‘zgaruvchilarga unpacking qilamiz. Bu juda qulay!

Mashq: {"meva": "olma", "narxi": 5000, "rang": "qizil"} dictionary’si bilan:

Faqat qiymatlarni loop yordamida ekranga chiqaring.
Kalit va qiymatlarni birga loop yordamida ekranga chiqaring.

5 daqiqa vaqt beraman!


3. get() metodi (20 daqiqa)
Ajoyib, endi get() metodi haqida gaplashamiz! get() metodi dictionary’dan qiymatni olishning xavfsiz usuli. Agar kalit mavjud bo‘lmasa, KeyError xatosi chiqarish o‘rniga, standart qiymat qaytaradi. Sintaksis: dictionary.get(kalit, standart_qiymat). Mana, misol:

mahsulot = {"nomi": "telefon", "narxi": 1000000}

print(mahsulot.get("nomi"))  # telefon

print(mahsulot.get("rang"))  # None (kalit yo‘q, standart qiymat sifatida None qaytadi)

Standart qiymatni o‘zimiz belgilashimiz mumkin:

print(mahsulot.get("rang", "Mavjud emas"))  # Mavjud emas

get() metodi kalit mavjudligini tekshirish va xatolardan qochish uchun juda foydali. Masalan, agar foydalanuvchi kiritgan kalit dictionary’da bo‘lmasa, xato o‘rniga foydali xabar chiqarish mumkin:

kalit = "model"

natija = mahsulot.get(kalit, f"{kalit} haqida ma’lumot topilmadi")

print(natija)  # model haqida ma’lumot topilmadi

get() metodidan foydalanmasdan, if sharti bilan ham tekshirish mumkin, lekin get() qisqaroq va qulayroq:

# get() siz

if "narxi" in mahsulot:

    print(mahsulot["narxi"])

else:

    print("Narx topilmadi")

# get() bilan

print(mahsulot.get("narxi", "Narx topilmadi"))

Mashq: {"ism": "Zilola", "yosh": 14} dictionary’si bilan:

"yosh" qiymatini get() yordamida oling va ekranga chiqaring.
"sinf" qiymatini olishga harakat qiling, agar topilmasa, "Sinf belgilanmagan" deb chiqaring.

5 daqiqa vaqt beraman!


4. Amaliy mashqlar (25 daqiqa)
Endi o‘rganganlarimizni amalda sinab ko‘ramiz! Quyidagi mashqlarni qilamiz:
Mashq 1: Kalit-qiymat juftligi
O‘zingiz haqingizda dictionary yarating (ism, yosh, sevimli rang, sevimli dars).
Sevimli rangingizni ekranga chiqaring.
Dictionary uzunligini ekranga chiqaring.

shaxs = {"ism": "Sardor", "yosh": 16, "rang": "qizil", "dars": "Matematika"}

print(shaxs["rang"])  # qizil

print(len(shaxs))  # 4
Mashq 2: Looplar orqali iteratsiya
{"fan": "Informatika", "baho": 90, "o‘qituvchi": "Gulnoza"} dictionary’si bilan:
Faqat kalitlarni loop yordamida ekranga chiqaring.
Kalit va qiymatlarni birga loop yordamida ekranga chiqaring.

dars = {"fan": "Informatika", "baho": 90, "o‘qituvchi": "Gulnoza"}

for kalit in dars:

    print(kalit)

print("---")

for kalit, qiymat in dars.items():

    print(f"{kalit}: {qiymat}")

Natija:

fan

baho

o‘qituvchi

---

fan: Informatika

baho: 90

o‘qituvchi: Gulnoza
Mashq 3: get() metodi
{"mahsulot": "kitob", "narxi": 20000} dictionary’si bilan:
"narxi" qiymatini get() yordamida oling va ekranga chiqaring.
"muallif" qiymatini olishga harakat qiling, agar topilmasa, "Muallif noma’lum" deb chiqaring.

mahsulot = {"mahsulot": "kitob", "narxi": 20000}

print(mahsulot.get("narxi"))  # 20000

print(mahsulot.get("muallif", "Muallif noma’lum"))  # Muallif noma’lum

Har bir mashq uchun 8-9 daqiqa vaqt beraman. Kodlarni yozib, natijalarni ekranga chiqaring!


5. Xulosa va uy vazifasi (20 daqiqa)
Ajoyib, yosh dasturchilar! 🎉 Bugun biz Python’da dictionary’lar bilan ishlashning muhim usullarini o‘rgandik: kalit-qiymat juftliklari, looplar orqali iteratsiya va get() metodini ko‘rdik. Bu usullar dictionary’lar bilan ishlashni ancha qulay va xavfsiz qiladi.

Uyga vazifa sifatida quyidagini qiling:

O‘zingiz haqingizda dictionary yarating (ism, yosh, sevimli kitob, sevimli fan).
Sevimli faningizni ekranga chiqaring.
Dictionary uzunligini ekranga chiqaring.
{"meva": "olma", "narxi": 5000, "rang": "qizil"} dictionary’si bilan:
Faqat qiymatlarni loop yordamida ekranga chiqaring.
Kalit va qiymatlarni birga loop yordamida ekranga chiqaring.
{"fan": "Matematika", "baho": 95} dictionary’si bilan:
"baho" qiymatini get() yordamida oling va ekranga chiqaring.
"o‘qituvchi" qiymatini olishga harakat qiling, agar topilmasa, "O‘qituvchi noma’lum" deb chiqaring.

Darsimiz shu bilan tugadi, keyingi darsda esa If…Else: Shartli operatorlar, Nested if, ternary operator mavzusini o‘rganamiz. Savollaringiz bo‘lsa, yozib qoldiring yoki keyingi darsda so‘rang! 😊


6. Qayta ko'rib chiqish va savollar (10 daqiqa)
Ajoyib, Bugungi darsda nimalarni o‘rgandik? Kim aytib bera oladi?

Dictionary’da kalit-qiymat juftligi qanday ishlatiladi?
Dictionary’da looplar orqali qanday iteratsiya qilish mumkin?
get() metodining afzalligi nimada?

Darsimiz shu bilan tugadi, keyingi darsda esa shartli operatorlar va tsikllarni o‘rganamiz. Savollaringiz bo‘lsa, yozib qoldiring yoki keyingi darsda so‘rang! 😊



