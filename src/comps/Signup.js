import React, {useRef, useState} from 'react';
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth} from '../context/AuthContext';


const Signup = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

 async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value){
        return setError("password does not match")
    }

    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError("Cannot create account")
    }
    setLoading(false)
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {JSON.stringify(currentUser)}
  {error && <Alert variant="danger" >{error}</Alert>}
          <Form  onSubmit={handleSubmit}>
            <Form.Group id="email">
              <p>Email</p>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <p>Password</p>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <p>Password Confirmation</p>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading}  className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? Log In
      </div>
    </>
  )
}

export default Signup
