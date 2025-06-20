// === USERS ===
db.users.insertMany([
  { name: "Ivan Petrov", email: "ivan@mail.com", age: 25, interests: ["JavaScript", "Node.js"], address: { city: "Sofia", country: "Bulgaria" } },
  { name: "Maria Georgieva", email: "maria@mail.com", age: 32, interests: ["Python", "Data Science"], address: { city: "Plovdiv", country: "Bulgaria" } },
  { name: "Georgi Ivanov", email: "georgi@mail.com", age: 29, interests: ["Java", "Spring"], address: { city: "Varna", country: "Bulgaria" } },
  { name: "Elena Stoyanova", email: "elena@mail.com", age: 22, interests: ["UX", "UI Design"], address: { city: "Burgas", country: "Bulgaria" } },
  { name: "Nikolay Dimitrov", email: "nikolay@mail.com", age: 35, interests: ["DevOps", "AWS"], address: { city: "Sofia", country: "Bulgaria" } },
  { name: "Kristina Hristova", email: "kristina@mail.com", age: 28, interests: ["React", "Frontend"], address: { city: "Ruse", country: "Bulgaria" } },
  { name: "Petar Todorov", email: "petar@mail.com", age: 30, interests: ["Python", "Flask"], address: { city: "Stara Zagora", country: "Bulgaria" } },
  { name: "Stefan Kolev", email: "stefan@mail.com", age: 27, interests: ["C#", ".NET"], address: { city: "Plovdiv", country: "Bulgaria" } },
  { name: "Viktoria Marinova", email: "viki@mail.com", age: 24, interests: ["UI", "Graphic Design"], address: { city: "Sofia", country: "Bulgaria" } },
  { name: "Dimitar Angelov", email: "dimitar@mail.com", age: 31, interests: ["PHP", "Laravel"], address: { city: "Burgas", country: "Bulgaria" } }
]);

// === COURSES ===
db.courses.insertMany([
  { title: "JavaScript Basics", category: "Web Development", price: 100, tags: ["JavaScript", "frontend"], rating: 4.5 },
  { title: "Advanced Python", category: "Data Science", price: 120, tags: ["Python", "machine learning"], rating: 4.8 },
  { title: "React for Beginners", category: "Web Development", price: 90, tags: ["React", "frontend"], rating: 4.6 },
  { title: "Spring Boot Essentials", category: "Backend", price: 130, tags: ["Java", "Spring"], rating: 4.3 },
  { title: "AWS Fundamentals", category: "DevOps", price: 150, tags: ["AWS", "cloud"], rating: 4.7 },
  { title: "UI/UX Design", category: "Design", price: 80, tags: ["UX", "UI"], rating: 4.4 },
  { title: "C# and .NET", category: "Backend", price: 110, tags: ["C#", ".NET"], rating: 4.2 },
  { title: "PHP with Laravel", category: "Backend", price: 100, tags: ["PHP", "Laravel"], rating: 4.0 },
  { title: "Data Visualization", category: "Data Science", price: 95, tags: ["Python", "visualization"], rating: 4.6 },
  { title: "HTML & CSS Masterclass", category: "Web Development", price: 70, tags: ["HTML", "CSS"], rating: 4.5 }
]);

// === INSTRUCTORS ===
db.instructors.insertMany([
  { name: "Dr. Nikolay Ivanov", expertise: ["Java", "Spring Boot"], bio: "Senior backend developer", courses: [] },
  { name: "Anna Petrova", expertise: ["Python", "Data Science"], bio: "Data scientist and lecturer", courses: [] },
  { name: "Stefan Dimitrov", expertise: ["JavaScript", "React"], bio: "Frontend engineer", courses: [] },
  { name: "Viktoria Hristova", expertise: ["UX", "Design"], bio: "UX/UI designer", courses: [] },
  { name: "Petar Georgiev", expertise: ["DevOps", "AWS"], bio: "Cloud infrastructure specialist", courses: [] },
  { name: "Mariya Ilieva", expertise: ["PHP", "Laravel"], bio: "Fullstack web developer", courses: [] },
  { name: "Hristo Vasilev", expertise: ["C#", ".NET"], bio: "Microsoft certified trainer", courses: [] },
  { name: "Ivaylo Stoyanov", expertise: ["HTML", "CSS", "JS"], bio: "Web design mentor", courses: [] },
  { name: "Tsvetelina Koleva", expertise: ["Visualization", "Python"], bio: "Visualization expert", courses: [] },
  { name: "Stoyan Stefanov", expertise: ["General coding"], bio: "IT educator", courses: [] }
]);

// === REVIEWS ===
db.reviews.insertMany([
  { courseId: ObjectId(), userId: ObjectId(), rating: 5, comment: "Great course!", date: new Date("2024-06-05") },
  { courseId: ObjectId(), userId: ObjectId(), rating: 4, comment: "Very helpful.", date: new Date("2024-06-06") },
  { courseId: ObjectId(), userId: ObjectId(), rating: 3, comment: "Good but hard", date: new Date("2024-06-07") },
  { courseId: ObjectId(), userId: ObjectId(), rating: 5, comment: "Well explained.", date: new Date("2024-06-08") },
  { courseId: ObjectId(), userId: ObjectId(), rating: 4, comment: "Recommended!", date: new Date("2024-06-09") },
  { courseId: ObjectId(), userId: ObjectId(), rating: 2, comment: "Too advanced.", date: new Date("2024-06-10") },
  { courseId: ObjectId(), userId: ObjectId(), rating: 5, comment: "Excellent content.", date: new Date("2024-06-11") },
  { courseId: ObjectId(), userId: ObjectId(), rating: 4, comment: "Great materials.", date: new Date("2024-06-12") },
  { courseId: ObjectId(), userId: ObjectId(), rating: 5, comment: "Very detailed.", date: new Date("2024-06-13") },
  { courseId: ObjectId(), userId: ObjectId(), rating: 3, comment: "Could be better.", date: new Date("2024-06-14") }
]);

// === ENROLLMENTS ===
db.enrollments.insertMany([
  { userId: ObjectId(), courseId: ObjectId(), date: new Date("2024-06-01"), status: "active" },
  { userId: ObjectId(), courseId: ObjectId(), date: new Date("2024-06-02"), status: "completed" },
  { userId: ObjectId(), courseId: ObjectId(), date: new Date("2024-06-03"), status: "active" },
  { userId: ObjectId(), courseId: ObjectId(), date: new Date("2024-06-04"), status: "cancelled" },
  { userId: ObjectId(), courseId: ObjectId(), date: new Date("2024-06-05"), status: "active" },
  { userId: ObjectId(), courseId: ObjectId(), date: new Date("2024-06-06"), status: "completed" },
  { userId: ObjectId(), courseId: ObjectId(), date: new Date("2024-06-07"), status: "active" },
  { userId: ObjectId(), courseId: ObjectId(), date: new Date("2024-06-08"), status: "active" },
  { userId: ObjectId(), courseId: ObjectId(), date: new Date("2024-06-09"), status: "completed" },
  { userId: ObjectId(), courseId: ObjectId(), date: new Date("2024-06-10"), status: "cancelled" }
]);