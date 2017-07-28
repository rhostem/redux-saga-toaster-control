export const fetchGithubRepo = search => {
  return fetch(
    `https://api.github.com/search/repositories?q=${search}&sort=stars&order=desc&limit=10`,
  ).then(res => res.json());
};
