import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ScrollPanel } from 'primeng/scrollpanel';

@Component({
  selector: 'qiqo-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.css']
})
export class AppShellComponent implements AfterViewInit {
  layoutMode = 'slim';
  darkMenu = true;
  profileMode = 'popup';
  rotateMenuButton: boolean;
  topbarMenuActive: boolean;
  overlayMenuActive: boolean;
  staticMenuDesktopInactive: boolean;
  staticMenuMobileActive: boolean;
  layoutMenuScroller: HTMLDivElement;
  menuClick: boolean;
  topbarItemClick: boolean;
  activeTopbarItem: any;
  resetMenu: boolean;
  menuHoverActive: boolean;
  grouped = true;

  @ViewChild('layoutMenuScroller', { static: true }) layoutMenuScrollerViewChild: ScrollPanel;

  // constructor(public renderer: Renderer2) {}

  ngAfterViewInit() {
      setTimeout(() => {this.layoutMenuScrollerViewChild.moveBar(); }, 100);
  }

  onLayoutClick() {
      if (!this.topbarItemClick) {
          this.activeTopbarItem = null;
          this.topbarMenuActive = false;
      }

      if (!this.menuClick) {
          if (this.isHorizontal() || this.isSlim()) {
              this.resetMenu = true;
          }

          if (this.overlayMenuActive || this.staticMenuMobileActive) {
              this.hideOverlayMenu();
          }

          this.menuHoverActive = false;
      }

      this.topbarItemClick = false;
      this.menuClick = false;
  }

  onMenuButtonClick(event) {
      this.menuClick = true;
      this.rotateMenuButton = !this.rotateMenuButton;
      this.topbarMenuActive = false;

      if (this.layoutMode === 'overlay' && !this.isMobile()) {
          this.overlayMenuActive = !this.overlayMenuActive;
      } else {
          if (this.isDesktop()) {
              this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive; } else {
              this.staticMenuMobileActive = !this.staticMenuMobileActive; }
      }

      event.preventDefault();
  }

  onMenuClick($event) {
      this.menuClick = true;
      this.resetMenu = false;

      if (!this.isHorizontal()) {
          setTimeout(() => {this.layoutMenuScrollerViewChild.moveBar(); }, 450);
      }
  }

  onTopbarMenuButtonClick(event) {
      this.topbarItemClick = true;
      this.topbarMenuActive = !this.topbarMenuActive;

      this.hideOverlayMenu();

      event.preventDefault();
  }

  onTopbarItemClick(event, item) {
      this.topbarItemClick = true;

      if (this.activeTopbarItem === item) {
          this.activeTopbarItem = null; } else {
          this.activeTopbarItem = item; }

      event.preventDefault();
  }
  onTopbarSubItemClick(event) {
      event.preventDefault();
  }
  hideOverlayMenu() {
      this.rotateMenuButton = false;
      this.overlayMenuActive = false;
      this.staticMenuMobileActive = false;
  }
  isTablet() {
      const width = window.innerWidth;
      return width <= 1024 && width > 640;
  }
  isDesktop() {
      return window.innerWidth > 1024;
  }
  isMobile() {
      return window.innerWidth <= 640;
  }
  isOverlay() {
      return this.layoutMode === 'overlay';
  }
  isHorizontal() {
      return this.layoutMode === 'horizontal';
  }
  isSlim() {
      return this.layoutMode === 'slim';
  }
  isStatic() {
      return this.layoutMode === 'static';
  }

}
