import java.util.Scanner;

public class GoLoopTranslationChallenge {

    // this is like a "life counter" in a video game: it has a maximum
    // amount and can be increased and decreased - but never *over*
    // the maximum, and never *under* 0
    //
    // user keeps entering positive and negative numbers until 
    // the life level reaches 0

    private static final int STARTING_LIFE = 100;

    public void run() {
        Scanner keyboard = new Scanner(System.in);

        int lifeLeft = STARTING_LIFE;
        boolean isAlive = true;
        String changeDisplay = "";
        
        do {
            int lifeChange = Integer.parseInt(keyboard.nextLine());
            
            changeDisplay = lifeChange > 0 ? "HEAL" : "DMG";
            lifeLeft += lifeChange;

            if (lifeLeft > STARTING_LIFE) {
                lifeLeft = STARTING_LIFE;
            } else if (lifeLeft <= 0) {
                lifeLeft = 0;
                isAlive = false;
            } 
            
            System.out.format("%5s(%03d): LIFE %03d%n", changeDisplay, Math.abs(lifeChange), lifeLeft);
        } while (isAlive);

        System.out.println("Dead now.");
    }

}
