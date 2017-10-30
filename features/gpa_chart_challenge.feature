Feature: Assignment 05, Gpa Chart Challenge

    Scenario: No students
        Given the user inputs "0"
        When I run the Gpa Chart Challenge
        Then the program should stop
        
    Scenario: Negative students
        Given the user inputs "-1"
        When I run the Gpa Chart Challenge
        Then the program should stop

    Scenario: One student, Honours low end
        Given the user inputs "1,3.6"
        When I run the Gpa Chart Challenge
        Then I should see this output from the Gpa Chart Challenge:
        """
        GPA Distribution

        Honours   :*
        Pass      :
        Fail      :

        """
    Scenario: One student, Honours high end
        Given the user inputs "1,4.0"
        When I run the Gpa Chart Challenge
        Then I should see this output from the Gpa Chart Challenge:
        """
        GPA Distribution

        Honours   :*
        Pass      :
        Fail      :

        """

    Scenario: One student, Pass low end
        Given the user inputs "1,2.0"
        When I run the Gpa Chart Challenge
        Then I should see this output from the Gpa Chart Challenge:
        """
        GPA Distribution

        Honours   :
        Pass      :*
        Fail      :

        """
    Scenario: One student, Pass high end
        Given the user inputs "1,3.5"
        When I run the Gpa Chart Challenge
        Then I should see this output from the Gpa Chart Challenge:
        """
        GPA Distribution

        Honours   :
        Pass      :*
        Fail      :

        """

    Scenario: One student, Fail low end
        Given the user inputs "1,0.0"
        When I run the Gpa Chart Challenge
        Then I should see this output from the Gpa Chart Challenge:
        """
        GPA Distribution

        Honours   :
        Pass      :
        Fail      :*

        """
    Scenario: One student, Fail high end
        Given the user inputs "1,1.9"
        When I run the Gpa Chart Challenge
        Then I should see this output from the Gpa Chart Challenge:
        """
        GPA Distribution

        Honours   :
        Pass      :
        Fail      :*

        """

        Scenario: Two students, Honours and Pass
        Given the user inputs "2,3.8,2.5"
        When I run the Gpa Chart Challenge
        Then I should see this output from the Gpa Chart Challenge:
        """
        GPA Distribution

        Honours   :*
        Pass      :*
        Fail      :

        """
        Scenario: Two students, Pass and Honours
        Given the user inputs "2,2.1,3.9"
        When I run the Gpa Chart Challenge
        Then I should see this output from the Gpa Chart Challenge:
        """
        GPA Distribution

        Honours   :*
        Pass      :*
        Fail      :

        """

        Scenario: Two students, Honours and Fail
        Given the user inputs "2,3.8,1.9"
        When I run the Gpa Chart Challenge
        Then I should see this output from the Gpa Chart Challenge:
        """
        GPA Distribution

        Honours   :*
        Pass      :
        Fail      :*

        """
        Scenario: Two students, Fail and Honours
        Given the user inputs "2,1.7,3.9"
        When I run the Gpa Chart Challenge
        Then I should see this output from the Gpa Chart Challenge:
        """
        GPA Distribution

        Honours   :*
        Pass      :
        Fail      :*

        """

        Scenario: Two students, Pass and Fail
        Given the user inputs "2,3.5,1.9"
        When I run the Gpa Chart Challenge
        Then I should see this output from the Gpa Chart Challenge:
        """
        GPA Distribution

        Honours   :
        Pass      :*
        Fail      :*

        """
        Scenario: Two students, Fail and Pass
        Given the user inputs "2,1.7,3.0"
        When I run the Gpa Chart Challenge
        Then I should see this output from the Gpa Chart Challenge:
        """
        GPA Distribution

        Honours   :
        Pass      :*
        Fail      :*

        """

        Scenario: Three students, Honours, Pass and Fail
        Given the user inputs "3,3.7,3.5,1.9"
        When I run the Gpa Chart Challenge
        Then I should see this output from the Gpa Chart Challenge:
        """
        GPA Distribution

        Honours   :*
        Pass      :*
        Fail      :*

        """


        Scenario: Six students, Honours, Pass and Fail
        Given the user inputs "6,3.7,3.8,3.5,2.0,1.9,1.0"
        When I run the Gpa Chart Challenge
        Then I should see this output from the Gpa Chart Challenge:
        """
        GPA Distribution

        Honours   :**
        Pass      :**
        Fail      :**

        """