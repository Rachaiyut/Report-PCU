import { Injectable } from '@nestjs/common';

import { PrinterService } from 'src/printer/printer.service';
import { billReport } from './documents/bill.report';
import { templateOne } from './documents/template-1';

@Injectable()
export class ReportsService {
  constructor(private readonly printer: PrinterService) {}

  async getBillReport(): Promise<PDFKit.PDFDocument> {
    const docDefinition = billReport();

    return this.printer.createPdf(docDefinition);
  }

  async getReportOne(): Promise<PDFKit.PDFDocument> {
    const docDefinition = templateOne();

    return this.printer.creatReportPdf(docDefinition);
  }
}
