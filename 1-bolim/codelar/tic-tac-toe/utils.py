import time
import random
from functools import reduce

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