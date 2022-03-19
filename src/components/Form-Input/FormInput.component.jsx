import React from 'react'
import { FormGroup, Input } from 'reactstrap';
import './FormInput.styles.scss'
const FormInput = ({ type, name, placeholder, maxlength }) => {
    return (
        <div className='Input'>
            <FormGroup>
                <Input type={type} name={name} placeholder={placeholder} className='input' maxlength={maxlength} />
            </FormGroup>
        </div>
    )
}

export default FormInput;