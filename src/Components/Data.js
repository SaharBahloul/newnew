export const artisans = [
  {
    id: 0,
    name: "John Doe",
    bio: "Experienced electronic device artisan specializing in tablets and smartphones.",
    address: "123 Apple Lane, Tech City",
    image: "https://example.com/john_doe.jpg",
  },
  {
    id: 1,
    name: "Jane Smith",
    bio: "Expert in laptop craftsmanship with a focus on user experience.",
    address: "456 Tech Avenue, Silicon Valley",
    image: "https://example.com/jane_smith.jpg",
  },
  {
    id: 2,
    name: "Alice Johnson",
    bio: "Innovative TV designer, bringing the latest in 4K technology.",
    address: "789 Innovation Blvd, Tech Town",
    image: "https://example.com/alice_johnson.jpg",
  },
  // Add more artisans as needed
];
export const products = [
  {
    id: 0,
    name: "IPAD",
    description: "The 11-inch iPad Pro display has rounded corners...",
    price: 55,
    qte: 0,
    region: "sfax",
    rating: 1,
    image:
    "https://cdn.refurb.eu//files/refurb.eu/BareboneProductFile/239-apple-ipad-pro-105.jpg",
    artisanId: 0, // Link to John Doe
  },
  {
    id: 1,
    name: "LAPTOP",
    description: "HP NoteBook is a Windows 10 laptop jkbikj ojjk, ikojloj,  oijoij lop...",
    price: 25,
    qte: 0,
    rating: 2,
    brand: "Hp",
    image:
    "https://cdn.refurb.eu//files/refurb.eu/BareboneProductFile/239-apple-ipad-pro-105.jpg",
    artisanId: 1, // Link to Jane Smith
  },
  {
    id: 2,
    name: "TV",
    description: "4K TVs have four times more pixels...",
    price: 20,
    brand: "Samsung",
    rating: 4,
    qte: 0,
    image:
    "https://cdn.refurb.eu//files/refurb.eu/BareboneProductFile/239-apple-ipad-pro-105.jpg",
    artisanId: 2, // Link to Alice Johnson
  },
  {
    id: 3,
    name: "PHONE",
    description: "The iPhone 15 comes with 6.1-inch OLED display...",
    brand: "Apple",
    rating: 3,
    price: 40,
    qte: 0,
    image:
    "https://cdn.refurb.eu//files/refurb.eu/BareboneProductFile/239-apple-ipad-pro-105.jpg",
    artisanId: 0, // Link back to John Doe for another Apple product
  },
  // Add more products as needed
];

