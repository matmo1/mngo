# Онлайн Платформа за Курсове – MongoDB проект

## Описание на проекта

Този проект представлява примерна база данни за онлайн платформа за курсове, изградена с MongoDB. Тя включва основни функционалности като потребители, записвания, курсове, инструктори и ревюта. Базата данни демонстрира CRUD операции и агрегационни заявки, приложими за уеб платформи за електронно обучение.

## Колекции и структура

### 1. `users`
Потребителите на платформата.
```json
{
  name: "Ivan Petrov",
  email: "ivan@mail.com",
  age: 25,
  interests: ["JavaScript", "Node.js"],
  address: { city: "Sofia", country: "Bulgaria" }
}
```

### 2. `courses`
Курсове, достъпни на платформата.
```json
{
  title: "JavaScript Basics",
  category: "Web Development",
  price: 100,
  tags: ["JavaScript", "frontend"],
  rating: 4.5
}
```

### 3. `instructors`
Инструктори, които водят курсове.
```json
{
  name: "Dr. Nikolay Ivanov",
  expertise: ["Java", "Spring Boot"],
  bio: "Senior backend developer",
  courses: [ObjectId()]
}
```

### 4. `reviews`
Ревюта от потребители за дадени курсове.
```json
{
  courseId: ObjectId(),
  userId: ObjectId(),
  rating: 5,
  comment: "Great course!",
  date: ISODate("2024-06-05")
}
```

### 5. `enrollments`
Записвания на потребители в курсове.
```json
{
  userId: ObjectId(),
  courseId: ObjectId(),
  date: ISODate("2024-06-01"),
  status: "active"
}
```

## Инсталация и използване

1. Инсталирайте MongoDB и се уверете, че сървърът работи.
2. Клонирайте това репо:
```
git clone https://github.com/matmo1/mngo.git
cd project-name
```
3. Стартирайте Mongo Shell или MongoDB Compass.
4. Стартирайте `insert.js` чрез:
```bash
mongosh < insert.js
```
5. Стартирайте заявки от `queries.js` чрез:
```bash
mongosh < queries.js
```

## Съдържание на проекта

```
project-name
├── insert.js      # Вмъкване на данни (Create)
├── queries.js     # Read, Update, Delete и Aggregate заявки
└── README.md      # Документация за базата данни
```

---
