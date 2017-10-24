package step_definitions;

import static org.junit.Assert.*;
import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.contentOf;

import java.io.ByteArrayOutputStream;
import java.io.ByteArrayInputStream;
import java.io.PrintStream;
import java.io.File;
import java.util.Arrays;
import java.util.Queue;
import java.util.LinkedList;
import java.util.regex.Matcher;

import cucumber.api.java.en.*;
import cucumber.api.java.Before;
import cucumber.api.java.After;
import cucumber.api.Scenario;
import cucumber.api.PendingException;

import java.util.regex.Pattern;



public class GoLoopTranslationChallengeSteps {
	
    private LinkedList<String> inputQueue = new LinkedList<>();
    private String[] outputLines;
    private int nextLine;


    @Before
    public void beforeCallingScenario() {
    }

	
    @After
    public void afterRunningScenario(Scenario scenario) {
        this.inputQueue.clear();
        this.outputLines = null;
        this.nextLine = -1;
    }

    public void provideKeyboardInput() {
        String queuedInput = "";
        for (String s : inputQueue) {
            queuedInput += String.format("%s%n",s);
        }
        System.setIn(new ByteArrayInputStream(queuedInput.getBytes()));
    }

    @When("^I run the Go Loop Translation Challenge$")
    public void iRunTheGoLoopTranslationChallenge() throws Throwable {
        ByteArrayOutputStream outContent = null;
        PrintStream testSystemOut = null;
        try {
            outContent = new ByteArrayOutputStream();
            testSystemOut = new PrintStream(outContent, true, "UTF-8");

            PrintStream originalSystemOut = System.out;
            try {
                System.setOut(testSystemOut);

                provideKeyboardInput();
                Class.forName("ProblemSetMain").getMethod("runGoLoopTranslationChallenge").invoke(null);
            } finally {
                System.setOut(originalSystemOut);
            }

            testSystemOut.flush();
            outputLines = outContent.toString("UTF-8").split("\\R+");
            nextLine = 0;
        } finally {
            testSystemOut.close();
            outContent.close();
        }
    }      

    @Given("^the sequence of numbers \"([^\"]*)\"$")                         
    public void theSequenceOfNumbers(String numberSequence) throws Throwable {
        String[] healthNumbers = numberSequence.split(",");
        for (String s : healthNumbers) {
            inputQueue.offer(s);
        }                                            
    }      

    @Then("^I should see this output from the Go Loop Translation Challenge:$")
    public void iShouldSeeThisOutputFromTheGoLoopTranslationChallenge(String expectedOutput) throws Throwable {   
        assertEntireOutputIsExactly(expectedOutput);                                  
    }         

    public void assertRemainingOutputIsEmpty() throws Throwable {
        if (this.nextLine != this.outputLines.length) {
            throw new AssertionError("Expected no output, but there was output.");
        }
    }
    

    public void assertEntireOutputIsExactly(String expectedOutput) throws Throwable {
        String[] expectedChunked = expectedOutput.split("\\R");
        int expectedOutputLength = expectedChunked.length;
        int actualOutputLength = outputLines.length;

        if (expectedOutputLength != actualOutputLength) {
            throw new AssertionError("Number of output lines is " + actualOutputLength + ", but expected " + expectedOutputLength + ".");
        }

        for (int i = 0; i < expectedOutputLength; i++) {
            String expectedLine = expectedChunked[i];
            String actualLine = outputLines[i];
            if (!actualLine.equals(expectedLine)) {
                String msg = String.format("%nLine %02d is %n%s%n but expected %n%s%n", i, actualLine, expectedLine);
                throw new AssertionError(msg);
            }
        }
    }

    public void assertRemainingOutputContainsFragment(String word) throws Throwable {
        this.assertRemainingOutputContains(word, "\"" + word + "\"");
    }

    public void assertRemainingOutputContainsWord(String word) throws Throwable {
        this.assertRemainingOutputContains("\\b" + word + "\\b", "word \"" + word + "\"");
    }

    public void assertRemainingOutputContains(String regex, String niceName) throws Throwable {

        int lineToCheck = this.nextLine;
        boolean found = false;


        System.err.println(regex);

        regex = regex.replaceAll("[-.\\+*?\\[^\\]$(){}=!<>|:\\\\]", "\\\\$0");
        while (!found && lineToCheck < this.outputLines.length) {
            Pattern p = Pattern.compile(regex);
            Matcher m = p.matcher(this.outputLines[lineToCheck]);
            found = m.find();

            lineToCheck++;
        }

        if (found) {
            this.nextLine = lineToCheck;
        } else {
            throw new AssertionError("Could not find " + niceName + " in remaining lines:\n" +
                String.join("\n", Arrays.copyOfRange(this.outputLines, this.nextLine, this.outputLines.length)) +
                (this.nextLine > 0 ? "\nPrevious line was:\n" + this.outputLines[this.nextLine - 1] : ""));
        }
    }

    public void assertRemainingOutputMissingWord(String word) throws Throwable {
        this.assertRemainingOutputMissing("\\b" + word + "\\b", word);
    }

    public void assertRemainingOutputMissing(String regex, String niceName) throws Throwable {
        int lineToCheck = this.nextLine;
        boolean found = false;

        regex = regex.replaceAll("[-.\\+*?\\[^\\]$(){}=!<>|:\\\\]", "\\\\$0");
        while (!found && lineToCheck < this.outputLines.length) {
            Pattern p = Pattern.compile(regex);
            Matcher m = p.matcher(this.outputLines[lineToCheck]);
            found = m.find();

            lineToCheck++;
        }

        if (found) {
            throw new AssertionError("Did not expect to find '" + regex + "', but found it in the line:\n" +
                String.join("\n", this.outputLines[lineToCheck - 1]));
        }
    }
    
}
