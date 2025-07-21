📚 Darsning mavzusi: Advanced Functions: Default arguments, *args, **kwargs
Qisqacha vaqt taqsimoti
Qism
Davomiyligi
Kirish va Default arguments
20 daqiqa
*args bilan ishlash
25 daqiqa
**kwargs bilan ishlash
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
1. Kirish va Default arguments (20 daqiqa)
Assalomu alaykum, yosh dasturchilar! 😊 Bugun biz Python’da funksiyalarning ilg‘or tushunchalari haqida o‘rganamiz: default arguments (standart argumentlar), *args va **kwargs. Bu usullar funksiyalarni yanada moslashuvchan va kuchli qiladi.

Avval default arguments haqida gaplashamiz. Default argumentlar funksiyaga standart qiymat berish imkonini beradi. Agar foydalanuvchi argumentni kiritmasa, standart qiymat ishlatiladi. Sintaksis quyidagicha:

def funksiya_nomi(parametr=standart_qiymat):

    # Kod

Mana, oddiy misol:

def salom_ber(ism="Mehmon"):

    print(f"Assalomu alaykum, {ism}!")

Funksiyani chaqirish:

salom_ber()         # Standart qiymat ishlatiladi

salom_ber("Ali")    # Yangi qiymat beriladi

Natija:

Assalomu alaykum, Mehmon!

Assalomu alaykum, Ali!

Default argumentlar bir nechta parametrlar bilan ham ishlatilishi mumkin. Lekin e’tibor bering: default argumentlar funksiya aniqlashda oddiy argumentlardan keyin kelishi kerak:

def mahsulot(nomi, narxi=1000):

    print(f"Mahsulot: {nomi}, Narxi: {narxi}")

mahsulot("Kitob")         # Narxi standart qiymat sifatida 1000

mahsulot("Ruchka", 500)   # Narxi 500 deb o‘zgartirildi

Natija:

Mahsulot: Kitob, Narxi: 1000

Mahsulot: Ruchka, Narxi: 500

Agar default argument oddiy argumentdan oldin yozilsa, xato chiqadi:

def xato_funksiya(narxi=1000, nomi):  # SyntaxError

    print(narxi, nomi)

Default argumentlar funksiyani chaqirishni osonlashtiradi va kodni moslashuvchan qiladi.

Keling, bir savol: Default argumentlar qachon foydali deb o‘ylaysiz? (O‘quvchilar javobini kutaman, to‘g‘ri javob bo‘lsa: “Ajoyib, to‘g‘ri!” deyman.)

Mashq: Quyidagi vazifani bajaring:

hisobla(a, b=2) nomli funksiya yarating, u a ni b ga ko‘paytirib natijani chiqarsin.
Funksiyani hisobla(5) va hisobla(3, 4) sifatida chaqiring.

5 daqiqa vaqt beraman!


2. *args bilan ishlash (25 daqiqa)
Endi *args haqida gaplashamiz! *args funksiyaga o‘zgaruvchan miqdordagi argumentlar uzatish imkonini beradi. Agar argumentlar soni oldindan noma’lum bo‘lsa, *args ishlatamiz. *args argumentlarni tuple sifatida qabul qiladi.

Sintaksis:

def funksiya_nomi(*args):

    # Kod

Mana, misol:

def barcha_sonlar(*sonlar):

    print(f"Siz kiritgan sonlar: {sonlar}")

    print(f"Yig‘indi: {sum(sonlar)}")

Chaqirish:

barcha_sonlar(1, 2, 3)

barcha_sonlar(4, 5, 6, 7, 8)

Natija:

Siz kiritgan sonlar: (1, 2, 3)

Yig‘indi: 6

Siz kiritgan sonlar: (4, 5, 6, 7, 8)

Yig‘indi: 30

*args oddiy argumentlar bilan birga ishlatilishi mumkin, lekin *args har doim oddiy argumentlardan keyin kelishi kerak:

def salom_ber(ism, *xabarlar):

    print(f"Salom, {ism}!")

    for xabar in xabarlar:

        print(xabar)

Chaqirish:

salom_ber("Zilola", "Bugun dars bor!", "Vaqt 10:00")

Natija:

Salom, Zilola!

Bugun dars bor!

Vaqt 10:00

*args yordamida funksiyaga istalgancha argument uzatish mumkin, bu esa funksiyani juda moslashuvchan qiladi. Masalan, bir nechta so‘zni birlashtirish:

def sozlarni_birlashtir(*sozlar):

    return " ".join(sozlar)

natija = sozlarni_birlashtir("Salom", "dunyo", "qalaysan")

print(natija)  # Salom dunyo qalaysan

Mashq: Quyidagi vazifani bajaring:

raqamlar_yigindisi(*sonlar) nomli funksiya yarating, u barcha sonlarning yig‘indisini chiqarsin.
Funksiyani (2, 3, 4) va (1, 5, 10, 20) uchun chaqiring.

5 daqiqa vaqt beraman!


3. **kwargs bilan ishlash (20 daqiqa)
Ajoyib, endi **kwargs haqida gaplashamiz! **kwargs funksiyaga o‘zgaruvchan miqdordagi kalit-qiymat juftliklarini uzatish imkonini beradi. U argumentlarni dictionary sifatida qabul qiladi. Bu funksiyaga nomli argumentlar uzatishda foydali.

Sintaksis:

def funksiya_nomi(**kwargs):

    # Kod

Mana, misol:

def malumotlar(**ma’lumot):

    print(ma’lumot)

    for kalit, qiymat in ma’lumot.items():

        print(f"{kalit}: {qiymat}")

Chaqirish:

malumotlar(ism="Sardor", yosh=16, sinf="10-sinf")

Natija:

{'ism': 'Sardor', 'yosh': 16, 'sinf': '10-sinf'}

ism: Sardor

yosh: 16

sinf: 10-sinf

**kwargs oddiy argumentlar va *args bilan birga ishlatilishi mumkin, lekin **kwargs har doim oxirida bo‘lishi kerak:

def katta_funksiya(ism, *ballar, **qoshimcha):

    print(f"Ism: {ism}")

    print(f"Ballar yig‘indisi: {sum(ballar)}")

    print(f"Qo‘shimcha ma’lumot: {qoshimcha}")

Chaqirish:

katta_funksiya("Ali", 90, 85, 95, yosh=15, fan="Matematika")

Natija:

Ism: Ali

Ballar yig‘indisi: 270

Qo‘shimcha ma’lumot: {'yosh': 15, 'fan': 'Matematika'}

**kwargs yordamida funksiyaga istalgancha nomli argument uzatish mumkin. Bu, masalan, foydalanuvchi ma’lumotlarini qayta ishlashda foydali:

def talaba_malumotlari(**malumot):

    if "ism" in malumot:

        print(f"Talaba ismi: {malumot['ism']}")

    if "yosh" in malumot:

        print(f"Talaba yoshi: {malumot['yosh']}")

talaba_malumotlari(ism="Zilola", yosh=14, sinf="8-sinf")

Natija:

Talaba ismi: Zilola

Talaba yoshi: 14

Mashq: Quyidagi vazifani bajaring:

shaxs_malumotlari(**kwargs) nomli funksiya yarating, u faqat ism va yosh ni chiqarsin.
Funksiyani ism="Aziz", yosh=17, fan="Informatika" argumentlari bilan chaqiring.

5 daqiqa vaqt beraman!


4. Amaliy mashqlar (25 daqiqa)
Endi o‘rganganlarimizni amalda sinab ko‘ramiz! Quyidagi mashqlarni qilamiz:
Mashq 1: Default arguments
kopaytirish(a, b=3) nomli funksiya yarating, u a ni b ga ko‘paytirib natijani chiqarsin.
Funksiyani kopaytirish(4) va kopaytirish(5, 2) sifatida chaqiring.

def kopaytirish(a, b=3):

    print(f"{a} * {b} = {a * b}")

kopaytirish(4)

kopaytirish(5, 2)

Natija:

4 * 3 = 12

5 * 2 = 10
Mashq 2: *args
barcha_sozlar(*sozlar) nomli funksiya yarating, u barcha so‘zlarni bir qatorga birlashtirib chiqarsin.
Funksiyani ("Salom", "dunyo") va ("Python", "o‘rganish", "juda", "qiziq") uchun chaqiring.

def barcha_sozlar(*sozlar):

    birlashma = " ".join(sozlar)

    print(birlashma)

barcha_sozlar("Salom", "dunyo")

barcha_sozlar("Python", "o‘rganish", "juda", "qiziq")

Natija:

Salom dunyo

Python o‘rganish juda qiziq
Mashq 3: **kwargs
mahsulot_malumotlari(**kwargs) nomli funksiya yarating, u faqat nomi va narxi ni chiqarsin.
Funksiyani nomi="Telefon", narxi=5000000, rang="qora" argumentlari bilan chaqiring.

def mahsulot_malumotlari(**kwargs):

    if "nomi" in kwargs:

        print(f"Mahsulot nomi: {kwargs['nomi']}")

    if "narxi" in kwargs:

        print(f"Mahsulot narxi: {kwargs['narxi']}")

mahsulot_malumotlari(nomi="Telefon", narxi=5000000, rang="qora")

Natija:

Mahsulot nomi: Telefon

Mahsulot narxi: 5000000

Har bir mashq uchun 8-9 daqiqa vaqt beraman. Kodlarni yozib, natijalarni ekranga chiqaring!


5. Xulosa va uy vazifasi (20 daqiqa)
Ajoyib, yosh dasturchilar! 🎉 Bugun biz Python’da funksiyalarning ilg‘or usullarini o‘rgandik: default arguments, *args va **kwargs ni ko‘rdik. Bu usullar funksiyalarni yanada moslashuvchan va kuchli qiladi.

Uyga vazifa sifatida quyidagini qiling:

ayirish(a, b=5) nomli funksiya yarating, u a dan b ni ayirib natijani chiqarsin.
Funksiyani ayirish(10) va ayirish(15, 3) sifatida chaqiring.
sonlar_kopaytmasi(*sonlar) nomli funksiya yarating, u barcha sonlarning ko‘paytmasini chiqarsin.
Funksiyani (2, 3, 4) va (5, 6) uchun chaqiring.
talaba_malumotlari(**kwargs) nomli funksiya yarating, u faqat ism va sinf ni chiqarsin.
Funksiyani ism="Sardor", yosh=16, sinf="10-sinf" argumentlari bilan chaqiring.

Darsimiz shu bilan tugadi, keyingi darsda esa Rekursiv Funksiyalar mavzusini o‘rganamiz. Savollaringiz bo‘lsa, yozib qoldiring yoki keyingi darsda so‘rang! 😊


6. Qayta ko'rib chiqish va savollar (10 daqiqa)
Ajoyib ish qildingiz! Endi bir oz o'rganganlarimizi qayta ko'rib chiqamiz.. Bugungi darsda nimalarni o‘rgandik? Kim aytib bera oladi? (O‘quvchilar javobini kutaman.)

Default argumentlar qanday ishlaydi va ular qachon foydali?
*args nima uchun ishlatiladi va u qanday ma’lumotlarni qabul qiladi?
**kwargs qanday ishlaydi va u qachon foydali?

Qandaydir tushunmovchilik bo‘ldimi? Savollaringiz bormi? (O‘quvchilar savollarini eshitaman va tushuntiraman.) 😊



