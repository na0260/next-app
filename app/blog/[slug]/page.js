import getSinglePost from "@/utils/getSinglePost";

const Page = async ({params}) => {
    const id = params.slug;
    const post = await getSinglePost(id);
    return (
        <div className="container mx-auto mt-20">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center pb-10">{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            </div>
        </div>
    );
};

export default Page;