import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class Hero {

  activeMenu: string | null = null;

  toggleMenu(menu: string): void {

    if (this.activeMenu === menu) {
      this.activeMenu = null;
    } else {
      this.activeMenu = menu;
    }

    console.log('activeMenu:', this.activeMenu);
  }

  closeMenu(): void {
    this.activeMenu = null;
  }

  socialMedia = {tiktok: "https://www.tiktok.com/@paola_reviews?_r=1&_t=ZS-98pfekhcS5Y", 
    tiktokpers: "https://www.tiktok.com/@paola.machitche?_r=1&_t=ZS-98pgrtEbnsN",
    facebook: "https://www.facebook.com/share/1BfCZJnC2c/", 
    instagram: "https://www.instagram.com/paolamachitche?igsh=MXhzbmlnMzZnejNweA=="}

}