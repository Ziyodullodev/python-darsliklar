📚 Darsning mavzusi: Python OOP - Encapsulation (Kapsulatsiya) - Ma'lumotlarni himoya qilish
📚 Qisqacha vaqt taqsimoti
Qism
Davomiyligi
Encapsulation nima?
20 daqiqa
Private va Public attributes
25 daqiqa
Getter va Setter metodlar
25 daqiqa
Property decorator
20 daqiqa
Amaliy loyiha: Bank hisob
20 daqiqa
Xulosa va uy vazifasi
10 daqiqa
Jami
120 daqiqa (2 soat)


Bu usul yoshlar uchun samarali, qiziqarli va tushunarli bo'lib, o'quvchilarni dars jarayoniga faolroq jalb qiladi.


📖 Darsning batafsil rejasi
1. Encapsulation nima? (20 daqiqa)
Assalomu alaykum, yosh dasturchilar! 😊 Bugun biz OOP'ning muhim prinsiplaridan biri - Encapsulation (Kapsulatsiya) haqida o'rganamiz. Bu juda muhim va foydali tushuncha!

Encapsulation nima deb o'ylaysiz? 🤔 Keling, real hayot misoli bilan tushunamiz:

Agar sizda bank hisobingiz bo'lsa, siz balansingizni to'g'ridan-to'g'ri o'zgartira olmaysiz. Siz faqat bank orqali pul qo'shish yoki olish mumkin. Bank sizning balansingizni himoya qiladi va faqat ruxsat etilgan operatsiyalarni amalga oshiradi.

Python'da Encapsulation - bu class'ning ichki ma'lumotlarini tashqi dunyodan yashirish va faqat ruxsat etilgan usullar orqali ularga kirish imkonini berish.

```python
class BankHisob:
    def __init__(self, ism, dastlabki_summa=0):
        self.ism = ism
        self.__balans = dastlabki_summa  # Private attribute
        self.__parol = "1234"  # Private attribute
    
    def pul_qo_shish(self, miqdor, parol):
        if parol == self.__parol:
            self.__balans += miqdor
            print(f"{miqdor} so'm qo'shildi. Yangi balans: {self.__balans}")
        else:
            print("Noto'g'ri parol!")
    
    def pul_olish(self, miqdor, parol):
        if parol == self.__parol:
            if self.__balans >= miqdor:
                self.__balans -= miqdor
                print(f"{miqdor} so'm olindi. Yangi balans: {self.__balans}")
            else:
                print("Yetarli mablag' yo'q!")
        else:
            print("Noto'g'ri parol!")
    
    def balansni_ko_rsatish(self, parol):
        if parol == self.__parol:
            print(f"Balans: {self.__balans} so'm")
        else:
            print("Noto'g'ri parol!")

# Test qilish
hisob = BankHisob("Ali", 100000)
hisob.pul_qo_shish(50000, "1234")  # To'g'ri parol
hisob.pul_olish(30000, "1234")     # To'g'ri parol
hisob.balansni_ko_rsatish("1234")  # To'g'ri parol

# hisob.__balans = 1000000  # Bu ishlamaydi - private attribute
```

Encapsulation'ning afzalliklari:
1. **Xavfsizlik** - ma'lumotlarni himoya qilish
2. **Kodni himoya qilish** - noto'g'ri foydalanishdan himoya qilish
3. **Moslashuvchanlik** - ichki tuzilishni o'zgartirish imkonini berish
4. **Tartibli kod** - ma'lumotlar va metodlarni tartibli saqlash

Savol: Encapsulation nima uchun kerak? Kim aytib bera oladi?


2. Private va Public attributes (25 daqiqa)
Ajoyib! Endi Private va Public attributes haqida batafsil o'rganamiz.

**Public attributes** - tashqaridan kirish mumkin
**Private attributes** - faqat class ichidan kirish mumkin

Python'da private attributes `__` (ikki pastki chiziq) bilan boshlanadi.

```python
class Talaba:
    def __init__(self, ism, yosh, kurs):
        # Public attributes
        self.ism = ism
        self.yosh = yosh
        self.kurs = kurs
        
        # Private attributes
        self.__ball = 0
        self.__parol = "talaba123"
        self.__max_ball = 100
    
    # Public methods
    def ma_lumot_ko_rsatish(self):
        print(f"=== {self.ism} ma'lumotlari ===")
        print(f"Yosh: {self.yosh}")
        print(f"Kurs: {self.kurs}")
        print(f"Ball: {self.__ball}")
    
    def ball_qo_shish(self, miqdor, parol):
        if parol == self.__parol:
            if self.__ball + miqdor <= self.__max_ball:
                self.__ball += miqdor
                print(f"{miqdor} ball qo'shildi. Jami: {self.__ball}")
            else:
                print(f"Ball {self.__max_ball} dan oshmasligi kerak!")
        else:
            print("Noto'g'ri parol!")
    
    def ball_olish(self, miqdor, parol):
        if parol == self.__parol:
            if self.__ball >= miqdor:
                self.__ball -= miqdor
                print(f"{miqdor} ball olindi. Jami: {self.__ball}")
            else:
                print("Yetarli ball yo'q!")
        else:
            print("Noto'g'ri parol!")
    
    # Private method
    def __ball_tekshirish(self):
        if self.__ball >= 80:
            return "A'lo"
        elif self.__ball >= 60:
            return "Yaxshi"
        else:
            return "Qoniqarli"
    
    def baho_ko_rsatish(self, parol):
        if parol == self.__parol:
            baho = self.__ball_tekshirish()
            print(f"Baho: {baho}")
        else:
            print("Noto'g'ri parol!")

# Test qilish
talaba = Talaba("Ali", 18, 1)
talaba.ma_lumot_ko_rsatish()

talaba.ball_qo_shish(30, "talaba123")  # To'g'ri parol
talaba.ball_qo_shish(40, "talaba123")  # To'g'ri parol
talaba.ball_qo_shish(50, "talaba123")  # Ball oshib ketadi

talaba.baho_ko_rsatish("talaba123")  # To'g'ri parol

# talaba.__ball = 100  # Bu ishlamaydi - private attribute
# talaba.__ball_tekshirish()  # Bu ishlamaydi - private method
```

E'tibor bering:
- `__` bilan boshlangan attributes va methods private
- Private attributes faqat class ichidan kirish mumkin
- Private methods faqat class ichidan chaqirish mumkin

Amaliy mashq: "Telefon" class yarating va unga private attributes qo'shing! 10 daqiqa vaqt beraman!


3. Getter va Setter metodlar (25 daqiqa)
Zo'r! Endi Getter va Setter metodlar haqida o'rganamiz. Bu Encapsulation'ning asosiy usuli!

**Getter** - private attribute'ni o'qish uchun
**Setter** - private attribute'ni o'zgartirish uchun

```python
class Mashina:
    def __init__(self, marka, model, yil):
        self.marka = marka
        self.model = model
        self.yil = yil
        self.__tezlik = 0
        self.__yoqilg_i = 50
        self.__yoniq = False
    
    # Getter metodlar
    def get_tezlik(self):
        return self.__tezlik
    
    def get_yoqilg_i(self):
        return self.__yoqilg_i
    
    def get_yoniq(self):
        return self.__yoniq
    
    # Setter metodlar
    def set_tezlik(self, yangi_tezlik):
        if 0 <= yangi_tezlik <= 200:
            self.__tezlik = yangi_tezlik
            print(f"Tezlik {yangi_tezlik} km/h ga o'zgartirildi")
        else:
            print("Tezlik 0-200 km/h orasida bo'lishi kerak!")
    
    def set_yoqilg_i(self, yangi_yoqilg_i):
        if 0 <= yangi_yoqilg_i <= 100:
            self.__yoqilg_i = yangi_yoqilg_i
            print(f"Yoqilg'i {yangi_yoqilg_i}% ga o'zgartirildi")
        else:
            print("Yoqilg'i 0-100% orasida bo'lishi kerak!")
    
    def set_yoniq(self, holat):
        if isinstance(holat, bool):
            self.__yoniq = holat
            if holat:
                print("Mashina yoqildi!")
            else:
                print("Mashina o'chirildi!")
        else:
            print("Holat True yoki False bo'lishi kerak!")
    
    # Boshqa metodlar
    def harakatlanish(self):
        if self.__yoniq and self.__yoqilg_i > 0:
            self.__tezlik = min(self.__tezlik + 10, 120)
            self.__yoqilg_i -= 1
            print(f"Mashina harakatlanmoqda. Tezlik: {self.__tezlik} km/h")
        else:
            print("Mashina yoqilmagan yoki yoqilg'i yo'q!")
    
    def toxtash(self):
        self.__tezlik = 0
        print("Mashina to'xtadi!")
    
    def ma_lumot_ko_rsatish(self):
        print(f"=== {self.marka} {self.model} ===")
        print(f"Yil: {self.yil}")
        print(f"Tezlik: {self.__tezlik} km/h")
        print(f"Yoqilg'i: {self.__yoqilg_i}%")
        print(f"Holat: {'Yoqilgan' if self.__yoniq else 'O'chik'}")

# Test qilish
mashina = Mashina("Toyota", "Camry", 2020)
mashina.ma_lumot_ko_rsatish()

# Getter metodlar
print(f"Joriy tezlik: {mashina.get_tezlik()}")
print(f"Joriy yoqilg'i: {mashina.get_yoqilg_i()}")
print(f"Holat: {mashina.get_yoniq()}")

# Setter metodlar
mashina.set_yoniq(True)
mashina.set_tezlik(60)
mashina.set_yoqilg_i(80)

mashina.harakatlanish()
mashina.ma_lumot_ko_rsatish()
```

Getter va Setter'ning afzalliklari:
1. **Kontrol** - ma'lumotlarni tekshirish
2. **Xavfsizlik** - noto'g'ri qiymatlarni oldini olish
3. **Moslashuvchanlik** - kelajakda o'zgarishlar kiritish
4. **Tartibli kod** - ma'lumotlarni tartibli boshqarish

Amaliy mashq: "Kitob" class yarating va unga getter/setter metodlar qo'shing! 10 daqiqa vaqt beraman!


4. Property decorator (20 daqiqa)
Ajoyib! Endi Property decorator haqida o'rganamiz. Bu Python'ning juda qiziqarli xususiyati!

**Property decorator** - getter va setter'ni oddiy attribute kabi ishlatish imkonini beradi.

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

Property decorator'ning afzalliklari:
1. **Oddiy sintaksis** - attribute kabi ishlatish
2. **Kontrol** - getter/setter funksionalligi
3. **Tushunarli kod** - qisqa va aniq
4. **Moslashuvchanlik** - kelajakda o'zgarishlar

Amaliy mashq: "BankHisob" class yarating va property decorator'dan foydalaning! 10 daqiqa vaqt beraman!


5. Amaliy loyiha: Bank hisob (20 daqiqa)
Endi o'rganganlarimizni amalda sinab ko'ramiz! Keling, to'liq "Bank hisob" tizimini yaratamiz:

```python
class BankHisob:
    def __init__(self, ism, dastlabki_summa=0):
        self.ism = ism
        self.__balans = dastlabki_summa
        self.__parol = "1234"
        self.__max_kunlik_chiqim = 1000000
        self.__kunlik_chiqim = 0
        self.__harakatlar = []
    
    @property
    def balans(self):
        return self.__balans
    
    @balans.setter
    def balans(self, yangi_balans):
        if yangi_balans >= 0:
            self.__balans = yangi_balans
        else:
            print("Balans manfiy bo'lishi mumkin emas!")
    
    @property
    def kunlik_chiqim(self):
        return self.__kunlik_chiqim
    
    def parol_tekshirish(self, parol):
        return parol == self.__parol
    
    def pul_qo_shish(self, miqdor, parol):
        if self.parol_tekshirish(parol):
            if miqdor > 0:
                self.__balans += miqdor
                self.__harakatlar.append(f"+{miqdor} so'm")
                print(f"{miqdor} so'm qo'shildi. Yangi balans: {self.__balans}")
            else:
                print("Miqdor musbat bo'lishi kerak!")
        else:
            print("Noto'g'ri parol!")
    
    def pul_olish(self, miqdor, parol):
        if self.parol_tekshirish(parol):
            if miqdor > 0:
                if self.__balans >= miqdor:
                    if self.__kunlik_chiqim + miqdor <= self.__max_kunlik_chiqim:
                        self.__balans -= miqdor
                        self.__kunlik_chiqim += miqdor
                        self.__harakatlar.append(f"-{miqdor} so'm")
                        print(f"{miqdor} so'm olindi. Yangi balans: {self.__balans}")
                    else:
                        print("Kunlik chiqim limiti oshib ketdi!")
                else:
                    print("Yetarli mablag' yo'q!")
            else:
                print("Miqdor musbat bo'lishi kerak!")
        else:
            print("Noto'g'ri parol!")
    
    def harakatlarni_ko_rsatish(self, parol):
        if self.parol_tekshirish(parol):
            print("=== So'nggi harakatlar ===")
            for harakat in self.__harakatlar[-5:]:
                print(harakat)
        else:
            print("Noto'g'ri parol!")
    
    def ma_lumot_ko_rsatish(self, parol):
        if self.parol_tekshirish(parol):
            print(f"=== {self.ism} bank hisobi ===")
            print(f"Balans: {self.__balans} so'm")
            print(f"Kunlik chiqim: {self.__kunlik_chiqim} so'm")
            print(f"Kunlik limit: {self.__max_kunlik_chiqim} so'm")
        else:
            print("Noto'g'ri parol!")

# Test qilish
hisob = BankHisob("Ali", 100000)
hisob.ma_lumot_ko_rsatish("1234")

hisob.pul_qo_shish(50000, "1234")
hisob.pul_olish(30000, "1234")
hisob.pul_olish(20000, "1234")

hisob.harakatlarni_ko_rsatish("1234")
hisob.ma_lumot_ko_rsatish("1234")

# Noto'g'ri parol
hisob.pul_olish(10000, "0000")
```

Bu loyihada biz quyidagilarni ko'rdik:
- Private attributes (`__balans`, `__parol`)
- Property decorator (`balans`, `kunlik_chiqim`)
- Getter va Setter metodlar
- Ma'lumotlarni himoya qilish
- Real hayot misoli

Amaliy mashq: O'zingizning "Telefon" class yarating va Encapsulation'dan foydalaning! 15 daqiqa vaqt beraman!


6. Xulosa va uy vazifasi (10 daqiqa)
Ajoyib, yosh dasturchilar! 🎉 Bugun biz Python OOP'ning muhim prinsiplaridan biri - Encapsulation'ni o'rgandik:

✅ **Nimalarni o'rgandik:**
- Encapsulation nima va uning afzalliklari
- Private va Public attributes
- Getter va Setter metodlar
- Property decorator
- Amaliy loyiha: Bank hisob

✅ **Muhim tushunchalar:**
- **Encapsulation**: ma'lumotlarni himoya qilish
- **Private attributes**: `__` bilan boshlanadi, faqat class ichidan kirish
- **Getter/Setter**: ma'lumotlarni xavfsiz boshqarish
- **Property decorator**: getter/setter'ni oddiy attribute kabi ishlatish

**Uyga vazifa:**
1. "Telefon" class yarating:
   - Private attributes: __batareya, __parol, __max_chaqiruv
   - Property decorator: batareya, chaqiruv_soni
   - Getter/Setter metodlar: parol_tekshirish, batareya_qo'shish

2. "Kitob" class yarating:
   - Private attributes: __sahifalar, __narx, __mavjud
   - Property decorator: sahifalar, narx, mavjud
   - Getter/Setter metodlar: sahifalar_tekshirish, narx_o'zgartirish

3. "O'yinchi" class yarating:
   - Private attributes: __jon, __kuch, __tajriba
   - Property decorator: jon, kuch, tajriba
   - Getter/Setter metodlar: jon_qo'shish, kuch_oshirish

**Keyingi dars:** Python OOP - Special Methods (Magic Methods) mavzusini o'rganamiz.

Darsimiz shu bilan tugadi! Savollaringiz bo'lsa, yozib qoldiring yoki keyingi darsda so'rang! 😊

**Muhim eslatma:** Encapsulation - bu xavfsiz dasturlashning asosi. Uni yaxshi o'rganing! 🚀
