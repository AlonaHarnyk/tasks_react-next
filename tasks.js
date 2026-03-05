// Створіть файл  data.ts і додайте в нього масив студентів:

// export const students = [
//   {
//     id: 1,
//     name: "Olha",
//     age: 19,
//     course: "Frontend",
//     isOnline: true,
//     avatar: "https://i.pravatar.cc/150?img=1"
//   },
//   {
//     id: 2,
//     name: "Andrii",
//     age: 22,
//     course: "UI/UX",
//     isOnline: false,
//     avatar: "https://i.pravatar.cc/150?img=2"
//   },
//   {
//     id: 3,
//     name: "Maria",
//     age: 20,
//     course: "Frontend",
//     isOnline: true,
//     avatar: "https://i.pravatar.cc/150?img=3"
//   },
//   {
//     id: 4,
//     name: "Dmytro",
//     age: 24,
//     course: "Backend",
//     isOnline: false,
//     avatar: "https://i.pravatar.cc/150?img=4"
//   },
//   {
//     id: 5,
//     name: "Iryna",
//     age: 18,
//     course: "Frontend",
//     isOnline: true,
//     avatar: "https://i.pravatar.cc/150?img=5"
//   }
// ];

// 1️⃣ Створення компонента App

// Створіть компонент App. Імпортуйте у файл з компонентом масив students.

// 2️⃣ Створення компонента списку студентів

// Створіть компонент StudentList. Він повинен приймати масив студентів через props, використовувати тег ul, за допомогою методу .map() рендерити список студентів та для кожного елемента відображати компонент StudentItem.

// 3️⃣ Створення компонента елемента списку

// Створіть компонент StudentItem. Компонент повинен отримувати через props об’єкт студента та відображати аватар студента (img), ім’я, вік, курс навчання та статус студента: якщо isOnline === true — текст "Online", якщо false — текст "Offline".
