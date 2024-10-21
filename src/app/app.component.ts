import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

//
export class AppComponent {
  title = 'ngMaterial';
  navbar: HTMLElement | null = document.getElementById("navbar");
  // const navbar = document.getElementById("navbar");
  // const sidebar = document.getElementById("sidebar");
  // const btnSidebarToggler = document.getElementById("btnSidebarToggler");
  // const navClosed = document.getElementById("navClosed");
  // const navOpen = document.getElementById("navOpen");

  ToggleSideNav () { 
   let thing : String = "TestValue";  
   let navbar: HTMLElement | null = document.getElementById("navbar");
   let sidebar: HTMLElement | null = document.getElementById("sidebar");
   sidebar?.classList.toggle("show");
   //sidebar.style.top = parseInt(navbar?.clientHeight) - 1 + "px"
    console.log("YAY")
  }
}
