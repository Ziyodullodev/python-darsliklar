📚 Darsning mavzusi: Python OOP - Class va Object batafsil, Instance va Class Methods
📚 Qisqacha vaqt taqsimoti
Qism
Davomiyligi
Class va Object qayta ko'rib chiqish
15 daqiqa
Instance Methods batafsil
25 daqiqa
Class Methods va Static Methods
25 daqiqa
self parametri va ishlatilishi
20 daqiqa
Amaliy loyiha: O'yinchi class
25 daqiqa
Xulosa va uy vazifasi
10 daqiqa
Jami
120 daqiqa (2 soat)


Bu usul yoshlar uchun samarali, qiziqarli va tushunarli bo'lib, o'quvchilarni dars jarayoniga faolroq jalb qiladi.


📖 Darsning batafsil rejasi
1. Class va Object qayta ko'rib chiqish (15 daqiqa)
Assalomu alaykum, yosh dasturchilar! 😊 Bugun biz o'tgan darsda o'rgangan Class va Object tushunchalarini chuqurroq o'rganamiz va yangi muhim tushunchalarni qo'shamiz.

Keling, avval o'tgan darsni qayta ko'rib chiqamiz:

```python
class Talaba:
    # Class attribute - barcha talabalar uchun umumiy
    universitet = "TATU"
    
    def __init__(self, ism, yosh, kurs):
        # Instance attributes - har bir talaba uchun alohida
        self.ism = ism
        self.yosh = yosh
        self.kurs = kurs
        self.ball = 0
    
    def oqish(self):
        print(f"{self.ism} o'qiyapti...")

# Object yaratish
talaba1 = Talaba("Ali", 18, 1)
talaba2 = Talaba("Zilola", 19, 2)
```

Eslatma:
- `Talaba` - class (shablon)
- `talaba1`, `talaba2` - objectlar (haqiqiy narsalar)
- `self` - objectning o'zini bildiradi
- `__init__` - constructor

Savol: Class va Object orasidagi farq nima? Kim aytib bera oladi?


2. Instance Methods batafsil (25 daqiqa)
Ajoyib! Endi Instance Methods haqida batafsil o'rganamiz. Instance method - bu object bilan ishlaydigan metod.

Instance method'ning xususiyatlari:
1. Birinchi parametri har doim `self` bo'ladi
2. Faqat object orqali chaqiriladi
3. Object'ning xususiyatlariga murojaat qila oladi

```python
class Mashina:
    def __init__(self, marka, model, yil):
        self.marka = marka
        self.model = model
        self.yil = yil
        self.tezlik = 0
        self.yoniq = False
        self.yoqlg_i = 50  # litr
    
    # Instance method - object bilan ishlaydi
    def yoqish(self):
        if self.yoqlg_i > 0:
            self.yoniq = True
            print(f"{self.marka} {self.model} yoqildi!")
        else:
            print("Yoqilg'i yo'q!")
    
    def o_chirish(self):
        self.yoniq = False
        self.tezlik = 0
        print(f"{self.marka} {self.model} o'chirildi!")
    
    def tezlashtirish(self, miqdor):
        if self.yoniq:
            self.tezlik += miqdor
            self.yoqlg_i -= mizqor * 0.1  # Har 10 km/h uchun 1 litr
            print(f"Tezlik: {self.tezlik} km/h")
            if self.yoqlg_i <= 0:
                print("Yoqilg'i tugadi!")
                self.o_chirish()
        else:
            print("Avtomobil o'chik!")
    
    def sekinlashtirish(self, miqdor):
        if self.tezlik >= miqdor:
            self.tezlik -= miqdor
            print(f"Tezlik: {self.tezlik} km/h")
        else:
            self.tezlik = 0
            print("Mashina to'xtadi!")
    
    def yoqlg_i_qo_shish(self, miqdor):
        self.yoqlg_i += miqdor
        print(f"{miqdor} litr yoqilg'i qo'shildi. Jami: {self.yoqlg_i} litr")
    
    def ma_lumot_ko_rsatish(self):
        print(f"Marka: {self.marka}")
        print(f"Model: {self.model}")
        print(f"Yil: {self.yil}")
        print(f"Tezlik: {self.tezlik} km/h")
        print(f"Holat: {'Yoqilgan' if self.yoniq else 'O'chik'}")
        print(f"Yoqilg'i: {self.yoqlg_i} litr")

# Test qilish
mashina1 = Mashina("Toyota", "Camry", 2020)
mashina1.ma_lumot_ko_rsatish()
mashina1.yoqlg_i_qo_shish(20)
mashina1.yoqish()
mashina1.tezlashtirish(50)
mashina1.tezlashtirish(30)
mashina1.ma_lumot_ko_rsatish()
```

E'tibor bering:
- Har bir method `self` parametrini oladi
- `self` orqali object'ning barcha xususiyatlariga murojaat qilamiz
- Method'lar object'ning holatini o'zgartirishi mumkin

Amaliy mashq: "Telefon" class yarating va unga quyidagi metodlarni qo'shing:
- yoqish(), o'chirish(), qo'ng'iroq(), xabar_yuborish(), batareya_holati()
10 daqiqa vaqt beraman!


3. Class Methods va Static Methods (25 daqiqa)
Zo'r! Endi Class Methods va Static Methods haqida o'rganamiz. Bu juda muhim tushunchalar!

**Class Method:**
- `@classmethod` dekoratori bilan belgilanadi
- Birinchi parametri `cls` (class'ni bildiradi)
- Class bilan ishlaydi, object bilan emas

**Static Method:**
- `@staticmethod` dekoratori bilan belgilanadi
- `self` yoki `cls` parametri olmaydi
- Class yoki object bilan chaqirilishi mumkin

```python
class Talaba:
    # Class attribute
    universitet = "TATU"
    talabalar_soni = 0
    
    def __init__(self, ism, yosh, kurs):
        self.ism = ism
        self.yosh = yosh
        self.kurs = kurs
        self.ball = 0
        Talaba.talabalar_soni += 1  # Har yangi talaba yaratilganda
    
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

Amaliy mashq: "Bank" class yarating va unga class method va static method qo'shing:
- Class method: bank_ma'lumotlari()
- Static method: foiz_hisoblash(), parol_tekshirish()
10 daqiqa vaqt beraman!


4. self parametri va ishlatilishi (20 daqiqa)
Ajoyib! Endi `self` parametri haqida batafsil o'rganamiz. Bu OOP'ning eng muhim tushunchalaridan biri!

`self` nima?
- `self` - bu objectning o'zini bildiradi
- Har bir instance method'ning birinchi parametri
- Python avtomatik ravishda `self` ga object'ni uzatadi

```python
class O'yinchi:
    def __init__(self, ism, daraja=1):
        self.ism = ism
        self.daraja = daraja
        self.jon = 100
        self.kuch = 10
        self.defans = 5
        self.tajriba = 0
    
    def hujum(self, dushman):
        # self - bu o'yinchi object'ini bildiradi
        zarar = self.kuch * 2
        print(f"{self.ism} {dushman}ga {zarar} zarar yetkazdi!")
        self.tajriba += 10
        return zarar
    
    def himoya(self):
        # self orqali object'ning xususiyatlariga murojaat
        himoya_kuchi = self.defans * 1.5
        print(f"{self.ism} himoya qildi! Himoya kuchi: {himoya_kuchi}")
        return himoya_kuchi
    
    def daraja_oshirish(self):
        if self.tajriba >= 100:
            self.daraja += 1
            self.kuch += 5
            self.defans += 3
            self.tajriba = 0
            print(f"{self.ism} {self.daraja}-darajaga ko'tarildi!")
            print(f"Yangi kuch: {self.kuch}, Yangi defans: {self.defans}")
        else:
            print(f"Daraja oshirish uchun {100 - self.tajriba} tajriba kerak!")
    
    def ma_lumot_ko_rsatish(self):
        print(f"=== {self.ism} ma'lumotlari ===")
        print(f"Daraja: {self.daraja}")
        print(f"Jon: {self.jon}")
        print(f"Kuch: {self.kuch}")
        print(f"Defans: {self.defans}")
        print(f"Tajriba: {self.tajriba}")

# Test qilish
oyinchi1 = O'yinchi("Ali")
oyinchi2 = O'yinchi("Zilola", 3)

oyinchi1.ma_lumot_ko_rsatish()
oyinchi1.hujum("Goblin")
oyinchi1.hujum("Ork")
oyinchi1.hujum("Dragon")
oyinchi1.daraja_oshirish()
oyinchi1.ma_lumot_ko_rsatish()
```

`self` ning muhim xususiyatlari:
1. **Avtomatik uzatiladi**: `oyinchi1.hujum("Goblin")` chaqirilganda, Python avtomatik ravishda `self` ga `oyinchi1` ni uzatadi
2. **Object'ning xususiyatlariga kirish**: `self.ism`, `self.daraja` kabi
3. **Object'ning holatini o'zgartirish**: `self.tajriba += 10` kabi

```python
# Bu ikki usul bir xil natija beradi:
oyinchi1.hujum("Goblin")
O'yinchi.hujum(oyinchi1, "Goblin")  # self ni qo'lda uzatish
```

Amaliy mashq: "Kitob" class yarating va `self` parametridan to'g'ri foydalaning:
- o'qish(), baho_berish(), ma'lumot_ko'rsatish() metodlarini yarating
5 daqiqa vaqt beraman!


5. Amaliy loyiha: O'yinchi class (25 daqiqa)
Endi o'rganganlarimizni amalda sinab ko'ramiz! Keling, to'liq "O'yinchi" class yaratamiz:

```python
class O'yinchi:
    # Class attributes
    o'yinchi_soni = 0
    o'yin_nomi = "Epic Adventure"
    
    def __init__(self, ism, sinf="Jangchi"):
        self.ism = ism
        self.sinf = sinf
        self.daraja = 1
        self.jon = 100
        self.kuch = 10
        self.defans = 5
        self.tezlik = 8
        self.tajriba = 0
        self.pul = 100
        self.uskunalar = []
        O'yinchi.o'yinchi_soni += 1
    
    # Instance methods
    def hujum(self, dushman):
        zarar = self.kuch * 2
        print(f"{self.ism} {dushman}ga {zarar} zarar yetkazdi!")
        self.tajriba += 10
        return zarar
    
    def himoya(self):
        himoya_kuchi = self.defans * 1.5
        print(f"{self.ism} himoya qildi! Himoya kuchi: {himoya_kuchi}")
        return himoya_kuchi
    
    def daraja_oshirish(self):
        if self.tajriba >= 100:
            self.daraja += 1
            self.kuch += 5
            self.defans += 3
            self.tezlik += 2
            self.jon += 20
            self.tajriba = 0
            print(f"🎉 {self.ism} {self.daraja}-darajaga ko'tarildi!")
            print(f"Yangi kuch: {self.kuch}, Yangi defans: {self.defans}")
        else:
            print(f"Daraja oshirish uchun {100 - self.tajriba} tajriba kerak!")
    
    def uskuna_sotib_olish(self, uskuna_nomi, narx):
        if self.pul >= narx:
            self.pul -= narx
            self.uskunalar.append(uskuna_nomi)
            print(f"{uskuna_nomi} sotib olindi! Qolgan pul: {self.pul}")
        else:
            print(f"Yetarli pul yo'q! Kerak: {narx}, Mavjud: {self.pul}")
    
    def ma_lumot_ko_rsatish(self):
        print(f"\n=== {self.ism} ma'lumotlari ===")
        print(f"Sinf: {self.sinf}")
        print(f"Daraja: {self.daraja}")
        print(f"Jon: {self.jon}")
        print(f"Kuch: {self.kuch}")
        print(f"Defans: {self.defans}")
        print(f"Tezlik: {self.tezlik}")
        print(f"Tajriba: {self.tajriba}")
        print(f"Pul: {self.pul}")
        print(f"Uskunalar: {self.uskunalar}")
    
    # Class methods
    @classmethod
    def o'yin_haqida(cls):
        print(f"O'yin nomi: {cls.o'yin_nomi}")
        print(f"Jami o'yinchilar soni: {cls.o'yinchi_soni}")
    
    @classmethod
    def yangi_o'yinchi(cls, ism, sinf):
        print(f"Yangi o'yinchi qo'shildi: {ism} ({sinf})")
        return cls(ism, sinf)
    
    # Static methods
    @staticmethod
    def zarar_hisoblash(kuch, defans):
        return max(1, kuch - defans)
    
    @staticmethod
    def daraja_tekshirish(tajriba):
        return tajriba // 100 + 1

# Test qilish
print("=== O'yin boshlanmoqda ===")
O'yinchi.o'yin_haqida()

print("\n=== O'yinchilar yaratilmoqda ===")
oyinchi1 = O'yinchi("Ali", "Jangchi")
oyinchi2 = O'yinchi("Zilola", "Sehrgar")
oyinchi3 = O'yinchi.yangi_o'yinchi("Sardor", "Kamandir")

print("\n=== O'yin jarayoni ===")
oyinchi1.ma_lumot_ko_rsatish()
oyinchi1.hujum("Goblin")
oyinchi1.hujum("Ork")
oyinchi1.hujum("Dragon")
oyinchi1.hujum("Boss")
oyinchi1.daraja_oshirish()
oyinchi1.uskuna_sotib_olish("Qilich", 50)
oyinchi1.uskuna_sotib_olish("Qalqon", 30)
oyinchi1.ma_lumot_ko_rsatish()

print("\n=== O'yin statistikasi ===")
O'yinchi.o'yin_haqida()
```

Bu loyihada biz quyidagilarni ko'rdik:
- Instance methods (`hujum`, `himoya`, `daraja_oshirish`)
- Class methods (`o'yin_haqida`, `yangi_o'yinchi`)
- Static methods (`zarar_hisoblash`, `daraja_tekshirish`)
- `self` parametridan to'g'ri foydalanish

Amaliy mashq: O'zingizning "Restoran" class yarating va yuqoridagi barcha tushunchalarni qo'llang! 15 daqiqa vaqt beraman!


6. Xulosa va uy vazifasi (10 daqiqa)
Ajoyib, yosh dasturchilar! 🎉 Bugun biz Python OOP'ning muhim tushunchalarini o'rgandik:

✅ **Nimalarni o'rgandik:**
- Instance Methods batafsil
- Class Methods va Static Methods
- `self` parametri va uning ishlatilishi
- Amaliy loyiha: O'yinchi class

✅ **Muhim tushunchalar:**
- **Instance method**: `self` - object bilan ishlaydi
- **Class method**: `@classmethod`, `cls` - class bilan ishlaydi
- **Static method**: `@staticmethod` - mustaqil ishlaydi
- **self**: objectning o'zini bildiradi, avtomatik uzatiladi

**Uyga vazifa:**
1. "Kutubxona" class yarating:
   - Instance methods: kitob_qo'shish(), kitob_olish(), ma'lumot_ko'rsatish()
   - Class method: kutubxona_statistikasi()
   - Static method: kitob_tekshirish(), narx_hisoblash()

2. "Bank" class yarating:
   - Instance methods: pul_qo'shish(), pul_olish(), balans_ko'rsatish()
   - Class method: bank_ma'lumotlari()
   - Static method: foiz_hisoblash(), parol_tekshirish()

3. Har ikkala class uchun ham 2-3 ta object yarating va barcha metodlarni sinab ko'ring.

**Keyingi dars:** Python OOP - Inheritance (Meros) mavzusini o'rganamiz.

Darsimiz shu bilan tugadi! Savollaringiz bo'lsa, yozib qoldiring yoki keyingi darsda so'rang! 😊

**Muhim eslatma:** Class va Object tushunchalari OOP'ning asosi. Ularni yaxshi o'rganing! 🚀
