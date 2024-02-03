export const EXPECTED_CSV_FILE_DATA =
  "Product name,Price,Quantity\r\nMollis consequat,9.00,3\r\nTvoluptatem,10.32,1\r\nScelerisque lacinia,18.90,1\r\nConsectetur adipiscing,28.72,10\r\nCondimentum aliquet,13.90,1\r\n";

export const DATA_WITH_NEGATIVE_CELL =
  "Product name,Price,Quantity\r\nMollis consequat,9.00,3\r\nTvoluptatem,10.32,1\r\nScelerisque lacinia,-4.4,1\r\nConsectetur adipiscing,28.72,10\r\nCondimentum aliquet,13.90,1\r\n";

export const DATA_WITH_BAD_CELLS_NUMBER =
  "Product name,Price,Quantity\r\nMollis consequat,\r\nTvoluptatem,10.32,1\r\nScelerisque lacinia,18.90,1\r\nConsectetur adipiscing,28.72,10\r\nCondimentum aliquet,13.90,1\r\n";

export const DATA_WITH_EMPTY_CELL =
`Product name,Price,Quantity\n,10.00,2`;

export const DATA_WITH_INCORRECT_HEADER =
  "Product name,Price,Quan_tity\r\n Kukuruzka,5,2\r\nTvoluptatem,10.32,1\r\nScelerisque lacinia,18.90,1\r\nConsectetur adipiscing,28.72,10\r\nCondimentum aliquet,13.90,1\r\n";

export const BUNCH_OF_BROKEN_DATA = [
  DATA_WITH_NEGATIVE_CELL,
  DATA_WITH_BAD_CELLS_NUMBER,
  DATA_WITH_INCORRECT_HEADER,
];

export const OUTPUT = {
  items: [
    {
      name: "Mollis consequat",
      price: 9,
      quantity: 3,
      id: "12345",
    },
    {
      name: "Tvoluptatem",
      price: 10.32,
      quantity: 1,
      id: "12345",
    },
    {
      name: "Scelerisque lacinia",
      price: 18.9,
      quantity: 1,
      id: "12345",
    },
    {
      name: "Consectetur adipiscing",
      price: 28.72,
      quantity: 10,
      id: "12345",
    },
    {
      name: "Condimentum aliquet",
      price: 13.9,
      quantity: 1,
      id: "12345",
    },
  ],
  total: 357.32,
};

export const parsedLines = [
  {
    name: "Mollis consequat",
    price: 9,
    quantity: 3,
    id: "12345",
  },
  {
    name: "Tvoluptatem",
    price: 10.32,
    quantity: 1,
    id: "12345",
  },
  {
    name: "Scelerisque lacinia",
    price: 18.9,
    quantity: 1,
    id: "12345",
  },
  {
    name: "Consectetur adipiscing",
    price: 28.72,
    quantity: 10,
    id: "12345",
  },
  {
    name: "Condimentum aliquet",
    price: 13.9,
    quantity: 1,
    id: "12345",
  },
];
