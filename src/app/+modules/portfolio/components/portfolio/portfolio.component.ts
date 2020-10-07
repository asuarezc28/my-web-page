import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  closeResult: string;
  name: number; 

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.name = 1; 
  }

  openLg(content2) {
    this.modalService.open(content2, { size: 'lg', centered: true, windowClass: 'dark-modal' });
  }





}










