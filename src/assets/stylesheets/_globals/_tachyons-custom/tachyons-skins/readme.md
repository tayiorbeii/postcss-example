# tachyons-skins 4.0.0

Performance based css module.

#### Stats

1115 | 111 | 111
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev tachyons-skins
```

Learn more about using css installed with npm:
* https://webpack.github.io/docs/stylesheets.html
* https://github.com/defunctzombie/npm-css

#### With Git

http:
```
git clone https://github.com/tachyons-css/tachyons-skins
```

ssh:
```
git clone git@github.com:tachyons-css/tachyons-skins.git
```

## Usage

#### Using with [PostCSS](https://github.com/postcss/postcss)

Import the css module

```css
@import "tachyons-skins";
```

Then process the CSS using the [`tachyons-cli`](https://github.com/tachyons-css/tachyons-cli)

```sh
$ npm i -g tachyons-cli
$ tachyons path/to/css-file.css > dist/t.css
```

#### Using the CSS

##### CDN
The easiest and most simple way to use the css is to use the cdn hosted version. Include it in the head of your html with:

```
<link rel="stylesheet" href="http://npmcdn.com/tachyons-skins@4.0.0/css/tachyons-skins.min.css" />
```

##### Locally
The built CSS is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/tachyons-skins">
```

#### Development

The source CSS files can be found in the `src` directory.
Running `$ npm start` will process the source CSS and place the built CSS in the `css` directory.

## The CSS

```css
/*

   Tachyons
   COLOR VARIABLES

   Grayscale
   - Solids
   - Transparencies
   Colors

*/
/*

   SKINS
   Docs: http://tachyons.io/docs/themes/skins/

   Classes for setting foreground and background colors on elements.
   If you haven't declared a border color, but set border on an element, it will 
   be set to the current text color. 

*/
/* Text colors */
.black-90 { color: rgba( 0, 0, 0, .9 ); }
.black-80 { color: rgba( 0, 0, 0, .8 ); }
.black-70 { color: rgba( 0, 0, 0, .7 ); }
.black-60 { color: rgba( 0, 0, 0, .6 ); }
.black-50 { color: rgba( 0, 0, 0, .5 ); }
.black-40 { color: rgba( 0, 0, 0, .4 ); }
.black-30 { color: rgba( 0, 0, 0, .3 ); }
.black-20 { color: rgba( 0, 0, 0, .2 ); }
.black-10 { color: rgba( 0, 0, 0, .1 ); }
.black-05 { color: rgba( 0, 0, 0, .05 ); }
.white-90 { color: rgba( 255, 255, 255, .9 ); }
.white-80 { color: rgba( 255, 255, 255, .8 ); }
.white-70 { color: rgba( 255, 255, 255, .7 ); }
.white-60 { color: rgba( 255, 255, 255, .6 ); }
.white-50 { color: rgba( 255, 255, 255, .5 ); }
.white-40 { color: rgba( 255, 255, 255, .4 ); }
.white-30 { color: rgba( 255, 255, 255, .3 ); }
.white-20 { color: rgba( 255, 255, 255, .2 ); }
.white-10 { color: rgba( 255, 255, 255, .1 ); }
.black { color: #000; }
.near-black { color: #111; }
.dark-gray { color: #333; }
.mid-gray { color: #555; }
.gray { color: #777; }
.silver { color: #999; }
.light-silver { color: #aaa; }
.moon-gray { color: #ccc; }
.light-gray { color: #eee; }
.near-white { color: #f4f4f4; }
.white { color: #fff; }
.dark-red { color: #e7040f; }
.red { color: #ff4136; }
.light-red { color: #ff725c; }
.orange { color: #ff6300; }
.gold { color: #ffb700; }
.yellow { color: #ffd700; }
.light-yellow { color: #fbf1a9; }
.purple { color: #5e2ca5; }
.light-purple { color: #a463f2; }
.dark-pink { color: #d5008f; }
.hot-pink { color: #ff41b4; }
.pink { color: #ff80cc; }
.light-pink { color: #ffa3d7; }
.dark-green { color: #137752; }
.green { color: #19a974; }
.light-green { color: #9eebcf; }
.navy { color: #001b44; }
.dark-blue { color: #00449e; }
.blue { color: #357edd; }
.light-blue { color: #96ccff; }
.lightest-blue { color: #cdecff; }
.washed-blue { color: #f6fffe; }
.washed-green { color: #e8fdf5; }
.washed-yellow { color: #fffceb; }
.washed-red { color: #ffdfdf; }
.bg-black-90 { background-color: rgba( 0, 0, 0, .9 ); }
.bg-black-80 { background-color: rgba( 0, 0, 0, .8 ); }
.bg-black-70 { background-color: rgba( 0, 0, 0, .7 ); }
.bg-black-60 { background-color: rgba( 0, 0, 0, .6 ); }
.bg-black-50 { background-color: rgba( 0, 0, 0, .5 ); }
.bg-black-40 { background-color: rgba( 0, 0, 0, .4 ); }
.bg-black-30 { background-color: rgba( 0, 0, 0, .3 ); }
.bg-black-20 { background-color: rgba( 0, 0, 0, .2 ); }
.bg-black-10 { background-color: rgba( 0, 0, 0, .1 ); }
.bg-black-05 { background-color: rgba( 0, 0, 0, .05 ); }
.bg-white-90 { background-color: rgba( 255, 255, 255, .9 ); }
.bg-white-80 { background-color: rgba( 255, 255, 255, .8 ); }
.bg-white-70 { background-color: rgba( 255, 255, 255, .7 ); }
.bg-white-60 { background-color: rgba( 255, 255, 255, .6 ); }
.bg-white-50 { background-color: rgba( 255, 255, 255, .5 ); }
.bg-white-40 { background-color: rgba( 255, 255, 255, .4 ); }
.bg-white-30 { background-color: rgba( 255, 255, 255, .3 ); }
.bg-white-20 { background-color: rgba( 255, 255, 255, .2 ); }
.bg-white-10 { background-color: rgba( 255, 255, 255, .1 ); }
/* Background colors */
.bg-black { background-color: #000; }
.bg-near-black { background-color: #111; }
.bg-dark-gray { background-color: #333; }
.bg-mid-gray { background-color: #555; }
.bg-gray { background-color: #777; }
.bg-silver { background-color: #999; }
.bg-light-silver { background-color: #aaa; }
.bg-moon-gray { background-color: #ccc; }
.bg-light-gray { background-color: #eee; }
.bg-near-white { background-color: #f4f4f4; }
.bg-white { background-color: #fff; }
.bg-transparent { background-color: transparent; }
.bg-dark-red { background-color: #e7040f; }
.bg-red { background-color: #ff4136; }
.bg-light-red { background-color: #ff725c; }
.bg-orange { background-color: #ff6300; }
.bg-gold { background-color: #ffb700; }
.bg-yellow { background-color: #ffd700; }
.bg-light-yellow { background-color: #fbf1a9; }
.bg-purple { background-color: #5e2ca5; }
.bg-light-purple { background-color: #a463f2; }
.bg-dark-pink { background-color: #d5008f; }
.bg-hot-pink { background-color: #ff41b4; }
.bg-pink { background-color: #ff80cc; }
.bg-light-pink { background-color: #ffa3d7; }
.bg-dark-green { background-color: #137752; }
.bg-green { background-color: #19a974; }
.bg-light-green { background-color: #9eebcf; }
.bg-navy { background-color: #001b44; }
.bg-dark-blue { background-color: #00449e; }
.bg-blue { background-color: #357edd; }
.bg-light-blue { background-color: #96ccff; }
.bg-lightest-blue { background-color: #cdecff; }
.bg-washed-blue { background-color: #f6fffe; }
.bg-washed-green { background-color: #e8fdf5; }
.bg-washed-yellow { background-color: #fffceb; }
.bg-washed-red { background-color: #ffdfdf; }
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Authors

* [mrmrs](http://mrmrs.io)
* [johno](http://johnotander.com)

## License

ISC

