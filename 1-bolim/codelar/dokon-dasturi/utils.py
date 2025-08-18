import random

def tasodifiy_mahsulot(mahsulotlar):
    """Mahsulotlar ro'yxatidan tasodifiy mahsulot tanlash."""
    return random.choice(list(mahsulotlar.keys()))

def chegirma_hisobla(narx, chegirma_foiz):
    """Narxga chegirma hisoblash funksiyasi."""
    return int(narx * (1 - chegirma_foiz / 100))