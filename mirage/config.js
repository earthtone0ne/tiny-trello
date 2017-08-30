// import defaultBoard from '../helpers/default-board';

export default function() {

  this.namespace = '/api';

  this.get('/lists', function(){
    return {
      data: [{
        type: 'lists',
        id: '101',
        attributes: {
          title: 'To Start',
          // board:  defaultBoard.compute(),
          // tasks: []
        }
      }]
    }
  });

  this.get('/tasks', function(){
    return {
      data: [{
        type: 'tasks',
        id: '1001',
        attributes: {
          title: 'Think of a task',
          list:  101,
          isDeleted: false,
          description: 'This is a task to come up with tasks. \n\nVery important.'
        }
      }]
    }
  })
}
