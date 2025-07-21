const Form = () => {
  return (
    <form className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
      <select></select>
      <input type="text" placeholder="Item..." name="description" />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
