import getSinglePost from "@/utils/getSinglePost";
import getAllPosts from "@/utils/getAllPosts";

const Page = async ({params}) => {
    const id = params.slug;
    const post = await getSinglePost(id);
    return (
        <div className="container mx-auto mt-20">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center font-bold text-xl pb-10">{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            </div>
        </div>
    );
};

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({
        slug: ""+post.id,
    }));
}

export default Page;