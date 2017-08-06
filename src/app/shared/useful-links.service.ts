import { Injectable } from '@angular/core';

@Injectable()
export class UsefulLinksService {
    getUsefulLinks() {
        return LINKS;
    }

}

const LINKS = [
    {
        id: 0,
        name: 'Google',
        description: 'This is a sample link to google.com',
        url: 'http://www.google.com/',
        type: 'information',
        rate: 9.4
    },
    {
        id: 1,
        name: 'Pluralsight',
        description: 'Great tool for learning stuff',
        url: 'http://pluralsight.com/',
        type: 'programming',
        rate: 6.0
    },
    {
        id: 2,
        name: 'Github',
        description: 'You can put your project here so everyone can see your work and contribute.',
        type: 'programming',
        url: 'http://github.com/'
    },
    {
        id: 3,
        name: 'YouTube',
        description: 'Everyone knows youtube...',
        type: 'fun',
        url: 'http://www.youtube.com/'
    },
    {
        id: 4,
        name: 'Reddit',
        description: 'Forum about every topic',
        url: 'http://www.reddit.com/',
        type: 'fun',
        rate: 8
    },
    {
        id: 5,
        name: 'Test',
        description: 'Very long description. Very long description. Very long description. Very long description. Very long description. Very long description. Very long description. Very long description. Very long description. Very long description. ',
        url: 'http://www.nothing.com/',
        type: 'other',
        rate: 1.1
    }    
]