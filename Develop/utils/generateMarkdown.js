// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseInfo) {
  if(licenseInfo === 'no license'){
    return '';
  }
  return `![license](https://img.shields.io/badge/License-${licenseInfo}-blue)`;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseInfo) {
  if(licenseInfo === 'n/a'){
    return '';
  }
  switch(licenseInfo){
    case 'MIT': 
      return `[${licenseInfo}]('https://choosealicense.com/licenses/mit/')
      A short and simple permissive license with conditions only requiring preservation of 
      copyright and license notices. Licensed works, modifications, and larger works may be 
      distributed under different terms and without source code.`;
    case 'GNU':
      return `[${licenseInfo}]('https://choosealicense.com/licenses/gpl-3.0/')
      Permissions of this strong copyleft license are conditioned on making available complete 
      source code of licensed works and modifications, which include larger works using a 
      licensed work, under the same license. Copyright and license notices must be preserved. 
      Contributors provide an express grant of patent rights.`;
    case 'Mozilla':
      return `[${licenseInfo}]('https://choosealicense.com/licenses/mpl-2.0/')
      Permissions of this weak copyleft license are conditioned on making available source code 
      of licensed files and modifications of those files under the same license (or in certain cases, 
      one of the GNU licenses). Copyright and license notices must be preserved. 
      Contributors provide an express grant of patent rights. However, a larger work using the 
      licensed work may be distributed under different terms and without source code for files 
      added in the larger work.`;    
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseInfo) {
  if (licenseInfo === 'n/a'){
    return '';
  }
  return `## License`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return`
  # ${data.projectTitle}

  ## Description
  ${data.projectDescription}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributions

  ${data.contributions}

  ${renderLicenseSection(data.licenseInfo)}
  ${renderLicenseBadge(data.licenseInfo)}
  ${renderLicenseLink(data.licenseInfo)}
  

  ## Contact

  [Github profile page](www.github.com/${data.githubAccount})
  `;
}

module.exports = generateMarkdown;
