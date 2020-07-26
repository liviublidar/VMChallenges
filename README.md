# Just some programming challenges

#### 1) Movie sorter: from hackajob.co
```
Mr. K. I. has a very big movie collection. He has organized his collection in a big stack.
Whenever he wants to watch one of the movies, he locates the movie in this stack and removes it carefully, ensuring that the stack doesn't fall over. After he finishes watching the movie, he places it at the top.
Since the stack of movies is so big, he needs to keep track of the position of each movie.
It is sufficient to know for each movie how many movies are placed above it, since, with this information, its position in the stack can be calculated. Each movie is identified by a number printed on the movie box.
Your task is to implement a program which will keep track of the position of each movie.
In particular, each time Mr. K. I. removes a movie box from the stack, your program should print the number of movies that were placed above it before it was removed.
After the movie is watched it is placed at the top of the stack.

INPUT
int n -> the number of movies Mr. K. I. has in the stack
int m- > the number of movies Mr. K. I. wants to watch
int[] movies -> an array with m integers a1 . . . am (1 <= ai <= n) representing the identification numbers of movies that Mr. K. I. wants to watch
For simplicity, we assume assume that the initial stack contains the movies with identification numbers 1, 2, . . . , n in increasing order, where the movie box with label 1 is the top-most box.

OUTPUT
string movies_array -> array with m integers separated by comma, where the i-th integer gives the number of movie boxes above the box with label ai, immediately before this box is removed from the stack.
Note: After each find, the movie box is placed at the top of the stack.

CONSTRAINTS
1 <= n, m <= 100 000

EXAMPLE 1
Input
3
3
[3,1,1]

Output
"2,1,0"

EXAMPLE 2
Input
5
3
[4,4,5]
```

#### Pig Latin: from exercism.io
```
Implement a program that translates from English to Pig Latin.

Pig Latin is a made-up children's language that's intended to be confusing. It obeys a few simple rules (below), but when it's spoken quickly it's really difficult for non-children (and non-native speakers) to understand.

Rule 1: If a word begins with a vowel sound, add an "ay" sound to the end of the word. Please note that "xr" and "yt" at the beginning of a word make vowel sounds (e.g. "xray" -> "xrayay", "yttria" -> "yttriaay").
Rule 2: If a word begins with a consonant sound, move it to the end of the word and then add an "ay" sound to the end of the word. Consonant sounds can be made up of multiple consonants, a.k.a. a consonant cluster (e.g. "chair" -> "airchay").
Rule 3: If a word starts with a consonant sound followed by "qu", move it to the end of the word, and then add an "ay" sound to the end of the word (e.g. "square" -> "aresquay").
Rule 4: If a word contains a "y" after a consonant cluster or as the second letter in a two letter word it makes a vowel sound (e.g. "rhythm" -> "ythmrhay", "my" -> "ymay").
There are a few more rules for edge cases, and there are regional variants too.

See http://en.wikipedia.org/wiki/Pig_latin for more details.
