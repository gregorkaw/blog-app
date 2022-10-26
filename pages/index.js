import { FeaturedPosts } from '../sections/index';
import { PostCard } from '../components';
import { getPosts } from '../services';

export default function Home({ posts }) {
  return (
    <div className="w-3/4 mx-auto px-10 mb-8">
      <FeaturedPosts />
      <div className='flex justify-center'>
        <div className="w-3/4 lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

