export type todos = {
  title: string;
  details: string;
  lastdate: string;
  remainingdays?: number;
}

interface Props {
  title: string;
  settitle: React.Dispatch<React.SetStateAction<string>>;
  details: string;
  setdetails: React.Dispatch<React.SetStateAction<string>>;
  lastdate: string;
  setlastdate: React.Dispatch<React.SetStateAction<string>>;
  remainingdays: number;
  setremainingdays: React.Dispatch<React.SetStateAction<number>>;
  todos: todos[];
  settodos: React.Dispatch<React.SetStateAction<todos[]>>;
}

const InputField = ({title, settitle, details, setdetails, lastdate, setlastdate, remainingdays, setremainingdays, todos, settodos}: Props) => {
 
  function getTodaysDate(): string {
    const today: Date = new Date();
    const date: string = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    return date;
  }

  function calcRemainingDays(lastdate: string): number {
    const today:string = getTodaysDate();
    let remainingdays = Date.parse(lastdate) - Date.parse(today);  
    remainingdays = Math.floor(remainingdays / (1000 * 60 * 60 * 24));
    return remainingdays;
  }
    
  function submitForm(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    const newTodo: todos = {
      title: title,
      details: details,
      lastdate: lastdate,
      remainingdays: remainingdays
    }

    if(title === "" || details === "" || lastdate === "") {
      console.error("Please fill in all the fields");
      return;
    }
    else{

      const updatedTodos: todos[] = [...todos, newTodo];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      settodos(updatedTodos);   
    }

    settitle("");
    setdetails("");
    setlastdate("");
    
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
        <p id="date">DATE: </p>
        <input type="date" className="lastdate-input" value={lastdate} onChange={(event)=>{
          setlastdate(event.target.value);
          setremainingdays(calcRemainingDays(event.target.value));
        }} />
        <button type='submit' className='submit-button' onClick={(e)=>{submitForm(e)}}>Submit</button>
      </form>
    </>
  )
}

export default InputField