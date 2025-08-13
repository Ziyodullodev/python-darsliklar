📚 Darsning mavzusi: Rekursiv Funksiyalar: Rekursiya tushunchasi, base case, amaliy misollar
Qisqacha vaqt taqsimoti
Qism
Davomiyligi
Kirish va Rekursiya tushunchasi
20 daqiqa
Base case va uning ahamiyati
25 daqiqa
Amaliy misollar
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
1. Kirish va Rekursiya tushunchasi (20 daqiqa)
Assalomu alaykum, yosh dasturchilar! 😊 Bugun biz Python’da rekursiv funksiyalar haqida o‘rganamiz. Rekursiya tushunchasi, base case (asosiy holat) va amaliy misollarni ko‘rib chiqamiz. Rekursiya dasturchilikda muammolarni osonroq hal qilish uchun ishlatiladi, lekin uni to‘g‘ri ishlatishni o‘rganish kerak.

Rekursiya — bu funksiyaning o‘zini o‘zi chaqirishi. Ya’ni, bir funksiya muammoni kichikroq qismlarga bo‘lib, o‘zini takroriy chaqirib hal qiladi. Bu jarayon matematikada “o‘z-o‘zini takrorlash”ga o‘xshaydi.

Mana, oddiy misol — 5 dan 1 gacha sanash:

def sanash(son):

    print(son)

    if son > 1:

        sanash(son - 1)

sanash(5)

Natija:

5

4

3

2

1

Yuqoridagi kodda sanash funksiyasi o‘zini takroriy chaqiradi. Har safar son 1 ga kamayadi va bu jarayon son 1 ga teng bo‘lguncha davom etadi.

Rekursiyaning asosiy afzalligi — murakkab muammolarni kichikroq qismlarga bo‘lib hal qilish osonlashadi. Lekin agar to‘xtash sharti bo‘lmasa, cheksiz rekursiya yuzaga keladi va dastur xato bilan to‘xtaydi:

def xato():

    print("Cheksiz rekursiya!")

    xato()  # To‘xtash sharti yo‘q

xato()  # RecursionError: maximum recursion depth exceeded

Bu xatodan qochish uchun base case (asosiy holat) kerak. Bu haqida keyingi qismda gaplashamiz.

Keling, bir savol: Rekursiya qachon foydali bo‘ladi deb o‘ylaysiz? (O‘quvchilar javobini kutaman, to‘g‘ri javob bo‘lsa: “Ajoyib, to‘g‘ri!” deyman.)

Mashq: Quyidagi vazifani bajaring:

teskari_sanash(son) nomli funksiya yarating, u berilgan sondan 1 gacha teskari sanasin.
Funksiyani teskari_sanash(3) bilan chaqiring.

5 daqiqa vaqt beraman!


2. Base case va uning ahamiyati (25 daqiqa)
Endi base case (asosiy holat) haqida gaplashamiz! Base case — bu rekursiyaning to‘xtash sharti. Agar base case bo‘lmasa, funksiya o‘zini cheksiz chaqiradi va “RecursionError” xatosi chiqadi. Base case rekursiyaning eng kichik muammosini hal qiladi va undan keyin qaytishni boshlaydi.

Yuqoridagi misolni base case bilan to‘g‘rilaylik:

def sanash(son):

    print(son)

    if son == 1:  # Base case

        return

    sanash(son - 1)

Bu yerda son == 1 sharti base case hisoblanadi. Agar bu shart bajarilsa, funksiya qaytadi va rekursiya to‘xtaydi.

Yana bir klassik misol — faktorial hisoblash. Faktorialni rekursiya yordamida hisoblaymiz:

def faktorial(n):

    if n == 0 or n == 1:  # Base case

        return 1

    return n * faktorial(n - 1)

Chaqirish:

print(faktorial(5))  # 5! = 5 * 4 * 3 * 2 * 1 = 120

Bu yerda:

faktorial(5) → 5 * faktorial(4)
faktorial(4) → 4 * faktorial(3)
faktorial(3) → 3 * faktorial(2)
faktorial(2) → 2 * faktorial(1)
faktorial(1) → 1 (base case, to‘xtaydi)

Shunday qilib, 5 * 4 * 3 * 2 * 1 = 120 natija qaytadi.

Base case bo‘lmasa, masalan:

def xato_faktorial(n):

    return n * xato_faktorial(n - 1)

print(xato_faktorial(5))  # RecursionError

Bu cheksiz rekursiyaga olib keladi, chunki to‘xtash sharti yo‘q.

Base case rekursiyaning muhim qismi. U funksiyani to‘xtatib, natijani qaytarish jarayonini boshlaydi.

Mashq: Quyidagi vazifani bajaring:

daraja(son, daraja) nomli rekursiv funksiya yarating, u sonni berilgan darajaga ko‘tarsin (masalan, 2^3 = 8).
Base case sifatida daraja == 0 bo‘lganda 1 qaytarsin.
Funksiyani daraja(2, 3) bilan chaqiring.

5 daqiqa vaqt beraman!


3. Amaliy misollar (20 daqiqa)
Ajoyib, endi rekursiyadan foydalangan holda bir nechta amaliy misollarni ko‘rib chiqamiz!
Misol 1: Fibonacci ketma-ketligi
Fibonacci ketma-ketligi: 0, 1, 1, 2, 3, 5, 8, ... Har bir son oldingi ikki sonning yig‘indisidan hosil bo‘ladi. Rekursiya yordamida hisoblaymiz:

def fibonacci(n):

    if n == 0:  # Base case 1

        return 0

    if n == 1:  # Base case 2

        return 1

    return fibonacci(n - 1) + fibonacci(n - 2)

Chaqirish:

print(fibonacci(6))  # 6-indeksdagi Fibonacci soni: 8

Bu yerda:

fibonacci(6) → fibonacci(5) + fibonacci(4)
fibonacci(5) → fibonacci(4) + fibonacci(3)
...
fibonacci(1) → 1
fibonacci(0) → 0

Natija: 8 (0, 1, 1, 2, 3, 5, 8).
Misol 2: Stringni teskari qilish
Rekursiya yordamida stringni teskari qilish:

def teskari_qil(matn):

    if len(matn) <= 1:  # Base case

        return matn

    return matn[-1] + teskari_qil(matn[:-1])

Chaqirish:

print(teskari_qil("salom"))  # molas

Bu yerda:

teskari_qil("salom") → "m" + teskari_qil("salo")
teskari_qil("salo") → "o" + teskari_qil("sal")
...
teskari_qil("s") → "s" (base case)

Natija: molas.
Misol 3: Sonlar yig‘indisi
1 dan n gacha bo‘lgan sonlar yig‘indisini rekursiya bilan hisoblaymiz:

def yigindi(n):

    if n == 1:  # Base case

        return 1

    return n + yigindi(n - 1)

Chaqirish:

print(yigindi(4))  # 1 + 2 + 3 + 4 = 10

Bu yerda:

yigindi(4) → 4 + yigindi(3)
yigindi(3) → 3 + yigindi(2)
yigindi(2) → 2 + yigindi(1)
yigindi(1) → 1 (base case)

Natija: 10.

Mashq: Quyidagi vazifani bajaring:

yigindi(n) funksiyasini sinab ko‘ring, yigindi(5) ni chaqiring.
teskari_qil(matn) funksiyasini "Python" so‘zi uchun sinab ko‘ring.

5 daqiqa vaqt beraman!


4. Amaliy mashqlar (25 daqiqa)
Endi o‘rganganlarimizni amalda sinab ko‘ramiz! Quyidagi mashqlarni qilamiz:
Mashq 1: Rekursiya va base case
teskari_sanash(son) nomli funksiya yarating, u sondan 1 gacha teskari sanasin.
Base case sifatida son == 1 ishlatilsin.

def teskari_sanash(son):

    print(son)

    if son == 1:  # Base case

        return

    teskari_sanash(son - 1)

teskari_sanash(4)

Natija:

4

3

2

1
Mashq 2: Faktorial
faktorial(n) nomli funksiya yarating, u berilgan sonning faktorialini hisoblasin.
Funksiyani faktorial(6) uchun chaqiring.

def faktorial(n):

    if n == 0 or n == 1:  # Base case

        return 1

    return n * faktorial(n - 1)

print(faktorial(6))  # 6! = 6 * 5 * 4 * 3 * 2 * 1 = 720

Natija:

720
Mashq 3: Stringni teskari qilish va yig‘indi
teskari_qil(matn) funksiyasini "dars" so‘zi uchun chaqiring.
yigindi(n) funksiyasini yigindi(6) uchun chaqiring.

def teskari_qil(matn):

    if len(matn) <= 1:

        return matn

    return matn[-1] + teskari_qil(matn[:-1])

def yigindi(n):

    if n == 1:

        return 1

    return n + yigindi(n - 1)

print(teskari_qil("dars"))  # srad

print(yigindi(6))  # 1 + 2 + 3 + 4 + 5 + 6 = 21

Natija:

srad

21

Har bir mashq uchun 8-9 daqiqa vaqt beraman. Kodlarni yozib, natijalarni ekranga chiqaring!


5. Xulosa va uy vazifasi (20 daqiqa)
Ajoyib, yosh dasturchilar! 🎉 Bugun biz Python’da rekursiv funksiyalarni o‘rgandik: rekursiya tushunchasi, base case va amaliy misollarni ko‘rdik. Rekursiya murakkab muammolarni kichikroq qismlarga bo‘lib hal qilishda juda foydali.

Uyga vazifa sifatida quyidagini qiling:

sanash(son) nomli funksiya yarating, u sondan 1 gacha sanasin (masalan, 5 → 5, 4, 3, 2, 1).
Funksiyani sanash(6) uchun chaqiring.
daraja(son, daraja) nomli funksiya yarating, u sonni berilgan darajaga ko‘tarsin.
Funksiyani daraja(3, 4) uchun chaqiring (3^4 = 81).
fibonacci(n) funksiyasini fibonacci(7) uchun chaqiring va natijani ekranga chiqaring.

Darsimiz shu bilan tugadi, keyingi darsda esa Lambda Functions: Tushuncha, real hayotdagi misollar mavzusini o‘rganamiz. Savollaringiz bo‘lsa, yozib qoldiring yoki keyingi darsda so‘rang! 😊


6. Qayta ko'rib chiqish va savollar (10 daqiqa)
Ajoyib ish qildingiz! Endi bir oz o'rganganlarimizi qayta ko'rib chiqamiz.. Bugungi darsda nimalarni o‘rgandik? Kim aytib bera oladi? (O‘quvchilar javobini kutaman.)

Rekursiya nima va u qanday ishlaydi?
Base case nima uchun muhim?
Rekursiyadan qanday muammolarni hal qilishda foydalanish mumkin?

Qandaydir tushunmovchilik bo‘ldimi? Savollaringiz bormi? (O‘quvchilar savollarini eshitaman va tushuntiraman.) 😊



