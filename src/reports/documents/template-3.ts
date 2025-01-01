/* eslint-disable @typescript-eslint/no-unused-vars */
import { table } from 'console';
import type { StyleDictionary, TDocumentDefinitions } from 'pdfmake/interfaces';

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
  tableHeader: {
    fontSize: 12,
    bold: true,
    alignment: 'center',
    margin: [0, 10],
  },
  tableData: {
    fontSize: 11,
    alignment: 'center',
    margin: [0, 10],
  },
};

export const templateThree = (): TDocumentDefinitions => {
  return {
    defaultStyle: {
      fontSize: 9.5,
    },
    pageSize: 'A4',
    pageOrientation: 'landscape',
    footer: function (currentPage, pageCount) {
      return [
        [
          {
            canvas: [
              {
                type: 'line',
                x1: 0,
                y1: 5,
                x2: 765,
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
        text: 'รายชื่อเด็กที่อายุไม่ถึง 72 เดือน (0-6 ปี) จำเเนกตามหมู่บ้าน \n',
        style: 'h1',
        alignment: 'left',
      },
      {
        columns: [
          {
            text: 'สถานบริการ(สถานีอนามัย/PCU): โรงพยาบาลสงเสริมสุขภาพตำบลศาลาด่าน ต. ศาลาด่าน อ. เกาะลันตา จ.กระบี่',
            style: 'h3',
            width: '*',
          },
          {
            text: 'ระหว่างวันที่  1 พ.ย. 2567 - 15 พ.ย. 2567\n',
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
        canvas: [
          {
            type: 'line',
            x1: 0,
            y1: 5,
            x2: 765,
            y2: 5,
            lineWidth: 1,
          },
        ],
      },

      {
        margin: [75, 30],
        table: {
          headerRows: 1, // First row as header
          widths: ['*', '*', '*', '*'], // Set column widths
          body: [
            // Table rows (headers and data)
            [
              { text: 'เพศ', style: 'tableHeader' },
              { text: 'จำนวน', style: 'tableHeader' },
              { text: 'ร้อยละ', style: 'tableHeader' },
              { text: 'อายุเฉลี่ย', style: 'tableHeader' },
            ],
            [
              { text: 'ชาย', style: 'tableData' },
              { text: '657', style: 'tableData' },
              { text: '46.33', style: 'tableData' },
              { text: '51.00', style: 'tableData' },
            ],
            [
              { text: 'หญิง', style: 'tableData' },
              { text: '752', style: 'tableData' },
              { text: '53.37', style: 'tableData' },
              { text: '50.00', style: 'tableData' },
            ],
            [
              { text: 'รวม', style: 'tableData' },
              { text: '1,409', style: 'tableData' },
              { text: '100.00', style: 'tableData' },
              { text: '50.00', style: 'tableData' },
            ],
          ],
        },
        layout: {
          fillColor: function (rowIndex, node, columnIndex) {
            return null; // No background color
          },
          hLineWidth: function (i, node) {
            return i === 0 || i === node.table.body.length ? 1 : 0.5;
          },
          vLineWidth: function (i, node) {
            return 0.5;
          },
          hLineColor: function (i, node) {
            return '#000000';
          },
          vLineColor: function (i, node) {
            return '#000000';
          },
          paddingLeft: function (i, node) {
            return 8;
          },
          paddingRight: function (i, node) {
            return 8;
          },
          paddingTop: function (i, node) {
            return 4;
          },
          paddingBottom: function (i, node) {
            return 4;
          },
        },
      },
    ],
    styles: styles,
  };
};
