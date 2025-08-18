import time
import random
from functools import reduce
import os

# utils.py modulidan funksiyalarni import qilish
# Bu yerda sizning utils.py faylingiz mavjud deb faraz qilinadi
def vaqt_olchagich(funksiya):
    def wrapper(*args, **kwargs):
        boshlanish = time.time()
        natija = funksiya(*args, **kwargs)
        tugash = time.time()
        print(f"{funksiya.__name__} {tugash - boshlanish:.4f} sekund davom etdi.")
        return natija
    return wrapper

def jami_narx(mahsulotlar_royxati):
    narxlar = [narx for narx in mahsulotlar_royxati.values()]
    if not narxlar:
        return 0
    return reduce(lambda x, y: x + y, narxlar)

# Loyiha uchun asosiy kod
def mahsulotlarni_ol():
    """Fayldan mahsulotlar ro'yxatini o'qish."""
    mahsulotlar = {}
    try:
        with open("mahsulotlar.txt", "r") as fayl:
            for qator in fayl:
                nomi, narxi = qator.strip().split(": ")
                mahsulotlar[nomi] = int(narxi)
    except FileNotFoundError:
        print("mahsulotlar.txt fayli topilmadi. Yangi fayl yaratiladi.")
    return mahsulotlar

def mahsulot_holatini_saqlash(mahsulotlar):
    """Mahsulot holatini faylga qayta yozish."""
    with open("mahsulotlar.txt", "w") as fayl:
        for nomi, narxi in mahsulotlar.items():
            fayl.write(f"{nomi}: {narxi}\n")

@vaqt_olchagich
def mahsulotlarni_korsat(mahsulotlar):
    """Mahsulotlar ro'yxatini konsolga chiqarish."""
    print("\n--- Do'kon mahsulotlari ---")
    for nomi, narxi in mahsulotlar.items():
        print(f"Mahsulot: {nomi}, Narxi: {narxi} so'm")
    print("---------------------------\n")

def chegirma_qollash(mahsulotlar, chegirma_foiz):
    """Mahsulotlarga chegirma qo'llash."""
    chegirma_kof = 1 - (chegirma_foiz / 100)
    return dict(zip(mahsulotlar.keys(), map(lambda x: int(x * chegirma_kof), mahsulotlar.values())))

def qimmat_mahsulotlar(mahsulotlar, narx):
    """Berilgan narxdan qimmat mahsulotlarni filtrlash."""
    return dict(filter(lambda x: x[1] > narx, mahsulotlar.items()))

def id_generator():
    """Yangi mahsulot uchun ID generatori."""
    id = 1
    while True:
        yield id
        id += 1

def main():
    """Dasturning asosiy funksiyasi."""
    mahsulotlar = mahsulotlarni_ol()
    id_gen = id_generator()
    
    while True:
        print("1. Mahsulotlarni ko'rsatish")
        print("2. Qimmat mahsulotlarni filtrlash")
        print("3. Jami narxni hisoblash")
        print("4. Chegirma qo'llash")
        print("5. Yangi mahsulot qo'shish")
        print("6. Chiqish")
        
        tanlov = input("\nTanlovingizni kiriting: ")
        
        if tanlov == '1':
            mahsulotlarni_korsat(mahsulotlar)
            
        elif tanlov == '2':
            try:
                narx = int(input("Qancha narxdan qimmatini filtrlash kerak? "))
                qimmatlar = qimmat_mahsulotlar(mahsulotlar, narx)
                mahsulotlarni_korsat(qimmatlar)
            except ValueError:
                print("Noto'g'ri qiymat. Iltimos, butun son kiriting.")
            
        elif tanlov == '3':
            total = jami_narx(mahsulotlar)
            print(f"Barcha mahsulotlarning jami narxi: {total} so'm.")
            
        elif tanlov == '4':
            try:
                chegirma_foiz = float(input("Qancha foiz chegirma qo'llashni xohlaysiz? "))
                mahsulotlar = chegirma_qollash(mahsulotlar, chegirma_foiz)
                mahsulot_holatini_saqlash(mahsulotlar)
                print("Chegirma muvaffaqiyatli qo'llanildi. Fayl yangilandi.")
            except ValueError:
                print("Noto'g'ri qiymat. Iltimos, raqam kiriting.")
                
        elif tanlov == '5':
            try:
                yangi_mahsulot_nomi = input("Yangi mahsulot nomini kiriting: ")
                yangi_mahsulot_narxi = int(input(f"'{yangi_mahsulot_nomi}' uchun narxni kiriting: "))
                mahsulotlar[yangi_mahsulot_nomi] = yangi_mahsulot_narxi
                mahsulot_holatini_saqlash(mahsulotlar)
                print(f"'{yangi_mahsulot_nomi}' muvaffaqiyatli qo'shildi.")
            except ValueError:
                print("Noto'g'ri narx formati.")
                
        elif tanlov == '6':
            print("Dasturdan chiqilmoqda...")
            break
            
        else:
            print("Noto'g'ri tanlov. Iltimos, qayta urinib ko'ring.")

if __name__ == "__main__":
    if not os.path.exists("mahsulotlar.txt"):
        with open("mahsulotlar.txt", "w") as f:
            f.write("Telefon: 5000000\n")
            f.write("Noutbuk: 8000000\n")
            f.write("Televizor: 3000000\n")
    main()