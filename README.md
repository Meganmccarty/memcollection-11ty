# MEMCollection

This is the website for my personal entomology collection. It started as a way for me to view any specimen in my collection, along with its associated data, but its scope has expanded to include a variety of other features, like:
* A label generator, negating the need for Excel spreadsheets or specialized specimen database software (like [Specify EZDB](https://www.specifysoftware.org/))
* Specimen maps, displaying where each specimen was collected (powered by the wonderful [Leaflet.js library](https://leafletjs.com/))
* Species pages, for sharing my collection of live insect photos
* Trip pages, for documenting my collecting adventures

I chose to build this site using [Eleventy](https://www.11ty.dev/), a static site generator (SSG). While it may not be the best choice for a website powered by an API, I got tired of working with client-side JavaScript libraries/frameworks. And while many JS frameworks are now shifting to server-side rendering (e.g., Next.js), I just wanted something simple. Something fast. And Eleventy fit that perfectly for me.

## Getting Started
Given that this site relies on my custom API (see the messy [backend repo here](https://github.com/Meganmccarty/memcollection-django)), this repo will probably be of limited use to everyone except me. However, if you are interested in playing around with this ~~hot mess of a~~ repo, just click the "Clone" button to copy the code onto your machine. Alternatively, you can look and play around with the [Eleventy Starter Template](https://github.com/Meganmccarty/eleventy-starter) I created, which I used to start this project.

Once you have a local copy, you can use Docker to build an image and spin up a container. Side note: Yes, I know Docker may be overkill for an SSG, but my 9-year-old laptop is running an old macOS version that cannot run the latest version of Node.js. Using Docker makes my laptop think it's younger, and I get to keep my outdated 32-bit apps (like [Specify EZDB](https://www.specifysoftware.org/)).

To get the Docker container spun up, just run:
```
make build-run
```
The site should be live at http://localhost:8080/. If you want to kill the container, just use `Ctrl-C`. You can restart the container by running `make start`.

If you want to run any of the other scripts in `package.json`, you simply use `make exec npm run [COMMAND]` to execute the command using Docker.

### Troubleshooting
If not using Docker, you may get this error when attempting to run `npm start`:
```
sh: ~/eleventy-starter/node_modules/.bin/esbuild: cannot execute binary file
```
Just run `npm rebuild esbuild` to resolve the issue. (The Makefile already includes this command, so this error shouldn't occur when using Docker.)

## A Note About the Icons
Most of the icons used on the site were taken directly from (or slightly modified from) [UXWing](https://uxwing.com/). All of their icons that I used are located within the `/src/public/uxwing` directory. While their [license](https://uxwing.com/license/) doesn't require attribution, I feel it's important to give credit where credit is due. :)