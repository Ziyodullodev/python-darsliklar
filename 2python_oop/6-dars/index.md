📚 Darsning mavzusi: Python OOP - Special Methods (Magic Methods) - __init__, __str__, __len__ va boshqalar
📚 Qisqacha vaqt taqsimoti
Qism
Davomiyligi
Special Methods nima?
20 daqiqa
__init__, __str__, __repr__
25 daqiqa
__len__, __bool__, __eq__
20 daqiqa
Arifmetik operatorlar
20 daqiqa
Amaliy loyiha: Vektor class
25 daqiqa
Xulosa va uy vazifasi
10 daqiqa
Jami
120 daqiqa (2 soat)


Bu usul yoshlar uchun samarali, qiziqarli va tushunarli bo'lib, o'quvchilarni dars jarayoniga faolroq jalb qiladi.


📖 Darsning batafsil rejasi
1. Special Methods nima? (20 daqiqa)
Assalomu alaykum, yosh dasturchilar! 😊 Bugun biz Python'ning juda qiziqarli va kuchli xususiyati - Special Methods (Magic Methods) haqida o'rganamiz. Bu juda muhim tushuncha!

Special Methods nima deb o'ylaysiz? 🤔 Keling, real hayot misoli bilan tushunamiz:

Agar sizda "Vaqt" class bo'lsa, siz uni `print()` da ko'rsatish, `len()` da uzunligini olish, `+` operator bilan qo'shish kabi ishlarni qilishni xohlaysiz. Special Methods - bu Python'ga sizning class'ingizni qanday ishlatishni o'rgatadi.

Special Methods `__` (ikki pastki chiziq) bilan boshlanadi va tugaydi. Shuning uchun ularni "Magic Methods" deb ham atashadi.

```python
class Talaba:
    def __init__(self, ism, yosh, kurs):
        self.ism = ism
        self.yosh = yosh
        self.kurs = kurs
        self.ball = 0
    
    def __str__(self):  # print() da ko'rsatish uchun
        return f"Talaba: {self.ism}, {self.yosh} yosh, {self.kurs}-kurs"
    
    def __len__(self):  # len() da uzunlik uchun
        return len(self.ism)
    
    def __eq__(self, boshqa):  # == operator uchun
        return self.ism == boshqa.ism and self.yosh == boshqa.yosh

# Test qilish
talaba1 = Talaba("Ali", 18, 1)
talaba2 = Talaba("Ali", 18, 2)

print(talaba1)  # __str__ ishlaydi
print(len(talaba1))  # __len__ ishlaydi
print(talaba1 == talaba2)  # __eq__ ishlaydi
```

Special Methods'ning afzalliklari:
1. **Tabiiy kod** - Python'ning o'z operator'larini ishlatish
2. **Tushunarli kod** - qisqa va aniq sintaksis
3. **Kuchli funksionallik** - murakkab operatsiyalar
4. **Python'ning ruhi** - "Explicit is better than implicit"

Savol: Special Methods nima uchun kerak? Kim aytib bera oladi?


2. __init__, __str__, __repr__ (25 daqiqa)
Ajoyib! Endi eng muhim Special Methods'larni o'rganamiz.

**__init__** - constructor, object yaratilganda ishlaydi
**__str__** - print() da ko'rsatish uchun
**__repr__** - debug va development uchun

```python
class Kitob:
    def __init__(self, nom, muallif, yil, sahifalar):
        self.nom = nom
        self.muallif = muallif
        self.yil = yil
        self.sahifalar = sahifalar
        self.o_qilgan = False
        print(f"Kitob yaratildi: {self.nom}")
    
    def __str__(self):  # print() da ko'rsatish uchun
        return f"'{self.nom}' - {self.muallif} ({self.yil})"
    
    def __repr__(self):  # debug uchun
        return f"Kitob('{self.nom}', '{self.muallif}', {self.yil}, {self.sahifalar})"
    
    def o_qish(self):
        self.o_qilgan = True
        print(f"'{self.nom}' kitobi o'qildi!")
    
    def ma_lumot_ko_rsatish(self):
        print(f"=== {self.nom} ===")
        print(f"Muallif: {self.muallif}")
        print(f"Yil: {self.yil}")
        print(f"Sahifalar: {self.sahifalar}")
        print(f"O'qilgan: {'Ha' if self.o_qilgan else 'Yo'q'}")

# Test qilish
kitob1 = Kitob("Python", "Ali", 2023, 300)
kitob2 = Kitob("Java", "Zilola", 2022, 250)

print(kitob1)  # __str__ ishlaydi
print(repr(kitob1))  # __repr__ ishlaydi

kitob1.o_qish()
kitob1.ma_lumot_ko_rsatish()
```

E'tibor bering:
- `__init__` - object yaratilganda avtomatik ishlaydi
- `__str__` - print() da ko'rsatish uchun
- `__repr__` - debug va development uchun
- `repr()` funksiyasi `__repr__` ni chaqiradi

Amaliy mashq: "Telefon" class yarating va unga __init__, __str__, __repr__ metodlarini qo'shing! 10 daqiqa vaqt beraman!


3. __len__, __bool__, __eq__ (20 daqiqa)
Zo'r! Endi boshqa muhim Special Methods'larni o'rganamiz.

**__len__** - len() funksiyasi uchun
**__bool__** - if, while kabi shartlarda ishlatish uchun
**__eq__** - == operator uchun

```python
class Ro_yxat:
    def __init__(self, nom):
        self.nom = nom
        self.elementlar = []
    
    def __len__(self):  # len() uchun
        return len(self.elementlar)
    
    def __bool__(self):  # if, while uchun
        return len(self.elementlar) > 0
    
    def __eq__(self, boshqa):  # == operator uchun
        return self.nom == boshqa.nom and self.elementlar == boshqa.elementlar
    
    def element_qo_shish(self, element):
        self.elementlar.append(element)
        print(f"'{element}' qo'shildi!")
    
    def element_olish(self, element):
        if element in self.elementlar:
            self.elementlar.remove(element)
            print(f"'{element}' olindi!")
        else:
            print(f"'{element}' topilmadi!")
    
    def __str__(self):
        return f"{self.nom}: {self.elementlar}"

# Test qilish
ro_yxat1 = Ro_yxat("Bozor ro'yxati")
ro_yxat2 = Ro_yxat("Bozor ro'yxati")

print(f"Ro'yxat uzunligi: {len(ro_yxat1)}")  # __len__ ishlaydi
print(f"Ro'yxat bo'shmi: {not ro_yxat1}")  # __bool__ ishlaydi

ro_yxat1.element_qo_shish("Non")
ro_yxat1.element_qo_shish("Sut")
ro_yxat1.element_qo_shish("Go'sht")

print(f"Ro'yxat uzunligi: {len(ro_yxat1)}")  # __len__ ishlaydi
print(f"Ro'yxat bo'shmi: {not ro_yxat1}")  # __bool__ ishlaydi

ro_yxat2.element_qo_shish("Non")
ro_yxat2.element_qo_shish("Sut")
ro_yxat2.element_qo_shish("Go'sht")

print(f"Ro'yxatlar tengmi: {ro_yxat1 == ro_yxat2}")  # __eq__ ishlaydi

# if shartida ishlatish
if ro_yxat1:
    print("Ro'yxat bo'sh emas!")
else:
    print("Ro'yxat bo'sh!")
```

Bu metodlar'ning afzalliklari:
1. **Tabiiy kod** - Python'ning o'z funksiyalarini ishlatish
2. **Tushunarli kod** - qisqa va aniq
3. **Moslashuvchanlik** - har qanday class uchun ishlatish

Amaliy mashq: "Kutubxona" class yarating va unga __len__, __bool__, __eq__ metodlarini qo'shing! 10 daqiqa vaqt beraman!


4. Arifmetik operatorlar (20 daqiqa)
Ajoyib! Endi arifmetik operatorlar haqida o'rganamiz. Bu juda kuchli va qiziqarli!

**Arifmetik operatorlar:**
- `__add__` - + operator
- `__sub__` - - operator
- `__mul__` - * operator
- `__truediv__` - / operator
- `__floordiv__` - // operator
- `__mod__` - % operator
- `__pow__` - ** operator

```python
class Vaqt:
    def __init__(self, soat, daqiqa):
        self.soat = soat
        self.daqiqa = daqiqa
        self.__normalizatsiya()
    
    def __normalizatsiya(self):
        if self.daqiqa >= 60:
            self.soat += self.daqiqa // 60
            self.daqiqa = self.daqiqa % 60
        if self.soat >= 24:
            self.soat = self.soat % 24
    
    def __add__(self, boshqa):  # + operator
        yangi_soat = self.soat + boshqa.soat
        yangi_daqiqa = self.daqiqa + boshqa.daqiqa
        return Vaqt(yangi_soat, yangi_daqiqa)
    
    def __sub__(self, boshqa):  # - operator
        yangi_soat = self.soat - boshqa.soat
        yangi_daqiqa = self.daqiqa - boshqa.daqiqa
        if yangi_daqiqa < 0:
            yangi_soat -= 1
            yangi_daqiqa += 60
        if yangi_soat < 0:
            yangi_soat += 24
        return Vaqt(yangi_soat, yangi_daqiqa)
    
    def __mul__(self, son):  # * operator
        yangi_soat = self.soat * son
        yangi_daqiqa = self.daqiqa * son
        return Vaqt(yangi_soat, yangi_daqiqa)
    
    def __str__(self):
        return f"{self.soat:02d}:{self.daqiqa:02d}"
    
    def __eq__(self, boshqa):
        return self.soat == boshqa.soat and self.daqiqa == boshqa.daqiqa

# Test qilish
vaqt1 = Vaqt(10, 30)  # 10:30
vaqt2 = Vaqt(2, 45)   # 02:45

print(f"vaqt1 = {vaqt1}")
print(f"vaqt2 = {vaqt2}")

qoshilma = vaqt1 + vaqt2  # __add__ ishlaydi
print(f"vaqt1 + vaqt2 = {qoshilma}")

ayirma = vaqt1 - vaqt2  # __sub__ ishlaydi
print(f"vaqt1 - vaqt2 = {ayirma}")

ko_paytma = vaqt1 * 2  # __mul__ ishlaydi
print(f"vaqt1 * 2 = {ko_paytma}")

print(f"vaqt1 == vaqt2: {vaqt1 == vaqt2}")  # __eq__ ishlaydi
```

Arifmetik operatorlar'ning afzalliklari:
1. **Tabiiy kod** - matematik ifodalar yozish
2. **Tushunarli kod** - operator'lar ma'noli
3. **Kuchli funksionallik** - murakkab hisob-kitoblar

Amaliy mashq: "Vektor" class yarating va unga arifmetik operatorlar qo'shing! 10 daqiqa vaqt beraman!


5. Amaliy loyiha: Vektor class (25 daqiqa)
Endi o'rganganlarimizni amalda sinab ko'ramiz! Keling, to'liq "Vektor" class yaratamiz:

```python
class Vektor:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __str__(self):  # print() uchun
        return f"Vektor({self.x}, {self.y})"
    
    def __repr__(self):  # debug uchun
        return f"Vektor({self.x}, {self.y})"
    
    def __len__(self):  # len() uchun
        return 2  # Vektor har doim 2 o'lchamli
    
    def __bool__(self):  # if, while uchun
        return self.x != 0 or self.y != 0
    
    def __eq__(self, boshqa):  # == operator
        return self.x == boshqa.x and self.y == boshqa.y
    
    def __add__(self, boshqa):  # + operator
        return Vektor(self.x + boshqa.x, self.y + boshqa.y)
    
    def __sub__(self, boshqa):  # - operator
        return Vektor(self.x - boshqa.x, self.y - boshqa.y)
    
    def __mul__(self, son):  # * operator
        return Vektor(self.x * son, self.y * son)
    
    def __truediv__(self, son):  # / operator
        if son != 0:
            return Vektor(self.x / son, self.y / son)
        else:
            raise ValueError("Nolga bo'lish mumkin emas!")
    
    def __floordiv__(self, son):  # // operator
        if son != 0:
            return Vektor(self.x // son, self.y // son)
        else:
            raise ValueError("Nolga bo'lish mumkin emas!")
    
    def __mod__(self, son):  # % operator
        if son != 0:
            return Vektor(self.x % son, self.y % son)
        else:
            raise ValueError("Nolga bo'lish mumkin emas!")
    
    def __pow__(self, son):  # ** operator
        return Vektor(self.x ** son, self.y ** son)
    
    def uzunlik(self):
        return (self.x**2 + self.y**2)**0.5
    
    def burchak(self):
        import math
        return math.atan2(self.y, self.x) * 180 / math.pi
    
    def ma_lumot_ko_rsatish(self):
        print(f"=== {self} ===")
        print(f"X: {self.x}")
        print(f"Y: {self.y}")
        print(f"Uzunlik: {self.uzunlik():.2f}")
        print(f"Burchak: {self.burchak():.2f}°")

# Test qilish
v1 = Vektor(3, 4)
v2 = Vektor(1, 2)

print("=== Vektor ma'lumotlari ===")
v1.ma_lumot_ko_rsatish()
v2.ma_lumot_ko_rsatish()

print("\n=== Arifmetik operatsiyalar ===")
print(f"v1 = {v1}")
print(f"v2 = {v2}")
print(f"v1 + v2 = {v1 + v2}")
print(f"v1 - v2 = {v1 - v2}")
print(f"v1 * 2 = {v1 * 2}")
print(f"v1 / 2 = {v1 / 2}")
print(f"v1 // 2 = {v1 // 2}")
print(f"v1 % 2 = {v1 % 2}")
print(f"v1 ** 2 = {v1 ** 2}")

print("\n=== Solishtirish ===")
print(f"v1 == v2: {v1 == v2}")
print(f"v1 != v2: {v1 != v2}")

print("\n=== Boshqa operatsiyalar ===")
print(f"len(v1): {len(v1)}")
print(f"bool(v1): {bool(v1)}")
print(f"str(v1): {str(v1)}")
print(f"repr(v1): {repr(v1)}")

# if shartida ishlatish
if v1:
    print("v1 nol vektor emas!")
else:
    print("v1 nol vektor!")

# Ro'yxatda ishlatish
vektorlar = [v1, v2, v1 + v2]
print(f"Vektorlar ro'yxati: {vektorlar}")
```

Bu loyihada biz quyidagilarni ko'rdik:
- Barcha asosiy Special Methods
- Arifmetik operatorlar
- Solishtirish operatorlari
- Real hayot misoli

Amaliy mashq: O'zingizning "Kompleks son" class yarating va Special Methods'dan foydalaning! 15 daqiqa vaqt beraman!


6. Xulosa va uy vazifasi (10 daqiqa)
Ajoyib, yosh dasturchilar! 🎉 Bugun biz Python'ning juda kuchli xususiyati - Special Methods'ni o'rgandik:

✅ **Nimalarni o'rgandik:**
- Special Methods nima va uning afzalliklari
- __init__, __str__, __repr__
- __len__, __bool__, __eq__
- Arifmetik operatorlar
- Amaliy loyiha: Vektor class

✅ **Muhim tushunchalar:**
- **Special Methods**: `__` bilan boshlanadi va tugaydi
- **__init__**: constructor, object yaratilganda ishlaydi
- **__str__**: print() da ko'rsatish uchun
- **__repr__**: debug va development uchun
- **Arifmetik operatorlar**: +, -, *, /, //, %, **
- **Solishtirish operatorlari**: ==, !=, <, >, <=, >=

**Uyga vazifa:**
1. "Kompleks son" class yarating:
   - Xususiyatlar: real, imag
   - Special Methods: __init__, __str__, __repr__
   - Arifmetik operatorlar: +, -, *, /
   - Solishtirish operatorlari: ==, !=

2. "Matritsa" class yarating:
   - Xususiyatlar: qatorlar, ustunlar, elementlar
   - Special Methods: __init__, __str__, __len__
   - Arifmetik operatorlar: +, -, *
   - Solishtirish operatorlari: ==, !=

3. "Polinom" class yarating:
   - Xususiyatlar: koeffitsientlar
   - Special Methods: __init__, __str__, __len__
   - Arifmetik operatorlar: +, -, *
   - Solishtirish operatorlari: ==, !=

**Keyingi dars:** Python OOP - Properties va Decorators mavzusini o'rganamiz.

Darsimiz shu bilan tugadi! Savollaringiz bo'lsa, yozib qoldiring yoki keyingi darsda so'rang! 😊

**Muhim eslatma:** Special Methods - bu Python'ning kuchi. Ularni yaxshi o'rganing! 🚀
