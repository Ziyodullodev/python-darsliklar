📚 Darsning mavzusi: Python OOP - Abstract Classes - ABC (Abstract Base Classes) va Interface
📚 Qisqacha vaqt taqsimoti
Qism
Davomiyligi
Abstract Classes nima?
20 daqiqa
ABC (Abstract Base Classes)
25 daqiqa
Abstract Methods
25 daqiqa
Interface va Protocol
20 daqiqa
Amaliy loyiha: Hayvonlar tizimi
20 daqiqa
Xulosa va uy vazifasi
10 daqiqa
Jami
120 daqiqa (2 soat)


Bu usul yoshlar uchun samarali, qiziqarli va tushunarli bo'lib, o'quvchilarni dars jarayoniga faolroq jalb qiladi.


📖 Darsning batafsil rejasi
1. Abstract Classes nima? (20 daqiqa)
Assalomu alaykum, yosh dasturchilar! 😊 Bugun biz Python'ning juda muhim va kuchli xususiyati - Abstract Classes haqida o'rganamiz. Bu juda muhim tushuncha!

Abstract Classes nima deb o'ylaysiz? 🤔 Keling, real hayot misoli bilan tushunamiz:

Agar sizda "Transport" degan umumiy tushuncha bo'lsa, unda "Mashina", "Samolyot", "Kema" kabi turli xil transport vositalari bor. Har bir transport vositasida umumiy xususiyatlar bor: tezlik, yoqilg'i, harakatlanish kabi. Lekin har bir transport vositasining o'ziga xos xatti-harakatlari bor.

Abstract Classes - bu to'liq implementatsiya qilinmagan class'lar. Ular faqat "shablon" vazifasini bajaradi va child class'lar ularni to'liq implementatsiya qilishi kerak.

```python
from abc import ABC, abstractmethod

class Transport(ABC):  # Abstract class
    def __init__(self, nom, tezlik=0):
        self.nom = nom
        self.tezlik = tezlik
        self.yoniq = False
    
    def yoqish(self):  # Umumiy metod
        self.yoniq = True
        print(f"{self.nom} yoqildi!")
    
    def o_chirish(self):  # Umumiy metod
        self.yoniq = False
        self.tezlik = 0
        print(f"{self.nom} o'chirildi!")
    
    @abstractmethod  # Abstract metod
    def harakatlanish(self):
        pass
    
    @abstractmethod  # Abstract metod
    def toxtash(self):
        pass

class Mashina(Transport):
    def __init__(self, nom, rang):
        super().__init__(nom)
        self.rang = rang
    
    def harakatlanish(self):  # Abstract metodni implementatsiya qilish
        if self.yoniq:
            self.tezlik = 60
            print(f"{self.rang} {self.nom} yo'lda harakatlanmoqda!")
        else:
            print(f"{self.nom} o'chik!")
    
    def toxtash(self):  # Abstract metodni implementatsiya qilish
        self.tezlik = 0
        print(f"{self.nom} yo'lda to'xtadi!")

# Test qilish
mashina = Mashina("Toyota", "Qizil")
mashina.yoqish()
mashina.harakatlanish()
mashina.toxtash()
```

Abstract Classes'ning afzalliklari:
1. **Tartibli tuzilish** - mantiqiy class'lar tuzilishi
2. **Majburiy implementatsiya** - child class'lar abstract metodlarni implementatsiya qilishi kerak
3. **Kodni qisqartirish** - takroriy kodlarni kamaytirish
4. **Tushunarli kod** - bir xil interfeys, turli xatti-harakat

Savol: Abstract Classes nima uchun kerak? Kim aytib bera oladi?


2. ABC (Abstract Base Classes) (25 daqiqa)
Ajoyib! Endi ABC (Abstract Base Classes) haqida batafsil o'rganamiz.

ABC - bu Python'ning `abc` modulida mavjud bo'lgan Abstract Base Classes.

```python
from abc import ABC, abstractmethod

class Hayvon(ABC):  # Abstract class
    def __init__(self, nom, yosh):
        self.nom = nom
        self.yosh = yosh
        self.jon = 100
        self.och = True
    
    def ovqatlanish(self):  # Umumiy metod
        if self.och:
            self.och = False
            self.jon += 20
            print(f"{self.nom} ovqatlandi!")
        else:
            print(f"{self.nom} och emas!")
    
    def uxlash(self):  # Umumiy metod
        self.jon += 10
        print(f"{self.nom} uxlayapti...")
    
    @abstractmethod  # Abstract metod
    def ovoz_chiqarish(self):
        pass
    
    @abstractmethod  # Abstract metod
    def harakatlanish(self):
        pass
    
    @abstractmethod  # Abstract metod
    def yashash_joyi(self):
        pass

class It(Hayvon):
    def __init__(self, nom, yosh, zot):
        super().__init__(nom, yosh)
        self.zot = zot
    
    def ovoz_chiqarish(self):  # Abstract metodni implementatsiya qilish
        print(f"{self.nom} havlayapti: Woof! Woof!")
    
    def harakatlanish(self):  # Abstract metodni implementatsiya qilish
        print(f"{self.nom} yugurmoqda...")
    
    def yashash_joyi(self):  # Abstract metodni implementatsiya qilish
        print(f"{self.nom} uyda yashaydi!")

class Mushuk(Hayvon):
    def __init__(self, nom, yosh, rang):
        super().__init__(nom, yosh)
        self.rang = rang
    
    def ovoz_chiqarish(self):  # Abstract metodni implementatsiya qilish
        print(f"{self.nom} miyovlayapti: Meow! Meow!")
    
    def harakatlanish(self):  # Abstract metodni implementatsiya qilish
        print(f"{self.nom} sakramoqda...")
    
    def yashash_joyi(self):  # Abstract metodni implementatsiya qilish
        print(f"{self.nom} uyda yashaydi!")

class Qush(Hayvon):
    def __init__(self, nom, yosh, tur):
        super().__init__(nom, yosh)
        self.tur = tur
    
    def ovoz_chiqarish(self):  # Abstract metodni implementatsiya qilish
        print(f"{self.nom} qo'nqiroq qilayapti: Tweet! Tweet!")
    
    def harakatlanish(self):  # Abstract metodni implementatsiya qilish
        print(f"{self.nom} uchmoqda...")
    
    def yashash_joyi(self):  # Abstract metodni implementatsiya qilish
        print(f"{self.nom} osmonda yashaydi!")

# Test qilish
hayvonlar = [
    It("Rex", 3, "Olmon"),
    Mushuk("Mimi", 2, "Oq"),
    Qush("Qarg'a", 1, "Qora")
]

for hayvon in hayvonlar:
    print(f"\n=== {hayvon.nom} ===")
    hayvon.ovoz_chiqarish()
    hayvon.harakatlanish()
    hayvon.yashash_joyi()
    hayvon.ovqatlanish()
```

ABC'ning afzalliklari:
1. **Majburiy implementatsiya** - child class'lar abstract metodlarni implementatsiya qilishi kerak
2. **Tartibli tuzilish** - mantiqiy class'lar tuzilishi
3. **Kodni qisqartirish** - takroriy kodlarni kamaytirish
4. **Tushunarli kod** - bir xil interfeys, turli xatti-harakat

Amaliy mashq: "O'yinchi" abstract class yarating va undan "Jangchi", "Sehrgar" child class'lar yarating! 10 daqiqa vaqt beraman!


3. Abstract Methods (25 daqiqa)
Zo'r! Endi Abstract Methods haqida batafsil o'rganamiz.

Abstract Methods - bu to'liq implementatsiya qilinmagan metodlar. Ular faqat "shablon" vazifasini bajaradi va child class'lar ularni to'liq implementatsiya qilishi kerak.

```python
from abc import ABC, abstractmethod

class O_yinchi(ABC):  # Abstract class
    def __init__(self, nom, daraja=1):
        self.nom = nom
        self.daraja = daraja
        self.jon = 100
        self.kuch = 10
        self.defans = 5
        self.tajriba = 0
    
    def daraja_oshirish(self):  # Umumiy metod
        if self.tajriba >= 100:
            self.daraja += 1
            self.kuch += 5
            self.defans += 3
            self.tajriba = 0
            print(f"{self.nom} {self.daraja}-darajaga ko'tarildi!")
        else:
            print(f"Daraja oshirish uchun {100 - self.tajriba} tajriba kerak!")
    
    @abstractmethod  # Abstract metod
    def hujum(self, dushman):
        pass
    
    @abstractmethod  # Abstract metod
    def himoya(self):
        pass
    
    @abstractmethod  # Abstract metod
    def maxsus_kuch(self):
        pass
    
    @abstractmethod  # Abstract metod
    def ma_lumot_ko_rsatish(self):
        pass

class Jangchi(O_yinchi):
    def __init__(self, nom, daraja=1):
        super().__init__(nom, daraja)
        self.kuch += 10  # Jangchi kuchliroq
        self.defans += 5  # Jangchi himoyaliroq
    
    def hujum(self, dushman):  # Abstract metodni implementatsiya qilish
        zarar = self.kuch * 2
        print(f"{self.nom} {dushman}ga {zarar} zarar yetkazdi!")
        self.tajriba += 15
        return zarar
    
    def himoya(self):  # Abstract metodni implementatsiya qilish
        himoya_kuchi = self.defans * 2
        print(f"{self.nom} qalqon bilan himoya qildi! Himoya kuchi: {himoya_kuchi}")
        return himoya_kuchi
    
    def maxsus_kuch(self):  # Abstract metodni implementatsiya qilish
        print(f"{self.nom} qilich bilan maxsus hujum qildi!")
        self.tajriba += 20
        return self.kuch * 3
    
    def ma_lumot_ko_rsatish(self):  # Abstract metodni implementatsiya qilish
        print(f"=== {self.nom} (Jangchi) ===")
        print(f"Daraja: {self.daraja}")
        print(f"Jon: {self.jon}")
        print(f"Kuch: {self.kuch}")
        print(f"Defans: {self.defans}")
        print(f"Tajriba: {self.tajriba}")

class Sehrgar(O_yinchi):
    def __init__(self, nom, daraja=1):
        super().__init__(nom, daraja)
        self.kuch += 5   # Sehrgar o'rtacha kuch
        self.defans += 2  # Sehrgar zaifroq
        self.mana = 100   # Sehrgar mana'ga ega
    
    def hujum(self, dushman):  # Abstract metodni implementatsiya qilish
        zarar = self.kuch * 1.5
        self.mana -= 10
        print(f"{self.nom} {dushman}ga sehr bilan {zarar} zarar yetkazdi!")
        self.tajriba += 12
        return zarar
    
    def himoya(self):  # Abstract metodni implementatsiya qilish
        himoya_kuchi = self.defans * 1.5
        self.mana -= 5
        print(f"{self.nom} sehrli himoya qildi! Himoya kuchi: {himoya_kuchi}")
        return himoya_kuchi
    
    def maxsus_kuch(self):  # Abstract metodni implementatsiya qilish
        if self.mana >= 20:
            self.mana -= 20
            print(f"{self.nom} kuchli sehr qildi!")
            self.tajriba += 25
            return self.kuch * 4
        else:
            print(f"{self.nom} mana yetarli emas!")
            return 0
    
    def ma_lumot_ko_rsatish(self):  # Abstract metodni implementatsiya qilish
        print(f"=== {self.nom} (Sehrgar) ===")
        print(f"Daraja: {self.daraja}")
        print(f"Jon: {self.jon}")
        print(f"Kuch: {self.kuch}")
        print(f"Defans: {self.defans}")
        print(f"Mana: {self.mana}")
        print(f"Tajriba: {self.tajriba}")

# Test qilish
o_yinchilar = [
    Jangchi("Ali"),
    Sehrgar("Zilola")
]

for o_yinchi in o_yinchilar:
    print("\n" + "="*50)
    o_yinchi.ma_lumot_ko_rsatish()
    o_yinchi.hujum("Goblin")
    o_yinchi.himoya()
    o_yinchi.maxsus_kuch()
    o_yinchi.daraja_oshirish()
```

Abstract Methods'ning afzalliklari:
1. **Majburiy implementatsiya** - child class'lar abstract metodlarni implementatsiya qilishi kerak
2. **Tartibli tuzilish** - mantiqiy class'lar tuzilishi
3. **Kodni qisqartirish** - takroriy kodlarni kamaytirish
4. **Tushunarli kod** - bir xil interfeys, turli xatti-harakat

Amaliy mashq: "Transport" abstract class yarating va undan "Mashina", "Samolyot" child class'lar yarating! 10 daqiqa vaqt beraman!


4. Interface va Protocol (20 daqiqa)
Ajoyib! Endi Interface va Protocol haqida o'rganamiz. Bu juda muhim tushunchalar!

**Interface** - bu class'ning qanday metodlarga ega bo'lishi kerakligini belgilaydi.
**Protocol** - bu Python'ning "duck typing" prinsipi asosida ishlaydi.

```python
from abc import ABC, abstractmethod

class TransportInterface(ABC):  # Interface
    @abstractmethod
    def harakatlanish(self):
        pass
    
    @abstractmethod
    def toxtash(self):
        pass
    
    @abstractmethod
    def tezlik_oshirish(self, miqdor):
        pass
    
    @abstractmethod
    def tezlik_kamaytirish(self, miqdor):
        pass

class Mashina(TransportInterface):
    def __init__(self, nom, rang):
        self.nom = nom
        self.rang = rang
        self.tezlik = 0
        self.yoniq = False
    
    def harakatlanish(self):  # Interface metodini implementatsiya qilish
        if self.yoniq:
            self.tezlik = 60
            print(f"{self.rang} {self.nom} yo'lda harakatlanmoqda!")
        else:
            print(f"{self.nom} o'chik!")
    
    def toxtash(self):  # Interface metodini implementatsiya qilish
        self.tezlik = 0
        print(f"{self.nom} yo'lda to'xtadi!")
    
    def tezlik_oshirish(self, miqdor):  # Interface metodini implementatsiya qilish
        if self.yoniq:
            self.tezlik += miqdor
            print(f"Tezlik {miqdor} km/h ga oshirildi. Joriy tezlik: {self.tezlik} km/h")
        else:
            print(f"{self.nom} o'chik!")
    
    def tezlik_kamaytirish(self, miqdor):  # Interface metodini implementatsiya qilish
        if self.tezlik >= miqdor:
            self.tezlik -= miqdor
            print(f"Tezlik {miqdor} km/h ga kamaytirildi. Joriy tezlik: {self.tezlik} km/h")
        else:
            self.tezlik = 0
            print(f"{self.nom} to'xtadi!")

class Samolyot(TransportInterface):
    def __init__(self, nom, model):
        self.nom = nom
        self.model = model
        self.tezlik = 0
        self.yoniq = False
    
    def harakatlanish(self):  # Interface metodini implementatsiya qilish
        if self.yoniq:
            self.tezlik = 800
            print(f"{self.model} {self.nom} osmonda uchmoqda!")
        else:
            print(f"{self.nom} o'chik!")
    
    def toxtash(self):  # Interface metodini implementatsiya qilish
        self.tezlik = 0
        print(f"{self.nom} aeroportda qo'ndi!")
    
    def tezlik_oshirish(self, miqdor):  # Interface metodini implementatsiya qilish
        if self.yoniq:
            self.tezlik += miqdor
            print(f"Tezlik {miqdor} km/h ga oshirildi. Joriy tezlik: {self.tezlik} km/h")
        else:
            print(f"{self.nom} o'chik!")
    
    def tezlik_kamaytirish(self, miqdor):  # Interface metodini implementatsiya qilish
        if self.tezlik >= miqdor:
            self.tezlik -= miqdor
            print(f"Tezlik {miqdor} km/h ga kamaytirildi. Joriy tezlik: {self.tezlik} km/h")
        else:
            self.tezlik = 0
            print(f"{self.nom} to'xtadi!")

# Test qilish
transportlar = [
    Mashina("Toyota", "Qizil"),
    Samolyot("Boeing", "747")
]

for transport in transportlar:
    print(f"\n=== {transport.nom} ===")
    transport.harakatlanish()
    transport.tezlik_oshirish(50)
    transport.tezlik_kamaytirish(30)
    transport.toxtash()
```

Interface va Protocol'ning afzalliklari:
1. **Tartibli tuzilish** - mantiqiy class'lar tuzilishi
2. **Majburiy implementatsiya** - child class'lar interface metodlarni implementatsiya qilishi kerak
3. **Kodni qisqartirish** - takroriy kodlarni kamaytirish
4. **Tushunarli kod** - bir xil interfeys, turli xatti-harakat

Amaliy mashq: "O'yinchi" interface yarating va undan "Jangchi", "Sehrgar" child class'lar yarating! 10 daqiqa vaqt beraman!


5. Amaliy loyiha: Hayvonlar tizimi (20 daqiqa)
Endi o'rganganlarimizni amalda sinab ko'ramiz! Keling, to'liq "Hayvonlar" tizimini yaratamiz:

```python
from abc import ABC, abstractmethod

class Hayvon(ABC):  # Abstract class
    def __init__(self, nom, yosh):
        self.nom = nom
        self.yosh = yosh
        self.jon = 100
        self.och = True
        self.uyqu = False
    
    def ovqatlanish(self):  # Umumiy metod
        if self.och:
            self.och = False
            self.jon += 20
            print(f"{self.nom} ovqatlandi! Jon: {self.jon}")
        else:
            print(f"{self.nom} och emas!")
    
    def uxlash(self):  # Umumiy metod
        self.uyqu = True
        self.jon += 10
        print(f"{self.nom} uxlayapti... Jon: {self.jon}")
    
    def uyg_onish(self):  # Umumiy metod
        self.uyqu = False
        print(f"{self.nom} uyg'ondi!")
    
    @abstractmethod  # Abstract metod
    def ovoz_chiqarish(self):
        pass
    
    @abstractmethod  # Abstract metod
    def harakatlanish(self):
        pass
    
    @abstractmethod  # Abstract metod
    def yashash_joyi(self):
        pass
    
    @abstractmethod  # Abstract metod
    def ma_lumot_ko_rsatish(self):
        pass

class Sut_emizuvchi(Hayvon):  # Abstract class
    def __init__(self, nom, yosh, sut_emizish=True):
        super().__init__(nom, yosh)
        self.sut_emizish = sut_emizish
        self.jon += 10  # Sut emizuvchilar kuchliroq
    
    def sut_emizish(self):  # Umumiy metod
        if self.sut_emizish:
            print(f"{self.nom} sut emizayapti...")
        else:
            print(f"{self.nom} sut emizmaydi!")
    
    @abstractmethod  # Abstract metod
    def maxsus_xususiyat(self):
        pass

class It(Sut_emizuvchi):
    def __init__(self, nom, yosh, zot):
        super().__init__(nom, yosh)
        self.zot = zot
        self.uy_quvvat = True
    
    def ovoz_chiqarish(self):  # Abstract metodni implementatsiya qilish
        print(f"{self.nom} havlayapti: Woof! Woof!")
    
    def harakatlanish(self):  # Abstract metodni implementatsiya qilish
        print(f"{self.nom} yugurmoqda...")
    
    def yashash_joyi(self):  # Abstract metodni implementatsiya qilish
        print(f"{self.nom} uyda yashaydi!")
    
    def maxsus_xususiyat(self):  # Abstract metodni implementatsiya qilish
        if self.uy_quvvat:
            print(f"{self.nom} uyni quvvatlayapti!")
            self.jon -= 5
        else:
            print(f"{self.nom} uyni quvvatlamaydi!")
    
    def ma_lumot_ko_rsatish(self):  # Abstract metodni implementatsiya qilish
        print(f"=== {self.nom} (It) ===")
        print(f"Zot: {self.zot}")
        print(f"Yosh: {self.yosh}")
        print(f"Jon: {self.jon}")
        print(f"Och: {'Ha' if self.och else 'Yo'q'}")
        print(f"Uyqu: {'Ha' if self.uyqu else 'Yo'q'}")

class Mushuk(Sut_emizuvchi):
    def __init__(self, nom, yosh, rang):
        super().__init__(nom, yosh)
        self.rang = rang
        self.miyovlash = True
    
    def ovoz_chiqarish(self):  # Abstract metodni implementatsiya qilish
        print(f"{self.nom} miyovlayapti: Meow! Meow!")
    
    def harakatlanish(self):  # Abstract metodni implementatsiya qilish
        print(f"{self.nom} sakramoqda...")
    
    def yashash_joyi(self):  # Abstract metodni implementatsiya qilish
        print(f"{self.nom} uyda yashaydi!")
    
    def maxsus_xususiyat(self):  # Abstract metodni implementatsiya qilish
        print(f"{self.nom} sichqon tutmoqda...")
        self.jon -= 3
    
    def ma_lumot_ko_rsatish(self):  # Abstract metodni implementatsiya qilish
        print(f"=== {self.nom} (Mushuk) ===")
        print(f"Rang: {self.rang}")
        print(f"Yosh: {self.yosh}")
        print(f"Jon: {self.jon}")
        print(f"Och: {'Ha' if self.och else 'Yo'q'}")
        print(f"Uyqu: {'Ha' if self.uyqu else 'Yo'q'}")

class Qush(Hayvon):
    def __init__(self, nom, yosh, tur):
        super().__init__(nom, yosh)
        self.tur = tur
        self.uchish_qobiliyati = True
    
    def ovoz_chiqarish(self):  # Abstract metodni implementatsiya qilish
        print(f"{self.nom} qo'nqiroq qilayapti: Tweet! Tweet!")
    
    def harakatlanish(self):  # Abstract metodni implementatsiya qilish
        if self.uchish_qobiliyati:
            print(f"{self.nom} uchmoqda...")
            self.jon -= 8
        else:
            print(f"{self.nom} ucha olmaydi!")
    
    def yashash_joyi(self):  # Abstract metodni implementatsiya qilish
        print(f"{self.nom} osmonda yashaydi!")
    
    def ma_lumot_ko_rsatish(self):  # Abstract metodni implementatsiya qilish
        print(f"=== {self.nom} (Qush) ===")
        print(f"Tur: {self.tur}")
        print(f"Yosh: {self.yosh}")
        print(f"Jon: {self.jon}")
        print(f"Och: {'Ha' if self.och else 'Yo'q'}")
        print(f"Uyqu: {'Ha' if self.uyqu else 'Yo'q'}")

# Test qilish
hayvonlar = [
    It("Rex", 3, "Olmon"),
    Mushuk("Mimi", 2, "Oq"),
    Qush("Qarg'a", 1, "Qora")
]

print("=== Hayvonlar olami ===")
for hayvon in hayvonlar:
    print("\n" + "="*50)
    hayvon.ma_lumot_ko_rsatish()
    hayvon.ovoz_chiqarish()
    hayvon.harakatlanish()
    hayvon.yashash_joyi()
    hayvon.ovqatlanish()
    
    if isinstance(hayvon, Sut_emizuvchi):
        hayvon.sut_emizish()
        hayvon.maxsus_xususiyat()
```

Bu loyihada biz quyidagilarni ko'rdik:
- Abstract class'lar
- Abstract metodlar
- Interface va Protocol
- Real hayot misoli

Amaliy mashq: O'zingizning "Transport" tizimini yarating va Abstract Classes'dan foydalaning! 15 daqiqa vaqt beraman!


6. Xulosa va uy vazifasi (10 daqiqa)
Ajoyib, yosh dasturchilar! 🎉 Bugun biz Python'ning juda muhim xususiyati - Abstract Classes'ni o'rgandik:

✅ **Nimalarni o'rgandik:**
- Abstract Classes nima va uning afzalliklari
- ABC (Abstract Base Classes)
- Abstract Methods
- Interface va Protocol
- Amaliy loyiha: Hayvonlar tizimi

✅ **Muhim tushunchalar:**
- **Abstract Classes**: to'liq implementatsiya qilinmagan class'lar
- **ABC**: Python'ning `abc` modulida mavjud bo'lgan Abstract Base Classes
- **Abstract Methods**: to'liq implementatsiya qilinmagan metodlar
- **Interface**: class'ning qanday metodlarga ega bo'lishi kerakligini belgilaydi
- **Protocol**: Python'ning "duck typing" prinsipi asosida ishlaydi

**Uyga vazifa:**
1. "Transport" abstract class yarating:
   - Abstract metodlar: harakatlanish(), toxtash(), tezlik_oshirish(), tezlik_kamaytirish()
   - Child class'lar: Mashina, Samolyot, Kema

2. "O'yinchi" abstract class yarating:
   - Abstract metodlar: hujum(), himoya(), maxsus_kuch(), ma'lumot_ko'rsatish()
   - Child class'lar: Jangchi, Sehrgar, Kamandir

3. "Kitob" abstract class yarating:
   - Abstract metodlar: o'qish(), baho_berish(), ma'lumot_ko'rsatish()
   - Child class'lar: Darslik, Roman, Ilmiy_kitob

**Keyingi dars:** Python OOP - Advanced OOP Concepts mavzusini o'rganamiz.

Darsimiz shu bilan tugadi! Savollaringiz bo'lsa, yozib qoldiring yoki keyingi darsda so'rang! 😊

**Muhim eslatma:** Abstract Classes - bu professional dasturlashning asosi. Ularni yaxshi o'rganing! 🚀
