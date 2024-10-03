async function fetcher (url:string){
    const res = await fetch (url)
    if (!res.ok){
        throw new Error ('network response failed')
    }
    return res.json()
}
export default fetcher