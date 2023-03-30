import React from 'react';

const Bookmark = ({ bookmarks , handleDeleteBookmark}) => {
    return (
        <div className="p-4 bg-base-100 shadow-xl sticky top-0">
            <div className="grid gap-2 pt-4">
                <h2 className="card-title text-2xl justify-center">Bookmarked Meals: {bookmarks.length} </h2>
                {
                    bookmarks.map((item, index) => {
                        return (
                            <div key={index}>
                                {index + 1}. {item.strMeal}
                            </div>
                        )
                    })
                }
                <div className="card-actions justify-end">
                    <button onClick={handleDeleteBookmark} className="btn btn-accent w-full">Delete ALl</button>
                </div>
            </div>
        </div>
    );
};

export default Bookmark;