fetch("//api.github.com/repos/thibaultjanbeyer/dragselect")
  .then(res => res.json())
  .then(res => {
    document.querySelector("#dragselect-gh-stars").firstChild.innerHTML =
      res.stargazers_count;
  })
  .catch(err => console.log(err));
