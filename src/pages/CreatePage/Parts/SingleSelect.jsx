import {useState} from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useDispatch} from "react-redux";
import {write} from "../store/modules/graphData";

const SingleSelect = (props) => {
  const [age, setAge] = useState("");
  const dispatch = useDispatch();
  const onChange = (event) => {
    setAge(event.target.value);
    const action = write({        
        propertyName:props.val, 
        index:props.index,
        newValue: event.target.value,
    });
    dispatch(action);
  };
  
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>{props.label}</InputLabel>
        <Select
          value={age}
          label={props.label}
          onChange={onChange}
        >
          {props.options.values.map((value,index) => {
            return <MenuItem value={value} key={value}>{props.options.displays[index]}</MenuItem>
          })}
        </Select>
      </FormControl>
    </Box>
  );
}

export default SingleSelect;