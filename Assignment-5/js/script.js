(function() {

  var data = [{
      name: 'Emmet',
      description: "Emmet is the number one code snippet tool.",
      author: "EmmetIO",
      url: "https://atom.io/packages/emmet",
      downloads: 1662209,
      stars: 2533,
    },
    {
      name: "Atom-beautify",
      description: "The atom-beautify package will clean up your code",
      author: "Glavin001",
      url: "https://atom.io/packages/atom-beautify",
      downloads: 4208040,
      stars: 4541,
    },
    {
      name: "Project Manager",
      description: "Quick and easy access for switching between projects",
      author: "Danielbrodin",
      url: "https://atom.io/packages/project-manager",
      downloads: 789549,
      stars: 2082,
    },
    {
      name: "Highlight Selected",
      description: "Double click to highlight a word throughout the file",
      author: "richrace",
      url: "https://atom.io/packages/highlight-selected",
      downloads: 1049138,
      stars: 2744,
    },
    {
      name: "File Icons",
      description: "Displays icons based on file extension",
      author: "file-icons",
      url: "https://atom.io/packages/file-icons",
      downloads: 4315087,
      stars: 4960,
    },
    {
      name: "Pigments",
      description: "Displays colors in the file",
      author: "abe33",
      url: "https://atom.io/packages/pigments",
      downloads: 2135358,
      stars: 3336,
    },
    {
      name: "Minimap",
      description: "A preview of the full source code",
      author: "atom-minimap",
      url: "https://atom.io/packages/minimap",
      downloads: 4525920,
      stars: 5178,
    },
    {
      name: "Open-recent",
      description: "open recent files in current window",
      author: "Zren",
      url: "https://atom.io/packages/open-recent",
      downloads: 150867,
      stars: 665,
    },
    {
      name: "Auto-update-packages",
      description: "auto updates packages in atom",
      author: "yujinakayama",
      url: "https://atom.io/packages/auto-update-packages",
      downloads: 53352,
      stars: 220,
    },
    {
      name: "Autocomplete-paths",
      description: "adds path autocompletion depending on scope and prefix",
      author: "atom-community",
      url: "https://atom.io/packages/autocomplete-paths",
      downloads: 430407,
      stars: 1664,
    },

  ];

  function Package(data) {
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.getFormattedDownloads = function() {
      return this.downloads.toLocaleString();
    }
    this.getFormattedStars = function() {
      return this.stars.toLocaleString();
    }
  }
  // date
  var today = new Date();
  var dateEl = document.getElementById("date");
  dateEl.textContent = today.toDateString();
  // var elementNames = ["p1-name", "p1-description", "p1-author", "p1-downloads", "p1-stars",
  //   "p2-name", "p2-description", "p2-author", "p2-downloads", "p2-stars",
  //   "p3-name", "p3-description", "p3-author", "p3-downloads", "p3-stars",
  //   "p4-name", "p4-description", "p4-author", "p4-downloads", "p4-stars",
  //   "p5-name", "p5-description", "p5-author", "p5-downloads", "p5-stars",
  //   "p6-name", "p6-description", "p6-author", "p6-downloads", "p6-stars",
  //   "p7-name", "p7-description", "p7-author", "p7-downloads", "p7-stars",
  //   "p8-name", "p8-description", "p8-author", "p8-downloads", "p8-stars",
  //   "p9-name", "p9-description", "p9-author", "p9-downloads", "p9-stars",
  //   "p10-name", "p10-description", "p10-author", "p10-downloads", "p10-stars"
  // ];
  // var elementNames = [{
  //     name = "\"p1-name\"";
  //     description = "\"p1-description\"";
  //     author = "\"p1-author\"";
  //     downloads = "\"p1-downloads\"";
  //     stars = "\"p1-stars\"";
  //   },
  //   {
  //     name = "p2-name";
  //     description = "p2-description";
  //     author = "p2-author";
  //     downloads = "p2-downloads";
  //     stars = "p2-stars";
  //   },
  //   {
  //     name = "p3-name";
  //     description = "p3-description";
  //     author = "p3-author";
  //     downloads = "p3-downloads";
  //     stars = "p3-stars";
  //   },
  //   {
  //     name = "p4-name";
  //     description = "p4-description";
  //     author = "p4-author";
  //     downloads = "p4-downloads";
  //     stars = "p4-stars";
  //   },
  //   {
  //     name = "p5-name";
  //     description = "p5-description";
  //     author = "p5-author";
  //     downloads = "p5-downloads";
  //     stars = "p5-stars";
  //   },
  //   {
  //     name = "p6-name";
  //     description = "p6-description";
  //     author = "p6-author";
  //     downloads = "p6-downloads";
  //     stars = "p6-stars";
  //   },
  //   {
  //     name = "p7-name";
  //     description = "p7-description";
  //     author = "p7-author";
  //     downloads = "p7-downloads";
  //     stars = "p7-stars";
  //   },
  //   {
  //     name = "p8-name";
  //     description = "p8-description";
  //     author = "p8-author";
  //     downloads = "p8-downloads";
  //     stars = "p8-stars";
  //   },
  //   {
  //     name = "p9-name";
  //     description = "p9-description";
  //     author = "p9-author";
  //     downloads = "p9-downloads";
  //     stars = "p9-stars";
  //   },
  //   {
  //     name = "p10-name";
  //     description = "p10-description";
  //     author = "p10-author";
  //     downloads = "p10-downloads";
  //     stars = "p10-stars";
  //   },
  //
  // ];
  //
  // for (i = 0; i < data.length; i++) {
  //   for (j = 0; j < elementNames.length; j++) {
  //     name = document.getElementById(elementNames[j].name);
  //     name.textContent = data[i].name;
  //     document.getElementById(elementNames[j].description).innerHTML = data[i].description;
  //     document.getElementById(elementNames[j].author).innerHTML = data[i].author;
  //     document.getElementById(elementNames[j].downloads).innerHTML = data[i].downloads;
  //     document.getElementById(elementNames[j].stars).innerHTML = data[i].stars;
  //   }
  // }
  // document.getElementById(elementNames[0].name).innerHTML = data[0].name;
  //p1

  document.getElementById("p1-name").innerHTML = data[0].name;
  document.getElementById("p1-description").innerHTML = data[0].description;
  document.getElementById("p1-author").innerHTML = "Author: " + data[0].author;
  document.getElementById("p1-downloads").innerHTML = "Downloads: " + data[0].downloads;
  document.getElementById("p1-stars").innerHTML = "Stars: " + data[0].stars;
  document.getElementById("p1-link").innerHTML = data[0].url;
  //p2
  document.getElementById("p2-name").innerHTML = data[1].name;
  document.getElementById("p2-description").innerHTML = data[1].description;
  document.getElementById("p2-author").innerHTML = "Author: " + data[1].author;
  document.getElementById("p2-downloads").innerHTML = "Downloads: " + data[1].downloads;
  document.getElementById("p2-stars").innerHTML = "Stars: " + data[1].stars;
  document.getElementById("p2-link").innerHTML = data[1].url;
  //p3
  document.getElementById("p3-name").innerHTML = data[2].name;
  document.getElementById("p3-description").innerHTML = data[2].description;
  document.getElementById("p3-author").innerHTML = "Author: " + data[2].author;
  document.getElementById("p3-downloads").innerHTML = "Downloads: " + data[2].downloads;
  document.getElementById("p3-stars").innerHTML = "Stars: " + data[2].stars;
  document.getElementById("p3-link").innerHTML = data[2].url;
  //p4
  document.getElementById("p4-name").innerHTML = data[3].name;
  document.getElementById("p4-description").innerHTML = data[3].description;
  document.getElementById("p4-author").innerHTML = "Author: " + data[3].author;
  document.getElementById("p4-downloads").innerHTML = "Downloads: " + data[3].downloads;
  document.getElementById("p4-stars").innerHTML = "Stars: " + data[3].stars;
  document.getElementById("p4-link").innerHTML = data[3].url;
  //p5
  document.getElementById("p5-name").innerHTML = data[4].name;
  document.getElementById("p5-description").innerHTML = data[4].description;
  document.getElementById("p5-author").innerHTML = "Author: " + data[4].author;
  document.getElementById("p5-downloads").innerHTML = "Downloads: " + data[4].downloads;
  document.getElementById("p5-stars").innerHTML = "Stars: " + data[4].stars;
  document.getElementById("p5-link").innerHTML = data[4].url;
  //p6
  document.getElementById("p6-name").innerHTML = data[5].name;
  document.getElementById("p6-description").innerHTML = data[5].description;
  document.getElementById("p6-author").innerHTML = "Author: " + data[5].author;
  document.getElementById("p6-downloads").innerHTML = "Downloads: " + data[5].downloads;
  document.getElementById("p6-stars").innerHTML = "Stars: " + data[5].stars;
  document.getElementById("p6-link").innerHTML = data[5].url;
  //p7
  document.getElementById("p7-name").innerHTML = data[6].name;
  document.getElementById("p7-description").innerHTML = data[6].description;
  document.getElementById("p7-author").innerHTML = "Author: " + data[6].author;
  document.getElementById("p7-downloads").innerHTML = "Downloads: " + data[6].downloads;
  document.getElementById("p7-stars").innerHTML = "Stars: " + data[6].stars;
  document.getElementById("p7-link").innerHTML = data[6].url;
  //p8
  document.getElementById("p8-name").innerHTML = data[7].name;
  document.getElementById("p8-description").innerHTML = data[7].description;
  document.getElementById("p8-author").innerHTML = "Author: " + data[7].author;
  document.getElementById("p8-downloads").innerHTML = "Downloads: " + data[7].downloads;
  document.getElementById("p8-stars").innerHTML = "Stars: " + data[7].stars;
  document.getElementById("p8-link").innerHTML = data[7].url;
  //p9
  document.getElementById("p9-name").innerHTML = data[8].name;
  document.getElementById("p9-description").innerHTML = data[8].description;
  document.getElementById("p9-author").innerHTML = "Author: " + data[8].author;
  document.getElementById("p9-downloads").innerHTML = "Downloads: " + data[8].downloads;
  document.getElementById("p9-stars").innerHTML = "Stars: " + data[8].stars;
  document.getElementById("p9-link").innerHTML = data[8].url;
  //p10
  document.getElementById("p10-name").innerHTML = data[9].name;
  document.getElementById("p10-description").innerHTML = data[9].description;
  document.getElementById("p10-author").innerHTML = "Author: " + data[9].author;
  document.getElementById("p10-downloads").innerHTML = "Downloads: " + data[9].downloads;
  document.getElementById("p10-stars").innerHTML = "Stars: " + data[9].stars;
  document.getElementById("p10-link").innerHTML = data[9].url;
  //load Packages and write info to page
}());
