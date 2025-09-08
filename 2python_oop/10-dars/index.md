📚 Darsning mavzusi: Python OOP - OOP Best Practices - Professional dasturlash qoidalari
📚 Qisqacha vaqt taqsimoti
Qism
Davomiyligi
OOP Best Practices nima?
20 daqiqa
SOLID prinsiplari
25 daqiqa
Kod yozish qoidalari
25 daqiqa
Testing va Debugging
20 daqiqa
Amaliy loyiha: To'liq tizim
20 daqiqa
Xulosa va uy vazifasi
10 daqiqa
Jami
120 daqiqa (2 soat)


Bu usul yoshlar uchun samarali, qiziqarli va tushunarli bo'lib, o'quvchilarni dars jarayoniga faolroq jalb qiladi.


📖 Darsning batafsil rejasi
1. OOP Best Practices nima? (20 daqiqa)
Assalomu alaykum, yosh dasturchilar! 😊 Bugun biz Python OOP'ning oxirgi darsida - OOP Best Practices haqida o'rganamiz. Bu juda muhim va professional tushunchalar!

OOP Best Practices nima deb o'ylaysiz? 🤔 Keling, real hayot misoli bilan tushunamiz:

Agar sizda uy qurish kerak bo'lsa, siz arxitektor, muhandis, quruvchi kabi mutaxassislar bilan ishlaysiz. Har bir mutaxassis o'z ishini to'g'ri bajarishi kerak. OOP Best Practices - bu dasturlashda ham xuddi shunday. Har bir class, metod, funksiya o'z ishini to'g'ri bajarishi kerak.

OOP Best Practices - bu professional dasturlashda ishlatiladigan eng yaxshi usullar va qoidalar.

```python
# Yomon kod
class Talaba:
    def __init__(self, ism, yosh, kurs, ball, fan, muallif, yil, sahifalar):
        self.ism = ism
        self.yosh = yosh
        self.kurs = kurs
        self.ball = ball
        self.fan = fan
        self.muallif = muallif
        self.yil = yil
        self.sahifalar = sahifalar
    
    def hammasi(self):
        print(f"{self.ism} {self.yosh} yoshda {self.kurs} kursda o'qiyapti")
        print(f"Uning {self.ball} balli bor")
        print(f"U {self.fan} fanini o'qiyapti")
        print(f"Muallif {self.muallif}, yil {self.yil}, {self.sahifalar} sahifa")

# Yaxshi kod
class Talaba:
    def __init__(self, ism, yosh, kurs):
        self.ism = ism
        self.yosh = yosh
        self.kurs = kurs
        self.ball = 0
        self.fanlar = []
    
    def ball_qo_shish(self, miqdor):
        if 0 <= miqdor <= 100:
            self.ball += miqdor
        else:
            raise ValueError("Ball 0-100 orasida bo'lishi kerak!")
    
    def fan_qo_shish(self, fan):
        if fan not in self.fanlar:
            self.fanlar.append(fan)
    
    def ma_lumot_ko_rsatish(self):
        print(f"=== {self.ism} ma'lumotlari ===")
        print(f"Yosh: {self.yosh}")
        print(f"Kurs: {self.kurs}")
        print(f"Ball: {self.ball}")
        print(f"Fanlar: {', '.join(self.fanlar)}")

class Kitob:
    def __init__(self, nom, muallif, yil, sahifalar):
        self.nom = nom
        self.muallif = muallif
        self.yil = yil
        self.sahifalar = sahifalar
    
    def ma_lumot_ko_rsatish(self):
        print(f"=== {self.nom} ===")
        print(f"Muallif: {self.muallif}")
        print(f"Yil: {self.yil}")
        print(f"Sahifalar: {self.sahifalar}")

# Test qilish
talaba = Talaba("Ali", 18, 1)
talaba.ball_qo_shish(85)
talaba.fan_qo_shish("Matematika")
talaba.fan_qo_shish("Fizika")
talaba.ma_lumot_ko_rsatish()

kitob = Kitob("Python", "Ali", 2023, 300)
kitob.ma_lumot_ko_rsatish()
```

OOP Best Practices'ning afzalliklari:
1. **Tushunarli kod** - oson o'qish va tushunish
2. **Kodni saqlash** - oson saqlash va kengaytirish
3. **Xatolarni kamaytirish** - kam xatolar
4. **Professional dasturlash** - sanoat standartlari

Savol: OOP Best Practices nima uchun kerak? Kim aytib bera oladi?


2. SOLID prinsiplari (25 daqiqa)
Ajoyib! Endi SOLID prinsiplari haqida batafsil o'rganamiz. Bu juda muhim va professional tushunchalar!

SOLID - bu 5 ta prinsip:
- **S** - Single Responsibility Principle
- **O** - Open/Closed Principle
- **L** - Liskov Substitution Principle
- **I** - Interface Segregation Principle
- **D** - Dependency Inversion Principle

```python
# S - Single Responsibility Principle
# Har bir class faqat bitta vazifani bajarishi kerak

class Talaba:
    def __init__(self, ism, yosh, kurs):
        self.ism = ism
        self.yosh = yosh
        self.kurs = kurs
        self.ball = 0
    
    def ball_qo_shish(self, miqdor):
        if 0 <= miqdor <= 100:
            self.ball += miqdor
        else:
            raise ValueError("Ball 0-100 orasida bo'lishi kerak!")
    
    def ma_lumot_ko_rsatish(self):
        print(f"=== {self.ism} ma'lumotlari ===")
        print(f"Yosh: {self.yosh}")
        print(f"Kurs: {self.kurs}")
        print(f"Ball: {self.ball}")

class Ball_hisoblagich:
    def __init__(self):
        self.hisoblar = []
    
    def hisob_qo_shish(self, talaba, miqdor):
        self.hisoblar.append(f"{talaba.ism}: {miqdor} ball")
    
    def hisoblarni_ko_rsatish(self):
        print("=== Ball hisoblari ===")
        for hisob in self.hisoblar:
            print(hisob)

# O - Open/Closed Principle
# Class'lar kengaytirish uchun ochiq, o'zgartirish uchun yopiq bo'lishi kerak

class Transport:
    def __init__(self, nom):
        self.nom = nom
    
    def harakatlanish(self):
        print(f"{self.nom} harakatlanmoqda...")

class Mashina(Transport):
    def harakatlanish(self):
        print(f"{self.nom} yo'lda harakatlanmoqda!")

class Samolyot(Transport):
    def harakatlanish(self):
        print(f"{self.nom} osmonda uchmoqda!")

# L - Liskov Substitution Principle
# Child class parent class'ni almashtirishi mumkin bo'lishi kerak

class Hayvon:
    def ovoz_chiqarish(self):
        print("Hayvon ovoz chiqarayapti...")

class It(Hayvon):
    def ovoz_chiqarish(self):
        print("It havlayapti: Woof! Woof!")

class Mushuk(Hayvon):
    def ovoz_chiqarish(self):
        print("Mushuk miyovlayapti: Meow! Meow!")

# I - Interface Segregation Principle
# Client'lar o'zlari ishlatmaydigan interface'larni majburiy bo'lishi kerak emas

class Ovoz_chiqarish:
    def ovoz_chiqarish(self):
        pass

class Harakatlanish:
    def harakatlanish(self):
        pass

class It(Ovoz_chiqarish, Harakatlanish):
    def ovoz_chiqarish(self):
        print("It havlayapti: Woof! Woof!")
    
    def harakatlanish(self):
        print("It yugurmoqda...")

# D - Dependency Inversion Principle
# Yuqori darajadagi modullar past darajadagi modullarga bog'liq bo'lmasligi kerak

class Database:
    def ma_lumot_saqlash(self, ma_lumot):
        print(f"Ma'lumot saqlandi: {ma_lumot}")

class Talaba_service:
    def __init__(self, database):
        self.database = database
    
    def talaba_saqlash(self, talaba):
        self.database.ma_lumot_saqlash(talaba.ism)

# Test qilish
print("=== SOLID prinsiplari ===")

# S - Single Responsibility
talaba = Talaba("Ali", 18, 1)
ball_hisoblagich = Ball_hisoblagich()
talaba.ball_qo_shish(85)
ball_hisoblagich.hisob_qo_shish(talaba, 85)
talaba.ma_lumot_ko_rsatish()
ball_hisoblagich.hisoblarni_ko_rsatish()

# O - Open/Closed
transportlar = [
    Mashina("Toyota"),
    Samolyot("Boeing")
]
for transport in transportlar:
    transport.harakatlanish()

# L - Liskov Substitution
hayvonlar = [
    It("Rex"),
    Mushuk("Mimi")
]
for hayvon in hayvonlar:
    hayvon.ovoz_chiqarish()

# I - Interface Segregation
it = It()
it.ovoz_chiqarish()
it.harakatlanish()

# D - Dependency Inversion
database = Database()
talaba_service = Talaba_service(database)
talaba_service.talaba_saqlash(talaba)
```

SOLID prinsiplari'ning afzalliklari:
1. **Tushunarli kod** - oson o'qish va tushunish
2. **Kodni saqlash** - oson saqlash va kengaytirish
3. **Xatolarni kamaytirish** - kam xatolar
4. **Professional dasturlash** - sanoat standartlari

Amaliy mashq: "Bank" tizimi yarating va SOLID prinsiplarini qo'llang! 10 daqiqa vaqt beraman!


3. Kod yozish qoidalari (25 daqiqa)
Zo'r! Endi kod yozish qoidalari haqida o'rganamiz. Bu juda muhim va professional tushunchalar!

```python
# 1. Nom berish qoidalari
class Talaba:  # Class nomi katta harf bilan boshlanadi
    def __init__(self, ism, yosh, kurs):
        self.ism = ism  # Variable nomi kichik harf bilan boshlanadi
        self.yosh = yosh
        self.kurs = kurs
        self.ball = 0
        self._max_ball = 100  # Protected variable _ bilan boshlanadi
        self.__parol = "1234"  # Private variable __ bilan boshlanadi
    
    def ball_qo_shish(self, miqdor):  # Method nomi kichik harf bilan boshlanadi
        if 0 <= miqdor <= self._max_ball:
            self.ball += miqdor
        else:
            raise ValueError("Ball 0-100 orasida bo'lishi kerak!")
    
    def ma_lumot_ko_rsatish(self):
        print(f"=== {self.ism} ma'lumotlari ===")
        print(f"Yosh: {self.yosh}")
        print(f"Kurs: {self.kurs}")
        print(f"Ball: {self.ball}")

# 2. Docstring qoidalari
class Kitob:
    """
    Kitob class'i.
    
    Bu class kitob haqida ma'lumotlarni saqlaydi va boshqaradi.
    
    Attributes:
        nom (str): Kitob nomi
        muallif (str): Kitob muallifi
        yil (int): Kitob nashr yili
        sahifalar (int): Kitob sahifalar soni
    
    Methods:
        ma_lumot_ko_rsatish(): Kitob ma'lumotlarini ekranga chiqaradi
        o_qish(): Kitobni o'qish jarayonini boshqaradi
    """
    
    def __init__(self, nom, muallif, yil, sahifalar):
        """
        Kitob object'ini yaratadi.
        
        Args:
            nom (str): Kitob nomi
            muallif (str): Kitob muallifi
            yil (int): Kitob nashr yili
            sahifalar (int): Kitob sahifalar soni
        
        Raises:
            ValueError: Agar yil manfiy yoki sahifalar 0 dan kichik bo'lsa
        """
        if yil < 0:
            raise ValueError("Yil manfiy bo'lishi mumkin emas!")
        if sahifalar <= 0:
            raise ValueError("Sahifalar 0 dan katta bo'lishi kerak!")
        
        self.nom = nom
        self.muallif = muallif
        self.yil = yil
        self.sahifalar = sahifalar
        self.o_qilgan = False
    
    def ma_lumot_ko_rsatish(self):
        """Kitob ma'lumotlarini ekranga chiqaradi."""
        print(f"=== {self.nom} ===")
        print(f"Muallif: {self.muallif}")
        print(f"Yil: {self.yil}")
        print(f"Sahifalar: {self.sahifalar}")
        print(f"O'qilgan: {'Ha' if self.o_qilgan else 'Yo'q'}")
    
    def o_qish(self):
        """Kitobni o'qish jarayonini boshqaradi."""
        if not self.o_qilgan:
            self.o_qilgan = True
            print(f"'{self.nom}' kitobi o'qildi!")
        else:
            print(f"'{self.nom}' kitobi allaqachon o'qilgan!")

# 3. Error handling qoidalari
class BankHisob:
    def __init__(self, ism, dastlabki_summa=0):
        self.ism = ism
        self._balans = dastlabki_summa
        self._parol = "1234"
    
    def pul_qo_shish(self, miqdor, parol):
        """
        Hisobga pul qo'shadi.
        
        Args:
            miqdor (float): Qo'shiladigan pul miqdori
            parol (str): Hisob paroli
        
        Raises:
            ValueError: Agar miqdor manfiy yoki parol noto'g'ri bo'lsa
        """
        if not self._parol_tekshirish(parol):
            raise ValueError("Noto'g'ri parol!")
        
        if miqdor <= 0:
            raise ValueError("Miqdor musbat bo'lishi kerak!")
        
        self._balans += miqdor
        print(f"{miqdor} so'm qo'shildi. Yangi balans: {self._balans}")
    
    def pul_olish(self, miqdor, parol):
        """
        Hisobdan pul oladi.
        
        Args:
            miqdor (float): Olinadigan pul miqdori
            parol (str): Hisob paroli
        
        Raises:
            ValueError: Agar miqdor manfiy, parol noto'g'ri yoki yetarli mablag' yo'q bo'lsa
        """
        if not self._parol_tekshirish(parol):
            raise ValueError("Noto'g'ri parol!")
        
        if miqdor <= 0:
            raise ValueError("Miqdor musbat bo'lishi kerak!")
        
        if self._balans < miqdor:
            raise ValueError("Yetarli mablag' yo'q!")
        
        self._balans -= miqdor
        print(f"{miqdor} so'm olindi. Yangi balans: {self._balans}")
    
    def _parol_tekshirish(self, parol):
        """Parolni tekshiradi."""
        return parol == self._parol

# Test qilish
print("=== Kod yozish qoidalari ===")

# Docstring test
kitob = Kitob("Python", "Ali", 2023, 300)
kitob.ma_lumot_ko_rsatish()
kitob.o_qish()

# Error handling test
hisob = BankHisob("Ali", 100000)
try:
    hisob.pul_qo_shish(50000, "1234")
    hisob.pul_olish(30000, "1234")
    hisob.pul_olish(100000, "1234")  # Bu xato beradi
except ValueError as e:
    print(f"Xato: {e}")
```

Kod yozish qoidalari'ning afzalliklari:
1. **Tushunarli kod** - oson o'qish va tushunish
2. **Kodni saqlash** - oson saqlash va kengaytirish
3. **Xatolarni kamaytirish** - kam xatolar
4. **Professional dasturlash** - sanoat standartlari

Amaliy mashq: "Telefon" class yarating va kod yozish qoidalarini qo'llang! 10 daqiqa vaqt beraman!


4. Testing va Debugging (20 daqiqa)
Ajoyib! Endi Testing va Debugging haqida o'rganamiz. Bu juda muhim va professional tushunchalar!

```python
# 1. Unit testing
import unittest

class Kalkulyator:
    def __init__(self):
        self.natija = 0
    
    def qo_shish(self, a, b):
        return a + b
    
    def ayirish(self, a, b):
        return a - b
    
    def ko_paytirish(self, a, b):
        return a * b
    
    def bo_lish(self, a, b):
        if b == 0:
            raise ValueError("Nolga bo'lish mumkin emas!")
        return a / b

class TestKalkulyator(unittest.TestCase):
    def setUp(self):
        """Har bir test oldidan ishlaydi."""
        self.kalkulyator = Kalkulyator()
    
    def test_qo_shish(self):
        """Qo'shish funksiyasini test qiladi."""
        self.assertEqual(self.kalkulyator.qo_shish(2, 3), 5)
        self.assertEqual(self.kalkulyator.qo_shish(-1, 1), 0)
        self.assertEqual(self.kalkulyator.qo_shish(0, 0), 0)
    
    def test_ayirish(self):
        """Ayirish funksiyasini test qiladi."""
        self.assertEqual(self.kalkulyator.ayirish(5, 3), 2)
        self.assertEqual(self.kalkulyator.ayirish(1, 1), 0)
        self.assertEqual(self.kalkulyator.ayirish(0, 5), -5)
    
    def test_ko_paytirish(self):
        """Ko'paytirish funksiyasini test qiladi."""
        self.assertEqual(self.kalkulyator.ko_paytirish(2, 3), 6)
        self.assertEqual(self.kalkulyator.ko_paytirish(-2, 3), -6)
        self.assertEqual(self.kalkulyator.ko_paytirish(0, 5), 0)
    
    def test_bo_lish(self):
        """Bo'lish funksiyasini test qiladi."""
        self.assertEqual(self.kalkulyator.bo_lish(6, 2), 3)
        self.assertEqual(self.kalkulyator.bo_lish(5, 2), 2.5)
        self.assertEqual(self.kalkulyator.bo_lish(0, 5), 0)
    
    def test_nolga_bo_lish(self):
        """Nolga bo'lish xatosini test qiladi."""
        with self.assertRaises(ValueError):
            self.kalkulyator.bo_lish(5, 0)

# 2. Debugging
class Debug_misol:
    def __init__(self):
        self.ma_lumotlar = []
    
    def ma_lumot_qo_shish(self, ma_lumot):
        """Ma'lumot qo'shadi va debug qiladi."""
        print(f"DEBUG: ma_lumot_qo_shish chaqirildi, ma'lumot: {ma_lumot}")
        
        if not isinstance(ma_lumot, str):
            print(f"DEBUG: Xato - ma'lumot string emas: {type(ma_lumot)}")
            raise TypeError("Ma'lumot string bo'lishi kerak!")
        
        if len(ma_lumot) == 0:
            print("DEBUG: Xato - ma'lumot bo'sh!")
            raise ValueError("Ma'lumot bo'sh bo'lishi mumkin emas!")
        
        self.ma_lumotlar.append(ma_lumot)
        print(f"DEBUG: Ma'lumot qo'shildi. Jami: {len(self.ma_lumotlar)}")
    
    def ma_lumotlarni_ko_rsatish(self):
        """Ma'lumotlarni ko'rsatadi."""
        print("=== Ma'lumotlar ===")
        for i, ma_lumot in enumerate(self.ma_lumotlar):
            print(f"{i+1}. {ma_lumot}")

# Test qilish
if __name__ == "__main__":
    print("=== Unit Testing ===")
    unittest.main(argv=[''], exit=False, verbosity=2)
    
    print("\n=== Debugging ===")
    debug_misol = Debug_misol()
    try:
        debug_misol.ma_lumot_qo_shish("Birinchi ma'lumot")
        debug_misol.ma_lumot_qo_shish("Ikkinchi ma'lumot")
        debug_misol.ma_lumotlarni_ko_rsatish()
        
        # Xato beradigan holatlar
        # debug_misol.ma_lumot_qo_shish(123)  # TypeError
        # debug_misol.ma_lumot_qo_shish("")   # ValueError
    except (TypeError, ValueError) as e:
        print(f"Xato: {e}")
```

Testing va Debugging'ning afzalliklari:
1. **Xatolarni topish** - kodda xatolarni tezda topish
2. **Kodni tekshirish** - kod to'g'ri ishlayotganini tekshirish
3. **Kodni saqlash** - oson saqlash va kengaytirish
4. **Professional dasturlash** - sanoat standartlari

Amaliy mashq: "BankHisob" class yarating va unga unit test yozing! 10 daqiqa vaqt beraman!


5. Amaliy loyiha: To'liq tizim (20 daqiqa)
Endi o'rganganlarimizni amalda sinab ko'ramiz! Keling, to'liq "Kutubxona" tizimini yaratamiz:

```python
from abc import ABC, abstractmethod
import unittest

# Abstract class
class Kitob(ABC):
    def __init__(self, nom, muallif, yil, sahifalar):
        """
        Kitob object'ini yaratadi.
        
        Args:
            nom (str): Kitob nomi
            muallif (str): Kitob muallifi
            yil (int): Kitob nashr yili
            sahifalar (int): Kitob sahifalar soni
        
        Raises:
            ValueError: Agar yil manfiy yoki sahifalar 0 dan kichik bo'lsa
        """
        if yil < 0:
            raise ValueError("Yil manfiy bo'lishi mumkin emas!")
        if sahifalar <= 0:
            raise ValueError("Sahifalar 0 dan katta bo'lishi kerak!")
        
        self.nom = nom
        self.muallif = muallif
        self.yil = yil
        self.sahifalar = sahifalar
        self.o_qilgan = False
    
    @abstractmethod
    def o_qish(self):
        """Kitobni o'qish jarayonini boshqaradi."""
        pass
    
    def ma_lumot_ko_rsatish(self):
        """Kitob ma'lumotlarini ekranga chiqaradi."""
        print(f"=== {self.nom} ===")
        print(f"Muallif: {self.muallif}")
        print(f"Yil: {self.yil}")
        print(f"Sahifalar: {self.sahifalar}")
        print(f"O'qilgan: {'Ha' if self.o_qilgan else 'Yo'q'}")

# Concrete classes
class Darslik(Kitob):
    def __init__(self, nom, muallif, yil, sahifalar, fan):
        super().__init__(nom, muallif, yil, sahifalar)
        self.fan = fan
        self.darslar = []
    
    def o_qish(self):
        """Darslikni o'qish jarayonini boshqaradi."""
        if not self.o_qilgan:
            self.o_qilgan = True
            print(f"'{self.nom}' darsligi o'qildi!")
            print(f"Fan: {self.fan}")
        else:
            print(f"'{self.nom}' darsligi allaqachon o'qilgan!")
    
    def dars_qo_shish(self, dars):
        """Darslikka dars qo'shadi."""
        if dars not in self.darslar:
            self.darslar.append(dars)
            print(f"Dars qo'shildi: {dars}")
        else:
            print(f"Dars allaqachon mavjud: {dars}")

class Roman(Kitob):
    def __init__(self, nom, muallif, yil, sahifalar, janr):
        super().__init__(nom, muallif, yil, sahifalar)
        self.janr = janr
        self.boblar = []
    
    def o_qish(self):
        """Romanni o'qish jarayonini boshqaradi."""
        if not self.o_qilgan:
            self.o_qilgan = True
            print(f"'{self.nom}' romani o'qildi!")
            print(f"Janr: {self.janr}")
        else:
            print(f"'{self.nom}' romani allaqachon o'qilgan!")
    
    def bob_qo_shish(self, bob):
        """Romanga bob qo'shadi."""
        if bob not in self.boblar:
            self.boblar.append(bob)
            print(f"Bob qo'shildi: {bob}")
        else:
            print(f"Bob allaqachon mavjud: {bob}")

# Service class
class Kutubxona:
    def __init__(self, nom):
        self.nom = nom
        self.kitoblar = []
        self.o_quvchilar = []
    
    def kitob_qo_shish(self, kitob):
        """Kutubxonaga kitob qo'shadi."""
        if kitob not in self.kitoblar:
            self.kitoblar.append(kitob)
            print(f"Kitob qo'shildi: {kitob.nom}")
        else:
            print(f"Kitob allaqachon mavjud: {kitob.nom}")
    
    def kitob_olish(self, kitob_nomi):
        """Kutubxonadan kitob oladi."""
        for kitob in self.kitoblar:
            if kitob.nom == kitob_nomi:
                self.kitoblar.remove(kitob)
                print(f"Kitob olindi: {kitob.nom}")
                return kitob
        print(f"Kitob topilmadi: {kitob_nomi}")
        return None
    
    def kitoblarni_ko_rsatish(self):
        """Kutubxonadagi kitoblarni ko'rsatadi."""
        print(f"=== {self.nom} kutubxonasi ===")
        if self.kitoblar:
            for i, kitob in enumerate(self.kitoblar):
                print(f"{i+1}. {kitob.nom} - {kitob.muallif}")
        else:
            print("Kutubxonada kitob yo'q!")

# Unit tests
class TestKutubxona(unittest.TestCase):
    def setUp(self):
        """Har bir test oldidan ishlaydi."""
        self.kutubxona = Kutubxona("Test kutubxonasi")
        self.darslik = Darslik("Python", "Ali", 2023, 300, "Dasturlash")
        self.roman = Roman("O'tgan kunlar", "O'tkir Hoshimov", 2020, 250, "Tarixiy")
    
    def test_kitob_qo_shish(self):
        """Kitob qo'shish funksiyasini test qiladi."""
        self.assertEqual(len(self.kutubxona.kitoblar), 0)
        self.kutubxona.kitob_qo_shish(self.darslik)
        self.assertEqual(len(self.kutubxona.kitoblar), 1)
    
    def test_kitob_olish(self):
        """Kitob olish funksiyasini test qiladi."""
        self.kutubxona.kitob_qo_shish(self.darslik)
        kitob = self.kutubxona.kitob_olish("Python")
        self.assertIsNotNone(kitob)
        self.assertEqual(kitob.nom, "Python")
    
    def test_kitob_topilmadi(self):
        """Mavjud bo'lmagan kitobni olish funksiyasini test qiladi."""
        kitob = self.kutubxona.kitob_olish("Mavjud bo'lmagan kitob")
        self.assertIsNone(kitob)

# Test qilish
if __name__ == "__main__":
    print("=== Kutubxona tizimi ===")
    
    # Kutubxona yaratish
    kutubxona = Kutubxona("Alisher Navoiy")
    
    # Kitoblar yaratish
    darslik = Darslik("Python", "Ali", 2023, 300, "Dasturlash")
    roman = Roman("O'tgan kunlar", "O'tkir Hoshimov", 2020, 250, "Tarixiy")
    
    # Kitoblarni kutubxonaga qo'shish
    kutubxona.kitob_qo_shish(darslik)
    kutubxona.kitob_qo_shish(roman)
    
    # Kitoblarni ko'rsatish
    kutubxona.kitoblarni_ko_rsatish()
    
    # Kitob o'qish
    print("\n=== Kitob o'qish ===")
    darslik.o_qish()
    roman.o_qish()
    
    # Darslikka dars qo'shish
    print("\n=== Darslikka dars qo'shish ===")
    darslik.dars_qo_shish("Kirish")
    darslik.dars_qo_shish("O'zgaruvchilar")
    
    # Romanga bob qo'shish
    print("\n=== Romanga bob qo'shish ===")
    roman.bob_qo_shish("Birinchi bob")
    roman.bob_qo_shish("Ikkinchi bob")
    
    # Unit tests
    print("\n=== Unit Tests ===")
    unittest.main(argv=[''], exit=False, verbosity=2)
```

Bu loyihada biz quyidagilarni ko'rdik:
- OOP Best Practices
- SOLID prinsiplari
- Kod yozish qoidalari
- Testing va Debugging
- Real hayot misoli

Amaliy mashq: O'zingizning "Bank" tizimini yarating va barcha best practices'larni qo'llang! 15 daqiqa vaqt beraman!


6. Xulosa va uy vazifasi (10 daqiqa)
Ajoyib, yosh dasturchilar! 🎉 Bugun biz Python OOP'ning oxirgi darsida - OOP Best Practices'ni o'rgandik:

✅ **Nimalarni o'rgandik:**
- OOP Best Practices nima va uning afzalliklari
- SOLID prinsiplari
- Kod yozish qoidalari
- Testing va Debugging
- Amaliy loyiha: To'liq tizim

✅ **Muhim tushunchalar:**
- **OOP Best Practices**: professional dasturlashda ishlatiladigan eng yaxshi usullar
- **SOLID prinsiplari**: 5 ta muhim prinsip
- **Kod yozish qoidalari**: nom berish, docstring, error handling
- **Testing va Debugging**: kodni tekshirish va xatolarni topish
- **Professional dasturlash**: sanoat standartlari

**Uyga vazifa:**
1. "Bank" tizimi yarating:
   - SOLID prinsiplarini qo'llang
   - Kod yozish qoidalarini qo'llang
   - Unit test yozing
   - Error handling qo'shing

2. "Restoran" tizimi yarating:
   - SOLID prinsiplarini qo'llang
   - Kod yozish qoidalarini qo'llang
   - Unit test yozing
   - Error handling qo'shing

3. "O'yin" tizimi yarating:
   - SOLID prinsiplarini qo'llang
   - Kod yozish qoidalarini qo'llang
   - Unit test yozing
   - Error handling qo'shing

**Xulosa:**
Python OOP kursimiz tugadi! Siz endi professional darajada Python OOP'ni bilasiz. Bu bilimlar sizga dasturlashda katta yordam beradi. OOP'ni yaxshi o'rganing va professional dasturchi bo'ling! 🚀

Darsimiz shu bilan tugadi! Savollaringiz bo'lsa, yozib qoldiring! 😊

**Muhim eslatma:** OOP Best Practices - bu professional dasturchi bo'lishning asosi. Ularni yaxshi o'rganing va qo'llang! 🚀
