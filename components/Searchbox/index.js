import "./index.scss";

const Searchbox = ({tags, addedTags, onChange}) => {
  const [search, setSearch] = React.useState("");
  const [isFocused, setIsFocues] = React.useState(false);
  let searchContainer = React.useRef();

  const getTags = () =>
    tags.filter(
      tag =>
        tag.toUpperCase().includes(search.toUpperCase()) &&
        !addedTags.includes(tag)
    );

  const getAddedTags = () => {
    const width = searchContainer.current
      ? searchContainer.current.clientWidth
      : 600;
    return addedTags.slice(0, width > 550 ? 3 : 2);
  };
  const getLeftoverTagNum = () => {
    const num = addedTags.length - getAddedTags().length;
    if (num === 0) return <React.Fragment />;

    return <span className="leftovers">{num}</span>;
  };

  const addTag = tag => {
    onChange([tag, ...addedTags]);
    setSearch("");
  };

  const removeTag = tag => {
    onChange(addedTags.filter(addedTag => addedTag !== tag));
  };

  const handleKeyDown = e => {
    if (e.key === "Enter" && getTags()[0]) {
      addTag(getTags()[0]);
    } else if (e.key === "Backspace" && !search) {
      removeTag(addedTags[addedTags.length - 1]);
    }
  };

  const pressOutside = e => {
    if (!searchContainer.current) return;
    if (searchContainer.current.contains(e.target)) return;
    setIsFocues(false);
  };

  React.useEffect(() => {
    console.log(searchContainer);
    document.addEventListener("mousedown", pressOutside, false);
    document.addEventListener("touchstart", pressOutside, false);
    return () => {
      document.removeEventListener("mousedown", pressOutside, false);
      document.removeEventListener("touchstart", pressOutside, false);
    };
  }, []);

  return (
    <div
      className="search-container"
      ref={searchContainer}
      onClick={() => setIsFocues(true)}>
      <label htmlFor="search-box">Search</label>
      <div className="input-row">
        <input
          id="search-box"
          type="text"
          placeholder="Start typing..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          onFocus={() => setIsFocues(true)}
          onBlur={() => setIsFocues(false)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
        />
        <div className="added-tags">
          {getAddedTags().map(tag => (
            <span key={tag}>
              <span>{tag}</span>
              <span className="remove-btn" onClick={() => removeTag(tag)}>
                <span>x</span>
              </span>
            </span>
          ))}
          {getLeftoverTagNum()}
        </div>
      </div>
      <div className={"tags-container" + (isFocused ? " open" : "")}>
        {getTags().map(tag => (
          <div onClick={() => addTag(tag)} key={tag}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Searchbox;
