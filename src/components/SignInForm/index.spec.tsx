import React from 'react';
import { Provider } from 'react-redux';
import SignInForm from './index';
import configureStore from 'redux-mock-store';
import { fireEvent, render, waitFor } from '@testing-library/react';

describe('SighInForm component', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store, wrapper;

  it('The form should contain all the necessary input fields and buttons', () => {
    store = mockStore(initialState);
    const component = render(
      <Provider store={store}>
        <SignInForm />
      </Provider>,
    );
    const emailInput = component.getByPlaceholderText('e-mail');
    const passwordInput = component.getByPlaceholderText('password');
    const submitButton = component.getByDisplayValue('Sign In');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('When submitting a form with empty fields, shuld show a warning text', async () => {
    store = mockStore(initialState);
    const component = render(
      <Provider store={store}>
        <SignInForm />
      </Provider>,
    );
    const form = component.getByTestId('form-container');
    fireEvent.submit(form);
    await waitFor(() =>
      expect(component.getByText('email is a required field')).toBeInTheDocument(),
    );
    await waitFor(() =>
      expect(component.getByText('password is a required field')).toBeInTheDocument(),
    );
  });

  it('When submitting a form email should be correct, and password input should be not empty', async () => {
    store = mockStore(initialState);
    const component = render(
      <Provider store={store}>
        <SignInForm />
      </Provider>,
    );
    const form = component.getByTestId('form-container');
    const emailInput = component.getByPlaceholderText('e-mail');

    fireEvent.change(emailInput, { target: { value: 'test' } });
    fireEvent.submit(form);
    await waitFor(() =>
      expect(component.getByText('email must be a valid email')).toBeInTheDocument(),
    );
    await waitFor(() =>
      expect(component.getByText('password is a required field')).toBeInTheDocument(),
    );
  });
  it('When submitting a form correct email and password should not show error messages', async () => {
    store = mockStore(initialState);
    const component = render(
      <Provider store={store}>
        <SignInForm />
      </Provider>,
    );
    const form = component.getByTestId('form-container');
    const emailInput = component.getByPlaceholderText('e-mail');
    const passwordInput = component.getByPlaceholderText('password');

    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    fireEvent.submit(form);
    await waitFor(() =>
      expect(component.queryByText('email must be a valid email')).not.toBeInTheDocument(),
    );
    await waitFor(() =>
      expect(component.queryByText('password is a required field')).not.toBeInTheDocument(),
    );
  });
});
