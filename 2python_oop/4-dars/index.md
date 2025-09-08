📚 Darsning mavzusi: Python OOP - Polymorphism (Ko'p shakllilik) - Bir xil interfeys, turli xatti-harakat
📚 Qisqacha vaqt taqsimoti
Qism
Davomiyligi
Polymorphism nima?
20 daqiqa
Method Overriding bilan Polymorphism
25 daqiqa
Duck Typing
20 daqiqa
Operator Overloading
20 daqiqa
Amaliy loyiha: Shaxslar tizimi
25 daqiqa
Xulosa va uy vazifasi
10 daqiqa
Jami
120 daqiqa (2 soat)


Bu usul yoshlar uchun samarali, qiziqarli va tushunarli bo'lib, o'quvchilarni dars jarayoniga faolroq jalb qiladi.


📖 Darsning batafsil rejasi
1. Polymorphism nima? (20 daqiqa)
Assalomu alaykum, yosh dasturchilar! 😊 Bugun biz OOP'ning eng qiziqarli prinsiplaridan biri - Polymorphism (Ko'p shakllilik) haqida o'rganamiz. Bu juda kuchli va foydali tushuncha!

Polymorphism nima deb o'ylaysiz? 🤔 Keling, real hayot misoli bilan tushunamiz:

Agar sizda "Ovqat" degan umumiy tushuncha bo'lsa, unda "Non", "Sabzavot", "Meva" kabi turli xil ovqatlar bor. Har birining o'ziga xos ta'mi va tayyorlanish usuli bor, lekin ularning barchasi "ovqat" deb ataladi.

Python'da Polymorphism - bu bir xil metod nomi, lekin turli class'larda turli xatti-harakat ko'rsatishi.

```python
class Hayvon:
    def __init__(self, nom):
        self.nom = nom
    
    def ovoz_chiqarish(self):
        print(f"{self.nom} ovoz chiqarayapti...")

class It(Hayvon):
    def ovoz_chiqarish(self):  # Method Overriding
        print(f"{self.nom} havlayapti: Woof! Woof!")

class Mushuk(Hayvon):
    def ovoz_chiqarish(self):  # Method Overriding
        print(f"{self.nom} miyovlayapti: Meow! Meow!")

class Qush(Hayvon):
    def ovoz_chiqarish(self):  # Method Overriding
        print(f"{self.nom} qo'nqiroq qilayapti: Tweet! Tweet!")

# Polymorphism ishlatish
hayvonlar = [
    It("Rex"),
    Mushuk("Mimi"),
    Qush("Qarg'a")
]

print("=== Polymorphism misoli ===")
for hayvon in hayvonlar:
    hayvon.ovoz_chiqarish()  # Har bir hayvon o'ziga xos ovoz chiqaradi
```

Polymorphism'ning afzalliklari:
1. **Moslashuvchanlik** - bir xil kod turli object'lar bilan ishlaydi
2. **Kodni qisqartirish** - takroriy kodlarni kamaytirish
3. **Oson kengaytirish** - yangi class'lar qo'shish oson
4. **Tushunarli kod** - bir xil interfeys, turli xatti-harakat

Savol: Polymorphism nima uchun kerak? Kim aytib bera oladi?


2. Method Overriding bilan Polymorphism (25 daqiqa)
Ajoyib! Endi Method Overriding bilan Polymorphism'ni batafsil o'rganamiz.

Method Overriding - bu Polymorphism'ning asosiy usuli. Har bir child class parent class'ning metodini o'ziga xos tarzda qayta yozadi.

```python
class Transport:
    def __init__(self, nom, tezlik=0):
        self.nom = nom
        self.tezlik = tezlik
    
    def harakatlanish(self):
        print(f"{self.nom} harakatlanmoqda...")
    
    def toxtash(self):
        self.tezlik = 0
        print(f"{self.nom} to'xtadi!")

class Mashina(Transport):
    def __init__(self, nom, rang):
        super().__init__(nom)
        self.rang = rang
    
    def harakatlanish(self):  # Method Overriding
        print(f"{self.rang} {self.nom} yo'lda harakatlanmoqda!")
        print("Dvigatel ishlamoqda: Vroom! Vroom!")
        self.tezlik = 60
    
    def toxtash(self):  # Method Overriding
        self.tezlik = 0
        print(f"{self.nom} yo'lda to'xtadi!")
        print("Tormoz ishlamoqda: Squeak! Squeak!")

class Samolyot(Transport):
    def __init__(self, nom, model):
        super().__init__(nom)
        self.model = model
    
    def harakatlanish(self):  # Method Overriding
        print(f"{self.model} {self.nom} osmonda uchmoqda!")
        print("Dvigatel ishlamoqda: Whoosh! Whoosh!")
        self.tezlik = 800
    
    def toxtash(self):  # Method Overriding
        self.tezlik = 0
        print(f"{self.nom} aeroportda qo'ndi!")
        print("Tormoz ishlamoqda: Screech! Screech!")

class Kema(Transport):
    def __init__(self, nom, tur):
        super().__init__(nom)
        self.tur = tur
    
    def harakatlanish(self):  # Method Overriding
        print(f"{self.tur} {self.nom} dengizda suzmoqda!")
        print("Dvigatel ishlamoqda: Chug! Chug!")
        self.tezlik = 30
    
    def toxtash(self):  # Method Overriding
        self.tezlik = 0
        print(f"{self.nom} portda to'xtadi!")
        print("Tormoz ishlamoqda: Splash! Splash!")

# Polymorphism test qilish
transportlar = [
    Mashina("Toyota", "Qizil"),
    Samolyot("Boeing", "747"),
    Kema("Titanic", "Passajir")
]

print("=== Transportlar harakatlanishi ===")
for transport in transportlar:
    transport.harakatlanish()  # Har bir transport o'ziga xos harakatlanadi
    print(f"Tezlik: {transport.tezlik} km/h")
    print()

print("=== Transportlar to'xtashi ===")
for transport in transportlar:
    transport.toxtash()  # Har bir transport o'ziga xos to'xtaydi
    print()
```

Bu misolda biz ko'rdik:
- Har bir transport o'ziga xos `harakatlanish()` metodiga ega
- Har bir transport o'ziga xos `toxtash()` metodiga ega
- Bir xil kod turli transport'lar bilan ishlaydi

Amaliy mashq: "O'yinchi" parent class yarating va undan "Jangchi", "Sehrgar", "Kamandir" child class'lar yarating. Har birida "hujum" metodini override qiling! 10 daqiqa vaqt beraman!


3. Duck Typing (20 daqiqa)
Zo'r! Endi Duck Typing haqida o'rganamiz. Bu Python'ning juda qiziqarli xususiyati!

**Duck Typing** - "Agar u o'rdak kabi yurasa va o'rdak kabi ovoz chiqarsa, demak u o'rdak!" degan prinsip.

Python'da object'ning turi muhim emas, muhim bo'lgan - u qanday metodlarga ega ekanligi.

```python
class It:
    def __init__(self, nom):
        self.nom = nom
    
    def ovoz_chiqarish(self):
        print(f"{self.nom} havlayapti: Woof! Woof!")
    
    def harakatlanish(self):
        print(f"{self.nom} yugurmoqda...")

class Mushuk:
    def __init__(self, nom):
        self.nom = nom
    
    def ovoz_chiqarish(self):
        print(f"{self.nom} miyovlayapti: Meow! Meow!")
    
    def harakatlanish(self):
        print(f"{self.nom} sakramoqda...")

class Qush:
    def __init__(self, nom):
        self.nom = nom
    
    def ovoz_chiqarish(self):
        print(f"{self.nom} qo'nqiroq qilayapti: Tweet! Tweet!")
    
    def harakatlanish(self):
        print(f"{self.nom} uchmoqda...")

# Duck Typing funksiyasi
def hayvon_ko_rsatish(hayvon):
    print(f"=== {hayvon.nom} ===")
    hayvon.ovoz_chiqarish()  # Har qanday hayvon uchun ishlaydi
    hayvon.harakatlanish()   # Har qanday hayvon uchun ishlaydi
    print()

# Test qilish
hayvonlar = [
    It("Rex"),
    Mushuk("Mimi"),
    Qush("Qarg'a")
]

print("=== Duck Typing misoli ===")
for hayvon in hayvonlar:
    hayvon_ko_rsatish(hayvon)  # Har qanday hayvon uchun ishlaydi
```

Duck Typing'ning afzalliklari:
1. **Moslashuvchanlik** - har qanday object bilan ishlaydi
2. **Kodni qisqartirish** - umumiy funksiyalar yaratish
3. **Oson kengaytirish** - yangi class'lar qo'shish oson
4. **Python'ning ruhi** - "Explicit is better than implicit"

```python
class Kalkulyator:
    def __init__(self, nom):
        self.nom = nom
    
    def hisoblash(self, a, b):
        return a + b

class Ko_paytirish_kalkulyatori:
    def __init__(self, nom):
        self.nom = nom
    
    def hisoblash(self, a, b):
        return a * b

class Bo_lish_kalkulyatori:
    def __init__(self, nom):
        self.nom = nom
    
    def hisoblash(self, a, b):
        if b != 0:
            return a / b
        else:
            return "Nolga bo'lish mumkin emas!"

# Duck Typing funksiyasi
def kalkulyator_ishlatish(kalkulyator, a, b):
    print(f"{kalkulyator.nom} natijasi: {kalkulyator.hisoblash(a, b)}")

# Test qilish
kalkulyatorlar = [
    Kalkulyator("Qo'shish"),
    Ko_paytirish_kalkulyatori("Ko'paytirish"),
    Bo_lish_kalkulyatori("Bo'lish")
]

print("=== Kalkulyatorlar ===")
for kalk in kalkulyatorlar:
    kalkulyator_ishlatish(kalk, 10, 5)
```

Amaliy mashq: "Ovqat" class'lar yarating va Duck Typing'dan foydalaning! 10 daqiqa vaqt beraman!


4. Operator Overloading (20 daqiqa)
Ajoyib! Endi Operator Overloading haqida o'rganamiz. Bu juda kuchli va qiziqarli tushuncha!

**Operator Overloading** - class'da operator'larni (+, -, *, /, ==, !=) o'ziga xos tarzda ishlatish.

```python
class Vektor:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __str__(self):  # print() da ko'rsatish uchun
        return f"Vektor({self.x}, {self.y})"
    
    def __add__(self, boshqa):  # + operator
        return Vektor(self.x + boshqa.x, self.y + boshqa.y)
    
    def __sub__(self, boshqa):  # - operator
        return Vektor(self.x - boshqa.x, self.y - boshqa.y)
    
    def __mul__(self, son):  # * operator
        return Vektor(self.x * son, self.y * son)
    
    def __eq__(self, boshqa):  # == operator
        return self.x == boshqa.x and self.y == boshqa.y
    
    def __lt__(self, boshqa):  # < operator
        return (self.x**2 + self.y**2) < (boshqa.x**2 + boshqa.y**2)
    
    def uzunlik(self):
        return (self.x**2 + self.y**2)**0.5

# Test qilish
v1 = Vektor(3, 4)
v2 = Vektor(1, 2)

print(f"v1 = {v1}")
print(f"v2 = {v2}")
print(f"v1 + v2 = {v1 + v2}")
print(f"v1 - v2 = {v1 - v2}")
print(f"v1 * 2 = {v1 * 2}")
print(f"v1 == v2: {v1 == v2}")
print(f"v1 < v2: {v1 < v2}")
print(f"v1 uzunligi: {v1.uzunlik()}")
```

Operator Overloading'ning afzalliklari:
1. **Tabiiy kod** - matematik ifodalar yozish
2. **Tushunarli kod** - operator'lar ma'noli
3. **Kuchli funksionallik** - murakkab hisob-kitoblar

```python
class Kitob:
    def __init__(self, nom, muallif, sahifalar):
        self.nom = nom
        self.muallif = muallif
        self.sahifalar = sahifalar
    
    def __str__(self):
        return f"'{self.nom}' - {self.muallif} ({self.sahifalar} sahifa)"
    
    def __add__(self, boshqa):  # Kitoblar qo'shish
        return Kitob(
            f"{self.nom} + {boshqa.nom}",
            f"{self.muallif} va {boshqa.muallif}",
            self.sahifalar + boshqa.sahifalar
        )
    
    def __lt__(self, boshqa):  # Sahifalar soni bo'yicha taqqoslash
        return self.sahifalar < boshqa.sahifalar
    
    def __eq__(self, boshqa):  # Tenglik tekshirish
        return self.nom == boshqa.nom and self.muallif == boshqa.muallif

# Test qilish
kitob1 = Kitob("Python", "Ali", 300)
kitob2 = Kitob("Java", "Zilola", 250)

print(f"kitob1 = {kitob1}")
print(f"kitob2 = {kitob2}")
print(f"kitob1 + kitob2 = {kitob1 + kitob2}")
print(f"kitob1 < kitob2: {kitob1 < kitob2}")
print(f"kitob1 == kitob2: {kitob1 == kitob2}")
```

Amaliy mashq: "Vaqt" class yarating va operator overloading'dan foydalaning! 10 daqiqa vaqt beraman!


5. Amaliy loyiha: Shaxslar tizimi (25 daqiqa)
Endi o'rganganlarimizni amalda sinab ko'ramiz! Keling, to'liq "Shaxslar" tizimini yaratamiz:

```python
class Shaxs:
    def __init__(self, ism, yosh):
        self.ism = ism
        self.yosh = yosh
        self.jon = 100
    
    def ishlash(self):
        print(f"{self.ism} ishlayapti...")
        self.jon -= 10
    
    def dam_olish(self):
        print(f"{self.ism} dam olayapti...")
        self.jon += 20
    
    def ma_lumot_ko_rsatish(self):
        print(f"=== {self.ism} ma'lumotlari ===")
        print(f"Yosh: {self.yosh}")
        print(f"Jon: {self.jon}")
    
    def __str__(self):
        return f"{self.ism} ({self.yosh} yosh)"

class Talaba(Shaxs):
    def __init__(self, ism, yosh, kurs):
        super().__init__(ism, yosh)
        self.kurs = kurs
        self.ball = 0
    
    def oqish(self):  # Method Overriding
        print(f"{self.ism} {self.kurs}-kursda o'qiyapti...")
        self.ball += 5
        self.jon -= 5
    
    def imtihon_berish(self):
        print(f"{self.ism} imtihon berayapti...")
        self.ball += 10
        self.jon -= 15
    
    def ishlash(self):  # Method Overriding
        print(f"{self.ism} uy vazifasini qilayapti...")
        self.ball += 3
        self.jon -= 8
    
    def ma_lumot_ko_rsatish(self):  # Method Overriding
        super().ma_lumot_ko_rsatish()
        print(f"Kurs: {self.kurs}")
        print(f"Ball: {self.ball}")

class O_qituvchi(Shaxs):
    def __init__(self, ism, yosh, fan):
        super().__init__(ism, yosh)
        self.fan = fan
        self.tajriba = 0
    
    def dars_berish(self):  # Method Overriding
        print(f"{self.ism} {self.fan} fanidan dars berayapti...")
        self.tajriba += 1
        self.jon -= 12
    
    def imtihon_tekshirish(self):
        print(f"{self.ism} imtihonlarni tekshirayapti...")
        self.tajriba += 0.5
        self.jon -= 8
    
    def ishlash(self):  # Method Overriding
        print(f"{self.ism} dars tayyorlayapti...")
        self.tajriba += 0.3
        self.jon -= 6
    
    def ma_lumot_ko_rsatish(self):  # Method Overriding
        super().ma_lumot_ko_rsatish()
        print(f"Fan: {self.fan}")
        print(f"Tajriba: {self.tajriba} yil")

class Doktor(Shaxs):
    def __init__(self, ism, yosh, mutaxassislik):
        super().__init__(ism, yosh)
        self.mutaxassislik = mutaxassislik
        self.bemorlar = 0
    
    def davolash(self):  # Method Overriding
        print(f"{self.ism} {self.mutaxassislik} bo'yicha davolayapti...")
        self.bemorlar += 1
        self.jon -= 15
    
    def tekshirish(self):
        print(f"{self.ism} bemorni tekshirayapti...")
        self.bemorlar += 0.5
        self.jon -= 8
    
    def ishlash(self):  # Method Overriding
        print(f"{self.ism} bemorlarni qabul qilayapti...")
        self.bemorlar += 0.3
        self.jon -= 10
    
    def ma_lumot_ko_rsatish(self):  # Method Overriding
        super().ma_lumot_ko_rsatish()
        print(f"Mutaxassislik: {self.mutaxassislik}")
        print(f"Davolangan bemorlar: {self.bemorlar}")

# Polymorphism funksiyasi
def shaxs_ishlashi(shaxs):
    print(f"=== {shaxs.ism} ishlayapti ===")
    shaxs.ishlash()  # Har qanday shaxs uchun ishlaydi
    shaxs.ma_lumot_ko_rsatish()
    print()

# Test qilish
shaxslar = [
    Talaba("Ali", 18, 1),
    O_qituvchi("Zilola", 35, "Matematika"),
    Doktor("Sardor", 40, "Kardiolog")
]

print("=== Shaxslar tizimi ===")
for shaxs in shaxslar:
    shaxs_ishlashi(shaxs)  # Polymorphism

print("=== Maxsus ishlar ===")
talaba = Talaba("Ali", 18, 1)
o_qituvchi = O_qituvchi("Zilola", 35, "Matematika")
doktor = Doktor("Sardor", 40, "Kardiolog")

talaba.oqish()
talaba.imtihon_berish()

o_qituvchi.dars_berish()
o_qituvchi.imtihon_tekshirish()

doktor.davolash()
doktor.tekshirish()
```

Bu loyihada biz quyidagilarni ko'rdik:
- Polymorphism - bir xil metod, turli xatti-harakat
- Method Overriding - har bir class o'ziga xos xatti-harakat
- Duck Typing - har qanday shaxs uchun ishlaydigan funksiya
- Real hayot misoli

Amaliy mashq: O'zingizning "Transport" tizimini yarating va Polymorphism'dan foydalaning! 15 daqiqa vaqt beraman!


6. Xulosa va uy vazifasi (10 daqiqa)
Ajoyib, yosh dasturchilar! 🎉 Bugun biz Python OOP'ning muhim prinsiplaridan biri - Polymorphism'ni o'rgandik:

✅ **Nimalarni o'rgandik:**
- Polymorphism nima va uning afzalliklari
- Method Overriding bilan Polymorphism
- Duck Typing
- Operator Overloading
- Amaliy loyiha: Shaxslar tizimi

✅ **Muhim tushunchalar:**
- **Polymorphism**: bir xil metod nomi, turli xatti-harakat
- **Method Overriding**: child class'da parent metodini qayta yozish
- **Duck Typing**: object'ning turi emas, metodlari muhim
- **Operator Overloading**: operator'larni o'ziga xos tarzda ishlatish

**Uyga vazifa:**
1. "Ovqat" parent class yarating:
   - Xususiyatlar: nom, kaloriya, narx
   - Metodlar: tayyorlanish(), ta'm(), ma'lumot_ko'rsatish()

2. Undan "Non", "Sabzavot", "Meva" child class'lar yarating:
   - Har birida "tayyorlanish" va "ta'm" metodlarini override qiling
   - Polymorphism'dan foydalaning

3. "Kalkulyator" class'lar yarating va Operator Overloading'dan foydalaning:
   - Qo'shish, ayirish, ko'paytirish, bo'lish operator'larini override qiling

4. Duck Typing'dan foydalanib, har qanday ovqat uchun ishlaydigan funksiya yarating.

**Keyingi dars:** Python OOP - Encapsulation (Kapsulatsiya) mavzusini o'rganamiz.

Darsimiz shu bilan tugadi! Savollaringiz bo'lsa, yozib qoldiring yoki keyingi darsda so'rang! 😊

**Muhim eslatma:** Polymorphism - bu OOP'ning kuchi. Uni yaxshi o'rganing! 🚀
