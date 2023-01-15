import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import {FormControlLabel,Radio,RadioGroup,FormLabel} from "@mui/material"

const GraphSwitch = (props) => {
  const [index, setIndex] = props.states;
  const onChange = (event) => {
    setIndex(event.target.value);
  };
  
  return (  
    <FormControl>
      <FormLabel>{props.label}</FormLabel>
      <RadioGroup row value={index} onChange={onChange}>  
        {props.options.values.map((value,i) => {
          return <FormControlLabel key={value} value={value} control={<Radio />} label={i+1} />        
        })}
      </RadioGroup>
    </FormControl>
  );
}

export default GraphSwitch;
