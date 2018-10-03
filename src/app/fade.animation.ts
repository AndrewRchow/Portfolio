import { trigger, animate, transition, style, query } from '@angular/animations';

export const fadeAnimation =
    trigger('fadeAnimation', [
        transition( '* => *', [
            query(':enter', 
                [
                    style({ opacity: 0 })
                ], 
                { optional: true }
            ),
            // query('body', 
            //     [
            //         style({ filter: 'blur(0px)' }),
            //         animate('0.25s ease-in-out', style({ filter: 'blur(5px)' }))
            //     ], 
            //     { optional: true }
            // ),
            query(':leave', 
                [
                    style({ opacity: 1 }),
                    animate('0.25s ease-in-out', style({ opacity: 0 }))
                ], 
                { optional: true }
            ),
            query(':enter', 
                [
                    style({ opacity: 0 }),
                    animate('0.25s ease-in-out', style({ opacity: 1 }))
                ], 
                { optional: true }
            )

        ])

    ]);



    // trigger('fadeAnimation', [
    //     transition( '* => *', [
    //         query(':enter, :leave', 
    //             [
    //                 style({ position: 'fixed', width:'65%',right:'17.5%'})
    //             ], 
    //             { optional: true }
    //         ),
    //         query(':enter', 
    //             [
    //                 style({ opacity: 0 })
    //             ], 
    //             { optional: true }
    //         ),
    //         query(':leave', 
    //             [
    //                 style({ opacity: 1 }),
    //                 animate('1s', style({ opacity: 0 }))
    //             ], 
    //             { optional: true }
    //         ),
    //         query(':enter', 
    //             [
    //                 style({ opacity: 0 }),
    //                 animate('1s', style({ opacity: 1 }))
    //             ], 
    //             { optional: true }
    //         )
    //     ])
    // ]);



    // trigger('routeAnimation', [
    //     transition('*=>*', [
    //       query(':enter, :leave', style({ position: 'fixed', width:'100%', opacity: 0 })
    //       ,{ optional: true }),
    //         query(':leave', [
    //           style({opacity:1}),
    //           animate('1s'), style({opacity:0})]
    //           ,{ optional: true }
    //         ),
    //         query(':enter', [
    //           style({opacity:0}),
    //           animate('1s'), style({opacity:1 })]
    //           ,{ optional: true }
    //         ),
  
    //     ])
    //   ])




    // trigger('routeAnimation', [
//   transition('1 => 2', [
//     style({ height: '!' }),
//     query(':enter, :leave', style({ position: 'fixed', opacity: 1 })),
//     group([ 
//       query(':enter', [
//         style({ opacity:0 }),
//         animate('1000ms ease-in-out', style({ opacity:1 }))
//       ]),
//       query(':leave', [
//         style({ opacity:1 }),
//         animate('1000ms ease-in-out', style({ opacity:0 }))]),
//     ])
//   ]),
//   transition('2 => 1', [
//       style({ height: '!' }),
//       query(':enter', style({ transform: 'translateX(-100%)' })),
//       query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
//       // animate the leave page away
//       group([
//           query(':leave', [
//               animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(100%)' })),
//           ]),
//           // and now reveal the enter
//           query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
//       ])
//   ])
// ])
