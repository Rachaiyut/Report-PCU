import type {
  Content,
  StyleDictionary,
  TDocumentDefinitions,
} from 'pdfmake/interfaces';

const villageOne = [
  {
    fullName: 'เด็กหญิงปวริศา ดีศีลรักษ์',
    houseId: '112',
    lastestDate: '28/02/2567',
    ageCheck: 9,
    weight: '6.50',
    height: '65.00',
    nutrition: 'นน.ค่อนข้างน้อย',
  },
  {
    fullName: 'เด็กชายสมชาย ใจดี',
    houseId: '487',
    lastestDate: '28/02/2567',
    ageCheck: 42,
    weight: '13.50',
    height: '96.00',
    nutrition: 'นน.ค่อนข้างน้อย',
  },
  {
    fullName: 'เด็กหญิงเพ็ญ มีนา',
    houseId: '69/9',
    lastestDate: '28/02/2567',
    ageCheck: 52,
    weight: '13.50',
    height: '97.00',
    nutrition: 'นน.ค่อนข้างน้อย',
  },
  {
    fullName: 'เด็กชายวรรธนะ รักสุข',
    houseId: 32,
    lastestDate: '28/02/2567',
    ageCheck: 8,
    weight: '10.80',
    height: '72.00',
    nutrition: 'นน.มาก',
  },
  {
    fullName: 'เด็กหญิงนิราศรีพัฒน์',
    houseId: '384',
    lastestDate: '28/02/2567',
    ageCheck: 42,
    weight: '24.50',
    height: '105.00',
    nutrition: 'นน.มาก',
  },
  {
    fullName: 'เด็กชายสมพงษ์ จัทนร์สว่าง',
    houseId: '92',
    lastestDate: '28/02/2567',
    ageCheck: 36,
    weight: '11.00',
    height: '92.00',
    nutrition: 'นน.น้อย',
  },
  {
    fullName: 'เด็กชายวิชัย สุขใจ',
    houseId: '402',
    lastestDate: '28/02/2567',
    ageCheck: 46,
    weight: '13.00',
    height: '96.00',
    nutrition: 'นน.ค่อนข้างน้อย',
  },
]; 

const villageTwo = [
  {
    fullName: 'เด็กหญิงอรวรรณ ใจดี',
    houseId: '112',
    lastestDate: '28/02/2567',
    ageCheck: 9,
    weight: '6.50',
    height: '65.00',
    nutrition: 'นน.ค่อนข้างน้อย',
  },
  {
    fullName: 'เด็กหญิงอรวรรณ ใจดี',
    houseId: '112',
    lastestDate: '28/02/2567',
    ageCheck: 9,
    weight: '6.50',
    height: '65.00',
    nutrition: 'นน.ค่อนข้างน้อย',
  },
  {
    fullName: 'เด็กหญิงอรวรรณ ใจดี',
    houseId: '112',
    lastestDate: '28/02/2567',
    ageCheck: 9,
    weight: '6.50',
    height: '65.00',
    nutrition: 'นน.ค่อนข้างน้อย',
  },
  {
    fullName: 'เด็กหญิงอรวรรณ ใจดี',
    houseId: '112',
    lastestDate: '28/02/2567',
    ageCheck: 9,
    weight: '6.50',
    height: '65.00',
    nutrition: 'นน.ค่อนข้างน้อย',
  },
  {
    fullName: 'เด็กหญิงอรวรรณ ใจดี',
    houseId: '112',
    lastestDate: '28/02/2567',
    ageCheck: 9,
    weight: '6.50',
    height: '65.00',
    nutrition: 'นน.ค่อนข้างน้อย',
  },
  {
    fullName: 'เด็กหญิงอรวรรณ ใจดี',
    houseId: '112',
    lastestDate: '28/02/2567',
    ageCheck: 9,
    weight: '6.50',
    height: '65.00',
    nutrition: 'นน.ค่อนข้างน้อย',
  },
  {
    fullName: 'เด็กหญิงอรวรรณ ใจดี',
    houseId: '112',
    lastestDate: '28/02/2567',
    ageCheck: 9,
    weight: '6.50',
    height: '65.00',
    nutrition: 'นน.ค่อนข้างน้อย',
  },
  {
    fullName: 'เด็กหญิงอรวรรณ ใจดี',
    houseId: '112',
    lastestDate: '28/02/2567',
    ageCheck: 9,
    weight: '6.50',
    height: '65.00',
    nutrition: 'นน.ค่อนข้างน้อย',
  },
  {
    fullName: 'เด็กหญิงอรวรรณ ใจดี',
    houseId: '112',
    lastestDate: '28/02/2567',
    ageCheck: 9,
    weight: '6.50',
    height: '65.00',
    nutrition: 'นน.ค่อนข้างน้อย',
  },
  {
    fullName: 'เด็กหญิงอรวรรณ ใจดี',
    houseId: '112',
    lastestDate: '28/02/2567',
    ageCheck: 9,
    weight: '6.50',
    height: '65.00',
    nutrition: 'นน.ค่อนข้างน้อย',
  },
  {
    fullName: 'เด็กหญิงอรวรรณ ใจดี',
    houseId: '112',
    lastestDate: '28/02/2567',
    ageCheck: 9,
    weight: '6.50',
    height: '65.00',
    nutrition: 'นน.ค่อนข้างน้อย',
  },
  {
    fullName: 'เด็กหญิงอรวรรณ ใจดี',
    houseId: '112',
    lastestDate: '28/02/2567',
    ageCheck: 9,
    weight: '6.50',
    height: '65.00',
    nutrition: 'นน.ค่อนข้างน้อย',
  },
  {
    fullName: 'เด็กหญิงอรวรรณ ใจดี',
    houseId: '112',
    lastestDate: '28/02/2567',
    ageCheck: 9,
    weight: '6.50',
    height: '65.00',
    nutrition: 'นน.ค่อนข้างน้อย',
  },
  {
    fullName: 'เด็กหญิงอรวรรณ ใจดี',
    houseId: '112',
    lastestDate: '28/02/2567',
    ageCheck: 9,
    weight: '6.50',
    height: '65.00',
    nutrition: 'นน.ค่อนข้างน้อย',
  },
  {
    fullName: 'เด็กหญิงอรวรรณ ใจดี',
    houseId: '112',
    lastestDate: '28/02/2567',
    ageCheck: 9,
    weight: '6.50',
    height: '65.00',
    nutrition: 'นน.ค่อนข้างน้อย',
  },
  {
    fullName: 'เด็กหญิงอรวรรณ ใจดี',
    houseId: '112',
    lastestDate: '28/02/2567',
    ageCheck: 9,
    weight: '6.50',
    height: '65.00',
    nutrition: 'นน.ค่อนข้างน้อย',
  },
  {
    fullName: 'เด็กหญิงอรวรรณ ใจดี',
    houseId: '112',
    lastestDate: '28/02/2567',
    ageCheck: 9,
    weight: '6.50',
    height: '65.00',
    nutrition: 'นน.ค่อนข้างน้อย',
  },
  {
    fullName: 'เด็กหญิงอรวรรณ ใจดี',
    houseId: '112',
    lastestDate: '28/02/2567',
    ageCheck: 9,
    weight: '6.50',
    height: '65.00',
    nutrition: 'นน.ค่อนข้างน้อย',
  },
  {
    fullName: 'เด็กหญิงอรวรรณ ใจดี',
    houseId: '112',
    lastestDate: '28/02/2567',
    ageCheck: 9,
    weight: '6.50',
    height: '65.00',
    nutrition: 'นน.ค่อนข้างน้อย',
  },
  {
    fullName: 'เด็กหญิงอรวรรณ ใจดี',
    houseId: '112',
    lastestDate: '28/02/2567',
    ageCheck: 9,
    weight: '6.50',
    height: '65.00',
    nutrition: 'นน.ค่อนข้างน้อย',
  },
];

const styles: StyleDictionary = {
  h1: {
    fontSize: 12,
    bold: true,
  },
  h2: {
    fontSize: 10,
  },
  h3: {
    fontSize: 11,
  },
};

export const templateOne = (): TDocumentDefinitions => {
  return {
    defaultStyle: {
      fontSize: 9.5,
    },
    pageSize: 'A4',
    footer: function (currentPage, pageCount) {
      return {
        columns: [
          {
            text: 'หมายเหตุ : ',
            alignment: 'left',
            width: '*',
            style: ['h2', 'bold'],
          },
          {
            text: `หน้า ${currentPage} / ${pageCount}`,
            alignment: 'right',
            width: 'auto',
            style: ['h2', 'bold'],
          },
        ],
        margin: [40, 0],
      };
    },
    content: [
      {
        columns: [
          {
            text: 'รายชื่อเด็กที่ได้รับการชั้งน้ำหนักเเละพบภาวะโภชนาการบกพร่อง\n',
            style: 'h1',
            width: '*',
          },
          {
            text: 'งวดที่ 2 : 1 มกราคม 30 มีนาคม ปี พ.ศ. 2567',
            style: 'h2',
            alignment: 'right',
            width: 'auto',
          },
        ],
      },
      {
        columns: [
          {
            text: 'สถานบริการ(สถานีอนามัย/PCU): โรงพยาบาลสงเสริมสุขภาพตำบลศาลาด่าน\n ต. ศาลาด่าน อ. เกาะลันตา จ.กระบี่\n',
            style: 'h2',
            width: '*',
          },
          {
            text: 'ที่อยู่จริง (0,1,3)\n',
            style: 'h2',
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
            style: 'h2',
          },
          {
            text: 'วันที่ออกรายงาน  3 มี.ค. 2567',
            style: 'h2',
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
              return  "#CCCCCC" // Set Color in header
            }

            return null
          },
          hLineWidth: function (i, node) {
            if (i === 0 || i === 1) {
              return 1; 
            }

            if (node.table.body.includes) {
            }

            return 0.05;
          },
          hLineColor: function(i, node) {
            if (i === 0 || i === 1) {
              return 'black'
            }

            return "#A9A9A9";
          },
          vLineWidth: function (i) {
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
          widths: [22, '*', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
          headerRows: 1, // Repeat header in each page
          dontBreakRows: true, // Prevent row splitting cross pages
          body: [
            // Village One
            [
              { text: 'ลำดับ', alignment: 'center', padding: [0, 4] },
              { text: 'ชื่อ-นามสกุล', padding: [0, 4] },
              { text: 'บ้านเลขที่', alignment: 'center', padding: [0, 4] },
              {
                text: 'วันที่ตรวจล่าสุด\nงวดนั้น',
                alignment: 'center',
                padding: [0, 4],
              },
              {
                text: 'อายุนับถึง\nวันตรวจ (เดือน)',
                alignment: 'center',
                padding: [0, 4],
              },
              { text: 'น้ำหนัก\n(กก.)', alignment: 'center', padding: [0, 4] },
              { text: 'ส่วนสูง\n(ซม.)', alignment: 'center', padding: [0, 4] },
              { text: 'ภาวะโภชนาการ', alignment: 'center', padding: [0, 4] },
            ],
            [
              {
                text: 'หมู่ที่ 1 บ้านศาลาด่าน',
                colSpan: 8,
                alignment: 'left',
                bold: true,
                margin: [3, 6, 3, 6],
              },
              {},
              {},
              {},
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
                text: patient.lastestDate,
                alignment: 'center',
                margin: [0, 2],
              },
              { text: patient.ageCheck, alignment: 'center', margin: [0, 2] },
              { text: patient.weight, alignment: 'center', margin: [0, 2] },
              { text: patient.height, alignment: 'center', margin: [0, 2] },
              {
                text: patient.nutrition,
                alignment: 'left',
                margin: [0, 2],
              },
            ]),

            // Village Two
            [
              {
                text: 'หมู่ที่ 2 บ้านพระเเอะ',
                colSpan: 8,
                alignment: 'left',
                bold: true,
                margin: [3, 10, 3, 6],
              },
              {},
              {},
              {},
              {},
              {},
              {},
              {},
            ],
            ...villageTwo.map((patient, count) => [
              { text: count + 1, alignment: 'center', margin: [0, 2] },
              { text: patient.fullName, margin: [0, 2] },
              { text: patient.houseId, alignment: 'center', margin: [0, 2] },
              {
                text: patient.lastestDate,
                alignment: 'center',
                margin: [0, 2],
              },
              { text: patient.ageCheck, alignment: 'center', margin: [0, 2] },
              { text: patient.weight, alignment: 'center', margin: [0, 2] },
              { text: patient.height, alignment: 'center', margin: [0, 2] },
              {
                text: patient.nutrition,
                alignment: 'left',
                margin: [0, 2],
              },
            ]),
          ],
        },
      },
    ],
    styles: styles,
  };
};
