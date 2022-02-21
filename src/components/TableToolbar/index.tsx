import React from 'react';
import moment from 'moment';
import DateAdapter from '@mui/lab/AdapterMoment';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';

import { IBook } from '../../store/types';
import { Wrapper } from './styles';

interface ITableToolbarProps {
  numSelected: number;
  startTime: moment.Moment | null;
  endTime: moment.Moment | null;
  setStartTime: (prev: moment.Moment | null) => void;
  setEndTime: (prev: moment.Moment | null) => void;
  setFilterBy: (prev: keyof Omit<IBook, 'abbrev' | 'chapters'> | '') => void;
  setFilterValue: (prev: string) => void;
}
const EnhancedTableToolbar: React.FC<ITableToolbarProps> = ({
  setStartTime,
  setEndTime,
  startTime,
  endTime,
  setFilterBy,
  setFilterValue,
}) => {
  const [group, setGroup] = React.useState('');
  const handleChangeStartDate = (newValue: moment.Moment | null) => {
    if (newValue) {
      setStartTime(newValue);
    }
  };
  const handleChangeEndDate = (newValue: moment.Moment | null) => {
    setEndTime(newValue);
  };

  const handleChangeFilterBy =
    (inputLabel: keyof Omit<IBook, 'abbrev' | 'chapters'> | '') =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>) => {
      const element = e?.target as HTMLInputElement;
      if (inputLabel === 'group') {
        setGroup(element.value);
      }
      setFilterBy(inputLabel);
      setFilterValue(element.value);
    };

  return (
    <Wrapper>
      <Toolbar className='table-toolbar'>
        <LocalizationProvider dateAdapter={DateAdapter} className='table-toolbar-date-inputs'>
          <DesktopDatePicker
            label='Start'
            inputFormat='MM/DD/yyyy'
            value={startTime}
            onChange={handleChangeStartDate}
            renderInput={(params) => <TextField {...params} className='date-picker-text-field' />}
          />
          <DesktopDatePicker
            label='End'
            inputFormat='MM/DD/yyyy'
            value={endTime}
            onChange={handleChangeEndDate}
            renderInput={(params) => <TextField {...params} className='date-picker-text-field' />}
          />
        </LocalizationProvider>
        <FormControl className='select-input'>
          <InputLabel id='demo-simple-select-label'>Group</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={group}
            label='Group'
            onChange={handleChangeFilterBy('group')}>
            <MenuItem value='Históricos'>Históricos</MenuItem>
            <MenuItem value='Poéticos'>Poéticos</MenuItem>
            <MenuItem value='Profetas maiores'>Profetas maiores</MenuItem>
            <MenuItem value='All'>All</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id='standard-basic'
          label='Name'
          variant='standard'
          onChange={handleChangeFilterBy('name')}
        />
        <TextField
          id='standard-basic'
          label='Author'
          variant='standard'
          onChange={handleChangeFilterBy('author')}
        />
      </Toolbar>
    </Wrapper>
  );
};

export default EnhancedTableToolbar;
