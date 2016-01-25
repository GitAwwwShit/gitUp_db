
exports.seed = function(knex, Promise) {
  return knex('entry').del()
  .then(function(){
    return knex('child_goal').del()
  }).then(function(){
    return knex('goal').del();
  }).then(function(){
    return knex('activity').del();
  }).then(function(){
    return knex('badge').del();
  }).then(function(){
    return knex('reward').del();
  }).then(function(){
    return knex('child').del();
  }).then(function(){
    return knex('user_login').del();
  }).then(function(){
    return knex('user_type').del();
  }).then(function(){
    return knex.raw('ALTER SEQUENCE "activity_id_seq" RESTART WITH 1;');
  }).then(function(){
    return knex.raw('ALTER SEQUENCE "badge_id_seq" RESTART WITH 1;');
  }).then(function(){
    return knex.raw('ALTER SEQUENCE "child_id_seq" RESTART WITH 1;');
  }).then(function(){
    return knex.raw('ALTER SEQUENCE "entry_id_seq" RESTART WITH 1;');
  }).then(function(){
    return knex.raw('ALTER SEQUENCE "goal_id_seq" RESTART WITH 1;');
  }).then(function(){
    return knex.raw('ALTER SEQUENCE "child_goal_id_seq" RESTART WITH 1;');
  }).then(function(){
    return knex.raw('ALTER SEQUENCE "reward_id_seq" RESTART WITH 1;');
  }).then(function(){
    return knex.raw('ALTER SEQUENCE "user_login_id_seq" RESTART WITH 1;');
  }).then(function(){
    return knex.raw('ALTER SEQUENCE "user_type_id_seq" RESTART WITH 1;');
  }).then(function(){
    return Promise.all([
      knex('user_type').insert({
        type:'user'
      }),
      knex('user_type').insert({
        type:'child'
      })
    ])
  }).then(function(){
    return Promise.all([
      knex('user_login').insert({
        username: 'Elijah Parkhurst',
        auth_id: '118440276042580194245',
        user_type_id: 1
      }),
      knex('user_login').insert({
        username: 'Brian Huber',
        auth_id: '113680426776437192073',
        user_type_id: 1
      })
    ])
  }).then(function(){
    return Promise.all([
      knex('child').insert({
        first_name: 'Timmy',
        gender:'male',
        dob: '8-1-2005',
        user_login_id:1
      }),
      knex('child').insert({
        first_name: 'Suzy',
        gender:'male',
        dob: '3-1-2009',
        user_login_id:1
      }),
      knex('child').insert({
        first_name: 'Megatron',
        gender:'male',
        dob: '2-1-2008',
        user_login_id:2
      })
    ])
  }).then(function(){
    return Promise.all([
      knex('reward').insert({
        type:'Cookies',
        date_time:'1-29-2016'
      }),
      knex('reward').insert({
        type:'ipad',
        date_time:'2-29-2016'
      }),
      knex('reward').insert({
        type:'new car',
        date_time:'3-29-2016'
      })
    ])
  }).then(function(){
    return Promise.all([
      knex('badge').insert({
        title:'7 days of activity',
        image:'http://cdno4.gettingsmart.com/wp-content/uploads/2012/11/Guaranteed-Sign-Featured.jpg'
      }),
      knex('badge').insert({
        title:'one month of activity',
        image:'http://cdno4.gettingsmart.com/wp-content/uploads/2012/11/Guaranteed-Sign-Featured.jpg'
      }),
      knex('badge').insert({
        title:'Athlete',
        image:'http://cdno4.gettingsmart.com/wp-content/uploads/2012/11/Guaranteed-Sign-Featured.jpg'
      })
    ])
  }).then(function(){
    return Promise.all([
      knex('activity').insert({
        activity_name:'Arts and Crafts',
        activity_image:'/img/activities/artsandcrafts.png'
      }),
      knex('activity').insert({
        activity_name:'Basketball',
        activity_image:'/img/activities/basketball.png'
      }),
      knex('activity').insert({
        activity_name:'Basketball (w)',
        activity_image:'/img/activities/basketballw.png'
      }),
      knex('activity').insert({
        activity_name:'Chores',
        activity_image:'/img/activities/chores.png'
      }),
      knex('activity').insert({
        activity_name:'Clean Room',
        activity_image:'/img/activities/cleanroom.png'
      }),
      knex('activity').insert({
        activity_name:'Cross Country Skiing',
        activity_image:'/img/activities/crosscountryskiing.png'
      }),
      knex('activity').insert({
        activity_name:'Football',
        activity_image:'/img/activities/football.png'
      }),
      knex('activity').insert({
        activity_name:'Golfing',
        activity_image:'/img/activities/golfing.png'
      }),
      knex('activity').insert({
        activity_name:'Hiking',
        activity_image:'/img/activities/hiking.png'
      }),
      knex('activity').insert({
        activity_name:'Hockey',
        activity_image:'/img/activities/hockey.png'
      }),
      knex('activity').insert({
        activity_name:'Jump Rope',
        activity_image:'/img/activities/jumprope.png'
      }),
      knex('activity').insert({
        activity_name:'Jumping Jacks',
        activity_image:'/img/activities/jumpingjacks.png'
      }),
      knex('activity').insert({
        activity_name:'Lacrosse',
        activity_image:'/img/activities/lacrosse.png'
      }),
      knex('activity').insert({
        activity_name:'Lift Weights',
        activity_image:'/img/activities/liftweights.png'
      }),
      knex('activity').insert({
        activity_name:'Martial Arts',
        activity_image:'/img/activities/martialarts.png'
      }),
      knex('activity').insert({
        activity_name:'Mathematics',
        activity_image:'/img/activities/mathematics.png'
      }),
      knex('activity').insert({
        activity_name:'Mow the Lawn',
        activity_image:'/img/activities/mowthelawn.png'
      }),
      knex('activity').insert({
        activity_name:'Ping Pong',
        activity_image:'/img/activities/pingpong.png'
      }),
      knex('activity').insert({
        activity_name:'Play with Siblings',
        activity_image:'/img/activities/playwithsiblings.png'
      }),
      knex('activity').insert({
        activity_name:'Playground',
        activity_image:'/img/activities/playground.png'
      }),
      knex('activity').insert({
        activity_name:'Racing (w)',
        activity_image:'/img/activities/racingw.png'
      }),
      knex('activity').insert({
        activity_name:'Reading',
        activity_image:'/img/activities/reading.png'
      }),
      knex('activity').insert({
        activity_name:'Ride a Bike',
        activity_image:'/img/activities/rideabike.png'
      }),
      knex('activity').insert({
        activity_name:'Running',
        activity_image:'/img/activities/running.png'
      }),
      knex('activity').insert({
        activity_name:'Science',
        activity_image:'/img/activities/science.png'
      }),
      knex('activity').insert({
        activity_name:'Set the Table',
        activity_image:'/img/activities/setthetable.png'
      }),
      knex('activity').insert({
        activity_name:'Skateboarding',
        activity_image:'/img/activities/skateboarding.png'
      }),
      knex('activity').insert({
        activity_name:'Skiing',
        activity_image:'/img/activities/skiing.png'
      }),
      knex('activity').insert({
        activity_name:'Swimming',
        activity_image:'/img/activities/swimming.png'
      }),
      knex('activity').insert({
        activity_name:'Vacuum',
        activity_image:'/img/activities/vacuum.png'
      }),
      knex('activity').insert({
        activity_name:'Volleyball',
        activity_image:'/img/activities/volleyball.png'
      }),
      knex('activity').insert({
        activity_name:'Walk the Dog',
        activity_image:'/img/activities/walkthedog.png'
      }),
      knex('activity').insert({
        activity_name:'Walking',
        activity_image:'/img/activities/walking.png'
      }),
      knex('activity').insert({
        activity_name:'Wash Dishes',
        activity_image:'/img/activities/washdishes.png'
      })
    ])
  }).then(function(){
    return Promise.all([
      knex('goal').insert({
        minute_amount:30,
        activity_id:1,
        badge_id:1
      }),
      knex('goal').insert({
        minute_amount:300,
        activity_id:2,
        badge_id:1
      }),
      knex('goal').insert({
        minute_amount:600,
        activity_id:1,
        badge_id:1
      }),
      knex('goal').insert({
        minute_amount:60,
        activity_id:3,
        badge_id:1
      })
    ])
  }).then(function(){
    return Promise.all([
      knex('child_goal').insert({
        child_id:1,
        goal_id:2,
        reward_id:1
      }),
      knex('child_goal').insert({
        child_id:1,
        goal_id:1,
        reward_id:2
      }),
      knex('child_goal').insert({
        child_id:1,
        goal_id:3,
        reward_id:3
      }),
      knex('child_goal').insert({
        child_id:2,
        goal_id:2,
        reward_id:1
      }),
      knex('child_goal').insert({
        child_id:3,
        goal_id:2,
        reward_id:1
      })
    ])
  }).then(function(){
    return Promise.all([
      knex('entry').insert({
        amount:30,
        child_goal_id:1,
      }),
      knex('entry').insert({
        amount:30,
        child_goal_id:1,
      }),
      knex('entry').insert({
        amount:30,
        child_goal_id:2,
      }),
      knex('entry').insert({
        amount:60,
        child_goal_id:2,
      }),
      knex('entry').insert({
        amount:60,
        child_goal_id:3,
      }),
      knex('entry').insert({
        amount:60,
        child_goal_id:4,
      }),
      knex('entry').insert({
        amount:80,
        child_goal_id:5,
      })
    ])
  })
};
