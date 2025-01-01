import type { StyleDictionary, TDocumentDefinitions } from 'pdfmake/interfaces';

const villageOne = [
  {
    fullName: 'เด็กหญิงปวริศา ดีศีลรักษ์',
    houseId: '112',
    birthDate: '28/02/2567',
    age: '30 ปี 8 เดือน 20 วัน',
  },
  {
    fullName: 'เด็กชายสมชาย ใจดี',
    houseId: '487',
    birthDate: '28/02/2567',
    age: '30 ปี 8 เดือน 20 วัน',
  },
  {
    fullName: 'เด็กหญิงเพ็ญ มีนา',
    houseId: '69/9',
    birthDate: '28/02/2567',
    age: '30 ปี 8 เดือน 20 วัน',
  },
  {
    fullName: 'เด็กชายวรรธนะ รักสุข',
    houseId: 32,
    birthDate: '28/02/2567',
    age: '30 ปี 8 เดือน 20 วัน',
  },
  {
    fullName: 'เด็กหญิงนิราศรีพัฒน์',
    houseId: '384',
    birthDate: '28/02/2567',
    age: '30 ปี 8 เดือน 20 วัน',
  },
  {
    fullName: 'เด็กชายสมพงษ์ จัทนร์สว่าง',
    houseId: '92',
    birthDate: '28/02/2567',
    age: '30 ปี 8 เดือน 20 วัน',
  },
  {
    fullName: 'เด็กชายวิชัย สุขใจ',
    houseId: '402',
    birthDate: '28/02/2567',
    age: '30 ปี 8 เดือน 20 วัน',
  },
  {
    fullName: 'เด็กชายวิชัย สุขใจ',
    houseId: '402',
    birthDate: '28/02/2567',
    age: '30 ปี 8 เดือน 20 วัน',
  },
  {
    fullName: 'เด็กชายวิชัย สุขใจ',
    houseId: '402',
    birthDate: '28/02/2567',
    age: '30 ปี 8 เดือน 20 วัน',
  },
  {
    fullName: 'เด็กชายวิชัย สุขใจ',
    houseId: '402',
    birthDate: '28/02/2567',
    age: '30 ปี 8 เดือน 20 วัน',
  },
  {
    fullName: 'เด็กชายวิชัย สุขใจ',
    houseId: '402',
    birthDate: '28/02/2567',
    age: '30 ปี 8 เดือน 20 วัน',
  },
  {
    fullName: 'เด็กชายวิชัย สุขใจ',
    houseId: '402',
    birthDate: '28/02/2567',
    age: '30 ปี 8 เดือน 20 วัน',
  },
  {
    fullName: 'เด็กชายวิชัย สุขใจ',
    houseId: '402',
    birthDate: '28/02/2567',
    age: '30 ปี 8 เดือน 20 วัน',
  },
  {
    fullName: 'เด็กชายวิชัย สุขใจ',
    houseId: '402',
    birthDate: '28/02/2567',
    age: '30 ปี 8 เดือน 20 วัน',
  },
  {
    fullName: 'เด็กชายวิชัย สุขใจ',
    houseId: '402',
    birthDate: '28/02/2567',
    age: '30 ปี 8 เดือน 20 วัน',
  },
  {
    fullName: 'เด็กชายวิชัย สุขใจ',
    houseId: '402',
    birthDate: '28/02/2567',
    age: '30 ปี 8 เดือน 20 วัน',
  },
  {
    fullName: 'เด็กชายวิชัย สุขใจ',
    houseId: '402',
    birthDate: '28/02/2567',
    age: '30 ปี 8 เดือน 20 วัน',
  },
  {
    fullName: 'เด็กชายวิชัย สุขใจ',
    houseId: '402',
    birthDate: '28/02/2567',
    age: '30 ปี 8 เดือน 20 วัน',
  },
  {
    fullName: 'เด็กชายวิชัย สุขใจ',
    houseId: '402',
    birthDate: '28/02/2567',
    age: '30 ปี 8 เดือน 20 วัน',
  },
  {
    fullName: 'เด็กชายวิชัย สุขใจ',
    houseId: '402',
    birthDate: '28/02/2567',
    age: '30 ปี 8 เดือน 20 วัน',
  },
  {
    fullName: 'เด็กชายวิชัย สุขใจ',
    houseId: '402',
    birthDate: '28/02/2567',
    age: '30 ปี 8 เดือน 20 วัน',
  },
  {
    fullName: 'เด็กชายวิชัย สุขใจ',
    houseId: '402',
    birthDate: '28/02/2567',
    age: '30 ปี 8 เดือน 20 วัน',
  },
  {
    fullName: 'เด็กชายวิชัย สุขใจ',
    houseId: '402',
    birthDate: '28/02/2567',
    age: '30 ปี 8 เดือน 20 วัน',
  },
  {
    fullName: 'เด็กชายวิชัย สุขใจ',
    houseId: '402',
    birthDate: '28/02/2567',
    age: '30 ปี 8 เดือน 20 วัน',
  },
  {
    fullName: 'เด็กชายวิชัย สุขใจ',
    houseId: '402',
    birthDate: '28/02/2567',
    age: '30 ปี 8 เดือน 20 วัน',
  },
  {
    fullName: 'เด็กชายวิชัย สุขใจ',
    houseId: '402',
    birthDate: '28/02/2567',
    age: '30 ปี 8 เดือน 20 วัน',
  },
  {
    fullName: 'เด็กชายวิชัย สุขใจ',
    houseId: '402',
    birthDate: '28/02/2567',
    age: '30 ปี 8 เดือน 20 วัน',
  },
  {
    fullName: 'เด็กชายวิชัย สุขใจ',
    houseId: '402',
    birthDate: '28/02/2567',
    age: '30 ปี 8 เดือน 20 วัน',
  },
  {
    fullName: 'เด็กชายวิชัย สุขใจ',
    houseId: '402',
    birthDate: '28/02/2567',
    age: '30 ปี 8 เดือน 20 วัน',
  },
  {
    fullName: 'เด็กชายวิชัย สุขใจ',
    houseId: '402',
    birthDate: '28/02/2567',
    age: '30 ปี 8 เดือน 20 วัน',
  },
  {
    fullName: 'เด็กชายวิชัย สุขใจ',
    houseId: '402',
    birthDate: '28/02/2567',
    age: '30 ปี 8 เดือน 20 วัน',
  },
];

const styles: StyleDictionary = {
  h1: {
    fontSize: 12,
    bold: true,
  },
  h2: {
    fontSize: 11,
  },
  h3: {
    fontSize: 10,
  },
  normalText: {
    font: 'Roboto',
  },
};

export const templateTwo = (): TDocumentDefinitions => {
  return {
    defaultStyle: {
      fontSize: 9.5,
    },
    pageSize: 'A4',
    footer: function (currentPage, pageCount) {
      return [
        [
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
            margin: [40, 0, 40, 0],
          },
        ],
        {
          columns: [
            {
              text: 'หมายเหตุ : ',
              alignment: 'left',
              width: '*',
              style: ['h3', 'bold'],
            },
            {
              text: `หน้า ${currentPage} / ${pageCount}`,
              alignment: 'right',
              width: 'auto',
              style: ['h3', 'bold'],
            },
          ],
          margin: [45, 4, 45, 0],
        },
      ];
    },
    content: [
      {
        columns: [
          {
            text: 'รายชื่อเด็กที่อายุไม่ถึง 72 เดือน (0-6 ปี) จำเเนกตามหมู่บ้าน \n',
            style: 'h1',
            alignment: 'left',
            width: '*',
          },
          {
            text: 'งวดที่ 2 : 1 มกราคม 30 มีนาคม ปี พ.ศ. 2567',
            fontSize: 9.5,
            alignment: 'right',
            width: 'auto',
            margin: [0, 2],
          },
        ],
      },
      {
        columns: [
          {
            text: 'สถานบริการ(สถานีอนามัย/PCU): โรงพยาบาลสงเสริมสุขภาพตำบลศาลาด่าน\n ต. ศาลาด่าน อ. เกาะลันตา จ.กระบี่\n',
            style: 'h3',
            width: '*',
          },
          {
            text: 'ที่อยู่จริง (0,1,3)\n',
            style: 'h3',
            alignment: 'right',
            width: 'auto',
          },
        ],
        margin: [0, 8],
      },

      {
        columns: [
          {
            text: `ชื่อผู้ออกรายงาน นางสาวสมใจ มั่นคง \n`,
            style: 'h3',
          },
          {
            text: 'วันที่ออกรายงาน  3 มี.ค. 2567',
            style: 'h3',
            alignment: 'right',
          },
        ],
        margin: [0, 6],
      },

      {
        margin: [0, 6],
        layout: {
          fillColor: function (rowIndex) {
            if (rowIndex === 0) {
              return '#CCCCCC'; // Set Color in header
            }

            return null;
          },
          hLineWidth: function (i, node) {
            if (i === 0 || i === 1) {
              return 1;
            }

            if (node.table.body.includes) {
            }

            return 0.05;
          },
          hLineColor: function (i) {
            if (i === 0 || i === 1) {
              return 'black';
            }

            return '#A9A9A9';
          },
          vLineWidth: function () {
            return 0;
          },
          paddingLeft: function (i) {
            return i === 0 ? 8 : 4;
          },
          paddingRight: function (i) {
            return i === 0 ? 8 : 4;
          },
          paddingTop: function (i) {
            return i === 0 ? 4 : 2;
          },
          paddingBottom: function (i) {
            return i === 0 ? 4 : 2;
          },
        },
        table: {
          widths: [22, '*', '*', '*', '*'],
          headerRows: 1, // Repeat header in each page
          dontBreakRows: true, // Prevent row splitting cross pages
          body: [
            // Village One
            [
              {
                text: 'ลำดับ',
                alignment: 'center',
                margin: [0, 4],
              },
              {
                text: 'ชื่อ-นามสกุล',
                margin: [0, 4],
              },
              {
                text: 'บ้านเลขที่',
                alignment: 'center',
                margin: [0, 4],
              },
              {
                text: 'วันที่เดือนปีเกิด',
                alignment: 'center',
                margin: [0, 4],
              },
              {
                text: 'อายุ',
                alignment: 'center',
                margin: [0, 4],
              },
            ],
            [
              {
                text: 'หมู่ที่ 1 บ้านศาลาด่าน',
                colSpan: 5,
                alignment: 'left',
                bold: true,
                margin: [3, 7.5, 3, 6],
              },
              {},
              {},
              {},
              {},
            ],
            ...villageOne.map((patient, count) => [
              { text: count + 1, alignment: 'center', margin: [0, 2] },
              { text: patient.fullName, margin: [0, 2] },
              { text: patient.houseId, alignment: 'center', margin: [0, 2] },
              {
                text: patient.birthDate,
                alignment: 'center',
                margin: [0, 2],
              },
              { text: patient.age, alignment: 'center', margin: [0, 2] },
            ]),
          ],
        },
      },
    ],
    styles: styles,
  };
};
