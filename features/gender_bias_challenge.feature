Feature: Assignment 05, Gender Bias Challenge

    Scenario: Desired output from input without errors
        When I run the Gender Bias Challenge
        Then I should see a report that is **close** to this:
            """
            Run#  M : F
               1  1 : 1.00654
               2  1 : 1.00035
               3  1 : 1.00067
               4  1 : 0.99908
               5  1 : 1.00400
               6  1 : 1.00254
               7  1 : 1.00232
               8  1 : 0.99989
               9  1 : 1.00119
              10  1 : 0.99879
            
            """ 
