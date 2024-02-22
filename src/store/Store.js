
import mountain1 from "../styles/mountain1.jpg"
import mountain2 from "../styles/mountain2.jpg"
import mountain3 from "../styles/mountain3.jpg"
import mountain4 from "../styles/mountain4.jpg"
import mountain5 from "../styles/mountain5.jpg"
import mountain6 from "../styles/mountain6.jpg"
export const placesStore=[

    // tab 1 -> glacier (one-day, multi-day)
    {
        id:"1",
        //homeMainPic: "https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=720",
        homeMainPic: mountain1,
        name:"Mont Blanc Normalroute",
        name_search:"Mont Blanc",
        organizer:"Alpinschule Garmsich",
        price: 3700,
        duration_days:"5",
        hut_included:true,
        persons:"1",
        season:"winter",
        type:"glacier",
        stars: "4.88",
        carouselPic1: mountain2,
        carouselPic2: mountain3,
        carouselPic3: mountain4,
        carouselPic4: mountain5,
        carouselPic5: mountain6,
        location:"france",
        dates:{
            date_1:{
                start_date_1: "01.06.2024",
                end_date_1: "05.06.2024"
            },
            date_2:{
                start_date_2: "15.06.2024",
                end_date_2: "20.06.2024"
            },
            date_3:{
                start_date_3: "22.06.2024",
                end_date_3: "26.06.2024"
            }
        }
    },

    {
        id:"2",
        //homeMainPic: "https://a0.muscache.com/im/pictures/0b25f6b3-f215-4938-ac81-581eb3929047.jpg?im_w=720",
        homeMainPic: mountain2,
        name:"Mont Blanc Normalroute",
        name_search:"Mont Blanc",
        organizer:"Bergführer.com",
        price: 2199,
        duration_days:"3",
        hut_included:false,
        persons:"1",
        season:"winter",
        type:"glacier",
        stars: "4.84",
        carouselPic1: mountain1,
        carouselPic2: mountain3,
        carouselPic3: mountain4,
        carouselPic4: mountain5,
        carouselPic5: mountain6,
        location:"france"
    },

    {
        id:"3",
        //homeMainPic: "https://a0.muscache.com/im/pictures/miso/Hosting-47721565/original/bb35bfcf-f276-4e00-a0d1-73b319b2a9cd.jpeg?im_w=720",
        homeMainPic: mountain3,
        name:"Dom Normalroute",
        name_search:"Dom",
        organizer:"Zermatters",
        price: 1480,
        duration_days:"2",
        hut_included:false,
        persons:"1-3",
        season:"winter",
        type:"glacier",
        stars: "4.64",
        carouselPic1: mountain1,
        carouselPic2: mountain2,
        carouselPic3: mountain4,
        carouselPic4: mountain5,
        carouselPic5: mountain6,
        location:"switzerland"
    },

    {
        id:"4",
        //homeMainPic: "https://a0.muscache.com/im/pictures/miso/Hosting-5904771/original/ab9a30d4-a6cf-4b3a-8416-cf7314ed5432.jpeg?im_w=720",
        homeMainPic: mountain4,
        name:"Dom Normalroute",
        name_search:"Dom",
        organizer:"Südtirol Alpin",
        price: 1500,
        duration_days:"2",
        hut_included:false,
        persons:"1-3",
        season:"winter",
        type:"glacier",
        stars: "4.94",
        carouselPic1: mountain1,
        carouselPic2: mountain3,
        carouselPic3: mountain4,
        carouselPic4: mountain5,
        carouselPic5: mountain6,
        location:"switzerland"
    },

    {
        id:"5",
        //homeMainPic: "https://a0.muscache.com/im/pictures/4f70b681-a792-4530-8c52-f2a8d262942d.jpg?im_w=720",
        homeMainPic: mountain5,
        name:"Dufourspitze Normalroute",
        name_search:"Dufourspitze",
        organizer:"Firngrat",
        price: 1590,
        duration_days:"2",
        hut_included:false,
        persons:"1-2",
        season:"winter",
        type:"glacier",
        stars: "4.94",
        carouselPic1: mountain1,
        carouselPic2: mountain3,
        carouselPic3: mountain4,
        carouselPic4: mountain5,
        carouselPic5: mountain6,
        location:"switzerland",
        comment:"Awesome tour"
    },

    {
        id:"6",
        //homeMainPic: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46761225/original/11058c0d-fac8-4035-8f16-8b3abe7441cd.jpeg?im_w=720",
        homeMainPic: mountain6,
        name:"Dufourspitze Normalroute",
        name_search:"Dufourspitze",
        organizer:"Zermatters",
        price: 1695,
        duration_days:"2",
        hut_included:false,
        persons:"1-2",
        season:"winter",
        type:"glacier",
        stars: "4.54",
        carouselPic1: mountain1,
        carouselPic2: mountain3,
        carouselPic3: mountain4,
        carouselPic4: mountain5,
        carouselPic5: mountain6,
        location:"switzerland",
        comment:"top of switzerland!"
    },

    {
        id:"7",
        //homeMainPic: "https://a0.muscache.com/im/pictures/ab61d106-3c6e-4f4f-a9d6-3f16cfa3eaeb.jpg?im_w=720",
        homeMainPic: mountain3,
        name:"Haute Route",
        name_search:"Haute Route",
        organizer:"Hindelanger Berführer",
        price: 1080,
        duration_days:"5",
        hut_included:false,
        persons:"4-5",
        season:"winter",
        type:"glacier",
        stars: "4.84",
        carouselPic1: mountain1,
        carouselPic2: mountain3,
        carouselPic3: mountain4,
        carouselPic4: mountain5,
        carouselPic5: mountain6,
        location:"switzerland"

    },

    // tab 2 -> event
    {
        id:"8",
        //homeMainPic: "https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=720",
        homeMainPic: mountain4,
        name:"Stubai Ultratrail",
        name_search:"Stubai Ultratrail",
        organizer:"planB",
        date:"28.06.24 - 29.06.24",
        price: 145,
        duration_days:"1",
        season:"summer",
        type:"event",
        stars: "4.88",
        carouselPic1: mountain1,
        carouselPic2: mountain3,
        carouselPic3: mountain4,
        carouselPic4: mountain5,
        carouselPic5: mountain6,
        location:"austria"
    },

    {
        id:"9",
        //homeMainPic: "https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=720",
        homeMainPic: mountain6,
        name:"Wildstrubel by UTMB",
        name_search:"Wildstrubel by UTMB",
        organizer:"UTMB",
        date:"12.09.24 - 15.09.24",
        price: 130,
        duration_days:"1",
        season:"summer",
        type:"event",
        stars: "4.88",
        carouselPic1: mountain1,
        carouselPic2: mountain3,
        carouselPic3: mountain4,
        carouselPic4: mountain5,
        carouselPic5: mountain6,
        location:"switzerland"
    },

    {
        id:"10",
        //homeMainPic: "https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=720",
        homeMainPic: mountain2,
        name:"Trans Alpin Run (TAR)",
        name_search:"Trans Alpin Run",
        organizer:"planB",
        date:"07.09.24 - 13.09.24",
        price: 1125,
        duration_days:"8",
        season:"summer",
        type:"event",
        stars: "4.88",
        carouselPic1: mountain1,
        carouselPic2: mountain3,
        carouselPic3: mountain4,
        carouselPic4: mountain5,
        carouselPic5: mountain6,
        location:"germany"
    },

    {
        id:"11",
        //homeMainPic: "https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=720",
        homeMainPic: mountain1,
        name:"idk",
        name_search:"idk",
        organizer:"idk",
        date:"idk",
        price: 0,
        duration_days:"0",
        season:"summer",
        type:"other",
        stars: "4.88",
        carouselPic1: mountain1,
        carouselPic2: mountain3,
        carouselPic3: mountain4,
        carouselPic4: mountain5,
        carouselPic5: mountain6,
        location:"switzerland"
    }


]