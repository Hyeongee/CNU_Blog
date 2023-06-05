import { TAG } from '../api/types';
import PostListItem from '../components/PostListItem';

const list = [
  {
    post: {
      id: 1,
      title: '1번 게시글',
      contents: '내용',
      tag: TAG.REACT,
    },
  },
  {
    post: {
      id: 2,
      title: '2번 게시글',
      contents: '내용',
      tag: TAG.REACT,
    },
  },
  {
    post: {
      id: 3,
      title: '3번 게시글',
      contents: '내용',
      tag: TAG.REACT,
    },
  },
];

const Home = () => {
  return (
    <div>
      {list.map(item => (
        <PostListItem key={item.post.id} {...item.post} />
      ))}
    </div>
  );
};

export default Home;
