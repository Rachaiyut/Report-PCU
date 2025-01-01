import { Injectable } from '@nestjs/common';
import PdfPrinter from 'pdfmake';
import { TDocumentDefinitions } from 'pdfmake/interfaces';

// Define font files
const thaiFonts = {
  Roboto: {
    normal: 'fonts/Sarabun/Sarabun-Regular.ttf',
    bold: 'fonts/Sarabun/Sarabun-Bold.ttf',
    italics: 'fonts/Sarabun/Sarabun-Italic.ttf',
    boldItalics: 'fonts/Sarabun/Sarabun-BoldItalic.ttf',
  },
};

// const fonts = {
//   Roboto: {
//     normal: 'fonts/Roboto/Roboto-Regular.ttf',
//     bold: 'fonts/Roboto/Roboto-Medium.ttf',
//     italics: 'fonts/Roboto/Roboto-Italic.ttf',
//     bolditalics: 'fonts/Roboto/Roboto-MediumItalic.ttf',
//   },
// };

@Injectable()
export class PrinterService {
  private printer = new PdfPrinter(thaiFonts);

  createPdf(docDefinition: TDocumentDefinitions) {
    return this.printer.createPdfKitDocument(docDefinition);
  }

  creatReportPdf(docDefinition: TDocumentDefinitions) {
    return this.printer.createPdfKitDocument(docDefinition);
  }
}
