import java.util.Scanner;
/**
 * Note: When you complete this challenge, you should add your name as an
 * author (and remove this note).
 *
 * @author Student Person
 */
public class GpaChartChallenge {

    public void run() {
        Scanner kbd = new Scanner(System.in);

        System.out.print("Number of students? ");
        int numStudents = kbd.nextInt();

        if (numStudents <= 0) {
            System.out.println("Bad mojo.");
        } else {

            int numHonours = 0;
            int numPass = 0;
            int numFail = 0;

            for (int i = 1; i <= numStudents; i++) {
                double grade = kbd.nextDouble();
                if (grade >= 3.6) {
                    numHonours++;
                } else if (grade >= 2.0) {
                    numPass++;
                } else {
                    numFail++;
                }
            }

            System.out.println("GPA Distribution");
            System.out.println();

            System.out.printf("%-10s:", "Honours");
            for (int i = 0; i < numHonours; i++) {
                System.out.print("*");
            }
            System.out.println();

            System.out.printf("%-10s:", "Pass");
            for (int i = 0; i < numPass; i++) {
                System.out.print("*");
            }
            System.out.println();

            System.out.printf("%-10s:", "Fail");
            for (int i = 0; i < numFail; i++) {
                System.out.print("*");
            }
            System.out.println();


            
            

        }
        
    } 
   
}