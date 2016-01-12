
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
        username: 'Eli',
        auth_id: '1a2b3c4d',
        user_type_id: 1
      }),
      knex('user_login').insert({
        username: 'Brian',
        auth_id: '9a8b7c6d',
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
        activity_name:'play'
      }),
      knex('activity').insert({
        activity_name:'swimming'
      }),
      knex('activity').insert({
        activity_name:'soccer'
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
