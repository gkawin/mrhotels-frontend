
import React from 'react'
import { Form, FormInput } from '.'

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
        <FormInput
          type='text'
          name='storybookInput'
          onChange={() => {}}
        />
      </Form>
    </FrontPageSimulator>
  ),

}
