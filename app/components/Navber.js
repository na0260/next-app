import Link from "next/link";

const Navber = () => {
    return (<div>
        <div className="container mx-auto py-10">
            <div className="row">
                <div className="col-12">
                    <div className="flex space-x-5 justify-center">
                        <Link href="/">
                            <span>Home</span>
                        </Link>
                        <Link href="/blog">
                            <span>Blogs</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};

export default Navber;