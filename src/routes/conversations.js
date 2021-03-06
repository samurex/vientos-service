const ConversationsController = require('./../controllers/conversations')

module.exports = [
  {
    method: 'GET',
    path: '/conversations/{id}',
    config: {
      handler: ConversationsController.view
    }
  },
  {
    method: 'GET',
    path: '/people/{id}/conversations',
    config: {
      handler: ConversationsController.mine
    }
  },
  {
    method: 'PUT',
    path: '/conversations/{id}',
    config: {
      handler: ConversationsController.create
    }
  },
  {
    method: 'PUT',
    path: '/messages/{id}',
    config: {
      handler: ConversationsController.addMessage
    }
  },
  {
    method: 'GET',
    path: '/reviews',
    config: {
      handler: ConversationsController.listReviews,
      auth: false
    }
  },
  {
    method: 'PUT',
    path: '/reviews/{id}',
    config: {
      handler: ConversationsController.addReview
    }
  },
  {
    method: 'GET',
    path: '/collaborations',
    config: {
      handler: ConversationsController.listCollaborations,
      auth: false
    }
  },
  {
    method: 'PUT',
    path: '/collaborations/{id}',
    config: {
      handler: ConversationsController.saveCollaboration
    }
  },
  {
    method: 'DELETE',
    path: '/collaborations/{id}',
    config: {
      handler: ConversationsController.removeCollaboration
    }
  }
]
