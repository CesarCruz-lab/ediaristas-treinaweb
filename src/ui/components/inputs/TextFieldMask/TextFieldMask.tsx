import React from 'react'
import InputMask from 'react-input-mask'
import TextField from 'ui/components/inputs/TextField/TextField'
import { OutlinedTextFieldProps } from '@material-ui/core'

export interface TextFieldMaskProps extends OutlinedTextFieldProps {
	mask: string
}

const TextFieldMask: React.FC<TextFieldMaskProps> = (props) => {
	const { mask, value, onChange, ...remainingProps } = props
	
	return (
		<InputMask mask={mask} value={value} onChange={onChange}>
			{() => (
				<TextField {...remainingProps} />
			)}
		</InputMask>
	)
}

export default TextFieldMask
