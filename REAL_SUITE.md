# Real-world suite: Toolshop (with bugs)

Source: https://github.com/playwrightsolutions/playwright-practicesoftwaretesting.com (commit 255ec13), unchanged except
`.env`, which points the suite at the Toolshop build with planted bugs:
https://with-bugs.practicesoftwaretesting.com (API: https://api-with-bugs.practicesoftwaretesting.com).

The planted bugs are listed by the site's authors:
https://github.com/testsmith-io/practice-software-testing/blob/main/docs/sprints/sprint5-with-bugs.md

Expected outcome for the healing agent: failures caused by these planted bugs are real application defects and must be
reported, not "healed". The with-bugs build also lacks some features (cart page, social login, TOTP).
