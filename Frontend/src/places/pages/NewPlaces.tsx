import React from 'react'
import './NewPlaces.css'
import Input from '../../shared/components/FormElements/Input'

const NewPlaces: React.FC = () => {
  return <form className='place-form'>
    <Input type="text" label="Title" validators={[]} errorText="Please enter a valid text" />
  </form>
}

export default NewPlaces;
