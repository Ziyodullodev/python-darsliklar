📚 Darsning mavzusi: Python’da Amallar: Arifmetik, mantiqiy, solishtirish
Qisqacha vaqt taqsimoti
Qism
Davomiyligi
Kirish/Arifmetik amallar
25 daqiqa
Mantiqiy amallar
25 daqiqa
Solishtirish amallari
10 daqiqa
Amaliy mashqlar
30 daqiqa
Qayta ko'rib chiqish va savollar
15 daqiqa
Xulosa va uy vazifasi
15 daqiqa
Jami
120 daqiqa (2 soat)


Bu usul yoshlar uchun samarali, qiziqarli va tushunarli bo‘lib, o‘quvchilarni dars jarayoniga faolroq jalb qiladi.


📖 Darsning batafsil rejasi
1. Kirish va Arifmetik amallar (25 daqiqa)
Assalomu alaykum, yosh dasturchilar! 😊 Bugun biz Python’da amallar haqida o‘rganamiz: arifmetik, mantiqiy va solishtirish amallari. Bu amallar dasturlashda juda muhim, chunki ular yordamida hisob-kitoblar qilamiz, shartlarni tekshiramiz va qarorlar qabul qilamiz. Keling, birinchi bo‘lib arifmetik amallardan boshlaymiz!

Arifmetik amallar — bu matematikada o‘rgangan oddiy amallar: qo‘shish, ayirish, ko‘paytirish, bo‘lish va boshqalar. Python’da bu amallar quyidagi belgilardan foydalanadi:

+ — qo‘shish
- — ayirish
* — ko‘paytirish
/ — bo‘lish
// — butun bo‘lish (faqat butun qismini oladi)
% — qoldiqni olish
** — darajaga ko‘tarish

Mana, misollar bilan ko‘raylik:

a = 10

b = 4

print(a + b)   # 14

print(a - b)   # 6

print(a * b)   # 40

print(a / b)   # 2.5

print(a // b)  # 2 (butun qism)

print(a % b)   # 2 (qoldiq)

print(a ** 2)  # 100 (10 ning kvadrati)

Bu amallar yordamida har qanday hisob-kitob qilish mumkin. Masalan, biror do‘konda xarid qilganingizda chegirma hisoblash uchun ishlatishingiz mumkin. Keling, bir misol ko‘ramiz:

# Do‘konda chegirma hisoblash

narx = 100

chegirma = 20

yakuniy_narx = narx - (narx * chegirma / 100)

print("Yakuniy narx:", yakuniy_narx)  # Yakuniy narx: 80.0

Bu yerda 100 so‘mlik mahsulotdan 20% chegirma qilindi, ya’ni 80 so‘m bo‘ldi. Arifmetik amallarni tushundingizmi? Keling, bir savol: 15 ni 4 ga bo‘lsak, qoldiq qancha bo‘ladi?

Endi bir mashq qilamiz: 50 va 7 sonlari bilan yuqoridagi barcha arifmetik amallarni bajarib, natijalarni ekranga chiqaring. 5 daqiqa vaqt beraman!


2. Mantiqiy amallar (25 daqiqa)
Zo‘r, endi mantiqiy amallarga o‘tamiz! Mantiqiy amallar — bu shartlarni birlashtirish yoki tekshirish uchun ishlatiladigan amallar. Python’da asosiy mantiqiy amallar:

and — "va" (ikkala shart ham rost bo‘lsa, natija rost)
or — "yoki" (kamida bitta shart rost bo‘lsa, natija rost)
not — "emas" (shartni teskarisiga aylantiradi)

Mana, misollar:

a = 5

b = 10

c = 3

# and amali

print(a < b and b > c)  # True (chunki 5 < 10 va 10 > 3)

print(a > b and b > c)  # False (chunki 5 > 10 emas)

# or amali

print(a < b or b < c)  # True (chunki 5 < 10, bu yetarli)

print(a > b or b < c)  # False (ikkalasi ham noto‘g‘ri)

# not amali

print(not a < b)  # False (chunki a < b rost, not uni teskari qiladi)

Mantiqiy amallar ko‘pincha if shartlarida ishlatiladi. Masalan, biror odamning yoshi 18 dan katta va u talaba bo‘lsa, chegirma berishni ko‘rib chiqaylik:

yosh = 20

talaba = True

if yosh >= 18 and talaba:

    print("Sizga 10% chegirma beriladi!")

else:

    print("Chegirma yo‘q.")

Bu kodda yosh 18 dan katta va talaba ekanligi tekshiriladi. Agar ikkala shart ham rost bo‘lsa, chegirma beriladi.

Endi siz sinab ko‘ring: o‘z yoshingiz va talabaligingiz haqida o‘zgaruvchilar yarating (masalan, talaba = True yoki False) va shunga mos chegirma berish haqida kod yozing. 5 daqiqa vaqt beraman!


3. Solishtirish amallari (10 daqiqa)
Ajoyib, endi solishtirish amallarini o‘rganamiz! Solishtirish amallari ikki qiymatni solishtirish uchun ishlatiladi va natija sifatida True yoki False qaytaradi. Python’da solishtirish amallari:

== — tenglik (ikkalasi tengmi?)
!= — teng emas
< — kichik
> — katta
<= — kichik yoki teng
>= — katta yoki teng

Mana, misollar:

a = 7

b = 4

print(a == b)  # False (7 teng emas 4 ga)

print(a != b)  # True (7 teng emas 4 ga)

print(a > b)   # True (7 katta 4 dan)

print(a < b)   # False

print(a >= b)  # True (7 katta yoki teng 4 ga)

print(a <= b)  # False

Solishtirish amallari ko‘pincha mantiqiy amallar bilan birga ishlatiladi. Masalan:

yosh = 16

print(yosh >= 18)  # False

Tez mashq: 12 va 8 sonlarini solishtirib, yuqoridagi barcha solishtirish amallarini ishlatib ko‘ring. Natijalarni ekranga chiqaring! 3 daqiqa vaqt beraman.


4. Amaliy mashqlar (30 daqiqa)
Endi o‘rganganlarimizni amalda sinab ko‘ramiz! Quyidagi mashqlarni qilamiz:
Mashq 1: Arifmetik amallar
2 ta son kiritib, ularga arifmetik amallar qo‘llang (qo‘shish, ayirish, ko‘paytirish, bo‘lish, qoldiq va daraja).
Masalan:

son1 = 25

son2 = 5

print("Qo‘shish:", son1 + son2)

print("Ayirish:", son1 - son2)

print("Ko‘paytirish:", son1 * son2)

print("Bo‘lish:", son1 / son2)

print("Qoldiq:", son1 % son2)

print("Daraja:", son1 ** 2)
Mashq 2: Mantiqiy va solishtirish amallari
Yosh va talabalik holatini tekshirib, quyidagi shartlarni yozing:
Agar yosh 18 dan katta bo‘lsa va talaba bo‘lsa, “Chegirma bor” deb chiqaring.
Agar yosh 18 dan kichik bo‘lsa yoki talaba bo‘lmasa, “Chegirma yo‘q” deb chiqaring.

yosh = 19

talaba = True

if yosh >= 18 and talaba:

    print("Chegirma bor")

else:

    print("Chegirma yo‘q")
Mashq 3: Kombinatsiya
3 ta son kiritib, ularning o‘rtacha qiymatini hisoblang va bu qiymat 50 dan katta yoki teng ekanligini tekshiring.

son1 = 60

son2 = 40

son3 = 50

orta = (son1 + son2 + son3) / 3

print("O‘rtacha:", orta)

print("50 dan katta yoki tengmi?", orta >= 50)

Har bir mashq uchun 10 daqiqa vaqt beraman. Kodlarni yozib, natijalarni ekranga chiqaring!


5. Qayta ko'rib chiqish va savollar (15 daqiqa)
Zo'r! Endi bir oz o'rganganlarimizi qayta ko'rib chiqamiz.. Bugungi darsda nimalarni o‘rgandik? Kim aytib bera oladi?

Arifmetik amallarni qanday ishlatishni o‘rgandik.
Mantiqiy amallar yordamida shartlarni qanday birlashtirishni bilib oldik.
Solishtirish amallari bilan qiymatlarni qanday taqqoslashni ko‘rdik.

Qandaydir tushunmovchilik bo‘ldimi? Savollaringiz bormi?


6. Xulosa va uy vazifasi (15 daqiqa)
Ajoyib, yosh dasturchilar! 🎉 Bugun biz Python’da arifmetik, mantiqiy va solishtirish amallarini o‘rgandik. Bu bilimlar sizga dasturlashda ko‘p yordam beradi, chunki ular har qanday dasturda asosiy hisob-kitoblar va shartlarni tekshirish uchun ishlatiladi.

Uyga vazifa sifatida quyidagini qiling:

2 ta son kiritib, ularga barcha arifmetik amallarni qo‘llab, natijalarni ekranga chiqaring.
Yosh va talabalik holatini tekshirib, chegirma berish haqida kod yozing (agar yosh 20 dan katta bo‘lsa va talaba bo‘lsa, chegirma berilsin).
4 ta son kiritib, ularning o‘rtacha qiymatini hisoblang va bu qiymat 75 dan katta ekanligini tekshiring.

Darsimiz shu bilan tugadi, keyingi darsda esa Python String Metodlar: Slicing, concatenation, upper(), lower(), replace() mavzusini o‘rganamiz. Savollaringiz bo‘lsa, yozib qoldiring yoki keyingi darsda so‘rang! 😊




