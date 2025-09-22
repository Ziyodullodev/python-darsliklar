const questions = [
    {
        "question": "`matn = \"Python\"\nprint(matn[1:4])` kodi qanday natija beradi?",
        "code": "# String slicing (kesish)\nmatn = \"Python\"\nprint(matn[1:4])    # yth\nprint(matn[0:3])    # Pyt\nprint(matn[2:5])    # tho\nprint(matn[:3])     # Pyt",
        "options": ["yth", "pyt", "ytho", "tho"],
        "correct": 0,
        "explanation": "Slicing `[1:4]` 1-indeksdagi ('y') belgidan boshlab, 4-indeksdagi ('o') belgigacha bo'lgan qismini oladi. 4-indeksning o'zi kirmaydi. P(0) y(1) t(2) h(3) o(4) n(5)"
    },
    {
        "question": "`s = \"HelloWorld\"\nprint(s[5:])` kodi qanday natija beradi?",
        "code": "# String slicing - oxirigacha\ns = \"HelloWorld\"\nprint(s[5:])      # World\nprint(s[0:5])    # Hello\nprint(s[:5])     # Hello\nprint(s[5:10])   # World",
        "options": ["Hello", "World", "d", "ld"],
        "correct": 1,
        "explanation": "`[5:]` sintaksisi 5-indeksdan boshlab satrning oxirigacha bo'lgan barcha belgilarni oladi. H(0) e(1) l(2) l(3) o(4) W(5) o(6) r(7) l(8) d(9)"
    },
    {
        "question": "Quyidagi kod natijasi nima?\n`s1 = \"Salom\"\ns2 = \" dunyo!\"\nprint(s1 + s2)`",
        "code": "# String concatenation (birlashtirish)\ns1 = \"Salom\"\ns2 = \" dunyo!\"\nprint(s1 + s2)        # Salom dunyo!\nprint(\"Python\" + \"3\")  # Python3\nprint(s1 + \" \" + s2)   # Salom  dunyo!",
        "options": ["Salom dunyo!", "Salomdunyo!", "Xato", "s1s2"],
        "correct": 0,
        "explanation": "`+` operatori yordamida ikkita satr bir-biriga ulanadi (konkatenatsiya qilinadi). Bu Python'da string'larni birlashtirishning asosiy usuli."
    },
    {
        "question": "`matn = \"Tezkor\"\nprint(matn.upper())` kodi natijasi nima?",
        "options": ["TEZKOR", "tezkor", "Tezkor", "Xato"],
        "correct": 0,
        "explanation": "`upper()` metodi satrdagi barcha harflarni katta harflarga o'zgartiradi."
    },
    {
        "question": "`s = \"KATTA HARFLAR\"\nprint(s.lower())` kodining natijasi qanday bo'ladi?",
        "options": ["katta harflar", "Katta Harflar", "KATTA harflar", "katta HARFLAR"],
        "correct": 0,
        "explanation": "`lower()` metodi satrdagi barcha harflarni kichik harflarga o'zgartiradi."
    },
    {
        "question": "`matn = \"Men Java o'rganaman\"\nprint(matn.replace(\"Java\", \"Python\"))` kodi nima chiqaradi?",
        "options": ["Men Java o'rganaman", "Men Python o'rganaman", "Java Python", "Xato"],
        "correct": 1,
        "explanation": "`replace(\"Java\", \"Python\")` metodi satrdagi barcha \"Java\" so'zlarini \"Python\"ga almashtiradi."
    },
    {
        "question": "`s = \"Dasturlash\"\nprint(s[:5])` kodi nima chiqaradi?",
        "options": ["Dastur", "Dastu", "urlash", "astur"],
        "correct": 1,
        "explanation": "`[:5]` sintaksisi satrning boshidan 5-indeksgacha bo'lgan qismini kesib oladi (5-indeksning o'zi kirmaydi)."
    },
    {
        "question": "`matn = \"ABCDEFG\"\nprint(matn[::2])` kodi qanday natija qaytaradi?",
        "options": ["ABCDEFG", "ACEG", "BDF", "GFEDCBA"],
        "correct": 1,
        "explanation": "`[::2]` sintaksisi satrning boshidan oxirigacha har ikkinchi belgini oladi ('A', 'C', 'E', 'G')."
    },
    {
        "question": "Quyidagi satrlarni birlashtirish (concatenation) qanday natija beradi?\n`print(\"Python\" + \"3\")`",
        "options": ["Python 3", "Python3", "Xato, songa qo'shib bo'lmaydi", "3Python"],
        "correct": 1,
        "explanation": "Pythonda satrga satr ko'rinishidagi raqamni `+` operatori bilan qo'shish mumkin. Natijada ular shunchaki birikadi."
    },
    {
        "question": "`s = \"hello world\"\nprint(s.replace(\"o\", \"a\").upper())` kodining natijasi nima?",
        "options": ["HELLA WARLD", "hella warld", "Hello World", "HELLOWORLD"],
        "correct": 0,
        "explanation": "Metodlar zanjiri ketma-ket ishlaydi. Avval `replace()` metodi 'o'larni 'a'ga almashtiradi (\"hella warld\"), so'ng `upper()` metodi natijani katta harflarga o'tkazadi (\"HELLA WARLD\")."
    }
]