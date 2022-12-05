import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiar-pw',
  templateUrl: './cambiar-pw.component.html',
  styleUrls: ['./cambiar-pw.component.css']
})
export class CambiarPwComponent implements OnInit {

  constructor(private router: Router) { }

  back(){
    this.router.navigate(["/"]);
  }

  ngOnInit() {
  }

}
