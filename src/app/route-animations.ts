import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations';

const varTransform = 'scale(.97) translateY(30px)';

export const fader =
  trigger('routeAnimations', [
    transition('* <=> *', [
      // Set a default  style for enter and leave
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
        }),
      ], { optional: true }),
      query(':enter', [
        style({
          opacity: 0,
          transform: varTransform,
        }),
      ], { optional: true }),

      group([
        // Animate the new page in
        query(':leave', [
          animate('200ms ease', style({ opacity: 0, transform: varTransform })),
        ], { optional: true }),
        // Animate the new page in
        query(':enter', [
          animate('400ms 250ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
        ], { optional: true }),
      ])


    ]),
]);


