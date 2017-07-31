const mongoose = require('mongoose');
require('dotenv').config();
// mongoose.connect('mongodb://localhost/bucket-by-day');
mongoose.connect(process.env.MONGODB_URI); 

const User = require('../models/user');
const BucketList = require('../models/bucketList');
const Activities = require('../models/activityList');

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

const cydActivities1 = new Activities (
    {
        name: 'Snacks',
        description: 'No one should start their night on an empty stomach. No bueno.',
        location: '683 Boulevard NE, Atlanta, GA 30308',
        duration: '30 min',
        link: 'http://popeyes.com/',
        price: 6
    }
)

const cydActivities2 = new Activities (
    {
        name: 'Libations',
        description: 'Cause you gonna get thirsty',
        location: '1156 Euclid Ave NE, Atlanta, GA 30307',
        duration: '2 hrs',
        link: 'http://www.theporterbeerbar.com/',
        price: 50
    }
)

const cydActivities3 = new Activities (
    {
        name: 'Boobies',
        description: 'Why not?',
        location: '241 Forsyth St SW, Atlanta, GA 30303',
        duration: '6 hrs',
        link: 'http://www.magiccity.com/',
        price: 600
    }
)

const cydBucketList1 = new BucketList (
    {
        name: 'Debauchary',
        description: 'When you start out real chill and classy-like but end it like G.',
        theme: 'Wavy Nights',
        totalCost: 0,
        activities: [cydActivities1, cydActivities2, cydActivities3]
    }
)
const cydActivities4 = new Activities (
   {
       name: 'Fur Bus',
       description: 'Cause you should not drink and drive, kids.',
       location: '1199 Atlanta Industrial Dr, Marietta, GA 30066',
       duration: '4+ hrs',
       link: 'http://www.furbus.com/',
       price: 500
   }
)

const cydActivities5 = new Activities (
   {
       name: 'The Cheetah',
       description: 'Bc the chicken wings are hittin\' and so are the girls',
       location: '887 Spring St NW, Atlanta, GA 30308',
       duration: '4+ hrs',
       link: 'https://www.thecheetah.com/',
       price: 1000
   }
)

const cydBucketList2 = new BucketList (
    {
        name: 'Bachelorette Party',
        description: 'Last night to live it up',
        theme: 'Wavy Nights',
        totalCost: 1500,
        activities: [cydActivities4, cydActivities5]
    }
)

const cydActivities6 = new Activities (
   {
       name: 'Illegal Food',
       description: 'Because its criminal',
       location: '1044 Greenwood Ave NE, Atlanta, GA 30306',
       duration: '2 hrs',
       link: 'http://www.illegalfoodatlanta.com/',
       price: 20
   }
)

const cydActivities7 = new Activities (
   {
       name: 'Plaza Theatre',
       description: 'Catch a flick',
       location: '1049 Ponce De Leon Ave NE, Atlanta, GA 30306',
       duration: '2 hrs',
       link: 'http://plazaatlanta.com/',
       price: 20
   }
)

const cydActivities8 = new Activities (
   {
       name: 'Blind Willies',
       description: 'Because everyone should go here before they die.',
       location: '828 North Highland Avenue Northeast, Atlanta, GA 30306',
       duration: '3 hrs',
       link: 'http://www.blindwilliesblues.com/',
       price: 50
   }
)

const cydBucketList3 = new BucketList (
    {
        name: 'Date Night',
        description: 'A night out on the town with bae.',
        theme: 'Romance',
        totalCost: 100,
        activities: [cydActivities6, cydActivities7, cydActivities8]
    }
)

const cydUser = new User (
    {
        firstName: 'Maude',
        lastName: 'Rupert',
        userName: 'MaudeR',
        email: 'maude@yahoo.com',
        img: 'http://www.advanced.style/media/IMG_0566_2-682x1024.jpg',
        bucketLists: [cydBucketList1, cydBucketList2, cydBucketList3]
    }
)

const jeffreyActivities1 = new Activities (
    {
        name: 'Opera Night Club',
        description: 'Go see the the current DJ',
        location: '1150 Crescent Ave NE, Atlanta, GA 30309',
        duration: '2 hr',
        link: 'http://operaatlanta.com/',
        price: 50,
    }
)

const jeffreyActivities2 = new Activities (
    {
        name: 'Georgia Beer Garden',
        description: 'Go grab some beers after the show for night cap',
        location: '420 Edgewood Avenue, Atlanta, GA 30312',
        duration: '2 hr',
        link: 'http://www.georgiabeergarden.com',
        price: 20,
    }
)

const jeffreyActivities3 = new Activities (
    {
        name: 'Waffle House',
        description: "Go get some some food after hanging with friends at the Georgia Beer Garden",
        location: '66 5th St NW, Atlanta, GA 30308',
        duration: '45 min',
        link: 'http://www.wafflehouse.com',
        price: 20,
    }
)

const jeffreyBucketList1 = new BucketList (
    {
        name: 'Night Out',
        description: 'This is a night for those looking to experience the Atlanta night life.',
        theme: 'Wavy Nights',
        totalCost: 90,
        activities: [jeffreyActivities1, jeffreyActivities2, jeffreyActivities3]
    }
)
const jeffreyActivities4 = new Activities (
    {
        name: 'Opera Night Club',
        description: 'Go see the the current DJ',
        location: '1150 Crescent Ave NE, Atlanta, GA 30309',
        duration: '2 hr',
        link: 'http://operaatlanta.com/',
        price: 50,
    }
)

const jeffreyActivities5 = new Activities (
    {
        name: 'Georgia Beer Garden',
        description: 'Go grab some beers after the show for night cap',
        location: '420 Edgewood Avenue, Atlanta, GA 30312',
        duration: '2 hr',
        link: 'http://www.georgiabeergarden.com',
        price: 20,
    }
)

const jeffreyActivities6 = new Activities (
    {
        name: 'Waffle House',
        description: "Go get some some food after hanging with friends at the Georgia Beer Garden",
        location: '66 5th St NW, Atlanta, GA 30308',
        duration: '45 min',
        link: 'http://www.wafflehouse.com',
        price: 20,
    }
)

const jeffreyBucketList2 = new BucketList (
    {
        name: 'Night Life',
        description: 'This is a night for those looking to experience the Atlanta night life.',
        theme: 'Wavy Nights',
        totalCost: 90,
        activities: [jeffreyActivities4, jeffreyActivities5, jeffreyActivities6]
    }
)

const jeffreyUser = new User (
    {
        firstName: 'Jeffrey',
        lastName: 'Dawson',
        userName: 'Jdawson',
        email: 'Jdawg@yahoo.com',
        img: 'https://static.pexels.com/photos/157966/person-young-man-beard-emotions-157966.jpeg',
        bucketLists:[jeffreyBucketList1, jeffreyBucketList2]
    }
)

const murphyActivities1 = new Activities (
    {
        name: 'Biking on the Belt',
        description: 'Rent a bike for a few hours and ride it on the beltline.',
        location: '123 MLK Drive, Atlanta, GA 30303',
        duration: '1.5 hr',
        link: 'https://beltline.org/',
        price: 10
    }
)

const murphyActivities2 = new Activities (
    {
        name: 'Hiking',
        description: 'Hike up Stone Mountain.',
        location: '1000 Robert E. Lee Blvd Stone Mountain, GA 30083',
        duration: '2 hr',
        link: 'http://www.stonemountainpark.com/',
        price: 20
    }
)

const murphyBucketList1 = new BucketList (
    {
        name: 'Outdoors',
        description: 'Looking for some fresh air? Here\'s a list of outdoor activities.',
        theme: '',
        totalCost: 30,
        activities: [murphyActivities1, murphyActivities2]
    }
)

const murphyActivities3 = new Activities (
    {
        name: 'Biking on the Belt',
        description: 'Rent a bike for a few hours and ride it on the beltline.',
        location: '123 MLK Drive, Atlanta, GA 30303',
        duration: '1.5 hr',
        link: 'https://beltline.org/',
        price: 10
    }
)

const murphyActivities4 = new Activities (
    {
        name: 'Hiking',
        description: 'Hike up Stone Mountain.',
        location: '1000 Robert E. Lee Blvd Stone Mountain, GA 30083',
        duration: '2 hr',
        link: 'http://www.stonemountainpark.com/',
        price: 20
    }
)

const murphyBucketList2 = new BucketList (
    {
        name: "Pandora's Box",
        description: "Dare to mix things up and jump into the unknown? Here's a list of random things to do for a random day.",
        theme: '',
        totalCost: 30,
        activities: [murphyActivities3, murphyActivities4]
    }
)

const murphyUser = new User (
    {
        firstName: 'Murphy',
        lastName: 'Jackson',
        userName: 'MJ300',
        email: 'mj3000@hotmail.com',
        img: 'https://images.pexels.com/photos/25758/pexels-photo.jpg?w=1260&h=750&auto=compress&cs=tinysrgb',
        bucketLists: [murphyBucketList1, murphyBucketList2]
    }
)

cydUser.save((err) => {
    if (err) console.log(err);
    console.log('Cyd was created');
});

jeffreyUser.save((err) => {
    if (err) console.log(err);
    console.log('Jeffrey was created');
});

murphyUser.save((err) => {
    if (err) console.log(err);
    console.log('Murphy was created');
});

mongoose.connection.close();
