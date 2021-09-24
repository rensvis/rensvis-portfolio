import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {
  slides: null | HTMLCollection = null;
  slideContainer: null | HTMLElement = null;
  arrowLeft: null | HTMLElement = null;
  arrowRight: null | HTMLElement = null;
  dots: null | [HTMLElement] = null;
  slideInterval: ReturnType<typeof setInterval>;
  isPaused: boolean = false;
  currentIndex: number = 1;
  intervalTime: number = 10; // seconds

  constructor() { }

  @ViewChild('carousel') carousel: ElementRef;


  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // this.circular = this.carousel.querySelector(".circular"); // slide timer indicator
    this.slideContainer = this.carousel.nativeElement.querySelector(".carousel__slide-container");
    this.slides = this.slideContainer!.children;
    this.arrowLeft = this.carousel.nativeElement.querySelector(".carousel__arrow--left");
    this.arrowRight = this.carousel.nativeElement.querySelector(".carousel__arrow--right");

    this.insertDots()
    this.events();
  }

  events() {
    this.resetToggleTimer();
    this.arrowLeft!.onclick = () => this.toggleSlide(-1);
    this.arrowRight!.onclick = () => this.toggleSlide(1);

    this.dots!.forEach((dot: HTMLElement) => {
      dot.addEventListener("click", () => {
        this.clickDot(parseInt(dot.dataset.number!));
      });
    });

    // pause on hover
    this.slideContainer!.onmouseover = () => this.isPaused = true;
    this.slideContainer!.onmouseleave = () => this.isPaused = false;

    let ticking = false;
    this.slideContainer!.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            this.calcCurrentSlide();
            ticking = false;
          });
          ticking = true;
        }
      }, {
        passive: true,
      }
    );
  }

  toggleSlide(n: number) {
    this.showSlides((this.currentIndex += n));
  }

  // dot control
  clickDot(n: number) {
    this.showSlides((this.currentIndex = n));
  }

  showSlides(n: number) {
    if (!this.slides || !this.slideContainer) return;

    this.resetToggleTimer();
    // check if n moved past range
    if (n > this.slides.length) {
      this.currentIndex = 1;
    }
    if (n < 1) {
      this.currentIndex = this.slides.length;
    }

    // calculate scrolldistance
    const scrollDistance = (this.currentIndex - 1) * this.getSlideWidth()!;

    this.slideContainer.scroll({
      top: 0,
      left: scrollDistance,
      behavior: "smooth",
    });
    // this.setCurrentSlideClass()
  } // End showSlides

  getSlideWidth() {
    if (!this.slides || !this.slideContainer) return;
    const firstSlide: HTMLElement = this.slides[0] as HTMLElement,
      elStyle: CSSStyleDeclaration = window.getComputedStyle(firstSlide),
      margin: number = parseFloat(elStyle.marginLeft) + parseFloat(elStyle.marginRight),
      slideWidth: number = firstSlide.offsetWidth + margin
    return slideWidth
  }

  toggleDot() {
    if (!this.dots) return;
    this.dots.forEach((dot) => {
      dot.classList.remove("current");
    });
    const dot: HTMLElement = this.carousel.nativeElement.querySelector(
      `.carousel__dot-container[data-number="${this.currentIndex}"]`
    );
    dot.classList.add("current");
  }

  calcCurrentSlide() {
    if (!this.slides || !this.slideContainer) return;
    // get diff between centerX of slide and centerX of container, devide by single slide width and round to positive int, then add 1
    const offsetWidth: number = this.getSlideWidth()!,
      firstSlide:HTMLElement = this.slides[0] as HTMLElement,
      firstSlideBox: DOMRect = firstSlide.getBoundingClientRect(),
      slideContainerWidth: number = this.slideContainer.offsetWidth,
      slideContainerCenterX: number = slideContainerWidth / 2,
      firstSlideCenterX = (firstSlideBox.left + (firstSlideBox.width / 2)),
      diff: number = slideContainerCenterX - firstSlideCenterX,
      index: number = Math.round(Math.abs(diff) / offsetWidth) + 1;
    // console.log(index, 'index')


    if (index !== this.currentIndex) this.resetToggleTimer()
    this.currentIndex = index
    this.toggleDot()
    this.setCurrentSlideClass()
  }

  setCurrentSlideClass() {
    if (!this.slides) return;
    Array.from(this.slides).forEach(slide => {
      slide.classList.remove('current')
    })
    this.slides[this.currentIndex - 1].classList.add('current')
  }

  resetToggleTimer() {
    clearInterval(this.slideInterval);

    // percent
    let percent:number = 0 // progress of current slide time
    const fps:number = 24
    const chunk:number = (1 / fps) / (this.intervalTime) * 100

    // slide toggle
    let incPassed: number = 0;
    let incTotal: number = this.intervalTime * 1000 / (1000/fps)

    // interval for percent update
    this.slideInterval = setInterval(() => {
      if (!this.isPaused) {
        // update percent
        percent = percent + chunk
        this.carousel.nativeElement.style.setProperty('--percent', Math.round(percent) + '%')

        // update slide
        incPassed += 1;
        if (incPassed >= incTotal) this.toggleSlide(1);
      }
    }, 1000 / fps);
  }

  insertDots() {
    let dots: HTMLElement = document.createElement('div')
    dots.classList.add('carousel__dots')
    for (let i = 0; i < this.slides!.length; i++) {
      let classCurrrent = (i === 0) ? 'current' : '';
      dots.insertAdjacentHTML('beforeend', `
        <div class="carousel__dot-container ${classCurrrent}" data-number="${i + 1}">
          <div class="carousel__dot"></div>
        </div>
      `)
    }
    this.carousel.nativeElement.insertAdjacentElement('beforeend', dots)
    this.dots = this.carousel.nativeElement.querySelectorAll(".carousel__dot-container");
  }

}
