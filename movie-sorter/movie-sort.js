const run = (stackSize, m, movies) => {
    //key idea here, to understand the concept:
    //We can imagine that a divider is put at the top of the initial stack.
    //Whatever is above the divider goes into watchedMovies array.

    let watchedMovies = [];
    let result = '';

    /**
     * shifts movies to the top of the pile
     * @param element {number}
     * @param indexOfElement {number}
     * @param array {array}
     */
    const movieShift = function(element, indexOfElement, array) {
        if (indexOfElement === -1){
            array.unshift(element);
        } else {
            array.splice(indexOfElement, 1); //if already above the divider
            array.unshift(element)
        }
    }

    /**
     * appends the movie locations to the final string
     * @param append {number}
     */
    const appendToResult = function(append) {
        result === ''
            ? result += append
            : result += ',' + append;
    }

    /**
     * gets bow many boxes are on top of the current one
     * @param movieId
     * @param indexOfMovieInWatched
     * @returns {number}
     */
    const getHeightOfStacksAbove = function (movieId, indexOfMovieInWatched) {
        let sizeOfStack;
        if (indexOfMovieInWatched !== -1) {
            //if above divider then just get it's index from here
            sizeOfStack = indexOfMovieInWatched;
        } else {
            //if still below divider then account for
            //any movie that was watched from the lower stack and should be beneath this
            //TODO: one of the arrays is sorted, so explore a better way then filter, maybe array diff?
            sizeOfStack = movieId - 1 + watchedMovies.filter(element => element > movieId ).length
        }
        return sizeOfStack;
    }

    //I don't even seem to need m,
    //loop through all the movies that Mr K.I wants to see
    for (const movieId of movies) {
        const indexOfElement = watchedMovies.indexOf(movieId)
        appendToResult(getHeightOfStacksAbove(movieId, indexOfElement));
        movieShift(movieId, indexOfElement, watchedMovies);
    }

    return result;
}

module.exports = {
    sorter: {
        sort: run,
    },
}
