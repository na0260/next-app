export default async function getPostComments(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`,{
        cache: "force-cache",
    });
    if (!res.ok) {
        throw new Error(res.statusText);
    }else {
        return res.json();
    }
}