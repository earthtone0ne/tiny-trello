export default function() {

  this.namespace = '/api';

  this.get('/task-lists', function() {
    return {
      data: [{
        type: 'task-lists',
        id: 'L01',
        attributes: {
          title: 'To Start',
          board:  'AllTheThings'
        },
        relationships: {
          tasks: {
            links: { related: "/api/task-items"}
          }
        }
      }] //,
      // included: [{
      //   type: 'task-items',
      //   id: 'T011',
      //   attributes: { title: 'A fine task'}
      // }]
    }
  });

  this.get('/task-items', function() {
    return {
      data: [{
        type: 'task-items',
        id: 'T001',
        attributes: {
          title: 'Think of a task',
          // isDeleted: false,
          description: 'This is a task to come up with tasks. \n\nVery important.'
        }
      }],
      relationships: {
        taskList: {
          links: {related: "/api/task-lists"}
        }
      }
    }
  })
}
