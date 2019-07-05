import {Observable, of} from "rxjs";
import {IHotel} from './interfaces/hotel.interface'

export const hotels: IHotel[] = [
    {
        img: 'https://pp.userapi.com/c854228/v854228366/8c2a6/1EMI3rDAc3U.jpg',
        address: '111 East 48th Street',
        phone:  18004699269, //+1(800)469-9269
        weather: {
            title: 'InterContinental Hotel',
            icon: 'icon_url',
            water: 20,
            temperature: 30
        },
        social_info:{
            title: 'InterContinental',
            img: 'https://pp.userapi.com/c854228/v854228366/8c29d/0nsMyTNs0FQ.jpg',
            followers: 19485,
            following: 854
        },
        type: 'five'
    },

    {
        img: 'https://pp.userapi.com/c854228/v854228366/8c28b/SkZ9yv5x9Yc.jpg',
        address: '36 Central Park South',
        phone:  18006759269,
        weather: {
            title: 'Park Lane Hotel',
            icon: 'icon_url',
            water: 18,
            temperature: 19
        },
        social_info:{
            title: 'Park Lane',
            img: 'https://pp.userapi.com/c854228/v854228366/8c282/CIOdu0M2MPQ.jpg',
            followers: 15053,
            following: 1005
        },
        type: 'five'
    },

    {
        img: 'https://pp.userapi.com/c854228/v854228366/8c279/kdeNLCnm8u4.jpg',
        address: '1717 Broadway',
        phone:  18004685624,
        weather: {
            title: 'Courtyard by Marriott',
            icon: 'icon_url',
            water: 27,
            temperature: 36
        },
        social_info:{
            title: 'Broadway',
            img: 'https://pp.userapi.com/c854228/v854228366/8c272/1VLQwpcX7LM.jpg',
            followers: 29812,
            following: 1595
        },
        type: 'four'
    },

    {
        img: 'https://pp.userapi.com/c854228/v854228366/8c269/V9eKGRbij3o.jpg',
        address: '228 West 47th Street',
        phone:  18001275623,
        weather: {
            title: 'Hotel Edison Times Square',
            icon: 'icon_url',
            water: 24,
            temperature: 27
        },
        social_info:{
            title: 'Edison Times',
            img: 'https://pp.userapi.com/c854228/v854228366/8c260/_DMWxSpXw8s.jpg',
            followers: 3481,
            following: 934
        },
        type: 'three'
    },
    {
        img: 'https://pp.userapi.com/c854228/v854228366/8c257/q8OArV3Jytg.jpg',
        address: '114 West 40th Street',
        phone:  18001575343,
        weather: {
            title: 'Courtyard New York',
            icon: 'icon_url',
            water: 14,
            temperature: 23
        },
        social_info:{
            title: 'Courtyard',
            img: 'https://pp.userapi.com/c854228/v854228366/8c24e/KlHcRiQJq9o.jpg',
            followers: 5373,
            following: 2591
        },
        type: 'three'
    },

    {
        img: 'https://pp.userapi.com/c854228/v854228366/8c245/ybveCvy4g4w.jpg',
        address: '215 West 94th Street',
        phone:  18008573623,
        weather: {
            title: 'Days Hotel by Wyndham',
            icon: 'icon_url',
            water: 21,
            temperature: 29
        },
        social_info:{
            title: 'Days Hotel',
            img: 'https://pp.userapi.com/c854228/v854228366/8c23c/qYglsUhg4GI.jpg',
            followers: 963,
            following: 451
        },
        type: 'two'
    },

    {
        img: 'https://pp.userapi.com/c854228/v854228366/8c220/k3pFLnsimO8.jpg',
        address: '143 Bowery',
        phone:  18001275126,
        weather: {
            title: 'Bowery Grand Hotel',
            icon: 'icon_url',
            water: 15,
            temperature: 33
        },
        social_info:{
            title: 'Bowery',
            img: 'https://pp.userapi.com/c854228/v854228366/8c229/33A6Xj0Egyc.jpg',
            followers: 1555,
            following: 105
        },
        type: 'one'
    },
];



export const hotels$: Observable<IHotel[]> = of(hotels);
