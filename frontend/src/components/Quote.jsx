function Quote(props) {
  return (
    <div className="bg-yellow-400 p-[1rem] w-max">
      <div>{props.data.author}</div>
      <hr className="border-b-[1px] border-black" />
      <div>{props.data.category}</div>
      <hr className="border-b-[1px] border-black" />
      <div>{props.data.quote}</div>
    </div>
  );
}

export default Quote;
