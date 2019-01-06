fetch("http://api.github.com/repos/thibaultjanbeyer/dragndrop")
  .then(res => res.json())
  .then(res => {
    document.querySelector("#dragndrop-gh-stars").innerHTML =
      res.stargazers_count;
  })
  .catch(err => console.log(err));
