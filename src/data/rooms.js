const rooms = [
  {
    id: 1,
    name: "Habitación Estándar",
    slug: "estandar",
    description: "Un ambiente cálido y funcional, ideal para descansar después de un día de paseo o trabajo.",
    price: 45000,
    capacity: 2,
    bed: "1 cama matrimonial",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85",
    services: ["Wi-Fi", "Aire acondicionado", "Baño privado"]
  },
  {
    id: 2,
    name: "Habitación Deluxe",
    slug: "deluxe",
    description: "Más espacio y detalles pensados para una estadía cómoda, tranquila y especial.",
    price: 70000,
    capacity: 3,
    bed: "1 cama matrimonial y 1 individual",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85",
    services: ["Wi-Fi", "TV", "Minibar", "Desayuno"]
  },
  {
    id: 3,
    name: "Suite Ejecutiva",
    slug: "ejecutiva",
    description: "Una suite elegante con espacio de trabajo, comodidad superior y servicios adicionales.",
    price: 100000,
    capacity: 3,
    bed: "1 cama king size",
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=85",
    services: ["Wi-Fi", "Escritorio", "Minibar", "Desayuno"]
  },
  {
    id: 4,
    name: "Suite Presidencial",
    slug: "presidencial",
    description: "Nuestra opción más exclusiva, con ambientes amplios y una experiencia de máximo confort.",
    price: 160000,
    capacity: 4,
    bed: "1 cama king size y sofá cama",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85",
    services: ["Wi-Fi", "Sala privada", "Minibar", "Desayuno"]
  }
];

export default rooms;
