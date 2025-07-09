📚 Darsning mavzusi: Python: Set: Unique elements, union, intersection, difference operatsiyalari
Qisqacha vaqt taqsimoti
Qism
Davomiyligi
Kirish va Set tushunchasi
20 daqiqa
Unique elements va Set yaratish
20 daqiqa
Union, intersection, difference
25 daqiqa
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
1. Kirish va Set tushunchasi (20 daqiqa)
Assalomu alaykum, yosh dasturchilar! 😊 Bugun biz Python’da set’lar haqida o‘rganamiz. Set nima, uning o‘ziga xos elementlari, shuningdek union, intersection va difference operatsiyalarini ko‘rib chiqamiz. Set’lar dasturlashda muhim, chunki ular yordamida takrorlanmaydigan ma’lumotlarni saqlash va ular bilan matematik operatsiyalarni bajarish mumkin.

Set — bu takrorlanmaydigan elementlardan iborat to‘plam. Ular {} jingalak qavslar ichida yoziladi va elementlar vergul bilan ajratiladi. Set ichida bir xil element faqat bir marta bo‘ladi, takroriy elementlar avtomatik olib tashlanadi. Mana, oddiy misol:

sonlar = {1, 2, 2, 3, 4, 4}

print(sonlar)  # {1, 2, 3, 4}

Set’lar tartibsiz bo‘ladi, ya’ni elementlarning joylashuvi muhim emas va ularga indeks orqali murojaat qilib bo‘lmaydi. Set’lar o‘zgaruvchan (mutable), lekin ularning elementlari o‘zgarmas (immutable) bo‘lishi kerak, masalan, sonlar, stringlar yoki tuple’lar.

Set’ning uzunligini len() funksiyasi yordamida topish mumkin:

print(len(sonlar))  # 4

Keling, bir savol: set’lar listlardan nimasi bilan farq qiladi deb o‘ylaysiz? (O‘quvchilar javobini kutaman)

Javob: Set’lar takrorlanmaydigan elementlardan iborat va tartibsiz, listlar esa tartibli va takrorlanadigan elementlarni saqlay oladi.


2. Unique elements va Set yaratish (20 daqiqa)
Set’larning asosiy xususiyati — o‘ziga xos (unique) elementlar saqlashi. Agar listda takrorlanadigan elementlar bo‘lsa, uni set’ga aylantirib, takrorlarni olib tashlash mumkin:

# Listdan set yaratish

raqamlar = [1, 2, 2, 3, 5, 5, 6]

unique_raqamlar = set(raqamlar)

print(unique_raqamlar)  # {1, 2, 3, 5, 6}

Set yaratishning bir nechta usullari bor:

# To‘g‘ridan-to‘g‘ri yaratish

mevalar = {"olma", "banan", "anor"}

print(mevalar)  # {'olma', 'banan', 'anor'}

# Bo‘sh set yaratish

bo‘sh_set = set()

print(bo‘sh_set)  # set()

E’tibor bering: {} yordamida bo‘sh set yaratish dictionary yaratadi, shuning uchun bo‘sh set uchun set() ishlatish kerak:

xato = {}  # Bu dictionary

print(type(xato))  # <class 'dict'>

to‘g‘ri = set()  # Bu set

print(type(to‘g‘ri))  # <class 'set'>

Set’ga element qo‘shish uchun add() metodi ishlatiladi:

mevalar.add("uzum")

print(mevalar)  # {'olma', 'banan', 'anor', 'uzum'}

Agar bir nechta element qo‘shmoqchi bo‘lsangiz, update() metodidan foydalanamiz:

mevalar.update(["nok", "shaftoli"])

print(mevalar)  # {'olma', 'banan', 'anor', 'uzum', 'nok', 'shaftoli'}

Elementni o‘chirish uchun remove() yoki discard() ishlatiladi. remove() agar element topilmasa xato chiqaradi, discard() esa xato chiqarmaydi:

mevalar.remove("banan")

print(mevalar)  # {'olma', 'anor', 'uzum', 'nok', 'shaftoli'}

mevalar.discard("olma")

print(mevalar)  # {'anor', 'uzum', 'nok', 'shaftoli'}

Mashq: [1, 3, 3, 5, 7, 7, 9] listini set’ga aylantiring va:

Natijani ekranga chiqaring.
Set’ga 10 ni qo‘shing.
Set’dan 5 ni o‘chiring.

5 daqiqa vaqt beraman!


3. Union, intersection, difference operatsiyalari (25 daqiqa)
Ajoyib, endi set’lar bilan matematik operatsiyalarni ko‘ramiz: union (birlashtirish), intersection (kesishish) va difference (farq).
Union (Birlashtirish)
Union operatsiyasi ikki set’dagi barcha elementlarni birlashtiradi, takrorlanadigan elementlar faqat bir marta olinadi. | operatori yoki union() metodi ishlatiladi:

set1 = {1, 2, 3, 4}

set2 = {3, 4, 5, 6}

birlashtirish = set1 | set2

print(birlashtirish)  # {1, 2, 3, 4, 5, 6}

# union() metodi bilan

birlashtirish = set1.union(set2)

print(birlashtirish)  # {1, 2, 3, 4, 5, 6}
Intersection (Kesishish)
Intersection operatsiyasi ikki set’da umumiy bo‘lgan elementlarni qaytaradi. & operatori yoki intersection() metodi ishlatiladi:

umumiy = set1 & set2

print(umumiy)  # {3, 4}

# intersection() metodi bilan

umumiy = set1.intersection(set2)

print(umumiy)  # {3, 4}
Difference (Farq)
Difference operatsiyasi birinchi set’da bor, lekin ikkinchi set’da yo‘q elementlarni qaytaradi. - operatori yoki difference() metodi ishlatiladi:

farq = set1 - set2

print(farq)  # {1, 2}

# difference() metodi bilan

farq = set1.difference(set2)

print(farq)  # {1, 2}

Aksincha farqni olish uchun set’lar o‘rnini almashtiramiz:

farq = set2 - set1

print(farq)  # {5, 6}

Bu operatsiyalar set’lar bilan ishlashda juda foydali. Masalan, ikki guruh talabalarning umumiy fanlarini topish yoki farqlarini aniqlash uchun ishlatiladi.

Mashq: Quyidagi set’lar bilan ishlang:
set1 = {"olma", "banan", "anor"}
set2 = {"banan", "uzum", "nok"}

Ikkalasini birlashtiring.
Umumiy elementlarni toping.
set1’da bor, lekin set2’da yo‘q elementlarni toping.

5 daqiqa vaqt beraman!


4. Amaliy mashqlar (25 daqiqa)
Endi o‘rganganlarimizni amalda sinab ko‘ramiz! Quyidagi mashqlarni qilamiz:
Mashq 1: Unique elements va Set yaratish
[2, 4, 4, 6, 8, 8, 10] listini set’ga aylantiring.
Set’ga 12 ni qo‘shing.
Set’dan 6 ni o‘chiring.

raqamlar = [2, 4, 4, 6, 8, 8, 10]

unique_set = set(raqamlar)

print(unique_set)  # {2, 4, 6, 8, 10}

unique_set.add(12)

unique_set.discard(6)

print(unique_set)  # {2, 4, 8, 10, 12}
Mashq 2: Union, intersection, difference
set1 = {1, 3, 5, 7} va set2 = {5, 7, 9, 11} set’lari bilan:
Ikkalasini birlashtiring.
Umumiy elementlarni toping.
set2’da bor, lekin set1’da yo‘q elementlarni toping.

set1 = {1, 3, 5, 7}

set2 = {5, 7, 9, 11}

birlashtirish = set1.union(set2)

print(birlashtirish)  # {1, 3, 5, 7, 9, 11}

umumiy = set1.intersection(set2)

print(umumiy)  # {5, 7}

farq = set2.difference(set1)

print(farq)  # {9, 11}
Mashq 3: Kombinatsiya
["olma", "olma", "banan", "uzum", "uzum"] listini set’ga aylantiring.
Set’ga "anor" ni qo‘shing.
Boshqa set: {"banan", "nok", "olma"} bilan umumiy elementlarni toping.

mevalar = ["olma", "olma", "banan", "uzum", "uzum"]

set1 = set(mevalar)

print(set1)  # {'olma', 'banan', 'uzum'}

set1.add("anor")

print(set1)  # {'olma', 'banan', 'uzum', 'anor'}

set2 = {"banan", "nok", "olma"}

umumiy = set1.intersection(set2)

print(umumiy)  # {'olma', 'banan'}

Har bir mashq uchun 8-9 daqiqa vaqt beraman. Kodlarni yozib, natijalarni ekranga chiqaring!


5. Xulosa va uy vazifasi (20 daqiqa)
Ajoyib, yosh dasturchilar! 🎉 Bugun biz Python’da set’lar bilan ishlashni o‘rgandik: set’larning o‘ziga xos elementlarini, union, intersection va difference operatsiyalarini ko‘rdik. Set’lar takrorlanmaydigan ma’lumotlarni saqlash va ular bilan matematik operatsiyalarni bajarishda juda foydali.

Uyga vazifa sifatida quyidagini qiling:

[3, 3, 5, 7, 7, 9, 11] listini set’ga aylantiring.
Set’ga 13 ni qo‘shing.
Set’dan 5 ni o‘chiring.
set1 = {"qalam", "ruchka", "kitob"} va set2 = {"kitob", "daftar", "o‘chirg‘ich"} set’lari bilan:
Ikkalasini birlashtiring.
Umumiy elementlarni toping.
set1’da bor, lekin set2’da yo‘q elementlarni toping.
["a", "b", "b", "c", "d", "d"] listini set’ga aylantiring va:
Set’ga "e" ni qo‘shing.
Boshqa set: {"b", "d", "f"} bilan set1’da bor, lekin set2’da yo‘q elementlarni toping.

Darsimiz shu bilan tugadi, keyingi darsda esa Python: Dictionary: Kalit-qiymat juftligi, looplar orqali iteratsiya, get() metodi mavzusini o‘rganamiz. Savollaringiz bo‘lsa, yozib qoldiring yoki keyingi darsda so‘rang! 😊


6. Qayta ko'rib chiqaamiz va savollar (10 daqiqa)
Ajoyib! Endi bir oz o'rganganlarimizi qayta ko'rib chiqamiz.. Bugungi darsda nimalarni o‘rgandik? Kim aytib bera oladi?

Set’lar nima va ularning asosiy xususiyati nima?
Union, intersection va difference operatsiyalari qanday ishlaydi?
Set’larni qachon ishlatish foydali?

Qandaydir tushunmovchilik bo‘ldimi? Savollaringiz bormi? 😊



