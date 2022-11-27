This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install deps and start the development server:
```bash
pnpm install
pnpm dev
```

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.

Some slugs idea to test the app:
* `lionel-andres-messi-cuccittini-2022-limited-44`
* `marco-verratti-2021-unique-1,lionel-andres-messi-cuccittini-2022-limited-44,hugo-lloris-2022-common-1437d069-595c-4378-a423-4b4af2aee2bb,aurelien-tchouameni-2022-rare-18,lyle-foster-2022-limited-113,ayase-ueda-2022-rare-48,lukas-nmecha-2022-limited-111,lynnt-audoor-2022-limited-70`
* `marco-verratti-2021-unique-1,lionel-andres-messi-cuccittini-2022-limited-44,hugo-lloris-2022-common-1437d069-595c-4378-a423-4b4af2aee2bb`

## Features


In addition to the requested features I took the remaining time I had to add a few of my own:
* You can reveal cards individually by clicking on them.
* You can preview the rarity of a card before the reveal by hovering it. 
### Part 4 answer

To generate a PNG I'll implement a button that'll use the library [html2canvas](https://html2canvas.hertzen.com/).

Then I think it would be a good idea to design a detailed view of a card so you can choose the one you want to export as PNG.

## Inspiration

For the design of the cards I tried replicating the basketball one you're using.

I used `Low Poly Grid` from https://app.haikei.app/ to generate the svgs used on the background of the cards.

For the color schemes I inspired myself from rpg games items rarity.

## Ideas for next steps

If I had more time this is the things I would have liked to do:
* Use something else than the `tailwind-ui` default font family.
* Design a close view of a card and try to implement some animation from [this website](https://deck-24abcd.netlify.app/?fbclid=IwAR3Bv8yj0ZtsxVUqxiENnI28SDU1mJ4hoL9rH5mDlUm-7V_MiEvplJAVWtw).
* Pack opening simulator with random cards rarity.