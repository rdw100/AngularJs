# AngularJs
This AngularJS demonstration project was created using Visual Studio Code 1.48.0, AngularJS v1.8.0, HTML, & CSS. The objective is to demonstrate a responsive layout without reloading the page using a Javascript-based open-source front-end web framework to develop a single-page application.

![Loan Calculator GIF](https://github.com/rdw100/AngularJs/blob/master/assets/images/FVmR3KtYGl.gif)

Monthly mortgage payments are calculated using the following formula:

![Monthly Payments](https://latex.codecogs.com/gif.latex?%5CLARGE%20PMT%3D%5Cfrac%7BPVi%281&plus;i%29%5En%7D%7B%281&plus;i%29%5En-1%7D)

- n is the term in number of months
- PMT is the monthly payment
- i is the monthly interest rate as a decimal (interest rate per year divided by 100 divided by 12
- PV is the mortgage amount (present value)

This can answer what your monthly mortgage payments on your home based on term of your mortgage, interest rate, and mortgage loan amount.

---

Loan amounts are calculated using the following formula:

![Affordable Loan](https://latex.codecogs.com/gif.latex?%5CLARGE%20P_%7B0%7D%3D%5Cfrac%7Bd%281-%281&plus;%5Cfrac%7Br%7D%7Bk%7D%29%5E%7B-Nk%7D%29%7D%7B%28%5Cfrac%7Br%7D%7Bk%7D%29%7D)

- P0 is the amount/balance/principal in the account at the beginning
- d is your loan payment
- r is the annual interest rate
- k is the number of compounding periods per year
- N is the length of the loan in years

This can answer what you can afford with $300 payment at 3% interest for 60 months.