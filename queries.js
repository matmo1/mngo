// === READ ===

db.users.find();

db.courses.find();

db.users.find({ "address.city": "Sofia" });

db.courses.find({ price: { $lt: 100 }, category: "Web Development" });

db.instructors.find({ expertise: { $all: ["Python", "Data Science"] } });

// === UPDATE ===

db.users.updateOne(
  { name: "Ivan Petrov" },
  { $set: { age: 26 } }
);

db.courses.updateOne(
  { title: "JavaScript Basics" },
  { $set: { price: 95 } }
);

db.instructors.updateOne(
  { name: "Stefan Dimitrov" },
  { $push: { courses: ObjectId("courseId") } }
);

// === DELETE ===

db.users.deleteOne({ email: "dimitar@mail.com" });

db.courses.deleteMany({ rating: { $lt: 4.1 } });

// === AGGREGATE ===

print("Users by city:");
db.users.aggregate([
  { $group: { _id: "$address.city", count: { $sum: 1 } } }
]);

db.courses.aggregate([
  { $group: { _id: "$category", avgRating: { $avg: "$rating" } } }
]);

db.courses.aggregate([
  { $sort: { price: -1 } }
]);

db.enrollments.aggregate([
  { $group: { _id: "$status", total: { $sum: 1 } } }
]);

db.reviews.aggregate([
  { $group: { _id: "$date", avgRating: { $avg: "$rating" } } },
  { $sort: { _id: 1 } }
]);
