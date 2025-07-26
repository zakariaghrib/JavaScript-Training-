// ✅ Données simulées (remplace le books.json)
const books = [
  { name: "Le Petit Prince", price: 15, genre: "Conte" },
  { name: "1984", price: 20, genre: "Science-fiction" },
  { name: "Harry Potter", price: 25, genre: "Fantasy" },
  { name: "Le Rouge et le Noir", price: 10, genre: "Classique" }
];

// 📘 1. Prix d’un livre
function priceOfBook(bookName) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].name === bookName) {
      return books[i].price;
    }
  }
  return null;
}

// 💰 2. Livres abordables selon un budget
function affordableBooks(budget) {
  const result = [];
  for (let i = 0; i < books.length; i++) {
    if (books[i].price <= budget) {
      result[result.length] = books[i];
    }
  }
  return result;
}

// 🎯 3. Trouver les livres par genre
function findBookByGenre(genre) {
  const result = [];
  for (let i = 0; i < books.length; i++) {
    if (books[i].genre === genre) {
      result[result.length] = books[i];
    }
  }
  return result;
}

// 📚 4. Regrouper les livres par genre
function groupByGenre() {
  const grouped = {};
  for (let i = 0; i < books.length; i++) {
    const genre = books[i].genre;
    if (!grouped[genre]) {
      grouped[genre] = [];
    }
    grouped[genre][grouped[genre].length] = books[i];
  }
  return grouped;
}

// 📊 5. Trier les livres par prix croissant
function sortBooksByPrice() {
  const sorted = [];
  for (let i = 0; i < books.length; i++) {
    sorted[i] = books[i];
  }
  for (let i = 0; i < sorted.length - 1; i++) {
    for (let j = 0; j < sorted.length - 1 - i; j++) {
      if (sorted[j].price > sorted[j + 1].price) {
        const temp = sorted[j];
        sorted[j] = sorted[j + 1];
        sorted[j + 1] = temp;
      }
    }
  }
  return sorted;
}

// ✅ TESTS
console.log("🔍 Prix du livre '1984' :", priceOfBook("1984")); // 20
console.log("🔍 Prix d’un livre inexistant :", priceOfBook("Inconnu")); // null

console.log("\n💰 Livres à moins de 20€ :");
console.log(affordableBooks(20)); // Le Rouge et le Noir, Le Petit Prince, 1984

console.log("\n📖 Livres de genre 'Fantasy' :");
console.log(findBookByGenre("Fantasy")); // Harry Potter

console.log("\n📚 Livres groupés par genre :");
console.log(groupByGenre());

console.log("\n📊 Livres triés par prix croissant :");
console.log(sortBooksByPrice());
