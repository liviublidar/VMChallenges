let translate = (english) => {
    const VOWELS = ['a', 'e', 'i', 'o', 'u'];
    const TRICKY_VOWELS = ['xr', 'yt'];
    const CONSONANT_DIGRAPHS = [
        'bl', 'br', 'ch', 'ck', 'cl', 'cr', 'dr', 'fl', 'fr', 'gh', 'gl', 'gr', 'ng', 'ph', 'pl', 'pr', 'qu',
        'sc', 'sh', 'sk', 'sl', 'sm', 'sn', 'sp', 'st', 'sw', 'th', 'tr', 'tw', 'wh', 'wr', 'rh'
    ];
    const CONSONANT_TRIGRAPHS = ['nth', 'sch', 'scr', 'shr', 'spl', 'spr', 'squ', 'str', 'thr'];

    /**
     *
     * @param word
     * @returns {string}
     */
    let wordsTranslator = (word) => {
        for (let vowel of VOWELS.concat(TRICKY_VOWELS)) {
            if (word.indexOf(vowel) === 0) {
                return word + 'ay';
            }
        }

        for(let consonantCluster of CONSONANT_TRIGRAPHS.concat(CONSONANT_DIGRAPHS)){
            if(word.indexOf(consonantCluster) === 0) {
                let sliced = word.slice(consonantCluster.length, word.length);
                return sliced.indexOf('qu') === 0 ?
                    sliced.slice(2, sliced.length) + consonantCluster + 'quay' : sliced + consonantCluster + 'ay';
            }
        }

        return word.indexOf(word.charAt(0) + 'qu') === 0 ?
            word.slice(3, word.length) + word.charAt(0) + 'quay' : word.slice(1, word.length) + word.charAt(0) + 'ay';
    };

    /**
     *
     * @param phrase
     * @returns {string}
     */
    let phraseTranslator = (phrase) => {
        return phrase.split(' ')
            .map(wordsTranslator)
            .join(' ');
    }

    return phraseTranslator(english);
}

module.exports = {
    translator: {
        translate: translate
    }
}
