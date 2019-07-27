<?php

/**
 * Use recursive technical to calculate loan. The example is reference by
 * Beginning PHP and MySQL 3th Chinese edition (By W.Jason Gilmore).
 * @abstract
 * 
 * @author Jedi Zhou
 * @copyright (c) 2014, Jedi Zhou
 */
function amortizationTable($pNum, $periodicPayment, $balance, $monthlyInterest) {
    // Calculate payment interest
    $paymentInterest = round($balance * $monthlyInterest, 2);

    // Calculate payment principal
    $paymentPrincipal = round($periodicPayment - $paymentInterest, 2);

    // Deduct princial from remaining balance
    $newBalance = round($balance - $paymentPrincipal, 2);
    // If new balance < monthly payment, set to zero
    if ($newBalance < $paymentPrincipal) {
        $newBalance = 0;
    }

    printf("<tr><td>%d</td>", $pNum);
    printf("<td>$%s</td>", number_format($newBalance, 2));
    printf("<td>$%s</td>", number_format($periodicPayment, 2));
    printf("<td>$%s</td>", number_format($paymentPrincipal, 2));
    printf("<td>$%s</td></tr>", number_format($paymentInterest, 2));

    /* If balance not yet zero, recursively all amortizationTable() */
    if ($newBalance > 0) {
        $pNum++;
        amortizationTable($pNum, $periodicPayment, $balance, $monthlyInterest);
    } else {
        return 0;
    }
}

$balance = 10000.00;  /* Program begin here */
$interestRate = 0.0575; /* Loan interest rate */
$monthlyInterest = $interestRate / 12; /* Monthly interest rate */
$termLength = 5; // Term length of the loan, in years.
$paymentsPerYear = 3; // Number of payments per year.
$paymentNumber = 1; // Payment iteration
$totalPayments = $termLength * $paymentsPerYear; // Determine total number payments
$intCalc = 1 + $interestRate / $paymentsPerYear; // Determine interest component of periodic payment
$periodicPayment = $balance * pow($intCalc, $totalPayments) * ($intCalc - 1) / (pow($intCalc, $totalPayments) - 1); // Determin periodic payment
$periodicPayment = round($periodicPayment, 2); // Round periodic payment to two decimals

// Create table
echo "<table width='50%' aligin='center' border='1'>";
echo "
    <tr>
    <th>Payment Number></th><th>Balance</th>
    <th>Payment</th><th>Interest</th><th>Principal</th>
    <tr>";

// call recursive function
amortizationTable($paymentNumber, $periodicPayment, $balance, $monthlyInterest);

// close table
echo "</table>";

/* Jedi Zhou: the performance is lowest */