
import React from 'react'
import { Form, FormInput, FormRow } from '.'

export { module }

const FrontPageSimulator = ({children}) => (
  <div
    style={{
      position: 'relative',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <div style={{backgroundColor: 'white', padding: '15px'}}>{children}</div>
  </div>
)

FrontPageSimulator.propTypes = {
  children: React.PropTypes.node
}

export const stories = {
  'Whole Form Elements': () => (
    <FrontPageSimulator>
      <Form>
        <FormRow>
          <FormInput
            type='text'
            name='storybookInput'
            placeholder='common text'
            onChange={() => {}}
          />
        </FormRow>
        <FormRow>
          <FormInput
            type='password'
            placeholder='password field'
            name='storybookInput'
            onChange={() => {}}
          />
        </FormRow>
      </Form>
    </FrontPageSimulator>
  ),

}
