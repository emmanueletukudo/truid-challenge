import useSWR from 'swr';

async function simCheck(){
    const {data, error} = useSWR("/api/v1/sims", fetcher)
    if(error) return <div>Faild to load</div>
    if(!data) return <div>loading...</div>

    console.log(data);
    //return data;
}

export default simCheck;