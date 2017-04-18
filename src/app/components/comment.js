import CommentPostUrl from 'ngtemplate-loader!../templates/comment.html';

export const CommentComponentName = 'comment';
export const CommentComponent = {
  bindings: {
    content: '=',
    date: '=',
    author: '='
  },
  templateUrl: CommentPostUrl,
  controller: function () {},
  controllerAs: '$ctrl'
};