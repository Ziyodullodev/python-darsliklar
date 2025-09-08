📚 Darsning mavzusi: Python OOP - Advanced OOP Concepts - Mixins, Composition, Design Patterns
📚 Qisqacha vaqt taqsimoti
Qism
Davomiyligi
Mixins nima?
20 daqiqa
Composition vs Inheritance
25 daqiqa
Design Patterns
25 daqiqa
Singleton Pattern
20 daqiqa
Amaliy loyiha: O'yin tizimi
20 daqiqa
Xulosa va uy vazifasi
10 daqiqa
Jami
120 daqiqa (2 soat)


Bu usul yoshlar uchun samarali, qiziqarli va tushunarli bo'lib, o'quvchilarni dars jarayoniga faolroq jalb qiladi.


📖 Darsning batafsil rejasi
1. Mixins nima? (20 daqiqa)
Assalomu alaykum, yosh dasturchilar! 😊 Bugun biz Python'ning juda kuchli va professional xususiyatlari - Advanced OOP Concepts haqida o'rganamiz. Bu juda muhim tushunchalar!

Mixins nima deb o'ylaysiz? 🤔 Keling, real hayot misoli bilan tushunamiz:

Agar sizda "Telefon" class bo'lsa, unda "Qo'ng'iroq qilish", "Xabar yuborish", "Internet", "Kamera" kabi xususiyatlar bor. Lekin ba'zi telefonlarda "Kamera" yo'q, ba'zilarida "Internet" yo'q. Mixins - bu xususiyatlarni alohida class'lar sifatida yaratish va kerakli joyda ishlatish.

Mixins - bu kichik, maxsus maqsadli class'lar. Ular to'liq class emas, balki faqat ma'lum funksionallikni ta'minlaydi.

```python
class Qo_ng_iroq_mixin:
    def qo_ng_iroq_qilish(self, raqam):
        print(f"{self.nom} {raqam} raqamiga qo'ng'iroq qilmoqda...")
    
    def qo_ng_iroq_qabul_qilish(self):
        print(f"{self.nom} qo'ng'iroqni qabul qilmoqda...")

class Xabar_mixin:
    def xabar_yuborish(self, raqam, xabar):
        print(f"{self.nom} {raqam} raqamiga xabar yuborayapti: {xabar}")
    
    def xabar_qabul_qilish(self, xabar):
        print(f"{self.nom} xabar qabul qildi: {xabar}")

class Internet_mixin:
    def internet_ochish(self):
        print(f"{self.nom} internetga ulandi...")
    
    def veb_sayt_ochish(self, url):
        print(f"{self.nom} {url} saytini ochmoqda...")

class Kamera_mixin:
    def rasm_olish(self):
        print(f"{self.nom} rasm olayapti...")
    
    def video_olish(self):
        print(f"{self.nom} video olayapti...")

class Telefon:
    def __init__(self, nom, model):
        self.nom = nom
        self.model = model
        self.batareya = 100

class Smartfon(Telefon, Qo_ng_iroq_mixin, Xabar_mixin, Internet_mixin, Kamera_mixin):
    def __init__(self, nom, model):
        super().__init__(nom, model)
        self.ram = 4
        self.xotira = 64

class Oddiy_telefon(Telefon, Qo_ng_iroq_mixin, Xabar_mixin):
    def __init__(self, nom, model):
        super().__init__(nom, model)
        self.sim_karta = True

# Test qilish
smartfon = Smartfon("iPhone", "14")
oddiy_telefon = Oddiy_telefon("Nokia", "3310")

print("=== Smartfon ===")
smartfon.qo_ng_iroq_qilish("+998901234567")
smartfon.xabar_yuborish("+998901234567", "Salom!")
smartfon.internet_ochish()
smartfon.rasm_olish()

print("\n=== Oddiy telefon ===")
oddiy_telefon.qo_ng_iroq_qilish("+998901234567")
oddiy_telefon.xabar_yuborish("+998901234567", "Salom!")
# oddiy_telefon.internet_ochish()  # Bu ishlamaydi - Internet_mixin yo'q
```

Mixins'ning afzalliklari:
1. **Kodni qisqartirish** - takroriy kodlarni kamaytirish
2. **Moslashuvchanlik** - kerakli xususiyatlarni tanlash
3. **Tartibli kod** - mantiqiy tuzilish
4. **Qayta ishlatish** - bir mixin'ni ko'p joyda ishlatish

Savol: Mixins nima uchun kerak? Kim aytib bera oladi?


2. Composition vs Inheritance (25 daqiqa)
Ajoyib! Endi Composition vs Inheritance haqida batafsil o'rganamiz. Bu juda muhim tushunchalar!

**Inheritance** - "IS-A" munosabati (Mashina IS-A Transport)
**Composition** - "HAS-A" munosabati (Mashina HAS-A Dvigatel)

```python
# Inheritance misoli
class Transport:
    def __init__(self, nom):
        self.nom = nom
        self.tezlik = 0
    
    def harakatlanish(self):
        print(f"{self.nom} harakatlanmoqda...")

class Mashina(Transport):  # Inheritance
    def __init__(self, nom, rang):
        super().__init__(nom)
        self.rang = rang

# Composition misoli
class Dvigatel:
    def __init__(self, kuch):
        self.kuch = kuch
        self.yoniq = False
    
    def yoqish(self):
        self.yoniq = True
        print(f"Dvigatel yoqildi! Kuch: {self.kuch} ot kuchi")
    
    def o_chirish(self):
        self.yoniq = False
        print("Dvigatel o'chirildi!")

class Tormoz:
    def __init__(self, tur):
        self.tur = tur
        self.ishlamoqda = False
    
    def ishlatish(self):
        self.ishlamoqda = True
        print(f"{self.tur} tormoz ishlatildi!")
    
    def to_xtatish(self):
        self.ishlamoqda = False
        print("Tormoz to'xtatildi!")

class Koleso:
    def __init__(self, o_lcham):
        self.o_lcham = o_lcham
        self.tezlik = 0
    
    def aylanish(self, tezlik):
        self.tezlik = tezlik
        print(f"Koleso {tezlik} km/h tezlikda aylanmoqda!")

class Mashina_composition:
    def __init__(self, nom, rang):
        self.nom = nom
        self.rang = rang
        self.tezlik = 0
        # Composition - mashina boshqa object'larni o'z ichiga oladi
        self.dvigatel = Dvigatel(150)
        self.tormoz = Tormoz("Disk")
        self.kolesolar = [Koleso(17) for _ in range(4)]
    
    def yoqish(self):
        self.dvigatel.yoqish()
        print(f"{self.rang} {self.nom} yoqildi!")
    
    def o_chirish(self):
        self.dvigatel.o_chirish()
        print(f"{self.nom} o'chirildi!")
    
    def harakatlanish(self):
        if self.dvigatel.yoniq:
            self.tezlik = 60
            for koleso in self.kolesolar:
                koleso.aylanish(self.tezlik)
            print(f"{self.nom} harakatlanmoqda! Tezlik: {self.tezlik} km/h")
        else:
            print(f"{self.nom} o'chik!")
    
    def toxtash(self):
        self.tormoz.ishlatish()
        self.tezlik = 0
        for koleso in self.kolesolar:
            koleso.aylanish(0)
        print(f"{self.nom} to'xtadi!")

# Test qilish
print("=== Inheritance misoli ===")
mashina1 = Mashina("Toyota", "Qizil")
mashina1.harakatlanish()

print("\n=== Composition misoli ===")
mashina2 = Mashina_composition("Honda", "Ko'k")
mashina2.yoqish()
mashina2.harakatlanish()
mashina2.toxtash()
mashina2.o_chirish()
```

Composition vs Inheritance:
- **Inheritance**: "IS-A" munosabati, kod qayta ishlatish
- **Composition**: "HAS-A" munosabati, moslashuvchanlik
- **Inheritance**: tez, lekin qattiq bog'langan
- **Composition**: sekin, lekin moslashuvchan

Amaliy mashq: "Kompyuter" class yarating va Composition'dan foydalaning! 10 daqiqa vaqt beraman!


3. Design Patterns (25 daqiqa)
Zo'r! Endi Design Patterns haqida o'rganamiz. Bu juda muhim va professional tushunchalar!

Design Patterns - bu dasturlashda tez-tez uchraydigan muammolarni yechish uchun ishlatiladigan tayyor yechimlar.

```python
# Factory Pattern
class Transport_factory:
    @staticmethod
    def transport_yaratish(tur, nom, **kwargs):
        if tur == "mashina":
            return Mashina(nom, kwargs.get("rang", "Oq"))
        elif tur == "samolyot":
            return Samolyot(nom, kwargs.get("model", "Boeing"))
        elif tur == "kema":
            return Kema(nom, kwargs.get("tur", "Passajir"))
        else:
            raise ValueError(f"Noto'g'ri transport turi: {tur}")

class Mashina:
    def __init__(self, nom, rang):
        self.nom = nom
        self.rang = rang
    
    def harakatlanish(self):
        print(f"{self.rang} {self.nom} yo'lda harakatlanmoqda!")

class Samolyot:
    def __init__(self, nom, model):
        self.nom = nom
        self.model = model
    
    def harakatlanish(self):
        print(f"{self.model} {self.nom} osmonda uchmoqda!")

class Kema:
    def __init__(self, nom, tur):
        self.nom = nom
        self.tur = tur
    
    def harakatlanish(self):
        print(f"{self.tur} {self.nom} dengizda suzmoqda!")

# Observer Pattern
class Observer:
    def update(self, xabar):
        pass

class Subject:
    def __init__(self):
        self.observers = []
    
    def observer_qo_shish(self, observer):
        self.observers.append(observer)
    
    def observer_olish(self, observer):
        self.observers.remove(observer)
    
    def xabar_yuborish(self, xabar):
        for observer in self.observers:
            observer.update(xabar)

class Telefon(Observer):
    def __init__(self, nom):
        self.nom = nom
    
    def update(self, xabar):
        print(f"{self.nom} xabar qabul qildi: {xabar}")

class Kompyuter(Observer):
    def __init__(self, nom):
        self.nom = nom
    
    def update(self, xabar):
        print(f"{self.nom} xabar qabul qildi: {xabar}")

# Test qilish
print("=== Factory Pattern ===")
transportlar = [
    Transport_factory.transport_yaratish("mashina", "Toyota", rang="Qizil"),
    Transport_factory.transport_yaratish("samolyot", "Boeing", model="747"),
    Transport_factory.transport_yaratish("kema", "Titanic", tur="Passajir")
]

for transport in transportlar:
    transport.harakatlanish()

print("\n=== Observer Pattern ===")
subject = Subject()
telefon = Telefon("iPhone")
kompyuter = Kompyuter("MacBook")

subject.observer_qo_shish(telefon)
subject.observer_qo_shish(kompyuter)

subject.xabar_yuborish("Yangi xabar!")
```

Design Patterns'ning afzalliklari:
1. **Tayyor yechimlar** - tez-tez uchraydigan muammolarni yechish
2. **Tartibli kod** - mantiqiy tuzilish
3. **Kodni qisqartirish** - takroriy kodlarni kamaytirish
4. **Professional dasturlash** - sanoat standartlari

Amaliy mashq: "Builder Pattern" yarating va ishlatib ko'ring! 10 daqiqa vaqt beraman!


4. Singleton Pattern (20 daqiqa)
Ajoyib! Endi Singleton Pattern haqida o'rganamiz. Bu juda muhim va professional tushuncha!

Singleton Pattern - bu class'ning faqat bitta instance (nusxasi) yaratilishini ta'minlaydi.

```python
class Singleton:
    _instance = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance
    
    def __init__(self):
        if not hasattr(self, 'initialized'):
            self.initialized = True
            self.ma_lumot = "Singleton ma'lumoti"
            print("Singleton yaratildi!")

# Test qilish
singleton1 = Singleton()
singleton2 = Singleton()

print(f"singleton1: {singleton1}")
print(f"singleton2: {singleton2}")
print(f"singleton1 == singleton2: {singleton1 == singleton2}")

singleton1.ma_lumot = "Yangi ma'lumot"
print(f"singleton2.ma_lumot: {singleton2.ma_lumot}")

# Decorator bilan Singleton
def singleton_decorator(cls):
    instances = {}
    def get_instance(*args, **kwargs):
        if cls not in instances:
            instances[cls] = cls(*args, **kwargs)
        return instances[cls]
    return get_instance

@singleton_decorator
class Database:
    def __init__(self):
        self.ma_lumotlar = {}
        print("Database yaratildi!")
    
    def ma_lumot_qo_shish(self, kalit, qiymat):
        self.ma_lumotlar[kalit] = qiymat
        print(f"Ma'lumot qo'shildi: {kalit} = {qiymat}")
    
    def ma_lumot_olish(self, kalit):
        return self.ma_lumotlar.get(kalit, "Topilmadi")

# Test qilish
db1 = Database()
db2 = Database()

print(f"db1: {db1}")
print(f"db2: {db2}")
print(f"db1 == db2: {db1 == db2}")

db1.ma_lumot_qo_shish("ism", "Ali")
print(f"db2.ma_lumot_olish('ism'): {db2.ma_lumot_olish('ism')}")

# Metaclass bilan Singleton
class SingletonMeta(type):
    _instances = {}
    
    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super().__call__(*args, **kwargs)
        return cls._instances[cls]

class Logger(metaclass=SingletonMeta):
    def __init__(self):
        self.loglar = []
        print("Logger yaratildi!")
    
    def log_qo_shish(self, xabar):
        self.loglar.append(xabar)
        print(f"Log qo'shildi: {xabar}")
    
    def loglarni_ko_rsatish(self):
        print("=== Loglar ===")
        for log in self.loglar:
            print(log)

# Test qilish
logger1 = Logger()
logger2 = Logger()

print(f"logger1: {logger1}")
print(f"logger2: {logger2}")
print(f"logger1 == logger2: {logger1 == logger2}")

logger1.log_qo_shish("Birinchi log")
logger2.log_qo_shish("Ikkinchi log")
logger1.loglarni_ko_rsatish()
```

Singleton Pattern'ning afzalliklari:
1. **Bitta instance** - class'ning faqat bitta nusxasi
2. **Global kirish** - har qanday joydan kirish mumkin
3. **Xotira tejash** - kam xotira ishlatadi
4. **Professional dasturlash** - sanoat standartlari

Amaliy mashq: "Config" class yarating va Singleton Pattern'dan foydalaning! 10 daqiqa vaqt beraman!


5. Amaliy loyiha: O'yin tizimi (20 daqiqa)
Endi o'rganganlarimizni amalda sinab ko'ramiz! Keling, to'liq "O'yin" tizimini yaratamiz:

```python
from abc import ABC, abstractmethod

# Mixins
class Hujum_mixin:
    def hujum_qilish(self, dushman):
        zarar = self.kuch * 2
        print(f"{self.nom} {dushman}ga {zarar} zarar yetkazdi!")
        return zarar

class Himoya_mixin:
    def himoya_qilish(self):
        himoya_kuchi = self.defans * 1.5
        print(f"{self.nom} himoya qildi! Himoya kuchi: {himoya_kuchi}")
        return himoya_kuchi

class Sehr_mixin:
    def sehr_qilish(self, dushman):
        if self.mana >= 20:
            self.mana -= 20
            zarar = self.kuch * 3
            print(f"{self.nom} {dushman}ga sehr bilan {zarar} zarar yetkazdi!")
            return zarar
        else:
            print(f"{self.nom} mana yetarli emas!")
            return 0

# Abstract class
class O_yinchi(ABC):
    def __init__(self, nom, daraja=1):
        self.nom = nom
        self.daraja = daraja
        self.jon = 100
        self.kuch = 10
        self.defans = 5
        self.tajriba = 0
    
    def daraja_oshirish(self):
        if self.tajriba >= 100:
            self.daraja += 1
            self.kuch += 5
            self.defans += 3
            self.tajriba = 0
            print(f"{self.nom} {self.daraja}-darajaga ko'tarildi!")
        else:
            print(f"Daraja oshirish uchun {100 - self.tajriba} tajriba kerak!")
    
    @abstractmethod
    def maxsus_kuch(self):
        pass
    
    @abstractmethod
    def ma_lumot_ko_rsatish(self):
        pass

# Concrete classes
class Jangchi(O_yinchi, Hujum_mixin, Himoya_mixin):
    def __init__(self, nom, daraja=1):
        super().__init__(nom, daraja)
        self.kuch += 10
        self.defans += 5
    
    def maxsus_kuch(self):
        print(f"{self.nom} qilich bilan maxsus hujum qildi!")
        self.tajriba += 20
        return self.kuch * 3
    
    def ma_lumot_ko_rsatish(self):
        print(f"=== {self.nom} (Jangchi) ===")
        print(f"Daraja: {self.daraja}")
        print(f"Jon: {self.jon}")
        print(f"Kuch: {self.kuch}")
        print(f"Defans: {self.defans}")
        print(f"Tajriba: {self.tajriba}")

class Sehrgar(O_yinchi, Sehr_mixin, Himoya_mixin):
    def __init__(self, nom, daraja=1):
        super().__init__(nom, daraja)
        self.kuch += 5
        self.defans += 2
        self.mana = 100
    
    def maxsus_kuch(self):
        if self.mana >= 30:
            self.mana -= 30
            print(f"{self.nom} kuchli sehr qildi!")
            self.tajriba += 25
            return self.kuch * 4
        else:
            print(f"{self.nom} mana yetarli emas!")
            return 0
    
    def ma_lumot_ko_rsatish(self):
        print(f"=== {self.nom} (Sehrgar) ===")
        print(f"Daraja: {self.daraja}")
        print(f"Jon: {self.jon}")
        print(f"Kuch: {self.kuch}")
        print(f"Defans: {self.defans}")
        print(f"Mana: {self.mana}")
        print(f"Tajriba: {self.tajriba}")

# Factory Pattern
class O_yinchi_factory:
    @staticmethod
    def o_yinchi_yaratish(tur, nom, daraja=1):
        if tur == "jangchi":
            return Jangchi(nom, daraja)
        elif tur == "sehrgar":
            return Sehrgar(nom, daraja)
        else:
            raise ValueError(f"Noto'g'ri o'yinchi turi: {tur}")

# Singleton Pattern
class O_yin_manager:
    _instance = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance
    
    def __init__(self):
        if not hasattr(self, 'initialized'):
            self.initialized = True
            self.o_yinchilar = []
            print("O'yin manager yaratildi!")
    
    def o_yinchi_qo_shish(self, o_yinchi):
        self.o_yinchilar.append(o_yinchi)
        print(f"{o_yinchi.nom} o'yinchi qo'shildi!")
    
    def o_yinchi_olish(self, o_yinchi):
        self.o_yinchilar.remove(o_yinchi)
        print(f"{o_yinchi.nom} o'yinchi olindi!")
    
    def o_yinchilarni_ko_rsatish(self):
        print("=== O'yinchilar ===")
        for o_yinchi in self.o_yinchilar:
            o_yinchi.ma_lumot_ko_rsatish()

# Test qilish
print("=== O'yin tizimi ===")

# Factory Pattern
o_yinchilar = [
    O_yinchi_factory.o_yinchi_yaratish("jangchi", "Ali"),
    O_yinchi_factory.o_yinchi_yaratish("sehrgar", "Zilola")
]

# Singleton Pattern
manager = O_yin_manager()
for o_yinchi in o_yinchilar:
    manager.o_yinchi_qo_shish(o_yinchi)

print("\n=== O'yin jarayoni ===")
for o_yinchi in o_yinchilar:
    print("\n" + "="*50)
    o_yinchi.ma_lumot_ko_rsatish()
    o_yinchi.hujum_qilish("Goblin")
    o_yinchi.himoya_qilish()
    o_yinchi.maxsus_kuch()
    o_yinchi.daraja_oshirish()

print("\n=== Manager ===")
manager.o_yinchilarni_ko_rsatish()
```

Bu loyihada biz quyidagilarni ko'rdik:
- Mixins
- Composition vs Inheritance
- Design Patterns
- Singleton Pattern
- Real hayot misoli

Amaliy mashq: O'zingizning "Restoran" tizimini yarating va barcha advanced OOP concepts'dan foydalaning! 15 daqiqa vaqt beraman!


6. Xulosa va uy vazifasi (10 daqiqa)
Ajoyib, yosh dasturchilar! 🎉 Bugun biz Python'ning juda kuchli va professional xususiyatlari - Advanced OOP Concepts'ni o'rgandik:

✅ **Nimalarni o'rgandik:**
- Mixins nima va uning afzalliklari
- Composition vs Inheritance
- Design Patterns
- Singleton Pattern
- Amaliy loyiha: O'yin tizimi

✅ **Muhim tushunchalar:**
- **Mixins**: kichik, maxsus maqsadli class'lar
- **Composition**: "HAS-A" munosabati, moslashuvchanlik
- **Inheritance**: "IS-A" munosabati, kod qayta ishlatish
- **Design Patterns**: tez-tez uchraydigan muammolarni yechish uchun tayyor yechimlar
- **Singleton Pattern**: class'ning faqat bitta instance yaratilishini ta'minlaydi

**Uyga vazifa:**
1. "Transport" tizimi yarating:
   - Mixins: Dvigatel_mixin, Tormoz_mixin, Koleso_mixin
   - Composition: Mashina, Samolyot, Kema
   - Factory Pattern: Transport_factory
   - Singleton Pattern: Transport_manager

2. "Kutubxona" tizimi yarating:
   - Mixins: Kitob_mixin, O_quvchi_mixin, Ma_lumot_mixin
   - Composition: Kutubxona, Kitob, O_quvchi
   - Factory Pattern: Kitob_factory
   - Singleton Pattern: Kutubxona_manager

3. "Bank" tizimi yarating:
   - Mixins: Pul_mixin, Parol_mixin, Harakat_mixin
   - Composition: Bank, Hisob, Mijoz
   - Factory Pattern: Hisob_factory
   - Singleton Pattern: Bank_manager

**Keyingi dars:** Python OOP - OOP Best Practices mavzusini o'rganamiz.

Darsimiz shu bilan tugadi! Savollaringiz bo'lsa, yozib qoldiring yoki keyingi darsda so'rang! 😊

**Muhim eslatma:** Advanced OOP Concepts - bu professional dasturchi bo'lishning asosi. Ularni yaxshi o'rganing! 🚀
