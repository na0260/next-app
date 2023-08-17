import getSinglePost from "@/utils/getSinglePost";
import getAllPosts from "@/utils/getAllPosts";
import PostComments from "@/app/components/PostComments";
import getPostComments from "@/utils/getPostComments";
import {Suspense} from "react";

export const dynamicParams = false;
const Page = async ({params}) => {
    const id = params.slug;
    //waterfall fetch
    // const post = await getSinglePost(id);
    // const comments = await getPostComments(id);

    //parallel fetch
    // const postPromise = getSinglePost(id);
    // const commentsPromise = getPostComments(id);
    // const [post, comments] = await Promise.all([postPromise, commentsPromise]);

    //incremental fetch (Best Practice)
    const post = await getSinglePost(id);
    const commentsPromise = getPostComments(id);

    return (
        <div className="container mx-auto mt-5">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center font-bold text-4xl pb-10">{post.title}</h1>
                    <p>{post.body}</p>
                    <Suspense fallback={<h1 className="mt-5 font-bold">Loading Comments.....</h1>}>
                        <PostComments commentPromise={commentsPromise}/>
                    </Suspense>
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