import {
    trigger,
    animate,
    transition,
    style,
    query,
    group
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
    // The '* => *' will trigger the animation to change between any two states
    transition('* => *', [
        // The query function has three params.
        // First is the event, so this will apply on entering or when the element is added to the DOM.
        // Second is a list of styles or animations to apply.
        // Third we add a config object with optional set to true, this is to signal
        // angular that the animation may not apply as it may or may not be in the DOM.
        query(
            ':enter',
            [style({ opacity: 0 })],
            { optional: true }
        ),
        query(
            ':leave',
            // here we apply a style and use the animate function to apply the style over 0.3 seconds
            [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
            { optional: true }
        ),
        query(
            ':enter',
            [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
            { optional: true }
        )
    ])
]);

export const routerTransition = trigger('routerTransition', [
    transition('* <=> *', [
        query(':enter, :leave', style({ width: '100%', 'background-color': 'white' })
            , { optional: true }),
        group([
            query(':enter', [
                style({ transform: 'translateX(100%)', 'opacity': .5, 'z-index': 20, 'position': 'fixed' }),
                animate('0.5s ease-in-out', style({ transform: 'translateX(0%)', 'opacity': 1 }))
            ], { optional: true }),
            query(':leave', [
                style({ transform: 'perspective(500px) translateZ(0)', 'opacity': 1 }),
                animate('0.5s ease-in-out', style({ transform: 'perspective(500px) translateZ(-1000px)', 'opacity': 0 }))
            ], { optional: true }),
        ])
    ])
]);
