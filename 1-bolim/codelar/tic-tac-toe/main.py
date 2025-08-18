import time
from functools import reduce
import random

# utils.py modulidan funksiyalarni import qilish
# Bu yerda sizning utils.py faylingiz mavjud deb faraz qilinadi
def id_generator():
    """O'yin ID generatori."""
    id = 1
    while True:
        yield id
        id += 1

def boshlovchi_oyinchi():
    """Tasodifiy boshlovchi o'yinchini tanlash."""
    return random.choice(["X", "O"])
    
def oyinchi_almashish(joriy_oyinchi):
    """O'yinchini almashtirish funksiyasi."""
    return "O" if joriy_oyinchi == "X" else "X"

def doska_toliq(doska):
    """Doska to'lganligini tekshirish funksiyasi."""
    return reduce(lambda x, y: x and y != " ", doska, True)

def vaqt_olchagich(funksiya):
    """Funksiya ishlash vaqtini o'lchaydigan dekorator."""
    def wrapper(*args, **kwargs):
        boshlanish = time.time()
        natija = funksiya(*args, **kwargs)
        tugash = time.time()
        print(f"O'yin {tugash - boshlanish:.4f} sekund davom etdi.")
        return natija
    return wrapper

# Loyiha uchun asosiy kod

# O'yin doskasi
doska = [" " for _ in range(9)]

# G'oliblik kombinatsiyalari
golib_kombinatsiyalari = [
    (0, 1, 2), (3, 4, 5), (6, 7, 8),  # Qatorlar
    (0, 3, 6), (1, 4, 7), (2, 5, 8),  # Ustunlar
    (0, 4, 8), (2, 4, 6)             # Diagonallar
]

def doskani_korsat():
    """O'yin doskasini konsolga chiqarish."""
    print("\n")
    print(f" {doska[0]} | {doska[1]} | {doska[2]} ")
    print("---|---|---")
    print(f" {doska[3]} | {doska[4]} | {doska[5]} ")
    print("---|---|---")
    print(f" {doska[6]} | {doska[7]} | {doska[8]} ")
    print("\n")

def golibni_tekshir(oyinchi):
    """Berilgan o'yinchi g'olib bo'ldimi-yo'qligini tekshirish."""
    return any(map(lambda x: doska[x[0]] == doska[x[1]] == doska[x[2]] == oyinchi, golib_kombinatsiyalari))

def natijani_saqlash(oyin_id, natija):
    """O'yin natijasini faylga yozish."""
    with open("natijalar.txt", "a") as fayl:
        fayl.write(f"O'yin {oyin_id}: {natija}\n")

@vaqt_olchagich
def oyin_boshlash():
    """O'yinning asosiy jarayoni."""
    oyin_id = next(id_gen)
    joriy_oyinchi = boshlovchi_oyinchi()
    
    print(f"O'yin boshlandi! O'yin ID: {oyin_id}")
    print(f"Birinchi bo'lib '{joriy_oyinchi}' o'yinchi boshlaydi.")
    
    galma_gal_soni = 0
    
    while True:
        doskani_korsat()
        
        # O'yinchidan to'g'ri kirishni olish
        while True:
            try:
                joy_raqami = int(input(f"'{joriy_oyinchi}' o'yinchi, joy raqamini kiriting (1-9): ")) - 1
                
                if 0 <= joy_raqami <= 8 and doska[joy_raqami] == " ":
                    doska[joy_raqami] = joriy_oyinchi
                    break
                else:
                    print("Noto'g'ri raqam yoki joy band. Boshqa joy tanlang.")
            except ValueError:
                print("Faqat raqam kiriting. Iltimos, qayta urinib ko'ring.")
        
        # G'olibni tekshirish
        if golibni_tekshir(joriy_oyinchi):
            doskani_korsat()
            print(f"Tabriklaymiz! '{joriy_oyinchi}' g'olib bo'ldi!")
            natijani_saqlash(oyin_id, f"'{joriy_oyinchi}' g'olib")
            break
        
        # Doska to'lganligini (durrangni) tekshirish
        if doska_toliq(doska):
            doskani_korsat()
            print("O'yin durrang bilan tugadi!")
            natijani_saqlash(oyin_id, "Durrang")
            break
        
        # Navbatni almashtirish
        joriy_oyinchi = oyinchi_almashish(joriy_oyinchi)
        galma_gal_soni += 1

# O'yinni boshlash
id_gen = id_generator()
oyin_boshlash()