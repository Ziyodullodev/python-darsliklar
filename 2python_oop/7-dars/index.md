📚 Darsning mavzusi: Python OOP - Properties va Decorators - @property, @staticmethod, @classmethod
📚 Qisqacha vaqt taqsimoti
Qism
Davomiyligi
Decorators nima?
20 daqiqa
@property decorator
25 daqiqa
@staticmethod va @classmethod
25 daqiqa
Custom decorators
20 daqiqa
Amaliy loyiha: Bank hisob
20 daqiqa
Xulosa va uy vazifasi
10 daqiqa
Jami
120 daqiqa (2 soat)


Bu usul yoshlar uchun samarali, qiziqarli va tushunarli bo'lib, o'quvchilarni dars jarayoniga faolroq jalb qiladi.


📖 Darsning batafsil rejasi
1. Decorators nima? (20 daqiqa)
Assalomu alaykum, yosh dasturchilar! 😊 Bugun biz Python'ning juda qiziqarli va kuchli xususiyati - Decorators haqida o'rganamiz. Bu juda muhim tushuncha!

Decorators nima deb o'ylaysiz? 🤔 Keling, real hayot misoli bilan tushunamiz:

Agar sizda uyingiz bo'lsa, siz uni bezash uchun gul, rasmlar, mebellar qo'shasiz. Bu narsalar uyingizning asosiy funksiyasini o'zgartirmaydi, lekin uni chiroyliroq qiladi. Decorators ham xuddi shunday - ular funksiyalar yoki class'larni "bezaydi" va ularning funksiyasini kengaytiradi.

Python'da Decorator - bu funksiya yoki class'ni boshqa funksiya yoki class bilan "o'rab" olish va uning xatti-harakatini o'zgartirish.

```python
def bezash_decorator(func):
    def ichki_funksiya():
        print("=== Funksiya boshlanmoqda ===")
        func()
        print("=== Funksiya tugadi ===")
    return ichki_funksiya

@bezash_decorator
def salom_aytish():
    print("Salom, dunyo!")

# Test qilish
salom_aytish()
```

Bu misolda biz ko'rdik:
- `@bezash_decorator` - bu decorator
- U funksiyani "o'rab" oladi
- Funksiya chaqirilganda avval va keyin qo'shimcha kod ishlaydi

Decorators'ning afzalliklari:
1. **Kodni qisqartirish** - takroriy kodlarni kamaytirish
2. **Funksionallikni kengaytirish** - mavjud kodni o'zgartirmasdan yangi xususiyatlar qo'shish
3. **Tartibli kod** - mantiqiy tuzilish
4. **Qayta ishlatish** - bir decorator'ni ko'p joyda ishlatish

Savol: Decorators nima uchun kerak? Kim aytib bera oladi?


2. @property decorator (25 daqiqa)
Ajoyib! Endi @property decorator haqida batafsil o'rganamiz. Bu juda muhim va foydali!

@property decorator - bu getter va setter'ni oddiy attribute kabi ishlatish imkonini beradi.

```python
class Talaba:
    def __init__(self, ism, yosh):
        self.ism = ism
        self._yosh = yosh  # Protected attribute
        self.__ball = 0    # Private attribute
    
    @property
    def yosh(self):
        return self._yosh
    
    @yosh.setter
    def yosh(self, yangi_yosh):
        if 16 <= yangi_yosh <= 25:
            self._yosh = yangi_yosh
            print(f"Yosh {yangi_yosh} ga o'zgartirildi")
        else:
            print("Yosh 16-25 orasida bo'lishi kerak!")
    
    @property
    def ball(self):
        return self.__ball
    
    @ball.setter
    def ball(self, yangi_ball):
        if 0 <= yangi_ball <= 100:
            self.__ball = yangi_ball
            print(f"Ball {yangi_ball} ga o'zgartirildi")
        else:
            print("Ball 0-100 orasida bo'lishi kerak!")
    
    @property
    def baho(self):
        if self.__ball >= 90:
            return "A'lo"
        elif self.__ball >= 80:
            return "Yaxshi"
        elif self.__ball >= 70:
            return "Qoniqarli"
        else:
            return "Qoniqarsiz"
    
    def ma_lumot_ko_rsatish(self):
        print(f"=== {self.ism} ma'lumotlari ===")
        print(f"Yosh: {self.yosh}")
        print(f"Ball: {self.ball}")
        print(f"Baho: {self.baho}")

# Test qilish
talaba = Talaba("Ali", 18)
talaba.ma_lumot_ko_rsatish()

# Property'lar oddiy attribute kabi ishlatiladi
talaba.yosh = 19  # Setter ishlaydi
talaba.ball = 85  # Setter ishlaydi

print(f"Yosh: {talaba.yosh}")  # Getter ishlaydi
print(f"Ball: {talaba.ball}")  # Getter ishlaydi
print(f"Baho: {talaba.baho}")  # Getter ishlaydi

talaba.ma_lumot_ko_rsatish()
```

@property decorator'ning afzalliklari:
1. **Oddiy sintaksis** - attribute kabi ishlatish
2. **Kontrol** - getter/setter funksionalligi
3. **Tushunarli kod** - qisqa va aniq
4. **Moslashuvchanlik** - kelajakda o'zgarishlar

Amaliy mashq: "Telefon" class yarating va @property decorator'dan foydalaning! 10 daqiqa vaqt beraman!


3. @staticmethod va @classmethod (25 daqiqa)
Zo'r! Endi @staticmethod va @classmethod haqida o'rganamiz. Bu juda muhim tushunchalar!

**@staticmethod** - class bilan bog'liq, lekin self yoki cls olmaydi
**@classmethod** - class bilan ishlaydi, cls parametrini oladi

```python
class Talaba:
    universitet = "TATU"
    talabalar_soni = 0
    
    def __init__(self, ism, yosh, kurs):
        self.ism = ism
        self.yosh = yosh
        self.kurs = kurs
        self.ball = 0
        Talaba.talabalar_soni += 1
    
    # Instance method
    def oqish(self):
        print(f"{self.ism} o'qiyapti...")
    
    # Class method
    @classmethod
    def universitet_haqida(cls):
        print(f"Bu {cls.universitet} universiteti!")
        print(f"Jami talabalar soni: {cls.talabalar_soni}")
    
    @classmethod
    def yangi_talaba(cls, ism, yosh, kurs):
        print(f"Yangi talaba qabul qilindi: {ism}")
        return cls(ism, yosh, kurs)
    
    # Static method
    @staticmethod
    def yosh_tekshirish(yosh):
        if yosh >= 16:
            return "Talaba bo'lish mumkin"
        else:
            return "Yosh yetarli emas"
    
    @staticmethod
    def ball_hisoblash(imtihon_balli, maksimal_ball):
        foiz = (imtihon_balli / maksimal_ball) * 100
        if foiz >= 90:
            return "A'lo"
        elif foiz >= 80:
            return "Yaxshi"
        elif foiz >= 70:
            return "Qoniqarli"
        else:
            return "Qoniqarsiz"

# Test qilish
print("=== Class Method test ===")
Talaba.universitet_haqida()

print("\n=== Static Method test ===")
print(Talaba.yosh_tekshirish(18))  # Class orqali
print(Talaba.ball_hisoblash(85, 100))  # Class orqali

print("\n=== Object yaratish ===")
talaba1 = Talaba("Ali", 18, 1)
talaba2 = Talaba("Zilola", 19, 2)

print("\n=== Class Method object orqali ===")
talaba1.universitet_haqida()  # Object orqali ham ishlaydi

print("\n=== Static Method object orqali ===")
print(talaba1.yosh_tekshirish(17))  # Object orqali ham ishlaydi

print("\n=== Yangi talaba yaratish ===")
talaba3 = Talaba.yangi_talaba("Sardor", 20, 3)
```

Muhim farqlar:
- **Instance method**: `self` - object bilan ishlaydi
- **Class method**: `cls` - class bilan ishlaydi, `@classmethod`
- **Static method**: parametr yo'q - mustaqil ishlaydi, `@staticmethod`

Amaliy mashq: "Bank" class yarating va unga @classmethod va @staticmethod qo'shing! 10 daqiqa vaqt beraman!


4. Custom decorators (20 daqiqa)
Ajoyib! Endi Custom decorators haqida o'rganamiz. Bu juda kuchli va qiziqarli!

Custom decorators - o'zingizning decorator'lar yaratish.

```python
def vaqt_olchash(func):
    import time
    def ichki_funksiya(*args, **kwargs):
        boshlanish = time.time()
        natija = func(*args, **kwargs)
        tugash = time.time()
        print(f"{func.__name__} funksiyasi {tugash - boshlanish:.4f} soniya davom etdi")
        return natija
    return ichki_funksiya

def parol_tekshirish(func):
    def ichki_funksiya(*args, **kwargs):
        parol = input("Parolni kiriting: ")
        if parol == "1234":
            return func(*args, **kwargs)
        else:
            print("Noto'g'ri parol!")
            return None
    return ichki_funksiya

def ma_lumot_tekshirish(func):
    def ichki_funksiya(*args, **kwargs):
        print(f"=== {func.__name__} funksiyasi chaqirildi ===")
        print(f"Argumentlar: {args}")
        print(f"Kalit so'zlar: {kwargs}")
        natija = func(*args, **kwargs)
        print(f"Natija: {natija}")
        print("=== Funksiya tugadi ===")
        return natija
    return ichki_funksiya

# Decorators ishlatish
@vaqt_olchash
@ma_lumot_tekshirish
def hisoblash(a, b):
    return a + b

@parol_tekshirish
def maxfiy_ma_lumot():
    return "Bu maxfiy ma'lumot!"

# Test qilish
print("=== Hisoblash funksiyasi ===")
natija = hisoblash(5, 3)
print(f"Natija: {natija}")

print("\n=== Maxfiy ma'lumot ===")
maxfiy = maxfiy_ma_lumot()
if maxfiy:
    print(maxfiy)
```

Custom decorators'ning afzalliklari:
1. **Kodni qisqartirish** - takroriy kodlarni kamaytirish
2. **Funksionallikni kengaytirish** - mavjud kodni o'zgartirmasdan yangi xususiyatlar qo'shish
3. **Tartibli kod** - mantiqiy tuzilish
4. **Qayta ishlatish** - bir decorator'ni ko'p joyda ishlatish

Amaliy mashq: O'zingizning decorator yarating va uni ishlatib ko'ring! 10 daqiqa vaqt beraman!


5. Amaliy loyiha: Bank hisob (20 daqiqa)
Endi o'rganganlarimizni amalda sinab ko'ramiz! Keling, to'liq "Bank hisob" tizimini yaratamiz:

```python
def parol_tekshirish(func):
    def ichki_funksiya(self, *args, **kwargs):
        parol = input("Parolni kiriting: ")
        if parol == self._parol:
            return func(self, *args, **kwargs)
        else:
            print("Noto'g'ri parol!")
            return None
    return ichki_funksiya

def ma_lumot_tekshirish(func):
    def ichki_funksiya(self, *args, **kwargs):
        print(f"=== {func.__name__} funksiyasi chaqirildi ===")
        natija = func(self, *args, **kwargs)
        print("=== Funksiya tugadi ===")
        return natija
    return ichki_funksiya

class BankHisob:
    def __init__(self, ism, dastlabki_summa=0):
        self.ism = ism
        self._balans = dastlabki_summa
        self._parol = "1234"
        self._max_kunlik_chiqim = 1000000
        self._kunlik_chiqim = 0
        self._harakatlar = []
    
    @property
    def balans(self):
        return self._balans
    
    @balans.setter
    def balans(self, yangi_balans):
        if yangi_balans >= 0:
            self._balans = yangi_balans
        else:
            print("Balans manfiy bo'lishi mumkin emas!")
    
    @property
    def kunlik_chiqim(self):
        return self._kunlik_chiqim
    
    @classmethod
    def bank_ma_lumotlari(cls):
        print("=== Bank ma'lumotlari ===")
        print("Bank nomi: Toshkent Bank")
        print("Bosh ofis: Toshkent shahar")
        print("Telefon: +998 71 123 45 67")
    
    @staticmethod
    def foiz_hisoblash(summa, foiz, yil):
        return summa * (1 + foiz/100) ** yil
    
    @staticmethod
    def parol_tekshirish(parol):
        if len(parol) >= 4 and parol.isdigit():
            return True
        else:
            return False
    
    @parol_tekshirish
    @ma_lumot_tekshirish
    def pul_qo_shish(self, miqdor):
        if miqdor > 0:
            self._balans += miqdor
            self._harakatlar.append(f"+{miqdor} so'm")
            print(f"{miqdor} so'm qo'shildi. Yangi balans: {self._balans}")
        else:
            print("Miqdor musbat bo'lishi kerak!")
    
    @parol_tekshirish
    @ma_lumot_tekshirish
    def pul_olish(self, miqdor):
        if miqdor > 0:
            if self._balans >= miqdor:
                if self._kunlik_chiqim + miqdor <= self._max_kunlik_chiqim:
                    self._balans -= miqdor
                    self._kunlik_chiqim += miqdor
                    self._harakatlar.append(f"-{miqdor} so'm")
                    print(f"{miqdor} so'm olindi. Yangi balans: {self._balans}")
                else:
                    print("Kunlik chiqim limiti oshib ketdi!")
            else:
                print("Yetarli mablag' yo'q!")
        else:
            print("Miqdor musbat bo'lishi kerak!")
    
    @parol_tekshirish
    def harakatlarni_ko_rsatish(self):
        print("=== So'nggi harakatlar ===")
        for harakat in self._harakatlar[-5:]:
            print(harakat)
    
    @parol_tekshirish
    def ma_lumot_ko_rsatish(self):
        print(f"=== {self.ism} bank hisobi ===")
        print(f"Balans: {self._balans} so'm")
        print(f"Kunlik chiqim: {self._kunlik_chiqim} so'm")
        print(f"Kunlik limit: {self._max_kunlik_chiqim} so'm")

# Test qilish
print("=== Bank tizimi ===")
BankHisob.bank_ma_lumotlari()

print("\n=== Foiz hisoblash ===")
foiz = BankHisob.foiz_hisoblash(100000, 12, 1)
print(f"100,000 so'm 1 yilda 12% foiz bilan: {foiz:.2f} so'm")

print("\n=== Parol tekshirish ===")
print(f"Parol '1234' to'g'rimi: {BankHisob.parol_tekshirish('1234')}")
print(f"Parol '12' to'g'rimi: {BankHisob.parol_tekshirish('12')}")

print("\n=== Bank hisob yaratish ===")
hisob = BankHisob("Ali", 100000)
hisob.ma_lumot_ko_rsatish()

print("\n=== Pul operatsiyalari ===")
hisob.pul_qo_shish(50000)
hisob.pul_olish(30000)
hisob.harakatlarni_ko_rsatish()
```

Bu loyihada biz quyidagilarni ko'rdik:
- @property decorator
- @classmethod va @staticmethod
- Custom decorators
- Real hayot misoli

Amaliy mashq: O'zingizning "Telefon" class yarating va barcha decorators'dan foydalaning! 15 daqiqa vaqt beraman!


6. Xulosa va uy vazifasi (10 daqiqa)
Ajoyib, yosh dasturchilar! 🎉 Bugun biz Python'ning juda kuchli xususiyati - Properties va Decorators'ni o'rgandik:

✅ **Nimalarni o'rgandik:**
- Decorators nima va uning afzalliklari
- @property decorator
- @staticmethod va @classmethod
- Custom decorators
- Amaliy loyiha: Bank hisob

✅ **Muhim tushunchalar:**
- **Decorators**: funksiyalar yoki class'larni "o'rab" olish
- **@property**: getter/setter'ni oddiy attribute kabi ishlatish
- **@classmethod**: class bilan ishlaydi, `cls` parametrini oladi
- **@staticmethod**: mustaqil ishlaydi, parametr olmaydi
- **Custom decorators**: o'zingizning decorator'lar yaratish

**Uyga vazifa:**
1. "Telefon" class yarating:
   - @property decorator: batareya, chaqiruv_soni
   - @classmethod: telefon_ma'lumotlari()
   - @staticmethod: parol_tekshirish(), batareya_tekshirish()
   - Custom decorator: parol_tekshirish

2. "Kitob" class yarating:
   - @property decorator: sahifalar, narx, mavjud
   - @classmethod: kutubxona_ma'lumotlari()
   - @staticmethod: sahifalar_tekshirish(), narx_tekshirish()
   - Custom decorator: ma'lumot_tekshirish

3. "O'yinchi" class yarating:
   - @property decorator: jon, kuch, tajriba
   - @classmethod: o'yin_ma'lumotlari()
   - @staticmethod: jon_tekshirish(), kuch_tekshirish()
   - Custom decorator: vaqt_olchash

**Keyingi dars:** Python OOP - Abstract Classes mavzusini o'rganamiz.

Darsimiz shu bilan tugadi! Savollaringiz bo'lsa, yozib qoldiring yoki keyingi darsda so'rang! 😊

**Muhim eslatma:** Decorators - bu Python'ning kuchi. Ularni yaxshi o'rganing! 🚀
