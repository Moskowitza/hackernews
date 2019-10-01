// Fucntion that reduces the returned object to just the values we want
// the default is set to an empty object
const selectFields = ({ id, by, url, time, title } = {}) => ({
  id,
  by,
  url,
  time,
  title
});

export default selectFields;
