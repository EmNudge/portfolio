import "./index.scss";

const Searchbox = ({tags, addedTags, onChange}) => {
  const [search, setSearch] = React.useState("");
  const [isFocused, setIsFocues] = React.useState(false);

  const getTags = () => {
    return tags.filter(
      tag =>
        tag.toUpperCase().includes(search.toUpperCase()) &&
        !addedTags.includes(tag)
    );
  };

  const addTag = tag => {
    onChange([tag, ...addedTags]);
    setSearch("");
  };

  const removeTag = tag => {
    onChange(addedTags.filter(addedTag => addedTag !== tag));
  };

  const handleKeyDown = e => {
    if (e.key === "Enter") addTag(getTags()[0]);
    if (e.key === "Backspace") removeTag(addedTags[addedTags.length - 1]);
  };

  const handleTagClick = tag => {
    console.log("THING CLICKED");
    setIsFocues(true);
    addTag(tag);
  };

  return (
    <div className="search-container">
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
          {addedTags.map(tag => (
            <span key={tag}>
              <span>{tag}</span>
              <span className="remove-btn" onClick={() => removeTag(tag)}>
                <span>x</span>
              </span>
            </span>
          ))}
        </div>
      </div>
      <div className={"tags-container" + (isFocused ? " open" : "")}>
        {getTags().map(tag => (
          <div onClick={() => handleTagClick(tag)} key={tag}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Searchbox;
