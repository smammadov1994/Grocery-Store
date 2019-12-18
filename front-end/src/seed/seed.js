let products = [
  {
    id: "A",
    description: "Apple",
    unit_price: 2.0,
    image: "https://image.flaticon.com/icons/png/512/415/415733.png",
    volume_discounts: [
      {
        number: 4,
        price: 7.0
      }
    ]
  },
  {
    id: "B",
    description: "Banana",
    unit_price: 12.0,
    image: "https://image.flaticon.com/icons/png/512/2224/2224095.png",
    volume_discounts: []
  },
  {
    id: "C",
    description: "Cranberry",
    unit_price: 1.25,
    image: "https://image.flaticon.com/icons/png/512/2044/2044963.png",
    volume_discounts: [
      {
        number: 6,
        price: 6.0
      }
    ]
  },
  {
    id: "D",
    description: "Durian",
    unit_price: 0.15,
    image: "https://image.flaticon.com/icons/png/512/1998/1998080.png",
    volume_discounts: []
  }
];

module.exports = products;
