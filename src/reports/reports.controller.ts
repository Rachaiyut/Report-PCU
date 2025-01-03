import { Controller, Get, Res } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { Response } from 'express';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('bill')
  async getBillReport(@Res() response: Response) {
    const pdfDoc = await this.reportsService.getBillReport();

    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Factura';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }

  @Get('template-1')
  async getReportOne(@Res() response: Response) {
    const pdfDoc = await this.reportsService.getReportOne();

    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Report 1';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }

  @Get('template-2')
  async getReportTwo(@Res() response: Response) {
    const pdfDoc = await this.reportsService.getReportTwo();

    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Report 2';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }

  @Get('template-3')
  async getReportThree(@Res() response: Response) {
    const pdfDoc = await this.reportsService.getReportThree();

    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Report 3';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }
}
