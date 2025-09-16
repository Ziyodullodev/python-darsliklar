const questions = [
    {
        question: "SOLID principles nechta?",
        options: ["3 ta", "4 ta", "5 ta", "6 ta"],
        correct: 2,
        explanation: "SOLID principles 5 ta: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion."
    },
    {
        question: "S - Single Responsibility Principle nima?",
        options: ["Bir class bir nechta vazifani bajarishi kerak", "Bir class faqat bitta vazifani bajarishi kerak", "Bir class hech qanday vazifani bajarishi shart emas", "Bir class barcha vazifalarni bajarishi kerak"],
        correct: 1,
        explanation: "Single Responsibility Principle - bir class faqat bitta vazifani bajarishi kerak."
    },
    {
        question: "O - Open/Closed Principle nima?",
        options: ["Class ochiq bo'lishi kerak", "Class yopiq bo'lishi kerak", "Class kengaytirish uchun ochiq, o'zgartirish uchun yopiq", "Class hech qachon o'zgartirilmasligi kerak"],
        correct: 2,
        explanation: "Open/Closed Principle - class kengaytirish uchun ochiq, lekin o'zgartirish uchun yopiq bo'lishi kerak."
    },
    {
        question: "L - Liskov Substitution Principle nima?",
        options: ["Child class parent class'ni almashtirishi mumkin", "Parent class child class'ni almashtirishi mumkin", "Class'lar bir-birini almashtirishi mumkin emas", "Faqat bir xil class'lar almashtirilishi mumkin"],
        correct: 0,
        explanation: "Liskov Substitution Principle - child class parent class'ni almashtirishi mumkin bo'lishi kerak."
    },
    {
        question: "I - Interface Segregation Principle nima?",
        options: ["Barcha interfeyslarni birlashtirish", "Katta interfeyslarni kichik qismlarga bo'lish", "Interfeyslarni o'chirish", "Interfeyslarni nusxalash"],
        correct: 1,
        explanation: "Interface Segregation Principle - katta interfeyslarni kichik, maxsus qismlarga bo'lish kerak."
    },
    {
        question: "D - Dependency Inversion Principle nima?",
        options: ["Yuqori darajadagi modullar pastki darajadagi modullarga bog'liq bo'lishi kerak", "Pastki darajadagi modullar yuqori darajadagi modullarga bog'liq bo'lishi kerak", "Modullar bir-biriga bog'liq bo'lmasligi kerak", "Barcha modullar bir-biriga bog'liq bo'lishi kerak"],
        correct: 0,
        explanation: "Dependency Inversion Principle - yuqori darajadagi modullar pastki darajadagi modullarga bog'liq bo'lishi kerak."
    },
    {
        question: "Quyidagi kodda qaysi principle buzilgan?",
        code: "class User:\n    def __init__(self, name, email):\n        self.name = name\n        self.email = email\n    \n    def save_to_database(self):\n        # Database'ga saqlash\n        pass\n    \n    def send_email(self):\n        # Email yuborish\n        pass",
        options: ["Single Responsibility", "Open/Closed", "Liskov Substitution", "Interface Segregation"],
        correct: 0,
        explanation: "Single Responsibility Principle buzilgan, chunki User class'i user ma'lumotlarini saqlash va email yuborish kabi turli vazifalarni bajaradi."
    },
    {
        question: "DRY principle nima?",
        options: ["Don't Repeat Yourself", "Do Repeat Yourself", "Don't Read Yourself", "Do Read Yourself"],
        correct: 0,
        explanation: "DRY principle - Don't Repeat Yourself, ya'ni kodni takrorlamaslik."
    },
    {
        question: "KISS principle nima?",
        options: ["Keep It Simple, Stupid", "Keep It Smart, Stupid", "Keep It Short, Stupid", "Keep It Safe, Stupid"],
        correct: 0,
        explanation: "KISS principle - Keep It Simple, Stupid, ya'ni kodni sodda qoldirish."
    },
    {
        question: "Quyidagi kodda qaysi principle qo'llanilgan?",
        code: "from abc import ABC, abstractmethod\n\nclass PaymentProcessor(ABC):\n    @abstractmethod\n    def process_payment(self, amount):\n        pass\n\nclass CreditCardProcessor(PaymentProcessor):\n    def process_payment(self, amount):\n        return f'Credit card: {amount}'",
        options: ["Single Responsibility", "Open/Closed", "Liskov Substitution", "Dependency Inversion"],
        correct: 1,
        explanation: "Open/Closed Principle qo'llanilgan, chunki yangi to'lov usullarini qo'shish mumkin, lekin mavjud kodni o'zgartirish shart emas."
    },
    {
        question: "Quyidagi kodda qaysi principle buzilgan?",
        code: "class Bird:\n    def fly(self):\n        print('Flying')\n\nclass Penguin(Bird):\n    def fly(self):\n        raise Exception('Penguins cannot fly')",
        options: ["Single Responsibility", "Open/Closed", "Liskov Substitution", "Interface Segregation"],
        correct: 2,
        explanation: "Liskov Substitution Principle buzilgan, chunki Penguin Bird'ni to'liq almashtira olmaydi."
    },
    {
        question: "Quyidagi kodda qaysi principle qo'llanilgan?",
        code: "class EmailService:\n    def send_email(self, to, subject, body):\n        pass\n\nclass UserService:\n    def __init__(self, email_service):\n        self.email_service = email_service\n    \n    def create_user(self, user_data):\n        # User yaratish\n        self.email_service.send_email(user_data['email'], 'Welcome', 'Welcome!')",
        options: ["Single Responsibility", "Open/Closed", "Liskov Substitution", "Dependency Inversion"],
        correct: 3,
        explanation: "Dependency Inversion Principle qo'llanilgan, chunki UserService EmailService'ga bog'liq, lekin u tashqi tomondan beriladi."
    },
    {
        question: "SOLID principles'ning maqsadi nima?",
        options: ["Kodni tezlashtirish", "Kodning sifatini yaxshilash", "Xotira tejash", "Dastur kichikroq qilish"],
        correct: 1,
        explanation: "SOLID principles'ning maqsadi kodning sifatini, qayta ishlatilishini va saqlanishini yaxshilash."
    },
    {
        question: "Quyidagi kodda qaysi principle qo'llanilgan?",
        code: "class Printer:\n    def print_document(self, document):\n        pass\n\nclass Scanner:\n    def scan_document(self, document):\n        pass\n\nclass MultiFunctionDevice(Printer, Scanner):\n    pass",
        options: ["Single Responsibility", "Open/Closed", "Liskov Substitution", "Interface Segregation"],
        correct: 3,
        explanation: "Interface Segregation Principle qo'llanilgan, chunki Printer va Scanner alohida interfeyslar bo'lib, faqat kerakli funksionallikni taqdim etadi."
    },
    {
        question: "SOLID principles qanday foydali?",
        options: ["Kodni tezlashtiradi", "Kodning qayta ishlatilishini, kengaytirilishini va saqlanishini yaxshilaydi", "Xotirani tejaydi", "Dasturni kichikroq qiladi"],
        correct: 1,
        explanation: "SOLID principles kodning qayta ishlatilishini, kengaytirilishini, saqlanishini va tushunishini yaxshilaydi."
    }
];