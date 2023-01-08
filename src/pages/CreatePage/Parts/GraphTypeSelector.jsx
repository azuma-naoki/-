import {useDispatch} from "react-redux";
import {write,resetState} from "../store/modules/graphData";
import {initialStates} from "../const";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const GraphTypeSelector = (props) => {
    const dispatch = useDispatch();
    const [graphType, setGraphType] = props.graphTypeState;
    const onChange = (event) => {
        setGraphType(event.target.value);
        const action = resetState({
          initialState:initialStates[event.target.value],
        });
        dispatch(action);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel>{props.label}</InputLabel>
            <Select value={graphType} label={props.label} onChange={onChange}>
              {props.options.values.map((value,index) => {
                return <MenuItem value={value} key={value}>{props.options.displays[index]}</MenuItem>
              })}
            </Select>
          </FormControl>
        </Box>
      );
}

export default GraphTypeSelector
