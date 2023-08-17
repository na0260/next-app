export default async function getAllPosts(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');

    if (!res.ok) {
        throw new Error(res.statusText);
    }else {
        return res.json();
    }
}