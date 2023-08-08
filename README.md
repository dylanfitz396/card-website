This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## View Live Website:
https://card-website-eight.vercel.app/home

## Running Locally
```bash
npm run dev
```

Open [http://localhost:3000/home](http://localhost:3000/home) with your browser to see the result.

## Tech Stack
I've opted to use:
- React: Common framework for building responsive front end applications. I opted to use React because I have experience with it and Moonpig also uses it.
- Next.js: Chosen for it's server side rendering by default, which improves SEO of the website which is very important for any consumer facing application. Also for it's Image handling. Next.js has an Image tage which allows both lazy loading of images and does not result in Cumulative Layout Shift when loading a lot of images on screen, resulting in a smooth, performant experience.
- Material UI: I opted to use Google's Material UI component library to allow for quick use of styled components. This proved very useful when dealing with accessibility for components out of the box, and also having easy to use tags to display different views on various size devices.
- Typescript: For type safety. Especially important when handling large objects with many different fields from data fetching responses
- ES Lint and Prettier: To keep my codebase clean and standardised.

## Improvements
If I had more time to invest in this, I would:
- Add a search bar to enable searching of the many cards that return in our initial fetch.
- Paginate the displayed cards to be 10 per page.
- Clean up the UX. I would have loved to have spent more time tailoring the CSS so that the display was a bit cleaner. It's not bad, but could definitely be improved.
- Testing: Although there isn't much logic in this codebase, it would still be good to add a few tests in here. Examples of tests would be some for accessibility, navigation, rendered components with expected properties, etc.
