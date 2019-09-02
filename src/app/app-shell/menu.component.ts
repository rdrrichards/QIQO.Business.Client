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
                              label: 'Light Blue', icon: 'pi pi-fw pi-pencil',
                              items: [
                                  {
                                      label: 'Accent', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('lightblue', 'accent')
                                  },
                                  {
                                      label: 'Light', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('lightblue', 'light')
                                  },
                                  {
                                      label: 'Dark', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('lightblue', 'dark')
                                  }
                              ]
                          },
                          {
                              label: 'Indigo', icon: 'pi pi-fw pi-pencil',
                              items: [
                                  {
                                      label: 'Accent', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('indigo', 'accent')
                                  },
                                  {
                                      label: 'Light', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('indigo', 'light')
                                  },
                                  {
                                      label: 'Dark', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('indigo', 'dark')
                                  }
                              ]
                          },
                          {
                              label: 'Pink', icon: 'pi pi-fw pi-pencil',
                              items: [
                                  {
                                      label: 'Accent', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('pink', 'accent')
                                  },
                                  {
                                      label: 'Light', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('pink', 'light')
                                  },
                                  {
                                      label: 'Dark', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('pink', 'dark')
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
                              label: 'Light Green', icon: 'pi pi-fw pi-pencil',
                              items: [
                                  {
                                      label: 'Accent', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('lightgreen', 'accent')
                                  },
                                  {
                                      label: 'Light', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('lightgreen', 'light')
                                  },
                                  {
                                      label: 'Dark', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('lightgreen', 'dark')
                                  }
                              ]
                          },
                          {
                              label: 'Teal', icon: 'pi pi-fw pi-pencil',
                              items: [
                                  {
                                      label: 'Accent', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('teal', 'accent')
                                  },
                                  {
                                      label: 'Light', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('teal', 'light')
                                  },
                                  {
                                      label: 'Dark', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('teal', 'dark')
                                  }
                              ]
                          },
                          {
                              label: 'Cyan', icon: 'pi pi-fw pi-pencil',
                              items: [
                                  {
                                      label: 'Accent', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('cyan', 'accent')
                                  },
                                  {
                                      label: 'Light', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('cyan', 'light')
                                  },
                                  {
                                      label: 'Dark', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('cyan', 'dark')
                                  }
                              ]
                          },
                          {
                              label: 'Lime', icon: 'pi pi-fw pi-pencil',
                              items: [
                                  {
                                      label: 'Accent', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('lime', 'accent')
                                  },
                                  {
                                      label: 'Light', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('lime', 'light')
                                  },
                                  {
                                      label: 'Dark', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('lime', 'dark')
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
                              label: 'Orange', icon: 'pi pi-fw pi-pencil',
                              items: [
                                  {
                                      label: 'Accent', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('orange', 'accent')
                                  },
                                  {
                                      label: 'Light', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('orange', 'light')
                                  },
                                  {
                                      label: 'Dark', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('orange', 'dark')
                                  }
                              ]
                          },
                          {
                              label: 'Deep Orange', icon: 'pi pi-fw pi-pencil',
                              items: [
                                  {
                                      label: 'Accent', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('deeporange', 'accent')
                                  },
                                  {
                                      label: 'Light', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('deeporange', 'light')
                                  },
                                  {
                                      label: 'Dark', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('deeporange', 'dark')
                                  }
                              ]
                          },
                          {
                              label: 'Yellow', icon: 'pi pi-fw pi-pencil',
                              items: [
                                  {
                                      label: 'Accent', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('yellow', 'accent')
                                  },
                                  {
                                      label: 'Light', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('yellow', 'light')
                                  },
                                  {
                                      label: 'Dark', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('yellow', 'dark')
                                  }
                              ]
                          },
                          {
                              label: 'Purple', icon: 'pi pi-fw pi-pencil',
                              items: [
                                  {
                                      label: 'Accent', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('purple', 'accent')
                                  },
                                  {
                                      label: 'Light', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('purple', 'light')
                                  },
                                  {
                                      label: 'Dark', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('purple', 'dark')
                                  }
                              ]
                          },
                          {
                              label: 'Deep Purple', icon: 'pi pi-fw pi-pencil',
                              items: [
                                  {
                                      label: 'Accent', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('deeppurple', 'accent')
                                  },
                                  {
                                      label: 'Light', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('deeppurple', 'light')
                                  },
                                  {
                                      label: 'Dark', icon: 'pi pi-fw pi-pencil',
                                      command: () => this.changeTheme('deeppurple', 'dark')
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
          },
          {
              label: 'Components', icon: 'pi pi-fw pi-star',
              items: [
                  { label: 'Sample Page', icon: 'pi pi-fw pi-th-large', routerLink: ['/sample']  },
                  { label: 'Forms', icon: 'pi pi-fw pi-file', routerLink: ['/forms'] },
                  { label: 'Data', icon: 'pi pi-fw pi-table', routerLink: ['/data'] },
                  { label: 'Panels', icon: 'pi pi-fw pi-list', routerLink: ['/panels'] },
                  { label: 'Overlays', icon: 'pi pi-fw pi-clone', routerLink: ['/overlays'] },
                  { label: 'Menus', icon: 'pi pi-fw pi-plus', routerLink: ['/menus'] },
                  { label: 'Messages', icon: 'pi pi-fw pi-spinner', routerLink: ['/messages'] },
                  { label: 'Charts', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/charts'] },
                  { label: 'File', icon: 'pi pi-fw pi-upload', routerLink: ['/file'] },
                  { label: 'Misc', icon: 'pi pi-fw pi-briefcase', routerLink: ['/misc'] }
              ]
          },
          {
              label: 'Pages', icon: 'pi pi-fw pi-copy',
              items: [
                  { label: 'Empty Page', icon: 'pi pi-fw pi-clone', routerLink: ['/empty'] },
                  { label: 'Landing Page', icon: 'pi pi-fw pi-globe', url: 'assets/pages/landing.html', target: '_blank' },
                  { label: 'Login Page', icon: 'pi pi-fw pi-sign-in', url: 'assets/pages/login.html', target: '_blank' },
                  { label: 'Error Page', icon: 'pi pi-fw pi-exclamation-triangle', url: 'assets/pages/error.html', target: '_blank' },
                  { label: '404 Page', icon: 'pi pi-fw pi-times', url: 'assets/pages/404.html', target: '_blank' },
                  {
                      label: 'Access Denied', icon: 'pi pi-fw pi-ban',
                      url: 'assets/pages/access.html', target: '_blank'
                  }
              ]
          },
          {
              label: 'Hierarchy', icon: 'pi pi-fw pi-sitemap',
              items: [
                  {
                      label: 'Submenu 1', icon: 'pi pi-fw pi-sign-in',
                      items: [
                          {
                              label: 'Submenu 1.1', icon: 'pi pi-fw pi-sign-in',
                              items: [
                                  { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-sign-in' },
                                  { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-sign-in' },
                                  { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-sign-in' },
                              ]
                          },
                          {
                              label: 'Submenu 1.2', icon: 'pi pi-fw pi-sign-in',
                              items: [
                                  { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-sign-in' },
                                  { label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-sign-in' }
                              ]
                          },
                      ]
                  },
                  {
                      label: 'Submenu 2', icon: 'pi pi-fw pi-sign-in',
                      items: [
                          {
                              label: 'Submenu 2.1', icon: 'pi pi-fw pi-sign-in',
                              items: [
                                  { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-sign-in' },
                                  { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-sign-in' },
                                  { label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-sign-in' },
                              ]
                          },
                          {
                              label: 'Submenu 2.2', icon: 'pi pi-fw pi-sign-in',
                              items: [
                                  { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-sign-in' },
                                  { label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-sign-in' }
                              ]
                          },
                      ]
                  }
              ]
          },
          { label: 'Get Started', icon: 'pi pi-fw pi-download',
              items: [
                  {
                      label: 'Documentation', icon: 'pi pi-fw pi-file', routerLink: ['/documentation']
                  },
                  {
                      label: 'Buy Now', icon: 'pi pi-fw pi-money-bill', url: ['https://www.primefaces.org/store']
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
