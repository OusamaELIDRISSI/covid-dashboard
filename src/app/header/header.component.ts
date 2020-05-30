import { Component, OnInit, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    @Inject(DOCUMENT) private document: Document
  ) {
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
  }

  selectChangeHandler(event: any) {
    const htmlTag = this.document.getElementsByTagName('html')[0] as HTMLHtmlElement;
    htmlTag.dir = event.target.value === 'ar' ? 'rtl' : 'ltr';
    const bodyElement = this.document.getElementsByTagName('body')[0] as HTMLBodyElement;
    bodyElement.style.textAlign = event.target.value === 'ar' ? 'right' : 'left';
    this.translate.use(event.target.value);
  }
}
