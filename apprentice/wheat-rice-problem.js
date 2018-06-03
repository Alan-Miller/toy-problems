/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  THE WHEAT/RICE AND CHESSBOARD PROBLEM
  http://www.codewars.com/kata/the-wheat-slash-rice-and-chessboard-problem

  Description:

  I assume most of you are familiar with the ancient legend of the rice (but I see wikipedia suggests wheat, for some reason) problem, but a quick recap for you: a young man asks as a compensation only 1 grain of rice for the first square, 2 grains for the second, 4 for the third, 8 for the fourth and so on, always doubling the previous.

  Your task is pretty straightforward (but not necessarily easy): given an amount of grains, you need to return up to which square of the chessboard one should count in order to get at least as many.

  As usual, a few examples might be way better than thousands of words from me:

  squares_needed(0) == 0
  squares_needed(1) == 1
  squares_needed(2) == 2
  squares_needed(3) == 2
  squares_needed(4) == 3
  Input is always going to be valid/reasonable: ie: a non negative number; extra cookie for not using a loop to compute square-by-square (at least not directly) and instead trying a smarter approach [hint: some peculiar operator]; a trick converting the number might also work: impress me!
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function squaresNeeded(grains){
  if (grains === 0) return 0
  const squareNum = Math.log(grains) / Math.log(2) + 1
  return Math.floor(squareNum)
}

/*
  Square 1 gets 1 grain, i.e., 2 to 0th power = 1
  Square 2 gets 2 grains, i.e., 2 to 1th power = 2
  Square 3 gets 4 grains, i.e., 2 to 2th power = 4
  Square 4 gets 8 grains, i.e., 2 to 3th power = 8

  The exponent is always 1 less than the square's number. 
  Math.log(product) / Math.log(base) = exponent
  Add 1 to the exponent to get the square number.

  The new grains added by each square equal 1 more than all 
  previous squares combined. Adding those new grains to the 
  total results in 1 less than the next square's grains, and 
  so on. So if our number of desired grains is equal to or 
  greater than the number of new grains a given square 
  provides, but is less than the next square's, the given 
  square is the one we need. So if we use the number of 
  desired grains as our product, and 2 as the base, we'll 
  get our exponent. Adding 1 will get our square number. 
  This will be either be an integer equal to the correct 
  square number or a decimal value higher than the correct 
  number but not less than the number of the next square.
*/