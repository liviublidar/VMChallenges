/*
Re-ID
=====
There's some unrest in the minion ranks: minions with ID numbers like "1", "42", and other "good" numbers have been lording it over
the poor minions who are stuck with more boring IDs. To quell the unrest, Commander Lambda has tasked you with reassigning everyone
new random IDs based on a Completely Foolproof Scheme.
Commander Lambda has concatenated the prime numbers in a single long string: "2357111317192329...". Now every minion must draw a
number from a hat. That number is the starting index in that string of primes, and the minion's new ID number will be the next
five digits in the string. So if a minion draws "3", their ID number will be "71113".
Help the Commander assign these IDs by writing a function solution(n) which takes in the starting index n of Lambda's string of
all primes, and returns the next five digits in the string. Commander Lambda has a lot of minions, so the value of n will
always be between 0 and 10000.
 */

public class Main {
    private static String generatePrimesTheGreekWay(int n)
    {
        String toReturn = "";
        boolean prime[] = new boolean[n + 1];
        for(int i = 0 ; i <= n; i++){
            prime[i] = true;
        }
        for(int j = 2; j*j <= n; j++){
            if(prime[j] == true) {
                for(int i = j * j; i <= n; i += j){
                    prime[i] = false;
                }
            }
        }
        for(int k = 2; k <= n; k++) {
            if(prime[k] == true){
                toReturn += k;
            }
        }
        return toReturn;
    }

    private static String getMeSlice(int given, String hayStack)
    {
        String toOutput = "";
        String[] parts = hayStack.split("");
        for(int i = given; i <= given + 4; i++){
            toOutput += parts[i];
        }
        return toOutput;
    }

    public static void main(int given)
    {
        String output = getMeSlice(given, generatePrimesTheGreekWay(104779));
        System.out.println(output);
    }
}
