import java.util.Random;

public class GenderBiasChallenge {    
    private static final int NUM_MOTHERS = 10_000;
    private static final int NUM_SIMULATION_RUNS = 10;

    public void run() {

        int numGirlsBorn = 0;
        int numBoysBorn = 0;
        Random randGenerator = new Random(1);

        // header for report
        System.out.format("Run#  M : F%n");
        
        for (int runNumber = 1; runNumber <= NUM_SIMULATION_RUNS; runNumber++) {
            for (int i = 0; i < NUM_MOTHERS; i++) {
                boolean boyWasBorn = false;
                do {
                    boyWasBorn = randGenerator.nextBoolean();
                    if (boyWasBorn) {
                        numBoysBorn++;
                    } else {
                        numGirlsBorn++;
                        break;
                    }
                } while (boyWasBorn);

            }

            if (numBoysBorn == 0) {
                System.out.println("No boys born!");
            } else {
                System.out.format("%4d  1 : %.5f%n", runNumber, 1D * numGirlsBorn / numBoysBorn);
            }
            
        }

    }   
}
