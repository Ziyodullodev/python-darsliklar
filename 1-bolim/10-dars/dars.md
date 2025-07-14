📚 Darsning mavzusi: If…Else: Shartli operatorlar, Nested if, ternary operator
Qisqacha vaqt taqsimoti
Qism
Davomiyligi
Kirish va Shartli operatorlar
20 daqiqa
Nested if
25 daqiqa
Ternary operator
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
1. Kirish va Shartli operatorlar (20 daqiqa)
Assalomu alaykum, yosh dasturchilar! 😊 Bugun biz Python’da shartli operatorlar haqida o‘rganamiz. Shartli operatorlar, ya’ni if, else, elif, nested if va ternary operatorlarni ko‘rib chiqamiz. Bu operatorlar dasturimizda qaror qabul qilish uchun juda muhim.

Shartli operatorlar biror shartni tekshiradi va shartga qarab turli xil harakatlar bajaradi. Asosiy tuzilma if operatori bilan boshlanadi. Sintaksis quyidagicha:

if shart:

    # Agar shart to‘g‘ri bo‘lsa, bu kod ishlaydi

Mana, oddiy misol:

yosh = 18

if yosh >= 18:

    print("Siz voyaga yetgansiz!")

Agar shart noto‘g‘ri bo‘lsa, else bloki ishlaydi:

yosh = 15

if yosh >= 18:

    print("Siz voyaga yetgansiz!")

else:

    print("Siz hali voyaga yetmagansiz!")

Natija:

Siz hali voyaga yetmagansiz!

Agar bir nechta shartni tekshirish kerak bo‘lsa, elif (else if) ishlatamiz:

baholar = 85

if baholar >= 90:

    print("A’lo!")

elif baholar >= 80:

    print("Yaxshi!")

elif baholar >= 70:

    print("Qoniqarli!")

else:

    print("Yomon!")

Natija:

Yaxshi!

Shartlarda odatda taqqoslash operatorlaridan foydalanamiz: ==, !=, >, <, >=, <=. Shuningdek, and, or, not operatorlari yordamida bir nechta shartni birlashtirish mumkin:

yosh = 16

if yosh >= 13 and yosh <= 19:

    print("Siz o‘smirsiz!")

Keling, bir savol: if va else qachon ishlatiladi deb o‘ylaysiz?

Mashq: son = 10 o‘zgaruvchisi bilan:

Agar son juft bo‘lsa, “Juft son” deb chiqaring.
Aks holda, “Toq son” deb chiqaring.

5 daqiqa vaqt beraman!


2. Nested if (25 daqiqa)
Endi ichma-ich shartli operatorlar, ya’ni nested if haqida gaplashamiz! Nested if — bu bir if ichida boshqa if shartlarini ishlatish. Bu murakkab shartlarni tekshirishda foydali. Mana, misol:

yosh = 20

ball = 85

if yosh >= 18:

    print("Siz voyaga yetgansiz, ballni tekshiramiz...")

    if ball >= 80:

        print("Siz imtihondan o‘tdingiz!")

    else:

        print("Afsus, ballingiz yetmadi.")

else:

    print("Siz hali voyaga yetmagansiz!")

Natija:

Siz voyaga yetgansiz, ballni tekshiramiz...

Siz imtihondan o‘tdingiz!

Yuqoridagi misolda avval yoshni tekshirdik, keyin ichki if yordamida ballni tekshirdik. Nested if ko‘p darajali qaror qabul qilishda ishlatiladi. Ammo juda ko‘p ichma-ich shartlardan foydalanish kodni murakkablashtirishi mumkin, shuning uchun ehtiyot bo‘lish kerak.

Yana bir misol ko‘raylik:

son = 15

if son > 0:

    print("Son musbat")

    if son % 2 == 0:

        print("Va bu juft son!")

    else:

        print("Va bu toq son!")

else:

    print("Son musbat emas")

Natija:

Son musbat

Va bu toq son!

Mashq: son = 25 va baho = 75 o‘zgaruvchilari bilan:

Agar son musbat bo‘lsa, “Son musbat” deb chiqaring va:
Agar baho 70 dan katta bo‘lsa, “Baho yaxshi” deb chiqaring.
Aks holda, “Baho past” deb chiqaring.
Agar son musbat bo‘lmasa, “Son musbat emas” deb chiqaring.

5 daqiqa vaqt beraman!


3. Ternary operator (20 daqiqa)
Ajoyib, endi ternary operator haqida gaplashamiz! Ternary operator — bu if-else shartini bir qatorga sig‘dirib yozish usuli. Bu kodni qisqa va chiroyli qiladi. Sintaksis quyidagicha:

natija = qiymat1 if shart else qiymat2

Mana, oddiy misol:

yosh = 20

xabar = "Voyaga yetgan" if yosh >= 18 else "Voyaga yetmagan"

print(xabar)  # Voyaga yetgan

Yuqoridagi kodni oddiy if-else bilan yozsak:

yosh = 20

if yosh >= 18:

    xabar = "Voyaga yetgan"

else:

    xabar = "Voyaga yetmagan"

print(xabar)

Ternary operator bir xil natija beradi, lekin ancha qisqa. Yana bir misol:

son = 10

natija = "Juft" if son % 2 == 0 else "Toq"

print(natija)  # Juft

Ternary operator faqat ikkita holatni tekshirish uchun ishlatiladi. Agar elif kabi bir nechta shart kerak bo‘lsa, oddiy if-elif-else dan foydalanish yaxshiroq.

Ternary operatorni ichma-ich ishlatish ham mumkin, lekin bu kodni o‘qishni qiyinlashtiradi:

son = 15

natija = "Musbat" if son > 0 else "Manfiy" if son < 0 else "Nol"

print(natija)  # Musbat

Mashq: ball = 80 o‘zgaruvchisi bilan:

Ternary operator yordamida: agar ball 75 dan katta bo‘lsa, “O‘tdi” deb, aks holda “O‘tmadi” deb chiqaring.

5 daqiqa vaqt beraman!


4. Amaliy mashqlar (25 daqiqa)
Endi o‘rganganlarimizni amalda sinab ko‘ramiz! Quyidagi mashqlarni qilamiz:
Mashq 1: Shartli operatorlar
raqam = 7 o‘zgaruvchisi bilan:
Agar raqam musbat bo‘lsa, “Musbat” deb chiqaring.
Agar raqam manfiy bo‘lsa, “Manfiy” deb chiqaring.
Agar raqam 0 bo‘lsa, “Nol” deb chiqaring.

raqam = 7

if raqam > 0:

    print("Musbat")

elif raqam < 0:

    print("Manfiy")

else:

    print("Nol")

Natija:

Musbat
Mashq 2: Nested if
yosh = 16 va baho = 90 o‘zgaruvchilari bilan:
Agar yosh 15 dan katta bo‘lsa, “Yosh yetarli” deb chiqaring va:
Agar baho 85 dan katta bo‘lsa, “A’lo baho” deb chiqaring.
Aks holda, “Baho past” deb chiqaring.
Aks holda, “Yosh yetarli emas” deb chiqaring.

yosh = 16

baho = 90

if yosh > 15:

    print("Yosh yetarli")

    if baho > 85:

        print("A’lo baho")

    else:

        print("Baho past")

else:

    print("Yosh yetarli emas")

Natija:

Yosh yetarli

A’lo baho
Mashq 3: Ternary operator
son = 12 o‘zgaruvchisi bilan:
Ternary operator yordamida: agar son 10 dan katta bo‘lsa, “Katta” deb, aks holda “Kichik” deb chiqaring.

son = 12

natija = "Katta" if son > 10 else "Kichik"

print(natija)  # Katta

Har bir mashq uchun 8-9 daqiqa vaqt beraman. Kodlarni yozib, natijalarni ekranga chiqaring!


5. Xulosa va uy vazifasi (20 daqiqa)
Ajoyib, yosh dasturchilar! 🎉 Bugun biz Python’da shartli operatorlar bilan ishlashni o‘rgandik: if, else, elif, nested if va ternary operatorlarni ko‘rdik. Bu operatorlar yordamida dasturimiz qaror qabul qila oladi va turli shartlarga mos harakatlar bajaradi.

Uyga vazifa sifatida quyidagini qiling:

son = 25 o‘zgaruvchisi bilan:
Agar son 20 dan katta bo‘lsa, “Katta son” deb chiqaring.
Agar son 10 va 20 orasida bo‘lsa, “O‘rtacha son” deb chiqaring.
Aks holda, “Kichik son” deb chiqaring.
yosh = 14 va ball = 70 o‘zgaruvchilari bilan:
Agar yosh 13 dan katta bo‘lsa, “Yosh mos” deb chiqaring va:
Agar ball 75 dan katta bo‘lsa, “Imtihondan o‘tdi” deb chiqaring.
Aks holda, “Imtihondan o‘tmadi” deb chiqaring.
Aks holda, “Yosh mos emas” deb chiqaring.
raqam = 8 o‘zgaruvchisi bilan:
Ternary operator yordamida: agar raqam juft bo‘lsa, “Juft raqam” deb, aks holda “Toq raqam” deb chiqaring.

Darsimiz shu bilan tugadi, keyingi darsda esa For Loop: Iteratsiya, range() funksiyasi, nested loops  mavzusini o‘rganamiz. Savollaringiz bo‘lsa, yozib qoldiring yoki keyingi darsda so‘rang! 😊


6. Qayta ko'rib chiqish va savollar (10 daqiqa)
Zo‘r ish qildingiz! Endi bir oz o'rganganlarimizi qayta ko'rib chiqamiz.. Bugungi darsda nimalarni o‘rgandik? Kim aytib bera oladi?

if, else, elif operatorlari qanday ishlaydi?
Nested if qachon foydali?
Ternary operatorning afzalligi nimada?

Qandaydir tushunmovchilik bo‘ldimi? Savollaringiz bormi? 😊



