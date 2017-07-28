const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bucket-by-day');

const User = require('./schema/user.js');
const BucketList = require('./schema/bucketList.js');
const Activities = require('./schema/activities.js');

mongoose.Promise = global.Promise;

User.remove({}, (err) => {
    console.log(err);
});
BucketList.remove({}, (err) => {
    console.log(err);
});
Activities.remove({}, (err) => {
    console.log(err);
});

const cyd = new User ({
    firstName: 'Cyd',
    lastName: 'Segui-Barreto',
    userName: 'CydVicious',
    email: 'cyd@yahoo.com',
    img: '',
    bucketLists: [{
        name: 'Debauchary',
        description: 'When you start out real chill and classy-like but end it like G.',
        theme: 'Wavy Nights',
        totalCost: 0,
        activities: [{
                name: 'Snacks',
                description: 'No one should start their night on an empty stomach. No bueno.',
                location: '683 Boulevard NE, Atlanta, GA 30308',
                duration: '30 min',
                link: 'http://popeyes.com/',
                price: 6
            },
            {
                name: 'Libations',
                description: 'Cause you gonna get thirsty',
                location: '1156 Euclid Ave NE, Atlanta, GA 30307',
                duration: '2 hrs',
                link: 'http://www.theporterbeerbar.com/',
                price: 50
            },
            {
                name: 'Boobies',
                description: 'Why not?',
                location: '241 Forsyth St SW, Atlanta, GA 30303',
                duration: '6 hrs',
                link: 'http://www.magiccity.com/',
                price: 600
            }
        ]
    }]
});

const hunter = new User ({
    firstName: 'Hunter',
    lastName: 'McAfee',
    userName: 'Sono Ryoushi',
    email: 'huntmac@yahoo.com',
    img: '',
    bucketLists: [{
            name: 'Opera Night Club',
            description: 'Go see the current DJ',
            location: '1218 Peachtree Street',
            duration: '2 hr',
            link: 'http://www.operaATL.com',
            price: 50,
        },
        {
            name: 'Georgia Beer Gardn',
            description: 'Go grab some beers after the show for night cap',
            location: '1932 Edgewood Street',
            duration: '2 hr',
            link: 'http://www.georgiabeergarden.com',
            price: 20,
        },
        {
            name: 'Waffle House',
            description: "Grab some food cause you are drunk",
            location: '1218 Peachtree Street',
            duration: '45 min',
            link: 'http://www.wafflehouse.com',
            price: 20,
        }
    ]
});

const richard = new User ({
    firstName: 'Richard',
    lastName: 'Kim',
    userName: 'RichKing25',
    email: 'richardk@hotmail.com',
    img: '',
    bucketLists: [{
        name: 'Outdoors',
        description: 'Looking for some fresh air? Here\'s a list of things to do outside.',
        theme: '',
        totalCost: 30,
        activities: [{
                name: 'Biking on the Belt',
                description: 'Rent a bike for a few hours and ride it on the beltline.',
                location: '123 MLK Drive, Atlanta, GA 30303',
                duration: '1.5 hr',
                link: 'https://beltline.org/',
                price: 10
            },
            {
                name: 'Hiking',
                description: 'Hike up Stone Mountain.',
                location: '1000 Robert E. Lee Blvd Stone Mountain, GA 30083',
                duration: '2 hr',
                link: 'http://www.stonemountainpark.com/',
                price: 20
        }]
    }]
});

cyd.save((err) => {
    if (err) console.log(err);
    console.log('Cyd was created');
});

hunter.save((err) => {
    if (err) console.log(err);
    console.log('Hunter was created');
});

richard.save((err) => {
    if (err) console.log(err);
    console.log('Richard was created');
});

mongoose.connection.close();
