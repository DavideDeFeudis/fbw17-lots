# Cashier solutions

Hello Gang,

on the last tutoring on friday I had some time to code example solution(s) to the cashier task.

## Solution 1

The first solution tries to use as little complexity as possible (just forEach and if / else, no nested loops, no filter / map / reduce). It passes all tests on FreeCodeCamp. I have added a bunch of comments to explain the relevant sections.

## Solution 2

Even though solution 1 passes the tests on FreeCodeCamp, it is actually not covering all edge cases. 

E.g. the following scenario:
Change amount: 80 Cents. Drawer: [[ "QUARTER", "0.75" ], ["DIME", "0.3"]].

A payout of all 3 quarters (75 Cents) does not work. Because the remainder of 5 Cents can not be expressed with our remaining dimes. If we just pay out two quarters (0.5), we can express the remainder in dimes (3 Dimes = 0.3). And can give back exact change (=80 Cents = 2 quarters + 3 dimes).

An algorithm which tries out all possible paths for a solution, from the maximum payout per unit prefered down to the lowest, is a classical case for an recursive algorithm.

So, for those who solved the initial cashier task, you might take a look at it. It passes all tests on freeCodeCamp + the edge cases.

In total it is has not much more lines than the simple solution. But it is more complex (so I added a bunch of comments).

BEWARE: You do not need to understand the second solution. If you have never heard of recursion so far, you should probably ignore the code for now, it might hurt. Explore it at your own risk :-)
