// // import React, { Component } from 'react'
// // import { Menu } from 'semantic-ui-react'
// // //import { Link } from 'react-router-dom'

// // export default class MenuExampleInverted extends Component {
// //   state = { activeItem: 'HOME' }

// //   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

// //   render() {
// //     const { activeItem } = this.state
// //     const menuElement = [
// //       "HOME", "CONTENT", "CONTACT", "BLOG"
// //     ];

// //     return (
// //       <Menu inverted>
// //       {menuElement.map((menuItems, i) => (
// //         <Menu.Item key = {i} name={menuItems} active= {menuItems = activeItem ? true : false} onClick={this.handleItemClick} />
// //         ))
// //       }
       
// //       </Menu>
// //     )
// //   }
// // }
// import React, { Component } from 'react'
// import { Menu, Segment } from 'semantic-ui-react'
// //import { Link } from 'react-router-dom'

// export default class MenuExampleInvertedSegment extends Component {
//   state = { activeItem: 'Home' }

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

//   render() {
//     const { activeItem } = this.state

//     return (
//       <Segment inverted>
//         <Menu inverted secondary>
//           <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
//           <Menu.Item
//             name='Content'
//             active={activeItem === 'Content'}
//             onClick={this.handleItemClick}
          
//           />
//           <Menu.Item
//             name='Contact'
//             active={activeItem === 'Contact'}
//             onClick={this.handleItemClick}
//           />
//           <Menu.Item
//             name='Blog'
//             active={activeItem === 'Blog'}
//             onClick={this.handleItemClick}
//           />
//         </Menu>
//       </Segment>
//     )
//   }
// }
import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import Blog from './Container';
const LoginForm = () => (
  <div className='login-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src='./../img1.jpg' /> Log-in to your account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' required/>
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              required
            />

            <Button color='teal' fluid size='large'>
              <a href='Blog'>Login</a>
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href='Blog'>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)

export default LoginForm
