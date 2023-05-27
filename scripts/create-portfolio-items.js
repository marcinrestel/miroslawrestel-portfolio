const fs = require('fs');

let fileContent = 'angular' +
  '.module(\'app\')' +
  '.constant(\'PORTFOLIO_ITEMS\', ';

const portfolioItems = [];

const folders = fs.readdirSync('./src/img/portfolio-items');
folders.forEach(eachFolder => {
  const folderContent = fs.readdirSync('./src/img/portfolio-items/' + eachFolder);
  const hasResolutionsFolders = folderContent.every(eachFolderContentElement => !isNaN(Number(eachFolderContentElement)));
  if (hasResolutionsFolders) {
    const sortedFolderContent = folderContent.sort((a, b) => Number(a) - Number(b));
    const lowerResolutionFolder = sortedFolderContent[0];
    const higherResolutionFolder = sortedFolderContent[1];

    const lowerResolutonItems = fs.readdirSync(`./src/img/portfolio-items/${eachFolder}/${lowerResolutionFolder}`)
      .sort(sortPortfolioItems);
    const higherResolutonItems = fs.readdirSync(`./src/img/portfolio-items/${eachFolder}/${higherResolutionFolder}`)
      .sort(sortPortfolioItems);

    lowerResolutonItems.forEach((element, index) => portfolioItems.push({
      portfolioItemImage: `img/portfolio-items/${eachFolder}/${lowerResolutionFolder}/${lowerResolutonItems[index]}`,
      portfolioItemImageHQ: `img/portfolio-items/${eachFolder}/${higherResolutionFolder}/${higherResolutonItems[index]}`,
      type: eachFolder.replace(/^\(\d+\) /, '')
    }));
  } else {
    folderContent.forEach(eachFolderElement => portfolioItems.push({
      portfolioItemImage: `img/portfolio-items/${eachFolder}/${eachFolderElement}`,
      portfolioItemImageHQ: `img/portfolio-items/${eachFolder}/${eachFolderElement}`,
      type: eachFolder.replace(/^\(\d+\) /, '')
    }));
  }
});

fileContent += JSON.stringify(portfolioItems) + ');';

console.log(portfolioItems);

fs.writeFile('./src/portfolio-items.js', fileContent, err => {
  if (err) {
    throw err;
  }
  console.log('portfolio-items.json successfully updated!');
});

function sortPortfolioItems(a, b) {
  return Number(a.match(/^\(\d+\)/)[0].replace('(', '').replace(')', '')) - Number(b.match(/^\(\d+\)/)[0].replace('(', '').replace(')', ''))
}
