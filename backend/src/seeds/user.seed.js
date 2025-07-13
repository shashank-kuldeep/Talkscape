const seedUsers = [
  {
    email: "emma.thompson@example.com",
    fullName: "Emma Thompson",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    email: "olivia.miller@example.com",
    fullName: "Olivia Miller",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    email: "sophia.davis@example.com",
    fullName: "Sophia Davis",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    email: "ava.johnson@example.com",
    fullName: "Ava Johnson",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    email: "liam.smith@example.com",
    fullName: "Liam Smith",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    email: "noah.brown@example.com",
    fullName: "Noah Brown",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];
const seedDatabase = async () => {
  try {
    await connectDB();
    await User.insertMany(seedUsers); 
    console.log("Database seeded successfully");
  } catch (error) {
    console.log("Error seeding database", error);
  }
};

seedDatabase();