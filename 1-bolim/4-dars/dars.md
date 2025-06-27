📚 Darsning mavzusi: Python String Advanced: split(), join(), f-stringlar, startswith(), endswith()
Qisqacha vaqt taqsimoti
Qism
Davomiyligi
Kirish va String asoslari
20 daqiqa
split() va join() metodlari
25 daqiqa
f-stringlar
20 daqiqa
startswith() va endswith()
15 daqiqa
Amaliy mashqlar
25 daqiqa
Xulosa va uy vazifasi
15 daqiqa
Jami
120 daqiqa (2 soat)


Bu usul yoshlar uchun samarali, qiziqarli va tushunarli bo‘lib, o‘quvchilarni dars jarayoniga faolroq jalb qiladi.


📖 Darsning batafsil rejasi
1. Kirish va String asoslari (20 daqiqa)
Assalomu alaykum, yosh dasturchilar! 😊 Bugun biz Python’da stringlar bilan ishlashni yanada chuqurroq o‘rganamiz. Biz stringlarni bo‘lish (split), birlashtirish (join), zamonaviy f-string formatlash usulini, shuningdek matnning boshlanishi va oxirini tekshirish usullarini (startswith, endswith) ko‘rib chiqamiz. Bu metodlar stringlar bilan ishlashni juda qulay qiladi.

String — bu matnli ma’lumotlar, ya’ni harflar, so‘zlar yoki jumlalar. Ular ' yoki " belgilari ichida yoziladi. Mana, oddiy misol:

xabar = "Salom, Python o‘quvchilari!"

print(xabar)  # Salom, Python o‘quvchilari!

Stringlar bilan avvalgi darslarda bir qancha ishlar qilgan edik, masalan, kesish, katta-kichik harfga aylantirish va so‘zlarni almashtirish. Bugun esa yangi va foydali metodlarni o‘rganamiz. Keling, bir savol: stringning uzunligini qanday topamiz? (O‘quvchilar javobini kutaman, to‘g‘ri javob bo‘lsa: “Ajoyib, to‘g‘ri!” deyman.)

Javob: len() funksiyasi bilan:

matn = "Dasturlash"

print(len(matn))  # 10

Endi yangi metodlarga o‘tamiz! Birinchi bo‘lib split() va join() metodlarini ko‘ramiz.


2. split() va join() metodlari (25 daqiqa)
split() metodi
split() metodi stringni bo‘laklarga bo‘lish uchun ishlatiladi. U stringni berilgan belgi (odatiy bo‘sh joy) bo‘yicha bo‘lib, ro‘yxat (list) sifatida qaytaradi. Mana, misol:

jumla = "Salom Python dasturchilari"

sozlar = jumla.split()  # Bo‘sh joy bo‘yicha bo‘lish

print(sozlar)  # ['Salom', 'Python', 'dasturchilari']

Agar boshqa belgi bo‘yicha bo‘lish kerak bo‘lsa, uni parametr sifatida kiritamiz:

matn = "olma,anor,banan"

mevalar = matn.split(",")  # Vergul bo‘yicha bo‘lish

print(mevalar)  # ['olma', 'anor', 'banan']
join() metodi
join() metodi esa ro‘yxatdagi elementlarni birlashtirib, bitta string qaytaradi. Sintaksis: "belgi".join(ro‘yxat). Mana, misol:

sozlar = ['Salom', 'Python', 'dasturchilari']

jumla = " ".join(sozlar)  # Bo‘sh joy bilan birlashtirish

print(jumla)  # Salom Python dasturchilari

Boshqa belgi bilan birlashtirish ham mumkin:

mevalar = ['olma', 'anor', 'banan']

natija = "-".join(mevalar)

print(natija)  # olma-anor-banan

Bu metodlar juda foydali. Masalan, foydalanuvchi kiritgan matnni so‘zlarga bo‘lish yoki ro‘yxatdagi so‘zlarni jumlaga aylantirish uchun ishlatiladi.

Mashq: "Men dasturlashni yaxshi ko‘raman" jumlasi bilan:

Jumlani so‘zlarga bo‘ling.
So‘zlarni - belgisi bilan birlashtirib, natijani ekranga chiqaring.

5 daqiqa vaqt beraman!


3. f-stringlar (20 daqiqa)
Endi zamonaviy va juda qulay usul — f-stringlar haqida gaplashamiz! f-stringlar — bu stringlarni formatlashning oson usuli. Ular Python 3.6 va undan yuqori versiyalarda ishlaydi. f-string yozish uchun string oldidan f harfi qo‘yiladi va ichida {} yordamida o‘zgaruvchilar ishlatiladi. Mana, misol:

ism = "Nodir"

yosh = 16

xabar = f"Mening ismim {ism}, men {yosh} yoshdaman."

print(xabar)  # Mening ismim Nodir, men 16 yoshdaman.

f-stringlar ichida hisob-kitoblar ham qilish mumkin:

narx = 100

chegirma = 20

xabar = f"Yakuniy narx: {narx - (narx * chegirma / 100)} so‘m"

print(xabar)  # Yakuniy narx: 80.0 so‘m

f-stringlar avvalgi usullarga (masalan, + bilan birlashtirish yoki .format() metodi) nisbatan ancha qulay va oson o‘qiladi. Taqqoslash uchun eski usulni ko‘raylik:

# Eski usul

ism = "Zilola"

xabar = "Mening ismim " + ism + "."

print(xabar)

# f-string bilan

xabar = f"Mening ismim {ism}."

print(xabar)

f-stringlar yordamida matnni chiroyli formatlash oson. Mashq: O‘z ismingiz va yoshingizni f-string yordamida “Men [ism], [yosh] yoshdaman” shaklida ekranga chiqaring. 5 daqiqa vaqt beraman!


4. startswith() va endswith() metodlari (15 daqiqa)
Ajoyib, endi stringning boshlanishi va oxirini tekshiruvchi metodlarni ko‘ramiz: startswith() va endswith().

startswith() — stringning ma’lum harf yoki so‘z bilan boshlanishini tekshiradi.
endswith() — stringning ma’lum harf yoki so‘z bilan tugashini tekshiradi.

Bu metodlar True yoki False qaytaradi. Mana, misollar:

matn = "Salom, Python!"

print(matn.startswith("Sal"))  # True (Salom bilan boshlanadi)

print(matn.startswith("Py"))   # False

print(matn.endswith("!"))      # True (oxiri ! bilan tugaydi)

print(matn.endswith("on"))     # False

Bu metodlar katta-kichik harflarga sezgir. Agar bunga e’tibor bermaslik kerak bo‘lsa, avval matnni lower() bilan kichik harfga aylantirish mumkin:

matn = "SALOM"

print(matn.lower().startswith("sal"))  # True

Bu metodlar foydalanuvchi kiritgan matnni tekshirishda juda foydali. Masalan, fayl nomining kengaytmasini tekshirish:

fayl = "rasm.jpg"

if fayl.endswith(".jpg"):

    print("Bu rasm fayli!")

else:

    print("Bu rasm fayli emas.")

Mashq: "Dasturlash qiziqarli" jumlasi bilan:

Jumlani "Dastur" bilan boshlanishini tekshiring.
Jumlani "li" bilan tugashini tekshiring.

5 daqiqa vaqt beraman!


5. Amaliy mashqlar (25 daqiqa)
Endi o‘rganganlarimizni amalda sinab ko‘ramiz! Quyidagi mashqlarni qilamiz:
Mashq 1: split() va join()
"Python dasturlash tili ajoyib" jumlasi bilan:
Jumlani so‘zlarga bo‘ling.
So‘zlarni * belgisi bilan birlashtirib, natijani ekranga chiqaring.

jumla = "Python dasturlash tili ajoyib"

sozlar = jumla.split()

print(sozlar)  # ['Python', 'dasturlash', 'tili', 'ajoyib']

birlashma = "*".join(sozlar)

print(birlashma)  # Python*dasturlash*tili*ajoyib
Mashq 2: f-stringlar
O‘z ismingiz, yoshingiz va sevimli darsingizni f-string yordamida “Men [ism], [yosh] yoshdaman, sevimli darsim [dars]” shaklida ekranga chiqaring.

ism = "Sardor"

yosh = 15

dars = "Matematika"

xabar = f"Men {ism}, {yosh} yoshdaman, sevimli darsim {dars}"

print(xabar)  # Men Sardor, 15 yoshdaman, sevimli darsim Matematika
Mashq 3: startswith() va endswith()
"Salom, dunyo.txt" matni bilan:
Matnning "Salom" bilan boshlanishini tekshiring.
Matnning ".txt" bilan tugashini tekshirib, agar shunday bo‘lsa, “Bu fayl matnli fayl” deb chiqaring.

matn = "Salom, dunyo.txt"

print(matn.startswith("Salom"))  # True

if matn.endswith(".txt"):

    print("Bu fayl matnli fayl")

else:

    print("Bu matnli fayl emas")

Har bir mashq uchun 8-9 daqiqa vaqt beraman. Kodlarni yozib, natijalarni ekranga chiqaring!


6. Xulosa va uy vazifasi (15 daqiqa)
Ajoyib, yosh dasturchilar! 🎉 Bugun biz Python’da stringlar bilan ishlashning ilg‘or usullarini o‘rgandik: split(), join(), f-stringlar, startswith() va endswith() metodlari. Bu metodlar yordamida matnlar bilan ishlashni ancha osonlashtirdik. Stringlar bilan ishlash dasturlashda juda muhim, chunki ularsiz foydalanuvchi interfeyslari yoki xabarlarni tasavvur qilib bo‘lmaydi.

Uyga vazifa sifatida quyidagini qiling:

"Bugun dars juda foydali edi" jumlasi bilan:
Jumlani so‘zlarga bo‘ling.
So‘zlarni | belgisi bilan birlashtirib, natijani ekranga chiqaring.
O‘z ismingiz va sevimli rangingizni f-string yordamida “Men [ism], sevimli rangim [rang]” shaklida ekranga chiqaring.
"Kitob.pdf" matni bilan:
Matnning "Kitob" bilan boshlanishini tekshiring.
Matnning ".pdf" bilan tugashini tekshirib, agar shunday bo‘lsa, “Bu PDF fayli” deb chiqaring.

Darsimiz shu bilan tugadi, keyingi darsda esa Python: List: Tushuncha, yaratish, indekslash, slicing, qo‘shish va o‘chirish mavzusini o‘rganamiz. Savollaringiz bo‘lsa, yozib qoldiring yoki keyingi darsda so‘rang! 😊



