const API_URL: string = 'https://jsonplaceholder.typicode.com/posts';
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

console.log("Status: Sedang memulai pengambilan data...");
// fetch()
fetch(API_URL)
    .then((response: Response) => {
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);// lempar Error jika tidak ada respone
        }
        return response.json(); //respone berisi Data
    })
    .then((data: Post[]) => {
        const userProfile: Post[] = data;
        console.log("Status: Successfully");
        console.log(`userId: ${userProfile[0].userId}`);
        console.log(`id: ${userProfile[0].id}`);
        console.log(`title: ${userProfile[0].title}`);
        console.log(`body: ${userProfile[0].body}`);
    })
    .catch((error: Error) => {//Cek Error
        console.error("ERROR");
        console.error(`Detail Error: ${error.message}`);
    })
    .finally(() => {//END
        console.log("\nStatus: Proses pengambilan data selesai.");
    });


const apihandleAsyncAwait = async () => {
    try {
        const response = await fetch(API_URL);
        const Data = await response.json(); 
        console.log(Data);
    } catch (error) {
        console.log(error);
    }
};

console.log(apihandleAsyncAwait());
