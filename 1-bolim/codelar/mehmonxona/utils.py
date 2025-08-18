import time
import random
from functools import reduce

def id_generator():
    """Xona ID generatori."""
    id = 1
    while True:
        yield id
        id += 1

def vaqt_olchagich(funksiya):
    """Funksiya ishlash vaqtini o'lchaydigan dekorator."""
    def wrapper(*args, **kwargs):
        boshlanish = time.time()
        natija = funksiya(*args, **kwargs)
        tugash = time.time()
        print(f"{funksiya.__name__} {tugash - boshlanish:.4f} sekund davom etdi.")
        return natija
    return wrapper

def bosh_xonalar(xonalar):
    """Faqat bo'sh xonalarni filtrlash."""
    return dict(filter(lambda x: x[1]["holat"] == "bo'sh", xonalar.items()))

def jami_narx(xonalar_royxati):
    """Berilgan xonalar ro'yxatining jami narxini hisoblash."""
    narxlar = [info["narx"] for info in xonalar_royxati.values()]
    if not narxlar:
        return 0
    return reduce(lambda x, y: x + y, narxlar)

def chegirma_qollash(xonalar, chegirma_foiz):
    """Xonalarga chegirma qo'llash."""
    chegirma_kof = 1 - (chegirma_foiz / 100)
    for xona in xonalar:
        xonalar[xona]["narx"] = list(map(lambda x: int(x * chegirma_kof), [xonalar[xona]["narx"]]))[0]
    return xonalar