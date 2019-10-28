import { Router } from '@angular/router';
import { EventEmitter, Output, Component, AfterViewInit, ElementRef, ViewChild, HostListener, Input, OnDestroy } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-modal',
  exportAs: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements AfterViewInit, OnDestroy {
  @Output() modalClose: EventEmitter<any> = new EventEmitter<any>();

  @Input() cssClass: string = "";

  @ViewChild('modalEl', { static: false }) private modalEl: ElementRef;

  constructor(private router: Router) { }

  ngOnDestroy() {
    $(this.modalEl.nativeElement).modal('hide');
  }

  ngAfterViewInit() {
    debugger;
    this.openModal();
    $(this.modalEl.nativeElement).on('hidden.bs.modal', (e) => {
      this.onCloseModal(e);
    });
  }

  openModal() {
    $(this.modalEl.nativeElement).modal('show');
  }

  onCloseModal($event) {
    this.router.navigate([{ outlets: { modal: null } }]);
    this.modalClose.next($event);
  }


  closeModal() {
    $(this.modalEl.nativeElement).modal('hide');
  }
}