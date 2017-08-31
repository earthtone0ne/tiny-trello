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
      }]
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
  });

  this.post('/task-items', function(db, req) {
    let params = req.requestBody;
    if (!params.title) {
      return false;
    }
    return db.taskItems.create({data: params})

  });
  this.post('/task-lists', function(db, req) {
    let params = {title: "Tester"};
    if (!params.title) {
      return false;
    }
    return db.taskLists.create({data: params})

  });
}
