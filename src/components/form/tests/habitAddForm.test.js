import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HabitAddForm from '../habitAddForm';
import renderer from 'react-test-renderer';

describe('HabitAddForm', () => {
  it('renders', () => {
    // 스냅샷 테스트를 실행
    const component = renderer.create(<HabitAddForm onAdd={jest.fn()} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  describe('Form Submit', () => {
    let onAdd;
    let input;
    let button;

    beforeEach(() => {
      onAdd = jest.fn();
      render(<HabitAddForm onAdd={onAdd} />);
      input = screen.getByPlaceholderText('Enter Habit');
      button = screen.getByText('Add');
    });

    it('calls onAdd when button is clicked and valid habit is entered', () => {
      // given
      // render(<HabitAddForm onAdd={onAdd} />);
      // const input = screen.getByPlaceholderText('Enter Habit');
      // const button = screen.getByText('Add');

      // when
      // input에다 원하는 습관 이름을 타이핑 한 다음
      // add 라는 버튼 클릭하면
      userEvent.type(input, 'New Habit');
      userEvent.click(button);

      // then
      // onAdd가 input에 입력된 이름과 함께 호출된다.
      expect(onAdd).toHaveBeenCalledWith('New Habit');
    });

    it('does not call onAdd when the habit is empty', () => {
      // userEvent.type(input, '');
      userEvent.clear(input);
      userEvent.click(button);

      expect(onAdd).toHaveBeenCalledTimes(0);
    });
  });
});
