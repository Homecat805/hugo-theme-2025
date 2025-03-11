# Hugo Theme 2025

2025 is a simple-structured, easy-to-use HUGO theme for personal websites.

## Demo

Two ways to see the demo：

- Visit https://2025.genway.com.cn
- View demo by clone repository from Github.

```
git clone https://github.com/homecat805/hugo-theme-walden.git hugo-theme-walden
cd exampleSite
hugo server --themesDir ../..
```
## Quick start

Create the website root directory mysite and perform git initialization, then install the theme as a module to `mysite/themes`, and copy all the files in `exampleSite` in theme directory to the root directory of the website.

```
mkdir mysite
cd mysite
git init
git branch -m main
git submodule add git@github.com:Homecat805/hugo-theme-2025.git themes/hugo-theme-2025
cp -rf themes/hugo-theme-2025/exampleSite/* ./
hugo server
```

## License
2025 is licensed under the MIT，Check the [LICENSE](https://github.com/Homecat805/hugo-theme-2025?tab=MIT-1-ov-file#readme) file for details.
