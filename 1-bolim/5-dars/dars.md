📚 Darsning mavzusi: Python: List: Tushuncha, yaratish, indekslash, slicing, qo‘shish va o‘chirish
Qisqacha vaqt taqsimoti
Qism
Davomiyligi
Kirish va List tushunchasi
20 daqiqa
List yaratish va indekslash
20 daqiqa
Slicing
15 daqiqa
Qo‘shish va o‘chirish
20 daqiqa
Amaliy mashqlar
25 daqiqa
Xulosa va uy vazifasi
20 daqiqa
Jami
120 daqiqa (2 soat)


Bu usul yoshlar uchun samarali, qiziqarli va tushunarli bo‘lib, o‘quvchilarni dars jarayoniga faolroq jalb qiladi.


📖 Darsning batafsil rejasi
1. Kirish va List tushunchasi (20 daqiqa)
Assalomu alaykum, yosh dasturchilar! 😊 Bugun biz Python’da ro‘yxatlar, ya’ni listlar haqida o‘rganamiz. Listlar nima, ularni qanday yaratish, indekslash, kesish (slicing), element qo‘shish va o‘chirishni ko‘rib chiqamiz. Listlar dasturlashda juda muhim, chunki ular yordamida bir nechta ma’lumotlarni bitta o‘zgaruvchida saqlash mumkin.

List — bu bir nechta elementlarni saqlash uchun ishlatiladigan ma’lumot turi. Ular [] kvadrat qavslar ichida yoziladi va elementlar vergul bilan ajratiladi. List ichida har xil turdagi ma’lumotlar bo‘lishi mumkin: sonlar, stringlar, hatto boshqa listlar! Mana, oddiy misol:

mevalar = ["olma", "banan", "anor"]

print(mevalar)  # ['olma', 'banan', 'anor']

Listning uzunligini len() funksiyasi yordamida topish mumkin:

print(len(mevalar))  # 3

Listlar o‘zgaruvchan (mutable) bo‘ladi, ya’ni ularni yaratgandan keyin o‘zgartirish mumkin. Masalan, elementlarni qo‘shish, o‘chirish yoki o‘zgartirish mumkin. Keling, bir savol: list ichida qanday ma’lumot turlari bo‘lishi mumkin? (O‘quvchilar javobini kutaman, to‘g‘ri javob bo‘lsa: “Ajoyib, to‘g‘ri!” deyman.)

Javob: List ichida sonlar, stringlar, Boolean qiymatlar, hatto boshqa listlar bo‘lishi mumkin:

har_xil = [10, "salom", True, [1, 2, 3]]

print(har_xil)  # [10, "salom", True, [1, 2, 3]]

Endi listlar bilan ishlashni boshlaymiz!


2. List yaratish va indekslash (20 daqiqa)
List yaratish juda oson — kvadrat qavslar ichida elementlarni yozamiz. List bo‘sh ham bo‘lishi mumkin:

# Bo‘sh list

bo‘sh_list = []

print(bo‘sh_list)  # []

# Elementli list

sonlar = [1, 2, 3, 4, 5]

print(sonlar)  # [1, 2, 3, 4, 5]

Listdagi har bir elementning o‘z indeksi bor. Indeks 0 dan boshlanadi:

mevalar = ["olma", "banan", "anor"]

print(mevalar[0])  # olma

print(mevalar[1])  # banan

print(mevalar[2])  # anor

Agar salbiy indeks ishlatilsa, oxiridan boshlab hisoblaydi:

print(mevalar[-1])  # anor (oxirgi element)

print(mevalar[-2])  # banan

List elementlarini o‘zgartirish ham mumkin:

mevalar[1] = "shaftoli"

print(mevalar)  # ['olma', 'shaftoli', 'anor']

Agar indeks orqali mavjud bo‘lmagan elementga murojaat qilsangiz, xato chiqadi:

print(mevalar[5])  # IndexError: list index out of range

Mashq: O‘z sevimli 5 ta ovqatingizdan iborat list yarating. Keyin birinchi va oxirgi elementni ekranga chiqaring. 5 daqiqa vaqt beraman!


3. Slicing (15 daqiqa)
Ajoyib, endi listlarda slicing, ya’ni kesishni o‘rganamiz! Slicing stringlarda bo‘lgani kabi ishlaydi: [boshlang‘ich:oxirgi] sintaksisi yordamida listning bir qismini olish mumkin. Oxirgi indeks kirmaydi:

sonlar = [1, 2, 3, 4, 5]

print(sonlar[1:4])  # [2, 3, 4]

Agar boshlang‘ich yoki oxirgi indeks kiritilmasa, avtomatik ravishda boshidan yoki oxirigacha olinadi:

print(sonlar[:3])  # [1, 2, 3] (boshidan 3-gacha)

print(sonlar[2:])  # [3, 4, 5] (2 dan oxirigacha)

Salbiy indekslar ham ishlaydi:

print(sonlar[-3:])  # [3, 4, 5] (oxiridan 3 element)

Slicingda qadam (step) ham ishlatish mumkin. Masalan, har ikkinchi elementni olish:

print(sonlar[::2])  # [1, 3, 5] (har ikkinchi element)

Mashq: [10, 20, 30, 40, 50, 60] listi bilan:

2 dan 5 gacha elementlarni kesib oling.
Oxirgi 3 elementni ekranga chiqaring.

5 daqiqa vaqt beraman!


4. Qo‘shish va o‘chirish (20 daqiqa)
Endi listga element qo‘shish va o‘chirish usullarini ko‘ramiz!
Element qo‘shish
Listga element qo‘shish uchun bir nechta usul bor:

append() — list oxiriga bitta element qo‘shadi:

mevalar = ["olma", "banan"]

mevalar.append("anor")

print(mevalar)  # ['olma', 'banan', 'anor']

insert() — ma’lum bir indeksga element qo‘shadi:

mevalar.insert(1, "shaftoli")

print(mevalar)  # ['olma', 'shaftoli', 'banan', 'anor']

extend() — boshqa listni qo‘shib yuboradi:

yangi_mevalar = ["uzum", "nok"]

mevalar.extend(yangi_mevalar)

print(mevalar)  # ['olma', 'shaftoli', 'banan', 'anor', 'uzum', 'nok']
Element o‘chirish
Listdan element o‘chirish uchun quyidagi usullar mavjud:

remove() — ma’lum bir elementni o‘chiradi (birinchi uchraganini):

mevalar.remove("banan")

print(mevalar)  # ['olma', 'shaftoli', 'anor', 'uzum', 'nok']

pop() — indeks bo‘yicha elementni o‘chiradi va qaytaradi. Agar indeks kiritilmasa, oxirgi element o‘chiriladi:

o‘chirilgan = mevalar.pop(1)

print(o‘chirilgan)  # shaftoli

print(mevalar)      # ['olma', 'anor', 'uzum', 'nok']

clear() — listni to‘liq bo‘shatadi:

mevalar.clear()

print(mevalar)  # []

Mashq: ["kitob", "daftar", "ruchka"] listi bilan:

List oxiriga "qalam" qo‘shing.
1-indeksga "o‘chirg‘ich" qo‘shing.
"daftar" elementini o‘chiring.

5 daqiqa vaqt beraman!


5. Amaliy mashqlar (25 daqiqa)
Endi o‘rganganlarimizni amalda sinab ko‘ramiz! Quyidagi mashqlarni qilamiz:
Mashq 1: List yaratish va indekslash
5 ta sevimli rangingizdan iborat list yarating.
Uchinchi rangni ekranga chiqaring va uni "yashil" ga o‘zgartiring.

ranglar = ["qizil", "ko‘k", "sariq", "qora", "oq"]

print(ranglar[2])  # sariq

ranglar[2] = "yashil"

print(ranglar)  # ['qizil', 'ko‘k', 'yashil', 'qora', 'oq']
Mashq 2: Slicing
[5, 10, 15, 20, 25, 30, 35] listi bilan:
2 dan 5 gacha elementlarni kesib oling.
Har ikkinchi elementni ekranga chiqaring.

sonlar = [5, 10, 15, 20, 25, 30, 35]

print(sonlar[2:5])  # [15, 20, 25]

print(sonlar[::2])  # [5, 15, 25, 35]
Mashq 3: Qo‘shish va o‘chirish
["telefon", "kompyuter"] listi bilan:
Listga "planshet" qo‘shing.
"kompyuter" ni o‘chiring.
["naushnik", "soat"] listini qo‘shib yuboring.

gadjetlar = ["telefon", "kompyuter"]

gadjetlar.append("planshet")

gadjetlar.remove("kompyuter")

gadjetlar.extend(["naushnik", "soat"])

print(gadjetlar)  # ['telefon', 'planshet', 'naushnik', 'soat']

Har bir mashq uchun 8-9 daqiqa vaqt beraman. Kodlarni yozib, natijalarni ekranga chiqaring!


6. Xulosa va uy vazifasi (20 daqiqa)
Ajoyib, yosh dasturchilar! 🎉 Bugun biz Python’da listlar bilan ishlashni o‘rgandik: listlarni yaratish, indekslash, slicing qilish, element qo‘shish va o‘chirish usullarini ko‘rdik. Listlar dasturlashda juda muhim, chunki ular yordamida ko‘p ma’lumotlarni tartibli saqlash va ularga ishlov berish mumkin.

Uyga vazifa sifatida quyidagini qiling:

5 ta sevimli kitobingizdan iborat list yarating.
Uchinchi kitobni ekranga chiqaring va uni boshqa kitobga o‘zgartiring.
Oxirgi 2 kitobni kesib oling.
["olma", "nok"] listi bilan:
Listga "uzum" qo‘shing.
"nok" ni o‘chiring.
["anor", "banan"] listini qo‘shib yuboring.
[1, 2, 3, 4, 5, 6, 7, 8] listi bilan:
Har uchinchi elementni ekranga chiqaring (1, 4, 7).
Listdan 3 ni o‘chiring.

Darsimiz shu bilan tugadi, keyingi darsda esa Python List Advanced: Nested lists, comprehension, sort(), reverse() mavzusini o‘rganamiz. Savollaringiz bo‘lsa, yozib qoldiring yoki keyingi darsda so‘rang! 😊



