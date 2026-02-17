export type todos = {
  title: string;
  details: string;
}

interface Props {
  title: string;
  settitle: React.Dispatch<React.SetStateAction<string>>;
  details: string;
  setdetails: React.Dispatch<React.SetStateAction<string>>;
  todos: todos[];
  settodos: React.Dispatch<React.SetStateAction<todos[]>>;
}

const InputField = ({title, settitle, details, setdetails, todos, settodos}: Props) => {
  

  function submitForm(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    const newTodo = {
      title: title,
      details: details
    }

    if(title === "" || details === "") {
      console.error("Please fill in all the fields");
      return;
    }
    else{
      const updatedTodos = [...todos, newTodo];
      settodos(updatedTodos);
    }
    settitle("");
    setdetails("");

    console.log(todos);
  }

  return (
    <>
      <form className="form">
        <p id="title">Title: </p>
        <input type="text" placeholder='Enter Title' className="title-input" value={title} onChange={(event)=>{
          settitle(event.target.value)
        }} />
        <p id="details">Details: </p>
        <input placeholder='Enter Details' className="details-input" value={details} onChange={(event)=>{
          setdetails(event.target.value)
        }} />
        <button type='submit' className='submit-button' onClick={(e)=>{submitForm(e)}}>Submit</button>
      </form>
    </>
  )
}

export default InputField