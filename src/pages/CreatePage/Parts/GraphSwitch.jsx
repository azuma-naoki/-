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
    // <Box sx={{ minWidth: 120 }}>
    //   <FormControl fullWidth>
    //     <InputLabel>{props.label}</InputLabel>
    //     <Select value={index} label={props.label} onChange={onChange}>
    //       {props.options.values.map((value,i) => {
    //         return <MenuItem value={value} key={value}>{props.options.displays[i]}</MenuItem>
    //       })}
    //     </Select>
    //   </FormControl>
    // </Box>
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">グラフ</FormLabel>
      <RadioGroup row name="row-radio-buttons-group" value={index} label={props.label} onChange={onChange}>  
        {props.options.values.map((value,i) => {
          return <FormControlLabel value={value} control={<Radio />} label={i+1} />        
        })}
      </RadioGroup>
    </FormControl>
  );
}

export default GraphSwitch;
