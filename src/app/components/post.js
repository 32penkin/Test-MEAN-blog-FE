import TemplatePostUrl from 'ngtemplate-loader!../templates/post.html';
import {PostCtrl} from '../controllers/PostController';

export const PostComponentName = 'post';
export const PostComponent = {
  templateUrl: TemplatePostUrl,
  controller: PostCtrl
};