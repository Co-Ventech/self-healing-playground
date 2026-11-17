# Real-world suite: SauceDemo as problem_user

Source: https://github.com/ecureuill/saucedemo-playwright (commit 2c82592), unchanged except the "success" login in
`tests/fixtures/data/users.json`, which is `problem_user` instead of `standard_user`. SauceDemo plants bugs for that
user; they are visible in the app's source (https://github.com/saucelabs/sample-app-web, `isProblemUser()`):
sort does nothing, every product image is the same broken image, product and cart links open the wrong product,
add to cart fails for some products and remove fails for others, About links to a 404, the checkout last name
overwrites the first name, checkout totals are doubled, and the cart is not cleared after the order.

Expected outcome for the healing agent: failures caused by these bugs are real application defects and must be
reported, not "healed".
