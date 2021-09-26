import { Component, OnInit, Input, Inject, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  scrolled: boolean = false;
  menuVisible = false;
  themeSwitcherVisible = false;
  themeArray: any[] = [];
  activeTheme: string;
  currentRoute: string;
  @ViewChild('themeList') themeList: ElementRef;

  @ViewChild('titleElement') titleElement: ElementRef;
  isHome: boolean = false;
  activatedRoute: any;
  pageTitle: string;
  typeSpeed: number = 50;

  constructor(@Inject('THEMES') public themes: any[], private router: Router, @Inject('PROJECTS') public projects: any[]) { }

  ngOnInit(): void {
    this.themeArray = this.themes.map(theme => theme.name);
    this.activeTheme = localStorage.getItem('theme') || 'default'
    // scroll background color
    // document.addEventListener(
    //   "scroll", this.checkScrollHeight.bind(this), {
    //     passive: true,
    //   }
    // );

    this.setRoute();

    // causing performance issues on mobile
    this.initBlur();
  }

  checkScrollHeight() {
    if (document.documentElement.scrollTop > 10) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }

  hamburgerClickHandler() {
    this.menuVisible = !this.menuVisible;
    if (this.themeSwitcherVisible) this.themeSwitcherVisible = false;

    if (this.menuVisible) {
      document.getElementsByTagName('body')[0].classList.add('blur');
    } else {
      document.getElementsByTagName('body')[0].classList.remove('blur');
    }
  }

  tsClickHandler() {
    this.themeSwitcherVisible = !this.themeSwitcherVisible;
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    if (this.themeSwitcherVisible) {
      const list = this.themeList.nativeElement
      const currentItem = list.querySelector('.theme-switcher__btn.active')
      console.log(currentItem.parentElement);
      const box = currentItem.parentElement.getBoundingClientRect();

      console.log((list.scrollLeft + box.left + box.width/2) - window.innerWidth)
      // console.log(box.left)
      list.scroll({
        left: (list.scrollLeft + box.left + box.width/2) - window.innerWidth/2,
        behavior: 'smooth'
      })

    }

    // if (this.themeSwitcherVisible) {
    //   document.getElementsByTagName('body')[0].classList.add('blur');
    // } else {
    //   document.getElementsByTagName('body')[0].classList.remove('blur');
    // }
  }

  themeClickHandler(theme: string) {
    const docEl = document.documentElement;
    docEl.classList.forEach(className => {
      if (this.themeArray.includes(className))  docEl.classList.remove(className);
    })
    docEl.classList.add(theme);
    localStorage.setItem("theme", theme)
    this.activeTheme = theme;
  }





  setRoute() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {

        // HOME
        if (event.url === "/") {
          this.isHome = true;
          this.pageTitle = '';
          this.currentRoute = 'home';
          return;
        }

        this.isHome = false;
        // SINGLE PROJECT
        const regex = /\/projects\/[1-9][0-9]*/;
        const match = event.url.match(regex)
        // console.log(match)
        if (match) {
          const match: any = event.url.match(/[1-9][0-9]*/)
          const id = (match != null) ? event.url[match.index] : null;
          const project = this.projects.find(p => p.id == id);
          this.updatePageTitle((project) ? project.name : 'Project')
          this.currentRoute = 'projects';
          return;
        }

        // OTHER
        const route: string = event.url.split('/')[1];
        this.updatePageTitle(route);
        this.currentRoute = route;
      }
    })
  }


  updatePageTitle(newTitle: string) {
    // const oldTitle = this.pageTitle;
    if (!this.pageTitle) {
      this.pageTitle = newTitle;
      return;
    }

    const clipShow = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    const clipHide = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
    const animationTime = 150;
    const animateTitle = (keyframeArray: any[]) => {
      this.titleElement.nativeElement.animate(keyframeArray, {
        duration: animationTime,
      })
    }

    // hide title
    animateTitle([
      {
        clipPath: clipShow
      },
      {
        clipPath: clipHide
      }
    ])

    // show title (after hide)
    setTimeout(() => {
      this.pageTitle = newTitle;
      animateTitle([
        {
          clipPath: clipHide
        },
        {
          clipPath: clipShow
        }
      ])
    }, animationTime);

  }


  initBlur() {
    const container = document.getElementById('blur-container')
    const elCount = 5;

    const randomIntFromInterval = (min: number, max: number) => { // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min)
    }

    for (let i = 0; i < elCount; i++) {
      const circle = document.createElement('div')
      circle.classList.add('blur-circle')
      const colors: any[] = ['var(--color-primary)', 'var(--color-secondary)', 'var(--color-ternary)', 'var(--color-primary-offset)'];
      // const test = colors.length % i;
      // const test2 = i % colors.length
      // console.log(i, test)
      const color = colors[i % colors.length];
      const dim = randomIntFromInterval(190, 250).toString() + 'px';

      // random values
      circle.style.top = randomIntFromInterval(10, 90).toString() + '%';
      circle.style.left = randomIntFromInterval(10, 90).toString() + '%';
      circle.style.width = dim
      circle.style.height = dim
      circle.style.background = color;

      // not using, too heavy on cpu
      const anitmateCircle = () => {
        const oldTop = window.getComputedStyle(circle).top,
          oldLeft = window.getComputedStyle(circle).left,
          newTop = randomIntFromInterval(10, 90).toString() + '%',
          newLeft = randomIntFromInterval(10, 90).toString() + '%',
          animateTime = randomIntFromInterval(20000, 45000);

        circle.animate([
          {top: oldTop, left: oldLeft},
          {top: newTop, left: newLeft}
        ], {
          duration: animateTime,
          easing: 'ease'
        })

        setTimeout(() => {
          anitmateCircle();
        }, animateTime);
      }
      // anitmateCircle();

      container?.insertAdjacentElement('beforeend', circle)
    }
  }

}
