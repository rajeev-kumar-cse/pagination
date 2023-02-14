
function paginate(followers){
    const itemPerpage = 8;
    const numberOfPages = Math.ceil(followers.length / itemPerpage)
    console.log(numberOfPages)
    const newFollowers = Array.from({length: numberOfPages}, 
        (_, index) => {
        const start = index * itemPerpage
        return followers.slice(start, start + itemPerpage);
    })
    return newFollowers;
}
export default paginate;