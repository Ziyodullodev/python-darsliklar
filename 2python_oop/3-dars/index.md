📚 Darsning mavzusi: Python OOP - Inheritance (Meros) - Asosiy tushunchalar va ishlatilishi
📚 Qisqacha vaqt taqsimoti
Qism
Davomiyligi
Inheritance nima?
20 daqiqa
Parent va Child class
25 daqiqa
Method Overriding
20 daqiqa
super() funksiyasi
15 daqiqa
Multiple Inheritance
20 daqiqa
Amaliy loyiha: Hayvonlar class
15 daqiqa
Xulosa va uy vazifasi
5 daqiqa
Jami
120 daqiqa (2 soat)


Bu usul yoshlar uchun samarali, qiziqarli va tushunarli bo'lib, o'quvchilarni dars jarayoniga faolroq jalb qiladi.


📖 Darsning batafsil rejasi
1. Inheritance nima? (20 daqiqa)
Assalomu alaykum, yosh dasturchilar! 😊 Bugun biz OOP'ning eng muhim prinsiplaridan biri - Inheritance (Meros) haqida o'rganamiz. Bu juda kuchli va foydali tushuncha!

Inheritance nima deb o'ylaysiz? 🤔 Keling, real hayot misoli bilan tushunamiz:

Agar sizda "Transport" class bo'lsa, undan "Mashina", "Velosiped", "Samolyot" kabi boshqa class'lar yaratishingiz mumkin. Barcha transport vositalarida umumiy xususiyatlar bor: tezlik, yoqilg'i, harakatlanish kabi.

```python
# Parent class (Ota class)
class Transport:
    def __init__(self, nom, tezlik=0):
        self.nom = nom
        self.tezlik = tezlik
        self.yoniq = False
    
    def yoqish(self):
        self.yoniq = True
        print(f"{self.nom} yoqildi!")
    
    def o_chirish(self):
        self.yoniq = False
        self.tezlik = 0
        print(f"{self.nom} o'chirildi!")
    
    def harakatlanish(self):
        if self.yoniq:
            print(f"{self.nom} harakatlanmoqda...")
        else:
            print(f"{self.nom} o'chik!")

# Child class (Farzand class)
class Mashina(Transport):  # Transport'dan meros oladi
    def __init__(self, nom, rang, model):
        super().__init__(nom)  # Parent class constructor'ini chaqiramiz
        self.rang = rang
        self.model = model
        self.dverlar = 4
    
    def klaxon(self):
        print(f"{self.nom} klaxon chalmoqda: BEEP BEEP!")

# Test qilish
mashina1 = Mashina("Toyota", "Qizil", "Camry")
mashina1.yoqish()  # Parent class metodini ishlatamiz
mashina1.harakatlanish()  # Parent class metodini ishlatamiz
mashina1.klaxon()  # O'z metodini ishlatamiz
```

Inheritance'ning afzalliklari:
1. **Kod qayta ishlatish** - bir marta yozilgan kodni ko'p marta ishlatish
2. **Kodni qisqartirish** - takroriy kodlarni kamaytirish
3. **Tartibli tuzilish** - mantiqiy class'lar tuzilishi
4. **Oson saqlash** - o'zgarishlar faqat bir joyda

Savol: Inheritance nima uchun kerak? Kim aytib bera oladi?


2. Parent va Child class (25 daqiqa)
Ajoyib! Endi Parent va Child class'lar haqida batafsil o'rganamiz.

**Parent class (Ota class)** - meros beruvchi class
**Child class (Farzand class)** - meros oluvchi class

```python
# Parent class
class Hayvon:
    def __init__(self, nom, yosh):
        self.nom = nom
        self.yosh = yosh
        self.jon = 100
        self.och = False
    
    def ovqatlanish(self):
        self.och = False
        print(f"{self.nom} ovqatlandi!")
    
    def uxlash(self):
        print(f"{self.nom} uxlayapti...")
    
    def ma_lumot_ko_rsatish(self):
        print(f"Nom: {self.nom}")
        print(f"Yosh: {self.yosh}")
        print(f"Jon: {self.jon}")
        print(f"Och: {'Ha' if self.och else 'Yo'q'}")

# Child class 1
class It(Hayvon):
    def __init__(self, nom, yosh, zot):
        super().__init__(nom, yosh)  # Parent constructor'ini chaqiramiz
        self.zot = zot
        self.uy_quvvat = True
    
    def havlayish(self):
        print(f"{self.nom} havlayapti: Woof! Woof!")
    
    def uy_quvvatlash(self):
        if self.uy_quvvat:
            print(f"{self.nom} uyni quvvatlayapti!")
        else:
            print(f"{self.nom} uyni quvvatlamaydi!")

# Child class 2
class Mushuk(Hayvon):
    def __init__(self, nom, yosh, rang):
        super().__init__(nom, yosh)
        self.rang = rang
        self.miyovlash = True
    
    def miyovlash(self):
        print(f"{self.nom} miyovlayapti: Meow! Meow!")
    
    def sichqon_tutish(self):
        print(f"{self.nom} sichqon tutmoqda...")

# Test qilish
it1 = It("Rex", 3, "Olmon")
mushuk1 = Mushuk("Mimi", 2, "Oq")

print("=== It ma'lumotlari ===")
it1.ma_lumot_ko_rsatish()  # Parent class metodini ishlatamiz
it1.havlayish()  # O'z metodini ishlatamiz
it1.uy_quvvatlash()  # O'z metodini ishlatamiz

print("\n=== Mushuk ma'lumotlari ===")
mushuk1.ma_lumot_ko_rsatish()  # Parent class metodini ishlatamiz
mushuk1.miyovlash()  # O'z metodini ishlatamiz
mushuk1.sichqon_tutish()  # O'z metodini ishlatamiz

print("\n=== Umumiy metodlar ===")
it1.ovqatlanish()  # Parent class metodini ishlatamiz
mushuk1.uxlash()  # Parent class metodini ishlatamiz
```

E'tibor bering:
- `super().__init__()` - parent class constructor'ini chaqiramiz
- Child class parent class'ning barcha metodlarini meros oladi
- Child class o'ziga xos metodlar qo'shishi mumkin

Amaliy mashq: "O'qituvchi" parent class yarating va undan "Matematika o'qituvchisi" va "Til o'qituvchisi" child class'lar yarating. 10 daqiqa vaqt beraman!


3. Method Overriding (20 daqiqa)
Zo'r! Endi Method Overriding haqida o'rganamiz. Bu juda muhim tushuncha!

**Method Overriding** - child class'da parent class'ning metodini qayta yozish.

```python
class Transport:
    def __init__(self, nom):
        self.nom = nom
        self.tezlik = 0
    
    def harakatlanish(self):
        print(f"{self.nom} harakatlanmoqda...")
    
    def toxtash(self):
        self.tezlik = 0
        print(f"{self.nom} to'xtadi!")

class Mashina(Transport):
    def __init__(self, nom, rang):
        super().__init__(nom)
        self.rang = rang
    
    # Method Overriding - parent class metodini qayta yozamiz
    def harakatlanish(self):
        print(f"{self.rang} {self.nom} yo'lda harakatlanmoqda!")
        print("Dvigatel ishlamoqda: Vroom! Vroom!")

class Samolyot(Transport):
    def __init__(self, nom, model):
        super().__init__(nom)
        self.model = model
    
    # Method Overriding - parent class metodini qayta yozamiz
    def harakatlanish(self):
        print(f"{self.model} {self.nom} osmonda uchmoqda!")
        print("Dvigatel ishlamoqda: Whoosh! Whoosh!")
    
    def toxtash(self):
        self.tezlik = 0
        print(f"{self.nom} aeroportda qo'ndi!")

# Test qilish
mashina1 = Mashina("Toyota", "Qizil")
samolyot1 = Samolyot("Boeing", "747")

print("=== Mashina ===")
mashina1.harakatlanish()  # Override qilingan metod
mashina1.toxtash()  # Parent class metodi

print("\n=== Samolyot ===")
samolyot1.harakatlanish()  # Override qilingan metod
samolyot1.toxtash()  # Override qilingan metod
```

Method Overriding'ning afzalliklari:
1. **Moslashuvchanlik** - har bir class o'ziga xos xatti-harakat
2. **Kodni optimallashtirish** - har bir class uchun maxsus kod
3. **Polymorphism** - bir xil metod, turli xatti-harakat

```python
class Talaba:
    def __init__(self, ism, yosh):
        self.ism = ism
        self.yosh = yosh
    
    def oqish(self):
        print(f"{self.ism} umuman o'qiyapti...")

class Matematika_talabasi(Talaba):
    def __init__(self, ism, yosh, sevimli_fan):
        super().__init__(ism, yosh)
        self.sevimli_fan = sevimli_fan
    
    def oqish(self):  # Method Overriding
        print(f"{self.ism} matematika o'qiyapti!")
        print(f"Sevimli fan: {self.sevimli_fan}")

class Fizika_talabasi(Talaba):
    def __init__(self, ism, yosh, tajriba):
        super().__init__(ism, yosh)
        self.tajriba = tajriba
    
    def oqish(self):  # Method Overriding
        print(f"{self.ism} fizika o'qiyapti!")
        print(f"Tajriba: {self.tajriba}")

# Test qilish
talaba1 = Matematika_talabasi("Ali", 18, "Algebra")
talaba2 = Fizika_talabasi("Zilola", 19, "Laboratoriya")

talaba1.oqish()  # Override qilingan metod
talaba2.oqish()  # Override qilingan metod
```

Amaliy mashq: "O'yinchi" parent class yarating va undan "Jangchi" va "Sehrgar" child class'lar yarating. Har birida "hujum" metodini override qiling! 10 daqiqa vaqt beraman!


4. super() funksiyasi (15 daqiqa)
Ajoyib! Endi `super()` funksiyasi haqida o'rganamiz. Bu inheritance'da juda muhim!

`super()` - parent class'ga murojaat qilish uchun ishlatiladi.

```python
class Ota:
    def __init__(self, ism, yosh):
        self.ism = ism
        self.yosh = yosh
        print(f"Ota yaratildi: {self.ism}")
    
    def ish(self):
        print(f"{self.ism} ishlayapti...")
    
    def dam_olish(self):
        print(f"{self.ism} dam olayapti...")

class Farzand(Ota):
    def __init__(self, ism, yosh, maktab):
        super().__init__(ism, yosh)  # Ota class constructor'ini chaqiramiz
        self.maktab = maktab
        print(f"Farzand yaratildi: {self.ism}")
    
    def oqish(self):
        print(f"{self.ism} {self.maktab}da o'qiyapti...")
    
    def ish(self):  # Method Overriding
        print(f"{self.ism} uy vazifasini qilayapti...")
        super().ish()  # Ota class metodini ham chaqiramiz

# Test qilish
farzand1 = Farzand("Ali", 15, "15-maktab")
farzand1.oqish()  # O'z metodi
farzand1.ish()  # Override qilingan metod + super()
farzand1.dam_olish()  # Ota class metodi
```

`super()` ning afzalliklari:
1. **Parent class metodlarini chaqirish** - child class'da parent metodini ishlatish
2. **Constructor'da ishlatish** - parent class constructor'ini chaqirish
3. **Kod qayta ishlatish** - parent class kodini qayta ishlatish

```python
class Hayvon:
    def __init__(self, nom, yosh):
        self.nom = nom
        self.yosh = yosh
        self.jon = 100
    
    def ovqatlanish(self):
        self.jon += 10
        print(f"{self.nom} ovqatlandi! Jon: {self.jon}")
    
    def harakatlanish(self):
        self.jon -= 5
        print(f"{self.nom} harakatlanmoqda... Jon: {self.jon}")

class It(Hayvon):
    def __init__(self, nom, yosh, zot):
        super().__init__(nom, yosh)  # Parent constructor
        self.zot = zot
        self.uy_quvvat = True
    
    def ovqatlanish(self):  # Method Overriding
        print(f"{self.nom} ({self.zot}) ovqat yeyapti...")
        super().ovqatlanish()  # Parent metodini chaqiramiz
        print("It ovqatni yaxshi ko'radi!")
    
    def uy_quvvatlash(self):
        if self.uy_quvvat:
            print(f"{self.nom} uyni quvvatlayapti!")
            self.jon -= 2
        else:
            print(f"{self.nom} uyni quvvatlamaydi!")

# Test qilish
it1 = It("Rex", 3, "Olmon")
it1.ovqatlanish()  # Override qilingan metod + super()
it1.harakatlanish()  # Parent class metodi
it1.uy_quvvatlash()  # O'z metodi
```

Amaliy mashq: "Kitob" parent class yarating va undan "Darslik" child class yarating. "o'qish" metodini override qiling va `super()` dan foydalaning! 5 daqiqa vaqt beraman!


5. Multiple Inheritance (20 daqiqa)
Zo'r! Endi Multiple Inheritance haqida o'rganamiz. Bu juda kuchli, lekin ehtiyotkorlik bilan ishlatilishi kerak!

**Multiple Inheritance** - bir class bir nechta parent class'lardan meros olishi.

```python
class Hayvon:
    def __init__(self, nom):
        self.nom = nom
        self.jon = 100
    
    def nafas_olish(self):
        print(f"{self.nom} nafas olayapti...")

class Uchuvchi:
    def __init__(self):
        self.uchish_qobiliyati = True
    
    def uchish(self):
        print("Uchmoqda...")

class Suzuvchi:
    def __init__(self):
        self.suzish_qobiliyati = True
    
    def suzish(self):
        print("Suzmoqda...")

# Multiple Inheritance
class Qush(Hayvon, Uchuvchi):
    def __init__(self, nom, tur):
        Hayvon.__init__(self, nom)  # Birinchi parent
        Uchuvchi.__init__(self)  # Ikkinchi parent
        self.tur = tur
    
    def qush_xususiyatlari(self):
        print(f"{self.nom} ({self.tur}) qush!")
        self.nafas_olish()  # Hayvon class metodini ishlatamiz
        self.uchish()  # Uchuvchi class metodini ishlatamiz

class Baliq(Hayvon, Suzuvchi):
    def __init__(self, nom, tur):
        Hayvon.__init__(self, nom)
        Suzuvchi.__init__(self)
        self.tur = tur
    
    def baliq_xususiyatlari(self):
        print(f"{self.nom} ({self.tur}) baliq!")
        self.nafas_olish()  # Hayvon class metodini ishlatamiz
        self.suzish()  # Suzuvchi class metodini ishlatamiz

# Test qilish
qush1 = Qush("Qarg'a", "Qora")
baliq1 = Baliq("Sazan", "Oq")

print("=== Qush ===")
qush1.qush_xususiyatlari()

print("\n=== Baliq ===")
baliq1.baliq_xususiyatlari()
```

Multiple Inheritance'da ehtiyotkorlik:
1. **Method Resolution Order (MRO)** - qaysi metod ishlatilishini aniqlash
2. **Diamond Problem** - bir xil metod bir nechta parent'da bo'lsa

```python
class A:
    def metod(self):
        print("A class metodi")

class B(A):
    def metod(self):
        print("B class metodi")

class C(A):
    def metod(self):
        print("C class metodi")

class D(B, C):
    pass

# Test qilish
d = D()
d.metod()  # Qaysi metod ishlaydi?

# MRO ni ko'rish
print(D.__mro__)
```

Amaliy mashq: "O'yinchi" va "Sehrgar" class'lar yarating va ularni birlashtirib "Sehrgar o'yinchi" class yarating! 10 daqiqa vaqt beraman!


6. Amaliy loyiha: Hayvonlar class (15 daqiqa)
Endi o'rganganlarimizni amalda sinab ko'ramiz! Keling, to'liq "Hayvonlar" class tizimini yaratamiz:

```python
class Hayvon:
    def __init__(self, nom, yosh):
        self.nom = nom
        self.yosh = yosh
        self.jon = 100
        self.och = True
        self.uyqu = False
    
    def ovqatlanish(self):
        if self.och:
            self.och = False
            self.jon += 20
            print(f"{self.nom} ovqatlandi! Jon: {self.jon}")
        else:
            print(f"{self.nom} och emas!")
    
    def uxlash(self):
        self.uyqu = True
        self.jon += 10
        print(f"{self.nom} uxlayapti... Jon: {self.jon}")
    
    def uyg_onish(self):
        self.uyqu = False
        print(f"{self.nom} uyg'ondi!")
    
    def ma_lumot_ko_rsatish(self):
        print(f"=== {self.nom} ma'lumotlari ===")
        print(f"Yosh: {self.yosh}")
        print(f"Jon: {self.jon}")
        print(f"Och: {'Ha' if self.och else 'Yo'q'}")
        print(f"Uyqu: {'Ha' if self.uyqu else 'Yo'q'}")

class Sut_emizuvchi(Hayvon):
    def __init__(self, nom, yosh, sut_emizish=True):
        super().__init__(nom, yosh)
        self.sut_emizish = sut_emizish
        self.jon += 10  # Sut emizuvchilar kuchliroq
    
    def sut_emizish(self):
        if self.sut_emizish:
            print(f"{self.nom} sut emizayapti...")
        else:
            print(f"{self.nom} sut emizmaydi!")

class It(Sut_emizuvchi):
    def __init__(self, nom, yosh, zot):
        super().__init__(nom, yosh)
        self.zot = zot
        self.uy_quvvat = True
    
    def havlayish(self):
        print(f"{self.nom} havlayapti: Woof! Woof!")
    
    def uy_quvvatlash(self):
        if self.uy_quvvat:
            print(f"{self.nom} uyni quvvatlayapti!")
            self.jon -= 5
        else:
            print(f"{self.nom} uyni quvvatlamaydi!")
    
    def ovqatlanish(self):  # Method Overriding
        print(f"{self.nom} ({self.zot}) ovqat yeyapti...")
        super().ovqatlanish()
        print("It ovqatni yaxshi ko'radi!")

class Mushuk(Sut_emizuvchi):
    def __init__(self, nom, yosh, rang):
        super().__init__(nom, yosh)
        self.rang = rang
        self.miyovlash = True
    
    def miyovlash(self):
        print(f"{self.nom} miyovlayapti: Meow! Meow!")
    
    def sichqon_tutish(self):
        print(f"{self.nom} sichqon tutmoqda...")
        self.jon -= 3
    
    def ovqatlanish(self):  # Method Overriding
        print(f"{self.nom} ({self.rang}) ovqat yeyapti...")
        super().ovqatlanish()
        print("Mushuk ovqatni sekin yeydi!")

class Qush(Hayvon):
    def __init__(self, nom, yosh, tur):
        super().__init__(nom, yosh)
        self.tur = tur
        self.uchish_qobiliyati = True
    
    def uchish(self):
        if self.uchish_qobiliyati:
            print(f"{self.nom} uchmoqda...")
            self.jon -= 8
        else:
            print(f"{self.nom} ucha olmaydi!")
    
    def qo_nqiroq(self):
        print(f"{self.nom} qo'nqiroq qilayapti!")

# Test qilish
print("=== Hayvonlar olami ===")

it1 = It("Rex", 3, "Olmon")
mushuk1 = Mushuk("Mimi", 2, "Oq")
qush1 = Qush("Qarg'a", 1, "Qora")

print("\n=== It ===")
it1.ma_lumot_ko_rsatish()
it1.havlayish()
it1.ovqatlanish()
it1.uy_quvvatlash()

print("\n=== Mushuk ===")
mushuk1.ma_lumot_ko_rsatish()
mushuk1.miyovlash()
mushuk1.ovqatlanish()
mushuk1.sichqon_tutish()

print("\n=== Qush ===")
qush1.ma_lumot_ko_rsatish()
qush1.uchish()
qush1.qo_nqiroq()
qush1.ovqatlanish()
```

Bu loyihada biz quyidagilarni ko'rdik:
- Single Inheritance (Hayvon → Sut_emizuvchi → It/Mushuk)
- Method Overriding (ovqatlanish metodini qayta yozish)
- super() funksiyasidan foydalanish
- Real hayot misoli

Amaliy mashq: O'zingizning "Transport" class tizimini yarating! 15 daqiqa vaqt beraman!


7. Xulosa va uy vazifasi (5 daqiqa)
Ajoyib, yosh dasturchilar! 🎉 Bugun biz Python OOP'ning muhim prinsiplaridan biri - Inheritance'ni o'rgandik:

✅ **Nimalarni o'rgandik:**
- Inheritance nima va uning afzalliklari
- Parent va Child class'lar
- Method Overriding
- super() funksiyasi
- Multiple Inheritance
- Amaliy loyiha: Hayvonlar class

✅ **Muhim tushunchalar:**
- **Inheritance**: bir class'dan boshqa class yaratish
- **Parent class**: meros beruvchi class
- **Child class**: meros oluvchi class
- **Method Overriding**: child class'da parent metodini qayta yozish
- **super()**: parent class'ga murojaat qilish

**Uyga vazifa:**
1. "Transport" parent class yarating:
   - Xususiyatlar: nom, tezlik, yoqilg'i
   - Metodlar: yoqish(), o'chirish(), harakatlanish()

2. Undan "Mashina", "Samolyot", "Kema" child class'lar yarating:
   - Har birida o'ziga xos xususiyatlar qo'shing
   - "harakatlanish" metodini override qiling
   - super() dan foydalaning

3. "O'yinchi" parent class yarating va undan "Jangchi", "Sehrgar", "Kamandir" child class'lar yarating.

**Keyingi dars:** Python OOP - Polymorphism (Ko'p shakllilik) mavzusini o'rganamiz.

Darsimiz shu bilan tugadi! Savollaringiz bo'lsa, yozib qoldiring yoki keyingi darsda so'rang! 😊

**Muhim eslatma:** Inheritance - bu OOP'ning asosi. Uni yaxshi o'rganing! 🚀
