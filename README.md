# Just some programming challenges

#### Movie sorter: from hackajob.co
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
```


#### Nesting Depth: from Google CodeJam 2020
```
tl;dr: Given a string of digits S, insert a minimum number of opening and closing parentheses into it such that the resulting string is balanced and each digit d is inside exactly d pairs of matching parentheses.

Let the nesting of two parentheses within a string be the substring that occurs strictly between them. An opening parenthesis and a closing parenthesis that is further to its right are said to match if their nesting is empty, or if every parenthesis in their nesting matches with another parenthesis in their nesting. The nesting depth of a position p is the number of pairs of matching parentheses m such that p is included in the nesting of m.

For example, in the following strings, all digits match their nesting depth: 0((2)1), (((3))1(2)), ((((4)))), ((2))((2))(1). The first three strings have minimum length among those that have the same digits in the same order, but the last one does not since ((22)1) also has the digits 221 and is shorter.

Given a string of digits S, find another string S', comprised of parentheses and digits, such that:
all parentheses in S' match some other parenthesis,
removing any and all parentheses from S' results in S,
each digit in S' is equal to its nesting depth, and
S' is of minimum length.

Input
The first line of the input gives the number of test cases, T. T lines follow. Each line represents a test case and contains only the string S.

Output
For each test case, output one line containing Case #x: y, where x is the test case number (starting from 1) and y is the string S' defined above.


Limits:
1<=T<=100
1<=lenth of S<=100

Sample:

INPUT                 Output

4
0000        Case #1: 0000
101         Case #2: (1)0(1)
111000      Case #3: (111)000
1           Case #4: (1)


The strings ()0000(), (1)0(((()))1) and (1)(11)000 are not valid solutions to Sample Cases #1, #2 and #3, respectively, only because they are not of minimum length. In addition, 1)( and )(1 are not valid solutions to Sample Case #4 because they contain unmatched parentheses and the nesting depth is 0 at the position where there is a 1.

You can create sample inputs that are valid only for Test Set 2 by removing the parentheses from the example strings mentioned in the problem statement.
```

#### Vestigium: from Google CodeJam 2020
```
Vestigium means "trace" in Latin. In this problem we work with Latin squares and matrix traces.
The trace of a square matrix is the sum of the values on the main diagonal (which runs from the upper left to the lower right).
An N-by-N square matrix is a Latin square if each cell contains one of N different values, and no value is repeated within a row or a column. In this problem, we will deal only with "natural Latin squares" in which the N values are the integers between 1 and N.
Given a matrix that contains only integers between 1 and N, we want to compute its trace and check whether it is a natural Latin square. To give some additional information, instead of simply telling us whether the matrix is a natural Latin square or not, please compute the number of rows and the number of columns that contain repeated values.

Input
The first line of the input gives the number of test cases, T. T test cases follow. Each starts with a line containing a single integer N: the size of the matrix to explore. Then, N lines follow. The i-th of these lines contains N integers Mi,1, Mi,2 ..., Mi,N. Mi,j is the integer in the i-th row and j-th column of the matrix.

Output
For each test case, output one line containing Case #x: k r c, where x is the test case number (starting from 1), k is the trace of the matrix, r is the number of rows of the matrix that contain repeated elements, and c is the number of columns of the matrix that contain repeated elements.

Limits
Test set 1 (Visible Verdict)
Time limit: 20 seconds per test set.
Memory limit: 1GB.
1 ≤ T ≤ 100.
2 ≤ N ≤ 100.
1 ≤ Mi,j ≤ N, for all i, j.

Sample

Input       Output
 	
3
4
1 2 3 4
2 1 4 3
3 4 1 2
4 3 2 1
4
2 2 2 2     Case #1: 4 0 0
2 3 2 3     Case #2: 9 4 4
2 2 2 3     Case #3: 8 0 2
2 2 2 2
3
2 1 3
1 3 2
1 2 3

In Sample Case #1, the input is a natural Latin square, which means no row or column has repeated elements. All four values in the main diagonal are 1, and so the trace (their sum) is 4.
In Sample Case #2, all rows and columns have repeated elements. Notice that each row or column with repeated elements is counted only once regardless of the number of elements that are repeated or how often they are repeated within the row or column. In addition, notice that some integers in the range 1 through N may be absent from the input.
In Sample Case #3, the leftmost and rightmost columns have repeated elements.
```

#### Parenting Partnering Returns: from Google CodeJam 2020
```
Cameron and Jamie's kid is almost 3 years old! However, even though the child is more independent now, scheduling kid activities and domestic necessities is still a challenge for the couple.
Cameron and Jamie have a list of N activities to take care of during the day. Each activity happens during a specified interval during the day. They need to assign each activity to one of them, so that neither of them is responsible for two activities that overlap. An activity that ends at time t is not considered to overlap with another activity that starts at time t.
For example, suppose that Jamie and Cameron need to cover 3 activities: one running from 18:00 to 20:00, another from 19:00 to 21:00 and another from 22:00 to 23:00. One possibility would be for Jamie to cover the activity running from 19:00 to 21:00, with Cameron covering the other two. Another valid schedule would be for Cameron to cover the activity from 18:00 to 20:00 and Jamie to cover the other two. Notice that the first two activities overlap in the time between 19:00 and 20:00, so it is impossible to assign both of those activities to the same partner.
Given the starting and ending times of each activity, find any schedule that does not require the same person to cover overlapping activities, or say that it is impossible.

Input
The first line of the input gives the number of test cases, T. T test cases follow. Each test case starts with a line containing a single integer N, the number of activities to assign. Then, N more lines follow. The i-th of these lines (counting starting from 1) contains two integers Si and Ei. The i-th activity starts exactly Si minutes after midnight and ends exactly Ei minutes after midnight.

Output
For each test case, output one line containing Case #x: y, where x is the test case number (starting from 1) and y is IMPOSSIBLE if there is no valid schedule according to the above rules, or a string of exactly N characters otherwise. The i-th character in y must be C if the i-th activity is assigned to Cameron in your proposed schedule, and J if it is assigned to Jamie.
If there are multiple solutions, you may output any one of them. (See "What if a test case has multiple correct solutions?" in the Competing section of the FAQ. This information about multiple solutions will not be explicitly stated in the remainder of the 2020 contest.)

Limits
Time limit: 20 seconds per test set.
Memory limit: 1GB.
1 ≤ T ≤ 100.
0 ≤ Si < Ei ≤ 24 × 60.

Test set 1 (Visible Verdict)
2 ≤ N ≤ 10.

Test set 2 (Visible Verdict)
2 ≤ N ≤ 1000.

Sample

Input      Output
4
3
360 480
420 540
600 660
3
0 1440     Case #1: CJC
1 3        Case #2: IMPOSSIBLE
2 4        Case #3: JCCJJ
5          Case #4: CC
99 150
1 100
100 301
2 5
150 250
2
0 720
720 1440

Sample Case #1 is the one described in the problem statement. As mentioned above, there are other valid solutions, like JCJ and JCC.
In Sample Case #2, all three activities overlap with each other. Assigning them all would mean someone would end up with at least two overlapping activities, so there is no valid schedule.
In Sample Case #3, notice that Cameron ends an activity and starts another one at minute 100.
In Sample Case #4, any schedule would be valid. Specifically, it is OK for one partner to do all activities.
```
