import Image from 'next/image';
import Link from 'next/link';

const posts = [
  {
    id: 1,
    title: 'Charge Two Devices at the Same Time With This Magnetic Wireless Charging Dock',
    category: 'Science',
    author: 'Floyd Miles',
    date: '3 Days Ago',
    image: '/images/post1.jpg',
  },
  {
    id: 2,
    title: 'Exploring the Future of AI: Trends and Predictions',
    category: 'Technology',
    author: 'Jane Cooper',
    date: '5 Days Ago',
    image: '/images/post2.jpg',
  },
  {
    id: 3,
    title: '10 Tips for a Healthy Lifestyle',
    category: 'Health',
    author: 'Cameron Williamson',
    date: '1 Week Ago',
    image: '/images/post3.jpg',
  },
  {
    id: 4,
    title: 'Top Destinations to Visit in 2025',
    category: 'Travel',
    author: 'Theresa Webb',
    date: '2 Weeks Ago',
    image: '/images/post4.jpg',
  },
  // Add more posts here
];

export default function LatestPosts() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl mb-5 font-bold">Our Latest Post</h2>
        <Link 
          href="/all-posts" 
          className="bg-[#F15A24] text-white px-4 py-2 rounded hover:bg-[#F15A24]/90"
        >
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="space-y-3">
            <Image
              src={post.image}
              alt={`Thumbnail for ${post.title}`}
              width={300}
              height={200}
              className="w-full rounded border"
            />
            <div className="space-y-2">
              <span className="text-sm text-gray-500">{post.category}</span>
              <h3 className="font-semibold">
                <Link href="#" className="hover:text-[#3B9EFF]">
                  {post.title}
                </Link>
              </h3>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
