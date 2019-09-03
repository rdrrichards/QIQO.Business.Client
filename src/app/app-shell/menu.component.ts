import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { AppShellComponent } from './app-shell.component';

@Component({
  selector: 'qiqo-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewInit {
  @Input() reset: boolean;
  modelGrouped: any[];
  modelUngrouped: any[];

  constructor(public app: AppShellComponent) { }

  ngOnInit() {
      this.modelGrouped = [
          { label: 'Home Page', icon: 'pi pi-fw pi-home',
              items: [
                  {label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/']}
              ]
          },
          { label: 'Customization', icon: 'pi pi-fw pi-cog',
              items: [
                  {
                      label: 'Menu Layouts', icon: 'pi pi-fw pi-th-large', badge: 2,
                      items: [
                          { label: 'Static', icon: 'pi pi-fw pi-bars', command: () => this.app.layoutMode = 'static' },
                          { label: 'Overlay', icon: 'pi pi-fw pi-bars', command: () => this.app.layoutMode = 'overlay' },
                          { label: 'Slim', icon: 'pi pi-fw pi-bars', command: () => this.app.layoutMode = 'slim' },
                          { label: 'Horizontal', icon: 'pi pi-fw pi-bars', command: () => this.app.layoutMode = 'horizontal' },
                          { label: 'Grouped Menu', icon: 'pi pi-fw pi-bars', command: () => this.app.grouped = true },
                          { label: 'Ungrouped Menu', icon: 'pi pi-fw pi-bars', command: () => this.app.grouped = false }
                      ]
                  },
                  {
                      label: 'Menu Colors', icon: 'pi pi-fw pi-list', badge: 2,
                      items: [
                          { label: 'Light', icon: 'pi pi-fw pi-circle-off', command: () => this.app.darkMenu = false },
                          { label: 'Dark', icon: 'pi pi-fw pi-circle-on', command: () => this.app.darkMenu = true }
                      ]
                  },
                  {label: 'User Profile', icon: 'pi pi-fw pi-user', badge: 2,
                      items: [
                          {label: 'Popup Profile', icon: 'pi pi-fw pi-user',  command: () => this.app.profileMode = 'popup'},
                          {label: 'Inline Profile', icon: 'pi pi-fw pi-user',  command: () => this.app.profileMode = 'inline'}
                      ]
                  },
                  {
                      label: 'Themes', icon: 'pi pi-fw pi-pencil', badge: 17,
                      items: [
                          {
                              label: 'Blue', icon: 'pi pi-fw pi-pencil',
                              items: [
                                  {
                                      label: 'Accent', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('blue', 'accent')
                                  },
                                  {
                                      label: 'Light', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('blue', 'light')
                                  },
                                  {
                                      label: 'Dark', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('blue', 'dark')
                                  }
                              ]
                          },
                          {
                              label: 'Blue Grey', icon: 'pi pi-fw pi-pencil',
                              items: [
                                  {
                                      label: 'Accent', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('bluegrey', 'accent')
                                  },
                                  {
                                      label: 'Light', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('bluegrey', 'light')
                                  },
                                  {
                                      label: 'Dark', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('bluegrey', 'dark')
                                  }
                              ]
                          },
                          {
                              label: 'Green', icon: 'pi pi-fw pi-pencil',
                              items: [
                                  {
                                      label: 'Accent', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('green', 'accent')
                                  },
                                  {
                                      label: 'Light', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('green', 'light')
                                  },
                                  {
                                      label: 'Dark', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('green', 'dark')
                                  }
                              ]
                          },
                          {
                              label: 'Amber', icon: 'pi pi-fw pi-pencil',
                              items: [
                                  {
                                      label: 'Accent', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('amber', 'accent')
                                  },
                                  {
                                      label: 'Light', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('amber', 'light')
                                  },
                                  {
                                      label: 'Dark', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('amber', 'dark')
                                  }
                              ]
                          },
                          {
                              label: 'Brown', icon: 'pi pi-fw pi-pencil',
                              items: [
                                  {
                                      label: 'Accent', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('brown', 'accent')
                                  },
                                  {
                                      label: 'Light', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('brown', 'light')
                                  },
                                  {
                                      label: 'Dark', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('brown', 'dark')
                                  }
                              ]
                          }
                      ]
                  }
              ]
          }
      ];

      this.modelUngrouped = [
          {
              label: 'Main Menu',
              icon: 'pi pi-fw pi-home',
              items: this.modelGrouped
          }
      ];
  }
  ngAfterViewInit() {
      setTimeout(() => { this.app.layoutMenuScrollerViewChild.moveBar(); }, 100);
  }
  changeTheme(theme: string = 'blue', scheme: string = 'dark') {
      const layoutLink: HTMLLinkElement = document.getElementById('layout-css') as HTMLLinkElement;
      layoutLink.href = 'assets/layout/css/layout-' + theme + '.css';

      const themeLink: HTMLLinkElement = document.getElementById('theme-css') as HTMLLinkElement;
      themeLink.href = 'assets/theme/' + theme + '/theme-' + scheme + '.css';

      const topbarLogo: HTMLImageElement = document.getElementById('layout-topbar-logo') as HTMLImageElement;

      const menuLogo: HTMLImageElement = document.getElementById('layout-menu-logo') as HTMLImageElement;

      if (theme === 'yellow' || theme === 'lime') {
          topbarLogo.src = 'assets/layout/images/logo-black.png';
          menuLogo.src = 'assets/layout/images/logo-black.png';
      } else {
          topbarLogo.src = 'assets/layout/images/logo-white.png';
          menuLogo.src = 'assets/layout/images/logo-white.png';
      }

      if (scheme === 'dark') {
          this.app.darkMenu = true;
      } else if (scheme === 'light') {
          this.app.darkMenu = false;
      }
  }
}
