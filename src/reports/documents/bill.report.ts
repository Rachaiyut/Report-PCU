import type {
  Content,
  StyleDictionary,
  TDocumentDefinitions,
} from 'pdfmake/interfaces';
import { Formatter } from 'src/helpers/formatter';

const logo: Content = {
  image: 'src/assets/tucan-banner.png',
  width: 120,
};

const billProducts = [
  {
    ID: 1,
    Producto: 'Computadora portátil',
    Precio: 1200,
    Cantidad: 10,
    Total: 1200 * 10,
  },
  {
    ID: 2,
    Producto: 'Mouse inalámbrico',
    Precio: 25,
    Cantidad: 50,
    Total: 25 * 50,
  },
  {
    ID: 3,
    Producto: 'Teclado mecánico',
    Precio: 70,
    Cantidad: 30,
    Total: 70 * 30,
  },
  {
    ID: 4,
    Producto: 'Monitor 24 pulgadas',
    Precio: 150,
    Cantidad: 20,
    Total: 150 * 20,
  },
  {
    ID: 5,
    Producto: 'Disco duro externo 1TB',
    Precio: 60,
    Cantidad: 40,
    Total: 60 * 40,
  },
  {
    ID: 6,
    Producto: 'Impresora multifunción',
    Precio: 200,
    Cantidad: 15,
    Total: 200 * 15,
  },
  {
    ID: 7,
    Producto: 'Altavoces Bluetooth',
    Precio: 45,
    Cantidad: 25,
    Total: 45 * 25,
  },
  {
    ID: 8,
    Producto: 'Webcam HD',
    Precio: 35,
    Cantidad: 30,
    Total: 35 * 30,
  },
  {
    ID: 9,
    Producto: 'Micrófono USB',
    Precio: 80,
    Cantidad: 20,
    Total: 80 * 20,
  },
  {
    ID: 10,
    Producto: 'Tablet 10 pulgadas',
    Precio: 300,
    Cantidad: 18,
    Total: 300 * 18,
  },
];

const styles: StyleDictionary = {
  h1: {
    fontSize: 20,
    bold: true,
    margin: [0, 5],
  },
  h2: {
    fontSize: 16,
    bold: true,
  },
  h3: {
    fontSize: 14,
    bold: true,
  },
};

export const billReport = (): TDocumentDefinitions => {
  const subTotal = billProducts.reduce(
    (acc, product) => acc + product.Total,
    0,
  );

  const granTotal = subTotal * 1.16;

  return {
    defaultStyle: {
      // fontSize: 8,
    },
    pageSize: 'A4',
    header: {
      text: 'Bill Report',
      alignment: 'right',
      margin: [10, 10],
    },
    footer: {
      text: 'Generated by Tucan Code',
      alignment: 'right',
      margin: [10, 10],
    },
    content: [
      logo,

      // Linea de separación
      {
        canvas: [
          {
            type: 'line',
            x1: 0,
            y1: 5,
            x2: 515,
            y2: 5,
            lineWidth: 1,
          },
        ],
      },

      {
        text: 'Tucan Code',
        style: 'h1',
      },

      // Dirección de la empresa columna #1
      {
        columns: [
          {
            text: [
              { text: '15 Montgomery St.\n', style: 'h3' },
              `San Francisco, CA 94104 \nBN: 123456789\n`,
              {
                link: 'https://google.com',
                text: 'https://devtalles.com',
              },
            ],
          },
          {
            text: [
              { text: 'Bill Number: 123456\n', style: 'h3' },
              `Date: 2021-09-01\nDue Date: 2021-09-30`,
            ],
            alignment: 'right',
          },
        ],
      },

      // Código QR con la dirección
      {
        qr: 'https://devtalles.com',
        fit: 100,
        alignment: 'right',
      },

      // Datos del cliente
      {
        text: [
          {
            text: 'Cobrar a:\n',
            style: 'h2',
          },
          `John Doe\nRazón Social: John Doe Cop.\nBN: 123456789`,
        ],
      },

      // Tabla con los datos del pedido
      {
        margin: [0, 20],
        layout: 'lightHorizontalLines',
        table: {
          widths: [50, '*', 'auto', 'auto', 'auto'],
          headerRows: 1,
          body: [
            [
              { text: 'ID', alignment: 'center' },
              'Producto',
              'Precio',
              'Cantidad',
              'Total',
            ],
            ...billProducts.map((product) => [
              { text: product.ID, alignment: 'center' },
              product.Producto,
              Formatter.currency(product.Precio),
              product.Cantidad,
              {
                text: Formatter.currency(product.Total),
                bold: true,
                alignment: 'right',
              },
            ]),

            // Totales de la tabla
            [{}, {}, {}, {}, {}],
            [
              { text: 'Subtotal', colSpan: 4, alignment: 'right' },
              {},
              {},
              {},
              {
                text: Formatter.currency(subTotal),
                bold: true,
                alignment: 'right',
              },
            ],
            [
              { text: 'IVA 16%', colSpan: 4, alignment: 'right' },
              {},
              {},
              {},
              {
                text: Formatter.currency(subTotal * 0.16),
                bold: true,
                alignment: 'right',
              },
            ],
            [
              {},
              {},
              {
                text: 'Gran Total',
                colSpan: 2,
                alignment: 'right',
                fillColor: 'black',
                color: 'white',
                bold: true,
                margin: [5, 5],
                fontSize: 14,
              },
              {},
              {
                text: Formatter.currency(granTotal),
                bold: true,
                alignment: 'right',
                fillColor: 'black',
                color: 'white',
                margin: [5, 5],
                fontSize: 14,
              },
            ],
          ],
        },
      },
    ],
    styles: styles,
  };
};
