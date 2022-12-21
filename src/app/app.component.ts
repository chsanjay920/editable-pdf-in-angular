import { Component } from '@angular/core';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';
import { Input } from './input';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pdfproject';
  pdfSrc = '/assets/GT1015.pdf';

  public loadComplete(pdf: PDFDocumentProxy): void {
    for (let i = 1; i <= pdf.numPages; i++) {
      let currentPage: any;
      pdf.getPage(i)
        .then((p) => {
          currentPage = p;
          return p.getAnnotations();
        })
        .then((ann) => {
          console.log(ann);
          ann[0].fieldValue = 'hello';
        });
    }
  }
}
