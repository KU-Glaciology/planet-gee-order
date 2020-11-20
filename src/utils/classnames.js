const classnames = (opts) => {
  return Object.keys(opts)
    .map((key) => {
      return !!opts[key] ? key : "";
    })
    .join(" ");
};

export default classnames;
