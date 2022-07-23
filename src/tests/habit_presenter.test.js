import HabitPresenter from '../habit_presenter.js';

describe('HabitPresenter', () => {
  const habits = [
    { id: 1, name: 'Reading', count: 1 },
    { id: 2, name: 'Running', count: 0 },
  ];

  let presenter;
  let update;

  beforeEach(() => {
    // 초기화
    presenter = new HabitPresenter(habits, 3);
    update = jest.fn(); // mock 함수 이용
  });

  it('inits with habits', () => {
    expect(presenter.getHabits()).toEqual(habits);
  });

  it('increments habit count and call update callback', () => {
    presenter.increment(habits[0], update);

    expect(presenter.getHabits()[0].count).toBe(2);
    checkUpdateIsCalled();
  });

  it('decrements habit count and call update callback', () => {
    presenter.decrement(habits[0], update);

    expect(presenter.getHabits()[0].count).toBe(0);
    checkUpdateIsCalled();
  });

  it('does not set the count value below 0 when decrements', () => {
    presenter.decrement(habits[0], update);
    presenter.decrement(habits[0], update);

    expect(presenter.getHabits()[0].count).toBe(0);
  });

  it('deletes habits from the list and call update callback', () => {
    presenter.delete(habits[0], update);

    expect(presenter.getHabits().length).toBe(1);
    expect(presenter.getHabits()[0].name).toBe('Running');
    checkUpdateIsCalled();
  });

  it('adds habits from the list and call update callback', () => {
    presenter.add('Hiking', update);

    expect(presenter.getHabits().length).toBe(3);
    expect(presenter.getHabits()[2].name).toBe('Hiking');
    expect(presenter.getHabits()[2].count).toBe(0);
    checkUpdateIsCalled();
  });

  it('throws an error when the max habits limit is exceeded', () => {
    presenter.add('Hiking', update);

    expect(() => {
      presenter.add('Hiking', update);
    }).toThrow('습관의 갯수는 3 이상이 될 수 없습니다.');
  });

  describe('reset', () => {
    it('set all habits counts to 0', () => {
      presenter.reset(update);

      expect(presenter.getHabits().length).toBe(2);
      expect(presenter.getHabits()[0].count).toBe(0);
      expect(presenter.getHabits()[1].count).toBe(0);
      checkUpdateIsCalled();
    });

    it('does not create new object when count is 0', () => {
      const habits = presenter.getHabits();
      presenter.reset(update);
      const updatedHabits = presenter.getHabits();

      expect(updatedHabits[1]).toBe(habits[1]);
      // toEqual()을 했다면 값만 검사함
      // toBe()는 object의 참조값을 검사하여 객체가 새로 생성되었다면 ref가 변하여 같다고 나오지 않을것
    });
  });

  function checkUpdateIsCalled() {
    expect(update).toHaveBeenCalledTimes(1);
    // 호출될때 presenter에서 가지고 있는 habits이 잘 전달 되었는지 확인
    expect(update).toHaveBeenCalledWith(presenter.getHabits());
  }
});
