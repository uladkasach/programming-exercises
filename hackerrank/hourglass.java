import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;
// https://www.hackerrank.com/challenges/2d-array/problem?h_l=playlist&slugs%5B%5D=interview&slugs%5B%5D=interview-preparation-kit&slugs%5B%5D=arrays

public class Solution {

    /**
        @returns largets hourglass sum
    */
    static int hourglassSum(int[][] arr) {
        int maxSum = -9999; // overwritten forcefully on evaluation of sum at arr[0][0]
        for (int i = 0; i < arr.length; i++){
            int[] column = arr[i];
            for(int j = 0; j < column.length; j++){
                try{
                    int thisSum = sumHourglassAtIndex(i, j, arr);
                    if(j == 0 && i == 0){ // if this is the first element sum was found for, automatically the max sum
                        maxSum = thisSum;
                    } else if(thisSum > maxSum){ // if this sum is > than maxSum, then by def its max Sum
                        maxSum = thisSum;
                    }
                } catch(Exception e){
                    // do nothing if invalid hourglass sum at this point
                }
            }
        }
        return maxSum;
    }
    /**
        @returns sum of this hourglass, or throws error if this hourglass does not exist
    */
    static int sumHourglassAtIndex(int index_i, int index_j, int[][] arr) throws Exception {
        int[][] position_modifiers = {{0,0},
                                    {0,1},
                                    {0,2},
                                    {1,1},
                                    {2,0},
                                    {2,1},
                                    {2,2}};
        int thisSum = 0;
        for(int[] mods: position_modifiers){
            int final_i = index_i + mods[0];
            int final_j = index_j + mods[1];
            int value = arr[final_i][final_j]; // throws exception if out of array bounds
            thisSum += value;
        }
        return thisSum;
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int[][] arr = new int[6][6];

        for (int i = 0; i < 6; i++) {
            String[] arrRowItems = scanner.nextLine().split(" ");
            scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

            for (int j = 0; j < 6; j++) {
                int arrItem = Integer.parseInt(arrRowItems[j]);
                arr[i][j] = arrItem;
            }
        }

        int result = hourglassSum(arr);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedWriter.close();

        scanner.close();
    }
}
