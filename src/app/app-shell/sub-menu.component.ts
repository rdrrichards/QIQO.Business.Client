import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MenuItem } from 'primeng/api';
import { MenuComponent } from './menu.component';
import { AppShellComponent } from './app-shell.component';

@Component({
  selector: '[qiqo-sub-menu]',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.css'],
  animations: [
    trigger('children', [
        state('hiddenAnimated', style({
            height: '0px'
        })),
        state('visibleAnimated', style({
            height: '*'
        })),
        state('visible', style({
            height: '*',
            'z-index': 100
        })),
        state('hidden', style({
            height: '0px',
            'z-index': '*'
        })),
        transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
        transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class SubMenuComponent {
  @Input() item: MenuItem;
  @Input() root: boolean;
  @Input() visible: boolean;
  _parentActive: boolean;
  _reset: boolean;
  activeIndex: number;

  constructor(public app: AppShellComponent, public appMenu: MenuComponent) { }

  itemClick(event: Event, item: MenuItem, index: number) {
      if (this.root) {
          this.app.menuHoverActive = !this.app.menuHoverActive;
      }
      // avoid processing disabled items
      if (item.disabled) {
          event.preventDefault();
          return true;
      }

      // activate current item and deactivate active sibling if any
      this.activeIndex = (this.activeIndex === index) ? null : index;

      // execute command
      if (item.command) {
          item.command({ originalEvent: event, item });
      }

      // prevent hash change
      if (item.items || (!item.url && !item.routerLink)) {
          setTimeout(() => {
              this.app.layoutMenuScrollerViewChild.moveBar();
          }, 450);
          event.preventDefault();
      }

      // hide menu
      if (!item.items) {
          if (this.app.isHorizontal() || this.app.isSlim()) {
              this.app.resetMenu = true;
          } else {
              this.app.resetMenu = false;
          }

          this.app.overlayMenuActive = false;
          this.app.staticMenuMobileActive = false;
          this.app.menuHoverActive = !this.app.menuHoverActive;
      }
  }

  onMouseEnter(index: number) {
      if (this.root && this.app.menuHoverActive && (this.app.isHorizontal() || this.app.isSlim())
          && !this.app.isMobile() && !this.app.isTablet()) {
          this.activeIndex = index;
      }
  }

  isActive(index: number): boolean {
      return this.activeIndex === index;
  }

  @Input() get reset(): boolean {
      return this._reset;
  }

  set reset(val: boolean) {
      this._reset = val;

      if (this._reset && (this.app.isHorizontal() || this.app.isSlim())) {
          this.activeIndex = null;
      }
  }

  @Input() get parentActive(): boolean {
      return this._parentActive;
  }

  set parentActive(val: boolean) {
      this._parentActive = val;

      if (!this._parentActive) {
          this.activeIndex = null;
      }
  }
}
