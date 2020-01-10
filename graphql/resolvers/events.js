const Event = require('../../models/event');
const User = require('../../models/user');
const { transformEvent } = require('./merge');


module.exports =  {
  events: async () => {
    try {
      const events = await Event.find()

      return events.map(event => {
        return transformEvent(event); 
      });
    } catch(err) {
        throw err;
    }
  },

  createEvent: async args => {
    const event = await new Event({
      title: args.eventInput.title,
      description: args.eventInput.description,
      price: +args.eventInput.price,
      date: new Date(args.eventInput.date),
      creator: '5e1782a61a1b6114bbc04b9f'
    });

    let createdEvent;
    try {
      const result = await event .save()
      createdEvent = transformEvent(result); 

      const creator = await User.findById('5e1782a61a1b6114bbc04b9f')
    
      if(!creator) {
        throw new Error('User not found');
      }
      creator.createdEvents.push(event);
      await creator.save();
      return createdEvent; 
    } catch(err) {
        console.log(err);
        throw err;
    };
  }
};

