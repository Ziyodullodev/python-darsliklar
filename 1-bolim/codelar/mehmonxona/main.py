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

def jami_narx(xonalar_royxati):
    narxlar = [info["narx"] for info in xonalar_royxati.values()]
    if not narxlar:
        return 0
    return reduce(lambda x, y: x + y, narxlar)

# Loyiha uchun asosiy kod
def xonalarni_ol():
    """Fayldan xonalar ro'yxatini o'qish."""
    xonalar = {}
    try:
        with open("xonalar.txt", "r") as fayl:
            for qator in fayl:
                nomi, narxi, holati = qator.strip().split(": ")
                xonalar[nomi] = {"narx": int(narxi), "holat": holati}
    except FileNotFoundError:
        print("Xonalar.txt fayli topilmadi. Yangi fayl yaratiladi.")
    return xonalar

def xona_holatini_saqlash(xonalar):
    """Xona holatini faylga qayta yozish."""
    with open("xonalar.txt", "w") as fayl:
        for nomi, info in xonalar.items():
            fayl.write(f"{nomi}: {info['narx']}: {info['holat']}\n")

@vaqt_olchagich
def xonalarni_korsat(xonalar):
    """Xonalar ro'yxatini konsolga chiqarish."""
    print("\n--- Mehmonxona Xonalari ---")
    for nomi, info in xonalar.items():
        print(f"Xona: {nomi}, Narxi: {info['narx']} so'm, Holat: {info['holat']}")
    print("---------------------------\n")

def bosh_xonalar(xonalar):
    """Faqat bo'sh xonalarni filtrlash."""
    return dict(filter(lambda x: x[1]["holat"] == "bo'sh", xonalar.items()))

def chegirma_qollash(xonalar, chegirma_foiz):
    """Xonalarga chegirma qo'llash."""
    chegirma_kof = 1 - (chegirma_foiz / 100)
    for xona in xonalar:
        xonalar[xona]["narx"] = int(list(map(lambda x: x * chegirma_kof, [xonalar[xona]["narx"]]))[0])
    return xonalar

def id_generator():
    """Yangi xona uchun ID generatori."""
    max_id = 0
    if os.path.exists("xonalar.txt"):
        with open("xonalar.txt", "r") as f:
            for line in f:
                try:
                    parts = line.split(":")
                    if len(parts) > 0 and parts[0].strip().startswith("Xona "):
                        current_id = int(parts[0].strip().replace("Xona ", ""))
                        if current_id > max_id:
                            max_id = current_id
                except (ValueError, IndexError):
                    continue
    
    id = max_id + 1
    while True:
        yield id
        id += 1


def main():
    """Dasturning asosiy funksiyasi."""
    xonalar = xonalarni_ol()
    id_gen = id_generator()
    
    while True:
        print("1. Xonalarni ko'rsatish")
        print("2. Bo'sh xonalarni filtrlash")
        print("3. Barcha xonalarning jami narxini hisoblash")
        print("4. Xonaga chegirma qo'llash")
        print("5. Yangi xona qo'shish")
        print("6. Chiqish")
        
        tanlov = input("\nTanlovingizni kiriting: ")
        
        if tanlov == '1':
            xonalarni_korsat(xonalar)
            
        elif tanlov == '2':
            bosh = bosh_xonalar(xonalar)
            xonalarni_korsat(bosh)
            print(f"Bo'sh xonalarning jami narxi: {jami_narx(bosh)} so'm.")
            
        elif tanlov == '3':
            total = jami_narx(xonalar)
            print(f"Barcha xonalarning jami narxi: {total} so'm.")
            
        elif tanlov == '4':
            try:
                chegirma_foiz = float(input("Qancha foiz chegirma qo'llashni xohlaysiz? "))
                xonalar = chegirma_qollash(xonalar, chegirma_foiz)
                xona_holatini_saqlash(xonalar)
                print("Chegirma muvaffaqiyatli qo'llanildi. Fayl yangilandi.")
            except ValueError:
                print("Noto'g'ri qiymat. Iltimos, raqam kiriting.")
                
        elif tanlov == '5':
            yangi_xona_nomi = f"Xona {next(id_gen)}"
            try:
                yangi_xona_narxi = int(input(f"'{yangi_xona_nomi}' uchun narxni kiriting: "))
                yangi_xona_holati = input(f"'{yangi_xona_nomi}' uchun holatni kiriting (bo'sh/band): ")
                xonalar[yangi_xona_nomi] = {"narx": yangi_xona_narxi, "holat": yangi_xona_holati}
                xona_holatini_saqlash(xonalar)
                print(f"'{yangi_xona_nomi}' muvaffaqiyatli qo'shildi.")
            except ValueError:
                print("Noto'g'ri narx formati.")
                
        elif tanlov == '6':
            print("Dasturdan chiqilmoqda...")
            break
            
        else:
            print("Noto'g'ri tanlov. Iltimos, qayta urinib ko'ring.")

if __name__ == "__main__":
    # Agar fayl mavjud bo'lmasa, dastlabki ma'lumotlarni yozib qo'yish
    if not os.path.exists("xonalar.txt"):
        with open("xonalar.txt", "w") as f:
            f.write("Xona 101: 500000: band\n")
            f.write("Xona 102: 800000: bo'sh\n")
            f.write("Xona 103: 300000: bo'sh\n")

    main()