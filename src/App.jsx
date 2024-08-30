import { useState } from 'react'
import './App.css'
import { Button, Stack, TextField } from '@mui/material';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [add, setAdd] = useState(0);

  const calcSum = (e) =>{
    e.preventDefault();
    console.log(e);
    if(num1 == 0 || num2 == 0 || num3 == 0){
      alert("please enter prt values ")
    }
    else{
      let Add = parseInt(num1) * parseInt(num2) * parseInt(num3) /100;
      setAdd(parseInt(Add));
    }
  }

  const handleClick = (e) => {
    setAdd(0);
    window.location.reload();
  }

  return (
    <div className='app'>
      <div className='container'>
        <div className='headin_text'>
          <h1 className='headin_one'>Simple Calculator</h1>
          <p className='headin_two'>Calculate your Simple Interest</p>
        </div>
        <div className='total_amount_card'>
          <div className='card_text'>
            <h3 className='total_amount_heading'>₹ {add}</h3>
            <p className='total_amount_para'>Total Interest</p>
          </div>
        </div>

        <form onClick={calcSum}>
          <div className='input_field'>
            <TextField type='number' value={num1 || ""} onChange={e=>{setNum1(e.target.value)}}  id="outlined-basic" variant="outlined" label="₹ Principal amount"></TextField>
          </div>
          <div className='input_field'>
            <TextField type='number' value={num2 || ""} onChange={e=>{setNum2(e.target.value)}}  id="outlined-basic" variant="outlined" label="Rate of interest (p.a) %"></TextField>
          </div>
          <div className='input_field'>
            <TextField type='number' value={num3 || ""} onChange={e=>{setNum3(e.target.value)}}  id="outlined-basic" variant="outlined" label="Time period ( Yr )"></TextField>
          </div>
          <div className='button_collection'>
            <Stack spacing={2} direction="row">
              <Button type='submit' className='btn_one' style={{backgroundColor: 'black'}} variant='contained' >Calculate</Button>
              <Button className='btn_one'  onClick={handleClick}  variant="outlined">Reset</Button>
            </Stack> 
          </div>
        </form>

      </div>
    </div>
  )
}

export default App