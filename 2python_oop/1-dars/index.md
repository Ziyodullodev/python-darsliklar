📚 Darsning mavzusi: Python OOP (Object-Oriented Programming) - Kirish va Asosiy Tushunchalar
📚 Qisqacha vaqt taqsimoti
Qism
Davomiyligi
Kirish va OOP nima?
25 daqiqa
Class va Object tushunchalari
30 daqiqa
Attribute va Method
25 daqiqa
Constructor (__init__)
20 daqiqa
Amaliy mashqlar
15 daqiqa
Xulosa va uy vazifasi
5 daqiqa
Jami
120 daqiqa (2 soat)


Bu usul yoshlar uchun samarali, qiziqarli va tushunarli bo'lib, o'quvchilarni dars jarayoniga faolroq jalb qiladi.


📖 Darsning batafsil rejasi
1. Kirish va OOP nima? (25 daqiqa)
Assalomu alaykum, yosh dasturchilar! 😊 Bugun biz Python'ning eng muhim qismlaridan biri - Object-Oriented Programming (OOP) haqida o'rganamiz. Bu juda qiziqarli va kuchli dasturlash usuli! 

OOP nima deb o'ylaysiz? 🤔 Keling, oddiy misol bilan tushunamiz. Agar siz o'yin yaratsangiz, unda mashina, odam, uy kabi narsalar bo'ladi. Har bir narsaning o'z xususiyatlari va harakatlari bor. Masalan, mashina - rang, tezlik, yoqilg'i kabi xususiyatlarga ega va harakatlanish, to'xtash kabi harakatlarni bajaradi.

OOP - bu dasturlashda ham xuddi shunday! Biz real dunyodagi narsalarni kompyuter dasturida modellashtiramiz. Python'da OOP ning 4 ta asosiy prinsipi bor:

1. **Encapsulation (Kapsulatsiya)** - ma'lumotlarni bitta joyda saqlash
2. **Inheritance (Meros)** - bir class dan boshqa class yaratish
3. **Polymorphism (Ko'p shakllilik)** - bir xil nomli metodlarni turli usullarda ishlatish
4. **Abstraction (Abstraksiya)** - murakkab narsalarni soddalashtirish

Keling, bir misol ko'ramiz. Agar biz "Talaba" haqida dastur yozsak:

```python
# Talaba haqida ma'lumot
ism = "Ali"
yosh = 18
kurs = 1
ball = 85.5

# Talaba harakatlari
def oqish():
    print("Talaba o'qiyapti...")

def imtihon_berish():
    print("Talaba imtihon berayapti...")
```

Bu usul bilan yozsak, har bir talaba uchun alohida o'zgaruvchilar yaratishimiz kerak bo'ladi. Lekin OOP bilan:

```python
class Talaba:
    def __init__(self, ism, yosh, kurs):
        self.ism = ism
        self.yosh = yosh
        self.kurs = kurs
        self.ball = 0
    
    def oqish(self):
        print(f"{self.ism} o'qiyapti...")
    
    def imtihon_berish(self):
        print(f"{self.ism} imtihon berayapti...")

# Talaba yaratish
talaba1 = Talaba("Ali", 18, 1)
talaba2 = Talaba("Zilola", 19, 2)
```

Qanday, bu ancha tushunarli va tartibli, to'g'rimi? 😊

Savol: OOP ning asosiy maqsadi nima? Kim aytib bera oladi?


2. Class va Object tushunchalari (30 daqiqa)
Ajoyib! Endi Class va Object haqida batafsil o'rganamiz. Bu OOP ning asosiy tushunchalari!

**Class** - bu narsaning shablon yoki rejasi. Xuddi uy qurish uchun loyiha kabi.

**Object** - bu class asosida yaratilgan haqiqiy narsa. Xuddi loyiha asosida qurilgan uy kabi.

Keling, mashhur misol bilan ko'ramiz - "Mashina" class:

```python
class Mashina:
    # Class ichida metodlar va xususiyatlar bo'ladi
    pass

# Object yaratish
mashina1 = Mashina()
mashina2 = Mashina()
```

Bu yerda `Mashina` - class, `mashina1` va `mashina2` - objectlar.

Keling, to'liq misol ko'ramiz:

```python
class Mashina:
    # Class xususiyatlari (class attributes)
    ishlab_chiqaruvchi = "Toyota"
    
    def __init__(self, rang, model):
        # Instance xususiyatlari (instance attributes)
        self.rang = rang
        self.model = model
        self.tezlik = 0
    
    def harakatlanish(self):
        self.tezlik = 60
        print(f"{self.rang} {self.model} harakatlanmoqda...")
    
    def toxtash(self):
        self.tezlik = 0
        print("Mashina to'xtadi!")

# Objectlar yaratish
mashina1 = Mashina("Qizil", "Camry")
mashina2 = Mashina("Ko'k", "Corolla")

print(mashina1.rang)  # Qizil
print(mashina2.model)  # Corolla
mashina1.harakatlanish()  # Qizil Camry harakatlanmoqda...
```

E'tibor bering:
- `self` - bu objectning o'zini bildiradi
- `__init__` - bu constructor, object yaratilganda ishlaydi
- `mashina1.rang` - object xususiyatiga murojaat
- `mashina1.harakatlanish()` - object metodini chaqirish

Amaliy mashq: "Kitob" class yarating va unga rang, nom, muallif xususiyatlarini qo'shing. 10 daqiqa vaqt beraman!


3. Attribute va Method (25 daqiqa)
Zo'r! Endi Attribute va Method haqida batafsil o'rganamiz.

**Attribute** - bu objectning xususiyatlari (ma'lumotlari)
**Method** - bu objectning harakatlari (funktsiyalari)

Python'da 2 xil attribute bor:

1. **Instance Attribute** - har bir object uchun alohida
2. **Class Attribute** - barcha objectlar uchun umumiy

```python
class Telefon:
    # Class attribute - barcha telefonlar uchun umumiy
    ishlab_chiqaruvchi = "Samsung"
    
    def __init__(self, model, rang):
        # Instance attributes - har bir telefon uchun alohida
        self.model = model
        self.rang = rang
        self.batareya = 100
        self.yoniq = False
    
    # Instance method - object bilan ishlaydi
    def yoqish(self):
        self.yoniq = True
        print(f"{self.model} yoqildi!")
    
    def o'chirish(self):
        self.yoniq = False
        print(f"{self.model} o'chirildi!")
    
    def qo'ng'iroq(self, raqam):
        if self.yoniq:
            print(f"{self.model} orqali {raqam} raqamiga qo'ng'iroq qilinmoqda...")
        else:
            print("Telefon o'chik!")
    
    # Class method - class bilan ishlaydi
    @classmethod
    def ishlab_chiqaruvchi_haqida(cls):
        print(f"Bu {cls.ishlab_chiqaruvchi} telefon!")

# Objectlar yaratish
telefon1 = Telefon("Galaxy S21", "Qora")
telefon2 = Telefon("Galaxy A52", "Oq")

# Instance attributes va methods
print(telefon1.model)  # Galaxy S21
print(telefon2.rang)   # Oq
telefon1.yoqish()      # Galaxy S21 yoqildi!
telefon1.qo'ng'iroq("+998901234567")

# Class attribute va method
print(Telefon.ishlab_chiqaruvchi)  # Samsung
Telefon.ishlab_chiqaruvchi_haqida()  # Bu Samsung telefon!
```

Muhim farqlar:
- Instance method `self` parametrini oladi
- Class method `cls` parametrini oladi
- Instance attribute har bir object uchun alohida
- Class attribute barcha objectlar uchun bir xil

Amaliy mashq: "Kompyuter" class yarating va unga RAM, protsessor, operatsion tizim xususiyatlarini qo'shing. Yoqish, o'chirish, dastur ishga tushirish metodlarini yarating. 10 daqiqa vaqt beraman!


4. Constructor (__init__) (20 daqiqa)
Ajoyib! Endi Constructor haqida o'rganamiz. Constructor - bu object yaratilganda avtomatik ishlaydigan maxsus metod.

Python'da constructor `__init__` metodidir. Bu metod object yaratilganda birinchi bo'lib ishlaydi.

```python
class Talaba:
    def __init__(self, ism, yosh, kurs):
        print("Talaba yaratilmoqda...")
        self.ism = ism
        self.yosh = yosh
        self.kurs = kurs
        self.ball = 0
        self.fanlar = []
        print(f"{self.ism} talabasi yaratildi!")

# Talaba yaratish
talaba1 = Talaba("Ali", 18, 1)
# Chiqish:
# Talaba yaratilmoqda...
# Ali talabasi yaratildi!
```

Constructor'da biz objectning dastlabki holatini belgilaymiz:

```python
class BankHisob:
    def __init__(self, ism, dastlabki_summa=0):
        self.ism = ism
        self.balans = dastlabki_summa
        self.harakatlar = []
        print(f"{self.ism} uchun bank hisobi yaratildi. Balans: {self.balans} so'm")
    
    def pul_qo_shish(self, miqdor):
        self.balans += miqdor
        self.harakatlar.append(f"+{miqdor} so'm")
        print(f"{miqdor} so'm qo'shildi. Yangi balans: {self.balans} so'm")
    
    def pul_olish(self, miqdor):
        if self.balans >= miqdor:
            self.balans -= miqdor
            self.harakatlar.append(f"-{miqdor} so'm")
            print(f"{miqdor} so'm olindi. Yangi balans: {self.balans} so'm")
        else:
            print("Yetarli mablag' yo'q!")
    
    def balansni_ko_rsatish(self):
        print(f"Balans: {self.balans} so'm")
        print("So'nggi harakatlar:", self.harakatlar[-3:])

# Bank hisob yaratish
hisob1 = BankHisob("Zilola", 100000)
hisob2 = BankHisob("Sardor")  # Dastlabki summa 0

hisob1.pul_qo_shish(50000)
hisob1.pul_olish(30000)
hisob1.balansni_ko_rsatish()
```

Constructor'da default qiymatlar ham berish mumkin:

```python
class O'yinchi:
    def __init__(self, ism, daraja=1, jon=100):
        self.ism = ism
        self.daraja = daraja
        self.jon = jon
        self.kuch = 10
        self.defans = 5
        print(f"{self.ism} o'yinchi yaratildi!")

# O'yinchi yaratish
oyinchi1 = O'yinchi("Ali")  # Default qiymatlar ishlatiladi
oyinchi2 = O'yinchi("Zilola", 5, 150)  # Maxsus qiymatlar
```

Amaliy mashq: "Restoran" class yarating. Constructor'da restoran nomi, ochilish vaqti, yopilish vaqti, menyu (bo'sh ro'yxat) qo'shing. 5 daqiqa vaqt beraman!


5. Amaliy mashqlar (15 daqiqa)
Endi o'rganganlarimizni amalda sinab ko'ramiz! Quyidagi mashqlarni qilamiz:

**Mashq 1: "Kutubxona" class yarating**
- Xususiyatlar: nom, manzil, kitoblar_soni
- Metodlar: kitob_qo_shish(), kitob_olish(), ma_lumot_ko_rsatish()

```python
class Kutubxona:
    def __init__(self, nom, manzil):
        self.nom = nom
        self.manzil = manzil
        self.kitoblar_soni = 0
        self.kitoblar = []
    
    def kitob_qo_shish(self, kitob_nomi):
        self.kitoblar.append(kitob_nomi)
        self.kitoblar_soni += 1
        print(f"'{kitob_nomi}' kitobi qo'shildi!")
    
    def kitob_olish(self, kitob_nomi):
        if kitob_nomi in self.kitoblar:
            self.kitoblar.remove(kitob_nomi)
            self.kitoblar_soni -= 1
            print(f"'{kitob_nomi}' kitobi olindi!")
        else:
            print("Bunday kitob yo'q!")
    
    def ma_lumot_ko_rsatish(self):
        print(f"Kutubxona: {self.nom}")
        print(f"Manzil: {self.manzil}")
        print(f"Kitoblar soni: {self.kitoblar_soni}")
        print(f"Kitoblar: {self.kitoblar}")

# Test qilish
kutubxona = Kutubxona("Alisher Navoiy", "Toshkent shahar")
kutubxona.kitob_qo_shish("Python dasturlash")
kutubxona.kitob_qo_shish("Matematika")
kutubxona.ma_lumot_ko_rsatish()
```

**Mashq 2: "O'yin" class yarating**
- Xususiyatlar: nom, janr, narx, reyting
- Metodlar: o'ynash(), baho_berish(), ma_lumot_ko_rsatish()

Har bir mashq uchun 7 daqiqa vaqt beraman. Kodlarni yozib, natijalarni ekranga chiqaring!


6. Xulosa va uy vazifasi (5 daqiqa)
Ajoyib, yosh dasturchilar! 🎉 Bugun biz Python OOP ning asoslarini o'rgandik:

✅ **Nimalarni o'rgandik:**
- OOP nima va uning afzalliklari
- Class va Object tushunchalari
- Attribute va Method farqi
- Constructor (__init__) ishlatish
- Amaliy misollar va mashqlar

✅ **Muhim tushunchalar:**
- Class - narsaning shablon
- Object - class asosida yaratilgan haqiqiy narsa
- self - objectning o'zini bildiradi
- __init__ - constructor, object yaratilganda ishlaydi

**Uyga vazifa:**
1. "Avtomobil" class yarating:
   - Xususiyatlar: marka, model, yil, rang, yoqilg'i
   - Metodlar: yoqish(), o'chirish(), harakatlanish(), to'xtash(), ma'lumot_ko'rsatish()

2. "Kitob" class yarating:
   - Xususiyatlar: nom, muallif, yil, sahifalar, narx
   - Metodlar: o'qish(), baho_berish(), ma'lumot_ko'rsatish()

3. Har ikkala class uchun ham 2-3 ta object yarating va ularning metodlarini sinab ko'ring.

**Keyingi dars:** Python OOP - Class va Object batafsil, Inheritance (Meros) mavzusini o'rganamiz.

Darsimiz shu bilan tugadi! Savollaringiz bo'lsa, yozib qoldiring yoki keyingi darsda so'rang! 😊

**Muhim eslatma:** OOP - bu kuchli dasturlash usuli. Uni to'g'ri o'rganib, professional dasturchi bo'ling! 🚀
