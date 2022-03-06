import React from 'react';
import { Provider } from 'react-redux';
import Table from './index';
import configureStore from 'redux-mock-store';
import { fireEvent, render, waitFor } from '@testing-library/react';

describe('Table component', () => {
  const initialState = {
    user: {
      data: {
        name: 'korolvitalii',
        email: 'korolvitalii@gmail.com',
        lastLogin: '2022-02-22T19:36:32.468Z',
        notifications: true,
      },
      status: 'LOADED',
    },
    items: {
      data: [
        {
          abbrev: {
            pt: 'gn',
            en: 'gn',
          },
          author: 'Moisés',
          chapters: 50,
          group: 'Pentateuco',
          name: 'Gênesis',
          testament: 'VT',
          timestamp: '11/25/2020',
        },
        {
          abbrev: {
            pt: 'ex',
            en: 'ex',
          },
          author: 'Moisés',
          chapters: 40,
          group: 'Pentateuco',
          name: 'Êxodo',
          testament: 'VT',
          timestamp: '11/10/2021',
        },
        {
          abbrev: {
            pt: 'lv',
            en: 'lv',
          },
          author: 'Moisés',
          chapters: 27,
          group: 'Pentateuco',
          name: 'Levítico',
          testament: 'VT',
          timestamp: '02/20/2022',
        },
        {
          abbrev: {
            pt: 'nm',
            en: 'nm',
          },
          author: 'Moisés',
          chapters: 36,
          group: 'Pentateuco',
          name: 'Números',
          testament: 'VT',
          timestamp: '11/20/2021',
        },
      ],
    },
  };

  const mockStore = configureStore();
  let store, wrapper;

  it('The table should contain the head toolbar and body', async () => {
    store = mockStore(initialState);
    const component = render(
      <Provider store={store}>
        <Table />
      </Provider>,
    );
    const table = component.getByRole('table');
    const thead = component.container.querySelector('thead');
    const tbody = component.container.querySelector('tbody');
    const trow = component.container.querySelector('tr');
    expect(table).toBeInTheDocument();
    expect(thead).toBeInTheDocument();
    expect(tbody).toBeInTheDocument();
    expect(trow).toBeInTheDocument();
  });

  it('The table must contain the correct number of rows', async () => {
    store = mockStore(initialState);
    const component = render(
      <Provider store={store}>
        <Table />
      </Provider>,
    );
    const rows = component.getAllByTestId('table-row');
    expect(rows.length).toBe(4);
  });
  it("When the first letter is entered in the 'Name' field, the lines must be of the correct length.", async () => {
    store = mockStore(initialState);
    const component = render(
      <Provider store={store}>
        <Table />
      </Provider>,
    );
    const inputByName = component.getByLabelText('Name');
    fireEvent.change(inputByName, { target: { value: 'L' } });
    await waitFor(() => {
      const rows = component.getAllByTestId('table-row');
      expect(rows.length).toBe(1);
    });
  });
  it("When the first letter is entered in the 'Author' field, the lines must be of the correct length.", async () => {
    store = mockStore(initialState);
    const component = render(
      <Provider store={store}>
        <Table />
      </Provider>,
    );
    const inputByName = component.getByLabelText('Author');
    fireEvent.change(inputByName, { target: { value: 'M' } });
    await waitFor(() => {
      const rows = component.getAllByTestId('table-row');
      expect(rows.length).toBe(4);
    });
  });
  it('When entered the time should be correct rows length.', async () => {
    store = mockStore(initialState);
    const component = render(
      <Provider store={store}>
        <Table />
      </Provider>,
    );
    const inputStartTime = component.getByLabelText('Start');
    const inputEndTime = component.getByLabelText('End');

    fireEvent.change(inputStartTime, { target: { value: '01.01.2021' } });
    fireEvent.change(inputEndTime, { target: { value: '12.31.2021' } });

    await waitFor(() => {
      const rows = component.getAllByTestId('table-row');
      expect(rows.length).toBe(2);
    });
  });
  it('When entered the time should be correct rows length.', async () => {
    store = mockStore(initialState);
    const component = render(
      <Provider store={store}>
        <Table />
      </Provider>,
    );
    const inputStartTime = component.getByLabelText('Start');
    const inputEndTime = component.getByLabelText('End');

    fireEvent.change(inputStartTime, { target: { value: '01.01.2022' } });
    fireEvent.change(inputEndTime, { target: { value: '12.31.2022' } });

    await waitFor(() => {
      const rows = component.getAllByTestId('table-row');
      expect(rows.length).toBe(1);
    });
  });
});
