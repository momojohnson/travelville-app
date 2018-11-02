document.addEventListener('DOMContentLoaded', function () {
  let elems = document.querySelectorAll('.slider');
  let instances = M.Slider.init(elems, {
    indicators: false,
    height: 490
  });
});

document.addEventListener('DOMContentLoaded', function () {
  let elems = document.querySelectorAll('.materialboxed');
  let instances = M.Materialbox.init(elems, {
    inDuration: 275,
    outDuration: 200
  });
});
// side nav
document.addEventListener('DOMContentLoaded', function () {
  let elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems);
});
// Scrollspy 
document.addEventListener('DOMContentLoaded', function () {
  let elem = document.querySelectorAll('.scrollspy');
  M.ScrollSpy.init(elem, {
    'scrollOffset': 60
  });
})

// Autocomplete
document.addEventListener('DOMContentLoaded', function () {
  let elems = document.querySelector('.autocomplete');
  let instances = M.Autocomplete.init(elems, {
    data: {
      "Amalfi Coast, Italy": null,
      "Banff, Alberta": null,
      "Great Barrier Reef": null,
      "St. Lucia": null,
      "Bali, Indonesia": null,
      "Costa Rica": null,
      "British Virgin Islands": null,
      "Florence, Italy": null,
      "Rio de Janeiro": null,
      "Machu Picchu, Peru": null,
      "Hong Kong": null,
      "Maui, Hawaii": null,
      "Santorini, Greece": null,
      "Yosemite National Park, California": null





    }
  })
})