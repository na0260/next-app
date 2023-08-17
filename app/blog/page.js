import getAllPosts from "@/utils/getAllPosts";
import Link from "next/link";

const Page = async () => {
    const posts = await getAllPosts();
    return (
        <div className="container mx-auto mt-20">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center font-bold pb-16">This is Blogs Page</h1>
                    {
                        posts.map((post) => {
                            return (
                                <Link key={post.id} href={`/blog/${post.id}?_title=${post.title}`}>
                                    <p className="font-bold">
                                        {post.id} - {post.title}
                                    </p>
                                </Link>

                            );
                        })
                    }

                </div>
            </div>
        </div>
    );
};

export default Page;