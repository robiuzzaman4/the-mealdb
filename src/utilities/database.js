const addToDb = (id, name) => {
    let bookmark = [];
    const getBookmarked = JSON.parse(localStorage.getItem('bookmark'));
    const item = { idMeal: id, strMeal: name };

    if (getBookmarked) {
        const isThisBookmarked = getBookmarked.find((item) => item.id === id);

        if (!isThisBookmarked) {
            bookmark.push(...getBookmarked, item);
            localStorage.setItem('bookmark', JSON.stringify(bookmark));
        }

    } else {
        bookmark.push(item);
        localStorage.setItem('bookmark', JSON.stringify(bookmark));
    }
}
export { addToDb };
